import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  );

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(pos.x, springConfig);
  const y = useSpring(pos.y, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const enter = () => {
      const els = document.querySelectorAll("button, a, [data-cursor-hover], input, [role=button]");
      const onEnter = () => setHovered(true);
      const onLeave = () => setHovered(false);
      els.forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const leave = () => setVisible(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseover", enter);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseover", enter);
    };
  }, [isMobile]);

  useEffect(() => {
    x.set(pos.x);
    y.set(pos.y);
  }, [pos, x, y]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer ring — slow follow */}
      <motion.div
        style={{
          position: "fixed",
          left: 0, top: 0,
          x: x, y: y,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9999,
          pointerEvents: "none",
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(212,175,55,0.7)",
          boxShadow: hovered
            ? "0 0 20px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.15)"
            : "0 0 8px rgba(212,175,55,0.2)",
          background: hovered ? "rgba(212,175,55,0.08)" : "transparent",
          transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.85 : 1,
        }}
      />
      {/* Inner dot — exact position */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          zIndex: 10000,
          pointerEvents: "none",
          width: hovered ? 0 : 5,
          height: hovered ? 0 : 5,
          borderRadius: "50%",
          background: "#D4AF37",
          boxShadow: "0 0 6px rgba(212,175,55,0.8)",
          transition: "width 0.2s ease, height 0.2s ease",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
