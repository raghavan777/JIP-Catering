import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import MarigoldShower from "../components/MarigoldShower";
import eliteBuffet from "../assets/elite_buffet.png";
import MarqueeStrip from "../components/MarqueeStrip";

const menuSections = [
  {
    title: "Welcome Drinks",
    emoji: "🥂",
    color: "#D4AF37",
    bg: "rgba(212,175,55,0.06)",
    items: [
      { name: "Badam Milk", emoji: "🥛" },
      { name: "Fresh Fruit Juice", emoji: "🍹" },
      { name: "Rose Milk", emoji: "🌹" },
    ],
  },
  {
    title: "Setup Items",
    emoji: "🍌",
    color: "#234927",
    bg: "rgba(35,73,39,0.06)",
    items: [
      { name: "Banana Leaf", emoji: "🍃" },
      { name: "Water Bottle", emoji: "💧" },
      { name: "Salt Powder", emoji: "🧂" },
    ],
  },
  {
    title: "Special Mains & Tiffins",
    emoji: "🍽",
    color: "#B45309",
    bg: "rgba(180,83,9,0.05)",
    items: [
      { name: "Gobi Fry", emoji: "🥦" },
      { name: "Pulka Chapathi", emoji: "🫓" },
      { name: "Veg Mini Oothappam", emoji: "🥞" },
      { name: "Idiyappam", emoji: "🍝" },
      { name: "Paneer Bhurji Masala", emoji: "🧀" },
      { name: "Veg Stew", emoji: "🍲" },
      { name: "Mushroom Biryani", emoji: "🍄" },
    ],
  },
  {
    title: "Banana Leaf Accompaniments",
    emoji: "🌿",
    color: "#B88E2F",
    bg: "rgba(184,142,47,0.06)",
    items: [
      { name: "Boonthi Raitha", emoji: "🥣" },
      { name: "Ginger Thogayal", emoji: "🫚" },
      { name: "Pepper Rasam", emoji: "☕" },
      { name: "Fresh Curd", emoji: "🫙" },
    ],
  },
  {
    title: "Main Course Items",
    emoji: "🍛",
    color: "#B91C1C",
    bg: "rgba(185,28,28,0.04)",
    items: [
      { name: "White Rice", emoji: "🍚" },
      { name: "Wedding Sambar", emoji: "🍜" },
      { name: "Small Onion Vatha Kuzhambu", emoji: "🍲" },
      { name: "Poriyal 1", emoji: "🥦" },
      { name: "Poriyal 2", emoji: "🥕" },
      { name: "Mix Veg Kootu", emoji: "🫘" },
    ],
  },
  {
    title: "Sweets & Desserts",
    emoji: "🍮",
    color: "#BE185D",
    bg: "rgba(190,24,93,0.04)",
    items: [
      { name: "Kala Jamun", emoji: "🟤" },
      { name: "Jowar Rabdi", emoji: "🍵" },
      { name: "Tender Coconut Payasam", emoji: "🥥" },
    ],
  },
  {
    title: "Additional Services",
    emoji: "⭐",
    color: "#EA580C",
    bg: "rgba(234,88,12,0.05)",
    items: [
      { name: "Appalam / Fryums", emoji: "🫓" },
      { name: "Potato Chips", emoji: "🥔" },
      { name: "Ice Cream Counter", emoji: "🍦" },
      { name: "Pop Corn Counter", emoji: "🍿" },
      { name: "Mango Patchadi", emoji: "🥭" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const KolamPattern = () => (
  <svg className="w-48 h-48 opacity-10 rotate-slow text-[#D4AF37] pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <path d="M 50 5 Q 75 25, 95 50 Q 75 75, 50 95 Q 25 75, 5 50 Q 25 25, 50 5 Z" />
    <circle cx="50" cy="20" r="1.5" fill="currentColor" />
    <circle cx="50" cy="80" r="1.5" fill="currentColor" />
  </svg>
);

function EliteMenu() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Swaying Garland */}


      {/* ── HEADER ───────────────────────────────────── */}
      <section
        className="pt-10 sm:pt-32 pb-16 px-4 sm:px-16 lg:px-28 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #FFD1A9 0%, #FAF1DF 50%, #E8DEC9 100%)" }}
      >
        <MarigoldShower />

        <div className="absolute top-12 right-20 pointer-events-none select-none">
          <KolamPattern />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10 text-left">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tier-badge tier-badge-elite mb-5 inline-flex leaf-unfurl">
              ⭐ Elite Menu
            </span>
            <h1
              className="mt-4 text-4xl md:text-5xl font-bold font-cinzel leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#B88E2F] to-[#4A2E1B] festival-entry"
            >
              Premium Buffet
              <span className="block text-gold-shimmer font-cinzel">
                Elite Package
              </span>
            </h1>
            <div className="mt-4 h-0.5 w-32 traditional-border border-b-2" />
            <p className="text-lg mt-6 font-serif leading-relaxed" style={{ color: "#7a5c40", fontFamily: "var(--font-serif)" }}>
              An elegant combination of traditional South Indian preparations and modern buffet delicacies. Designed with a superior selection of starters, welcome drinks, and luxury desserts.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center"
          >
            <img
              src={eliteBuffet}
              alt="Elite Buffet Setup"
              className="w-full max-w-md rounded-3xl object-cover border-4 shadow-xl border-[#B88E2F]"
            />
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────── */}
      <MarqueeStrip />

      {/* ── MENU GRID ─────────────────────────────────── */}
      <section
        className="py-10 sm:py-20 px-4 sm:px-16 lg:px-28 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #E8DEC9 0%, #FAF1DF 50%, #FFD1A9 100%)" }}
      >
        <div className="absolute top-1/4 left-10 pointer-events-none opacity-10">
          <KolamPattern />
        </div>
        <div className="absolute bottom-20 right-10 pointer-events-none opacity-10">
          <KolamPattern />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10"
        >
          {menuSections.map((section, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, boxShadow: `0 20px 50px rgba(184,142,47,0.2)` }}
              className="rounded-3xl p-7 border-2 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-md"
              style={{
                borderColor: "#D4AF37",
                borderStyle: "double",
                borderWidth: "4px",
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dashed border-gold-dark/30">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm"
                  style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.3))", border: "1px solid rgba(212,175,55,0.5)" }}>
                  {section.emoji}
                </div>
                <h2 className="text-xl font-bold font-marcellus tracking-wide text-gold-dark">
                  {section.title}
                </h2>
              </div>

              {/* Items */}
              <div className="space-y-3.5">
                {section.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 py-1 border-b border-stone-100 last:border-none"
                  >
                    <span className="text-lg flex-shrink-0">{item.emoji}</span>
                    <span className="text-sm font-semibold" style={{ color: "#4A2E1B", fontFamily: "var(--font-body)" }}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────── */}
      <section className="py-10 sm:py-20 px-4 sm:px-16 lg:px-28 relative overflow-hidden" style={{ background: "#FAF1DF" }}>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 border-4 brass-frame rounded-3xl"
          >
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold font-marcellus mb-3" style={{ color: "#B88E2F" }}>
              Ready to Book the Elite Menu?
            </h3>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "#7a5c40", fontFamily: "var(--font-body)" }}>
              Treat your guests to a premium, delicious traditional buffet experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                onClick={() => navigate("/booking")}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(184,142,47,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full font-semibold font-marcellus text-white shadow-lg text-sm tracking-wider border-none"
                style={{ background: "linear-gradient(135deg, #B88E2F, #D4AF37)", cursor: "pointer" }}
              >
                📋 Book Now
              </motion.button>
              <motion.button
                onClick={() => navigate("/custom-menu")}
                whileHover={{ scale: 1.05, borderColor: "#B88E2F", color: "#B88E2F", background: "#B88E2F10" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full font-semibold font-marcellus border-2 transition-all text-sm tracking-wider"
                style={{ borderColor: "#B88E2F", color: "#B88E2F", background: "transparent", cursor: "pointer" }}
              >
                ✨ Customize Menu
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EliteMenu;