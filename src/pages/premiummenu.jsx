import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MarigoldShower from "../components/MarigoldShower";
import premiumFeast from "../assets/premium_feast.png";
import MarqueeStrip from "../components/MarqueeStrip";
import FAQ from "../components/FAQ";
import PageSEO from "../components/PageSEO";

// ── VEG MENU DATA (JP Caterers Veg Menu card – Menu 3 Premium) ───────────────
const vegMenuSections = [
  {
    title: "Welcome Menu",
    emoji: "🥤",
    color: "#D4AF37",
    bg: "rgba(212,175,55,0.08)",
    items: [
      { name: "Masala Fruity Juice", emoji: "🍹", img: "/images/menu/nonveg/fruit-sharbat.png" },
      { name: "Samosa / Veg Box", emoji: "🔺", img: "/images/menu/veg-cutlet.png" },
    ],
  },
  {
    title: "Traditional Banana Leaf Feast",
    emoji: "🍃",
    color: "#2D6A4F",
    bg: "rgba(45,106,79,0.07)",
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
    bg: "rgba(180,83,9,0.06)",
    items: [
      { name: "Makhon Peda", emoji: "🟡", img: "/images/menu/nonveg/makhon-peda.png" },
      { name: "Jangiri", emoji: "🍮", img: "/images/menu/dry-sweet.png" },
      { name: "Nuts Ladoo", emoji: "🟤", img: "/images/menu/kala-jamun.png" },
      { name: "Yam Chips", emoji: "🥔", img: "/images/menu/potato-chips.png" },
      { name: "Veg Salad", emoji: "🥗", img: "/images/menu/boonthi-raitha.png" },
      { name: "Fruit Salad", emoji: "🍇", img: "/images/menu/fruit-salad-ice-cream.png" },
    ],
  },
  {
    title: "Breads & Main Dishes",
    emoji: "🫓",
    color: "#B91C1C",
    bg: "rgba(185,28,28,0.05)",
    items: [
      { name: "Chapati / Roomali Roti", emoji: "🫓", img: "/images/menu/pulka-chapathi.png" },
      { name: "Butter Masala", emoji: "🧡", img: "/images/menu/paneer-butter-masala.png" },
      { name: "Mini Othapam / Chutney", emoji: "🥞", img: "/images/menu/veg-mini-oothappam.png" },
      { name: "Special Veg Biryani", emoji: "🍚", img: "/images/menu/veg-biryani.png" },
      { name: "Pachadi", emoji: "🥗", img: "/images/menu/mango-patchadi.png" },
    ],
  },
  {
    title: "Rice & Accompaniments",
    emoji: "🍛",
    color: "#1D4ED8",
    bg: "rgba(29,78,216,0.05)",
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
    title: "Desserts",
    emoji: "🍮",
    color: "#BE185D",
    bg: "rgba(190,24,93,0.05)",
    items: [
      { name: "Payasam", emoji: "🍵", img: "/images/menu/payasam.png" },
      { name: "Ice Cream", emoji: "🍦", img: "/images/menu/ice-cream.png" },
    ],
  },
  {
    title: "Live Counters",
    emoji: "👑",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.06)",
    items: [
      { name: "Ice Cream Counter", emoji: "🍦", img: "/images/menu/ice-cream.png" },
      { name: "Popcorn Counter", emoji: "🍿", img: "/images/menu/pop-corn.png" },
    ],
  },
];

// ── NON-VEG MENU DATA (JP Caterers Non-Veg – Menu Premium) ───────────────────
const nonVegMenuSections = [
  {
    title: "Welcome Drinks",
    emoji: "🥤",
    color: "#6B1724",
    bg: "rgba(107,23,36,0.08)",
    items: [
      { name: "Fruit Sharbat / Mango Fruity Pkt", emoji: "🍹", img: "/images/menu/nonveg/fruit-sharbat.png" },
      { name: "Samosa / Sauce", emoji: "🔺", img: "/images/menu/veg-cutlet.png" },
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
    title: "Sweets",
    emoji: "🍮",
    color: "#92400E",
    bg: "rgba(146,64,14,0.06)",
    items: [
      { name: "Bread Halwa", emoji: "🍮", img: "/images/menu/nonveg/bread-halwa.png" },
      { name: "Makkhan Beda", emoji: "🟡", img: "/images/menu/nonveg/makhon-peda.png" },
    ],
  },
  {
    title: "Non-Veg Specials",
    emoji: "🍗",
    color: "#991B1B",
    bg: "rgba(153,27,27,0.06)",
    items: [
      { name: "Mutton Aloo Cutlet", emoji: "🍖", img: "/images/menu/nonveg/mutton-aloo-cutlet.png" },
      { name: "Chicken 555", emoji: "🍗", img: "/images/menu/nonveg/chicken-555.png" },
      { name: "Fish Fry or Nandu Thokku", emoji: "🐟", img: "/images/menu/nonveg/fish-fry.png" },
      { name: "Chicken Biryani or Mutton Biryani", emoji: "🍚", img: "/images/menu/nonveg/mutton-biryani.png" },
      { name: "Nattukozhi Varuval", emoji: "🍗", img: "/images/menu/nonveg/nattukozhi-varuval.png" },
      { name: "Boiled Egg", emoji: "🥚", img: "/images/menu/nonveg/boiled-egg.png" },
      { name: "White Rice", emoji: "🍚", img: "/images/menu/white-rice.png" },
      { name: "Mutton Bone Rasam", emoji: "🍲", img: "/images/menu/nonveg/mutton-bone-rasam.png" },
      { name: "OTC Pachadi", emoji: "🥗", img: "/images/menu/nonveg/otc-pachadi.png" },
      { name: "Kathirikai Masala", emoji: "🍆", img: "/images/menu/nonveg/kathirikai-masala.png" },
      { name: "Firni Payasam", emoji: "🍮", img: "/images/menu/nonveg/firni-payasam.png" },
      { name: "Ice Cream", emoji: "🍦", img: "/images/menu/ice-cream.png" },
      { name: "Jeera Tea", emoji: "☕", img: "/images/menu/nonveg/jeera-tea.png" },
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
  <svg className="w-48 h-48 opacity-15 rotate-slow text-[#D4AF37] pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <path d="M 50 5 Q 75 25, 95 50 Q 75 75, 50 95 Q 25 75, 5 50 Q 25 25, 50 5 Z" />
    <circle cx="50" cy="20" r="1.5" fill="currentColor" />
    <circle cx="50" cy="80" r="1.5" fill="currentColor" />
  </svg>
);

function MenuItemRow({ item, idx, accentColor, darkCard }) {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05, duration: 0.4, ease: "easeOut" }}
      className="flex items-center gap-3 py-2 last:border-none"
      style={{ borderBottom: darkCard ? "1px solid rgba(120,80,30,0.3)" : "1px solid rgba(231,229,228,1)" }}
    >
      <div
        className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border"
        style={{ borderColor: `${accentColor}40` }}
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
      <span
        className="text-sm font-semibold"
        style={{ color: darkCard ? "#e5d3b5" : "#4A2E1B", fontFamily: "var(--font-body)" }}
      >
        {item.name}
      </span>
    </motion.div>
  );
}

const premiumMenuSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Premium Menu – JIP Caterers",
    "url": "https://www.jipcaterers.com/premium-menu",
    "description": "JIP Caterers Premium Menu: Luxury South Indian wedding feast with Veg (Makhon Peda, Veg Biryani, Popcorn Counter) and Non-Veg (Mutton Aloo Cutlet, Chicken 555, Fish Fry, Nattukozhi Varuval, Mutton Biryani, Jeera Tea) options.",
  },
];

function PremiumMenu() {
  const navigate = useNavigate();
  const [menuType, setMenuType] = useState("veg");

  const isVeg = menuType === "veg";
  const sections = isVeg ? vegMenuSections : nonVegMenuSections;
  const vegColor = "#D4AF37";
  const nonVegColor = "#6B1724";
  const activeColor = isVeg ? vegColor : nonVegColor;

  return (
    <div className="relative">
      <PageSEO
        title="Premium Menu | Veg & Non-Veg Luxury Wedding Reception – JIP Caterers"
        description="JIP Caterers Premium Menu: Luxury South Indian wedding feast with Veg (Live Counters, Veg Biryani) and Non-Veg (Mutton Aloo Cutlet, Chicken 555, Fish Fry, Nattukozhi Varuval) options. Tiruvallur."
        keywords="premium menu jip caterers, luxury veg non veg wedding catering, mutton aloo cutlet catering, nattukozhi varuval, fish fry wedding catering tiruvallur, premium non veg catering"
        canonical="https://www.jipcaterers.com/premium-menu"
        ogTitle="Premium Menu | Veg & Non-Veg Luxury Wedding Reception Catering"
        ogDescription="Luxury South Indian wedding feast – Veg or Non-Veg. JIP Caterers, Tiruvallur."
        ogUrl="https://www.jipcaterers.com/premium-menu"
        ogType="product"
        structuredData={premiumMenuSchemas}
        breadcrumbs={[{ name: "Premium Menu", url: "https://www.jipcaterers.com/premium-menu" }]}
      />

      {/* ── HEADER ───────────────────────────────────── */}
      <section
        className="pt-10 sm:pt-32 pb-16 px-4 sm:px-16 lg:px-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4A2E1B 0%, #1E0F07 100%)" }}
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
            <span className="tier-badge tier-badge-premium mb-5 inline-flex marigold-bloom">
              👑 Menu Premium
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold font-cinzel leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F0D060] festival-entry">
              Royal Wedding Feast
              <span className="block text-gold-shimmer font-cinzel">
                Premium Package
              </span>
            </h1>
            <div className="mt-4 h-0.5 w-32 traditional-border border-b-2" />
            <p className="text-lg mt-6 font-serif leading-relaxed text-stone-300" style={{ fontFamily: "var(--font-serif)" }}>
              Our most luxurious dining package — featuring premium starters, rich desserts, live counters, and a grand feast experience. Available in Pure Veg and Non-Veg.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center"
          >
            <img
              src={premiumFeast}
              alt="Premium Wedding Feast Setup"
              className="w-full max-w-md rounded-3xl object-cover border-4 shadow-2xl"
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
        style={{
          background: isVeg
            ? "linear-gradient(180deg, #1E0F07 0%, #30190D 50%, #4A2E1B 100%)"
            : "linear-gradient(180deg, #1A0509 0%, #2C0A10 50%, #4A0E1A 100%)",
          transition: "background 0.5s ease",
        }}
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
            className="flex rounded-full p-1 shadow-xl border-2"
            style={{ background: "rgba(30,15,7,0.8)", borderColor: "rgba(212,175,55,0.5)", backdropFilter: "blur(12px)" }}
          >
            <motion.button
              id="toggle-veg-premium"
              onClick={() => setMenuType("veg")}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 sm:px-8 py-3 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center gap-2 border-none"
              style={{
                background: isVeg ? `linear-gradient(135deg, ${vegColor}, #F0D060)` : "transparent",
                color: isVeg ? "#1E0F07" : "#D4AF37",
                cursor: "pointer",
                boxShadow: isVeg ? "0 4px 20px rgba(212,175,55,0.5)" : "none",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="text-lg">🌿</span>
              <span>Pure Veg</span>
            </motion.button>

            <motion.button
              id="toggle-nonveg-premium"
              onClick={() => setMenuType("nonveg")}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 sm:px-8 py-3 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center gap-2 border-none"
              style={{
                background: !isVeg ? `linear-gradient(135deg, ${nonVegColor}, #8B1E2F)` : "transparent",
                color: !isVeg ? "#fff" : "#D4AF37",
                cursor: "pointer",
                boxShadow: !isVeg ? "0 4px 20px rgba(107,23,36,0.5)" : "none",
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
                background: isVeg ? "rgba(212,175,55,0.15)" : "rgba(107,23,36,0.25)",
                color: isVeg ? "#D4AF37" : "#F0A0A8",
                borderColor: `${activeColor}50`,
                fontFamily: "var(--font-body)",
              }}
            >
              {isVeg ? "🌿 Pure Vegetarian Premium Menu" : "🍗 Non-Vegetarian Premium Menu"}
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
                whileHover={{ y: -8, scale: 1.02, boxShadow: `0 20px 50px rgba(212,175,55,0.25)` }}
                className="rounded-3xl p-5 sm:p-7 transition-all duration-300 backdrop-blur-md shadow-2xl"
                style={{
                  background: "rgba(44,25,16,0.92)",
                  borderColor: "#D4AF37",
                  borderStyle: "double",
                  borderWidth: "4px",
                }}
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-dashed border-gold-light/30">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.45))", border: "1px solid rgba(212,175,55,0.6)" }}
                  >
                    {section.emoji}
                  </div>
                  <h2 className="text-base sm:text-xl font-bold font-marcellus tracking-wide text-gold-light">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-1">
                  {section.items.map((item, idx) => (
                    <MenuItemRow key={idx} item={item} idx={idx} accentColor={section.color} darkCard={true} />
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
            <div className="text-5xl mb-4">👑</div>
            <h3 className="text-2xl font-bold font-marcellus mb-3" style={{ color: "#4A2E1B" }}>
              Ready to Book the Premium Menu?
            </h3>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "#7a5c40", fontFamily: "var(--font-body)" }}>
              Pamper your guests with our ultimate royal feast — Veg or Non-Veg.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                onClick={() => navigate("/booking")}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(212,175,55,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-full font-semibold font-marcellus text-white shadow-lg text-sm tracking-wider border-none"
                style={{ background: "linear-gradient(135deg, #B88E2F, #D4AF37)", cursor: "pointer" }}
              >
                📋 Book Now
              </motion.button>
              <motion.button
                onClick={() => navigate("/custom-menu")}
                whileHover={{ scale: 1.05, borderColor: "#4A2E1B", color: "#4A2E1B", background: "#4A2E1B10" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full font-semibold font-marcellus border-2 transition-all text-sm tracking-wider"
                style={{ borderColor: "#4A2E1B", color: "#4A2E1B", background: "transparent", cursor: "pointer" }}
              >
                ✨ Customize Menu
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ faqs={[
        { question: "What makes JIP Caterers' Premium Menu a luxury reception package?", answer: "The Premium Menu is our top-tier offering, available in Pure Veg and Non-Veg. Veg: Masala Fruity Juice, Samosa, Makhon Peda, Jangiri, Nuts Ladoo, Fruit Salad, Mini Othapam, Veg Biryani, Butter Masala, full rice accompaniments, Payasam, Ice Cream, Ice Cream Counter, and Popcorn Counter. Non-Veg: Mutton Aloo Cutlet, Chicken 555, Fish Fry/Nandu Thokku, Chicken/Mutton Biryani, Nattukozhi Varuval, Boiled Egg, White Rice, Mutton Bone Rasam, OTC Pachadi, Kathirikai Masala, Firni Payasam, Ice Cream, and Jeera Tea." },
        { question: "Does JIP Caterers' Premium Menu include Non-Veg options?", answer: "Yes! The Premium Non-Veg Menu is our most lavish non-veg spread, featuring Mutton Aloo Cutlet, Chicken 555, Fish Fry or Nandu Thokku, Chicken/Mutton Biryani, Nattukozhi Varuval, Boiled Egg, White Rice, Mutton Bone Rasam, OTC Pachadi, Kathirikai Masala, Firni Payasam, Ice Cream, and Jeera Tea." },
        { question: "What live counters are included in the Premium Veg Menu?", answer: "The Premium Veg Menu includes an Ice Cream Counter and Popcorn Counter — two popular live stations that guests love at wedding receptions." },
        { question: "Is the Premium Menu served on banana leaves?", answer: "Yes. Both Veg and Non-Veg Premium Menus include the traditional banana leaf setup. Veg has Thuvaiyal/Pickle; Non-Veg has Garlic Pickle. Both include Water Pot and Banana Leaf." },
        { question: "Can the Premium Menu accommodate 500 to 1000+ guests?", answer: "Absolutely. Our Premium Menu is designed for large-scale grand receptions. We have successfully catered for 500 to 5000+ guests with both Veg and Non-Veg options. Contact us with your guest count for a tailored quote." },
        { question: "Can I have both veg and non-veg guests at the same event with the Premium Menu?", answer: "Yes. We can simultaneously serve Veg and Non-Veg Premium menus to different sections of guests at your event. Just mention your requirements in the booking form or WhatsApp us at 9092881813." },
      ]} />

      <Footer />
    </div>
  );
}

export default PremiumMenu;