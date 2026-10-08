import { useEffect, useRef } from "react";

export default function ViewportVideo({ src, ...props }) {
  const ref = useRef(null);
  const autoPlay = props.autoPlay ?? false;

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let visible = !("IntersectionObserver" in window);
    const updatePlayback = () => {
      if (visible && !document.hidden) {
        if (!video.getAttribute("src")) video.src = src;
        if (autoPlay) video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(
          ([entry]) => {
            visible = entry.isIntersecting;
            updatePlayback();
          },
          { threshold: 0.1 },
        )
      : null;

    observer?.observe(video);
    updatePlayback();
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [src, autoPlay]);

  return <video {...props} ref={ref} preload="none" />;
}
