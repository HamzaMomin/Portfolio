const COUNTER_URL = "https://abacus.jasoncameron.dev";
const COUNTER_KEY = "hamzamomin.com/portfolio-likes";
const VISITOR_KEY = "hm-visitor-id";
const LIKED_KEY = "hm-portfolio-liked";
const YEAR_SECONDS = 60 * 60 * 24 * 365;

function readCookie(name: string) {
  const prefix = `${name}=`;
  const match = document.cookie.split("; ").find((row) => row.startsWith(prefix));
  return match ? decodeURIComponent(match.slice(prefix.length)) : null;
}

function writeCookie(name: string, value: string) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${YEAR_SECONDS}; Path=/; SameSite=Lax${secure}`;
}

/** Copies a value saved before cookies were used, then forgets the old copy. */
function readStored(name: string) {
  const fromCookie = readCookie(name);
  if (fromCookie) return fromCookie;
  const fromStorage = localStorage.getItem(name);
  if (!fromStorage) return null;
  writeCookie(name, fromStorage);
  localStorage.removeItem(name);
  return fromStorage;
}

export function getVisitorId() {
  const existing = readStored(VISITOR_KEY);
  if (existing) return existing;
  const id = crypto.randomUUID();
  writeCookie(VISITOR_KEY, id);
  return id;
}

export function hasLiked() {
  return readStored(LIKED_KEY) === getVisitorId();
}

async function readCount(path: "get" | "hit") {
  const response = await fetch(`${COUNTER_URL}/${path}/${COUNTER_KEY}`);
  if (!response.ok) throw new Error("Like count failed");
  const data = (await response.json()) as { value?: number };
  return Number(data.value ?? 0);
}

export function fetchLikeCount() {
  return readCount("get");
}

let likeRequest: Promise<number> | null = null;

/** Counts this browser once. A second click from the same browser does not add another like. */
export function addUniqueLike() {
  const visitorId = getVisitorId();
  if (readStored(LIKED_KEY) === visitorId) {
    return fetchLikeCount();
  }
  if (likeRequest) return likeRequest;

  likeRequest = readCount("hit")
    .then((count) => {
      writeCookie(LIKED_KEY, visitorId);
      return count;
    })
    .finally(() => {
      likeRequest = null;
    });

  return likeRequest;
}
