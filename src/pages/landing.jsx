import logo1 from "../assets/logo1.png";
import heroDecoration from "../assets/hero_decoration.png";
import foodPlatter from "../assets/food-platter.png";
import bananaLeafSpread from "../assets/banana_leaf_spread.png";
import eliteBuffet from "../assets/elite_buffet.png";
import premiumFeast from "../assets/premium_feast.png";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

import MarigoldShower from "../components/MarigoldShower";
import MenuCards from "../components/MenuCards";
import MarqueeStrip from "../components/MarqueeStrip";
import StatCounter from "../components/StatCounter";

/* ─── Kolam SVG ─────────────────────────────────────── */
const KolamPattern = () => (
  <svg className="w-48 h-48 sm:w-64 sm:h-64 opacity-15 rotate-slow text-[#D4AF37] pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <path d="M 50 5 Q 75 25, 95 50 Q 75 75, 50 95 Q 25 75, 5 50 Q 25 25, 50 5 Z" />
    <path d="M 50 15 Q 70 30, 85 50 Q 70 70, 50 85 Q 30 70, 15 50 Q 30 30, 50 15 Z" strokeDasharray="3,3" />
    <path d="M 50 50 C 50 20, 20 50, 50 50 Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M 50 50 C 50 80, 80 50, 50 50 Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M 50 50 C 20 50, 50 80, 50 50 Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M 50 50 C 80 50, 50 20, 50 50 Z" fill="currentColor" fillOpacity="0.05" />
    <circle cx="50" cy="20" r="1.5" fill="currentColor" />
    <circle cx="50" cy="80" r="1.5" fill="currentColor" />
    <circle cx="20" cy="50" r="1.5" fill="currentColor" />
    <circle cx="80" cy="50" r="1.5" fill="currentColor" />
  </svg>
);

/* ─── Word-by-word reveal ───────────────────────────── */
const WordReveal = ({ text, delay = 0, className = "", style = {} }) => {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline" }} className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
          <motion.span
            display="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.65, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "inline-block", ...style }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/* ─── Magnetic button ───────────────────────────────── */
const MagneticButton = ({ children, onClick, className = "", style = {}, ...props }) => {
  const ref = useRef(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setXY({ x: (e.clientX - cx) * 0.25, y: (e.clientY - cy) * 0.25 });
  };
  const handleLeave = () => setXY({ x: 0, y: 0 });
  return (
    <motion.button
      ref={ref}
      animate={{ x: xy.x, y: xy.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.button>
  );
};

/* ─── Clip-path reveal card ─────────────────────────── */
const ClipRevealCard = ({ children, delay = 0, style = {}, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-45px" }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    style={style}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Parallax leaf ─────────────────────────────────── */
const ParallaxLeaf = ({ scrollY, factor, style, size = 80, opacity = 0.07 }) => {
  const y = useTransform(scrollY, [0, 1000], [0, factor * 1000]);
  return (
    <motion.svg
      viewBox="0 0 120 200" fill="none"
      style={{ position: "absolute", width: size, height: size * 1.6, opacity, pointerEvents: "none", y, ...style }}
    >
      <path d="M60 195 C60 195 5 140 5 80 C5 30 30 5 60 5 C90 5 115 30 115 80 C115 140 60 195 60 195Z" fill="#2D6A34" />
      <path d="M60 5 L60 195" stroke="#4A8C52" strokeWidth="2" opacity="0.5" />
      <path d="M60 50 Q35 70 15 90" stroke="#4A8C52" strokeWidth="1.2" opacity="0.4" />
      <path d="M60 50 Q85 70 105 90" stroke="#4A8C52" strokeWidth="1.2" opacity="0.4" />
      <path d="M60 90 Q30 110 10 130" stroke="#4A8C52" strokeWidth="1.2" opacity="0.4" />
      <path d="M60 90 Q90 110 110 130" stroke="#4A8C52" strokeWidth="1.2" opacity="0.4" />
    </motion.svg>
  );
};

/* ─── Shimmer gold divider ──────────────────────────── */
const GoldDivider = ({ width = "60%" }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    style={{
      height: 2, width, margin: "0 auto",
      background: "linear-gradient(90deg, transparent, #B88E2F, #F0D060, #D4AF37, #F0D060, #B88E2F, transparent)",
      backgroundSize: "200% auto",
      animation: "shimmerTravel 3s linear infinite",
    }}
  />
);

const menuCards = [
  { label: "Normal Menu", path: "/normal-menu", emoji: "🍃", desc: "Traditional Veg Leaf Service", color: "#234927", glow: "rgba(35,73,39,0.35)", badge: "tier-badge-normal", image: bananaLeafSpread, subtitle: "Authentic Leaf Feast" },
  { label: "Elite Menu", path: "/elite-menu", emoji: "⭐", desc: "Enhanced Premium Package", color: "#B88E2F", glow: "rgba(184,142,47,0.35)", badge: "tier-badge-elite", image: eliteBuffet, subtitle: "Royal Buffet Selection" },
  { label: "Premium Menu", path: "/premium-menu", emoji: "👑", desc: "Luxury Reception Package", color: "#7a4d30", glow: "rgba(122,77,48,0.35)", badge: "tier-badge-premium", image: premiumFeast, subtitle: "Luxury Celebration Feast" },
  { label: "Customize Menu", path: "/custom-menu", emoji: "✨", desc: "Build Your Own Package", color: "#E3834F", glow: "rgba(227,131,79,0.35)", badge: "tier-badge-elite", image: heroDecoration, subtitle: "Tailored Gastronomy" },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } } };

function Landing() {
  const [showMenus, setShowMenus] = useState(false);
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  return (
    <div className="relative overflow-x-hidden min-h-screen" style={{ cursor: "none" }}>


      {/* Steam wisps */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-6 pointer-events-none z-0" aria-hidden="true">
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} className="steam-rise w-2 rounded-full bg-white/30"
            style={{ height: 40, animationDelay: `${i * 0.45}s`, animationDuration: `${2 + i * 0.3}s` }} />
        ))}
      </div>

      {/* ── HERO ─────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative pt-12 sm:pt-28 pb-16 flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FFD1A9 0%, #FDF3E7 30%, #F5ECDB 65%, #FFD1A9 100%)" }}
      >
        <MarigoldShower />

        {/* Parallax leaves */}
        <ParallaxLeaf scrollY={scrollY} factor={-0.18} style={{ top: "10%", left: "-2%", transform: "rotate(-25deg)" }} size={110} opacity={0.08} />
        <ParallaxLeaf scrollY={scrollY} factor={-0.12} style={{ top: "40%", right: "-3%", transform: "rotate(20deg)" }} size={90} opacity={0.06} />
        <ParallaxLeaf scrollY={scrollY} factor={-0.22} style={{ bottom: "5%", left: "8%", transform: "rotate(10deg)" }} size={70} opacity={0.07} />

        {/* Kolams */}
        <div className="absolute top-20 right-10 pointer-events-none select-none"><KolamPattern /></div>
        <div className="absolute bottom-10 left-10 pointer-events-none select-none opacity-50"><KolamPattern /></div>

        <div className="w-full mx-auto px-4 sm:px-16 lg:px-28 xl:px-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-8">

            {/* LEFT */}
            <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col justify-center w-full min-w-0">

              {/* Brand */}
              <motion.div variants={fadeUp} className="mb-4">
                <span className="copper-gleam text-3xl lg:text-4xl font-bold font-cinzel tracking-widest block text-left" style={{ letterSpacing: "0.15em" }}>
                  JIP CATERERS
                </span>
              </motion.div>

              {/* Badge */}
              <motion.div variants={fadeUp}>
                <motion.span
                  className="badge-traditional shadow-sm border border-orange-200 inline-block"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  🌿 South Indian Tradition Since Inception
                </motion.span>
              </motion.div>

              {/* Word-reveal Headline */}
              <motion.h1
                className="mt-6 font-cinzel leading-none tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#234927] to-[#122B15]"
                style={{ fontSize: "clamp(1.9rem, 5.5vw, 4.8rem)", fontWeight: 900, lineHeight: 1.1 }}
              >
                <WordReveal text="Authentic" delay={0.4} />
              </motion.h1>

              <div
                className="font-cinzel text-gold-shimmer tracking-wider"
                style={{ fontSize: "clamp(1.2rem, 4.2vw, 3.5rem)", fontWeight: 800, lineHeight: 1.2 }}
              >
                <WordReveal text="South Indian Catering" delay={0.55} />
              </div>

              {/* Animated gold underline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  height: 2, width: 160, marginTop: 16, transformOrigin: "left",
                  background: "linear-gradient(90deg, #D4AF37, #F0D060, transparent)",
                }}
              />

              <motion.p
                variants={fadeUp}
                className="mt-5 font-medium tracking-wide"
                style={{ color: "#234927", fontFamily: "var(--font-serif)", fontSize: "clamp(0.95rem, 2vw, 1.45rem)", lineHeight: 1.5 }}
              >
                Tradition in Every Leaf Serving Experience. Crafting memorable grand feasts with authentic spices, hygiene, and divine hospitality.
              </motion.p>

              {/* Tags */}
              <motion.p
                variants={fadeUp}
                className="mt-3 text-xs sm:text-sm font-semibold tracking-widest uppercase font-marcellus flex flex-wrap gap-x-2 gap-y-1"
                style={{ color: "#7a5c40" }}
              >
                {["Weddings ♦", "Receptions ♦", "Engagements ♦", "Celebrations"].map((t, i) => (
                  <motion.span key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + i * 0.1, duration: 0.4 }}
                  >{t}</motion.span>
                ))}
              </motion.p>

              {/* Mobile platter */}
              <motion.div variants={fadeUp} className="block lg:hidden w-full flex justify-center items-center my-6 pointer-events-none">
                <img src={foodPlatter} alt="South Indian Catering" className="w-full max-w-[280px] mx-auto object-contain drop-shadow-2xl" />
              </motion.div>

              {/* CTA Buttons — Magnetic */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-8 z-20 w-full">
                <MagneticButton
                  whileHover={{ scale: 1.06, boxShadow: "0 12px 35px rgba(35,73,39,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("menu-cards-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold font-marcellus text-white shadow-lg text-sm tracking-wider text-center saffron-pulse"
                  style={{ background: "linear-gradient(135deg, #234927, #3a6e3f)", cursor: "none", border: "none" }}
                >
                  🍽 View Menu
                </MagneticButton>

                <MagneticButton
                  whileHover={{ scale: 1.06, boxShadow: "0 12px 35px rgba(212,175,55,0.55)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold font-marcellus text-white shadow-lg text-sm tracking-wider text-center"
                  style={{ background: "linear-gradient(135deg, #B88E2F, #D4AF37)", cursor: "none", border: "none" }}
                >
                  📋 Book Now
                </MagneticButton>

                <MagneticButton
                  whileHover={{ scale: 1.06, boxShadow: "0 12px 35px rgba(18,43,21,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/custom-menu")}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold font-marcellus text-white shadow-lg text-sm tracking-wider text-center"
                  style={{ background: "linear-gradient(135deg, #122B15, #1f4525)", cursor: "none", border: "none" }}
                >
                  ✨ Customize
                </MagneticButton>
              </motion.div>

              {/* Contact strip */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-4 z-20 w-full">
                <a href="tel:9092881813"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-sm w-full sm:w-auto"
                  style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(74,46,27,0.15)", color: "#4A2E1B", textDecoration: "none", fontFamily: "var(--font-body)" }}
                >
                  📞 9092881813
                </a>
                <a href="https://wa.me/919092881813" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whatsapp-btn shadow-md w-full sm:w-auto"
                  style={{ background: "linear-gradient(135deg, #25D366, #20ba5a)", textDecoration: "none", fontFamily: "var(--font-body)" }}
                >
                  💬 WhatsApp Enquiry
                </a>
              </motion.div>

              {/* Dropdown menus */}
              <AnimatePresence>
                {showMenus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: 20, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl overflow-hidden z-20"
                  >
                    {menuCards.map((card, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onClick={() => navigate(card.path)}
                        whileHover={{ y: -4, scale: 1.03, boxShadow: `0 12px 30px ${card.glow}` }}
                        className="cursor-pointer p-4 rounded-2xl flex items-center gap-4 border transition-all"
                        style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", borderColor: card.color, borderWidth: "1.5px" }}
                      >
                        <img src={card.image} alt={card.label} className="w-14 h-14 rounded-full object-cover border-2 shadow-sm" style={{ borderColor: card.color }} />
                        <div>
                          <p className="font-bold font-marcellus text-sm" style={{ color: card.color }}>{card.label}</p>
                          <p className="text-xs" style={{ color: "#7a5c40", fontFamily: "var(--font-body)" }}>{card.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* RIGHT — Platter with tilt on mouse */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative hidden lg:flex justify-center items-center pointer-events-none"
            >
              <div className="absolute w-80 h-80 rounded-full saffron-pulse pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,160,50,0.12) 0%, transparent 70%)" }} />
              {/* Orbit ring */}
              <motion.div
                style={{
                  position: "absolute",
                  width: 460, height: 460,
                  borderRadius: "50%",
                  border: "1px dashed rgba(212,175,55,0.2)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, ease: "linear", repeat: Infinity }}
              />
              {/* Orbit dot */}
              <motion.div
                style={{ position: "absolute", width: 460, height: 460, borderRadius: "50%", pointerEvents: "none" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              >
                <div style={{
                  position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)",
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#D4AF37",
                  boxShadow: "0 0 12px rgba(212,175,55,0.8)",
                }} />
              </motion.div>
              <motion.img
                src={foodPlatter}
                alt="South Indian Catering Food Platter"
                className="thali-spin w-[500px] xl:w-[600px] object-contain select-none drop-shadow-[0_20px_40px_rgba(74,46,27,0.35)]"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none" aria-hidden="true">
                {[0, 1, 2].map(i => (
                  <div key={i} className="steam-rise w-1.5 rounded-full bg-white/40"
                    style={{ height: 32, animationDelay: `${i * 0.6}s` }} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STAT COUNTERS ──────────────────────────────── */}
      <StatCounter />

      {/* ── MARQUEE STRIP ──────────────────────────────── */}
      <MarqueeStrip />

      {/* ── MENU CARDS ─────────────────────────────────── */}
      <MenuCards />

      {/* ── WHY JIP ────────────────────────────────────── */}
      <section className="py-10 sm:py-20 px-4 sm:px-16 lg:px-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A3A21, #0E2211)" }}>
        <MarigoldShower />

        {/* Extra parallax leaves for this section */}
        <div className="absolute top-8 right-8 opacity-10 pointer-events-none select-none" style={{ fontSize: 80 }}>🍃</div>
        <div className="absolute bottom-8 left-8 opacity-10 pointer-events-none select-none" style={{ fontSize: 60 }}>🌿</div>

        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest uppercase mb-4 block font-marcellus"
            style={{ color: "#D4AF37" }}
          >
            Our Authentic Credentials
          </motion.span>

          {/* Word-reveal heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-cinzel text-gold-shimmer leading-tight">
            <WordReveal text="Tradition & Purity in Every Leaf" delay={0.1} />
          </h2>

          <GoldDivider width="40%" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base max-w-xl mx-auto mb-10 text-stone-300 font-serif leading-relaxed mt-8"
            style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}
          >
            Our master cooks bring decades of regional culinary heritage. We serve meals with utmost hygiene, authentic traditional serving materials, and unmatched hospitality.
          </motion.p>

          {/* Clip-path revealed feature cards */}
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {[
              { icon: "🍃", title: "Banana Leaf Service", desc: "Authentic serving style utilizing fresh, sanitised banana leaves.", animClass: "leaf-unfurl" },
              { icon: "👑", title: "Expert Heritage Chefs", desc: "Trained traditional specialists for fine regional preparations.", animClass: "marigold-bloom" },
              { icon: "✨", title: "100% Pure Vegetarian", desc: "Sourced from pure farms, cooked in complete hygiene.", animClass: "spice-burst" },
            ].map((item, i) => (
              <ClipRevealCard key={i} delay={i * 0.18}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 60px rgba(212,175,55,0.2), 0 0 30px rgba(212,175,55,0.1)",
                    borderColor: "rgba(212,175,55,0.5)",
                  }}
                  transition={{ duration: 0.35 }}
                  className="p-8 rounded-3xl border h-full bg-white/5 backdrop-blur-sm"
                  style={{ borderColor: "rgba(212,175,55,0.25)", cursor: "default" }}
                >
                  <motion.div
                    className={`text-4xl mb-4 text-[#D4AF37] ${item.animClass} diya-flicker`}
                    style={{ animationDelay: `${i * 0.3}s` }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-3 font-marcellus tracking-wide" style={{ color: "#D4AF37" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}>{item.desc}</p>
                </motion.div>
              </ClipRevealCard>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <MagneticButton
              onClick={() => navigate("/why-jip")}
              whileHover={{ scale: 1.06, borderColor: "#F0D060", color: "#F0D060", boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full font-semibold font-marcellus text-sm border-2 transition-all"
              style={{ borderColor: "#D4AF37", color: "#D4AF37", background: "transparent", cursor: "none" }}
            >
              Learn More About JIP →
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <FAQ />

      {/* ── FOOTER ─────────────────────────────────────── */}
      <Footer />

      {/* Shimmer keyframe for dividers */}
      <style>{`
        @keyframes shimmerTravel {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}

export default Landing;
