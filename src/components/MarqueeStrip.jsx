import { motion } from "framer-motion";

const items = [
  "Authentic South Indian",
  "Wedding Catering",
  "Since 2015",
  "JIP Caterers",
  "Banana Leaf Feasts",
  "Traditional Recipes",
  "Pure Vegetarian",
  "Grand Celebrations",
];

const MarqueeContent = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}>
    {items.map((item, i) => (
      <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
        <span
          style={{
            whiteSpace: "nowrap",
            fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#D4AF37",
            fontFamily: "var(--font-body)",
            padding: "0 28px",
          }}
        >
          {item}
        </span>
        <span
          style={{
            color: "#4A8C52",
            fontSize: "0.9rem",
            opacity: 0.7,
            flexShrink: 0,
          }}
        >
          ✦
        </span>
      </span>
    ))}
  </div>
);

export default function MarqueeStrip() {
  return (
    <div
      style={{
        overflow: "hidden",
        background: "linear-gradient(135deg, #0d1f0e 0%, #122B15 50%, #0d1f0e 100%)",
        borderTop: "1px solid rgba(212,175,55,0.25)",
        borderBottom: "1px solid rgba(212,175,55,0.25)",
        padding: "14px 0",
        position: "relative",
        zIndex: 5,
      }}
    >
      {/* Gold shimmer border top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, #D4AF37, #F0D060, #D4AF37, transparent)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, #D4AF37, #F0D060, #D4AF37, transparent)",
      }} />

      {/* Track */}
      <motion.div
        style={{ display: "flex", width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </motion.div>
    </div>
  );
}
