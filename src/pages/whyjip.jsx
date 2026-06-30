import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MarigoldShower from "../components/MarigoldShower";
import MarqueeStrip from "../components/MarqueeStrip";
import FAQ from "../components/FAQ";
import PageSEO from "../components/PageSEO";

const features = [
  {
    emoji: "🍌",
    title: "Traditional Banana Leaf Service",
    description:
      "Authentic South Indian vegetarian dining served in the sacred banana leaf style — a timeless tradition for every wedding and celebration.",
    color: "#234927",
    bg: "rgba(35,73,39,0.08)",
    border: "#234927",
  },
  {
    emoji: "🥗",
    title: "Quality Vegetarian Food",
    description:
      "Fresh ingredients, absolute hygiene, and rich traditional recipes passed down through generations, cooked in pure brass and steel vessels.",
    color: "#B88E2F",
    bg: "rgba(184,142,47,0.08)",
    border: "#B88E2F",
  },
  {
    emoji: "💍",
    title: "Wedding & Reception Specialists",
    description:
      "Decades of catering weddings, receptions, engagements, housewarmings, and grand family celebrations across South India.",
    color: "#E3834F",
    bg: "rgba(227,131,79,0.08)",
    border: "#E3834F",
  },
  {
    emoji: "🧑‍🍳",
    title: "Professional Service Team",
    description:
      "Well-trained, uniformly dressed catering and serving staff ensuring warm, smooth food delivery and complete guest satisfaction.",
    color: "#7a4d30",
    bg: "rgba(122,77,48,0.08)",
    border: "#7a4d30",
  },
  {
    emoji: "✨",
    title: "Customizable Menus",
    description:
      "Tailor your feast from our Normal, Elite, or Premium selection. Build your own package with our culinary experts.",
    color: "#234927",
    bg: "rgba(35,73,39,0.08)",
    border: "#234927",
  },
  {
    emoji: "🏡",
    title: "Trusted Hospitality",
    description:
      "Building relationships through consistency, delicious taste, honest pricing, and treating every guest as family.",
    color: "#B88E2F",
    bg: "rgba(184,142,47,0.08)",
    border: "#B88E2F",
  },
];

const promises = [
  { icon: "🌿", text: "Traditional Catering" },
  { icon: "⭐", text: "Premium Service" },
  { icon: "🥬", text: "Fresh Ingredients" },
  { icon: "🤝", text: "Trusted Hospitality" },
  { icon: "🍛", text: "Authentic Flavours" },
  { icon: "✅", text: "100% Vegetarian" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const KolamPattern = () => (
  <svg className="w-48 h-48 sm:w-64 sm:h-64 opacity-10 rotate-slow text-[#D4AF37] pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <path d="M 50 5 Q 75 25, 95 50 Q 75 75, 50 95 Q 25 75, 5 50 Q 25 25, 50 5 Z" />
    <path d="M 50 15 Q 70 30, 85 50 Q 70 70, 50 85 Q 30 70, 15 50 Q 30 30, 50 15 Z" strokeDasharray="3,3" />
    <circle cx="50" cy="20" r="1.5" fill="currentColor" />
    <circle cx="50" cy="80" r="1.5" fill="currentColor" />
  </svg>
);

const whyJipSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Why Choose JIP Caterers",
    "url": "https://www.jipcaterers.com/why-jip",
    "description": "Learn why JIP Caterers is the most trusted South Indian vegetarian catering service in Tiruvallur and Chennai — heritage cooking, banana leaf service, professional staff, and consistent excellence.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jipcaterers.com" },
        { "@type": "ListItem", "position": 2, "name": "Why JIP Caterers", "item": "https://www.jipcaterers.com/why-jip" }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Why Choose JIP Caterers",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Traditional Banana Leaf Service", "description": "Authentic South Indian vegetarian dining served in the sacred banana leaf style — a timeless tradition for every wedding and celebration." },
        { "@type": "ListItem", "position": 2, "name": "Quality Vegetarian Food", "description": "Fresh ingredients, absolute hygiene, and rich traditional recipes passed down through generations, cooked in pure brass and steel vessels." },
        { "@type": "ListItem", "position": 3, "name": "Wedding & Reception Specialists", "description": "Decades of catering weddings, receptions, engagements, housewarmings, and grand family celebrations across South India." },
        { "@type": "ListItem", "position": 4, "name": "Professional Service Team", "description": "Well-trained, uniformly dressed catering and serving staff ensuring warm, smooth food delivery and complete guest satisfaction." },
        { "@type": "ListItem", "position": 5, "name": "Customizable Menus", "description": "Tailor your feast from our Normal, Elite, or Premium selection. Build your own package with our culinary experts." },
        { "@type": "ListItem", "position": 6, "name": "Trusted Hospitality", "description": "Building relationships through consistency, delicious taste, honest pricing, and treating every guest as family." }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why should I choose JIP Caterers over other caterers in Tiruvallur?", "acceptedAnswer": { "@type": "Answer", "text": "JIP Caterers stands apart through decades of heritage cooking, authentic banana leaf service, strict hygiene protocols, professionally uniformed serving staff, and a consistent track record of grand feasts that guests remember for a lifetime." } },
      { "@type": "Question", "name": "Do JIP Caterers use traditional cooking methods and recipes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our master cooks use traditional recipes passed down through generations, cooking in pure brass and steel vessels with hand-picked regional spices to preserve authentic South Indian vegetarian flavours." } },
      { "@type": "Question", "name": "What hygiene standards does JIP Caterers follow?", "acceptedAnswer": { "@type": "Answer", "text": "We follow rigorous food safety protocols — fresh ingredients sourced daily, clean preparation environment, covered storage, and hygiene-trained staff — ensuring every dish is 100% safe, pure, and delicious." } },
      { "@type": "Question", "name": "Can JIP Caterers handle large events with 1000 or more guests?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialise in high-capacity catering from 100 to 5000+ guests. Whether it's a grand wedding banquet, community festival, or corporate event, we scale seamlessly without compromising quality." } },
      { "@type": "Question", "name": "Does JIP Caterers provide a professional uniformed serving team?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our well-trained, uniformly dressed catering and serving staff ensure smooth, warm food delivery and complete guest satisfaction throughout your event." } },
      { "@type": "Question", "name": "Are the ingredients sourced fresh and locally?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We source fresh, locally available vegetables and ingredients daily. Pure farm produce cooked with traditional methods ensures your guests experience authentic South Indian vegetarian flavours in every bite." } }
    ]
  }
];

function WhyJip() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <PageSEO
        title="Why Choose JIP Caterers | Heritage Catering Specialists Tiruvallur"
        description="Discover why JIP Caterers is Tiruvallur's most trusted South Indian vegetarian catering service — heritage recipes, banana leaf service, professional staff, and 100% vegetarian food for all celebrations."
        keywords="why choose jip caterers, best caterer tiruvallur, south indian heritage catering, banana leaf service wedding, professional catering team, vegetarian catering specialists chennai, traditional catering tamil nadu"
        canonical="https://www.jipcaterers.com/why-jip"
        ogTitle="Why Choose JIP Caterers | Heritage Catering Specialists"
        ogDescription="Decades of heritage cooking, traditional banana leaf service, professional staff, and strict hygiene — JIP Caterers transforms your celebration into a grand, memorable feast."
        ogUrl="https://www.jipcaterers.com/why-jip"
        ogType="article"
        structuredData={whyJipSchemas}
        breadcrumbs={[{ name: "Why JIP Caterers", url: "https://www.jipcaterers.com/why-jip" }]}
      />
      {/* Swaying Leaf Garland */}


      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section
        className="pt-10 sm:pt-32 pb-16 px-4 sm:px-16 lg:px-28 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #FFD1A9 0%, #F7EDD8 40%, #E8DEC9 100%)" }}
      >
        <MarigoldShower />

        {/* Background glow orbs & Kolams */}
        <div className="absolute top-10 right-20 pointer-events-none select-none">
          <KolamPattern />
        </div>
        <div className="absolute bottom-0 left-10 pointer-events-none select-none opacity-50">
          <KolamPattern />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge-traditional border border-orange-200 leaf-unfurl inline-block">🌿 Why Choose Jip Caterers?</span>

            <h1
              className="mt-6 text-5xl md:text-6xl font-bold font-cinzel leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#4A2E1B] to-[#234927] festival-entry"
              style={{ animationDelay: "0.15s" }}
            >
              Excellence in Every
              <span className="block text-gold-shimmer font-cinzel">
                Celebration
              </span>
            </h1>

            <div className="gold-divider" />

            <p className="text-xl max-w-2xl mx-auto leading-relaxed font-serif aroma-wave" style={{ color: "#7a5c40", fontFamily: "var(--font-serif)" }}>
              We combine authentic culinary heritage, hand-picked regional spices, and professional hospitality to transform your milestones into divine gastronomic celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────── */}
      <MarqueeStrip />

      {/* ── FEATURES GRID ─────────────────────────────── */}
      <section
        className="py-10 sm:py-20 px-4 sm:px-16 lg:px-28 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #E8DEC9 0%, #FAF1DF 50%, #FFD1A9 100%)" }}
      >
        <div className="absolute top-1/4 left-10 opacity-15 pointer-events-none">
          <KolamPattern />
        </div>
        <div className="absolute bottom-10 right-10 opacity-15 pointer-events-none">
          <KolamPattern />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: `0 24px 60px ${item.color}33, 0 0 0 1px ${item.color}55`,
                }}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl p-8 border-2 transition-all duration-300 bg-white/75 backdrop-blur-md shadow-md cursor-default group"
                style={{
                  borderColor: item.border,
                  borderStyle: "double",
                  borderWidth: "4px",
                }}
              >
                {/* Icon container */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                    border: `2px solid ${item.color}66`,
                  }}
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {item.emoji}
                </motion.div>

                <h2
                  className="text-xl font-bold mb-3 font-marcellus tracking-wide"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h2>

                <p
                  className="leading-relaxed text-sm"
                  style={{ color: "#5a3e2b", fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROMISE BANNER ────────────────────────────── */}
      <section
        className="py-12 sm:py-24 px-4 sm:px-16 lg:px-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A3A21, #0E2211)" }}
      >
        <MarigoldShower />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase mb-5 block font-marcellus" style={{ color: "#D4AF37" }}>
              Our Sacred Promise
            </span>

            <h2
              className="text-3xl md:text-5xl font-bold mb-6 font-cinzel text-gold-shimmer"
            >
              Creating Memorable Grand Feasts
            </h2>

            <div className="h-0.5 w-40 mx-auto mb-10 traditional-border border-b-2" />

            {/* Promise chips */}
            <div className="flex flex-wrap gap-4 justify-center">
              {promises.map((p, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border bg-white/5 backdrop-blur-sm"
                  style={{
                    borderColor: "rgba(212,175,55,0.45)",
                    color: "#D4AF37",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span className="text-base">{p.icon}</span> {p.text}
                </motion.span>
              ))}
            </div>

            <motion.button
              onClick={() => navigate("/booking")}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(212,175,55,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-4 rounded-full font-semibold font-marcellus text-base shadow-xl transition-all text-white border-none"
              style={{
                background: "linear-gradient(135deg, #B88E2F, #D4AF37)",
                cursor: "pointer",
              }}
            >
              📋 Book Your Celebration
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── BULK ORDERS STRIP ─────────────────────────── */}
      <section className="py-10 sm:py-20 px-4 sm:px-16 lg:px-28 relative overflow-hidden" style={{ background: "#FAF1DF" }}>
        <div className="absolute top-1/2 left-10 pointer-events-none opacity-10">
          <KolamPattern />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 text-center brass-frame rounded-3xl"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              className="text-5xl mb-5"
            >
              🏮
            </motion.div>
            <h3 className="text-3xl font-bold font-marcellus mb-4" style={{ color: "#4A2E1B" }}>
              Bulk Orders & Large-Scale Events
            </h3>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#7a5c40", fontFamily: "var(--font-body)" }}>
              We specialise in executing high-capacity catering operations for 100 to 5000+ guests. Whether it's a grand wedding banquet, traditional housewarmings, or community festivals — Jip Caterers serves excellence without compromise.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Weddings", "Receptions", "Engagements", "Birthdays", "Housewarmings", "Festivals"].map((tag) => (
                <span key={tag} className="px-5 py-2 rounded-full text-xs font-bold border-2"
                  style={{ borderColor: "#E3834F", color: "#E3834F", background: "rgba(227,131,79,0.08)", fontFamily: "var(--font-body)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ faqs={[
        { question: "Why should I choose JIP Caterers over other caterers in Tiruvallur?", answer: "JIP Caterers stands apart through decades of heritage cooking, authentic banana leaf service, strict hygiene protocols, professionally uniformed serving staff, and a consistent track record of grand feasts that guests remember for a lifetime." },
        { question: "Do JIP Caterers use traditional cooking methods and recipes?", answer: "Yes. Our master cooks use traditional recipes passed down through generations, cooking in pure brass and steel vessels with hand-picked regional spices to preserve authentic South Indian vegetarian flavours." },
        { question: "What hygiene standards does JIP Caterers follow?", answer: "We follow rigorous food safety protocols — fresh ingredients sourced daily, clean preparation environment, covered storage, and hygiene-trained staff — ensuring every dish is 100% safe, pure, and delicious." },
        { question: "Can JIP Caterers handle large events with 1000 or more guests?", answer: "Absolutely. We specialise in high-capacity catering from 100 to 5000+ guests. Whether it's a grand wedding banquet, community festival, or corporate event, we scale seamlessly without compromising quality." },
        { question: "Does JIP Caterers provide a professional uniformed serving team?", answer: "Yes. Our well-trained, uniformly dressed catering and serving staff ensure smooth, warm food delivery and complete guest satisfaction throughout your event." },
        { question: "What occasions does JIP Caterers specialise in?", answer: "We specialise in weddings, receptions, engagements, housewarming ceremonies, birthdays, corporate events, and community festivals across Tiruvallur, Chennai, and surrounding Tamil Nadu districts." },
        { question: "Are the ingredients sourced fresh and locally?", answer: "Yes. We source fresh, locally available vegetables and ingredients daily. Pure farm produce cooked with traditional methods ensures your guests experience authentic South Indian vegetarian flavours in every bite." },
        { question: "How do I trust JIP Caterers for my wedding catering?", answer: "JIP Caterers has earned trust through consistent excellence — honest pricing, reliable timelines, quality food, and treating every family with heartfelt hospitality. We treat your event as if it were our own celebration." },
      ]} />

      <Footer />
    </div>
  );
}

export default WhyJip;