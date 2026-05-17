import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const siteUrl = "https://renangagliano.com.br";

export default function Seo({ title, description }) {
  const { language, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | Renan Gagliano`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) keywords.setAttribute("content", t.meta.keywords);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${siteUrl}${location.pathname}`);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [description, language, location.pathname, t.meta.keywords, title]);

  return null;
}
