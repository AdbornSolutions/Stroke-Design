import { useEffect, useRef } from "react";

export default function ViewportVideo({ src, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    let visible = false;
    const updatePlayback = () => {
      if (visible && !document.hidden) {
        if (!video.getAttribute("src")) video.src = src;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        updatePlayback();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [src]);

  return <video {...props} ref={ref} preload="metadata" />;
}
