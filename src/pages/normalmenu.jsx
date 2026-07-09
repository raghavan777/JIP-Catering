import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MarigoldShower from "../components/MarigoldShower";
import bananaLeafSpread from "../assets/banana_leaf_spread.png";
import MarqueeStrip from "../components/MarqueeStrip";
import FAQ from "../components/FAQ";
import PageSEO from "../components/PageSEO";

// ── VEG MENU DATA (from JP Caterers Veg Menu card – Menu 1 Classic) ──────────
const vegMenuSections = [
  {
    title: "Welcome Menu",
    emoji: "🥤",
    color: "#234927",
    bg: "rgba(35,73,39,0.07)",
    items: [
      { name: "Mixed Fruit Sharbat", emoji: "🍹", img: "/images/menu/nonveg/fruit-sharbat.png" },
      { name: "Bonda with Chutney", emoji: "🟤", img: "/images/menu/nonveg/bonda-chutney.png" },
    ],
  },
  {
    title: "Traditional Banana Leaf Feast",
    emoji: "🍃",
    color: "#2D6A4F",
    bg: "rgba(45,106,79,0.06)",
    items: [
      { name: "Banana Leaf", emoji: "🍃", img: "/images/menu/banana-leaf.png" },
      { name: "Water Pot", emoji: "💧", img: "/images/menu/water-bottle.png" },
      { name: "Salt Powder", emoji: "🧂", img: "/images/menu/salt-powder.png" },
      { name: "Pickle or Thuvaiyal", emoji: "🫙", img: "/images/menu/pickle.png" },
    ],
  },
  {
    title: "Sweets & Snacks",
    emoji: "🍬",
    color: "#B45309",
    bg: "rgba(180,83,9,0.05)",
    items: [
      { name: "Dry Sweet", emoji: "🍮", img: "/images/menu/dry-sweet.png" },
      { name: "Kara Boondi", emoji: "🟡", img: "/images/menu/potato-chips.png" },
    ],
  },
  {
    title: "Breads & Main Dishes",
    emoji: "🫓",
    color: "#B91C1C",
    bg: "rgba(185,28,28,0.04)",
    items: [
      { name: "Chapati / Roomali Roti", emoji: "🫓", img: "/images/menu/pulka-chapathi.png" },
      { name: "Butter Masala", emoji: "🧡", img: "/images/menu/paneer-butter-masala.png" },
      { name: "Special Veg Biryani", emoji: "🍚", img: "/images/menu/veg-biryani.png" },
      { name: "Pachadi", emoji: "🥗", img: "/images/menu/mango-patchadi.png" },
    ],
  },
  {
    title: "Rice & Accompaniments",
    emoji: "🍛",
    color: "#1D4ED8",
    bg: "rgba(29,78,216,0.04)",
    items: [
      { name: "Steamed Rice", emoji: "🍚", img: "/images/menu/white-rice.png" },
      { name: "Special Vatha Kuzhambu", emoji: "🍲", img: "/images/menu/vatha-kuzhambu.png" },
      { name: "Sambar", emoji: "🍜", img: "/images/menu/wedding-sambar.png" },
      { name: "Rasam", emoji: "☕", img: "/images/menu/pepper-rasam.png" },
      { name: "Buttermilk", emoji: "🥛", img: "/images/menu/butter-milk.png" },
      { name: "Poriyal / Kootu", emoji: "🥦", img: "/images/menu/kootu.png" },
    ],
  },
  {
    title: "Dessert",
    emoji: "🍮",
    color: "#BE185D",
    bg: "rgba(190,24,93,0.04)",
    items: [
      { name: "Payasam", emoji: "🍵", img: "/images/menu/payasam.png" },
    ],
  },
];

// ── NON-VEG MENU DATA (from JP Caterers Non-Veg Menu card – Menu 1 Non Veg) ──
const nonVegMenuSections = [
  {
    title: "Welcome Drinks",
    emoji: "☕",
    color: "#6B1724",
    bg: "rgba(107,23,36,0.07)",
    items: [
      { name: "Tea or Coffee", emoji: "☕", img: "/images/menu/nonveg/jeera-tea.png" },
      { name: "Vadai with Chutney", emoji: "🟤", img: "/images/menu/nonveg/vadai-chutney.png" },
    ],
  },
  {
    title: "On the Banana Leaf",
    emoji: "🍃",
    color: "#7B3407",
    bg: "rgba(123,52,7,0.06)",
    items: [
      { name: "Banana Leaf", emoji: "🍃", img: "/images/menu/banana-leaf.png" },
      { name: "Water Pot", emoji: "💧", img: "/images/menu/water-bottle.png" },
      { name: "Garlic Pickle", emoji: "🫙", img: "/images/menu/nonveg/garlic-pickle.png" },
    ],
  },
  {
    title: "Sweet",
    emoji: "🍮",
    color: "#92400E",
    bg: "rgba(146,64,14,0.06)",
    items: [
      { name: "Bread Halwa", emoji: "🍮", img: "/images/menu/nonveg/bread-halwa.png" },
    ],
  },
  {
    title: "Non-Veg Specials",
    emoji: "🍗",
    color: "#991B1B",
    bg: "rgba(153,27,27,0.06)",
    items: [
      { name: "Chicken 555", emoji: "🍗", img: "/images/menu/nonveg/chicken-555.png" },
      { name: "Chicken Biryani or Mutton Biryani", emoji: "🍚", img: "/images/menu/nonveg/chicken-biryani.png" },
      { name: "OTC Pachadi", emoji: "🥗", img: "/images/menu/nonveg/otc-pachadi.png" },
      { name: "Kathirikai Masala", emoji: "🍆", img: "/images/menu/nonveg/kathirikai-masala.png" },
    ],
  },
];

// ── ANIMATION VARIANTS ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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

// ── MENU ITEM CARD WITH IMAGE ─────────────────────────────────────────────────
function MenuItemRow({ item, idx, accentColor }) {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.06, duration: 0.45, ease: "easeOut" }}
      className="flex items-center gap-3 py-2 border-b border-stone-100 last:border-none"
    >
      <div
        className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border"
        style={{ borderColor: `${accentColor}30` }}
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.innerHTML = `<span class="text-xl flex items-center justify-center w-full h-full">${item.emoji}</span>`;
          }}
        />
      </div>
      <span className="text-sm font-semibold" style={{ color: "#4A2E1B", fontFamily: "var(--font-body)" }}>
        {item.name}
      </span>
    </motion.div>
  );
}

// ── SCHEMA DATA ───────────────────────────────────────────────────────────────
const normalMenuSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Normal Menu – JIP Caterers",
    "url": "https://www.jipcaterers.com/normal-menu",
    "description": "JIP Caterers Normal Menu: South Indian Wedding Feast with Veg and Non-Veg options. Veg: Mixed Fruit Sharbat, Bonda, Special Veg Biryani, Payasam. Non-Veg: Chicken 555, Chicken/Mutton Biryani, Kathirikai Masala.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jipcaterers.com" },
        { "@type": "ListItem", "position": 2, "name": "Normal Menu", "item": "https://www.jipcaterers.com/normal-menu" }
      ]
    }
  },
];

function NormalMenu() {
  const navigate = useNavigate();
  const [menuType, setMenuType] = useState("veg");

  const isVeg = menuType === "veg";
  const sections = isVeg ? vegMenuSections : nonVegMenuSections;
  const vegColor = "#234927";
  const nonVegColor = "#6B1724";
  const activeColor = isVeg ? vegColor : nonVegColor;

  return (
    <div className="relative">
      <PageSEO
        title="Normal Menu | Veg & Non-Veg Wedding Catering – JIP Caterers"
        description="JIP Caterers Normal Menu: South Indian Wedding Feast with Veg and Non-Veg options. Veg: Bonda, Special Veg Biryani, Payasam. Non-Veg: Chicken 555, Biryani, Kathirikai Masala. Call 9092881813."
        keywords="normal menu jip caterers, veg non veg wedding menu, south indian wedding catering, chicken biryani wedding, mutton biryani catering, banana leaf service tiruvallur"
        canonical="https://www.jipcaterers.com/normal-menu"
        ogTitle="Normal Menu | Veg & Non-Veg Wedding Catering"
        ogDescription="South Indian Wedding Feast – Choose Veg or Non-Veg. JIP Caterers, Tiruvallur."
        ogUrl="https://www.jipcaterers.com/normal-menu"
        ogType="product"
        structuredData={normalMenuSchemas}
        breadcrumbs={[{ name: "Normal Menu", url: "https://www.jipcaterers.com/normal-menu" }]}
      />

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tier-badge tier-badge-normal mb-5 inline-flex leaf-unfurl">
              🍃 Menu 1 – Classic
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold font-cinzel leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#234927] to-[#122B15] festival-entry">
              Wedding Reception
              <span className="block text-gold-shimmer font-cinzel">
                South Indian Feast
              </span>
            </h1>
            <div className="mt-4 h-0.5 w-32 traditional-border border-b-2" />
            <p className="text-lg mt-6 font-serif leading-relaxed" style={{ color: "#7a5c40", fontFamily: "var(--font-serif)" }}>
              Authentic South Indian wedding feast served on a traditional banana leaf. Available in both Pure Veg and Non-Veg options — choose your preference below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center"
          >
            <img
              src={bananaLeafSpread}
              alt="Traditional Banana Leaf Feast"
              className="w-full max-w-md rounded-3xl object-cover border-4 shadow-xl"
              style={{ borderColor: activeColor }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────── */}
      <MarqueeStrip />

      {/* ── TOGGLE + MENU GRID ───────────────────────── */}
      <section
        className="py-10 sm:py-20 px-4 sm:px-8 lg:px-28 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #E8DEC9 0%, #FAF1DF 50%, #FFD1A9 100%)" }}
      >
        <div className="absolute top-1/4 left-10 pointer-events-none opacity-10">
          <KolamPattern />
        </div>
        <div className="absolute bottom-20 right-10 pointer-events-none opacity-10">
          <KolamPattern />
        </div>

        {/* ── VEG / NON-VEG TOGGLE ─────────────────── */}
        <div className="flex justify-center mb-10 relative z-10">
          <div
            className="flex rounded-full p-1 shadow-lg border-2"
            style={{ background: "rgba(255,255,255,0.7)", borderColor: "rgba(212,175,55,0.4)", backdropFilter: "blur(12px)" }}
          >
            {/* VEG BUTTON */}
            <motion.button
              id="toggle-veg-normal"
              onClick={() => setMenuType("veg")}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 sm:px-8 py-3 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center gap-2 border-none"
              style={{
                background: isVeg ? `linear-gradient(135deg, ${vegColor}, #3a6e3f)` : "transparent",
                color: isVeg ? "#fff" : vegColor,
                cursor: "pointer",
                boxShadow: isVeg ? "0 4px 20px rgba(35,73,39,0.4)" : "none",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="text-lg">🌿</span>
              <span>Pure Veg</span>
              {isVeg && (
                <motion.span
                  layoutId="activeIndicatorNormal"
                  className="absolute inset-0 rounded-full"
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.button>

            {/* NON-VEG BUTTON */}
            <motion.button
              id="toggle-nonveg-normal"
              onClick={() => setMenuType("nonveg")}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 sm:px-8 py-3 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center gap-2 border-none"
              style={{
                background: !isVeg ? `linear-gradient(135deg, ${nonVegColor}, #8B1E2F)` : "transparent",
                color: !isVeg ? "#fff" : nonVegColor,
                cursor: "pointer",
                boxShadow: !isVeg ? "0 4px 20px rgba(107,23,36,0.4)" : "none",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="text-lg">🍗</span>
              <span>Non-Veg</span>
            </motion.button>
          </div>
        </div>

        {/* ── MENU TYPE LABEL ──────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={menuType + "-label"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-center mb-8 relative z-10"
          >
            <span
              className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase border"
              style={{
                background: isVeg ? "rgba(35,73,39,0.1)" : "rgba(107,23,36,0.1)",
                color: activeColor,
                borderColor: `${activeColor}40`,
                fontFamily: "var(--font-body)",
              }}
            >
              {isVeg ? "🌿 Pure Vegetarian Menu" : "🍗 Non-Vegetarian Menu"}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* ── MENU CARDS ────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={menuType}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className={`grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto relative z-10 ${
              isVeg ? "lg:grid-cols-3" : "lg:grid-cols-2"
            }`}
          >
            {sections.map((section, index) => (
              <motion.div
                key={`${menuType}-${index}`}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 20px 50px ${section.color}33, 0 0 0 1px ${section.color}33`,
                }}
                className="rounded-3xl p-5 sm:p-7 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-md"
                style={{
                  borderColor: `${section.color}40`,
                  borderStyle: "double",
                  borderWidth: "4px",
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-dashed" style={{ borderColor: `${section.color}33` }}>
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${section.color}22, ${section.color}44)` }}
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  >
                    {section.emoji}
                  </motion.div>
                  <h2 className="text-base sm:text-xl font-bold font-marcellus tracking-wide" style={{ color: section.color }}>
                    {section.title}
                  </h2>
                </div>

                {/* Items with images */}
                <div className="space-y-1">
                  {section.items.map((item, idx) => (
                    <MenuItemRow key={idx} item={item} idx={idx} accentColor={section.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────── */}
      <section className="py-10 sm:py-20 px-4 sm:px-16 lg:px-28 relative overflow-hidden" style={{ background: "#FAF1DF" }}>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 border-4 brass-frame rounded-3xl"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
              className="text-5xl mb-4"
            >
              🍃
            </motion.div>
            <h3 className="text-2xl font-bold font-marcellus mb-3" style={{ color: "#234927" }}>
              Ready to Book the Classic Menu?
            </h3>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "#7a5c40", fontFamily: "var(--font-body)" }}>
              Fill in your event details and let us prepare a traditional feast — Veg or Non-Veg — for your guests.
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
        { question: "What is included in JIP Caterers' Normal Menu for weddings?", answer: "The Normal (Classic) Menu is available in Pure Veg and Non-Veg. Veg: Mixed Fruit Sharbat, Bonda with Chutney, Traditional Banana Leaf setup, Dry Sweet, Kara Boondi, Chapati/Roomali Roti, Butter Masala, Special Veg Biryani, Pachadi, Steamed Rice, Sambar, Vatha Kuzhambu, Rasam, Buttermilk, Poriyal/Kootu, and Payasam. Non-Veg: Tea/Coffee, Vadai with Chutney, Banana Leaf with Garlic Pickle, Bread Halwa, Chicken 555, Chicken/Mutton Biryani, OTC Pachadi, and Kathirikai Masala." },
        { question: "Does JIP Caterers offer Non-Veg catering?", answer: "Yes! JIP Caterers proudly serves both Pure Veg and Non-Veg menus. You can use the toggle on any menu page to switch between the two. The Non-Veg menu features Chicken 555, Chicken/Mutton Biryani, Bread Halwa, OTC Pachadi, Kathirikai Masala, and more." },
        { question: "Is the Normal Menu served on a banana leaf?", answer: "Yes. Both the Veg and Non-Veg Normal Menu are served on fresh, sanitised banana leaves in traditional South Indian style. The Veg version includes Thuvaiyal/Pickle, while the Non-Veg version includes Garlic Pickle." },
        { question: "Can I have both veg and non-veg options at the same event?", answer: "Yes. We can accommodate both veg and non-veg requirements for different sections of guests at the same event. Simply mention it in the booking form or contact us on WhatsApp at 9092881813." },
        { question: "Can I upgrade from the Normal Menu to a higher tier?", answer: "Absolutely. You can upgrade to the Elite Menu for more variety and additional items, or the Premium Menu for a grander feast with more non-veg specials like Fish Fry, Nattukozhi Varuval, and Mutton Bone Rasam." },
      ]} />

      <Footer />
    </div>
  );
}

export default NormalMenu;