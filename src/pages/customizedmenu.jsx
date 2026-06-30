import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import MarigoldShower from "../components/MarigoldShower";
import FAQ from "../components/FAQ";
import PageSEO from "../components/PageSEO";

const menuOptions = [
  {
    name: "Normal Menu",
    path: "/normal-menu",
    icon: "🍃",
    description: "Traditional Wedding Reception Vegetarian Leaf Service with authentic flavours",
    features: ["Banana Leaf Service", "Main Course Curries", "Traditional Desserts"],
    color: "#234927",
    glow: "rgba(35,73,39,0.35)",
    gradient: "linear-gradient(135deg, rgba(35,73,39,0.06), rgba(35,73,39,0.02))",
    border: "#234927",
    activeBg: "rgba(35,73,39,0.12)",
  },
  {
    name: "Elite Menu",
    path: "/elite-menu",
    icon: "⭐",
    description: "Enhanced Menu with Premium Tiffins, Special Desserts and Welcome Drinks",
    features: ["Welcome Drinks", "Special Tiffins", "Premium Desserts", "Extra Sides"],
    color: "#B88E2F",
    glow: "rgba(184,142,47,0.4)",
    gradient: "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(184,142,47,0.02))",
    border: "#B88E2F",
    activeBg: "rgba(212,175,55,0.14)",
  },
  {
    name: "Premium Menu",
    path: "/premium-menu",
    icon: "👑",
    description: "Luxury Wedding Reception Package with Live Counters and full lavish spread",
    features: ["Live Dosa Counter", "Multiple Desserts", "Indian Breads", "Full Leaf Service", "Fruit Salad"],
    color: "#4A2E1B",
    glow: "rgba(74,46,27,0.4)",
    gradient: "linear-gradient(135deg, rgba(74,46,27,0.06), rgba(212,175,55,0.02))",
    border: "#B88E2F",
    activeBg: "rgba(74,46,27,0.1)",
  },
];

const KolamPattern = () => (
  <svg className="w-48 h-48 opacity-10 rotate-slow text-[#D4AF37] pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <path d="M 50 5 Q 75 25, 95 50 Q 75 75, 50 95 Q 25 75, 5 50 Q 25 25, 50 5 Z" />
    <circle cx="50" cy="20" r="1.5" fill="currentColor" />
    <circle cx="50" cy="80" r="1.5" fill="currentColor" />
  </svg>
);

const customMenuSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Customized Catering Menu – JIP Caterers",
    "url": "https://www.jipcaterers.com/custom-menu",
    "description": "Build your own South Indian vegetarian catering package with JIP Caterers. Choose from Normal, Elite, or Premium base tiers and customize dishes, portions, and special items to perfectly match your event, guest preferences, and budget.",
    "provider": {
      "@type": "Organization",
      "name": "JIP Caterers",
      "telephone": "+91-9092881813",
      "address": { "@type": "PostalAddress", "addressLocality": "Tiruvallur", "addressRegion": "Tamil Nadu", "addressCountry": "IN" }
    },
    "serviceType": "Custom Vegetarian Catering",
    "areaServed": ["Tiruvallur", "Chennai", "Tamil Nadu"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Customization Base Packages",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Normal Menu (Customizable)", "description": "Traditional banana leaf service as the base, customized with your preferred dishes and portions." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elite Menu (Customizable)", "description": "Enhanced vegetarian package as the base, with welcome drinks and additional tiffin items customizable." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Menu (Customizable)", "description": "Luxury reception package as the base, with live counters and all items fully customizable." } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the Customized Menu at JIP Caterers?", "acceptedAnswer": { "@type": "Answer", "text": "The Customized Menu allows you to build a completely tailored vegetarian catering package. Choose from Normal, Elite, or Premium menu tiers as a base and customize specific dishes, add live counters, adjust portions, and add special items to match your guest preferences and budget." } },
      { "@type": "Question", "name": "Can I mix items from different menu tiers at JIP Caterers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JIP Caterers allows you to mix elements from the Normal, Elite, and Premium menus to create your ideal package. Our culinary team will work with you to build a cohesive, balanced menu for your event." } },
      { "@type": "Question", "name": "How do I start the customization process with JIP Caterers?", "acceptedAnswer": { "@type": "Answer", "text": "Simply contact JIP Caterers at 9092881813 or WhatsApp us. Share your event details (date, type, guest count), shortlist preferred dishes from our menu tiers, and our team will create a custom menu proposal and quotation." } },
      { "@type": "Question", "name": "What is the price for a Customized Menu at JIP Caterers?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing for the Customized Menu depends on your selected dishes, guest count, event type, and service requirements. Contact us at 9092881813 for a personalised quotation tailored to your celebration." } }
    ]
  }
];

function CustomMenu() {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("");
  const [customItems, setCustomItems] = useState("");

  return (
    <div className="relative">
      <PageSEO
        title="Customized Menu | Tailored South Indian Vegetarian Catering – JIP Caterers"
        description="Build your own vegetarian catering package with JIP Caterers. Choose Normal, Elite, or Premium as a base and customize dishes, portions & special items for your wedding, engagement or celebration in Tiruvallur & Chennai."
        keywords="customized catering menu, tailored vegetarian catering, custom wedding menu chennai, personalized catering tiruvallur, build your own catering package, custom veg menu south indian"
        canonical="https://www.jipcaterers.com/custom-menu"
        ogTitle="Customized Menu | Tailored South Indian Vegetarian Catering"
        ogDescription="Create your perfect vegetarian catering package. Mix and match dishes from Normal, Elite, or Premium menus — fully tailored to your event and guest preferences. JIP Caterers."
        ogUrl="https://www.jipcaterers.com/custom-menu"
        ogType="product"
        structuredData={customMenuSchemas}
        breadcrumbs={[{ name: "Customized Menu", url: "https://www.jipcaterers.com/custom-menu" }]}
      />
      {/* Swaying Leaf Garland */}


      {/* ── HEADER ───────────────────────────────────── */}
      <section
        className="pt-10 sm:pt-32 pb-16 px-4 sm:px-16 lg:px-28 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #FFD1A9 0%, #FAF1DF 50%, #E8DEC9 100%)" }}
      >
        <MarigoldShower />

        <div className="absolute top-12 right-20 pointer-events-none select-none">
          <KolamPattern />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <span className="badge-traditional border border-orange-200">✨ Customize Your Menu</span>
          <h1
            className="mt-5 text-4xl md:text-5xl font-bold font-cinzel leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#4A2E1B] to-[#234927]"
          >
            Create Your Own
            <span className="block text-gold-shimmer font-cinzel">
              Perfect Menu
            </span>
          </h1>
          <div className="gold-divider" />
          <p className="text-lg font-serif leading-relaxed" style={{ color: "#7a5c40", fontFamily: "var(--font-serif)" }}>
            Select a traditional base package and customize it to perfectly align with your family's preferences and dietary choices.
          </p>
        </motion.div>
      </section>

      {/* ── MENU SELECTION ────────────────────────────── */}
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

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold font-marcellus text-[#4A2E1B] tracking-wide">
              Step 1 — Select Your Base Package
            </h2>
            <p className="mt-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-body)" }}>
              Click to select a base package. You can customize dishes in the next step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuOptions.map((menu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedMenu(menu.name)}
                className="cursor-pointer rounded-3xl p-7 border-2 transition-all duration-300 bg-white/70 backdrop-blur-md shadow-md"
                style={{
                  background: selectedMenu === menu.name ? menu.activeBg : menu.gradient,
                  borderColor: selectedMenu === menu.name ? menu.color : `${menu.color}44`,
                  boxShadow: selectedMenu === menu.name ? `0 0 30px ${menu.glow}, 0 8px 30px rgba(74,46,27,0.15)` : "0 4px 16px rgba(0,0,0,0.05)",
                  borderStyle: "double",
                  borderWidth: "4px",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${menu.color}15, ${menu.color}35)`,
                      border: `1.5px solid ${menu.color}55`,
                    }}>
                    {menu.icon}
                  </div>
                </div>

                <h2
                  className="text-xl font-bold text-center mb-3 font-marcellus tracking-wide"
                  style={{ color: menu.color }}
                >
                  {menu.name}
                </h2>

                <p
                  className="text-sm text-center mb-5 leading-relaxed min-h-[72px]"
                  style={{ color: "#7a5c40", fontFamily: "var(--font-body)" }}
                >
                  {menu.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {menu.features.map((f) => (
                    <span key={f} className="text-[10px] font-bold px-2.5 py-1 rounded-full border bg-white/50"
                      style={{ borderColor: `${menu.color}44`, color: menu.color, fontFamily: "var(--font-body)" }}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Selected checkmark */}
                {selectedMenu === menu.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex justify-center mt-3"
                  >
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ background: `${menu.color}22`, color: menu.color }}>
                      <CheckCircle size={14} /> Selected
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* ── CUSTOM ITEMS TEXTAREA ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-3xl p-8 border-4 brass-frame bg-white/80"
          >
            <h2 className="text-xl font-bold mb-2 font-marcellus text-[#4A2E1B] tracking-wide">
              Step 2 — Add Custom Food Requirements
            </h2>
            <p className="text-sm mb-5 text-stone-600" style={{ fontFamily: "var(--font-body)" }}>
              Specify any extra dishes, counters, adjustments or items you would like to include.
            </p>
            <textarea
              rows="5"
              value={customItems}
              onChange={(e) => setCustomItems(e.target.value)}
              placeholder="Example: Add Gobi Manchurian, Live Appam Counter, Fresh Fruit Juice, Saffron Payasam, replace Sambar with Vatha Kuzhambu..."
              className="form-input resize-none"
              style={{ display: "block" }}
            />
          </motion.div>

          {/* ── SELECTED PACKAGE SUMMARY ──────────────── */}
          {selectedMenu && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-3xl p-8 border-2 bg-white/60 shadow-sm border-[#B88E2F]/40"
            >
              <h2 className="text-xl font-bold mb-4 font-marcellus text-[#4A2E1B] tracking-wide">
                📋 Selection Summary
              </h2>
              <div className="space-y-3 font-semibold text-stone-700">
                <p className="text-sm">
                  <strong>Selected Base Package:</strong> {selectedMenu}
                </p>
                {customItems && (
                  <p className="text-sm">
                    <strong>Custom Requests:</strong> {customItems}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* ── PROCEED BUTTON ────────────────────────── */}
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => navigate("/booking")}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(227,131,79,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full text-base font-semibold font-marcellus text-white shadow-xl border-none"
              style={{
                background: "linear-gradient(135deg, #E3834F, #D46F35)",
                cursor: "pointer",
              }}
            >
              📋 Proceed to Booking
            </motion.button>
          </div>
        </div>
      </section>

      <FAQ faqs={[
        { question: "Can I completely customize the catering menu with JIP Caterers?", answer: "Yes! JIP Caterers offers full menu customization. You can start from a base tier (Normal, Elite, or Premium) and add, remove, or swap any items to perfectly match your preferences, dietary restrictions, and event theme." },
        { question: "What are the base menu tiers I can start from for customization?", answer: "You can choose from three starting points — Normal Menu (traditional banana leaf), Elite Menu (premium variety with welcome drinks), or Premium Menu (luxury with live counters and full spread) — and then customize from there." },
        { question: "Can I add specific dishes that are not in the standard menu?", answer: "Absolutely. You can request specific regional dishes, special curries, unique starters, or particular desserts not listed in our standard menus. Our culinary team will accommodate your request based on ingredient availability." },
        { question: "How do I communicate my custom menu requirements to JIP Caterers?", answer: "Simply select your preferred base menu on this page, list any additional custom requirements in the text box, and submit. Our team will reach out via WhatsApp or phone to confirm and finalise the details." },
        { question: "Is there a minimum or maximum guest count for a customized menu?", answer: "We accommodate events of all sizes — from intimate gatherings of 50 guests to grand receptions of 5000+. Your customized menu is priced and planned based on the final confirmed guest count." },
        { question: "Can I request a specific theme-based menu for my event?", answer: "Yes. We can curate a theme-based menu — traditional Chettinad spread, Kongu-style feast, festival-special dishes, or a fully vegan menu. Speak with our team to explore the options available." },
        { question: "What is the process for getting a price quote for a customized menu?", answer: "Once you submit your requirements through the form, our team will review your selections and share a detailed quote based on the menu items chosen, the number of guests, and the event location. Quotes are typically shared within 24 hours." },
        { question: "Can I include live food stations in my customized menu?", answer: "Yes! Live stations like Live Dosa Counter, Ice Cream Station, Fruit Salad Counter, and more can be included in your customized package. These are crowd favourites at receptions and add great energy to the event." },
      ]} />

      <Footer />
    </div>
  );
}

export default CustomMenu;