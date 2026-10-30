import { useEffect, useId, useState, type FormEvent } from "react";
import { sendResume } from "../../lib/mail";

interface ResumeDialogProps {
  onClose: () => void;
}

export default function ResumeDialog({ onClose }: ResumeDialogProps) {
  const titleId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const sendResumeRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    sendResume(email).then(
      () => setStatus("sent"),
      () => setStatus("error"),
    );
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="neo-card w-full max-w-md bg-white p-6 text-left"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id={titleId} className="text-2xl font-black text-black">
          Resume
        </h2>
        <p className="mt-4 text-lg font-medium text-black">
          A recruiter asked for a one-page resume. I sent a pixel. They wrote
          back: “Can it scale?”
        </p>
        <p className="mt-3 font-medium text-black">
          Leave your email and I’ll send the real one.
        </p>

        {status === "sent" ? (
          <p className="mt-6 font-bold text-black">Got it. I’ll send it over.</p>
        ) : (
          <form onSubmit={sendResumeRequest} className="mt-6">
            <label className="block text-sm font-bold text-black">
              Email
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full border-2 border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0_0_#000] outline-none"
              />
            </label>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="neo-pill bg-section-reviews text-sm text-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send it over"}
              </button>
              <button type="button" onClick={onClose} className="neo-pill text-sm">
                Close
              </button>
            </div>
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-700">
                Something went wrong. Email info@hamzamomin.com instead.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
