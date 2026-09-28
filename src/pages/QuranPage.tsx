import { useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "../lib/store";
import { SURAHS, recitationUrl, BISMILLAH, type Surah } from "../lib/quran";
import { CtaLink, GeometricField, Label, Plate, Reveal } from "../components/Chrome";
import { IMG } from "../lib/assets";

const SIZES = [1.55, 1.95, 2.45];

export default function QuranPage({ surahNumber }: { surahNumber?: number }) {
  const { t, bi, go } = useApp();
  const [query, setQuery] = useState("");
  const [fontStep, setFontStep] = useState(1);
  const [night, setNight] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const current: Surah = useMemo(
    () => SURAHS.find((s) => s.n === surahNumber) ?? SURAHS[0],
    [surahNumber],
  );

  useEffect(() => {
    setPlaying(false);
    setAudioError(false);
    setNotice(null);
    audioRef.current?.pause();
  }, [surahNumber]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return SURAHS;
    return SURAHS.filter((s) =>
      `${s.ar} ${s.translit} ${s.en} ${s.n}`.toLowerCase().includes(needle),
    );
  }, [query]);

  const ayahMatches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (needle.length < 3) return [];
    return SURAHS.filter((s) => s.text).flatMap((s) =>
      s.text!
        .filter((a) => (a.ar + " " + a.en).toLowerCase().includes(needle))
        .map((a) => ({ surah: s, ayah: a })),
    );
  }, [query]);

  const reading = night ? "bg-night text-night-ink" : "bg-paper-2 text-ink";

  const copyAyah = async (n: number, ar: string, en: string) => {
    const text = `${ar}\n\n${en}\n\n— ${current.ar} (${current.n}:${n}) · ${t("brand.name")}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(n);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      setNotice(bi({ ar: "تعذّر النسخ في هذا المتصفح.", en: "Copying is not available in this browser." }));
    }
  };

  const shareAyah = async (n: number, ar: string, en: string) => {
    const url = `${window.location.origin}${window.location.pathname}#/quran/${current.n}`;
    const data = {
      title: `${current.ar} · ${current.translit}`,
      text: `${ar}\n${en}`,
      url,
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(`${data.text}\n${url}`);
        setCopied(n);
        setTimeout(() => setCopied(null), 1800);
      }
    } catch {
      /* dismissed */
    }
  };

  return (
    <div className={night ? "bg-night" : "bg-paper"}>
      {/* ------------------------- head band -------------------------- */}
      <section className="relative overflow-hidden bg-ink-deep text-paper">
        <Plate
          src={IMG.tile}
          alt={bi({ ar: "زخرفة هندسية إسلامية", en: "Islamic geometric tilework" })}
          className="absolute inset-0"
          imgClass="opacity-25"
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/95 to-ink-deep/90" />
        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-12 sm:px-8">
          <Label>{bi({ ar: "القرآن الكريم", en: "The Holy Qur'an" })}</Label>
          <h1 className="mt-6 font-naskh text-[clamp(2.4rem,8vw,5.2rem)] leading-[1.15]">
            {bi({ ar: "اقرأ، واستمع، وتدبّر", en: "Read, listen, reflect" })}
          </h1>
          <p className="measure mt-6 text-[1.05rem] leading-[2.1] text-paper/80">
            {bi({
              ar: "١١٤ سورة مرتبةٌ بالصحف، مع النص العربي والترجمة الإنجليزية لمعاني القرآن، والتلاوة الصوتية، والبحث في السور والآيات.",
              en: "All 114 sūrahs in their traditional order, with the Arabic text, an English rendering of the meaning, audio recitation, and search across sūrahs and verses.",
            })}
          </p>
          <div className="mt-8 border-s-2 border-gold/70 bg-paper/8 p-5 ps-6">
            <p className="text-[0.95rem] leading-[1.95] text-paper/90">
              {bi({
                ar: "تنبيه مهم: الترجمات المعروضة هي ترجمات لمعاني القرآن الكريم إلى لغةٍ أخرى، وليست القرآن نفسه. القرآن هو النص العربي فقط، ولا تُقرأ الترجمة في الصلاة.",
                en: "Important notice: the translations shown render the meaning of the Qur'an in another language. They are not the Qur'an itself — the Qur'an is the Arabic text alone, and a translation is never recited in prayer.",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------- reader shell ----------------------- */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[19rem_minmax(0,1fr)]">
          {/* index rail */}
          <aside className="order-2 lg:sticky lg:top-28 lg:order-1 lg:max-h-[76vh] lg:self-start lg:overflow-y-auto">
            <div className={`border border-gold/25 ${night ? "bg-night-2" : "bg-paper-2"}`}>
              <div className="border-b border-gold/25 p-4">
                <label className="label !text-[0.58rem]" htmlFor="surah-search">
                  {t("common.search")}
                </label>
                <input
                  id="surah-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("search.placeholder")}
                  className={`mt-3 w-full border border-gold/25 bg-transparent px-3 py-2 text-sm outline-none focus:border-gold ${
                    night ? "text-night-ink placeholder:text-night-ink/45" : "text-ink placeholder:text-wash/60"
                  }`}
                />
              </div>

              {ayahMatches.length > 0 && (
                <div className="border-b border-gold/25">
                  <p className="label !text-[0.56rem] px-4 pt-4">
                    {bi({ ar: "نتائج في الآيات", en: "Verse matches" })}
                  </p>
                  <ul className="max-h-64 overflow-y-auto p-2">
                    {ayahMatches.slice(0, 8).map((m, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => go(`/quran/${m.surah.n}`)}
                          className="w-full border-b border-gold/10 px-2 py-3 text-start hover:bg-gold/10"
                        >
                          <p className="font-naskh text-[1.05rem] leading-[1.9] text-gold">
                            {m.ayah.ar}
                          </p>
                          <p className="mt-1 text-[0.72rem] text-wash dark:text-night-ink/55">
                            {m.surah.translit} · {m.surah.n}:{m.ayah.n}
                          </p>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="max-h-[26rem] overflow-y-auto lg:max-h-[38rem]">
                {filtered.map((s) => {
                  const active = s.n === current.n;
                  return (
                    <li key={s.n}>
                      <button
                        type="button"
                        onClick={() => go(`/quran/${s.n}`)}
                        className={`flex w-full items-center gap-3 border-b border-gold/12 px-4 py-3 text-start transition-colors ${
                          active
                            ? night
                              ? "bg-gold/18 text-gold"
                              : "bg-gold/12 text-ink"
                            : night
                              ? "text-night-ink/80 hover:bg-gold/10"
                              : "text-ink/80 hover:bg-gold/8"
                        }`}
                      >
                        <span className="num w-8 text-[0.72rem] text-gold">{s.n}</span>
                        <span className="flex-1">
                          <span className="block font-naskh text-[1.15rem] leading-tight">{s.ar}</span>
                          <span className="block text-[0.72rem] tracking-[0.12em] text-wash uppercase dark:text-night-ink/55">
                            {s.translit} · {s.ayahs}
                          </span>
                        </span>
                        {s.text ? (
                          <span className="h-1.5 w-1.5 rotate-45 bg-gold" title="available" />
                        ) : (
                          <span className="h-1.5 w-1.5 rotate-45 border border-gold/50" title="audio only" />
                        )}
                      </button>
                    </li>
                  );
                })}
                {filtered.length === 0 && (
                  <li className="px-4 py-8 text-sm text-wash dark:text-night-ink/60">{t("search.none")}</li>
                )}
              </ul>
            </div>
          </aside>

          {/* reading column */}
          <div className={`relative order-1 lg:order-2 ${reading} border border-gold/25`}>
            <GeometricField className="pointer-events-none absolute inset-0 h-full w-full text-gold/10" />

            {/* controls */}
            <div className="relative flex flex-wrap items-center gap-x-6 gap-y-4 border-b border-gold/25 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="label !text-[0.58rem]">{t("common.fontsize")}</span>
                <div className="flex items-center gap-1">
                  {SIZES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setFontStep(i)}
                      aria-label={`${t("common.fontsize")} ${i + 1}`}
                      className={`flex h-8 w-9 items-center justify-center border font-naskh leading-none transition-colors ${
                        fontStep === i
                          ? "border-gold bg-gold/15 text-gold"
                          : "border-gold/25 text-wash hover:border-gold/60 dark:text-night-ink/60"
                      }`}
                      style={{ fontSize: `${0.72 + i * 0.22}rem` }}
                    >
                      أ
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setNight((v) => !v)}
                className={`flex items-center gap-2 border px-4 py-2 text-[0.72rem] tracking-[0.16em] uppercase transition-colors ${
                  night ? "border-gold text-gold" : "border-gold/30 text-wash hover:border-gold dark:text-night-ink/65"
                }`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${night ? "bg-gold" : "border border-gold/60"}`} />
                {t("common.night")}
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = audioRef.current;
                    if (!el) return;
                    if (playing) {
                      el.pause();
                      setPlaying(false);
                    } else {
                      el
                        .play()
                        .then(() => setPlaying(true))
                        .catch(() => {
                          setAudioError(true);
                          setPlaying(false);
                        });
                    }
                  }}
                  className="flex items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-2 text-[0.72rem] tracking-[0.16em] text-gold uppercase transition-colors hover:bg-gold/20"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    {playing ? (
                      <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
                    ) : (
                      <path d="M8 5l11 7-11 7z" />
                    )}
                  </svg>
                  {playing ? t("common.pause") : t("common.audio")}
                </button>
                <audio
                  ref={audioRef}
                  src={recitationUrl(current.n)}
                  preload="none"
                  onEnded={() => setPlaying(false)}
                  onError={() => {
                    setAudioError(true);
                    setPlaying(false);
                  }}
                />
              </div>

              <span className="ms-auto text-[0.72rem] tracking-[0.18em] text-wash uppercase dark:text-night-ink/55">
                {current.place === "M"
                  ? bi({ ar: "مكية", en: "Makkan" })
                  : bi({ ar: "مدنية", en: "Madinan" })}
                <span className="mx-2 text-gold">·</span>
                <span className="num">{current.ayahs}</span> {bi({ ar: "آية", en: "ayahs" })}
              </span>
            </div>

            {audioError && (
              <div className="relative border-b border-gold/25 bg-gold/10 px-6 py-4 text-[0.85rem] text-gold">
                {t("common.audioError")}
              </div>
            )}
            {notice && (
              <div className="relative border-b border-gold/25 bg-gold/10 px-6 py-4 text-[0.85rem] text-gold">
                {notice}
              </div>
            )}

            {/* sūrah title */}
            <div className="relative px-6 pt-12 text-center">
              <div className="mx-auto flex max-w-md items-center gap-4">
                <span className="h-px flex-1 bg-gold/45" />
                <span className="num text-[0.75rem] tracking-[0.22em] text-gold">
                  {current.n}
                </span>
                <span className="h-px flex-1 bg-gold/45" />
              </div>
              <h2 className="mt-5 font-naskh text-[clamp(2.1rem,6vw,3.4rem)] leading-tight text-gold">
                سورة {current.ar}
              </h2>
              <p className="mt-2 text-[0.78rem] tracking-[0.22em] uppercase opacity-70">
                {current.translit} · {current.en}
              </p>
              <div className="mx-auto mt-8 h-px max-w-lg bg-gold/35" />
            </div>

            {/* text */}
            <div className="relative px-5 pt-10 pb-14 sm:px-10">
              {current.text ? (
                <>
                  {current.n !== 1 && current.n !== 9 && (
                    <p className="mb-10 text-center font-naskh text-[clamp(1.5rem,4vw,2.15rem)] leading-[2.1] text-gold">
                      {BISMILLAH}
                    </p>
                  )}
                  <div className="space-y-9">
                    {current.text.map((a) => (
                      <article key={a.n} className="group grid gap-4 sm:grid-cols-[2.6rem_minmax(0,1fr)]">
                        <div className="flex items-start justify-start gap-2 sm:flex-col sm:items-end">
                          <span className="num text-[0.78rem] text-gold">﴿{a.n}﴾</span>
                          <div className="flex gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
                            <button
                              type="button"
                              onClick={() => copyAyah(a.n, a.ar, a.en)}
                              className="border border-gold/30 px-2 py-1 text-[0.62rem] tracking-[0.12em] text-gold uppercase hover:bg-gold/15"
                            >
                              {copied === a.n ? t("common.copied") : t("common.copy")}
                            </button>
                            <button
                              type="button"
                              onClick={() => shareAyah(a.n, a.ar, a.en)}
                              className="border border-gold/30 px-2 py-1 text-[0.62rem] tracking-[0.12em] text-gold uppercase hover:bg-gold/15"
                            >
                              {t("common.share")}
                            </button>
                          </div>
                        </div>
                        <div>
                          <p
                            className="font-naskh leading-[2.15]"
                            style={{ fontSize: `${SIZES[fontStep]}rem` }}
                          >
                            {a.ar}
                          </p>
                          <p className="mt-4 border-s border-gold/25 ps-4 text-[0.95rem] leading-[1.95] opacity-75">
                            {a.en}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                  <p className="mt-12 border-t border-gold/25 pt-5 text-[0.82rem] leading-[1.9] opacity-65">
                    {bi({
                      ar: "النص العربي للقرآن الكريم. النص الإنجليزي ترجمةٌ للمعنى، وليست القرآن. التلاوة بصوت الشيخ مشاري راشد العفاسي.",
                      en: "The Arabic is the text of the Qur'an. The English renders its meaning and is not the Qur'an. Recitation by Mishary Rashid al-ʿAfāsī.",
                    })}
                  </p>
                </>
              ) : (
                <div className="mx-auto max-w-2xl py-16 text-center">
                  <div className="mx-auto h-14 w-14 rotate-45 border border-gold/60" />
                  <h3 className="mt-8 text-[1.55rem] text-ink dark:text-night-ink">
                    {bi({
                      ar: `سورة ${current.ar} — النص غير مضمَّن في هذه النسخة بعد`,
                      en: `Sūrat ${current.translit} — the text is not bundled in this version yet`,
                    })}
                  </h3>
                  <p className="measure mx-auto mt-5 text-[1rem] leading-[2] text-wash dark:text-night-ink/70">
                    {bi({
                      ar: "نُضيف نصوص السور بعد التدقيق المخطوطي الموثّق، ونفضّل الانتظار على العرض غير المُتحقَّق منه. يمكنك الآن الاستماع إلى التلاوة كاملة، أو قراءة السور المتاحة من القائمة.",
                      en: "We add sūrah texts only after careful documented verification, and prefer to wait rather than publish unchecked material. For now you can listen to the full recitation, or read the sūrahs already included from the index.",
                    })}
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {[1, 93, 94, 95, 97, 103, 112, 113, 114].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => go(`/quran/${n}`)}
                        className="border border-gold/35 px-4 py-2 text-[0.78rem] text-gold transition-colors hover:bg-gold/15"
                      >
                        {SURAHS.find((s) => s.n === n)!.ar}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* closing note */}
        <Reveal className="mt-16">
          <div className="grid gap-8 border-t border-gold/25 pt-10 lg:grid-cols-[8.5rem_minmax(0,1fr)]">
            <p className="label !text-[0.6rem]">
              {bi({ ar: "الترجمة", en: "Translation" })}
            </p>
            <div className="measure">
              <h3 className="text-[1.35rem] text-ink dark:text-night-ink">
                {bi({
                  ar: "الفرق بين القرآن والترجمة والتفسير",
                  en: "The difference between the Qur'an, a translation and tafsīr",
                })}
              </h3>
              <p className="mt-4 text-[1rem] leading-[2.05] text-wash dark:text-night-ink/70">
                {bi({
                  ar: "القرآن هو النص العربي الذي نُزِّل على النبي محمد ﷺ. الترجمة محاولةٌ لنقل معنى الآية بلغةٍ أخرى، وهي عملٌ بشري يختلف فيها المترجمون. والتفسير شرحٌ للآية يستند إلى اللغة والحديث والسيرة. نُشير إلى نوع المحتوى في كل موضعٍ من الموقع، ولا نخلط بينهما أبدًا.",
                  en: "The Qur'an is the Arabic text revealed to the Prophet Muhammad ﷺ. A translation is a human attempt to convey the meaning of a verse in another language, and translators differ. Tafsīr explains a verse using language, ḥadīth and the seerah. We label which of the three you are reading everywhere on this site, and never merge them.",
                })}
              </p>
              <div className="mt-8">
                <CtaLink to="/sources" variant="outline">
                  {bi({ ar: "المصادر والمراجع", en: "Sources and references" })}
                </CtaLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
