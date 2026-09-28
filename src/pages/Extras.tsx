import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useApp } from "../lib/store";
import { LANGS } from "../lib/i18n";
import { FAQS, LEVELS, SOURCES } from "../lib/data";
import { IMG } from "../lib/assets";
import {
  CtaLink,
  GeometricField,
  Label,
  Plate,
  Reveal,
  Section,
  SourceLine,
} from "../components/Chrome";

/* ================================================================== */
/* If you are thinking about Islam                                    */
/* ================================================================== */
const THINKING: { q: { ar: string; en: string }; a: { ar: string; en: string } }[] = [
  {
    q: { ar: "هل يجب أن أعرف كل شيء قبل الدخول في الإسلام؟", en: "Do I have to know everything before becoming Muslim?" },
    a: {
      ar: "لا. الإسلام لا يطلب منك اجتياز امتحان. المطلوب أن تؤمن بجوهر الرسالة: أن لا إله إلا الله، وأن محمدًا رسول الله. الباقي يُتعلَّم في يومه وسنته، على مهل، ولا أحد يعجّلك.",
      en: "No. Islam does not ask you to pass an exam. What is needed is the heart of the message: that there is no god but God, and that Muhammad is His messenger. The rest is learned day by day, at your own pace, and no one will rush you.",
    },
  },
  {
    q: { ar: "ما معنى الشهادتين؟", en: "What do the two testimonies mean?" },
    a: {
      ar: "«أشهد أن لا إله إلا الله، وأشهد أن محمدًا رسول الله» تعني: أُقرُّ بأن الله وحده هو المعبود بحق، وأن محمدًا ﷺ أبلغ الرسالة بأمانة. تقولها بالعربية إن استطعت، ومعناها بقلبك وبأي لغةٍ تفهمها.",
      en: "'I bear witness that there is no god but God, and that Muhammad is the messenger of God' means: I affirm that God alone is worthy of worship, and that Muhammad ﷺ conveyed the message faithfully. You may say it in Arabic if you can; its meaning is held in the heart and understood in any language.",
    },
  },
  {
    q: { ar: "كيف أصبح مسلمًا؟", en: "How do I become Muslim?" },
    a: {
      ar: "تقول الشهادتين — وحدك أو أمام شاهدَين أو في مسجد، والصورة البسيطة تكفي. لا مراسم، ولا رسوم، ولا اتصال بأحد. إن لم تستطع النطق، فالإخلاص لله يكفي لتبدأ.",
      en: "Say the two testimonies — alone, before two witnesses, or at a mosque. Any simple form is enough. There is no ceremony, no fee, and no one you must contact. If you cannot pronounce them yet, sincere belief in God is enough to begin.",
    },
  },
  {
    q: { ar: "ماذا أفعل بعد الشهادة؟", en: "What do I do after the testimony?" },
    a: {
      ar: "ابدأ بالوضوء، ثم الصلاة، ثم سورة الفاتحة. لا تحاول تعلّم كل شيء في أسبوع. خذ مستوىً واحدًا من صفحة «أنا مسلم جديد» وأتقنه قبل الانتقال.",
      en: "Begin with ablution, then prayer, then Sūrat al-Fātiḥah. Do not try to learn everything in one week. Take a single level from the 'New Muslim' page and settle into it before moving on.",
    },
  },
  {
    q: { ar: "هل يجب أن أغيّر اسمي؟", en: "Do I have to change my name?" },
    a: {
      ar: "لا يجب. الإسلام لا يطلب تغيير الاسم إلا إذا كان معناه معصيةً أو عبادةٌ لغير الله. كثيرٌ من المسلمين يحتفظون بأسمائهم الأصلية، وهذا أمرٌ سائغ.",
      en: "You do not have to. Islam asks for a change only if a name carries a meaning of disobedience or worship of other than God. Many Muslims keep their original names, and that is perfectly acceptable.",
    },
  },
  {
    q: { ar: "ماذا عن عائلتي؟", en: "What about my family?" },
    a: {
      ar: "البرُّ بالوالدين من أعظم القربات في الإسلام، حتى لو لم يكونوا مسلمين. لا تُقاطع أهلك، ولا تُجادلهم. كن لطيفًا، واحترم عاداتهم، وبيّن ما تغيّر فيك بالفعل لا بالكلام.",
      en: "Kindness to parents ranks among the greatest duties in Islam, even when they are not Muslim. Do not cut off your family or argue with them. Be gentle, respect their customs, and show what has changed in you by your conduct rather than your words.",
    },
  },
  {
    q: { ar: "ماذا عن عملي ودراستي؟", en: "What about my work and studies?" },
    a: {
      ar: "الإسلام لا يطلب منك ترك العمل أو الدراسة. يطلب أن تكون مصادر رزقك حلالًا، وأن تصلي في وقتك، وأن تتعامل بصدق. كثيرٌ من المسلمين يوازنون بين الاثنين بلا صعوبةٍ كبيرة.",
      en: "Islam does not ask you to leave your job or your studies. It asks that your income be lawful, that you keep your prayers on time, and that you deal honestly. Many Muslims balance both without great difficulty.",
    },
  },
  {
    q: { ar: "ما أول الأشياء التي أتعلمها؟", en: "What should I learn first?" },
    a: {
      ar: "الترتيب المريح: الطهارة (الوضوء)، ثم الصلاة، ثم الفاتحة وثلاث سور قصيرة، ثم أركان الإسلام والإيمان. ثم تأتي الأخلاق والصيام والزكاة والحج بالتدريج.",
      en: "A comfortable order: purification (ablution), then prayer, then al-Fātiḥah and three short sūrahs, then the pillars of Islam and faith. Character, fasting, zakāh and pilgrimage come gradually after that.",
    },
  },
];

export function Considering() {
  const { bi, t } = useApp();
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-deep text-paper">
        <Plate
          src={IMG.courtyard}
          alt={bi({ ar: "صحنٌ حجري بأقواس وشجرة زيتون", en: "A stone courtyard arcade with an olive tree" })}
          className="absolute inset-0"
          imgClass="opacity-45 object-[center_55%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/82 to-ink-deep/50" />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 sm:px-8">
          <Label>{bi({ ar: "بلا ضغط", en: "No pressure" })}</Label>
          <h1 className="mt-6 font-naskh text-[clamp(2.5rem,8.5vw,5.6rem)] leading-[1.12]">
            {bi({ ar: "إذا كنت تفكر في الإسلام", en: "If you are thinking about Islam" })}
          </h1>
          <p className="measure mt-7 text-[1.12rem] leading-[2.1] text-paper/85">
            {bi({
              ar: "هذه الصفحة ليست دعوةً للضغط عليك، ولا تطلب منك قرارًا سريعًا. هي إجاباتٌ صادقة على أسئلةٍ يطرحها الناس فعلًا حين يفكّرون في الإسلام. خذ وقتك، واقرأ، واسأل.",
              en: "This page is not here to pressure you, and it asks for no quick decision. It gives honest answers to the questions people really ask when they consider Islam. Take your time, read, and ask.",
            })}
          </p>
        </div>
      </section>

      <Section
        n="٠١"
        label={bi({ ar: "أسئلةٌ مطمئنة", en: "Reassuring questions" })}
        title={bi({ ar: "ما الذي يدور في بالك؟", en: "What is on your mind?" })}
        intro={bi({
          ar: "إن لم تجد سؤالك هنا، اكتبه لنا في صفحة «اسأل عن الإسلام». كل الأسئلة تُقرأ، ولا ننشر أسئلتك الشخصية دون موافقتك.",
          en: "If your question is not here, write it to us on the 'Ask' page. Every question is read, and personal questions are never published without your consent.",
        })}
      >
        <div className="border-t border-ink/12 dark:border-night-ink/12">
          {THINKING.map((item, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="grid scroll-mt-28 gap-x-10 gap-y-4 border-b border-ink/12 py-9 md:grid-cols-[8.5rem_minmax(0,1fr)] dark:border-night-ink/12">
                <span className="num text-2xl text-gold/85">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-[clamp(1.35rem,3.2vw,2rem)] leading-tight text-ink dark:text-night-ink">
                    {bi(item.q)}
                  </h2>
                  <p className="measure mt-4 text-[1.05rem] leading-[2.1] text-wash dark:text-night-ink/78">
                    {bi(item.a)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 border border-gold/35 bg-paper-2 p-9 text-center dark:bg-night-2">
          <h2 className="font-display text-[clamp(1.85rem,4.6vw,2.85rem)] leading-[1.2] text-ink dark:text-night-ink">
            {bi({
              ar: "لا أحد سيسألك عن قرارٍ لم تأخذه بحرية.",
              en: "No one will ask you for a decision you did not make freely.",
            })}
          </h2>
          <p className="measure mx-auto mt-5 text-[1.02rem] leading-[2.05] text-wash dark:text-night-ink/75">
            {bi({
              ar: "إن أردت معرفة المزيد فقط، فهذا خيارٌ محترم تمامًا. وإن أردت أن نرافقك في الخطوات الأولى، فسنكون هنا.",
              en: "If you only want to know more, that is a fully respected choice. If you would like company for the first steps, we will be here.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink to="/ask" variant="solid">{t("cta.more")}</CtaLink>
            <CtaLink to="/new-muslim" variant="outline">{t("nav.newmuslim")}</CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ================================================================== */
/* New Muslim — graded path with progress                              */
/* ================================================================== */
export function NewMuslim() {
  const { bi, t } = useApp();
  const storageKey = "di:progress";
  const [done, setDone] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) ?? "[]") as string[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(done));
  }, [done]);

  const total = useMemo(() => LEVELS.reduce((n, l) => n + l.items.length, 0), []);
  const pct = total ? Math.round((done.length / total) * 100) : 0;

  const toggle = (id: string) =>
    setDone((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]));

  return (
    <>
      <Section
        n="٠٤"
        label={bi({ ar: "مسار تعليمي", en: "Learning path" })}
        title={bi({ ar: "أنا مسلم جديد", en: "I am a new Muslim" })}
        intro={bi({
          ar: "ثلاثةُ مستوياتٍ متدرّجة، صُمِّمت لتنتقل من «كيف أبدأ» إلى «كيف أعيش». علّم ما أتقنته، وسيبقى تقدمك محفوظًا على جهازك. لا يوجد وقتٌ محدد، ولا أحد يقيس سرعتك.",
          en: "Three graded levels that carry you from 'how do I begin' to 'how do I live it'. Tick off what you have settled into — your progress stays saved on your own device. There is no deadline, and no one is measuring your speed.",
        })}
      >
        {/* progress */}
        <div className="sticky top-[6.6rem] z-20 -mx-2 border border-gold/30 bg-paper/95 px-6 py-5 backdrop-blur dark:bg-night/95">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-4">
                <p className="label !text-[0.58rem]">{t("common.progress")}</p>
                <p className="num text-[0.82rem] text-gold">
                  {done.length} / {total} · {pct}% {t("common.done")}
                </p>
              </div>
              <div className="mt-3 h-[3px] w-full bg-gold/20">
                <div
                  className="h-full bg-gold transition-[width] duration-500 ease-[cubic-bezier(.22,.61,.36,1)]"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setDone([])}
              className="border border-gold/30 px-4 py-2 text-[0.72rem] tracking-[0.16em] text-wash uppercase transition-colors hover:border-gold hover:text-gold dark:text-night-ink/65"
            >
              {t("common.reset")}
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-12">
          {LEVELS.map((level, li) => {
            const ids = level.items.map((_, i) => `${level.id}-${i}`);
            const levelDone = ids.filter((id) => done.includes(id)).length;
            return (
              <Reveal key={level.id} delay={li * 0.05}>
                <div className="border border-gold/25 bg-paper-2 p-8 dark:bg-night-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h2 className="text-[clamp(1.45rem,3.4vw,2.15rem)] leading-tight text-ink dark:text-night-ink">
                      {bi(level.name)}
                    </h2>
                    <span className="num text-[0.78rem] tracking-[0.16em] text-gold">
                      {levelDone}/{ids.length}
                    </span>
                  </div>
                  <p className="measure mt-4 text-[1.02rem] leading-[2.05] text-wash dark:text-night-ink/75">
                    {bi(level.goal)}
                  </p>

                  <ul className="mt-8 grid gap-px bg-gold/20 sm:grid-cols-2">
                    {level.items.map((item, i) => {
                      const id = `${level.id}-${i}`;
                      const checked = done.includes(id);
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            onClick={() => toggle(id)}
                            className={`flex h-full w-full items-start gap-4 p-6 text-start transition-colors ${
                              checked
                                ? "bg-gold/12"
                                : "bg-paper hover:bg-gold/6 dark:bg-night dark:hover:bg-gold/8"
                            }`}
                          >
                            <span
                              className={`mt-1 flex h-5 w-5 flex-none items-center justify-center border transition-colors ${
                                checked ? "border-gold bg-gold text-ink-deep" : "border-gold/45"
                              }`}
                              aria-hidden
                            >
                              {checked && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </span>
                            <span
                              className={`text-[1rem] leading-[1.9] ${
                                checked
                                  ? "text-ink/60 line-through decoration-gold/50 dark:text-night-ink/55"
                                  : "text-ink dark:text-night-ink/85"
                              }`}
                            >
                              {bi(item)}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 border border-gold/30 p-8">
          <Label>{bi({ ar: "تذكير لطيف", en: "A gentle reminder" })}</Label>
          <p className="measure mt-5 text-[1.02rem] leading-[2.05] text-wash dark:text-night-ink/75">
            {bi({
              ar: "المسلم الجديد ليس مطالبًا بالإتقان من اليوم الأول. «إذا لم تستطع فاستطِع» — المهم أن تبدأ، وأن تبقى الصلاة أولويةً واحدة على الأقل في يومك.",
              en: "A new Muslim is not required to be perfect from day one. The important thing is to begin, and to keep at least one prayer a day as a fixed priority. Everything else grows from there.",
            })}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CtaLink to="/quran/1" variant="solid">{bi({ ar: "اقرأ الفاتحة", en: "Read al-Fātiḥah" })}</CtaLink>
            <CtaLink to="/ask" variant="outline">{t("nav.ask")}</CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ================================================================== */
/* FAQ                                                                 */
/* ================================================================== */
export function Faq() {
  const { bi, t } = useApp();
  const [open, setOpen] = useState<string | null>(FAQS[0].id);

  return (
    <Section
      n="٠٥"
      label={bi({ ar: "أسئلة يسألها الناس", en: "Questions people ask" })}
      title={t("nav.faq")}
      intro={bi({
        ar: "إجاباتٌ متوازنة، بمصادرها، وبلا مبالغةٍ دعائية. حين يختلف الفقهاء نقول ذلك صراحةً، ولا نُقدِّم رأيًا واحدًا على أنه إجماع.",
        en: "Balanced answers with their sources and without promotional exaggeration. Where jurists have differed, we say so plainly rather than presenting one opinion as consensus.",
      })}
    >
      <div className="border-t border-ink/12 dark:border-night-ink/12">
        {FAQS.map((f, i) => {
          const isOpen = open === f.id;
          return (
            <div key={f.id} id={f.id} className="scroll-mt-28 border-b border-ink/12 dark:border-night-ink/12">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : f.id)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-5 py-7 text-start"
              >
                <span className="num mt-1 text-lg text-gold/80">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-[clamp(1.25rem,3vw,1.85rem)] leading-tight text-ink dark:text-night-ink">
                  {bi(f.q)}
                </span>
                <span
                  className={`mt-1 flex h-8 w-8 flex-none items-center justify-center border border-gold/40 text-gold transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(.22,.61,.36,1)] ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="measure pb-9 ps-[3.1rem]">
                    {f.a.map((p, k) => (
                      <p key={k} className="mt-4 text-[1.05rem] leading-[2.1] text-wash first:mt-0 dark:text-night-ink/78">
                        {bi(p)}
                      </p>
                    ))}
                    <SourceLine text={f.source} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <CtaLink to="/ask" variant="solid">{t("nav.ask")}</CtaLink>
        <CtaLink to="/sources" variant="outline">{t("nav.sources")}</CtaLink>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* Sources                                                             */
/* ================================================================== */
export function Sources() {
  const { bi } = useApp();

  return (
    <Section
      n="٠٦"
      label={bi({ ar: "التوثيق", en: "Documentation" })}
      title={bi({ ar: "المصادر والمراجع", en: "Sources and references" })}
      intro={bi({
        ar: "نُقسِّم مصادرنا إلى خمسة أقسام، ونذكر المصدر أسفل كل مقالٍ وموضوعٍ مهم. القاعدة المعلنة: لا يُنسب حديثٌ إلى النبي ﷺ دون التحقق من درجته ومصدره، ولا يُخلط بين القرآن والحديث والتفسير والترجمة.",
        en: "Our sources are grouped into five sections, and the source line sits beneath every important article. Our stated rule: no saying is attributed to the Prophet ﷺ without verifying its grade and source, and the Qur'an, ḥadīth, tafsīr and translation are never mixed up.",
      })}
    >
      <div className="space-y-10">
        {SOURCES.map((g, gi) => (
          <Reveal key={g.id} delay={gi * 0.04}>
            <div className="border border-gold/25 bg-paper-2 p-8 dark:bg-night-2">
              <div className="flex flex-wrap items-baseline gap-4">
                <span className="num text-xl text-gold">{String(gi + 1).padStart(2, "0")}</span>
                <h2 className="text-[clamp(1.45rem,3.2vw,2.05rem)] leading-tight text-ink dark:text-night-ink">
                  {bi(g.name)}
                </h2>
              </div>
              <p className="measure mt-4 text-[1rem] leading-[2.05] text-wash dark:text-night-ink/75">
                {bi(g.note)}
              </p>
              <ul className="mt-7 grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((it, i) => (
                  <li key={i} className="bg-paper p-6 dark:bg-night">
                    <p className="font-naskh text-[1.18rem] leading-snug text-ink dark:text-night-ink">
                      {bi(it.title)}
                    </p>
                    <p className="mt-2 text-[0.82rem] tracking-[0.12em] text-gold">{bi(it.author)}</p>
                    <p className="mt-3 text-[0.88rem] leading-[1.9] text-wash dark:text-night-ink/65">
                      {bi(it.note)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 border-s-2 border-gold/60 bg-paper-2 p-8 dark:bg-night-2">
        <Label>{bi({ ar: "القواعد التحريرية", en: "Editorial rules" })}</Label>
        <ul className="mt-6 space-y-4">
          {[
            {
              ar: "القرآن: النص العربي فقط هو القرآن. الترجمة ترجمةٌ للمعنى، والتفسير شرحٌ بشري.",
              en: "The Qur'an: only the Arabic text is the Qur'an. A translation renders meaning; tafsīr is human explanation.",
            },
            {
              ar: "الحديث: يُذكر اسم الكتاب ورقم الحديث ودرجته عند توفرها، والضعيف يُصرَّح بأنه ضعيف.",
              en: "Ḥadīth: the collection, number and grade are cited where known, and weak reports are explicitly labelled as weak.",
            },
            {
              ar: "الفقه: عند اختلاف المذاهب نذكر الاختلاف، ولا ندّعي إجماعًا لا وجود له.",
              en: "Jurisprudence: where the schools differ, the difference is stated; we claim no consensus that does not exist.",
            },
            {
              ar: "الصور: لا تجسيد للنبي محمد ﷺ أو لأي نبي، ولا محتوى مسيءٌ لأي دينٍ أو جماعة.",
              en: "Images: no depiction of the Prophet Muhammad ﷺ or any prophet, and no content offensive to any faith or group.",
            },
          ].map((r, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rotate-45 bg-gold" />
              <span className="text-[1rem] leading-[2] text-wash dark:text-night-ink/75">{bi(r)}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* Ask + Contact                                                       */
/* ================================================================== */
type FormMode = "ask" | "contact";

function Form({ mode }: { mode: FormMode }) {
  const { bi, t, lang } = useApp();
  const [values, setValues] = useState({
    name: "",
    email: "",
    language: lang as string,
    field: mode === "ask" ? "belief" : "general",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const topics =
    mode === "ask"
      ? [
          { v: "belief", ar: "العقيدة والتوحيد", en: "Belief and monotheism" },
          { v: "quran", ar: "القرآن الكريم", en: "The Qur'an" },
          { v: "seerah", ar: "السيرة النبوية", en: "The seerah" },
          { v: "worship", ar: "العبادات والصلاة", en: "Worship and prayer" },
          { v: "life", ar: "الحياة والأخلاق", en: "Life and ethics" },
          { v: "comparison", ar: "مقارنة الأديان", en: "Comparative religion" },
        ]
      : [
          { v: "general", ar: "تواصل عام", en: "General contact" },
          { v: "content", ar: "اقتراح محتوى", en: "Content suggestion" },
          { v: "error", ar: "الإبلاغ عن خطأ", en: "Report an error" },
          { v: "language", ar: "طلب إضافة لغة", en: "Request a language" },
          { v: "story", ar: "إرسال قصة", en: "Submit a story" },
        ];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (values.message.trim().length < 10)
      next.message = bi({
        ar: "اكتب سؤالك بتفصيلٍ أكبر (١٠ أحرف على الأقل).",
        en: "Please write a little more (at least 10 characters).",
      });
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email))
      next.email = bi({ ar: "البريد الإلكتروني غير صحيح.", en: "That email address looks invalid." });
    if (!values.consent)
      next.consent = bi({
        ar: "نحتاج موافقتك على معالجة رسالتك.",
        en: "We need your consent to process your message.",
      });
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-gold/35 bg-paper-2 p-10 text-center dark:bg-night-2">
        <div className="mx-auto flex h-14 w-14 rotate-45 items-center justify-center border border-gold">
          <span className="-rotate-45 text-gold text-2xl">✓</span>
        </div>
        <h3 className="mt-8 text-[1.6rem] text-ink dark:text-night-ink">
          {bi({ ar: "وصلتنا رسالتك، شكرًا لك.", en: "Your message has reached us. Thank you." })}
        </h3>
        <p className="measure mx-auto mt-4 text-[1.02rem] leading-[2.05] text-wash dark:text-night-ink/75">
          {bi({
            ar: "سنحاول الإجابة عن سؤالك بالاعتماد على المصادر الإسلامية الموثوقة. لا ننشر أسئلتك الشخصية، ولا نشارك بريدك مع أي جهة.",
            en: "We will try to answer using reliable Islamic sources. We never publish personal questions, and we never share your email with anyone.",
          })}
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setValues({ ...values, message: "", consent: false });
          }}
          className="mt-8 border border-gold/40 px-6 py-3 text-[0.75rem] tracking-[0.16em] text-gold uppercase hover:bg-gold/15"
        >
          {bi({ ar: "إرسال رسالة أخرى", en: "Send another message" })}
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full border border-gold/30 bg-transparent px-4 py-3 text-[0.98rem] text-ink outline-none transition-colors focus:border-gold dark:text-night-ink";

  return (
    <form onSubmit={submit} className="border border-gold/25 bg-paper-2 p-8 dark:bg-night-2">
      <p className="label !text-[0.58rem]">
        {mode === "ask" ? bi({ ar: "نموذج السؤال", en: "Question form" }) : bi({ ar: "نموذج التواصل", en: "Contact form" })}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.82rem] tracking-[0.12em] text-wash uppercase dark:text-night-ink/60">
            {bi({ ar: "الاسم", en: "Name" })} · {t("common.optional")}
          </span>
          <input
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className={fieldClass}
            autoComplete="name"
          />
        </label>

        <label className="block">
          <span className="text-[0.82rem] tracking-[0.12em] text-wash uppercase dark:text-night-ink/60">
            {bi({ ar: "البريد الإلكتروني", en: "Email" })} · {t("common.optional")}
          </span>
          <input
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={fieldClass}
            type="email"
            autoComplete="email"
          />
          {errors.email && <span className="mt-2 block text-[0.8rem] text-gold">{errors.email}</span>}
        </label>

        <label className="block">
          <span className="text-[0.82rem] tracking-[0.12em] text-wash uppercase dark:text-night-ink/60">
            {t("common.language")}
          </span>
          <select
            value={values.language}
            onChange={(e) => setValues({ ...values, language: e.target.value })}
            className={fieldClass}
          >
            {LANGS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-[0.82rem] tracking-[0.12em] text-wash uppercase dark:text-night-ink/60">
            {bi({ ar: "المجال", en: "Field" })}
          </span>
          <select
            value={values.field}
            onChange={(e) => setValues({ ...values, field: e.target.value })}
            className={fieldClass}
          >
            {topics.map((o) => (
              <option key={o.v} value={o.v}>
                {bi(o)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-6 block">
        <span className="text-[0.82rem] tracking-[0.12em] text-wash uppercase dark:text-night-ink/60">
          {mode === "ask" ? bi({ ar: "السؤال", en: "Your question" }) : bi({ ar: "الرسالة", en: "Your message" })}
        </span>
        <textarea
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          rows={6}
          className={fieldClass}
          placeholder={
            mode === "ask"
              ? bi({ ar: "اكتب سؤالك هنا…", en: "Write your question here…" })
              : bi({ ar: "اكتب رسالتك هنا…", en: "Write your message here…" })
          }
        />
        {errors.message && <span className="mt-2 block text-[0.8rem] text-gold">{errors.message}</span>}
      </label>

      <label className="mt-6 flex items-start gap-3">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(e) => setValues({ ...values, consent: e.target.checked })}
          className="mt-1.5 h-4 w-4 accent-[#b98c34]"
        />
        <span className="text-[0.92rem] leading-[1.9] text-wash dark:text-night-ink/70">
          {bi({
            ar: "أوافق على معالجة رسالتي للرد عليها فقط، وأفهم أنها لن تُنشر دون إذني.",
            en: "I consent to my message being processed only in order to reply, and I understand it will not be published without my permission.",
          })}
          {errors.consent && <span className="mt-2 block text-[0.8rem] text-gold">{errors.consent}</span>}
        </span>
      </label>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="bg-ink px-8 py-3.5 text-[0.75rem] tracking-[0.18em] text-paper uppercase transition-colors hover:bg-leaf dark:bg-gold dark:text-ink-deep"
        >
          {t("common.submit")}
        </button>
        <p className="text-[0.82rem] leading-[1.85] text-wash/90 dark:text-night-ink/60">
          {bi({
            ar: "سنحاول الإجابة عن سؤالك بالاعتماد على المصادر الإسلامية الموثوقة.",
            en: "We will try to answer your question using reliable Islamic sources.",
          })}
        </p>
      </div>
    </form>
  );
}

export function Ask() {
  const { bi, t } = useApp();
  return (
    <Section
      n="٠٧"
      label={bi({ ar: "اسأل", en: "Ask" })}
      title={t("nav.ask")}
      intro={bi({
        ar: "اسأل عن أي شيء: العقيدة، أو القرآن، أو السيرة، أو الصلاة، أو الشبهات التي سمعتها، أو أسئلة حياتك العملية. لا يوجد سؤالٌ محرَّم، ولا نطلب منك أي التزام.",
        en: "Ask about anything: belief, the Qur'an, the seerah, prayer, the objections you have heard, or the practical questions of your life. No question is off limits, and we ask nothing of you in return.",
      })}
    >
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <Form mode="ask" />
        <aside>
          <div className="border border-gold/25 p-8">
            <Label>{bi({ ar: "خصوصيتك", en: "Your privacy" })}</Label>
            <ul className="mt-6 space-y-4">
              {[
                {
                  ar: "الاسم والبريد اختياريان تمامًا.",
                  en: "Name and email are entirely optional.",
                },
                {
                  ar: "لا ننشر أسئلتك الشخصية دون موافقتك الكتابية.",
                  en: "Personal questions are never published without your written consent.",
                },
                {
                  ar: "لا نستخدم أدوات تتبّعٍ إعلانية، ولا نبيع البيانات.",
                  en: "No advertising trackers, and no data is ever sold.",
                },
                {
                  ar: "يمكنك طلب حذف رسالتك في أي وقت.",
                  en: "You may ask us to delete your message at any time.",
                },
              ].map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-none rotate-45 bg-gold" />
                  <span className="text-[0.95rem] leading-[1.95] text-wash dark:text-night-ink/72">{bi(r)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 border border-gold/25 bg-paper-2 p-8 dark:bg-night-2">
            <p className="label !text-[0.58rem]">{bi({ ar: "قبل أن تسأل", en: "Before you ask" })}</p>
            <p className="mt-5 text-[0.98rem] leading-[2.05] text-wash dark:text-night-ink/72">
              {bi({
                ar: "قد تجد إجابتك أسرع في صفحة الأسئلة الشائعة، أو في قسم «لماذا الإسلام؟». وكثيرٌ من الأسئلة عن القرآن والإسلام لها إجاباتٌ موثّقة في صفحة المصادر.",
                en: "You may find your answer faster in the FAQ or in 'Why Islam?'. Many questions about the Qur'an and Islam already have documented answers on the Sources page.",
              })}
            </p>
            <div className="mt-6">
              <CtaLink to="/faq" variant="outline">{t("nav.faq")}</CtaLink>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}

export function Contact() {
  const { bi, t } = useApp();
  return (
    <Section
      n="٠٨"
      label={bi({ ar: "تواصل", en: "Contact" })}
      tone="alt"
      title={t("nav.contact")}
      intro={bi({
        ar: "اختر ما يناسبك: سؤالٌ عن الإسلام، أو اقتراحٌ للمحتوى، أو الإبلاغ عن خطأ، أو طلب إضافة لغة، أو مشاركة قصتك. كل رسالةٍ تُقرأ ويُردُّ عليها.",
        en: "Choose what fits: a question about Islam, a content suggestion, an error report, a request for a new language, or sharing your story. Every message is read and answered.",
      })}
    >
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <Form mode="contact" />
        <aside className="space-y-px bg-gold/20">
          {[
            {
              t: bi({ ar: "الإبلاغ عن خطأ في المحتوى", en: "Report a content error" }),
              d: bi({
                ar: "إذا وجدت نصًّا غير دقيق أو مصدرًا غير مذكور، أخبرنا وسنصححه ونذكرك في الشكر.",
                en: "If you find an inaccurate line or a missing source, tell us and we will correct it and credit you.",
              }),
            },
            {
              t: bi({ ar: "طلب إضافة لغة", en: "Request a language" }),
              d: bi({
                ar: "الموقع يدعم عشر لغات في الواجهة، والمحتوى الكامل متاحٌ بالعربية والإنجليزية، ونعمل على التوسعة.",
                en: "The interface supports ten languages; full content is available in Arabic and English, and we are expanding.",
              }),
            },
            {
              t: bi({ ar: "اقتراحات المحتوى", en: "Content suggestions" }),
              d: bi({
                ar: "اقترح موضوعًا أو سؤالًا ناقصًا، وسيُراجع من قِبل فريق التحرير قبل النشر.",
                en: "Suggest a missing topic or question; it will be reviewed by the editorial team before publication.",
              }),
            },
            {
              t: bi({ ar: "قصتك", en: "Your story" }),
              d: bi({
                ar: "نقبل قصصًا موثّقة فقط، مع موافقتك الكتابية، ولا نُنشر أي شيءٍ دون تحقق.",
                en: "We accept documented stories only, with your written consent, and publish nothing without verification.",
              }),
            },
          ].map((c, i) => (
            <div key={i} className="bg-paper p-8 dark:bg-night">
              <h3 className="text-[1.12rem] text-ink dark:text-night-ink">{c.t}</h3>
              <p className="mt-3 text-[0.95rem] leading-[1.95] text-wash dark:text-night-ink/70">{c.d}</p>
            </div>
          ))}
        </aside>
      </div>

    </Section>
  );
}

/* ================================================================== */
export function NotFound() {
  const { bi } = useApp();
  return (
    <section className="relative overflow-hidden bg-paper py-28 dark:bg-night">
      <GeometricField className="pointer-events-none absolute inset-0 h-full w-full text-gold/12" />
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <p className="num text-[0.8rem] tracking-[0.28em] text-gold">404</p>
        <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.15] text-ink dark:text-night-ink">
          {bi({ ar: "هذه الصفحة غير موجودة.", en: "This page does not exist." })}
        </h1>
        <p className="mt-6 text-[1.05rem] leading-[2] text-wash dark:text-night-ink/72">
          {bi({
            ar: "ربما تغيّر الرابط. يمكنك البدء من الصفحة الرئيسية، أو البحث في الموقع.",
            en: "The link may have changed. You can start from the home page, or search the site.",
          })}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CtaLink to="/" variant="solid">{bi({ ar: "الصفحة الرئيسية", en: "Home" })}</CtaLink>
          <CtaLink to="/quran" variant="outline">{bi({ ar: "القرآن الكريم", en: "The Qur'an" })}</CtaLink>
        </div>
      </div>
    </section>
  );
}
