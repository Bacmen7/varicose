import { useEffect } from "react";

const DEFAULT_TITLE = "Sira Vascular | Expert Vein Treatment";

// SPA replacement for Next.js per-page `export const metadata`.
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ?? DEFAULT_TITLE;
    if (description) {
      const meta = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]',
      );
      if (meta) meta.content = description;
    }
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description]);
}
