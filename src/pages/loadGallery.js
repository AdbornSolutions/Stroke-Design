let galleryPromise;

export function loadGallery() {
  galleryPromise ??= import("./Gallery").catch(error => {
    galleryPromise = undefined;
    throw error;
  });
  return galleryPromise;
}

export function preloadGallery() {
  if (document.hidden || navigator.connection?.saveData) return;
  // Warm the route on intent; navigation can retry a failed prefetch.
  void loadGallery().catch(() => {});
}
