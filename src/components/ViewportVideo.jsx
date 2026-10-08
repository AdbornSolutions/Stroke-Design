import { useEffect, useRef } from "react";

export default function ViewportVideo({ src, poster, ...props }) {
  const ref = useRef(null);
  const autoPlay = props.autoPlay ?? false;

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.removeAttribute("poster");
    video.removeAttribute("src");
    video.load();
    let visible = !("IntersectionObserver" in window);
    const updatePlayback = () => {
      if (visible && !document.hidden) {
        if (poster && !video.getAttribute("poster")) video.poster = poster;
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

    // Warm lightweight thumbnails before a reel enters view, without fetching video bytes.
    const posterObserver = poster && "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            video.poster = poster;
            posterObserver.disconnect();
          }
        }, { rootMargin: "400px 0px" })
      : null;
    posterObserver?.observe(video);
    observer?.observe(video);
    updatePlayback();
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer?.disconnect();
      posterObserver?.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [src, poster, autoPlay]);

  return <video {...props} ref={ref} preload="none" />;
}
