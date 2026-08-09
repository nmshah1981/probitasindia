"use client";

import * as React from "react";
import { getDefaultSiteData, type SiteData } from "@/lib/site-defaults";

/**
 * ContentProvider — loads site content from /api/content on mount and
 * distributes it to all components via the useContent() hook.
 *
 * Falls back to the static defaults from site-defaults.ts if the API is
 * unavailable (e.g. during SSR or if the database hasn't been seeded).
 */

type ContentContextValue = {
  data: SiteData;
  loading: boolean;
  /** Re-fetch content from the API (used by the admin page after saving). */
  refresh: () => Promise<void>;
};

const ContentContext = React.createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = React.useState<SiteData>(() => getDefaultSiteData());
  const [loading, setLoading] = React.useState(true);

  const refresh = React.useCallback(async () => {
    try {
      const res = await fetch("/api/content", { cache: "no-store" });
      if (res.ok) {
        const json = (await res.json()) as SiteData;
        setData(json);
      }
    } catch (err) {
      console.error("[ContentProvider] failed to load content:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    refresh();
  }, [refresh]);

  const value = React.useMemo(
    () => ({ data, loading, refresh }),
    [data, loading, refresh],
  );

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
}

/** Hook for components to access the live site content. */
export function useContent(): ContentContextValue {
  const ctx = React.useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return ctx;
}
