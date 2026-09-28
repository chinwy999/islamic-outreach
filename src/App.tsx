import { useEffect } from "react";
import { AppProvider, useApp } from "./lib/store";
import { Footer, Header, SearchOverlay } from "./components/Chrome";
import Home from "./pages/Home";
import QuranPage from "./pages/QuranPage";
import { Prophet, Stories, WhatIsIslam, WhyIslam } from "./pages/Guides";
import { Ask, Contact, Considering, Faq, NewMuslim, NotFound, Sources } from "./pages/Extras";

const TITLES: Record<string, { ar: string; en: string }> = {
  "/": {
    ar: "اكتشف الإسلام — مدخل هادئ إلى الإسلام والقرآن وسيرة النبي محمد ﷺ",
    en: "Discover Islam — a calm introduction to Islam, the Qur'an and the Prophet ﷺ",
  },
  "/what-is-islam": {
    ar: "ما هو الإسلام؟ — تعريف بسيط بالعقيدة وأركان الإسلام | اكتشف الإسلام",
    en: "What is Islam? — belief, the pillars of Islam and the Qur'an explained",
  },
  "/why-islam": {
    ar: "لماذا الإسلام؟ — لماذا خلقنا الله وهدف الحياة وما بعد الموت",
    en: "Why Islam? — why we were created, the purpose of life and the hereafter",
  },
  "/quran": {
    ar: "القرآن الكريم — قراءة السور والبحث والتلاوة | اكتشف الإسلام",
    en: "The Holy Qur'an — read, search and listen to the sūrahs",
  },
  "/prophet": {
    ar: "تعرف على النبي محمد ﷺ — السيرة النبوية بالتفصيل والمصادر",
    en: "The Prophet Muhammad ﷺ — a documented biography with sources",
  },
  "/stories": {
    ar: "قصص الهداية — قصص موثّقة لأشخاصٍ اعتنقوا الإسلام",
    en: "Stories of guidance — documented accounts of people who embraced Islam",
  },
  "/considering-islam": {
    ar: "إذا كنت تفكر في الإسلام — إجابات مطمئنة بلا ضغط",
    en: "If you are thinking about Islam — reassuring answers, with no pressure",
  },
  "/new-muslim": {
    ar: "أنا مسلم جديد — مسار تعليمي متدرّج بثلاثة مستويات",
    en: "I am a new Muslim — a graded learning path in three levels",
  },
  "/faq": {
    ar: "الأسئلة الشائعة عن الإسلام — إجابات متوازنة بمصادرها",
    en: "Frequently asked questions about Islam — balanced, sourced answers",
  },
  "/sources": {
    ar: "المصادر والمراجع — القرآن والحديث والسيرة والتفاسير",
    en: "Sources and references — Qur'an, ḥadīth, seerah and tafsīr",
  },
  "/ask": { ar: "اسأل عن الإسلام — أرسل سؤالك", en: "Ask about Islam — send your question" },
  "/contact": { ar: "تواصل معنا", en: "Contact us" },
};

function Routes() {
  const { route, lang } = useApp();
  const [path, anchor] = route.split("#");

  useEffect(() => {
    const title = TITLES[path];
    document.title = title
      ? lang === "ar"
        ? title.ar
        : title.en
      : lang === "ar"
        ? "الصفحة غير موجودة | اكتشف الإسلام"
        : "Page not found | Discover Islam";
  }, [path, lang]);

  useEffect(() => {
    if (!anchor) return;
    const id = window.setTimeout(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(id);
  }, [anchor, route]);

  const surahMatch = path.match(/^\/quran\/(\d+)$/);

  if (surahMatch) return <QuranPage surahNumber={Number(surahMatch[1])} />;

  switch (path) {
    case "/":
      return <Home />;
    case "/what-is-islam":
      return <WhatIsIslam />;
    case "/why-islam":
      return <WhyIslam />;
    case "/quran":
      return <QuranPage />;
    case "/prophet":
      return <Prophet />;
    case "/stories":
      return <Stories />;
    case "/considering-islam":
      return <Considering />;
    case "/new-muslim":
      return <NewMuslim />;
    case "/faq":
      return <Faq />;
    case "/sources":
      return <Sources />;
    case "/ask":
      return <Ask />;
    case "/contact":
      return <Contact />;
    default:
      return <NotFound />;
  }
}

function Shell() {
  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-night dark:text-night-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes />
      </main>
      <Footer />
      <SearchOverlay />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
