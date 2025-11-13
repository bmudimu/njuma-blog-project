// app/contact/page.tsx
"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const fullName = (fd.get("fullName") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();
    const subject = (fd.get("subject") as string)?.trim();
    const message = (fd.get("message") as string)?.trim();
    const website = (fd.get("website") as string)?.trim(); // honeypot

    // simple validation
    if (website) return; // bot
    if (!fullName || !email || !message) {
      setError("Name, email, and message are required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, subject, message }),
      });

      if (res.ok) {
        setState("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const txt = await res.text();
        throw new Error(txt || "Failed to send");
      }
    } catch (err: any) {
      setState("error");
      setError(err?.message ?? "Something went wrong.");
    } finally {
      setTimeout(() => setState("idle"), 3000); // auto-reset submit state
    }
  }

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <Container className="py-10">
        <header className="mb-6">
          <p className="font-heading text-small uppercase tracking-wide text-[var(--primary)] mb-2">Contact</p>
          <h1 className="font-heading text-h1 font-semibold tracking-tight">Let’s work together</h1>
          <p className="mt-2 font-body text-small text-slate-400">
            Brief me on your project or question. I’ll respond with next steps.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[1fr_320px]">
          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="grid gap-4">
              <div>
                <label className="block font-body text-small mb-1">Full name *</label>
                <input
                  name="fullName"
                  required
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block font-body text-small mb-1">Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block font-body text-small mb-1">Subject</label>
                <input
                  name="subject"
                  placeholder="e.g., Mini dashboard, OTB help, Blog collab"
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block font-body text-small mb-1">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="A short brief: goals, data source, deadline, budget range if known."
                  className="w-full resize-y rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-[var(--primary)]"
                />
              </div>

              {/* honeypot */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="min-w-32"
                  disabled={state === "submitting"}
                >
                  {state === "submitting" ? "Sending…" : "Send message"}
                </Button>

                {/* Mailto fallback */}
                <a
                  href={`mailto:info@yourdomain.com?subject=${encodeURIComponent(
                    "Project brief"
                  )}`}
                  className="font-body text-sm text-[var(--primary)] hover:opacity-80"
                >
                  or email: info@yourdomain.com →
                </a>
              </div>

              {/* Status */}
              {state === "success" && (
                <div className="rounded-md border border-[color:rgb(34_197_94/0.5)] bg-[color:rgb(34_197_94/0.08)] px-3 py-2 text-sm">
                  Thanks — I’ll reply shortly.
                </div>
              )}
              {state === "error" && (
                <div className="rounded-md border border-[color:rgb(239_68_68/0.5)] bg-[color:rgb(239_68_68/0.08)] px-3 py-2 text-sm">
                  {error}
                </div>
              )}
            </div>
          </form>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <h2 className="font-heading text-h4 font-semibold mb-2">Contact details</h2>
              <ul className="space-y-2 font-body text-small text-slate-400">
                <li><span className="text-[var(--text)] font-medium">Email:</span> info@yourdomain.com</li>
                <li><span className="text-[var(--text)] font-medium">Phone:</span> +1 (234) 567 8910</li>
                <li><span className="text-[var(--text)] font-medium">Location:</span> Gaborone, Botswana</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <h2 className="font-heading text-h4 font-semibold mb-2">Typical mini-gig scope</h2>
              <ul className="list-disc pl-5 font-body text-small text-slate-400 space-y-1">
                <li>Quick audit of a dashboard or model</li>
                <li>EDA + 1–2 key visuals</li>
                <li>Excel/Power BI tune-ups</li>
                <li>Python automation for a report</li>
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
