"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Send } from "lucide-react";

import { CONTACT } from "@/constants/site";
import { SOCIALS } from "@/data/profile";
import { useI18n } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/animations/Reveal";
import { UiIcon } from "@/components/common/Icon";
import { QueryHeading } from "@/components/common/QueryHeading";
import { cn } from "@/lib/utils";

type FormState = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const { t } = useI18n();
  const [form, setForm] = React.useState<FormState>(EMPTY);
  const [errors, setErrors] = React.useState<Errors>({});
  const [sent, setSent] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = t.contact.form.errors.required;
    if (!values.email.trim()) next.email = t.contact.form.errors.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = t.contact.form.errors.invalidEmail;
    if (!values.message.trim()) next.message = t.contact.form.errors.required;
    return next;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend needed: compose the message and hand off to the mail client.
    const subject = encodeURIComponent(
      form.subject || `${t.contact.form.defaultSubject} ${form.name}`,
    );
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 6000);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked in insecure contexts — the mailto link still works.
    }
  }

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <div className="shell py-16 sm:py-20 xl:pl-[calc(var(--rail-w)-4rem)]">
      <QueryHeading
        query={t.contact.query}
        meta={t.contact.meta}
        title={t.contact.title}
        accentWord={t.contact.accent}
        lede={t.contact.lede}
      />

      <div className="mt-14 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-[0.8fr_1.2fr]">
        {/* Details */}
        <Reveal direction="none" className="bg-[color:var(--surface)] p-7 sm:p-9">
          <p className="mono-label">{t.contact.directLabel}</p>

          <div className="mt-4 flex items-center gap-2 border border-[color:var(--line)] p-2 pl-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex-1 truncate font-mono text-[13px] transition-colors hover:text-[color:var(--accent)]"
            >
              {CONTACT.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={t.contact.copyEmail}
              className="flex size-9 shrink-0 items-center justify-center border border-[color:var(--line)] transition-colors hover:border-[color:var(--accent)]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "check" : "copy"}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                >
                  {copied ? (
                    <Check className="size-4 text-[color:var(--accent)]" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          <dl className="mt-8 border-t border-[color:var(--line)]">
            {[
              { label: t.contact.phone, value: CONTACT.phone, href: CONTACT.phoneHref },
              { label: t.contact.location, value: t.contact.locationValue },
              { label: t.contact.timezone, value: CONTACT.timezone },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 border-b border-[color:var(--line)] py-3.5"
              >
                <dt className="mono-label">{row.label}</dt>
                <dd className="text-[14px] font-medium">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="transition-colors hover:text-[color:var(--accent)]"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mono-label mt-8">{t.contact.profilesLabel}</p>
          <ul className="mt-3 flex flex-col">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-b border-[color:var(--line)] py-3 text-[14px] transition-colors hover:text-[color:var(--accent)]"
                >
                  <UiIcon name={social.icon} className="size-3.5" aria-hidden />
                  <span className="font-medium">{social.label}</span>
                  <span className="ml-auto truncate font-mono text-[11px] text-[color:var(--fg-faint)]">
                    {social.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Form */}
        <Reveal direction="none" className="bg-[color:var(--surface)] p-7 sm:p-9">
          <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                id="name"
                label={t.contact.form.name}
                value={form.name}
                error={errors.name}
                onChange={(v) => update("name", v)}
                placeholder={t.contact.form.namePlaceholder}
                autoComplete="name"
              />
              <Field
                id="email"
                label={t.contact.form.email}
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => update("email", v)}
                placeholder={t.contact.form.emailPlaceholder}
                autoComplete="email"
              />
            </div>

            <Field
              id="subject"
              label={t.contact.form.subject}
              optional
              optionalLabel={t.contact.form.optional}
              value={form.subject}
              onChange={(v) => update("subject", v)}
              placeholder={t.contact.form.subjectPlaceholder}
            />

            <Field
              id="message"
              label={t.contact.form.message}
              multiline
              value={form.message}
              error={errors.message}
              onChange={(v) => update("message", v)}
              placeholder={t.contact.form.messagePlaceholder}
            />

            <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-1"
                style={{ background: "var(--accent)", color: "var(--on-accent)" }}
              >
                <Send className="size-4" aria-hidden />
                {t.contact.form.send}
              </button>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    role="status"
                    className="text-[13px] text-[color:var(--accent)]"
                  >
                    {t.contact.form.sent}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <p className="text-[11px] leading-relaxed text-[color:var(--fg-faint)]">
              {t.contact.form.disclaimer}
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  multiline = false,
  optional = false,
  optionalLabel,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  optional?: boolean;
  optionalLabel?: string;
  autoComplete?: string;
}) {
  const base = cn(
    "w-full border-0 border-b bg-transparent px-0 py-2.5 text-[15px] outline-none transition-colors placeholder:text-[color:var(--fg-faint)]",
    error
      ? "border-b-red-500 focus:border-b-red-500"
      : "border-b-[color:var(--line)] focus:border-b-[color:var(--accent)]",
  );

  return (
    <div className={multiline ? "flex flex-1 flex-col" : undefined}>
      <label htmlFor={id} className="mono-label">
        {label}
        {optional && <span className="ml-1.5 normal-case opacity-60">{optionalLabel}</span>}
      </label>

      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(base, "mt-1 min-h-28 flex-1 resize-y")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(base, "mt-1")}
        />
      )}

      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
