"use client";

import { useState, type FormEvent } from "react";
import SocialLinks from "./SocialLinks";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgqwdvq";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-content px-8 py-[100px] text-center">
      <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">Contact</p>
      <h2 className="mb-3 font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
        Let&rsquo;s build something.
      </h2>
      <p className="mx-auto mb-10 max-w-[46ch] text-[16px] leading-relaxed text-text-muted">
        Have a project or role in mind? Send a note and I&rsquo;ll get back to you.
      </p>

      <div className="mx-auto max-w-[610px] rounded-2xl border border-border bg-surface p-8 text-left shadow-token">
        {status === "sent" ? (
          <div className="py-10 text-center">
            <p className="mb-1 font-display text-[19px] font-bold">Thanks — message sent.</p>
            <p className="text-[15px] text-text-muted">I&rsquo;ll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-[14px] font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-border bg-bg-alt px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[14px] font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-border bg-bg-alt px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-[14px] font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-y rounded-lg border border-border bg-bg-alt px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted"
              />
            </div>

            {status === "error" && (
              <p className="text-[14px] text-red-500" role="alert">
                Something went wrong sending your message. Please try again, or email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-fit rounded-xl bg-accent px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>

      <div className="mt-8 flex flex-col items-center gap-2.5">
        <p className="text-[14px] text-text-muted">Or connect with me</p>
        <SocialLinks />
      </div>
    </section>
  );
}
