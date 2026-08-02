"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "@/lib/dict.en";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgqwdvq";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Both contact forms on the site. `home` shows the three intent chips above a
 * short form; `services` is the longer qualification form at the bottom of
 * /services. Everything posts to the same Formspree endpoint, with a honeypot
 * field Formspree uses to silently drop bot submissions.
 */
export default function ContactForm({
  t,
  variant,
}: {
  t: Dict;
  variant: "home" | "services";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [intent, setIntent] = useState(0);

  const intents = [t["ct.i1"], t["ct.i2"], t["ct.i3"]];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    if (variant === "home") data.set("intent", intents[intent]);

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

  if (status === "sent") {
    return (
      <div
        className="sent"
        style={{ marginTop: 32, maxWidth: 620, marginLeft: variant === "services" ? "auto" : 0, marginRight: variant === "services" ? "auto" : 0 }}
        role="status"
      >
        <h3>{t["form.sent.h"]}</h3>
        <p>{t["form.sent.p"]}</p>
      </div>
    );
  }

  const honeypot = (
    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
  );

  const error =
    status === "error" ? (
      <p className="err" role="alert">
        {t["form.err"]}
      </p>
    ) : null;

  if (variant === "home") {
    return (
      <>
        <div className="intent" role="group">
          {intents.map((label, i) => (
            <button key={i} type="button" aria-pressed={i === intent} onClick={() => setIntent(i)}>
              {label}
            </button>
          ))}
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="h-name">{t["ct.f1"]}</label>
            <input id="h-name" name="name" type="text" required placeholder={t["form.ph.name"]} />
          </div>
          <div>
            <label htmlFor="h-email">{t["ct.f2"]}</label>
            <input id="h-email" name="email" type="email" required placeholder={t["form.ph.email"]} />
          </div>
          <div>
            <label htmlFor="h-msg">{t["ct.f3"]}</label>
            <textarea id="h-msg" name="message" required placeholder={t["form.ph.msg"]} />
          </div>
          {honeypot}
          {error}
          <button className="btn btn-primary" type="submit" disabled={status === "sending"} style={{ justifySelf: "start" }}>
            <span>{status === "sending" ? t["form.sending"] : t["ct.send"]}</span> →
          </button>
        </form>
      </>
    );
  }

  return (
    <form className="form" style={{ margin: "32px auto 0", textAlign: "left" }} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="s-name">{t["s.end.f1"]}</label>
        <input id="s-name" name="name" type="text" required placeholder={t["form.ph.name"]} />
      </div>
      <div>
        <label htmlFor="s-email">{t["s.end.f2"]}</label>
        <input id="s-email" name="email" type="email" required placeholder={t["form.ph.email"]} />
      </div>
      <div>
        <label htmlFor="s-who">{t["s.end.f3"]}</label>
        <select id="s-who" name="situation" defaultValue={t["s.end.o1"]}>
          <option>{t["s.end.o1"]}</option>
          <option>{t["s.end.o2"]}</option>
          <option>{t["s.end.o3"]}</option>
          <option>{t["s.end.o4"]}</option>
        </select>
      </div>
      <div>
        <label htmlFor="s-msg">{t["s.end.f4"]}</label>
        <textarea id="s-msg" name="message" required placeholder={t["form.ph.msg"]} />
      </div>
      <div>
        <label htmlFor="s-budget">{t["s.end.f5"]}</label>
        <select id="s-budget" name="budget" defaultValue={t["s.end.b0"]}>
          <option>{t["s.end.b0"]}</option>
          <option>&lt; 10.000 €</option>
          <option>10.000 – 25.000 €</option>
          <option>25.000 – 50.000 €</option>
          <option>&gt; 50.000 €</option>
        </select>
      </div>
      {honeypot}
      {error}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"} style={{ justifySelf: "start" }}>
        <span>{status === "sending" ? t["form.sending"] : t["s.end.send"]}</span> →
      </button>
    </form>
  );
}
