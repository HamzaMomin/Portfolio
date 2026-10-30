import resumePdf from "../../public/Hamza-Momin-Web-Developer-Resume.pdf";

interface Env {
  RESEND_API_KEY: string;
  MAIL_FROM: string;
  CONTACT_TO: string;
  RESUME_PDF_URL: string;
}

const ALLOWED_ORIGINS = new Set([
  "https://hamzamomin.com",
  "https://www.hamzamomin.com",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
]);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") ?? "";

    if (request.method === "OPTIONS") {
      return withCors(new Response(null, { status: 204 }), origin);
    }
    if (request.method !== "POST") {
      return withCors(json({ error: "Method not allowed" }, 405), origin);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return withCors(json({ error: "Invalid JSON" }, 400), origin);
    }

    const path = new URL(request.url).pathname.replace(/\/$/, "");
    const response = path.endsWith("/resume")
      ? await sendResume(body, env)
      : path.endsWith("/contact")
        ? await sendContact(body, env)
        : json({ error: "Not found" }, 404);

    return withCors(response, origin);
  },
};

async function sendResume(body: unknown, env: Env) {
  const email = readString(body, "email");
  if (!isEmail(email)) return json({ error: "A valid email is required" }, 400);

  const notice = await send(env, {
    from: env.MAIL_FROM,
    to: [env.CONTACT_TO],
    reply_to: email,
    subject: "Resume request",
    html: `<p><strong>${escapeHtml(email)}</strong> asked for your resume.</p>`,
  });
  if (notice.status !== 200) return notice;

  return send(env, {
    from: env.MAIL_FROM,
    to: [email],
    reply_to: env.CONTACT_TO,
    subject: "Hamza Momin — Resume",
    html: "<p>Thanks for asking. My resume is attached.</p><p>— Hamza</p>",
    attachments: [
      {
        filename: "Hamza-Momin-Web-Developer-Resume.pdf",
        content: bytesToBase64(resumePdf),
      },
    ],
  });
}

async function sendContact(body: unknown, env: Env) {
  const name = readString(body, "name").slice(0, 120);
  const email = readString(body, "email");
  const message = readString(body, "message").slice(0, 5000);
  if (!name || !isEmail(email) || !message) {
    return json({ error: "Name, email, and message are required" }, 400);
  }

  return send(env, {
    from: env.MAIL_FROM,
    to: [env.CONTACT_TO],
    reply_to: email,
    subject: `Portfolio note from ${name}`,
    html: `<p><strong>${escapeHtml(name)}</strong> (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
  });
}

async function send(env: Env, payload: Record<string, unknown>) {
  if (!env.RESEND_API_KEY) return json({ error: "Mail is not configured" }, 500);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const detail = await response.text();
    return json({ error: "Could not send email", detail: detail.slice(0, 300) }, 502);
  }
  return json({ ok: true }, 200);
}

function bytesToBase64(data: ArrayBuffer) {
  const bytes = new Uint8Array(data);
  let binary = "";
  const chunkSize = 0x2000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function readString(body: unknown, key: string) {
  if (!body || typeof body !== "object" || !(key in body)) return "";
  const value = (body as Record<string, unknown>)[key];
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const escaped: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return escaped[char];
  });
}

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function withCors(response: Response, origin: string) {
  const headers = new Headers(response.headers);
  if (ALLOWED_ORIGINS.has(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Vary", "Origin");
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
  }
  return new Response(response.body, { status: response.status, headers });
}
