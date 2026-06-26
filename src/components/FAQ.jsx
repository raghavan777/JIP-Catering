import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Catering Cloche Icon Component ────────────────────────────────── */
const CateringIcon = ({ active }) => {
  return (
    <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4">
      <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 100 100" fill="currentColor">
        {/* Platter (Plate base) */}
        <path d="M10,75 L90,75 C90,75 90,80 85,82 C80,84 65,85 50,85 C35,85 20,84 15,82 C10,80 10,75 10,75 Z" fill="#B88E2F" />
        <path d="M5,73 L95,73 C95,73 97,76 90,76 L10,76 C3,76 5,73 5,73 Z" fill="#D4AF37" />

        {/* Steaming effects when open/active */}
        {active && (
          <>
            <motion.path
              d="M32,40 Q35,28 31,18 Q27,8 32,-2"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1], opacity: [0, 0.8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M50,40 Q47,26 53,13 Q59,0 50,-5"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1], opacity: [0, 0.9, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.path
              d="M68,40 Q65,28 69,18 Q73,8 68,-2"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1], opacity: [0, 0.8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.6 }}
            />
          </>
        )}
      </svg>

      {/* Cloche Lid (lifts and tilts on hover/open) */}
      <motion.div
        className="absolute top-[18%] left-[15%] w-[70%] h-[50%] pointer-events-none"
        animate={active ? {
          y: -8,
          rotate: -12,
          x: -3
        } : {
          y: 0,
          rotate: 0,
          x: 0
        }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
      >
        <svg className="w-full h-full text-[#D4AF37]" viewBox="0 0 70 50" fill="currentColor">
          {/* Dome cover */}
          <path d="M5,48 C5,20 20,5 35,5 C50,5 65,20 65,48 Z" />
          {/* Top loop handle */}
          <circle cx="35" cy="5" r="4.5" fill="none" stroke="#B88E2F" strokeWidth="2.5" />
          {/* Bottom rim edge */}
          <rect x="2" y="44" width="66" height="4" rx="2" fill="#B88E2F" />
        </svg>
      </motion.div>
    </div>
  );
};


/* ─── Kolam Watermark ────────────────────────────────────────────────── */
const KolamWatermark = ({ className = "" }) => (
  <svg
    className={`absolute opacity-10 text-[#D4AF37] pointer-events-none select-none rotate-slow ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <path d="M 50 5 Q 75 25, 95 50 Q 75 75, 50 95 Q 25 75, 5 50 Q 25 25, 50 5 Z" />
    <path d="M 50 15 Q 70 30, 85 50 Q 70 70, 50 85 Q 30 70, 15 50 Q 30 30, 50 15 Z" strokeDasharray="2,2" />
    <circle cx="50" cy="20" r="1" fill="currentColor" />
    <circle cx="50" cy="80" r="1" fill="currentColor" />
    <circle cx="20" cy="50" r="1" fill="currentColor" />
    <circle cx="80" cy="50" r="1" fill="currentColor" />
  </svg>
);

const faqs = [
  {
    question: "Do you serve only vegetarian food?",
    answer: "Yes. JIP Caterers specializes exclusively in premium, pure South Indian vegetarian catering, ensuring traditional banana leaf service with authentic flavors and strict hygiene protocols."
  },
  {
    question: "What types of events do you cater?",
    answer: "We provide professional catering services for weddings, wedding receptions, engagements, housewarming ceremonies, birthdays, corporate events, and other family functions of all scales."
  },
  {
    question: "What menu packages do you offer?",
    answer: "We offer four main tiers: Normal Menu (Authentic traditional feast), Elite Menu (Enhanced variety & spread), Premium Menu (Luxury buffet & reception feast), and Customized Menu (Tailored gastronomy matching your guest preferences and budget)."
  },
  {
    question: "Can I customize the menu?",
    answer: "Absolutely. We encourage menu customization. You can choose specific starters, main course curries, desserts, and traditional accompaniments according to your preferences and guest choices."
  },
  {
    question: "Do you provide live food counters?",
    answer: "Yes! We set up interactive live stations, including Live Dosa Counters (variety of dosas served hot), Ice Cream Counters, Fruit Salad with Ice Cream, and other traditional live stations depending on availability."
  },
  {
    question: "How early should I book your services?",
    answer: "We highly recommend booking at least 2 to 4 weeks in advance. During the peak wedding and auspicious seasons, dates fill up rapidly, so early reservation ensures we can commit our best staff to your event."
  },
  {
    question: "What is included in the banana leaf service?",
    answer: "Our authentic banana leaf service includes fresh, sanitised banana leaves, welcome drinks, starters, full multi-course main meals, desserts, traditional accompaniments (papadum, pickle, payasam), and dedicated professional serving staff."
  }
];

export default function FAQ({ faqs: faqsProp }) {
  const activeFaqs = faqsProp && faqsProp.length > 0 ? faqsProp : faqs;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Parent animation configuration for staggering child items
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section
      className="relative py-10 sm:py-20 px-4 sm:px-16 lg:px-28 xl:px-32 overflow-hidden border-t-2"
      style={{
        background: "linear-gradient(135deg, #FDF3E7 0%, #F8ECD5 50%, #FDF3E7 100%)",
        borderColor: "rgba(212,175,55,0.15)"
      }}
    >
      {/* Kolam Watermarks */}
      <KolamWatermark className="w-64 h-64 -right-16 -top-16" />
      <KolamWatermark className="w-56 h-56 -left-16 -bottom-16 opacity-10" />

      {/* Decorative floral elements */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none select-none text-xl sm:text-2xl tracking-widest text-[#D4AF37]">
        ❀ ❀ ❀ 🍽 ❀ ❀ ❀
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest uppercase mb-3 block font-marcellus text-[#B88E2F]"
          >
            Clear Your Doubts
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 font-cinzel leading-tight text-[#234927]"
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Animated Gold Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
            className="h-[2px] w-24 sm:w-36 mx-auto mb-6"
            style={{
              background: "linear-gradient(90deg, transparent, #B88E2F, #D4AF37, #B88E2F, transparent)"
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-sm sm:text-base max-w-xl mx-auto text-stone-600 font-serif leading-relaxed"
          >
            Everything you need to know about our South Indian catering service, traditional banana leaf feasts, and event bookings.
          </motion.p>
        </div>

        {/* FAQs List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 text-left"
        >
          {activeFaqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full"
              >
                <motion.div
                  layout="position"
                  className={`border rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-300 ${isOpen
                      ? "bg-white/90 border-[#D4AF37] shadow-[0_12px_28px_rgba(212,175,55,0.16)]"
                      : "bg-white/45 border-[#E8DEC9] hover:bg-white/70 hover:border-[#D4AF37] hover:shadow-[0_8px_20px_rgba(212,175,55,0.06)]"
                    }`}
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => toggleFAQ(index)}
                  role="button"
                  aria-expanded={isOpen}
                  data-cursor-hover
                >
                  {/* Header / Question row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <CateringIcon active={isOpen} />
                      <h3 className="font-semibold font-marcellus text-sm sm:text-base md:text-lg tracking-wide text-[#234927] select-none">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Toggle Lotus-like Chevron Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex items-center justify-center w-8 h-8 rounded-full border flex-shrink-0 transition-colors ${isOpen
                          ? "border-[#D4AF37] text-white bg-[#D4AF37] shadow-sm"
                          : "border-[#E8DEC9] text-[#B88E2F] bg-transparent"
                        }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Body / Answer Section */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto", marginTop: 16 },
                          collapsed: { opacity: 0, height: 0, marginTop: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-[#E8DEC9] text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed font-serif">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Small Bottom traditional touch */}
        <div className="mt-12 flex justify-center items-center gap-4 text-xs font-serif text-[#7a5c40] opacity-85">
          <span>🌿 100% Pure South Indian Veg</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span>🍽 Premium Feast Experience</span>
        </div>
      </div>
    </section>
  );
}
