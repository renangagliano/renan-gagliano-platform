import { useEffect } from "react";

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Renan Gagliano`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [description, title]);

  return null;
}
