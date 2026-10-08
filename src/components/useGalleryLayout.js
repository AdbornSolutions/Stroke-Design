import { useSyncExternalStore } from "react";
const queries = ["(min-width: 768px)", "(min-width: 1024px)"];
function subscribe(onChange) {
  const media = queries.map(query => window.matchMedia(query));
  media.forEach(query => query.addEventListener("change", onChange));
  return () => media.forEach(query => query.removeEventListener("change", onChange));
}
function getSnapshot() {
  if (window.matchMedia(queries[1]).matches) return "desktop";
  return window.matchMedia(queries[0]).matches ? "tablet" : "mobile";
}
// Match Tailwind breakpoints while rendering only the visible gallery layout.
export default function useGalleryLayout() {
  return useSyncExternalStore(subscribe, getSnapshot, () => "mobile");
}
