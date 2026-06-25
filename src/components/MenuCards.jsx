import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bananaLeafSpread from "../assets/banana_leaf_spread.png";
import eliteBuffet from "../assets/elite_buffet.png";
import premiumFeast from "../assets/premium_feast.png";

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */
const MENU_DATA = [
  {
    id: "normal",
    tier: "NORMAL",
    label: "Normal Menu",
    subtitle: "Authentic Leaf Feast",
    desc: "Experience the timeless charm of traditional South Indian dining served on fresh banana leaves — pure, wholesome, and soul-satisfying.",
    dishes: ["Sambar", "Rasam", "Kootu", "Payasam", "Appalam", "Rice & More"],
    emoji: "🍃",
    path: "/normal-menu",
    image: bananaLeafSpread,
    accentColor: "#4A8C52",
    accentLight: "#6BBF76",
    gradientFrom: "#0d1f0e",
    gradientTo: "#122B15",
    borderColor: "rgba(75,140,82,0.7)",
    glowColor: "rgba(75,140,82,0.5)",
    badgeBg: "linear-gradient(135deg,#234927,#3a6e3f)",
    badgeText: "#ffffff",
    ribbon: "Classic",
  },
  {
    id: "elite",
    tier: "ELITE",
    label: "Elite Menu",
    subtitle: "Royal Buffet Selection",
    desc: "A curated blend of royal heritage recipes — premium ingredients, richer gravies, and an elevated serving experience fit for grand celebrations.",
    dishes: ["Shahi Paneer", "Exotic Chutneys", "Ghee Rice", "Halwa", "Special Sweets", "& Much More"],
    emoji: "⭐",
    path: "/elite-menu",
    image: eliteBuffet,
    accentColor: "#D4AF37",
    accentLight: "#F0D060",
    gradientFrom: "#1a1400",
    gradientTo: "#2a1f00",
    borderColor: "rgba(212,175,55,0.7)",
    glowColor: "rgba(212,175,55,0.55)",
    badgeBg: "linear-gradient(135deg,#B88E2F,#D4AF37)",
    badgeText: "#ffffff",
    ribbon: "Popular",
  },
  {
    id: "premium",
    tier: "PREMIUM",
    label: "Premium Menu",
    subtitle: "Luxury Celebration Feast",
    desc: "The pinnacle of South Indian wedding catering — an opulent spread of luxury dishes, rare delicacies, and an unforgettable dining grandeur.",
    dishes: ["Royal Biryani", "Saffron Sweets", "Live Stations", "Exotic Mocktails", "Chef Special", "& Exclusives"],
    emoji: "👑",
    path: "/premium-menu",
    image: premiumFeast,
    accentColor: "#C87941",
    accentLight: "#E8A06A",
    gradientFrom: "#1a0a00",
    gradientTo: "#2d1200",
    borderColor: "rgba(212,175,55,0.7)",
    glowColor: "rgba(200,121,65,0.55)",
    badgeBg: "linear-gradient(135deg,#4A2E1B,#7a4d30)",
    badgeText: "#D4AF37",
    ribbon: "Luxury",
  },
];

/* ─────────────────────────────────────
   SVG HELPERS
───────────────────────────────────── */
const FloatingLeaf = ({ style, size = 60, opacity = 0.07 }) => (
  <svg
    viewBox="0 0 120 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", width: size, height: size * 1.6, opacity, pointerEvents: "none", ...style }}
  >
    <path d="M60 195 C60 195 5 140 5 80 C5 30 30 5 60 5 C90 5 115 30 115 80 C115 140 60 195 60 195Z" fill="#2D6A34" />
    <path d="M60 5 L60 195" stroke="#4A8C52" strokeWidth="2" opacity="0.5" />
    <path d="M60 50 Q35 70 15 90" stroke="#4A8C52" strokeWidth="1.2" opacity="0.4" />
    <path d="M60 50 Q85 70 105 90" stroke="#4A8C52" strokeWidth="1.2" opacity="0.4" />
    <path d="M60 90 Q30 110 10 130" stroke="#4A8C52" strokeWidth="1.2" opacity="0.4" />
    <path d="M60 90 Q90 110 110 130" stroke="#4A8C52" strokeWidth="1.2" opacity="0.4" />
  </svg>
);

const KolamCorner = ({ style }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    stroke="rgba(212,175,55,0.3)"
    strokeWidth="1"
    style={{ position: "absolute", width: 80, height: 80, pointerEvents: "none", ...style }}
  >
    <circle cx="40" cy="40" r="2" fill="rgba(212,175,55,0.4)" />
    <path d="M40 5 Q60 20 75 40 Q60 60 40 75 Q20 60 5 40 Q20 20 40 5Z" />
    <path d="M40 15 Q55 25 65 40 Q55 55 40 65 Q25 55 15 40 Q25 25 40 15Z" strokeDasharray="3,3" />
    <circle cx="40" cy="8"  r="1.5" fill="rgba(212,175,55,0.4)" />
    <circle cx="72" cy="40" r="1.5" fill="rgba(212,175,55,0.4)" />
    <circle cx="40" cy="72" r="1.5" fill="rgba(212,175,55,0.4)" />
    <circle cx="8"  cy="40" r="1.5" fill="rgba(212,175,55,0.4)" />
  </svg>
);

const MenuCard = ({ card, index, activeIndex, setActiveIndex }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  // Compute circular offset for a loop of length 3
  let offset = index - activeIndex;
  if (offset < -1) offset += 3;
  if (offset > 1) offset -= 3;

  const isActive = offset === 0;

  const handleCardClick = (e) => {
    if (isActive) {
      navigate(card.path);
    } else {
      setActiveIndex(index);
    }
  };

  // 3D positioning style with responsive variables
  const cardStyle = {
    position: "absolute",
    width: "var(--carousel-card-width)",
    height: "var(--carousel-card-height)",
    zIndex: isActive ? 10 : 5,
    opacity: isActive ? 1 : 0.55,
    transition: "transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.45s ease, z-index 0.45s ease",
    transformStyle: "preserve-3d",
    cursor: "pointer",
  };

  // Apply Y-rotation, translate X/Z depth, and scaling
  const hoverY = hovered && isActive ? -12 : 0;
  if (offset === 0) {
    cardStyle.transform = `translate3d(0, ${hoverY}px, 60px) rotateY(0deg) scale(1.08)`;
  } else if (offset === -1) {
    cardStyle.transform = `translate3d(calc(-1 * var(--carousel-offset-x)), 0px, var(--carousel-offset-z)) rotateY(42deg) scale(0.85)`;
  } else if (offset === 1) {
    cardStyle.transform = `translate3d(var(--carousel-offset-x), 0px, var(--carousel-offset-z)) rotateY(-42deg) scale(0.85)`;
  }

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={cardStyle}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 28,
          overflow: "hidden",
          border: `1.5px solid ${card.borderColor}`,
          background: `linear-gradient(160deg,#080808 0%,${card.gradientFrom} 60%,${card.gradientTo} 100%)`,
          boxShadow: (hovered && isActive)
            ? `0 32px 80px ${card.glowColor}, 0 0 30px ${card.glowColor}`
            : "0 10px 40px rgba(0,0,0,0.6)",
          transition: "box-shadow 0.45s ease",
          position: "relative",
        }}
      >
        {/* Gold border glow on hover */}
        <motion.div
          animate={{ opacity: (hovered && isActive) ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute", inset: 0, borderRadius: 28,
            border: `1px solid ${card.accentColor}`,
            boxShadow: `inset 0 0 30px ${card.glowColor}`,
            pointerEvents: "none", zIndex: 10,
          }}
        />

        {/* Ribbon */}
        <div style={{
          position: "absolute", top: 18, right: -10,
          background: card.badgeBg, color: card.badgeText,
          padding: "4px 20px 4px 12px",
          fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em",
          textTransform: "uppercase", fontFamily: "var(--font-body)",
          borderRadius: "4px 0 0 4px", zIndex: 15,
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        }}>
          {card.ribbon}
        </div>

        {/* IMAGE */}
        <div style={{ position: "relative", height: "var(--carousel-img-height)", overflow: "hidden" }}>
          <motion.img
            src={card.image}
            alt={card.label}
            animate={{ scale: (hovered && isActive) ? 1.12 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to bottom,rgba(0,0,0,0.1) 0%,${card.gradientTo}EE 100%)`,
          }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg,transparent,${card.accentColor},#F0D060,${card.accentColor},transparent)`,
          }} />

          {/* Tier chip */}
          <motion.div
            animate={{ y: (hovered && isActive) ? -4 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute", bottom: 16, left: 16,
              background: "rgba(0,0,0,0.75)", backdropFilter: "blur(12px)",
              border: `1px solid ${card.borderColor}`, borderRadius: 999,
              padding: "4px 14px", display: "flex", alignItems: "center", gap: 6,
            }}
          >
            <span style={{ fontSize: "0.85rem" }}>{card.emoji}</span>
            <span style={{
              fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.18em",
              textTransform: "uppercase", color: card.accentColor, fontFamily: "var(--font-body)",
            }}>{card.tier}</span>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "clamp(16px, 2.5vw, 24px) clamp(20px, 3.5vw, 28px)", paddingBottom: "clamp(20px, 3vw, 28px)" }}>
          <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${card.accentColor}88,transparent)`, marginBottom: 16 }} />

          {/* Title */}
          <motion.div animate={{ y: (hovered && isActive) ? -4 : 0 }} transition={{ duration: 0.4 }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: card.accentColor, fontFamily: "var(--font-body)" }}>
              {card.subtitle}
            </span>
            <h3 style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)", fontWeight: 800, fontFamily: "var(--font-display)", color: "#F5F0E8", lineHeight: 1.1, letterSpacing: "0.02em", marginTop: 4 }}>
              {card.label}
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            animate={{ opacity: (hovered && isActive) ? 1 : 0.65, y: (hovered && isActive) ? 0 : 4 }}
            transition={{ duration: 0.4, delay: (hovered && isActive) ? 0.05 : 0 }}
            style={{ marginTop: 10, fontSize: "clamp(0.78rem, 2.5vw, 0.88rem)", lineHeight: 1.6, color: "rgba(245,240,232,0.8)", fontFamily: "var(--font-body)" }}
          >
            {card.desc}
          </motion.p>

          {/* Dish tags */}
          <motion.div
            animate={{ opacity: (hovered && isActive) ? 1 : 0.5 }}
            transition={{ duration: 0.45 }}
            style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 5 }}
          >
            {card.dishes.map((dish, i) => (
              <span key={i} style={{
                fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em",
                padding: "2px 8px", borderRadius: 999,
                background: `${card.accentColor}18`, border: `1px solid ${card.accentColor}40`,
                color: card.accentLight, fontFamily: "var(--font-body)",
              }}>{dish}</span>
            ))}
          </motion.div>

          <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(212,175,55,0.25),transparent)", margin: "16px 0" }} />

          {/* Button area */}
          <div style={{ position: "relative", height: 48 }}>
            <motion.div
              animate={{ opacity: (hovered && isActive) ? 0 : 1, y: (hovered && isActive) ? 6 : 0 }}
              transition={{ duration: 0.35 }}
              style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.5)", fontFamily: "var(--font-body)", letterSpacing: "0.05em" }}>
                {isActive ? "Hover to explore →" : "Click to select"}
              </span>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", border: `1px solid ${card.borderColor}`,
                display: "flex", alignItems: "center", justifyContent: "center", color: card.accentColor, fontSize: "1rem",
              }}>{card.emoji}</div>
            </motion.div>

            {/* Gold shine button on hover */}
            <motion.button
              animate={{ opacity: (hovered && isActive) ? 1 : 0, y: (hovered && isActive) ? 0 : 8 }}
              transition={{ duration: 0.4, delay: (hovered && isActive) ? 0.1 : 0 }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(card.path);
              }}
              style={{
                position: "absolute", inset: 0, width: "100%", border: "none",
                borderRadius: 12, cursor: "pointer", fontFamily: "var(--font-body)",
                fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#0d0d0d",
                background: `linear-gradient(110deg,${card.accentColor} 20%,#F0D060 45%,#D4AF37 55%,#F0D060 65%,${card.accentColor} 80%)`,
                backgroundSize: "300% auto",
                animation: (hovered && isActive) ? "goldShine 1.8s linear infinite" : "none",
                overflow: "hidden",
              }}
            >
              View Menu →
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────
   MAIN EXPORT
   ───────────────────────────────────── */
export default function MenuCards() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(1); // Start with Elite Menu (middle)

  // Gesture swiping states
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const dragStartX = useRef(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MENU_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + MENU_DATA.length) % MENU_DATA.length);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    dragStartX.current = null;
  };

  // Snappy auto rotation interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3200);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const [particles] = useState(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: `${(i * 4.6 + 3) % 100}%`,
      top:  `${(i * 7.3 + 5) % 100}%`,
      size: (i % 3) + 1.5,
      delay: (i * 0.37) % 5,
      duration: (i % 4) + 6,
    }))
  );

  return (
    <section
      id="menu-cards-section"
      style={{
        position: "relative", overflow: "hidden",
        padding: "100px 0 120px",
        background: "linear-gradient(180deg,#070707 0%,#0c0e0c 30%,#080808 60%,#0a0600 100%)",
      }}
    >
      {/* Animated golden particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute", left: p.left, top: p.top,
            width: p.size, height: p.size, borderRadius: "50%",
            background: "radial-gradient(circle,#F0D060,#D4AF37)",
            boxShadow: "0 0 6px rgba(212,175,55,0.7)", pointerEvents: "none",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Floating banana leaves */}
      <FloatingLeaf style={{ top: "8%",  left: "-2%",  transform: "rotate(-20deg)" }} size={100} opacity={0.06} />
      <FloatingLeaf style={{ top: "25%", right: "-3%", transform: "rotate(30deg)"  }} size={130} opacity={0.05} />
      <FloatingLeaf style={{ bottom: "15%", left: "3%", transform: "rotate(15deg)" }} size={90}  opacity={0.07} />
      <FloatingLeaf style={{ bottom: "5%", right: "5%", transform: "rotate(-25deg)"}} size={110} opacity={0.05} />
      <FloatingLeaf style={{ top: "55%", left: "50%",  transform: "rotate(10deg)"  }} size={70}  opacity={0.04} />

      {/* Kolam corners */}
      <KolamCorner style={{ top: 20,    left: 20  }} />
      <KolamCorner style={{ top: 20,    right: 20, transform: "scaleX(-1)" }} />
      <KolamCorner style={{ bottom: 20, left: 20,  transform: "scaleY(-1)" }} />
      <KolamCorner style={{ bottom: 20, right: 20, transform: "scale(-1)"  }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)", width: "80%", height: "60%",
        background: "radial-gradient(ellipse at center,rgba(212,175,55,0.04) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Top gold border */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg,transparent 0%,#B88E2F 20%,#F0D060 50%,#B88E2F 80%,transparent 100%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 5 }}>

        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <motion.div
            initial={{ scaleX: 0 }} animate={isTitleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(212,175,55,0.6),transparent)", width: "50%", margin: "0 auto 28px" }}
          />
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={isTitleInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <span style={{
              display: "inline-block", padding: "6px 22px", borderRadius: 999,
              background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.35)",
              color: "#D4AF37", fontSize: "0.7rem", fontWeight: 700,
              letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: 20,
            }}>
              ✦ Our Catering Packages ✦
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.4 }}
            style={{
              fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 900,
              fontFamily: "var(--font-display)",
              background: "linear-gradient(135deg,#B88E2F 0%,#D4AF37 30%,#F0D060 50%,#D4AF37 70%,#B88E2F 100%)",
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: 1.1, letterSpacing: "0.02em", marginBottom: 16,
            }}
          >
            Choose Your Perfect Package
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{ fontSize: "clamp(0.95rem,2vw,1.15rem)", color: "rgba(245,240,232,0.6)", fontFamily: "var(--font-body)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}
          >
            From our traditional leaf-based feast to a grand royal banquet — every package crafted with love, heritage & authentic South Indian flavours.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }} animate={isTitleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.6 }}
            style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(212,175,55,0.6),transparent)", width: "40%", margin: "28px auto 0" }}
          />
        </motion.div>

        {/* 3D coverflow carousel container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: "relative",
            width: "100%",
            height: "calc(var(--carousel-card-height) + 60px)",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {MENU_DATA.map((card, i) => (
            <MenuCard
              key={card.id}
              card={card}
              index={i}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </motion.div>

        {/* Carousel Controls */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, marginTop: 32, position: "relative", zIndex: 10 }}>
          <button
            onClick={handlePrev}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1.5px solid rgba(212,175,55,0.4)",
              background: "rgba(0,0,0,0.6)", color: "#D4AF37",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.3s ease",
              fontSize: "1.1rem",
            }}
            className="carousel-nav-btn"
          >
            ←
          </button>
          
          <div style={{ display: "flex", gap: 10 }}>
            {MENU_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: i === activeIndex ? 24 : 10,
                  height: 10,
                  borderRadius: 999,
                  border: "none",
                  background: i === activeIndex ? "#D4AF37" : "rgba(212,175,55,0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1.5px solid rgba(212,175,55,0.4)",
              background: "rgba(0,0,0,0.6)", color: "#D4AF37",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.3s ease",
              fontSize: "1.1rem",
            }}
            className="carousel-nav-btn"
          >
            →
          </button>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: 60 }}
        >
          <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(212,175,55,0.4),transparent)", marginBottom: 32, width: "60%", marginLeft: "auto", marginRight: "auto" }} />
          <p style={{ color: "rgba(245,240,232,0.45)", fontFamily: "var(--font-body)", fontSize: "0.9rem", letterSpacing: "0.08em", marginBottom: 24 }}>
            ✦ &nbsp; Not sure which to pick? We will guide you! &nbsp; ✦
          </p>
          <motion.button
            onClick={() => navigate("/booking")}
            whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212,175,55,0.4)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-block", padding: "14px 40px", borderRadius: 999,
              border: "1.5px solid rgba(212,175,55,0.5)", color: "#D4AF37",
              background: "rgba(212,175,55,0.06)", fontFamily: "var(--font-body)",
              fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.15em",
              textTransform: "uppercase", cursor: "pointer",
            }}
          >
            Book a Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom gold border */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg,transparent 0%,#B88E2F 20%,#F0D060 50%,#B88E2F 80%,transparent 100%)",
      }} />

      <style>{`
        :root {
          --carousel-card-width: 350px;
          --carousel-card-height: 590px;
          --carousel-img-height: 230px;
          --carousel-offset-x: 290px;
          --carousel-offset-z: -180px;
        }
        @media (max-width: 1024px) {
          :root {
            --carousel-card-width: 310px;
            --carousel-card-height: 560px;
            --carousel-img-height: 200px;
            --carousel-offset-x: 220px;
            --carousel-offset-z: -150px;
          }
        }
        @media (max-width: 768px) {
          :root {
            --carousel-card-width: 290px;
            --carousel-card-height: 545px;
            --carousel-img-height: 180px;
            --carousel-offset-x: 130px;
            --carousel-offset-z: -120px;
          }
        }
        @media (max-width: 480px) {
          :root {
            --carousel-card-width: 260px;
            --carousel-card-height: 520px;
            --carousel-img-height: 160px;
            --carousel-offset-x: 95px;
            --carousel-offset-z: -100px;
          }
        }
        @keyframes goldShine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .carousel-nav-btn:hover {
          background: rgba(212,175,55,0.15) !important;
          border-color: #D4AF37 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
