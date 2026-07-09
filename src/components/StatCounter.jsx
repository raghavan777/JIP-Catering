import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 500,   suffix: "+", label: "Events Catered",    icon: "🎊" },
  { value: 15,    suffix: "+", label: "Years of Tradition", icon: "🌿" },
  { value: 10000, suffix: "+", label: "Guests Delighted",   icon: "👥" },
  { value: 3,     suffix: "",  label: "Menu Tiers (Veg & Non-Veg)", icon: "🍽" },
];

function useCountUp(target, active, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ stat, index, active, totalCols }) {
  const count = useCountUp(stat.value, active, 1600 + index * 200);

  // Show vertical divider only when not the first in a row
  const showDivider = totalCols === 2
    ? index % 2 !== 0   // 2-col: divider on right column
    : index > 0;        // 4-col: all except first

  const displayValue =
    stat.value >= 1000
      ? count >= 1000
        ? `${Math.floor(count / 1000)}K`
        : "0K"
      : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        textAlign: "center",
        padding: "clamp(20px, 4vw, 36px) clamp(12px, 3vw, 28px)",
        position: "relative",
        flex: "1 1 0",
        minWidth: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Vertical divider */}
      {showDivider && (
        <div className="stat-divider" style={{
          position: "absolute", left: 0, top: "15%", bottom: "15%", width: 1,
          background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.35), transparent)",
        }} />
      )}

      {/* Icon */}
      <div style={{ fontSize: "clamp(1.4rem, 5vw, 1.9rem)", marginBottom: 6, lineHeight: 1 }}>
        {stat.icon}
      </div>

      {/* Number */}
      <div style={{
        fontSize: "clamp(1.7rem, 6.5vw, 3rem)",
        fontWeight: 900,
        fontFamily: "var(--font-display, serif)",
        lineHeight: 1,
        background: "linear-gradient(135deg, #B88E2F, #D4AF37, #F0D060)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap",
      }}>
        {displayValue}{stat.suffix}
      </div>

      {/* Label */}
      <div style={{
        marginTop: 6,
        fontSize: "clamp(0.6rem, 2.2vw, 0.78rem)",
        fontWeight: 600,
        letterSpacing: "clamp(0.04em, 0.5vw, 0.12em)",
        textTransform: "uppercase",
        color: "rgba(245,240,232,0.55)",
        fontFamily: "var(--font-body, sans-serif)",
        lineHeight: 1.3,
        wordBreak: "break-word",
        hyphens: "auto",
      }}>
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #0f1a10 50%, #0a0600 100%)",
        borderTop: "1px solid rgba(212,175,55,0.12)",
        borderBottom: "1px solid rgba(212,175,55,0.12)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 600, height: 300,
        background: "radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/*
        Mobile  (<640px) : 2 columns × 2 rows
        Tablet+ (>=640px): 4 columns × 1 row
        We achieve this with a CSS Grid via a style tag + class approach,
        or simply using a responsive grid div.
      */}
      <div
        className="stat-counter-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 8px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {STATS.map((stat, i) => (
          <StatItem
            key={i}
            stat={stat}
            index={i}
            active={isInView}
            totalCols={4}  /* divider logic — always 4-col conceptually, see below */
          />
        ))}
      </div>

      {/* Responsive grid override */}
      <style>{`
        /* Mobile: 2 items per row */
        @media (max-width: 639px) {
          .stat-counter-grid > * {
            flex: 0 0 50% !important;
            max-width: 50% !important;
          }
          /* Hide the left-divider on 1st and 3rd items (left column) */
          .stat-counter-grid > *:nth-child(odd) .stat-divider {
            display: none !important;
          }
        }
        /* Tablet+: 4 items in one row */
        @media (min-width: 640px) {
          .stat-counter-grid > * {
            flex: 1 1 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
