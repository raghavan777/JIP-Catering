import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import MarigoldShower from "../components/MarigoldShower";
import bananaLeafSpread from "../assets/banana_leaf_spread.png";
import MarqueeStrip from "../components/MarqueeStrip";
import FAQ from "../components/FAQ";

const menuSections = [
  {
    title: "Setup Items",
    emoji: "🍃",
    color: "#234927",
    bg: "rgba(35,73,39,0.06)",
    items: [
      { name: "Water Bottle", emoji: "💧" },
      { name: "Salt Powder", emoji: "🧂" },
      { name: "Tomato Sauce", emoji: "🍅" },
    ],
  },
  {
    title: "Accompaniments & Drinks",
    emoji: "🥛",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.04)",
    items: [
      { name: "Boonthi Raitha", emoji: "🥣" },
      { name: "Pepper Rasam", emoji: "🍲" },
      { name: "Butter Milk", emoji: "🥛" },
    ],
  },
  {
    title: "Starters & Tiffin",
    emoji: "🍽",
    color: "#B45309",
    bg: "rgba(180,83,9,0.05)",
    items: [
      { name: "Dry Jamun", emoji: "🍮" },
      { name: "Dry Sweet", emoji: "🍬" },
      { name: "Veg Cutlet", emoji: "🥙" },
      { name: "Pulka Chapathi", emoji: "🫓" },
      { name: "Paneer Bhurji Masala", emoji: "🧀" },
      { name: "Veg Biryani", emoji: "🍚" },
    ],
  },
  {
    title: "Main Course Curries",
    emoji: "🍛",
    color: "#B91C1C",
    bg: "rgba(185,28,28,0.04)",
    items: [
      { name: "White Rice", emoji: "🍚" },
      { name: "Special Wedding Sambar", emoji: "🍜" },
      { name: "Small Onion Vatha Kuzhambu", emoji: "🍲" },
      { name: "Poriyal – 1", emoji: "🥦" },
      { name: "Poriyal – 2", emoji: "🥕" },
      { name: "Kootu", emoji: "🫘" },
    ],
  },
  {
    title: "Desserts",
    emoji: "🍨",
    color: "#BE185D",
    bg: "rgba(190,24,93,0.04)",
    items: [
      { name: "Badam Payasam", emoji: "🍵" },
      { name: "Ice Cream", emoji: "🍦" },
    ],
  },
  {
    title: "Crunchy Sides",
    emoji: "🍿",
    color: "#EA580C",
    bg: "rgba(234,88,12,0.05)",
    items: [
      { name: "Appalam / Fryums", emoji: "🫓" },
      { name: "Potato Chips", emoji: "🥔" },
      { name: "Pop Corn", emoji: "🍿" },
    ],
  },
  {
    title: "Final Touches",
    emoji: "🌿",
    color: "#15803D",
    bg: "rgba(21,128,61,0.06)",
    items: [
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

function NormalMenu() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Swaying Garland decoration */}


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
          {/* Left - Text details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tier-badge tier-badge-normal mb-5 inline-flex leaf-unfurl">
              🍃 Normal Menu
            </span>
            <h1
              className="mt-4 text-4xl md:text-5xl font-bold font-cinzel leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#234927] to-[#122B15] festival-entry"
            >
              Wedding Reception
              <span className="block text-gold-shimmer font-cinzel">
                Veg Leaf Service
              </span>
            </h1>
            <div className="mt-4 h-0.5 w-32 traditional-border border-b-2" />
            <p className="text-lg mt-6 font-serif leading-relaxed" style={{ color: "#7a5c40", fontFamily: "var(--font-serif)" }}>
              Authentic traditional banana leaf vegetarian service, showcasing the purest flavours of regional heritage. Perfectly curated for large family gatherings and weddings.
            </p>
          </motion.div>

          {/* Right - Banana Leaf Meal Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center"
          >
            <img
              src={bananaLeafSpread}
              alt="Traditional Banana Leaf Feast"
              className="w-full max-w-md rounded-3xl object-cover border-4 shadow-xl border-[#234927]"
            />
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────── */}
      <MarqueeStrip />

      {/* ── MENU GRID ───────────────────────────────── */}
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
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: `0 24px 60px ${section.color}33, 0 0 0 1px ${section.color}44`,
              }}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl p-7 border-2 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-md"
              style={{
                borderColor: `${section.color}35`,
                borderStyle: "double",
                borderWidth: "4px",
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dashed" style={{ borderColor: `${section.color}33` }}>
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${section.color}22, ${section.color}44)` }}
                  whileHover={{ rotate: 20, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                >
                  {section.emoji}
                </motion.div>
                <h2 className="text-xl font-bold font-marcellus tracking-wide" style={{ color: section.color }}>
                  {section.title}
                </h2>
              </div>

              {/* Items — staggered slide from left */}
              <div className="space-y-3.5">
                {section.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.45, ease: "easeOut" }}
                    whileHover={{ x: 4, color: section.color }}
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
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
              className="text-5xl mb-4"
            >
              🍃
            </motion.div>
            <h3 className="text-2xl font-bold font-marcellus mb-3" style={{ color: "#234927" }}>
              Ready to Book the Normal Menu?
            </h3>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "#7a5c40", fontFamily: "var(--font-body)" }}>
              Fill in your event details and let us prepare a traditional leaf feast for your guests.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                onClick={() => navigate("/booking")}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(35,73,39,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full font-semibold font-marcellus text-white shadow-lg text-sm tracking-wider border-none"
                style={{ background: "linear-gradient(135deg, #234927, #3a6e3f)", cursor: "pointer" }}
              >
                📋 Book Now
              </motion.button>
              <motion.button
                onClick={() => navigate("/custom-menu")}
                whileHover={{ scale: 1.05, borderColor: "#122B15", color: "#122B15", background: "#23492710" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full font-semibold font-marcellus border-2 transition-all text-sm tracking-wider"
                style={{ borderColor: "#234927", color: "#234927", background: "transparent", cursor: "pointer" }}
              >
                ✨ Customize Menu
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ faqs={[
        { question: "What is included in JIP Caterers' Normal Menu for weddings?", answer: "The Normal Menu includes setup items (water bottle, salt, tomato sauce), accompaniments (boonthi raitha, pepper rasam, buttermilk), starters (dry jamun, veg cutlet, pulka chapathi, veg biryani), main course (white rice, wedding sambar, vatha kuzhambu, poriyal, kootu), desserts (badam payasam, ice cream), and crunchy sides (appalam, potato chips, popcorn)." },
        { question: "Is the Normal Menu served on a banana leaf?", answer: "Yes. The Normal Menu is a traditional South Indian vegetarian leaf service — meals are served on fresh, sanitised banana leaves, maintaining the authentic style of a traditional wedding feast." },
        { question: "How many people can the Normal Menu cater to?", answer: "The Normal Menu is ideal for small to large-scale events — from intimate family gatherings to large wedding receptions with hundreds of guests. Contact us with your guest count for a customised quote." },
        { question: "Does the Normal Menu include desserts?", answer: "Yes! The Normal Menu includes Badam Payasam and Ice Cream as desserts, giving your guests a sweet ending to the traditional feast." },
        { question: "What starters are served in the Normal Menu?", answer: "The Normal Menu starters include Dry Jamun, Dry Sweet, Veg Cutlet, Pulka Chapathi with Paneer Bhurji Masala, and Veg Biryani — a satisfying spread before the main course." },
        { question: "Can I upgrade from the Normal Menu to a higher tier?", answer: "Absolutely. You can upgrade to the Elite Menu for welcome drinks and more variety, the Premium Menu for luxury live counters, or a fully Customized Menu. Our team will help you pick the right package for your event." },
        { question: "Is the Normal Menu suitable for traditional Tamil wedding receptions?", answer: "Yes, the Normal Menu is specifically curated for traditional Tamil wedding receptions. It includes all essential dishes like special wedding sambar, kuzhambu, poriyal, kootu, and payasam — the hallmarks of a authentic South Indian feast." },
        { question: "How do I book the Normal Menu for my event?", answer: "Simply fill out our booking form or WhatsApp us at 9092881813. Share your event type, date, location, and guest count. Our team will confirm availability and discuss the menu details with you." },
      ]} />

      <Footer />
    </div>
  );
}

export default NormalMenu;