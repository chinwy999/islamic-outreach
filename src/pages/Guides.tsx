import { useApp } from "../lib/store";
import { TOPICS, ESSAYS, TIMELINE, STORIES } from "../lib/data";
import { IMG } from "../lib/assets";
import { CtaLink, GeometricField, Label, Plate, Reveal, Section, SourceLine } from "../components/Chrome";

/* ================================================================== */
/* What is Islam                                                       */
/* ================================================================== */
export function WhatIsIslam() {
  const { bi, go } = useApp();

  return (
    <>
      <Section
        n="٠١"
        label={bi({ ar: "التعريف الأساسي", en: "The basic definition" })}
        title={bi({
          ar: "ما هو الإسلام؟ إجابةٌ لمن لا يعرف عنه شيئًا.",
          en: "What is Islam? An answer for someone who knows nothing about it.",
        })}
        intro={bi({
          ar: "الإسلام رسالةُ التوحيد: أن يُعبَد الله وحده، وأن تُقام الحياة على العدل والرحمة. وهو خاتمةُ رسالات الأنبياء، وأُنزل على النبي محمد ﷺ في مكة قبل أربعة عشر قرنًا. هذه ثمانيةُ موضوعات، كلٌّ منها قائمٌ بذاته، مع مصدره في أسفله.",
          en: "Islam is the message of monotheism: that God alone is worshipped, and that life is built on justice and mercy. It is the final message of the prophets, revealed to the Prophet Muhammad ﷺ in Makkah fourteen centuries ago. Below are eight self-contained topics, each with its source at the foot.",
        })}
      >
        <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4 dark:bg-night-ink/10">
          {TOPICS.map((topic, i) => (
            <Reveal key={topic.id} delay={i * 0.03}>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById(topic.id);
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group card-lift h-full w-full border border-transparent bg-paper p-6 text-start dark:bg-night"
              >
                <span className="num text-[0.72rem] text-gold">٠{i + 1}</span>
                <h3 className="mt-3 text-[1.12rem] leading-snug text-ink transition-colors group-hover:text-gold dark:text-night-ink">
                  {bi(topic.title)}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-[1.85] text-wash dark:text-night-ink/60">
                  {bi(topic.summary)}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {TOPICS.map((topic, i) => (
        <section
          key={topic.id}
          id={topic.id}
          className={i % 2 === 0 ? "bg-paper dark:bg-night" : "bg-paper-2 dark:bg-night-2"}
        >
          <div className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 sm:px-8">
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-[8.5rem_minmax(0,1fr)]">
              <div className="md:sticky md:top-28 md:self-start">
                <div className="flex items-baseline gap-3">
                  <span className="num text-3xl text-gold">٠{i + 1}</span>
                  <span className="h-px flex-1 bg-gold/40" />
                </div>
                <p className="label mt-3 !text-[0.6rem]">{bi(topic.tag)}</p>
              </div>
              <div>
                <h2 className="font-display text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.18] text-ink dark:text-night-ink">
                  {bi(topic.title)}
                </h2>
                <div className="mt-7 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                  <div className="measure">
                    {topic.body.map((p, k) => (
                      <p key={k} className="mt-5 text-[1.0625rem] leading-[2.1] text-ink/85 first:mt-0 dark:text-night-ink/80">
                        {bi(p)}
                      </p>
                    ))}
                    <SourceLine text={topic.source} />
                  </div>
                  <aside className="border-s border-gold/35 ps-6">
                    <p className="label !text-[0.58rem]">
                      {bi({ ar: "خلاصة", en: "In brief" })}
                    </p>
                    <ul className="mt-5 space-y-4">
                      {topic.points.map((pt, k) => (
                        <li key={k} className="flex items-start gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 flex-none rotate-45 bg-gold" />
                          <span className="text-[0.95rem] leading-[1.9] text-wash dark:text-night-ink/70">
                            {bi(pt)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-paper-3 py-20 dark:bg-night-2">
        <GeometricField className="pointer-events-none absolute inset-0 h-full w-full text-gold/18" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-[clamp(1.9rem,5vw,3rem)] leading-[1.2] text-ink dark:text-night-ink">
            {bi({ ar: "هل لديك سؤال؟ اكتشف المزيد عن الإسلام.", en: "Do you have a question? Discover more about Islam." })}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink to="/ask" variant="solid">{bi({ ar: "اسأل عن الإسلام", en: "Ask a question" })}</CtaLink>
            <button
              type="button"
              onClick={() => go("/why-islam")}
              className="inline-flex items-center gap-2 border border-ink/25 px-6 py-3.5 text-sm tracking-[0.08em] text-ink transition-colors hover:border-gold hover:text-gold dark:border-night-ink/25 dark:text-night-ink"
            >
              {bi({ ar: "لماذا الإسلام؟", en: "Why Islam?" })}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ================================================================== */
/* Why Islam                                                           */
/* ================================================================== */
export function WhyIslam() {
  const { bi, t } = useApp();

  return (
    <>
      <Section
        n="٠٢"
        label={bi({ ar: "الأسئلة الكبرى", en: "The big questions" })}
        title={bi({ ar: "لماذا الإسلام؟", en: "Why Islam?" })}
        intro={bi({
          ar: "هذه صفحةُ أسئلةٍ لا صفحةُ مقارناتٍ هجومية. نعرض ما يقوله الإسلام عن الخلق والغرض والغيب والمستقبل، ونذكر المصادر، ونترك لك حرية التفكير والمقارنة. نحترم كل إنسانٍ يبحث عن الحقيقة بطريقته.",
          en: "This is a page of questions, not of hostile comparison. It sets out what Islam says about creation, purpose, the unseen and the future, with sources, and leaves you free to think and compare. We respect every person who is searching for truth in their own way.",
        })}
      >
        <div className="border-t border-ink/12 dark:border-night-ink/12">
          {ESSAYS.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.04}>
              <article id={e.id} className="grid scroll-mt-28 gap-x-10 gap-y-5 border-b border-ink/12 py-12 md:grid-cols-[8.5rem_minmax(0,1fr)] dark:border-night-ink/12">
                <div>
                  <span className="num text-3xl text-gold/85">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h2 className="text-[clamp(1.55rem,3.6vw,2.35rem)] leading-tight text-ink dark:text-night-ink">
                    {bi(e.q)}
                  </h2>
                  <div className="measure mt-6">
                    {e.a.map((p, k) => (
                      <p key={k} className="mt-5 text-[1.0625rem] leading-[2.1] text-ink/85 first:mt-0 dark:text-night-ink/80">
                        {bi(p)}
                      </p>
                    ))}
                    <SourceLine text={e.source} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 border border-gold/30 bg-paper-2 p-8 dark:bg-night-2">
          <Label>{bi({ ar: "ملاحظة مهمة", en: "An important note" })}</Label>
          <p className="measure mt-5 text-[1.02rem] leading-[2.05] text-wash dark:text-night-ink/75">
            {bi({
              ar: "لا ندّعي أن الأسئلة هنا تستنفد كل شيء، ولا ندّعي أن الإجابات مفهومةٌ لكل إنسانٍ في كل حال. إن لم تجد سؤالك، فهذا لا يعني أن السؤال سيئًا — اكتبه لنا وسنحاول الإجابة عنه بمصداقية.",
              en: "We do not claim these questions cover everything, and we do not claim the answers are equally clear to every person in every situation. If your question is not here, that does not make it a bad question — write it to us and we will try to answer it honestly.",
            })}
          </p>
          <div className="mt-7">
            <CtaLink to="/ask" variant="outline">{t("nav.ask")}</CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ================================================================== */
/* The Prophet ﷺ                                                      */
/* ================================================================== */
export function Prophet() {
  const { bi, t } = useApp();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-deep text-paper">
        <Plate
          src={IMG.valley}
          alt={bi({ ar: "وادٍ حجري عند الفجر", en: "A stony valley at first light" })}
          className="absolute inset-0"
          imgClass="opacity-45 object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/80 to-ink-deep/45" />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 sm:px-8">
          <Label>{bi({ ar: "السيرة النبوية", en: "The prophetic biography" })}</Label>
          <h1 className="mt-6 font-naskh text-[clamp(2.6rem,9vw,6rem)] leading-[1.12]">
            {bi({ ar: "تعرّف على النبي محمد ﷺ", en: "Get to know the Prophet Muhammad ﷺ" })}
          </h1>
          <p className="measure mt-7 text-[1.12rem] leading-[2.1] text-paper/85">
            {bi({
              ar: "سيرةٌ موثّقة، مأخوذةٌ من كتب السيرة والحديث الصحيحة، مع ذكر المصدر عند كل محطة. لا نستخدم أي صورةٍ أو تجسيدٍ للنبي محمد ﷺ أو لأي نبيٍّ آخر، احترامًا لهم جميعًا.",
              en: "A documented life, drawn from the books of seerah and the authentic ḥadīth collections, with the source named at every station. We use no image or depiction of the Prophet Muhammad ﷺ or of any other prophet, out of respect for them all.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink to="/quran" variant="solid">{t("nav.quran")}</CtaLink>
            <CtaLink to="/sources" variant="outline">{t("nav.sources")}</CtaLink>
          </div>
        </div>
      </section>

      {/* character */}
      <Section
        n="٠١"
        label={bi({ ar: "الخلُق", en: "Character" })}
        title={bi({ ar: "رحمته وخلقه ﷺ", en: "His mercy and character" })}
        intro={bi({
          ar: "وصفه القرآن بأنه «رحمة للعالمين»، ووصفته زوجته عائشة بأنه «كان خُلقه القرآن». وهذه نماذجٌ موثّقة من تعامله مع الناس والضعفاء والحيوان، بلا مبالغةٍ ولا تجميلٍ زائد.",
          en: "The Qur'an describes him as 'a mercy to the worlds' (21:107), and his wife ʿĀʾishah described him as 'the Qur'an walking'. These are documented examples of how he dealt with people, the vulnerable and animals — without exaggeration or over-embellishment.",
        })}
      >
        <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3 dark:bg-night-ink/10">
          {[
            {
              t: bi({ ar: "مع الأطفال", en: "With children" }),
              d: bi({
                ar: "كان يُقبّل الحسن بن علي، ويرفع الصبيان على الدابة، ويقول: «من لا يرحم الناس لا يرحمه الله» (متفق عليه).",
                en: "He would kiss al-Ḥasan ibn ʿAlī, seat children on his mount, and say: 'He who does not show mercy to people will not be shown mercy by God' (agreed upon).",
              }),
            },
            {
              t: bi({ ar: "مع الضعفاء", en: "With the vulnerable" }),
              d: bi({
                ar: "كان يجلس مع الفقراء ويُطعمهم، ويأمر بحقوق المرأة واليتيم، ويقول: «المسلم أخو المسلم» (متفق عليه).",
                en: "He sat with the poor and ate with them, affirmed the rights of women and orphans, and said: 'A Muslim is the brother of a Muslim' (agreed upon).",
              }),
            },
            {
              t: bi({ ar: "مع الحيوان", en: "With animals" }),
              d: bi({
                ar: "بلغ في المنبر: «إن المرأة عذّبت في هرة فدخلت فيها النار» (صحيح مسلم)، ونُهي عن ركوب الحيوان المُثقَل.",
                en: "He said from the pulpit: 'A woman was punished because of a cat she confined until it died' (Ṣaḥīḥ Muslim), and forbade overburdening animals.",
              }),
            },
            {
              t: bi({ ar: "مع الأعداء", en: "With enemies" }),
              d: bi({
                ar: "عفا يوم فتح مكة وقال: «اذهبوا فأنتم الطلقاء»، ولم يُجبر أحدًا على الدخول في الإسلام.",
                en: "On the day Makkah was opened he forgave its people, saying: 'Go, you are free,' and compelled no one to enter Islam.",
              }),
            },
            {
              t: bi({ ar: "في بيته", en: "In his home" }),
              d: bi({
                ar: "كان يخدم أهله، ويخيط ثوبه، ويعالج نعله، ويشارك زوجاته الحديث والمزاح (صحيح البخاري).",
                en: "He served his household, mended his clothes and his sandals, and shared conversation and gentle humour with his wives (Ṣaḥīḥ al-Bukhārī).",
              }),
            },
            {
              t: bi({ ar: "في عدلِه", en: "In justice" }),
              d: bi({
                ar: "قال في خطبة الوداع: «لا فضل لعربيٍّ على أعجميٍّ إلا بالتقوى»، وقال: «كلكم راعٍ وكلكم مسؤولٌ عن رعيته» (متفق عليه).",
                en: "In the Farewell Sermon he said: 'No Arab is superior to a non-Arab except by God-consciousness,' and: 'Each of you is a shepherd and each of you is responsible for his flock' (agreed upon).",
              }),
            },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="h-full bg-paper p-8 dark:bg-night">
                <h3 className="text-[1.2rem] text-ink dark:text-night-ink">{c.t}</h3>
                <p className="mt-4 text-[0.95rem] leading-[2] text-wash dark:text-night-ink/70">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* timeline */}
      <Section
        n="٠٢"
        label={bi({ ar: "المحطات", en: "Stations" })}
        tone="alt"
        title={bi({ ar: "أهم أحداث سيرته ﷺ", en: "The key events of his life" })}
        intro={bi({
          ar: "عشر محطات مرتبةٌ زمنيًا. لكل محطةٍ مصدرها، وبين بعضها اختلافاتٌ في التواريخ نقليّةٌ معروفة عند أهل السيرة.",
          en: "Ten stations in chronological order, each with its source. As with any ancient history, some dates are reported with variation — a fact well known to historians of the seerah.",
        })}
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-[7px] w-px bg-gold/35" aria-hidden />
          {TIMELINE.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.03}>
              <article id={item.id} className="relative scroll-mt-28 ps-10 pb-10">
                <span className="absolute start-0 top-2 h-[15px] w-[15px] rotate-45 border border-gold bg-paper-2 dark:bg-night-2" />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="num text-[0.78rem] tracking-[0.18em] text-gold">{bi(item.year)}</span>
                  <span className="text-[0.75rem] tracking-[0.14em] text-wash uppercase dark:text-night-ink/55">
                    {bi(item.place)}
                  </span>
                </div>
                <h3 className="mt-2 text-[1.45rem] text-ink dark:text-night-ink">{bi(item.title)}</h3>
                <p className="measure mt-3 text-[1.02rem] leading-[2.05] text-wash dark:text-night-ink/72">
                  {bi(item.body)}
                </p>
                <SourceLine text={item.source} />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 border border-gold/35 bg-paper p-8 dark:bg-night">
          <Label>{bi({ ar: "قاعدة مبدئية", en: "A standing rule" })}</Label>
          <p className="measure mt-5 text-[1.02rem] leading-[2.05] text-wash dark:text-night-ink/75">
            {bi({
              ar: "لا يُصوَّر النبي محمد ﷺ ولا أيُّ نبيٍّ آخر في هذا الموقع، ولا في أيِّ محتوىٍ نُنشئه. كما لا نُفرِّق بين الأنبياء في الإيمان، ولا نقبل الإساءة إلى أي دينٍ أو جماعة.",
              en: "The Prophet Muhammad ﷺ and every other prophet are never depicted on this site or in any content we produce. We make no distinction between the prophets in faith, and we accept no insult toward any religion or community.",
            })}
          </p>
        </div>
      </Section>
    </>
  );
}

/* ================================================================== */
/* Stories                                                             */
/* ================================================================== */
export function Stories() {
  const { bi, t } = useApp();

  return (
    <>
      <Section
        n="٠٣"
        label={bi({ ar: "قصص موثّقة", en: "Documented accounts" })}
        title={bi({ ar: "قصص الهداية", en: "Stories of guidance" })}
        intro={bi({
          ar: "هذه قصصٌ موثّقة لأشخاصٍ حقيقيين، مأخوذةٌ من رسائلهم ومقابلاتهم وكتاباتهم المنشورة، مع ذكر المصدر. لا نخترع قصصًا، ولا نُنسب إلى أحدٍ ما لم يقله. القصة الإنسانية تختلف من شخصٍ لآخر، وما نعرضه هنا هو تجربة هؤلاء الناس بالتحديد.",
          en: "These are documented accounts of real people, taken from their letters, interviews and published writings, each with its source. We invent nothing and attribute to no one what they did not say. Every human story differs; what follows is the experience of these specific people.",
        })}
      >
        <div className="space-y-4">
          {STORIES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <article id={s.id} className="scroll-mt-28 border border-gold/25 bg-paper-2 p-8 dark:bg-night-2 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="num text-2xl text-gold">٠{i + 1}</span>
                      <h2 className="text-[clamp(1.55rem,3.6vw,2.25rem)] leading-tight text-ink dark:text-night-ink">
                        {bi(s.name)}
                      </h2>
                    </div>
                    <p className="mt-2 text-[0.78rem] tracking-[0.16em] text-wash uppercase dark:text-night-ink/55">
                      {bi(s.meta)}
                    </p>

                    <div className="mt-7 space-y-5">
                      {[
                        { l: bi({ ar: "قبل البحث", en: "Before" }), v: bi(s.before) },
                        { l: bi({ ar: "كيف بدأ البحث", en: "How the search began" }), v: bi(s.search) },
                        { l: bi({ ar: "ماذا اكتشف", en: "What was found" }), v: bi(s.found) },
                        { l: bi({ ar: "ماذا تغيّر", en: "What changed" }), v: bi(s.after) },
                      ].map((row) => (
                        <div key={row.l} className="border-s border-gold/30 ps-5">
                          <p className="label !text-[0.56rem]">{row.l}</p>
                          <p className="mt-2 text-[1rem] leading-[2] text-wash dark:text-night-ink/75">{row.v}</p>
                        </div>
                      ))}
                    </div>
                    <SourceLine text={s.source} />
                  </div>

                  <aside className="border-t border-gold/25 pt-7 lg:border-s lg:border-t-0 lg:ps-8 lg:pt-0">
                    <p className="label !text-[0.58rem]">
                      {bi({ ar: "الأسئلة التي كانت لديه", en: "The questions they asked" })}
                    </p>
                    <ul className="mt-5 space-y-5">
                      {s.questions.map((q, k) => (
                        <li key={k} className="flex items-start gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 flex-none rotate-45 bg-gold" />
                          <span className="text-[1.02rem] leading-[1.95] text-ink dark:text-night-ink/85">{bi(q)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 border-t border-gold/25 pt-6">
                      <p className="text-[0.88rem] leading-[1.95] text-wash dark:text-night-ink/65">
                        {bi({
                          ar: "هل لديك قصتك؟ يمكنك إرسالها، وسننشرها بعد التحقق من التفاصيل وموافقتك الكتابية.",
                          en: "Have your own story? You can send it, and we will publish it only after checking the details and with your written consent.",
                        })}
                      </p>
                      <div className="mt-5">
                        <CtaLink to="/contact" variant="outline">{t("nav.contact")}</CtaLink>
                      </div>
                    </div>
                  </aside>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 border border-gold/30 p-8">
          <Label>{bi({ ar: "أمانة النشر", en: "Publishing integrity" })}</Label>
          <p className="measure mt-5 text-[1.02rem] leading-[2.05] text-wash dark:text-night-ink/75">
            {bi({
              ar: "لا نستخدم قصصًا مُختلَقة ولا مبالغًا فيها. ونُفرِّق دائمًا بين ما يرويه الشخص عن نفسه وبين ما يُثبته التاريخ. وفي كل قصةٍ نذكر مصدرها حتى يستطيع القارئ التحقق بنفسه.",
              en: "We do not use invented or inflated stories. We always separate what a person says about themselves from what history confirms, and we name the source of every account so that the reader can verify it independently.",
            })}
          </p>
        </div>
      </Section>
    </>
  );
}
