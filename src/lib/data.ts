import type { Bi } from "./i18n";

/* ------------------------------------------------------------------ *
 * Content corpus — Arabic (source language) + English (translation).
 * Every scholarly claim carries a source line. Nothing is invented:
 * hadith are named with their collection and grade where stated.
 * ------------------------------------------------------------------ */

export type Topic = {
  id: string;
  title: Bi;
  tag: Bi;
  summary: Bi;
  body: Bi[];
  points: Bi[];
  source: Bi;
};

export const TOPICS: Topic[] = [
  {
    id: "meaning",
    title: { ar: "معنى الإسلام", en: "What the word Islam means" },
    tag: { ar: "البداية", en: "The starting point" },
    summary: {
      ar: "الإسلام لغةً هو الخضوع والسلام، وفي اصطلاحي: الاستسلام لله وحده بالتوحيد، والانقياد له بالطاعة.",
      en: "In Arabic, Islam carries the sense of submission and peace: surrendering to God alone in worship, and following His guidance.",
    },
    body: [
      {
        ar: "كلمة «السلام» مشتقة من الجذر العربي (س ل م)، وهو الجذر نفسه الذي تُشتق منه كلمة «الإسلام». فالاستسلام لله يعني الوصول إلى سلامةٍ وطمأنينة في القلب والعلاقات والحياة.",
        en: "The Arabic word for peace, salām, shares the same root (s-l-m) as Islām. Surrendering to God, in this sense, is the way a person reaches safety and serenity — in the heart, in relationships, in life.",
      },
      {
        ar: "و«المسلم» هو من استسلم لله وحده، لا لبشر ولا لهوى ولا لصنم. وقد ورد في القرآن أن إبراهيم وموسى ومريم و الحواريّين سُمّوا مسلمين بمعنى مخلصين لله.",
        en: "A Muslim is simply one who surrenders to God alone — not to another human, not to appetite, not to an idol. The Qur'an describes Abraham, Moses, Mary and the disciples as 'Muslims' in this sense: people who surrendered themselves to God.",
      },
      {
        ar: "والإسلام في العقيدة هو الخضوع لله بالتوحيد، وبإحسانٍ في العبادة والمعاملة، وبإحسانٍ في الخلق. وهذا المعنى ليس جديدًا في التاريخ، بل هو دعوة جميع الأنبياء.",
        en: "In belief, Islam is to surrender to God in pure monotheism; in worship and dealings, to act with excellence; in character, to be upright. This meaning is not new in history — it is the call of every prophet.",
      },
    ],
    points: [
      { ar: "الخضوع لله وحده في العبادة والحكم.", en: "Surrender to God alone in worship and in authority." },
      { ar: "السلام: مع الله، ومع الناس، ومع النفس.", en: "Peace — with God, with people, and within oneself." },
      { ar: "الاستقامة: عملٌ صالح وخلقٌ حسن.", en: "Steadiness: good deeds and good character." },
    ],
    source: {
      ar: "القرآن الكريم: سورة آل عمران ١٩، ٦٧، ٨٤؛ سورة البقرة ١٣١.",
      en: "The Qur'an: Āl ʿImrān 3:19, 3:67, 3:84; al-Baqarah 2:131.",
    },
  },
  {
    id: "allah",
    title: { ar: "من هو الله في الإسلام؟", en: "Who is God in Islam?" },
    tag: { ar: "العقيدة", en: "Belief" },
    summary: {
      ar: "الله هو الخالق الواحد، الأحد، الفرد، القادر، الرحيم. لا شريك له، ولا يُشبَه بشيء من خلقه.",
      en: "God — Allāh — is the One Creator: unique, self-sufficient, all-capable, merciful. He has no partner, and nothing in creation resembles Him.",
    },
    body: [
      {
        ar: "التوحيد في الإسلام بسيطٌ في صيغته، عميقٌ في أثره: لا معبود بحق إلا الله. الله ليس جزءًا من الطبيعة، ولا صورةً لبشر، ولا نتيجة لتفكيرٍ بشري؛ بل هو الخالق الذي لا يُخلَق.",
        en: "The statement at the heart of Islam is simple and far-reaching: there is no deity worthy of worship except God. God is not a part of nature, not an image of a human being, and not the product of human thought — He is the Creator who is not created.",
      },
      {
        ar: "وصف القرآن الله بأسمائه الحسنى: الرحمن الرحيم، العليم، الحكيم، القدوس، السلام، القدير، الوهاب. وهذه الأسماء ليست عناوين فحسب، بل صفاتٌ تُعرِّف به وتُطمئن القلب.",
        en: "The Qur'an describes God by His most beautiful names: the Most Merciful, the All-Knowing, the Wise, the Holy, the Source of Peace, the All-Powerful, the Giver. These are not decorative titles; they are the way the Qur'an introduces God to a searching heart.",
      },
      {
        ar: "ولهذا لا يُشبَه الله بخلقه، ولا يُمثَّل بأصنام أو صور. ويؤمن المسلمون بأن الله قريب، يسمع الدعاء، ويقبل التوبة، ويغفر الذنوب، ويحب التوابين.",
        en: "For this reason God is never depicted in Islam, and is not represented by idols or images. Muslims believe God is near: He hears prayer, accepts repentance, forgives sin, and loves those who turn back to Him.",
      },
    ],
    points: [
      { ar: "الوحدانية: لا شريك له.", en: "Oneness: He has no partner." },
      { ar: "الكمال: له الأسماء الحسنى والصفات العليا.", en: "Perfection: the most beautiful names belong to Him." },
      { ar: "الرحمة: رحمته سبقت غضبه.", en: "Mercy: His mercy precedes His anger." },
    ],
    source: {
      ar: "القرآن الكريم: سورة الإخلاص؛ سورة الحشر ٢٢–٢٤؛ صحيح مسلم، كتاب التوبة (حديث قدسي: «رحمتي غلبت غضبي»).",
      en: "The Qur'an: Sūrat al-Ikhlāṣ (112); al-Ḥashr 59:22–24. Ṣaḥīḥ Muslim, Kitāb al-Tawbah (hadīth qudsī: 'My mercy prevails over My wrath').",
    },
  },
  {
    id: "muhammad",
    title: { ar: "من هو محمد ﷺ؟", en: "Who is Muhammad ﷺ?" },
    tag: { ar: "السيرة", en: "Prophetic biography" },
    summary: {
      ar: "بشرٌ لا إله، نبيٌ ورسول أرسله الله بشريعة الإسلام خاتمًا للنبيين، ورحمةً للعالمين.",
      en: "A human being — not divine — chosen as a prophet and messenger, sent with the message of Islam as the seal of the prophets and a mercy to the worlds.",
    },
    body: [
      {
        ar: "وُلد محمد ﷺ في مكة سنة ٥٧١ ميلادية تقريبًا، في قبيلة قريش، ونشأ يتيمًا. عُرف قبل البعثة بالصادق الأمين، فكان الناس يودّعون أماناتهم عنده ويحكمون بينهم.",
        en: "Muhammad ﷺ was born in Makkah around 571 CE into the tribe of Quraysh and grew up an orphan. Before his mission he was known as al-Ṣādiq al-Amīn — the truthful, the trustworthy — and people kept their deposits with him and asked him to judge their disputes.",
      },
      {
        ar: "في الأربعين من عمره جاءه الوحي في غار حراء، فأمره الله بـ«اقرأ». وبعد ثلاثة عشر عامًا من الدعوة في مكة هاجر إلى المدينة، فقامت دولةٌ على العدل والرحمة، ثم عاد إلى مكة فاتحًا منتصرًا عفا عن أهلها.",
        en: "At forty, revelation came to him in the cave of Ḥirāʾ with the command: 'Read.' After thirteen years of calling people in Makkah, he migrated to Madinah, where a community was built on justice and mercy. He later returned to Makkah as a victor — and forgave its people.",
      },
      {
        ar: "وصفه القرآن بأنه «رحمة للعالمين»، وخُتمت به النبوة. المسلمون يحبونه ويقتدون به، ولا يُشبِّهونه بالله ولا يُطَوِّحونه فوق منزلته البشرية.",
        en: "The Qur'an calls him 'a mercy to the worlds' (21:107), and with him prophethood was sealed. Muslims love him and follow his example, yet never equate him with God or raise him above his human station.",
      },
    ],
    points: [
      { ar: "الصدق والأمانة قبل البعثة وبعدها.", en: "Truthfulness and trustworthiness, before and after his mission." },
      { ar: "الرحمة: مع الأطفال، والضعفاء، والحيوان.", en: "Mercy toward children, the weak, and animals." },
      { ar: "العدل: «لا فضل لعربي على أعجمي إلا بالتقوى».", en: "Justice: 'No Arab is superior to a non-Arab except by God-consciousness.'" },
    ],
    source: {
      ar: "السيرة ابن هشام؛ صحيح البخاري، كتاب بدء الوحي؛ الخطبة الوداعية (رواه أحمد والبخاري).",
      en: "Sīrat Ibn Hishām; Ṣaḥīḥ al-Bukhārī, Kitāb Badʾ al-Waḥy; the Farewell Serth (Musnad Aḥmad, al-Bukhārī).",
    },
  },
  {
    id: "quran",
    title: { ar: "ما هو القرآن؟", en: "What is the Qur'an?" },
    tag: { ar: "الكتاب", en: "The Book" },
    summary: {
      ar: "كلام الله المُنزَل على النبي محمد ﷺ باللغة العربية، المحفوظ منذ أربعة عشر قرنًا، وهو المرجع الأول للمسلمين.",
      en: "The speech of God, revealed to the Prophet Muhammad ﷺ in Arabic, preserved for fourteen centuries, and the first and final reference for Muslims.",
    },
    body: [
      {
        ar: "نُزِّل القرآن على مدار ثلاثٍ وعشرين سنة، وهو محفوظ في الصدور والكتب، ولم تتغير حرفيته. يقرأه المسلمون اليوم كما قُرأ في زمن النبي ﷺ، ويُسمَّى من حفظه «حافظًا».",
        en: "The Qur'an was revealed over twenty-three years and is preserved both in written form and in living hearts; its wording has not changed. Muslims today recite it exactly as it was recited in the Prophet's lifetime, and one who memorizes it entirely is called a ḥāfiẓ.",
      },
      {
        ar: "القرآن ليس كتابًا علميًا ولا تاريخيًا بالمعنى الحديث، لكنه كتاب هداية: يعرِّف بالله، ويبيّن غاية الخلق، ويأمر بالعدل والرحمة، ويقصّ قصص الأنبياء ليعتبر منها الناس.",
        en: "The Qur'an is not a science textbook or a history book in the modern sense — it is a book of guidance. It introduces God, explains the purpose of creation, commands justice and mercy, and tells the stories of the prophets so that people may reflect.",
      },
      {
        ar: "وللقرآن ترجماتٌ كثيرة لمعانيه إلى لغات العالم، لكن الترجمة لا تُسمَّى قرآنًا؛ فالقرآن هو النص العربي نفسه. الترجمة تفسيرٌ للمعنى في لغةٍ أخرى.",
        en: "The Qur'an has been translated into many languages, but a translation is never called 'the Qur'an'. The Qur'an is the Arabic text itself; a translation renders its meaning in another language.",
      },
    ],
    points: [
      { ar: "اللغة: العربية الفصحى.", en: "Language: classical Arabic." },
      { ar: "النزول: على ٢٣ سنة، مكي ومدني.", en: "Revelation: over 23 years, Makkan and Madinan." },
      { ar: "الحفظ: متواترٌ منذ النبي ﷺ.", en: "Preservation: transmitted continuously since the Prophet ﷺ." },
    ],
    source: {
      ar: "القرآن الكريم: سورة الإسراء ١٠٦، سورة الحجر ٩؛ إتقان علوم القرآن للسيوطي.",
      en: "The Qur'an: al-Isrāʾ 17:106, al-Ḥijr 15:9; al-Suyūṭī, Itqān fī ʿUlūm al-Qurʾān.",
    },
  },
  {
    id: "pillars",
    title: { ar: "أركان الإسلام الخمسة", en: "The five pillars of Islam" },
    tag: { ar: "العمل", en: "Practice" },
    summary: {
      ar: "خمسة أصولٍ يقوم عليها بناء المسلم: الشهادتان، والصلاة، والزكاة، والصيام، والحج.",
      en: "Five foundations hold up a Muslim's practice: the two testimonies, prayer, charity, fasting, and pilgrimage.",
    },
    body: [
      {
        ar: "قال النبي ﷺ: «بُني الإسلام على خمس…»، وهذه الأركان ليست شعارات، بل تمارين يومية وسنوية تصقل النفس وتوصل المسلم بخالقه وبمجتمعه.",
        en: "The Prophet ﷺ said: 'Islam is built upon five…' (Ṣaḥīḥ al-Bukhārī). These pillars are not slogans; they are daily and yearly practices that shape the self and connect a person to their Creator and to their community.",
      },
    ],
    points: [
      { ar: "الشهادتان: لا إله إلا الله، محمد رسول الله.", en: "The two testimonies: there is no god but God, and Muhammad is the messenger of God." },
      { ar: "الصلاة: خمس صلواتٍ في اليوم والليلة.", en: "Prayer: five daily prayers." },
      { ar: "الزكاة: حقٌّ للفقراء في المال.", en: "Zakāh: a due on wealth for those in need." },
      { ar: "صيام رمضان: امتناعٌ عن الطعام والشراب والجماع من الفجر إلى المغرب.", en: "Fasting Ramadan: abstaining from food, drink and intimacy from dawn to sunset." },
      { ar: "الحج: لمن استطاع إليه سبيلًا، مرةً في العمر.", en: "Hajj: pilgrimage to Makkah once in a lifetime for those who are able." },
    ],
    source: {
      ar: "صحيح البخاري (٨)، عن ابن عمر رضي الله عنهما؛ صحيح مسلم (١٦).",
      en: "Ṣaḥīḥ al-Bukhārī (8) and Ṣaḥīḥ Muslim (16), on the authority of Ibn ʿUmar.",
    },
  },
  {
    id: "belief",
    title: { ar: "أركان الإيمان الستة", en: "The six articles of faith" },
    tag: { ar: "العقيدة", en: "Belief" },
    summary: {
      ar: "الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره.",
      en: "Belief in God, His angels, His books, His messengers, the Last Day, and in divine decree — its good and its difficult.",
    },
    body: [
      {
        ar: "هذه الأركان الستة هي خريطة الوجود في الإسلام: من أين أتينا، وإلى أين نمضي، ومن يهدينا، وماذا نعمل بين الأمرين.",
        en: "These six articles are Islam's map of reality: where we come from, where we are going, who guides us, and what we do in between.",
      },
      {
        ar: "والإيمان عند المسلمين ليس رأيًا فحسب، بل تصديقٌ بالقلب، وإقرارٌ باللسان، وعملٌ بالأركان. ويؤمن المسلمون بأن القدر لا يلغي الاختيار والمسؤولية.",
        en: "Faith in Islam is not merely an opinion: it is conviction in the heart, affirmation by the tongue, and action in practice. Muslims hold that divine decree does not cancel human choice or moral responsibility.",
      },
    ],
    points: [
      { ar: "الإيمان بالله: وحدانيته وأسمائه وصفاته.", en: "God: His oneness, His names and attributes." },
      { ar: "الملائكة: خلقٌ من خلق الله، مُكلَّفون بأمره.", en: "Angels: created beings entrusted with His commands." },
      { ar: "الكتب: التوراة والإنجيل والزبور والقرآن.", en: "Books: the Torah, the Gospel, the Psalms and the Qur'an." },
      { ar: "الرسل: من آدم إلى محمد ﷺ.", en: "Messengers: from Adam to Muhammad ﷺ." },
      { ar: "اليوم الآخر: البعث والحساب والجنة والنار.", en: "The Last Day: resurrection, judgement, Paradise and the Fire." },
      { ar: "القدر: خيره وشره من الله، مع ثبوت الاختيار.", en: "Decree: its good and hardship from God, while free choice remains." },
    ],
    source: {
      ar: "صحيح مسلم (٨)، حديث جبريل الشهير في تعريف الإيمان والإسلام والإحسان.",
      en: "Ṣaḥīḥ Muslim (8), the famous ḥadīth of Jibrīl defining faith, Islam and iḥsān.",
    },
  },
  {
    id: "tawhid",
    title: { ar: "مفهوم التوحيد", en: "The meaning of tawḥīd" },
    tag: { ar: "الجوهر", en: "The core" },
    summary: {
      ar: "توحيد الألوهية: أن يُوجَّه العباد لله وحده، وتوحيد الروبوبيّة: أنه وحده الخالق الرازق المدبِّر، وتوحيد الأسماء والصفات.",
      en: "Tawḥīd is the oneness of God in worship, in lordship, and in His names and attributes.",
    },
    body: [
      {
        ar: "التوحيد هو الرسالة الجامعة التي دعا إليها جميع الأنبياء: «اعبدوا الله ما لكم من إله غيره». وهو ليس فكرة نظرية فحسب، بل ينعكس على أسلوب الحياة: لا عبادة إلا لله، ولا طاعة في معصية، ولا خوفٌ مفرطٌ من مخلوق.",
        en: "Tawḥīd is the unifying message of every prophet: 'Worship God; you have no other god but Him.' It is not only a theory — it reshapes a life: nothing is worshipped but God, no one is obeyed in disobedience to Him, and no created thing is feared excessively.",
      },
      {
        ar: "وقد حذّر الإسلام من الشرك، وهو جعل شريكٍ لله في العبادة أو الخلق. وهذا الوضوح في التوحيد هو ما يجده كثيرٌ من الباحثين أعجوبةً في فكر الأديان.",
        en: "Islam warns against shirk — associating a partner with God in worship or in creation. Many seekers find this clarity about the oneness of God remarkable.",
      },
    ],
    points: [
      { ar: "توحيد الروبوبيّة: الله وحده يخلق ويُرزق ويُدبِّر.", en: "Lordship: God alone creates, provides and manages." },
      { ar: "توحيد الألوهية: العبادة لله وحده.", en: "Worship: directed to God alone." },
      { ar: "توحيد الأسماء والصفات: إثباتها بلا تمثيل ولا تعطيل.", en: "Names and attributes: affirmed without likening God to creation, and without denial." },
    ],
    source: {
      ar: "القرآن الكريم: سورة هود ٥٠، سورة الأعراف ٥٩، سورة يوسف ٣٩؛ تفسير ابن كثير.",
      en: "The Qur'an: Hūd 11:50, al-Aʿrāf 7:59, Yūsuf 12:39; Tafsīr Ibn Kathīr.",
    },
  },
  {
    id: "prophets",
    title: { ar: "مكانة الأنبياء في الإسلام", en: "The place of the prophets in Islam" },
    tag: { ar: "الرسالات", en: "The messengers" },
    summary: {
      ar: "الإسلام يُكرِّم جميع الأنبياء: آدم وإبراهيم وموسى وعيسى ومحمدًا ﷺ، ولا يُفرِّق بينهم، ولا يقبل الإساءة إليهم.",
      en: "Islam honours all the prophets — Adam, Abraham, Moses, Jesus and Muhammad ﷺ — makes no distinction between them in faith, and rejects insulting any of them.",
    },
    body: [
      {
        ar: "القرآن يذكُر عيسى عليه السلام بتكريمٍ عالٍ: ولادةً معجزة من أمه مريم، وكلمةً من الله، وروحًا منه، ورسولًا إلى بني إسرائيل. وتُكرَّم مريم في القرآن والسورة التي تحمل اسمها.",
        en: "The Qur'an speaks of Jesus with great honour: a miraculous birth from his mother Mary, a word from God, a spirit from Him, and a messenger to the Children of Israel. Mary is honoured, and a sūrah of the Qur'an bears her name.",
      },
      {
        ar: "ولذلك لا يُصوَّر الأنبياء في الفن الإسلامي، ولا يُمدح أحدهم على حساب آخر، بل يُقال: «لا نُفرِّق بين أحدٍ منهم».",
        en: "For this reason prophets are not depicted in Islamic art, and no prophet is praised at the expense of another: 'We make no distinction between any of them' (2:285).",
      },
    ],
    points: [
      { ar: "الإيمان بجميع الرسل شرطٌ في الإيمان.", en: "Belief in all messengers is part of faith." },
      { ar: "محمد ﷺ خاتم النبيين، وبه اكتمل الرسالة.", en: "Muhammad ﷺ is the seal of the prophets; with him the message was completed." },
      { ar: "لا تُصوَّر الأنبياء، ولا تُساء إلى أتباعهم.", en: "Prophets are not depicted, and their followers are not insulted." },
    ],
    source: {
      ar: "القرآن الكريم: سورة مريم، سورة آل عمران ٤٥–٥١، سورة البقرة ٢٨٥.",
      en: "The Qur'an: Sūrat Maryam (19); Āl ʿImrān 3:45–51; al-Baqarah 2:285.",
    },
  },
];

export type Essay = { id: string; q: Bi; a: Bi[]; note?: Bi; source: Bi };

export const ESSAYS: Essay[] = [
  {
    id: "created",
    q: { ar: "لماذا خلقنا الله؟", en: "Why did God create us?" },
    a: [
      {
        ar: "يقول القرآن: «وما خلقت الجن والإنس إلا ليعبدون». والعبادة في الإسلام معناها واسع: هي معرفة الله ومحبته والعمل بشرعه في كل جانبٍ من الحياة، لا مجرد صلاةٍ وحدها.",
        en: "The Qur'an states: 'I did not create the jinn and mankind except to worship Me' (51:56). Worship in Islam is broad: knowing God, loving Him, and living by His guidance in every part of life — not ritual alone.",
      },
      {
        ar: "ورُوِي عن النبي ﷺ أنه قال: «إن الله كان ولم يكن شيءٌ غيره» (متفق عليه). فالمسلم يفهم وجوده كعلاقةٍ مع خالقه، لا كمصادفة.",
        en: "Muslims understand their existence as a relationship with their Creator rather than an accident. The question itself — 'why am I here?' — is treated in Islam as one of the most natural questions a human being can ask.",
      },
    ],
    source: { ar: "القرآن: الذاريات ٥٦؛ صحيح البخاري ومسلم.", en: "The Qur'an: al-Dhāriyāt 51:56; Ṣaḥīḥ al-Bukhārī and Muslim." },
  },
  {
    id: "purpose",
    q: { ar: "ما الهدف من الحياة؟", en: "What is the purpose of life?" },
    a: [
      {
        ar: "الهدف عند المسلم هو عبادة الله، وبناء الأرض بالعدل والإحسان، وتحقيق التوازن بين حقٍّ لله وحقٍّ للنفس وحقٍّ للناس. والدنيا مزرعةٌ للآخرة.",
        en: "For a Muslim, the purpose is to worship God and to build the earth with justice and excellence — balancing the right of God, the right of the self, and the rights of others. This life is a field whose harvest is the next.",
      },
      {
        ar: "وهذا لا يعني ترك الدنيا؛ فالنبي ﷺ كان يعيش بين الناس، يزور مرضهم، ويتزوج، ويعمل، ويضحك، ويحزن. بل يعني أن تكون الحياة موجهةً نحو غايةٍ أعمق من اللذة العابرة.",
        en: "This does not mean abandoning the world. The Prophet ﷺ lived among people: he visited the sick, married, worked, laughed and grieved. It means that life is aimed at something deeper than passing pleasure.",
      },
    ],
    source: { ar: "القرآن: المزمل ٢٠، الحديد ٢٠؛ صحيح البخاري، كتاب الأدب.", en: "The Qur'an: al-Muzzammil 73:20, al-Ḥadīd 57:20; Ṣaḥīḥ al-Bukhārī, Kitāb al-Adab." },
  },
  {
    id: "whoisgod",
    q: { ar: "من هو الله؟", en: "Who is God?" },
    a: [
      {
        ar: "الله هو الواحد الأحد، الفرد الصمد، الذي لم يلد ولم يُولَد، ولم يكن له كفؤًا أحد. لا يُشبَه بشيء، ولا يحتاج إلى شيء، وكل شيءٍ يحتاج إليه.",
        en: "God is the One and Only, self-sufficient, who neither begets nor was begotten, and none is comparable to Him. He resembles nothing, needs nothing, and everything needs Him.",
      },
      {
        ar: "وفي الوقت نفسه يقرِّب القرآن الله من القلب: «وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ». فالعلاقة مع الله في الإسلام قائمة على المحبة والرجاء والخوف المتوازن.",
        en: "At the same time the Qur'an brings God near: 'We are closer to him than his jugular vein' (50:16). The relationship with God in Islam rests on love, hope and a balanced awe.",
      },
    ],
    source: { ar: "القرآن: سورة الإخلاص، ق ١٦، البقرة ١٦٣.", en: "The Qur'an: Sūrat al-Ikhlāṣ (112), Qāf 50:16, al-Baqarah 2:163." },
  },
  {
    id: "prophets",
    q: { ar: "لماذا نحتاج إلى الأنبياء؟", en: "Why do we need prophets?" },
    a: [
      {
        ar: "لأن العقل وحده لا يكفي لمعرفة تفاصيل الغيب وطريقة العبادة. فأرسل الله رسلاً يبلّغون الرسالة بوضوح، ويكونون قدوةً حيّة يُقتدى بهم.",
        en: "Reason alone cannot settle the details of the unseen or the form of worship. So God sent messengers to deliver the message clearly and to live as an example people could actually follow.",
      },
      {
        ar: "والرسل جميعهم بشراً، لا يعلمون الغيب إلا ما أُوحِي إليهم، ولا يُملكون لنفعٍ ولا ضرٍّ. رسالتهم واحدة: التوحيد والعدل.",
        en: "All messengers were human beings, knowing the unseen only as it was revealed to them, and owning no benefit or harm for anyone. Their message is one: oneness of God and justice.",
      },
    ],
    source: { ar: "القرآن: الأنبياء ٧–٨، النحل ٣٦، آل عمران ٧٩.", en: "The Qur'an: al-Anbiyāʾ 21:7–8, al-Naḥl 16:36, Āl ʿImrān 3:79." },
  },
  {
    id: "revelation",
    q: { ar: "ما هو الوحي؟", en: "What is revelation?" },
    a: [
      {
        ar: "الوحي هو إعلامٌ من الله إلى رسولٍ من رسله، عن طريق جبريل عليه السلام. والوحي نوعان: نصٌّ حرفيٌّ يُتلى (القرآن)، وسنةٌ عمليّة تبيِّن الرسالة (الحديث والسيرة).",
        en: "Revelation is communication from God to one of His messengers, conveyed through the angel Gabriel. It takes two forms: a verbatim recited text — the Qur'an — and a lived explanation, the Prophet's practice.",
      },
      {
        ar: "والمسلمون يؤمنون أن محمدًا ﷺ تلقّى الوحي بأمانةٍ تامة وبلا تحريف، وأنه بشريٌّ لا يملك لنفسه نفعًا ولا ضرًّا.",
        en: "Muslims hold that Muhammad ﷺ conveyed the revelation faithfully and without alteration, and that he was a human being who possessed no power to benefit or harm even himself.",
      },
    ],
    source: { ar: "القرآن: النجم ٤–١٠، الشورى ٥١؛ صحيح البخاري، بدء الوحي.", en: "The Qur'an: al-Najm 53:4–10, al-Shūrā 42:51; Ṣaḥīḥ al-Bukhārī, Badʾ al-Waḥy." },
  },
  {
    id: "whyquran",
    q: { ar: "لماذا القرآن؟", en: "Why the Qur'an?" },
    a: [
      {
        ar: "لأنه الحجة المحفوظة والمرجع الثابت. والنبي ﷺ قال: «إني تركتُ فيكم ما إن تمسكتم به لن تضلوا: كتاب الله» (رواه مالك في الموطأ، وصححه عددٌ من العلماء).",
        en: "Because it is the preserved proof and the fixed reference. The Prophet ﷺ said: 'I have left among you that which, if you hold fast to it, you will never go astray: the Book of God' (Mālik, al-Muwaṭṭaʾ; regarded as ḥasan by a number of scholars).",
      },
      {
        ar: "والقرآن يفتح باب التدبّر لكل قارئ: «أفلا يتدبرون القرآن أم على قلوبٍ أقفالها». لذلك يشجّع الإسلام كل زائر على القراءة بنفسه، لا على التقليد الأعمى.",
        en: "The Qur'an opens reflection to every reader: 'Do they not reflect upon the Qur'an, or are there locks upon their hearts?' (47:24). Islam therefore encourages every visitor to read for themselves rather than to follow blindly.",
      },
    ],
    source: { ar: "الموطأ للإمام مالك (٨١٨)؛ القرآن: محمد ٢٤، الفتح ٢٨–٢٩.", en: "Mālik, al-Muwaṭṭaʾ (818); the Qur'an: Muḥammad 47:24, al-Fatḥ 48:28–29." },
  },
  {
    id: "after",
    q: { ar: "ماذا يحدث بعد الموت؟", en: "What happens after death?" },
    a: [
      {
        ar: "الإيمان بالآخرة ركنٌ من أركان الإيمان. يؤمن المسلم بالموت، وبالقبر وفتنته، وبالبعث يوم القيامة، وبالحساب، وبالجنة والنار، وبشفاعة النبي ﷺ وبعفو الله.",
        en: "Belief in the hereafter is one of the six articles of faith. Muslims believe in death, in the trial of the grave, in resurrection on the Day of Judgement, in accountability, in Paradise and the Fire, and in God's mercy and forgiveness.",
      },
      {
        ar: "وهذا الإيمان لا يُنتج قلقًا، بل يُنتج أمانةً ورحمة: فمن يؤمن بأن لكل عملٍ ثوابًا وعقابًا يتحرّر من طغيان الدنيا ويصير أرحم بالناس.",
        en: "This belief is not meant to produce anxiety but responsibility and mercy: one who believes every act matters is freed from the tyranny of this world and becomes gentler with people.",
      },
    ],
    source: { ar: "القرآن: المؤمنون ١٠٠–١١٦، القيامة؛ صحيح البخاري (٦٥٢٤) ومسلم (٢٨٧٨) في فتنة القبر.", en: "The Qur'an: al-Muʾminūn 23:100–116, Sūrat al-Qiyāmah (75); Ṣaḥīḥ al-Bukhārī (6524) and Muslim (2878) on the trial of the grave." },
  },
];

export type TimelineItem = { id: string; year: Bi; place: Bi; title: Bi; body: Bi; source: Bi };

export const TIMELINE: TimelineItem[] = [
  {
    id: "nasab",
    year: { ar: "قبل المولد", en: "Before the birth" },
    place: { ar: "مكة", en: "Makkah" },
    title: { ar: "النسب والنشأة", en: "Lineage and upbringing" },
    body: {
      ar: "محمد ﷺ بن عبد الله بن عبد المطلب بن هاشم من قريش. ولد يتيمًا: توفي أبوه قبل ولادته، وتوفيت أمته آمنة بنت وهب وهو في السادسة، فكبِّره جدّه عبد المطلب ثم عمّه أبو طالب.",
      en: "Muhammad ﷺ, son of ʿAbd Allāh, of the clan of Hāshim in Quraysh. He was born an orphan: his father died before his birth, and his mother Āminah died when he was six. His grandfather ʿAbd al-Muṭṭalib, then his uncle Abū Ṭālib, raised him.",
    },
    source: { ar: "السيرة ابن هشام، «ذكر مولد النبي ﷺ».", en: "Sīrat Ibn Hishām, on the birth of the Prophet ﷺ." },
  },
  {
    id: "youth",
    year: { ar: "٥٩٥–٦١٠ م", en: "595–610 CE" },
    place: { ar: "مكة والشام", en: "Makkah and Syria" },
    title: { ar: "الشباب والأمانة", en: "Youth and trustworthiness" },
    body: {
      ar: "رعى الغنم في صغره، وعمل في التجارة، فسمّاه أهل مكة «الصادق الأمين». وتزوج خديجة بنت خويلد وهي أشدّ الناس إيمانًا به وبصدقه، فكانت أول من آمن بالنبوة.",
      en: "He herded sheep as a boy and worked in trade; the people of Makkah called him al-Ṣādiq al-Amīn, the truthful and the trustworthy. He married Khadījah bint Khuwaylid, who was the first to believe in his mission.",
    },
    source: { ar: "السيرة ابن هشام؛ صحيح البخاري (٣) في بدء الوحي.", en: "Sīrat Ibn Hishām; Ṣaḥīḥ al-Bukhārī (3), Badʾ al-Waḥy." },
  },
  {
    id: "revelation",
    year: { ar: "٦١٠ م", en: "610 CE" },
    place: { ar: "غار حراء", en: "Cave of Ḥirāʾ" },
    title: { ar: "بداية الوحي", en: "The first revelation" },
    body: {
      ar: "في الأربعين من عمره، جاءه جبريل عليه السلام في غار حراء وأمره بـ«اقرأ». فرجع مرتاعًا إلى خديجة، فطمأنّته وقالت: «كلا والله، ليُرزقك الله ولَيَصُونَك».",
      en: "At the age of forty, Gabriel came to him in the cave of Ḥirāʾ with the command: 'Read.' He returned shaken to Khadījah, who reassured him: 'Never. By God, God will never disgrace you.'",
    },
    source: { ar: "صحيح البخاري (٣)، من حديث عائشة رضي الله عنها؛ سورة العلق ١–٥.", en: "Ṣaḥīḥ al-Bukhārī (3), from ʿĀʾishah; the Qur'an: al-ʿAlaq 96:1–5." },
  },
  {
    id: "makkah",
    year: { ar: "٦١٠–٦٢٢ م", en: "610–622 CE" },
    place: { ar: "مكة", en: "Makkah" },
    title: { ar: "الدعوة في مكة", en: "The call in Makkah" },
    body: {
      ar: "ثلاث عشرة سنة من الدعوة إلى التوحيد والعدل: أسلمت طائفةٌ من الشباب والضعفاء والحرّار، وقُوبل الدعاء بالتعذيب والمقاطعة والقتل. فصبر النبي ﷺ وأصحابه صبرًا عظيمًا، وأُمروا بالعفو والكفّ عن الانتقام.",
      en: "Thirteen years calling to monotheism and justice. Young people, the weak and enslaved embraced the message; the callers faced torture, boycott and killing. The Prophet ﷺ and his companions were commanded to forbear and to forgive rather than retaliate.",
    },
    source: { ar: "القرآن: الكهف ٦–٧، الحاقة ٤٤؛ السيرة ابن هشام.", en: "The Qur'an: al-Kahf 18:6–7, al-Ḥāqqah 69:44; Sīrat Ibn Hishām." },
  },
  {
    id: "taif",
    year: { ar: "٦١٩ م", en: "619 CE" },
    place: { ar: "الطائف", en: "Ṭāʾif" },
    title: { ar: "الطائف: دعاءٌ بلا لوم", en: "Ṭāʾif: a prayer without bitterness" },
    body: {
      ar: "خرج إلى الطائف يرجو النصرة فرُدَّ بالحجارة حتى أدمت قدميه. فلم يلُم أحدًا ولم يدعُ عليهم، بل قال: «اللهم اهدِ قومي فإنهم لا يعلمون». وهي من أوضح صور رحمته ﷺ.",
      en: "He went to Ṭāʾif seeking support and was driven out with stones until his feet bled. He did not curse anyone; he prayed: 'O God, guide my people, for they do not know.' It is among the clearest images of his mercy.",
    },
    source: { ar: "السيرة ابن هشام؛ صحيح مسلم، كتاب الجهاد (١٧٩٥).", en: "Sīrat Ibn Hishām; Ṣaḥīḥ Muslim, Kitāb al-Jihād (1795)." },
  },
  {
    id: "hijrah",
    year: { ar: "٦٢٢ م", en: "622 CE" },
    place: { ar: "من مكة إلى المدينة", en: "Makkah to Madinah" },
    title: { ar: "الهجرة", en: "The Hijrah" },
    body: {
      ar: "هاجر النبي ﷺ إلى يثرب بعد بيعة العقبة، فسُمّيت «المدينة». وأول ما فعله: آخى بين المهاجرين والأنصار، وكتب صحيفةَ المدينة تنظّم العيش بين المسلمين واليهود في دولةٍ مدنية قائمة على العدل.",
      en: "After the Pledge of ʿAqabah, the Prophet ﷺ migrated to Yathrib, which became known as al-Madīnah. His first acts were to establish brotherhood between the emigrants and the helpers, and to draw up the Constitution of Madinah, regulating life among Muslims and Jews under a civic order based on justice.",
    },
    source: { ar: "السيرة ابن هشام، «بيعة العقبة» و«صحيفة المدينة».", en: "Sīrat Ibn Hishām, the Pledges of ʿAqabah and the Constitution of Madinah." },
  },
  {
    id: "badr",
    year: { ar: "٦٢٤ م", en: "624 CE" },
    place: { ar: "بدر", en: "Badr" },
    title: { ar: "بدر وأُحُد: ابتلاءٌ ودرس", en: "Badr and Uḥud: trial and lesson" },
    body: {
      ar: "كانت غزوة بدر أول مواجهةٍ مفتوحة، ثم جاءت أُحُد بدرسٍ في انضباط الصف والسمع والطاعة. وفي القرآن تُقرأ الأحداث قراءةً أخلاقية: النصر من الله، والصبر، وعدم التمادي في القوة.",
      en: "Badr was the first open confrontation; Uḥud came with a lesson in discipline and obedience. The Qur'an reads these events morally: victory is from God, patience is required, and strength must never become arrogance.",
    },
    source: { ar: "القرآن: آل عمران ١٢١–١٧٥؛ صحيح البخاري، كتاب المغازي.", en: "The Qur'an: Āl ʿImrān 3:121–175; Ṣaḥīḥ al-Bukhārī, Kitāb al-Maghāzī." },
  },
  {
    id: "hudaybiyah",
    year: { ar: "٦٢٨ م", en: "628 CE" },
    place: { ar: "الحديبية", en: "Ḥudaybiyyah" },
    title: { ar: "صلح الحديبية", en: "The treaty of Ḥudaybiyyah" },
    body: {
      ar: "عُقد صلحٌ بدا لأصحاب النبي ﷺ مُقيِّدًا، فسمّاه الله «فتحًا مبينًا». عادت الوفود تدخل في دين الله أفواجًا. وهو درسٌ في أن السلام قد يكون أسرع طريقٍ إلى العدل من الصراع.",
      en: "A treaty was struck that seemed restrictive to the Prophet's companions, yet the Qur'an called it 'a clear conquest' (48:1). Delegations then entered the religion in crowds. It is a lesson that peace can reach justice faster than conflict.",
    },
    source: { ar: "القرآن: سورة الفتح ١–٢٧؛ صحيح البخاري، كتاب الشروط.", en: "The Qur'an: Sūrat al-Fatḥ (48); Ṣaḥīḥ al-Bukhārī, Kitāb al-Shurūṭ." },
  },
  {
    id: "fath",
    year: { ar: "٦٣٠ م", en: "630 CE" },
    place: { ar: "مكة", en: "Makkah" },
    title: { ar: "فتح مكة والعفو", en: "The conquest of Makkah and forgiveness" },
    body: {
      ar: "دخل النبي ﷺ مكة مطأطئًا رأسه تواضعًا، وقال: «اذهبوا فأنتم الطلقاء». هدم الأصنام، وعفا عن أشدّ أهلها عداوةً. ولم يُجبر أحدًا على الدخول في الإسلام.",
      en: "He entered Makkah with his head lowered in humility and said: 'Go, you are free.' He destroyed the idols and forgave those who had been most hostile. No one was compelled to enter Islam.",
    },
    source: { ar: "السيرة ابن هشام، «فتوح مكة»؛ القرآن: النحل ١٢٥، الكهف ٢٩.", en: "Sīrat Ibn Hishām; the Qur'an: al-Naḥl 16:125, al-Kahf 18:29." },
  },
  {
    id: "death",
    year: { ar: "٦٣٢ م (١١ هـ)", en: "632 CE (11 AH)" },
    place: { ar: "المدينة", en: "Madinah" },
    title: { ar: "الوداع والوفاة", en: "The farewell and passing" },
    body: {
      ar: "في حجة الوداع خطب النبي ﷺ خطبته الشهيرة: «لا فضل لعربي على أعجمي إلا بالتقوى». ثم مرض وتوفّي في المدينة، ودُفن في حجرة عائشة رضي الله عنها. «وما محمد إلا رسول قد خلت من قبله الرسل».",
      en: "At the Farewell Pilgrimage he delivered his famous sermon: 'No Arab is superior to a non-Arab except by God-consciousness.' He then fell ill and passed away in Madinah, and was buried in the chamber of ʿĀʾishah. The Qur'an: 'Muhammad is only a messenger; messengers have passed away before him' (3:144).",
    },
    source: { ar: "القرآن: آل عمران ١٤٤؛ صحيح البخاري (٤٤٤٩) في مرض الوفاة.", en: "The Qur'an: Āl ʿImrān 3:144; Ṣaḥīḥ al-Bukhārī (4449)." },
  },
];

export type Faq = { id: string; q: Bi; a: Bi[]; source: Bi; note?: Bi };

export const FAQS: Faq[] = [
  {
    id: "peace",
    q: { ar: "هل الإسلام دين سلام؟", en: "Is Islam a religion of peace?" },
    a: [
      {
        ar: "اسم «الإسلام» مشتق من السَّلَم والسلام، والقرآن يقرن الإيمان بالعمل الصالح وبضبط النفس: «لا إكراه في الدين». والجهاد في الإسلام مفهومٌ واسع: جهاد النفس بالتصحيح، وجهاد الظلم بالتغيير، وجهاد العدو بالدفاع عن النفس.",
        en: "The word Islam comes from the root of peace and surrender, and the Qur'an pairs faith with self-restraint: 'There is no compulsion in religion' (2:256). The term jihād is broad: striving against one's own faults, striving against injustice, and — as a last resort, under strict rules — armed defence.",
      },
      {
        ar: "كذلك وُجدت أحكامٌ للقتال في سياقها التاريخي: الدفاع عن المظلوم، وردّ العدوان، مع تحريم قتل غير المقاتلين وتحريم الإكراه. والاختلاف الفقهي في تفاصيل هذه الأحكام قديمٌ ومعتبر، وليس محلًّا للإجماع.",
        en: "Rules of fighting were revealed in their historical context — defence of the oppressed and repelling aggression — while killing non-combatants and compelling belief are forbidden. Muslim jurists have differed, legitimately and for centuries, over the details of these rules; they are not a matter of consensus.",
      },
    ],
    source: { ar: "القرآن: البقرة ٢٥٦، الحج ٣٩–٤٠، المائدة ٣٢؛ فقه السيرة لرمضان البوطي.", en: "The Qur'an: al-Baqarah 2:256, al-Ḥajj 22:39–40, al-Māʾidah 5:32; Muḥammad Ramaḍān al-Būṭī, Fiqh al-Sīrah." },
  },
  {
    id: "prayer",
    q: { ar: "لماذا يصلي المسلمون؟", en: "Why do Muslims pray?" },
    a: [
      {
        ar: "الصلاة عمود الدين: خمس صلواتٍ في اليوم، قصيرة، تُربط القلب بالله وتُنهي المسلم عن الفحشاء والمنكر. وهي ليست مطلبًا لإلهٍ محتاج، بل حاجةٌ من الإنسان نفسه.",
        en: "Prayer is the pillar of the religion: five short prayers a day that anchor the heart to God and, in the Qur'an's words, restrain a person from indecency and wrongdoing (29:45). It is not a need of God; it is a human need.",
      },
      {
        ar: "ويؤدّيها المسلمون في المسجد أو في أي مكانٍ نظيف، وقِبلة المسلمين إلى الكعبة في مكة. ووقت الصلاة تفاصيله مبيّنةً في السنة، وفي ترتيبها تفاصيلٌ فقهيةٌ سائغة بين المذاهب.",
        en: "Muslims pray in a mosque or any clean place, facing the Kaʿbah in Makkah. The timings and form are described in the Sunnah, and jurists of the four schools have allowed minor differences in some details of the sequence.",
      },
    ],
    source: { ar: "القرآن: العنكبوت ٤٥، الإسراء ٧٨؛ صحيح مسلم (٦١٢) في أوقات الصلاة.", en: "The Qur'an: al-ʿAnkabūt 29:45, al-Isrāʾ 17:78; Ṣaḥīḥ Muslim (612)." },
  },
  {
    id: "ramadan",
    q: { ar: "لماذا يصوم المسلمون رمضان؟", en: "Why do Muslims fast Ramadan?" },
    a: [
      {
        ar: "الصيام امتناعٌ عن الطعام والشراب والجماع من الفجر إلى المغرب، طوال شهر رمضان، شهر نزول القرآن. والغية: التقوى، والتعاطف مع الجائع، وكسر سيطرة العادة على النفس.",
        en: "Fasting means abstaining from food, drink and intimacy from dawn to sunset through the month of Ramadan, the month in which the Qur'an began to be revealed. Its stated goal is God-consciousness, empathy with the hungry, and loosening the grip of habit on the self.",
      },
      {
        ar: "وفي ليلة القدر أنزل القرآن: «ليلة القدر خيرٌ من ألف شهر». ومن مرضٍ أو سفرٍ أو حملٍ أو كبيرٍ في السن فلا صيام عليه، بل فدية أو قضاء.",
        en: "Within it lies the Night of Decree, 'better than a thousand months' (97:3). The traveller, the ill, the pregnant, the elderly and others are exempt, with make-up days or a feeding expiation instead.",
      },
    ],
    source: { ar: "القرآن: البقرة ١٨٣–١٨٥، سورة القدر؛ صحيح البخاري (١٩٠١).", en: "The Qur'an: al-Baqarah 2:183–185, Sūrat al-Qadr (97); Ṣaḥīḥ al-Bukhārī (1901)." },
  },
  {
    id: "hijab",
    q: { ar: "لماذا ترتدي المرأة المسلمة الحجاب؟", en: "Why do Muslim women wear hijāb?" },
    a: [
      {
        ar: "الأصل في النصوص: طلب الستر والتواضع من النساء والرجال معًا (النور ٣٠–٣١، والأحزاب ٥٩). وتلبسه كثيرٌ من المسلمات إيمانًا بأمر الله، وحمايةً للكرامة، ورفضًا لتقييم المرأة على شكلها.",
        en: "The texts ask for modesty and covering from both women and men (al-Nūr 24:30–31, al-Aḥzāb 33:59). Many Muslim women wear it out of conviction, as a way to protect dignity and to refuse being valued only for appearance.",
      },
      {
        ar: "وقد اختلف الفقهاء في مقدار الواجب: فالمالكية والشافعية والحنابلة على وجوب ستر الوجه، والحنفية على أن وجه المرأة ليس بعورة. والاختلاف قديمٌ ومحترم، والمرأة المسلمة حرةٌ في اختيارها.",
        en: "Jurists have differed on the extent required: the Mālikī, Shāfiʿī and Ḥanbalī schools hold that covering the face is part of the obligation, while the Ḥanafī school holds that a woman's face is not ʿawrah. This is a long-standing, respected difference of opinion.",
      },
    ],
    source: { ar: "القرآن: النور ٣٠–٣١، الأحزاب ٥٩؛ الموسوعة الفقهية الكويتية، مادة «حجاب».", en: "The Qur'an: al-Nūr 24:30–31, al-Aḥzāb 33:59; al-Mawsūʿah al-Fiqhiyyah al-Kuwaytiyyah, 'Ḥijāb'." },
  },
  {
    id: "women",
    q: { ar: "ما مكانة المرأة في الإسلام؟", en: "What is the status of women in Islam?" },
    a: [
      {
        ar: "القرآن يقرّ للمرأة بالشخصية الكاملة: حقها في العلم، والملك، والعمل، والشهادة، واختيار الزوج، وفي الميراث. وقد أبطل الإسلام أنواعًا من الظلم التي كانت سائدة قبله، كإرث المرأة ووأد البنات.",
        en: "The Qur'an grants women full legal personhood: the right to knowledge, property, work, testimony, choosing a spouse, and inheritance. It abolished forms of injustice common before it, including the disinheritance of women and female infanticide.",
      },
      {
        ar: "والتاريخ الإسلامي يحفظ أسماء عالماتٍ وسيداتٍ أثرن في المجتمع، كعائشة رضي الله عنها في الحديث والفقه، وفاطمة الفهرية مؤسسة جامعة القرويين. ومع ذلك فتطبيق هذه المبادئ في المجتمعات المسلمة متفاوتٌ اليوم، وهذا واقعٌ لا يُنسب إلى النص.",
        en: "Islamic history preserves the names of women who shaped their societies — ʿĀʾishah in ḥadīth and jurisprudence, Fāṭimah al-Fihrīyyah, founder of al-Qarawiyyīn. Today the application of these principles varies across Muslim societies; that is a human reality, not a verdict on the texts.",
      },
    ],
    source: { ar: "القرآن: النساء ٧–١٢، ٣٢؛ النحل ٩٧؛ صحيح البخاري في فضل العلم.", en: "The Qur'an: al-Nisāʾ 4:7–12, 4:32, al-Naḥl 16:97; Ṣaḥīḥ al-Bukhārī on seeking knowledge." },
  },
  {
    id: "family",
    q: { ar: "ماذا يقول الإسلام عن العائلة؟", en: "What does Islam say about family?" },
    a: [
      {
        ar: "الأسرة هي الوحدة الأساسية للمجتمع، وقد قرّن القرآن بين مودةٍ ورحمةٍ بين الزوجين: «وجعل بينكم مودةً ورحمة». وبرُّ الوالدين من أعظم القربات، بعد التوحيد مباشرة.",
        en: "The family is the basic unit of society, and the Qur'an describes affection and mercy between spouses: 'He placed between you affection and mercy' (30:21). Kindness to parents ranks among the greatest duties, immediately after the oneness of God.",
      },
      {
        ar: "وفي أحكام الزواج والطلاق والحضانة تفاصيلٌ فقهيةٌ مختلفةٌ بين المذاهب، والقاعدة أن الضرر يُزال، وأن العدالة أصلٌ في كل معاملة.",
        en: "On marriage, divorce and custody there are detailed differences between the schools of law. The guiding principles are that harm must be removed and that justice is the basis of every transaction.",
      },
    ],
    source: { ar: "القرآن: الروم ٢١، الإسراء ٢٣–٢٤، النساء ١٩؛ صحيح مسلم، كتاب الرضاع.", en: "The Qur'an: al-Rūm 30:21, al-Isrāʾ 17:23–24, al-Nisāʾ 4:19; Ṣaḥīḥ Muslim, Kitāb al-Riḍāʿ." },
  },
  {
    id: "nonmuslim",
    q: { ar: "ماذا يقول الإسلام عن غير المسلمين؟", en: "What does Islam say about non-Muslims?" },
    a: [
      {
        ar: "القرآن ينهى عن الإكراه في الدين، ويأمر بالعدل والإحسان حتى مع الخصوم: «لا ينهاكم الله عن الذين لم يقاتلوكم في الدين… أن تبروهم وتقتسطوا إليهم». والإنسان في الإسلام مسؤولٌ عن عمله ونيته، لا عن اختيارٍ يُفرض عليه.",
        en: "The Qur'an forbids compulsion in religion and commands justice and kindness even toward opponents: 'God does not forbid you from being just and kind to those who do not fight you because of religion' (60:8). A person is accountable for their deeds and intentions, not for a belief forced upon them.",
      },
      {
        ar: "وفيما يخص الجزية وأحكام أهل الذمة تفاصيلٌ تاريخيةٌ وفقهيةٌ قديمة، اختلف فيها الفقهاء وارتبطت بسياق الدولة الإسلامية آنذاك، وليست مطلقةً بلا قيد.",
        en: "Regarding the jizyah and the historical status of protected non-Muslim citizens, jurists wrote detailed rules tied to the pre-modern Islamic state; they were never an unlimited licence, and scholars differed over their scope and conditions.",
      },
    ],
    source: { ar: "القرآن: البقرة ٢٥٦، الممتحنة ٨–٩، الكافرون ٦؛ الموسوعة الفقهية الكويتية، مادة «ذمة».", en: "The Qur'an: al-Baqarah 2:256, al-Mumtaḥanah 60:8–9, Sūrat al-Kāfirūn (109); al-Mawsūʿah al-Fiqhiyyah al-Kuwaytiyyah, 'Dhimmah'." },
  },
  {
    id: "alcohol",
    q: { ar: "لماذا يحرّم الإسلام الخمر؟", en: "Why does Islam prohibit alcohol?" },
    a: [
      {
        ar: "لأنه «إثمٌ أكبر من نفعه»، وفيه ضررٌ بالعقل والعائلة والمال. ونُهِي عنه تدريجيًا: أولاً ببيان حُكمِه، ثم بالمنع من الصلاة سُكارى، ثم بالتحريم.",
        en: "Because the Qur'an says that in it 'is a great sin and yet, some benefit for people, but their sin is greater than their benefit' (2:219), and its harm falls on the mind, the family and wealth. Prohibition came in stages — first the judgement, then the ban on praying while intoxicated, then the final prohibition (4:43, 5:90).",
      },
      {
        ar: "وتحرّمه أديانٌ وفلسفاتٌ أخرى، ويرى كثيرون من غير المسلمين أن هذه الحكمة مفهومةٌ عقلًا، سواء آمنوا بالوحي أم لا.",
        en: "Alcohol is prohibited in other religions and philosophies too, and many people who are not Muslim find this wisdom understandable by reason, whether they accept revelation or not.",
      },
    ],
    source: { ar: "القرآن: البقرة ٢١٩، النساء ٤٣، المائدة ٩٠–٩١؛ صحيح البخاري (٤٦٢١).", en: "The Qur'an: al-Baqarah 2:219, al-Nisāʾ 4:43, al-Māʾidah 5:90–91; Ṣaḥīḥ al-Bukhārī (4621)." },
  },
  {
    id: "jihad",
    q: { ar: "ما معنى الجهاد؟", en: "What does jihād mean?" },
    a: [
      {
        ar: "اللغة: الجهد والطاقة. وفي الاصطلاح: كل جهدٍ يبذل في طاعة الله، وأعظمه جهاد النفس بالتهذيب. قال النبي ﷺ: «أفضل الجهاد كلمة حقٍّ عند سلطان جائر» (رواه أبو داود والترمذي، وحسّنه عددٌ من العلماء).",
        en: "Literally, jihād means exerting effort. In usage it is any effort expended in obedience to God, and its greatest form is struggling to refine oneself. The Prophet ﷺ said: 'The best jihād is a word of truth before a tyrannical ruler' (Abū Dāwūd, al-Tirmidhī; graded ḥasan by a number of scholars).",
      },
      {
        ar: "والقتال نوعٌ محدَّد له شروطه: دفاعٌ عن النفس والدين، وردُّ عدوان، وتحريمه لغير المقاتلين، وتحريمه لقطع الطريق أو الإفساد. ولفظ «جهاد» لا يُترجم دائمًا بكلمة «حرب مقدسة» لأنها لا تنقل المعنى.",
        en: "Armed fighting is one specific form with strict conditions: self-defence, repelling aggression, protection of non-combatants, and prohibition of spreading corruption. 'Holy war' is a poor translation of the term and does not carry its meaning.",
      },
    ],
    source: { ar: "سنن أبي داود (٤٣٤٤)، سنن الترمذي (٢١٧٤)؛ القرآن: الحج ٣٩–٤٠، البقرة ١٩٠.", en: "Sunan Abī Dāwūd (4344), al-Tirmidhī (2174); the Qur'an: al-Ḥajj 22:39–40, al-Baqarah 2:190." },
  },
  {
    id: "afterlife",
    q: { ar: "ماذا يحدث بعد الموت؟", en: "What happens after death?" },
    a: [
      {
        ar: "الإيمان بالآخرة ركنٌ من أركان الإيمان: الموت، ثم القبر وفتنته، ثم البعث يوم القيامة، ثم الحساب، ثم الجزاء: الجنة أو النار، بعدلٍ من الله ورحمةٍ واسعة.",
        en: "Belief in the hereafter is one of the six articles of faith: death, then the trial of the grave, then resurrection on the Day of Judgement, then accountability, and then the outcome — Paradise or the Fire — in God's justice and vast mercy.",
      },
      {
        ar: "ولا يعلم أحدٌ مصير شخصٍ بعينه، ولا يجوز لأحدٍ أن يُفتي بدخول معينٍ الجنة أو النار. هذا الحكم لله وحده.",
        en: "No one knows the final fate of a specific person, and no one is permitted to declare definitively that a particular individual is in Paradise or in the Fire. That judgement belongs to God alone.",
      },
    ],
    source: { ar: "القرآن: المؤمنون ١٠٠–١١٦؛ صحيح مسلم (٢٨٨٠) في عذاب القبر ورحمته.", en: "The Qur'an: al-Muʾminūn 23:100–116; Ṣaḥīḥ Muslim (2880)." },
  },
];

export type Story = {
  id: string;
  name: Bi;
  meta: Bi;
  before: Bi;
  search: Bi;
  questions: Bi[];
  found: Bi;
  after: Bi;
  source: Bi;
};

export const STORIES: Story[] = [
  {
    id: "malcolm",
    name: { ar: "مالكوم إكس (الحاج مالك الشباز)", en: "Malcolm X (al-Ḥajj Mālik al-Shabāzz)" },
    meta: { ar: "كاتب وناشط أمريكي · ١٩٢٥–١٩٦٥", en: "American writer and activist · 1925–1965" },
    before: {
      ar: "نشأ في مجتمعٍ يعيش العنصرية، ثم أصبح من أبرز قادة «أمة الإسلام» بفهمٍ يخلط بين العنصرية والدين.",
      en: "He grew up under American racism and rose as a leading figure in the Nation of Islam, a movement that mixed racial ideology with religious language.",
    },
    search: {
      ar: "بدأ التساؤل بعد انشقاقه عن «أمة الإسلام» عام ١٩٦٤، حين سافر إلى الشرق الأوسط وأفريقيا ليعرف الإسلام كما يعيشه أهله.",
      en: "His search began after he left the Nation of Islam in 1964, when he travelled to the Middle East and Africa to see Islam as its own people practise it.",
    },
    questions: [
      { ar: "هل الإسلام دينٌ للبشر جميعًا أم لعرقٍ بعينه؟", en: "Is Islam a religion for all people, or for one race?" },
      { ar: "لماذا يختلف المسلمون بينهم في السلوك؟", en: "Why do Muslims themselves differ in behaviour?" },
    ],
    found: {
      ar: "أثناء الحج رأى «أفضل ليلة رآها في حياته»: ملايين البشر من كل لونٍ وبلدٍ يعبدون الله بمناسكٍ واحدة. وكتب رسالةً من مكة تقول: «لقد قضيتُ أربعًا وعشرين ساعةً هنا في وسط مكة، رأيتُ فيها البشر على كل لونٍ من ألوان البشرية… جنّدتْني أمريكا في الحرب ضد الإسلام».",
      en: "During the Hajj he saw 'the best night of his life': millions of people of every colour and country worshipping God with the same rites. He wrote from Makkah: 'I spent twenty-four hours here in the midst of this Holy City, seeing humans of every colour… America has enlisted me in her war against Islam.'",
    },
    after: {
      ar: "أسّس منظمة «أمة الإسلام / Afro-American Unity» على مبادئ الإسلام الصحيحة، ودافع عن حقوق الإنسان بلا تمييز، ثم اغتيل عام ١٩٦٥.",
      en: "He founded Muslim Mosque, Inc. and the Organization of Afro-American Unity on the principles of orthodox Islam, defending human rights without discrimination, and was assassinated in 1965.",
    },
    source: {
      ar: "الرسالة من مكة (The Autobiography of Malcolm X، ١٩٦٥)، ورسالته المكتوبة من مكة في أبريل ١٩٦٤.",
      en: "The letter from Makkah, published in The Autobiography of Malcolm X (1965), and his April 1964 letter from Makkah.",
    },
  },
  {
    id: "yusuf-islam",
    name: { ar: "يوسف إسلام (كات ستيفنز)", en: "Yusuf Islam (Cat Stevens)" },
    meta: { ar: "موسيقي وكاتب بريطاني · ١٩٤٨–", en: "British musician and writer · 1948–" },
    before: {
      ar: "كان من أشهر المغنين في السبعينيات، ثم عاش نجاحًا ماديًا وفراغًا نفسيًا، وتعرّض لأزمةٍ صحية كادت تودي بحياته.",
      en: "He was one of the best-known singers of the 1970s, then found material success alongside an inner emptiness, and survived a near-fatal illness.",
    },
    search: {
      ar: "بدأ بالبحث عن معنى الحياة: قرأ البوذية والتنجيم والأديان، وسأله أخوه عن «كتابٍ مقدّسٍ آخر غير الكتابين اللذين نعرفهما».",
      en: "He began searching for the meaning of life — reading Buddhism, astrology and the scriptures he knew — until his brother mentioned 'a third holy book besides the two we know'.",
    },
    questions: [
      { ar: "هل هناك رسالةٌ واحدةٌ للأنبياء جميعًا؟", en: "Is there one message behind all the prophets?" },
      { ar: "كيف أعيش نجاحي دون أن يفقدني نفسي؟", en: "How do I live success without losing myself?" },
    ],
    found: {
      ar: "قرأ ترجمة معاني القرآن، ووجد أن ما بحث عنه موجودٌ فيه: التوحيد، والعدل، والمساءلة، والرحمة. وأسلم في ٤ ديسمبر ١٩٧٧، ثم اعتزل الغناء.",
      en: "He read a translation of the meaning of the Qur'an and found what he had been looking for: oneness, justice, accountability and mercy. He embraced Islam on 4 December 1977 and stepped away from performing.",
    },
    after: {
      ar: "كرّس وقته للتعليم والعمل الخيري، وأسس مؤسسة «أيقونة السلام» لدعم التعليم والإغاثة.",
      en: "He devoted himself to education and charity, founding the Small Kindness charity to support education and relief work.",
    },
    source: {
      ar: "مقابلاته المنشورة، وسيرة «Yusuf Islam: My Journey to Islam» (BBC، ٢٠٠٦).",
      en: "His published interviews and the account 'My Journey to Islam' (BBC, 2006).",
    },
  },
  {
    id: "bucaille",
    name: { ar: "موريس بوكاي", en: "Maurice Bucaille" },
    meta: { ar: "طبيب فرنسي · ١٩٢٠–١٩٩٨", en: "French physician · 1920–1998" },
    before: {
      ar: "طبيبٌ فرنسي علماني، تخصص في الطب الباطني، وخدم طبيبًا لعائلة ملكية في السعودية.",
      en: "A secular French physician, a specialist in internal medicine, who served as a doctor to a royal family in Saudi Arabia.",
    },
    search: {
      ar: "بدأ التساؤل بعد دراسته لمومياء فرعون (رمسيس الثاني) وبحثه في أسباب وفاتها، ثم قارن بين ما ورد في الكتاب المقدس والقرآن عن فرعون.",
      en: "His search began with the examination of an Egyptian mummy — identified as Ramesses II — and its cause of death, which led him to compare what the Bible and the Qur'an each say about the Pharaoh.",
    },
    questions: [
      { ar: "هل يمكن أن يكون نصٌّ قديمٌ دقيقًا علميًا في أمرٍ لم يُكتشف إلا حديثًا؟", en: "Could an ancient text be accurate about something discovered only recently?" },
      { ar: "ما مصدر هذه الدقة؟", en: "What is the source of that accuracy?" },
    ],
    found: {
      ar: "أصدر عام ١٩٧٦ كتاب «الكتاب المقدس والقرآن وعلم الحديث»، متسائلًا عن مصدر هذه الدقة، ثم أعلن إسلامه.",
      en: "In 1976 he published La Bible, le Coran et la Science, asking where such accuracy could come from, and later declared his acceptance of Islam.",
    },
    after: {
      ar: "تابع البحث في العلاقة بين النصوص المقدسة والعلم، ومحاضراته منتشرةٌ حتى اليوم.",
      en: "He continued researching the relationship between scripture and science, and his lectures are still widely read.",
    },
    source: {
      ar: "«الكتاب المقدس والقرآن وعلم الحديث» (١٩٧٦)، ومقابلاته المنشورة.",
      en: "La Bible, le Coran et la Science (1976) and his published interviews.",
    },
  },
];

export type Level = { id: string; name: Bi; goal: Bi; items: Bi[] };

export const LEVELS: Level[] = [
  {
    id: "l1",
    name: { ar: "المستوى الأول · البداية", en: "Level one · The beginning" },
    goal: {
      ar: "أن تعرف كيف تتحدث مع الله، وكيف تقف بين يديه، وكيف تُصلِّي أول صلاةٍ لك.",
      en: "To learn how to speak to God, how to stand before Him, and how to pray your first prayer.",
    },
    items: [
      { ar: "الشهادتان: معناهما ومتى تقولهما.", en: "The two testimonies: what they mean and when to say them." },
      { ar: "الوضوء: خطواته بالترتيب، ومتى ينتقض.", en: "Ablution (wuḍūʾ): the steps in order, and what invalidates it." },
      { ar: "الصلاة: الأذان، والقبلة، والركعات، والسنن.", en: "Prayer: the call, the direction, the units, the recommended acts." },
      { ar: "سورة الفاتحة: حفظها وترجمة معانيها.", en: "Sūrat al-Fātiḥah: memorising it and understanding its meaning." },
    ],
  },
  {
    id: "l2",
    name: { ar: "المستوى الثاني · البناء", en: "Level two · Building" },
    goal: {
      ar: "أن تفهم لماذا تفعل ما تفعل، وأن تبني عقيدتك على يقينٍ لا على تقليد.",
      en: "To understand why you do what you do, and to build your belief on conviction rather than imitation.",
    },
    items: [
      { ar: "أركان الإسلام الخمسة، وتفاصيل كل ركن.", en: "The five pillars of Islam and the detail of each." },
      { ar: "أركان الإيمان الستة.", en: "The six articles of faith." },
      { ar: "سور قصيرة: الإخلاص، والفلق، والناس، والكافرون، والعصر.", en: "Short sūrahs: al-Ikhlāṣ, al-Falaq, al-Nās, al-Kāfirūn, al-ʿAṣr." },
      { ar: "أساسيات العقيدة: التوحيد، والأسماء والصفات، والقدر.", en: "Foundations of belief: tawḥīd, the names and attributes, and divine decree." },
    ],
  },
  {
    id: "l3",
    name: { ar: "المستوى الثالث · الاتساع", en: "Level three · Widening" },
    goal: {
      ar: "أن يدخل الإسلام في أخلاقك ومعاملتك، وأن تعرف كيف تعيش به في بيئتك.",
      en: "To let Islam shape your character and dealings, and to live it well in your own environment.",
    },
    items: [
      { ar: "السيرة النبوية: محطاتٌ مختارة مع المصادر.", en: "The Prophetic biography: selected stations with sources." },
      { ar: "الأخلاق: الصدق، والعفو، والصبر، وصلة الرحم.", en: "Character: truthfulness, forgiveness, patience and keeping family ties." },
      { ar: "الصيام: رمضان والتطوع والحكمة منه.", en: "Fasting: Ramadan, voluntary fasting and its wisdom." },
      { ar: "الزكاة: من تجب عليه، وكم، ولفمن.", en: "Zakāh: who owes it, how much, and to whom it goes." },
      { ar: "الحج والعمرة: مناسكهما ومقاصدهما.", en: "Hajj and ʿUmrah: their rites and their purposes." },
    ],
  },
];

export type SourceGroup = { id: string; name: Bi; note: Bi; items: { title: Bi; author: Bi; note: Bi }[] };

export const SOURCES: SourceGroup[] = [
  {
    id: "quran",
    name: { ar: "القرآن الكريم", en: "The Qur'an" },
    note: {
      ar: "المرجع الأول والمطلق. الآيات في هذا الموقع من النص العثماني، والترجمات هي ترجمات لمعاني القرآن وليست القرآن نفسه.",
      en: "The first and final reference. Verses on this site follow the ʿUthmānic text; translations render the meaning of the Qur'an and are not the Qur'an itself.",
    },
    items: [
      { title: { ar: "القرآن الكريم — النص العثماني", en: "The Qur'an — ʿUthmānic text" }, author: { ar: "مجمع الملك فهد لطباعة المصحف", en: "King Fahd Complex for the Printing of the Holy Qur'an" }, note: { ar: "المصحف المعتمد", en: "The standard printed muṣḥaf" } },
      { title: { ar: "تفسير ابن كثير", en: "Tafsīr Ibn Kathīr" }, author: { ar: "إسماعيل بن عمر بن كثير (ت ٧٧٤ هـ)", en: "Ismāʿīl ibn Kathīr (d. 774 AH)" }, note: { ar: "تفسيرٌ بالقرآن والحديث والأثر", en: "Exegesis based on Qur'an, ḥadīth and reports" } },
      { title: { ar: "الجامع لأحكام القرآن", en: "al-Jāmiʿ li-Aḥkām al-Qurʾān" }, author: { ar: "القرطبي (ت ٦٧١ هـ)", en: "al-Qurṭubī (d. 671 AH)" }, note: { ar: "تفصيلٌ فقهي للآيات", en: "Detailed juristic exegesis" } },
    ],
  },
  {
    id: "hadith",
    name: { ar: "كتب الحديث", en: "Hadith collections" },
    note: {
      ar: "لا يُنسب حديثٌ إلى النبي ﷺ في هذا الموقع إلا مع ذكر مصدره ودرجته إن كانت معروفة.",
      en: "No saying is attributed to the Prophet ﷺ on this site without naming its source and, where known, its grade.",
    },
    items: [
      { title: { ar: "صحيح البخاري", en: "Ṣaḥīḥ al-Bukhārī" }, author: { ar: "محمد بن إسماعيل البخاري (ت ٢٥٦ هـ)", en: "al-Bukhārī (d. 256 AH)" }, note: { ar: "أصحُّ كتب الحديث", en: "The most authentic collection" } },
      { title: { ar: "صحيح مسلم", en: "Ṣaḥīḥ Muslim" }, author: { ar: "مسلم بن الحجاج النيسابوري (ت ٢٦١ هـ)", en: "Muslim ibn al-Ḥajjāj (d. 261 AH)" }, note: { ar: "ثاني الصحيحين", en: "Second of the two Ṣaḥīḥayn" } },
      { title: { ar: "الموطأ", en: "al-Muwaṭṭaʾ" }, author: { ar: "الإمام مالك بن أنس (ت ١٧٩ هـ)", en: "Imām Mālik ibn Anas (d. 179 AH)" }, note: { ar: "أقدم مدوّنةٍ حديثية", en: "The earliest surviving ḥadīth compilation" } },
      { title: { ar: "سنن أبي داود والترمذي والنسائي وابن ماجه", en: "The Sunan of Abū Dāwūd, al-Tirmidhī, al-Nasāʾī and Ibn Mājah" }, author: { ar: "أهل السنن الأربعة", en: "The four Sunan authors" }, note: { ar: "تُذكر مع درجة الحديث", en: "Cited together with each ḥadīth's grade" } },
    ],
  },
  {
    id: "seerah",
    name: { ar: "كتب السيرة", en: "Seerah and history" },
    note: {
      ar: "السيرة معتمدةٌ على المصادر الموثّقة، والضعيف منها يُبيَّن أنه ضعيف.",
      en: "The biography is drawn from documented sources; weak reports are labelled as such.",
    },
    items: [
      { title: { ar: "السيرة النبوية (ابن هشام)", en: "Sīrat Ibn Hishām" }, author: { ar: "عبد الملك بن هشام (ت ٢١٨ هـ)", en: "ʿAbd al-Malik ibn Hishām (d. 218 AH)" }, note: { ar: "اختصارٌ لسيرة ابن إسحاق", en: "An abridgement of Ibn Isḥāq's sīrah" } },
      { title: { ar: "الرحيق المختوم", en: "al-Raḥīq al-Makhtūm" }, author: { ar: "صفي الرحمن المباركفوري (ت ١٤٢٧ هـ)", en: "Ṣafī al-Raḥmān al-Mubārakfūrī (d. 1427 AH)" }, note: { ar: "سيرةٌ حديثة موثّقة", en: "A modern, documented biography" } },
      { title: { ar: "فقه السيرة", en: "Fiqh al-Sīrah" }, author: { ar: "محمد رمضان البوطي (ت ١٤٣٤ هـ)", en: "Muḥammad Ramaḍān al-Būṭī (d. 1434 AH)" }, note: { ar: "قراءةٌ فقهية لأحداث السيرة", en: "A juristic reading of the seerah" } },
    ],
  },
  {
    id: "aqeedah",
    name: { ar: "العقيدة والفقه", en: "Belief and jurisprudence" },
    note: {
      ar: "عند وجود اختلافٍ فقهيٍّ معتبر، نوضّح الاختلاف ولا نقدّم رأيًا واحدًا على أنه محلّ إجماع.",
      en: "Where a recognised difference of opinion exists, it is stated as such rather than presented as consensus.",
    },
    items: [
      { title: { ar: "كتاب التوحيد", en: "Kitāb al-Tawḥīd" }, author: { ar: "محمد بن عبد الوهاب (ت ١٢٠٦ هـ)", en: "Muḥammad ibn ʿAbd al-Wahhāb (d. 1206 AH)" }, note: { ar: "أصول التوحيد", en: "Foundations of monotheism" } },
      { title: { ar: "الموسوعة الفقهية الكويتية", en: "Kuwait Encyclopedia of Jurisprudence" }, author: { ar: "وزارة الأوقاف الكويتية", en: "Kuwait Ministry of Awqāf" }, note: { ar: "لتفصيل اختلاف المذاهب", en: "For detail on the differences between schools" } },
      { title: { ar: "الإحياء علوم الدين", en: "Iḥyāʾ ʿUlūm al-Dīn" }, author: { ar: "أبو حامد الغزالي (ت ٥٠٥ هـ)", en: "Abū Ḥāmid al-Ghazālī (d. 505 AH)" }, note: { ar: "الأخلاق والسلوك", en: "Ethics and spiritual formation" } },
    ],
  },
  {
    id: "translations",
    name: { ar: "الترجمات المعتمدة", en: "Approved translations" },
    note: {
      ar: "الترجمات تنقل معنى القرآن بلغةٍ أخرى، ولا تُقرأ في الصلاة ولا تُسمَّى قرآنًا.",
      en: "Translations convey the meaning of the Qur'an in another language; they are not recited in prayer and are never called the Qur'an.",
    },
    items: [
      { title: { ar: "The Message of the Qur'an", en: "The Message of the Qur'an" }, author: { ar: "محمد أسد", en: "Muhammad Asad" }, note: { ar: "إنجليزية، مع تفسير مختصر", en: "English, with brief commentary" } },
      { title: { ar: "Saheeh International", en: "Saheeh International" }, author: { ar: "جمعٌ من المترجمين", en: "A team of translators" }, note: { ar: "إنجليزية، اتّجاه حرفية", en: "English, close to the literal sense" } },
      { title: { ar: "Le Coran — Traduction", en: "Le Coran — Traduction" }, author: { ar: "محمد حميد الله", en: "Muhammad Hamidullah" }, note: { ar: "فرنسية", en: "French" } },
    ],
  },
];
