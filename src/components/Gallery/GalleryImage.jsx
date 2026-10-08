import { useEffect, useRef, useState } from "react";

// Preserve each image box while loading only nearby photos at the required resolution.
export default function GalleryImage({ src, srcSet, loading, sizes, aspectRatio = 1, ...props }) {
  const ref = useRef(null);
  const [state, setState] = useState(() => ({
    ready: (sizes && loading !== "lazy") ||
      (typeof window !== "undefined" && !("IntersectionObserver" in window)),
    sizes: sizes || "100vw",
  }));

  useEffect(() => {
    const image = ref.current;
    if (!image) return;
    const measure = () => {
      const rect = image.getBoundingClientRect();
      return sizes || `${Math.ceil(Math.max(rect.width, rect.height * aspectRatio))}px`;
    };
    const resizeObserver = !sizes && "ResizeObserver" in window
      ? new ResizeObserver(() => {
          const next = measure();
          setState(previous => previous.sizes === next ? previous : { ...previous, sizes: next });
        })
      : null;
    resizeObserver?.observe(image);
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setState({ ready: true, sizes: measure() });
            observer.disconnect();
          }
        }, { rootMargin: "300px 0px" })
      : null;
    observer?.observe(image);
    return () => { observer?.disconnect(); resizeObserver?.disconnect(); };
  }, [src, sizes, aspectRatio]);

  return <img width={Math.round(aspectRatio * 1000)} height={1000} {...props} ref={ref} src={state.ready ? src : undefined}
    srcSet={state.ready ? srcSet : undefined} sizes={state.sizes}
    loading={state.ready ? "eager" : "lazy"} />;
}
