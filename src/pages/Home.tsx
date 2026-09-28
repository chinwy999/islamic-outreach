import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "../lib/store";
import { IMG } from "../lib/assets";
import { TOPICS, ESSAYS, TIMELINE, SOURCES } from "../lib/data";
import { SURAHS } from "../lib/quran";
import {
  CtaLink,
  GeometricField,
  GoldRule,
  Label,
  Plate,
  Reveal,
  Section,
} from "../components/Chrome";

export default function Home() {
  const { t, bi, lang, go } = useApp();
  const reduce = useReducedMotion();

  const journey: { to: string; n: string; title: string; text: string }[] = [
    {
      to: "/what-is-islam",
      n: "٠١",
      title: bi({ ar: "ما هو الإسلام؟", en: "What is Islam?" }),
      text: bi({
        ar: "معنى الإسلام، ومن هو الله، ومن هو محمد ﷺ، وما هو القرآن — بلغةٍ بسيطة.",
        en: "The meaning of Islam, who God is, who Muhammad ﷺ is, and what the Qur'an is — in plain language.",
      }),
    },
    {
      to: "/faq",
      n: "٠٢",
      title: bi({ ar: "الأسئلة الشائعة", en: "Common questions" }),
      text: bi({
        ar: "أسئلةٌ يسألها الناس فعلًا، بإجاباتٍ متوازنةٍ ومصدرة، وبلا مبالغة.",
        en: "The questions people really ask, answered with balance, sources and no exaggeration.",
      }),
    },
    {
      to: "/quran",
      n: "٠٣",
      title: bi({ ar: "القرآن الكريم", en: "The Qur'an" }),
      text: bi({
        ar: "اقرأ النص العربي، واستمع إلى التلاوة، وقارن مع الترجمة، وابحث في السور.",
        en: "Read the Arabic text, listen to recitation, compare with a translation, and search the sūrahs.",
      }),
    },
    {
      to: "/prophet",
      n: "٠٤",
      title: bi({ ar: "النبي محمد ﷺ", en: "The Prophet ﷺ" }),
      text: bi({
        ar: "سيرة موثّقة: النسب، والوحي، والهجرة، والأخلاق، والرحمة، والوداع.",
        en: "A documented life: lineage, revelation, migration, character, mercy and the farewell.",
      }),
    },
    {
      to: "/considering-islam",
      n: "٠٥",
      title: bi({ ar: "إذا كنت تفكر في الإسلام", en: "If you are thinking about Islam" }),
      text: bi({
        ar: "أسئلة مطمئنة، بلا ضغط: ماذا أعرف أولًا؟ وكيف أبدأ؟ وماذا عن عائلتي؟",
        en: "Calm questions, with no pressure: what do I need to know first, how do I begin, what about my family?",
      }),
    },
    {
      to: "/new-muslim",
      n: "٠٦",
      title: bi({ ar: "الخطوات التالية", en: "The next steps" }),
      text: bi({
        ar: "مسارٌ تعليميٌّ متدرّج بثلاثة مستويات، مع شريط تقدمٍ يرافقك.",
        en: "A graded learning path in three levels, with a progress tracker that stays with you.",
      }),
    },
  ];

  return (
    <>
      {/* ---------------------------- hero ---------------------------- */}
      <section className="relative isolate overflow-hidden bg-ink-deep">
        <Plate
          src={IMG.hero}
          alt={bi({
            ar: "داخل مسجد هادئ بأعمدة رخامٍ خضراء وزخارف هندسية ذهبية",
            en: "A quiet mosque interior with green marble columns and gold geometric inlay",
          })}
          className="absolute inset-0"
          imgClass="object-[65%_center] opacity-[0.62] sm:opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/86 to-ink-deep/62" />
        <div className="absolute inset-0 bg-gradient-to-l from-ink-deep/70 via-transparent to-transparent" />
        <GeometricField className="pointer-events-none absolute inset-0 h-full w-full text-gold/12" />

        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-3 text-[0.68rem] tracking-[0.24em] text-gold-soft uppercase">
              <span className="h-px w-10 bg-gold-soft/70" />
              {lang === "ar"
                ? "تعريف هادئ وموثّق · للمسلمين وغير المسلمين"
                : "A calm, sourced introduction · for everyone"}
            </span>

            <h1 className="mt-7 text-paper">
              <span className="block font-naskh text-[clamp(3.2rem,13vw,9rem)] leading-[0.95] font-bold">
                {t("hero.title")}
              </span>
              <span className="mt-4 block text-[clamp(0.85rem,2.2vw,1.05rem)] tracking-[0.32em] text-gold-soft uppercase">
                {lang === "ar" ? "Discover Islam" : "اكتشف الإسلام"}
              </span>
            </h1>

            <GoldRule className="mt-8 max-w-md" />

            <p className="mt-7 max-w-2xl text-[1.12rem] leading-[2.1] text-paper/88 sm:text-[1.28rem]">
              {t("hero.sub")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => go("/what-is-islam")}
                className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-sm tracking-[0.08em] text-ink-deep transition-colors duration-300 hover:bg-gold-soft"
              >
                {t("cta.what")}
                <span aria-hidden className="rtl-mirror">
                  →
                </span>
              </button>
              <button
                type="button"
                onClick={() => go("/quran")}
                className="inline-flex items-center gap-2 border border-gold-soft/45 px-6 py-3.5 text-sm tracking-[0.08em] text-paper transition-colors duration-300 hover:border-gold hover:bg-gold/15"
              >
                {t("cta.quran")}
              </button>
              <button
                type="button"
                onClick={() => go("/why-islam")}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm tracking-[0.08em] text-gold-soft transition-colors duration-300 hover:text-paper"
              >
                {t("cta.why")}
              </button>
              <button
                type="button"
                onClick={() => go("/new-muslim")}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm tracking-[0.08em] text-gold-soft transition-colors duration-300 hover:text-paper"
              >
                {t("cta.new")}
              </button>
            </div>
          </motion.div>
        </div>

        {/* illuminated band — the unwān */}
        <div className="relative border-y border-gold/35 bg-paper-2/95">
          <div className="mx-auto grid max-w-7xl gap-y-3 px-5 py-4 text-[0.72rem] tracking-[0.16em] text-ink/70 uppercase sm:grid-cols-3 sm:px-8">
            {[
              bi({ ar: "محتوى موثّق بالمصادر", en: "Sourced content" }),
              bi({ ar: "بلا ضغط وبلا إعلانات", en: "No pressure, no advertising" }),
              bi({ ar: "احترام كامل لكل الأديان", en: "Full respect for every faith" }),
            ].map((x, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- journey --------------------------- */}
      <Section
        n="٠١"
        label={bi({ ar: "الرحلة", en: "The journey" })}
        title={
          <>
            {bi({ ar: "ابدأ من حيث أنت.", en: "Start where you are." })}
            <br />
            <span className="text-gold">
              {bi({ ar: "الخطوة التالية دائمًا واضحة.", en: "The next step is always clear." })}
            </span>
          </>
        }
        intro={bi({
          ar: "لا نطلب منك تصديقًا ولا التزامًا. الموقع مصمَّم ليجيب عن أسئلتك أولًا، ويترك لك الوقت الكافي للقراءة والمقارنة والتفكير. اختر المسار الذي يناسب حالتك اليوم.",
          en: "We ask you for neither belief nor commitment. This site is built to answer your questions first, and to leave you the time you need to read, compare and reflect. Choose the path that fits where you are today.",
        })}
      >
        <div className="grid gap-x-12 sm:grid-cols-2">
          {journey.map((j, i) => (
            <Reveal key={j.to} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => go(j.to)}
                className="group card-lift block w-full border-t border-ink/12 py-7 text-start dark:border-night-ink/12"
              >
                <div className="flex items-start gap-5">
                  <span className="num mt-1 text-2xl text-gold/80">{j.n}</span>
                  <div>
                    <h3 className="text-[1.35rem] text-ink transition-colors group-hover:text-gold dark:text-night-ink">
                      {j.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-[1.95] text-wash dark:text-night-ink/65">
                      {j.text}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                      {t("cta.explore")}
                      <span className="rtl-mirror transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------ what is islam ----------------------- */}
      <Section
        n="٠٢"
        label={bi({ ar: "التعريف", en: "Definition" })}
        tone="alt"
        title={bi({ ar: "ما هو الإسلام؟", en: "What is Islam?" })}
        intro={bi({
          ar: "ثمانيةُ مواضيع تُجيب عن الأسئلة الأولى: المعنى، والعقيدة، والكتاب، والرسول، والعمل اليومي. كل موضوعٍ له صفحته التفصيلية ومصدره.",
          en: "Eight topics answer the first questions: the meaning, the belief, the Book, the messenger, and daily practice. Each one opens into its own detailed page with its source.",
        })}
      >
        <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3 dark:bg-night-ink/10">
          {TOPICS.slice(0, 6).map((topic, i) => (
            <Reveal key={topic.id} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => go(`/what-is-islam#${topic.id}`)}
                className="group card-lift h-full w-full border border-transparent bg-paper p-8 text-start dark:bg-night"
              >
                <Label>{bi(topic.tag)}</Label>
                <h3 className="mt-5 text-[1.35rem] leading-snug text-ink transition-colors group-hover:text-gold dark:text-night-ink">
                  {bi(topic.title)}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-[1.95] text-wash dark:text-night-ink/65">
                  {bi(topic.summary)}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <CtaLink to="/what-is-islam" variant="outline">
            {bi({ ar: "كل الموضوعات", en: "All topics" })}
          </CtaLink>
        </div>
      </Section>

      {/* -------------------------- quran band ------------------------ */}
      <section className="relative overflow-hidden bg-ink-deep text-paper">
        <Plate
          src={IMG.tile}
          alt={bi({ ar: "زخرفة هندسية إسلامية من البلاط", en: "Islamic geometric tilework" })}
          className="absolute inset-0"
          imgClass="opacity-30 object-center"
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/95 via-ink-deep/85 to-ink-deep/96" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <Label>{bi({ ar: "القرآن الكريم", en: "The Holy Qur'an" })}</Label>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,5.4vw,3.6rem)] leading-[1.12]">
              {bi({
                ar: "كتابٌ محفوظٌ منذ أربعة عشر قرنًا، مفتوحٌ لكل قارئ.",
                en: "A book preserved for fourteen centuries — open to every reader.",
              })}
            </h2>
            <p className="measure mt-6 text-[1.05rem] leading-[2.1] text-paper/80">
              {bi({
                ar: "في القارئ يمكنك تصفح السور، والقراءة بالعربية مع الترجمة، وضبط حجم الخط، وتفعيل الوضع الليلي، ونسخ الآية أو مشاركتها، والاستماع إلى التلاوة.",
                en: "In the reader you can browse the sūrahs, read the Arabic alongside a translation, adjust the text size, switch on night reading, copy or share a verse, and listen to recitation.",
              })}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/quran" variant="solid">
                {t("cta.quran")}
              </CtaLink>
              <button
                type="button"
                onClick={() => go("/quran/1")}
                className="inline-flex items-center gap-2 border border-gold-soft/40 px-6 py-3.5 text-sm tracking-[0.08em] text-paper transition-colors hover:border-gold hover:bg-gold/15"
              >
                {bi({ ar: "ابدأ بالفاتحة", en: "Start with al-Fātiḥah" })}
              </button>
            </div>
            <p className="mt-7 border-s-2 border-gold/60 ps-4 text-[0.85rem] leading-[1.9] text-paper/65">
              {bi({
                ar: "الترجمات تنقل معاني القرآن بلغةٍ أخرى، وليست القرآن نفسه.",
                en: "Translations convey the meaning of the Qur'an in another language; they are not the Qur'an itself.",
              })}
            </p>
          </div>

          {/* the reading surface, previewed */}
          <figure className="relative border border-gold/30 bg-paper/96 p-8 text-ink shadow-2xl sm:p-12">
            <div className="absolute inset-x-8 top-5 h-px bg-gold/40" />
            <p className="label">{bi({ ar: "سورة العصر", en: "Sūrat al-ʿAṣr · 103" })}</p>
            <blockquote className="mt-8 space-y-6">
              {SURAHS.find((s) => s.n === 103)!.text!.map((a) => (
                <div key={a.n} className="flex items-start gap-4">
                  <span className="num mt-3 text-xs text-gold">﴿{a.n}﴾</span>
                  <p className="font-naskh text-[clamp(1.35rem,3.4vw,1.95rem)] leading-[2.2] text-ink">
                    {a.ar}
                  </p>
                </div>
              ))}
            </blockquote>
            <figcaption className="mt-8 border-t border-gold/30 pt-5 text-[0.88rem] leading-[1.95] text-wash">
              {SURAHS.find((s) => s.n === 103)!.text![2].en}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* -------------------------- why islam ------------------------- */}
      <Section
        n="٠٣"
        label={bi({ ar: "الأسئلة الكبرى", en: "The big questions" })}
        title={bi({ ar: "لماذا الإسلام؟", en: "Why Islam?" })}
        intro={bi({
          ar: "لا نقارن الأديان بالهجوم عليها، ولا نسخر من معتقد أحد. نعرض ما يقوله الإسلام عن الغاية والوجود والمستقبل، ونترك لك حرية التفكير.",
          en: "We do not compare religions by attacking them, and we never mock anyone's belief. We present what Islam says about purpose, existence and the future — and leave you free to think.",
        })}
      >
        <div className="grid gap-x-14 gap-y-2 lg:grid-cols-2">
          {ESSAYS.slice(0, 4).map((e, i) => (
            <Reveal key={e.id} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => go(`/why-islam#${e.id}`)}
                className="group card-lift block w-full border-t border-ink/12 py-7 text-start dark:border-night-ink/12"
              >
                <h3 className="text-[1.3rem] text-ink transition-colors group-hover:text-gold dark:text-night-ink">
                  {bi(e.q)}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.95] text-wash dark:text-night-ink/65">
                  {bi(e.a[0])}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <CtaLink to="/why-islam" variant="outline">
            {bi({ ar: "كل الأسئلة", en: "All questions" })}
          </CtaLink>
        </div>
      </Section>

      {/* ---------------------------- trust --------------------------- */}
      <Section
        n="٠٤"
        label={bi({ ar: "المصداقية", en: "Trust" })}
        tone="ink"
        title={bi({ ar: "كيف نكتب؟", en: "How we write" })}
        intro={bi({
          ar: "الوضوح والأمانة أهم من المؤثرات البصرية. هذه قواعدنا المعلنة، ونسأل الله أن نعمل بها.",
          en: "Clarity and honesty matter more than visual effects. These are our stated rules — and we ask God to help us keep to them.",
        })}
      >
        <div className="grid gap-px bg-paper/15 sm:grid-cols-2">
          {[
            {
              t: bi({ ar: "لا نخترع أحاديث", en: "We invent nothing" }),
              d: bi({
                ar: "لا يُنسب حديثٌ إلى النبي ﷺ إلا مع مصدره ودرجته. والمصدر مذكورٌ تحت كل مقال.",
                en: "No saying is attributed to the Prophet ﷺ without its source and grade, and a source line sits under every article.",
              }),
            },
            {
              t: bi({ ar: "نوضّح الاختلاف الفقهي", en: "We state scholarly differences" }),
              d: bi({
                ar: "عند وجود اختلافٍ معتبر بين الفقهاء نذكره بدل تقديم رأيٍ واحدٍ على أنه إجماع.",
                en: "Where recognised scholars have differed, we say so instead of presenting one opinion as consensus.",
              }),
            },
            {
              t: bi({ ar: "لا نصوّر الأنبياء", en: "We depict no prophet" }),
              d: bi({
                ar: "لا نستخدم صورًا تجسد النبي محمدًا ﷺ أو أيَّ نبيٍّ آخر، احترامًا لهم.",
                en: "No image depicts the Prophet Muhammad ﷺ or any other prophet — out of respect for them.",
              }),
            },
            {
              t: bi({ ar: "نحترم الجميع", en: "We respect everyone" }),
              d: bi({
                ar: "لا خطاب كراهية، ولا سخرية من دينٍ أو جماعة، ولا ضغطٌ نفسيٌّ على الزائر.",
                en: "No hate speech, no mockery of any religion or group, and no psychological pressure on the visitor.",
              }),
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="h-full bg-ink p-9">
                <div className="flex items-baseline gap-3">
                  <span className="num text-xl text-gold">٠{i + 1}</span>
                  <h3 className="text-[1.15rem] text-paper">{item.t}</h3>
                </div>
                <p className="mt-4 text-[0.93rem] leading-[2] text-paper/72">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {SOURCES.slice(0, 4).map((g) => (
            <div key={g.id}>
              <p className="label !text-[0.6rem]">{bi(g.name)}</p>
              <p className="mt-3 text-[0.85rem] leading-[1.9] text-paper/65">{bi(g.note)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* --------------------------- seerah --------------------------- */}
      <Section
        n="٠٥"
        label={bi({ ar: "السيرة", en: "Seerah" })}
        tone="alt"
        title={bi({ ar: "حياة النبي محمد ﷺ", en: "The life of the Prophet ﷺ" })}
        intro={bi({
          ar: "عشر محطات موثّقة: من مكة إلى المدينة، من الوحي إلى الوداع. كل محطةٍ مع مصدرها.",
          en: "Ten documented stations, from Makkah to Madinah, from the first revelation to the farewell — each with its source.",
        })}
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-[7px] w-px bg-gold/30" aria-hidden />
          <div className="space-y-1">
            {TIMELINE.slice(0, 5).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => go(`/prophet#${item.id}`)}
                  className="group relative block w-full ps-10 text-start"
                >
                  <span className="absolute start-0 top-3 h-[15px] w-[15px] rotate-45 border border-gold bg-paper-2 transition-colors group-hover:bg-gold dark:bg-night-2" />
                  <div className="card-lift border-t border-ink/12 py-6 dark:border-night-ink/12">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="num text-[0.75rem] tracking-[0.18em] text-gold">
                        {bi(item.year)}
                      </span>
                      <span className="text-[0.75rem] tracking-[0.14em] text-wash uppercase">
                        {bi(item.place)}
                      </span>
                    </div>
                    <h3 className="mt-2 text-[1.25rem] text-ink transition-colors group-hover:text-gold dark:text-night-ink">
                      {bi(item.title)}
                    </h3>
                    <p className="mt-2 text-[0.94rem] leading-[1.95] text-wash dark:text-night-ink/65">
                      {bi(item.body)}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <CtaLink to="/prophet" variant="outline">
            {bi({ ar: "السيرة كاملة", en: "The full seerah" })}
          </CtaLink>
        </div>
      </Section>

      {/* ----------------------------- cta ---------------------------- */}
      <section className="relative overflow-hidden bg-paper-3 py-20 dark:bg-night-2">
        <GeometricField className="pointer-events-none absolute inset-0 h-full w-full text-gold/18" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Label>{bi({ ar: "سؤال؟", en: "A question?" })}</Label>
          <h2 className="mt-6 font-display text-[clamp(2rem,5.5vw,3.4rem)] leading-[1.15] text-ink dark:text-night-ink">
            {bi({
              ar: "هل لديك سؤال؟ اكتشف المزيد عن الإسلام.",
              en: "Do you have a question? Discover more about Islam.",
            })}
          </h2>
          <p className="measure mx-auto mt-6 text-[1.05rem] leading-[2.1] text-wash dark:text-night-ink/70">
            {bi({
              ar: "اكتب لنا سؤالك، وسنحاول الإجابة عنه بالاعتماد على المصادر الإسلامية الموثوقة. لا نشر أسئلتك الشخصية دون موافقتك.",
              en: "Send us your question and we will try to answer it from reliable Islamic sources. We never publish personal questions without your consent.",
            })}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CtaLink to="/ask" variant="solid">
              {t("nav.ask")}
            </CtaLink>
            <CtaLink to="/considering-islam" variant="outline">
              {t("cta.more")}
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
