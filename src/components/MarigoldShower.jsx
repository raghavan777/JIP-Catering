import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Rich traditional marigold colors (shades of orange, golden yellow, saffron, and deep red)
const PETAL_COLORS = ["#E3834F", "#D4AF37", "#F0D060", "#B91C1C", "#FF9933", "#FFCC00"];

function MarigoldShower() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate fewer petals on mobile (8) vs desktop (22) for 4GB RAM performance
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 8 : 22;
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage width
      size: Math.random() * 10 + 6, // 6px to 16px
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      delay: Math.random() * 12, // stagger launch
      duration: Math.random() * 8 + 12, // 12s to 20s fall time
      sway: Math.random() * 50 + 20, // sway distance in pixels
      rotateSpeed: Math.random() * 360 + 180,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: -20,
            width: petal.size,
            height: petal.size * 0.75, // petal-like shape
            backgroundColor: petal.color,
            borderRadius: "50% 0 50% 50%", // classic petal shape
            opacity: 0.65,
            willChange: "transform, opacity",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(petal.id) * petal.sway, 0, -Math.sin(petal.id) * petal.sway, 0],
            rotate: [0, petal.rotateSpeed, petal.rotateSpeed * 2],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default MarigoldShower;
