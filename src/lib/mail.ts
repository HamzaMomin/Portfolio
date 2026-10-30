const MAIL_API = import.meta.env.VITE_MAIL_API ?? "/api";

async function postMail(path: string, body: unknown) {
  const response = await fetch(`${MAIL_API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error("Mail failed");
}

export function sendResume(email: string) {
  return postMail("/resume", { email });
}

export function sendContact(input: { name: string; email: string; message: string }) {
  return postMail("/contact", input);
}
