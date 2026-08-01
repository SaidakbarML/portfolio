"use client";

import { ArrowUpRight } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

import { NAV_ITEMS } from "@/constants/navigation";
import { CONTACT, SITE } from "@/constants/site";
import { SOCIALS } from "@/data/profile";
import { UiIcon } from "@/components/common/Icon";
import { useI18n } from "@/i18n/LanguageProvider";

const BUILT_WITH = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Vercel", Icon: SiVercel },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer data-tone="ink" className="slab-ink relative z-10 border-t border-white/12">
      <div className="shell py-10 xl:pl-[calc(var(--rail-w)-4rem)]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center bg-cyan font-mono text-[11px] font-bold text-ink">
                SU
              </span>
              <span className="text-[15px] font-semibold">{SITE.name}</span>
            </a>
            <p className="mt-4 text-[14px] leading-relaxed text-white/50">
              {t.footer.blurb}
            </p>
            <p className="mono-label mt-4">
              {CONTACT.location} · {CONTACT.timezone}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-baseline gap-2.5 py-1 text-[14px] text-white/50 transition-colors hover:text-white"
              >
                <span className="font-mono text-[10px] text-white/25">{item.stage}</span>
                {t.nav[item.id]}
              </a>
            ))}
          </nav>

          <div>
            <p className="mono-label">{t.footer.elsewhere}</p>
            <ul className="mt-3 flex flex-col">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 py-1.5 text-[14px] text-white/50 transition-colors hover:text-cyan"
                  >
                    <UiIcon name={social.icon} className="size-3.5" aria-hidden />
                    {social.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/35">
            © {new Date().getFullYear()} {SITE.name}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="mono-label">{t.footer.builtWith}</span>
            {BUILT_WITH.map(({ name, Icon }) => (
              <span
                key={name}
                className="flex items-center gap-1.5 text-[12px] text-white/45 transition-colors hover:text-white"
              >
                <Icon className="size-3.5" aria-hidden />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
