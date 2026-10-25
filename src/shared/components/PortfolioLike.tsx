import { useEffect, useState } from "react";
import { addUniqueLike, fetchLikeCount, hasLiked } from "../../lib/portfolioLikes";

export default function PortfolioLike() {
  const [shown, setShown] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setLiked(hasLiked());
    fetchLikeCount()
      .then(setCount)
      .catch(() => setCount(null));
    const timer = window.setTimeout(() => setShown(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const like = async () => {
    if (liked || busy) return;
    setBusy(true);
    try {
      const next = await addUniqueLike();
      setLiked(hasLiked());
      setCount(next);
    } catch {
      setBusy(false);
    }
  };

  if (!shown) return null;

  return (
    <div className="portfolio-like fixed bottom-4 right-4 z-40">
      <button
        type="button"
        className="neo-pill bg-[#d7e9ff] px-3 py-2 text-xs"
        aria-pressed={liked}
        disabled={liked || busy}
        onClick={like}
      >
        {liked ? "Liked" : "Like my portfolio?"}
        <span className="ml-2 border-l-2 border-black pl-2">{count ?? "…"}</span>
      </button>
    </div>
  );
}
