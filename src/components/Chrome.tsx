import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "../lib/store";
import { LANGS, type Bi } from "../lib/i18n";
import { TOPICS, ESSAYS, FAQS, TIMELINE, STORIES, LEVELS } from "../lib/data";
import { SURAHS } from "../lib/quran";
import { FALLBACK_SURFACE } from "../lib/assets";

/* ------------------------------------------------------------------ */
/* The mark: an octagram from two rotated squares in <defs>/<use>       */
/* with a mihrab arch — drawn, never generated.                        */
/* ------------------------------------------------------------------ */
export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Discover Islam">
      <defs>
        <path id="di-square" d="M11 11H37V37H11Z" />
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <use href="#di-square" />
        <use href="#di-square" transform="rotate(45 24 24)" />
        <path d="M18.5 34.5V24.2c0-3.1 2.5-5.7 5.5-5.7s5.5 2.6 5.5 5.7v10.3" />
        <path d="M15.5 34.5h17" strokeLinecap="round" />
      </g>
      <circle cx="24" cy="24.2" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function GeometricField({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id="di-geo" width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.55">
            <path d="M36 4 46 26 68 36 46 46 36 68 26 46 4 36 26 26Z" />
            <rect x="18" y="18" width="36" height="36" transform="rotate(45 36 36)" />
            <circle cx="36" cy="36" r="4" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#di-geo)" />
    </svg>
  );
}

/* ------------------------------- motion --------------------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------- primitives -------------------------- */
export function Label({ children }: { children: ReactNode }) {
  return <span className="label">{children}</span>;
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`rule ${className}`} />;
}

/** Section with the manuscript margin rail: numerals + label hang outside. */
export function Section({
  n,
  label,
  title,
  intro,
  children,
  id,
  tone = "paper",
}: {
  n: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  id?: string;
  tone?: "paper" | "alt" | "ink";
}) {
  const bg =
    tone === "ink"
      ? "bg-ink text-paper"
      : tone === "alt"
        ? "bg-paper-2 dark:bg-night-2"
        : "bg-paper dark:bg-night";
  const onInk = tone === "ink";
  return (
    <section id={id} className={`${bg} relative overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-[8.5rem_minmax(0,1fr)]">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="flex items-baseline gap-3">
              <span className="num text-3xl text-gold">{n}</span>
              <span className="h-px flex-1 bg-gold/40" />
            </div>
            <p className="label mt-3 !text-[0.62rem] leading-relaxed">{label}</p>
          </div>
          <div>
            <Reveal>
              <h2
                className={`font-display text-[clamp(2rem,5vw,3.35rem)] leading-[1.15] ${
                  onInk ? "text-paper" : "text-ink dark:text-night-ink"
                }`}
              >
                {title}
              </h2>
            </Reveal>
            {intro && (
              <Reveal delay={0.08}>
                <div
                  className={`measure mt-6 text-[1.0625rem] leading-[1.95] ${
                    onInk ? "text-paper/78" : "text-wash dark:text-night-ink/75"
                  }`}
                >
                  {intro}
                </div>
              </Reveal>
            )}
            {children && <div className="mt-12">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SourceLine({ text }: { text: Bi }) {
  const { bi, t } = useApp();
  return (
    <p className="mt-6 flex flex-wrap items-start gap-x-2 gap-y-1 border-t border-gold/25 pt-3 text-[0.78rem] leading-relaxed text-wash dark:text-night-ink/55">
      <span className="label !text-[0.6rem]">{t("common.sources")}</span>
      <span className="font-naskh text-[0.95rem] text-ink/80 dark:text-night-ink/80">{bi(text)}</span>
    </p>
  );
}

export function CtaLink({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
}) {
  const { go } = useApp();
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm tracking-[0.08em] transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-leaf dark:bg-gold dark:text-ink-deep dark:hover:bg-gold-soft"
      : variant === "outline"
        ? "border border-ink/25 text-ink hover:border-gold hover:text-gold dark:border-night-ink/25 dark:text-night-ink"
        : "text-gold hover:text-leaf";
  return (
    <button
      type="button"
      onClick={() => go(to)}
      className={`${base} ${styles} cursor-pointer`}
    >
      {children}
      <span aria-hidden className="rtl-mirror">
        →
      </span>
    </button>
  );
}

/** Photographic plate with a designed fallback surface. */
export function Plate({
  src,
  alt,
  className = "",
  imgClass = "",
  overlay = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClass?: string;
  overlay?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={failed ? { background: FALLBACK_SURFACE } : undefined}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`plate h-full w-full object-cover ${imgClass}`}
        />
      )}
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/55 via-ink-deep/10 to-transparent" />
      )}
    </div>
  );
}

/* ------------------------------- header --------------------------- */
const NAV: { to: string; key: string }[] = [
  { to: "/what-is-islam", key: "nav.what" },
  { to: "/why-islam", key: "nav.why" },
  { to: "/quran", key: "nav.quran" },
  { to: "/prophet", key: "nav.prophet" },
  { to: "/considering-islam", key: "nav.considering" },
  { to: "/new-muslim", key: "nav.newmuslim" },
  { to: "/faq", key: "nav.faq" },
  { to: "/sources", key: "nav.sources" },
];

export function Header() {
  const { t, lang, setLang, dark, toggleDark, go, route, setSearchOpen } = useApp();
  const [menu, setMenu] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenu(false);
    setLangOpen(false);
  }, [route]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-gold/25 bg-paper/92 backdrop-blur-md dark:bg-night/92">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 sm:px-8">
          <button
            type="button"
            onClick={() => go("/")}
            className="flex items-center gap-3 text-ink dark:text-gold"
            aria-label={t("nav.home")}
          >
            <Logo className="h-8 w-8" />
            <span className="text-start leading-tight">
              <span className="block font-naskh text-[1.05rem] text-ink dark:text-night-ink">
                {t("brand.name")}
              </span>
              <span className="block text-[0.62rem] tracking-[0.22em] text-gold uppercase">
                {lang === "ar" ? "Discover Islam" : "منصة تعليمية"}
              </span>
            </span>
          </button>

          <div className="ms-auto flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 border border-transparent px-3 py-2 text-[0.72rem] tracking-[0.16em] text-wash uppercase transition-colors hover:border-gold/40 hover:text-gold dark:text-night-ink/70"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <span className="hidden sm:inline">{t("search.open")}</span>
            </button>

            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                className="flex items-center gap-2 border border-transparent px-3 py-2 text-[0.72rem] tracking-[0.16em] text-wash uppercase transition-colors hover:border-gold/40 hover:text-gold dark:text-night-ink/70"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18" />
                </svg>
                <span>{LANGS.find((l) => l.code === lang)?.label}</span>
              </button>
              {langOpen && (
                <div className="absolute end-0 top-full z-50 mt-2 w-56 border border-gold/30 bg-paper-2 p-2 shadow-xl dark:bg-night-2">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2 text-start text-sm transition-colors hover:bg-gold/10 ${
                        l.code === lang ? "text-gold" : "text-ink dark:text-night-ink"
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="text-[0.62rem] tracking-[0.18em] text-wash uppercase">
                        {l.english}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={toggleDark}
              aria-label={t("common.theme")}
              className="border border-transparent px-3 py-2 text-wash transition-colors hover:border-gold/40 hover:text-gold dark:text-night-ink/70"
            >
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              aria-label={t("nav.menu")}
              className="border border-gold/30 px-3 py-2 text-ink dark:text-night-ink lg:hidden"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="mx-auto hidden max-w-7xl items-center gap-6 px-8 pb-3 lg:flex">
          {NAV.map((item) => {
            const active = route === item.to;
            return (
              <button
                key={item.to}
                type="button"
                onClick={() => go(item.to)}
                className={`relative pb-1 text-[0.78rem] tracking-[0.06em] transition-colors ${
                  active
                    ? "text-gold"
                    : "text-ink/75 hover:text-gold dark:text-night-ink/75"
                }`}
              >
                {t(item.key)}
                {active && <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gold" />}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => go("/ask")}
            className="ms-auto bg-ink px-5 py-2 text-[0.72rem] tracking-[0.18em] text-paper uppercase transition-colors hover:bg-leaf dark:bg-gold dark:text-ink-deep"
          >
            {t("nav.ask")}
          </button>
        </nav>
      </div>

      {menu && (
        <div className="border-b border-gold/25 bg-paper-2 px-5 py-4 dark:bg-night-2 lg:hidden">
          <div className="grid gap-1">
            {[...NAV, { to: "/stories", key: "nav.stories" }, { to: "/ask", key: "nav.ask" }, { to: "/contact", key: "nav.contact" }].map((item) => (
              <button
                key={item.to}
                type="button"
                onClick={() => go(item.to)}
                className="border-b border-gold/15 py-2.5 text-start text-sm text-ink dark:text-night-ink"
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------- search --------------------------- */
type Hit = { title: string; kind: string; snippet: string; to: string };

export function SearchOverlay() {
  const { t, bi, searchOpen, setSearchOpen, go, lang } = useApp();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 40);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSearchOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, setSearchOpen]);

  const corpus = useMemo<Hit[]>(() => {
    const out: Hit[] = [];
    TOPICS.forEach((x) =>
      out.push({
        title: bi(x.title),
        kind: "topic",
        snippet: bi(x.summary),
        to: `/what-is-islam#${x.id}`,
      }),
    );
    ESSAYS.forEach((x) =>
      out.push({ title: bi(x.q), kind: "question", snippet: bi(x.a[0]), to: `/why-islam#${x.id}` }),
    );
    FAQS.forEach((x) =>
      out.push({ title: bi(x.q), kind: "faq", snippet: bi(x.a[0]), to: `/faq#${x.id}` }),
    );
    TIMELINE.forEach((x) =>
      out.push({ title: bi(x.title), kind: "seerah", snippet: bi(x.body), to: `/prophet#${x.id}` }),
    );
    STORIES.forEach((x) =>
      out.push({ title: bi(x.name), kind: "story", snippet: bi(x.search), to: `/stories#${x.id}` }),
    );
    LEVELS.forEach((x) =>
      out.push({
        title: bi(x.name),
        kind: "lesson",
        snippet: bi(x.goal),
        to: "/new-muslim",
      }),
    );
    SURAHS.forEach((s) =>
      out.push({
        title: `${s.ar} · ${s.translit}`,
        kind: "surah",
        snippet: s.text ? s.text[0].ar : `${s.en} · ${s.ayahs} ayahs`,
        to: `/quran/${s.n}`,
      }),
    );
    return out;
  }, [bi]);

  const hits = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 2) return [];
    return corpus
      .filter((h) => (h.title + " " + h.snippet).toLowerCase().includes(needle))
      .slice(0, 12);
  }, [q, corpus]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-ink-deep/55 backdrop-blur-sm"
        onClick={() => setSearchOpen(false)}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 mx-auto mt-[8vh] w-[min(46rem,92vw)] border border-gold/30 bg-paper shadow-2xl dark:bg-night-2">
        <div className="flex items-center gap-3 border-b border-gold/25 px-5 py-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-gold" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("search.placeholder")}
            className="w-full bg-transparent py-1 text-lg text-ink outline-none placeholder:text-wash/70 dark:text-night-ink"
          />
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            className="text-[0.7rem] tracking-[0.18em] text-wash uppercase hover:text-gold"
          >
            {t("nav.close")}
          </button>
        </div>

        <div className="max-h-[62vh] overflow-y-auto">
          {q.trim().length < 2 && (
            <p className="px-5 py-8 text-sm text-wash dark:text-night-ink/60">{t("search.hint")}</p>
          )}
          {q.trim().length >= 2 && hits.length === 0 && (
            <p className="px-5 py-8 text-sm text-wash dark:text-night-ink/60">{t("search.none")}</p>
          )}
          {hits.map((h, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setSearchOpen(false);
                go(h.to);
              }}
              className="block w-full border-b border-gold/15 px-5 py-4 text-start transition-colors hover:bg-gold/10"
            >
              <div className="flex items-center gap-3">
                <span className="label !text-[0.58rem]">{h.kind}</span>
                <span className="font-naskh text-[1.05rem] text-ink dark:text-night-ink">{h.title}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-wash dark:text-night-ink/60">{h.snippet}</p>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between px-5 py-3 text-[0.7rem] text-wash/80">
          <span>{lang === "ar" ? "البحث يشمل الآيات والموضوعات والأسئلة والسيرة" : "Search covers verses, topics, questions and the seerah"}</span>
          <span className="num">{hits.length}</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- footer --------------------------- */
export function Footer() {
  const { t, go } = useApp();
  const cols: { title: string; links: { label: string; to: string }[] }[] = [
    {
      title: "Discover",
      links: [
        { label: t("nav.what"), to: "/what-is-islam" },
        { label: t("nav.why"), to: "/why-islam" },
        { label: t("nav.quran"), to: "/quran" },
        { label: t("nav.prophet"), to: "/prophet" },
      ],
    },
    {
      title: "Paths",
      links: [
        { label: t("nav.considering"), to: "/considering-islam" },
        { label: t("nav.newmuslim"), to: "/new-muslim" },
        { label: t("nav.stories"), to: "/stories" },
        { label: t("nav.faq"), to: "/faq" },
      ],
    },
    {
      title: "Trust",
      links: [
        { label: t("nav.sources"), to: "/sources" },
        { label: t("nav.ask"), to: "/ask" },
        { label: t("nav.contact"), to: "/contact" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gold/25 bg-ink text-paper">
      <GeometricField className="pointer-events-none absolute inset-0 h-full w-full text-gold/15" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3 text-gold">
              <Logo className="h-10 w-10" />
              <div>
                <p className="font-naskh text-lg text-paper">{t("brand.name")}</p>
                <p className="text-[0.62rem] tracking-[0.22em] text-gold uppercase">{t("brand.tag")}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-[2] text-paper/75">{t("footer.note")}</p>
            <p className="mt-3 max-w-sm text-sm leading-[2] text-paper/60">{t("footer.privacy")}</p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="label !text-[0.6rem]">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <button
                      type="button"
                      onClick={() => go(l.to)}
                      className="link-underline text-sm text-paper/80 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-gold/20 pt-6 text-[0.75rem] text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.rights")}</p>
          <p className="num">© {new Date().getFullYear()} · {t("brand.name")}</p>
        </div>
      </div>
    </footer>
  );
}
