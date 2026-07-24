import { useLocation } from "react-router-dom";

// Drop-in replacement for next/navigation's usePathname.
export function usePathname(): string {
  const { pathname } = useLocation();
  return pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
}
