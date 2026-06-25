import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const smoothProgress = useSpring(0, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      smoothProgress.set(pct);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [smoothProgress]);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 9998, pointerEvents: "none" }}>
      {/* Track */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(212,175,55,0.1)" }} />
      {/* Progress */}
      <motion.div
        style={{
          position: "absolute", top: 0, left: 0, bottom: 0,
          width: `${progress}%`,
          background: "linear-gradient(90deg, #B88E2F, #D4AF37, #F0D060, #D4AF37)",
          boxShadow: "0 0 8px rgba(212,175,55,0.6), 0 0 16px rgba(212,175,55,0.3)",
          transition: "width 0.08s linear",
        }}
      />
      {/* Glow tip */}
      {progress > 1 && progress < 99 && (
        <div style={{
          position: "absolute", top: 0, bottom: 0,
          left: `${progress}%`,
          width: 12,
          background: "radial-gradient(circle, #F0D060, transparent)",
          transform: "translateX(-50%)",
        }} />
      )}
    </div>
  );
}
