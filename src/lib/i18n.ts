export type Lang = "ar" | "en" | "fr" | "es" | "de" | "pt" | "id" | "tr" | "ru" | "zh";

export const LANGS: { code: Lang; label: string; english: string; dir: "rtl" | "ltr" }[] = [
  { code: "ar", label: "العربية", english: "Arabic", dir: "rtl" },
  { code: "en", label: "English", english: "English", dir: "ltr" },
  { code: "fr", label: "Français", english: "French", dir: "ltr" },
  { code: "es", label: "Español", english: "Spanish", dir: "ltr" },
  { code: "de", label: "Deutsch", english: "German", dir: "ltr" },
  { code: "pt", label: "Português", english: "Portuguese", dir: "ltr" },
  { code: "id", label: "Bahasa Indonesia", english: "Indonesian", dir: "ltr" },
  { code: "tr", label: "Türkçe", english: "Turkish", dir: "ltr" },
  { code: "ru", label: "Русский", english: "Russian", dir: "ltr" },
  { code: "zh", label: "中文", english: "Chinese", dir: "ltr" },
];

type Dict = { en: string } & Partial<Record<Lang, string>>;

const S: Record<string, Dict> = {
  "brand.name": {
    en: "Discover Islam",
    ar: "اكتشف الإسلام",
    fr: "Découvrir l'Islam",
    es: "Descubre el Islam",
    de: "Islam entdecken",
    pt: "Descubra o Islã",
    id: "Mengenal Islam",
    tr: "İslam'ı Keşfet",
    ru: "Открой Ислам",
    zh: "探索伊斯兰",
  },
  "brand.tag": {
    en: "A quiet introduction to Islam",
    ar: "مدخل هادئ إلى الإسلام",
    fr: "Une introduction paisible à l'Islam",
    es: "Una introducción serena al Islam",
    de: "Eine ruhige Einführung in den Islam",
    pt: "Uma introdução serena ao Islã",
    id: "Pengenalan Islam yang tenang",
    tr: "İslam'a sakin bir tanıtım",
    ru: "Спокойное знакомство с Исламом",
    zh: "宁静地认识伊斯兰",
  },
  "nav.home": { en: "Home", ar: "الرئيسية", fr: "Accueil", es: "Inicio", de: "Start", pt: "Início", id: "Beranda", tr: "Ana sayfa", ru: "Главная", zh: "首页" },
  "nav.what": { en: "What is Islam?", ar: "ما هو الإسلام؟", fr: "Qu'est-ce que l'Islam ?", es: "¿Qué es el Islam?", de: "Was ist der Islam?", pt: "O que é o Islã?", id: "Apa itu Islam?", tr: "İslam nedir?", ru: "Что такое Ислам?", zh: "什么是伊斯兰？" },
  "nav.why": { en: "Why Islam?", ar: "لماذا الإسلام؟", fr: "Pourquoi l'Islam ?", es: "¿Por qué el Islam?", de: "Warum der Islam?", pt: "Por que o Islã?", id: "Mengapa Islam?", tr: "Neden İslam?", ru: "Почему Ислам?", zh: "为何是伊斯兰？" },
  "nav.quran": { en: "The Qur'an", ar: "القرآن الكريم", fr: "Le Coran", es: "El Corán", de: "Der Koran", pt: "O Alcorão", id: "Al-Qur'an", tr: "Kur'an", ru: "Коран", zh: "古兰经" },
  "nav.prophet": { en: "The Prophet ﷺ", ar: "النبي محمد ﷺ", fr: "Le Prophète ﷺ", es: "El Profeta ﷺ", de: "Der Prophet ﷺ", pt: "O Profeta ﷺ", id: "Nabi ﷺ", tr: "Peygamber ﷺ", ru: "Пророк ﷺ", zh: "先知 ﷺ" },
  "nav.stories": { en: "Stories", ar: "قصص الهداية", fr: "Récits", es: "Historias", de: "Geschichten", pt: "Histórias", id: "Kisah", tr: "Hikâyeler", ru: "Истории", zh: "故事" },
  "nav.considering": { en: "Thinking about Islam", ar: "إذا كنت تفكر في الإسلام", fr: "Réfléchir à l'Islam", es: "Pensando en el Islam", de: "Über den Islam nachdenken", pt: "Pensando no Islã", id: "Memikirkan Islam", tr: "İslam'ı düşünmek", ru: "Размышляя об Исламе", zh: "思考伊斯兰" },
  "nav.newmuslim": { en: "New Muslims", ar: "أنا مسلم جديد", fr: "Nouveau musulman", es: "Nuevo musulmán", de: "Neue Muslime", pt: "Novo muçulmano", id: "Muslim baru", tr: "Yeni Müslüman", ru: "Новый мусульманин", zh: "新穆斯林" },
  "nav.faq": { en: "FAQ", ar: "الأسئلة الشائعة", fr: "Questions", es: "Preguntas", de: "Fragen", pt: "Perguntas", id: "Tanya jawab", tr: "Sorular", ru: "Вопросы", zh: "常见问题" },
  "nav.sources": { en: "Sources", ar: "المصادر", fr: "Sources", es: "Fuentes", de: "Quellen", pt: "Fontes", id: "Sumber", tr: "Kaynaklar", ru: "Источники", zh: "参考资料" },
  "nav.ask": { en: "Ask a question", ar: "اسأل عن الإسلام", fr: "Poser une question", es: "Hacer una pregunta", de: "Frage stellen", pt: "Faça uma pergunta", id: "Ajukan pertanyaan", tr: "Soru sorun", ru: "Задать вопрос", zh: "提问" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا", fr: "Contact", es: "Contacto", de: "Kontakt", pt: "Contato", id: "Kontak", tr: "İletişim", ru: "Контакты", zh: "联系我们" },
  "nav.menu": { en: "Menu", ar: "القائمة", fr: "Menu", es: "Menú", de: "Menü", pt: "Menu", id: "Menu", tr: "Menü", ru: "Меню", zh: "菜单" },
  "nav.close": { en: "Close", ar: "إغلاق", fr: "Fermer", es: "Cerrar", de: "Schließen", pt: "Fechar", id: "Tutup", tr: "Kapat", ru: "Закрыть", zh: "关闭" },
  "search.open": { en: "Search", ar: "بحث", fr: "Rechercher", es: "Buscar", de: "Suchen", pt: "Buscar", id: "Cari", tr: "Ara", ru: "Поиск", zh: "搜索" },
  "search.title": { en: "Search the site", ar: "ابحث في الموقع", fr: "Rechercher sur le site", es: "Buscar en el sitio", de: "Website durchsuchen", pt: "Pesquisar no site", id: "Cari di situs", tr: "Sitede ara", ru: "Поиск по сайту", zh: "站内搜索" },
  "search.placeholder": {
    en: "Verses, topics, questions, seerah…",
    ar: "آيات، مواضيع، أسئلة، سيرة…",
    fr: "Versets, sujets, questions, sîra…",
    es: "Versículos, temas, preguntas, sira…",
    de: "Verse, Themen, Fragen, Sīra…",
    pt: "Versículos, temas, perguntas, sira…",
    id: "Ayat, topik, pertanyaan, sirah…",
    tr: "Ayetler, konular, sorular, siyer…",
    ru: "Стихи, темы, вопросы, сира…",
    zh: "经文、主题、问题、生平……",
  },
  "search.none": {
    en: "No results. Try another word — or ask us your question directly.",
    ar: "لا نتائج. جرّب كلمة أخرى — أو ارسل سؤالك مباشرة.",
    fr: "Aucun résultat. Essayez un autre mot — ou posez-nous votre question.",
    es: "Sin resultados. Prueba otra palabra o envíanos tu pregunta.",
    de: "Keine Ergebnisse. Versuchen Sie ein anderes Wort — oder stellen Sie uns Ihre Frage.",
    pt: "Sem resultados. Tente outra palavra — ou envie sua pergunta.",
    id: "Tidak ada hasil. Coba kata lain — atau kirim pertanyaan Anda.",
    tr: "Sonuç yok. Başka bir kelime deneyin — ya da sorunuzu bize yazın.",
    ru: "Ничего не найдено. Попробуйте другое слово — или задайте вопрос.",
    zh: "没有结果。请换一个词，或直接向我们提问。",
  },
  "search.hint": {
    en: "Type at least two letters",
    ar: "اكتب حرفين على الأقل",
    fr: "Tapez au moins deux lettres",
    es: "Escribe al menos dos letras",
    de: "Mindestens zwei Buchstaben eingeben",
    pt: "Digite pelo menos duas letras",
    id: "Ketik minimal dua huruf",
    tr: "En az iki harf yazın",
    ru: "Введите не менее двух букв",
    zh: "请至少输入两个字符",
  },
  "hero.eyebrow": {
    en: "A calm, sourced introduction — for the curious, the searching, and the new",
    ar: "تعريف هادئ وموثّق — للفضولي، وللباحث، وللجديد",
  },
  "hero.title": { en: "Discover Islam", ar: "اكتشف الإسلام" },
  "hero.sub": {
    en: "Learn about the message of Islam, the Qur'an, and the life of the Prophet Muhammad ﷺ — a call built on oneness, mercy, and peace.",
    ar: "تعرّف على رسالة الإسلام، والقرآن، وحياة النبي محمد ﷺ، واكتشف دعوة تقوم على التوحيد والرحمة والسلام.",
  },
  "hero.scroll": { en: "Begin", ar: "ابدأ الرحلة" },
  "cta.what": { en: "What is Islam?", ar: "ما هو الإسلام؟" },
  "cta.quran": { en: "Read the Qur'an", ar: "اقرأ القرآن" },
  "cta.why": { en: "Why Islam?", ar: "لماذا الإسلام؟" },
  "cta.new": { en: "I am a new Muslim", ar: "أنا مسلم جديد" },
  "cta.ask": { en: "Do you have a question?", ar: "هل لديك سؤال؟" },
  "cta.more": { en: "I would like to know more", ar: "أريد معرفة المزيد" },
  "cta.explore": { en: "Explore", ar: "اكتشف المزيد" },
  "cta.read": { en: "Read", ar: "اقرأ" },
  "common.sources": { en: "Source", ar: "المصدر" },
  "common.back": { en: "Back", ar: "رجوع" },
  "common.copy": { en: "Copy", ar: "نسخ" },
  "common.copied": { en: "Copied", ar: "تم النسخ" },
  "common.share": { en: "Share", ar: "مشاركة" },
  "common.night": { en: "Night reading", ar: "الوضع الليلي" },
  "common.fontsize": { en: "Text size", ar: "حجم الخط" },
  "common.audio": { en: "Recitation", ar: "التلاوة" },
  "common.play": { en: "Play", ar: "تشغيل" },
  "common.pause": { en: "Pause", ar: "إيقاف" },
  "common.audioError": {
    en: "The recitation could not be loaded. Check your connection and try again.",
    ar: "تعذّر تحميل التلاوة. تحقّق من اتصالك بالإنترنت وحاول مرة أخرى.",
  },
  "common.search": { en: "Search", ar: "بحث" },
  "common.all": { en: "All", ar: "الكل" },
  "common.next": { en: "Next", ar: "التالي" },
  "common.submit": { en: "Send", ar: "إرسال" },
  "common.optional": { en: "optional", ar: "اختياري" },
  "common.language": { en: "Language", ar: "اللغة" },
  "common.progress": { en: "Your progress", ar: "تقدمك" },
  "common.done": { en: "completed", ar: "مكتمل" },
  "common.reset": { en: "Reset", ar: "إعادة الضبط" },
  "common.theme": { en: "Theme", ar: "المظهر" },
  "footer.rights": {
    en: "Educational content, free to read and share with attribution.",
    ar: "محتوى تعليمي، للقراءة والمشاركة مع ذكر المصدر.",
  },
  "footer.note": {
    en: "Translations render the meaning of the Qur'an; they are not the Qur'an itself.",
    ar: "الترجمات لمعاني القرآن الكريم، وليست القرآن نفسه.",
  },
  "footer.privacy": {
    en: "We do not publish personal questions, and we do not track you for advertising.",
    ar: "لا ننشر الأسئلة الشخصية، ولا نتعقبك لأغراض إعلانية.",
  },
};

export function t(lang: Lang, key: string): string {
  const entry = S[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
}

export type Bi = { ar: string; en: string };

export function bi(value: Bi, lang: Lang): string {
  return lang === "ar" ? value.ar : value.en;
}
