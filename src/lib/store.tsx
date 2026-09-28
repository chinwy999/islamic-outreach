import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LANGS, t as translate, type Bi, type Lang } from "./i18n";

export type Route = string;

type AppState = {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "rtl" | "ltr";
  t: (key: string) => string;
  bi: (v: Bi) => string;
  dark: boolean;
  toggleDark: () => void;
  route: Route;
  go: (path: string) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
};

const Ctx = createContext<AppState | null>(null);

function readHash(): string {
  const raw = window.location.hash.replace(/^#/, "");
  return raw === "" ? "/" : raw;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    // Per-language URLs: /?lang=en#/quran — also used by the language switcher.
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl && LANGS.some((l) => l.code === fromUrl)) return fromUrl as Lang;
    const stored = localStorage.getItem("di:lang");
    if (stored && LANGS.some((l) => l.code === stored)) return stored as Lang;
    const nav = navigator.language?.slice(0, 2);
    const match = LANGS.find((l) => l.code === nav);
    return match ? match.code : "ar";
  });
  const [dark, setDark] = useState<boolean>(() => localStorage.getItem("di:dark") === "1");
  const [route, setRoute] = useState<Route>(() => readHash());
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setRoute(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const meta = LANGS.find((l) => l.code === lang)!;
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    localStorage.setItem("di:lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("di:dark", dark ? "1" : "0");
  }, [dark]);

  useEffect(() => {
    if (route.includes("#")) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [route]);

  const go = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  const value = useMemo<AppState>(
    () => ({
      lang,
      setLang: (l: Lang) => {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", l);
        window.history.replaceState({}, "", url.toString());
        setLangState(l);
      },
      dir: LANGS.find((l) => l.code === lang)!.dir,
      t: (key: string) => translate(lang, key),
      bi: (v: Bi) => (lang === "ar" ? v.ar : v.en),
      dark,
      toggleDark: () => setDark((d) => !d),
      route,
      go,
      searchOpen,
      setSearchOpen,
    }),
    [lang, dark, route, go, searchOpen],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
