import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import MarigoldShower from "../components/MarigoldShower";
import PageSEO from "../components/PageSEO";

const WHATSAPP_NUMBER = "919092881813";

const bookingSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Book JIP Caterers – Enquiry & Booking",
    "url": "https://www.jipcaterers.com/booking",
    "description": "Book JIP Caterers for your wedding, reception, engagement, housewarming or celebration in Tiruvallur and Chennai. Fill out the booking form or WhatsApp us at +91-9092881813 for instant confirmation.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jipcaterers.com" },
        { "@type": "ListItem", "position": 2, "name": "Book Now", "item": "https://www.jipcaterers.com/booking" }
      ]
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "JIP Caterers",
      "telephone": "+91-9092881813",
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "08:00",
        "closes": "21:00"
      }]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Catering Booking & Enquiry",
    "url": "https://www.jipcaterers.com/booking",
    "provider": {
      "@type": "Organization",
      "name": "JIP Caterers",
      "telephone": "+91-9092881813",
      "url": "https://www.jipcaterers.com"
    },
    "potentialAction": {
      "@type": "ReservationAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.jipcaterers.com/booking",
        "inLanguage": ["en", "ta"],
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I book JIP Caterers for my wedding or event?", "acceptedAnswer": { "@type": "Answer", "text": "Fill out the booking form on this page with your name, mobile number, event type, date, location, guest count, and preferred menu. Submit the form and our team will contact you on WhatsApp within 24 hours to confirm availability and discuss details." } },
      { "@type": "Question", "name": "How early should I book JIP Caterers for a wedding reception?", "acceptedAnswer": { "@type": "Answer", "text": "We strongly recommend booking at least 2 to 4 weeks in advance. During peak auspicious seasons (Thai, Panguni, Vaikasi months), dates fill up very quickly — early booking guarantees our best team and full attention for your event." } },
      { "@type": "Question", "name": "Can I book JIP Caterers via WhatsApp?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. After submitting the form, our team will immediately reach out on WhatsApp to confirm details. You can also directly WhatsApp us at +91-9092881813 for quick enquiries and booking discussions." } },
      { "@type": "Question", "name": "What is JIP Caterers' WhatsApp number for booking?", "acceptedAnswer": { "@type": "Answer", "text": "You can WhatsApp JIP Caterers at +91-9092881813 for instant booking enquiries, menu consultations, and event confirmations. Our team responds daily from 8 AM to 9 PM." } },
      { "@type": "Question", "name": "What types of events can I book JIP Caterers for?", "acceptedAnswer": { "@type": "Answer", "text": "You can book JIP Caterers for weddings, wedding receptions, engagements, housewarming ceremonies, birthday parties, corporate lunches, community festivals, and any other large-scale family or social celebrations." } },
      { "@type": "Question", "name": "Does JIP Caterers serve outside Tiruvallur and Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "JIP Caterers primarily serves Tiruvallur, Chennai, Poonamallee, Ambattur, Avadi, and Redhills. For events in other locations across Tamil Nadu, contact us at 9092881813 to discuss feasibility and logistics." } }
    ]
  }
];

const KolamPattern = () => (
  <svg className="w-48 h-48 opacity-10 rotate-slow text-[#D4AF37] pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <path d="M 50 5 Q 75 25, 95 50 Q 75 75, 50 95 Q 25 75, 5 50 Q 25 25, 50 5 Z" />
    <circle cx="50" cy="20" r="1.5" fill="currentColor" />
    <circle cx="50" cy="80" r="1.5" fill="currentColor" />
  </svg>
);

function Booking() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("jip_booking_form");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback to default
      }
    }
    return {
      name: "",
      mobile: "",
      eventType: "",
      eventDate: "",
      location: "",
      guests: "",
      menuType: "",
      foodItems: "",
      requirements: "",
    };
  });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    localStorage.setItem("jip_booking_form", JSON.stringify(updated));
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.mobile.trim()) newErrors.mobile = "Please enter your mobile number";
    if (!formData.eventType) newErrors.eventType = "Please select an event type";
    if (!formData.eventDate) newErrors.eventDate = "Please select the event date";
    if (!formData.location.trim()) newErrors.location = "Please enter the event location";
    if (!formData.guests.trim()) newErrors.guests = "Please enter guest count";
    if (!formData.menuType) newErrors.menuType = "Please select a menu type";
    return newErrors;
  };

  const sendWhatsApp = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorEl = document.querySelector(".error-field");
      if (firstErrorEl) firstErrorEl.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSending(true);

    const parts = formData.eventDate.split("-");
    const formattedDate = parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : formData.eventDate;

    const message = `Hello Jip Caterers,

I would like to enquire about catering service.

Customer Details:

Name: ${formData.name}
Mobile Number: ${formData.mobile}

Event Details:

Event Type: ${formData.eventType}
Event Date: ${formattedDate}
Event Location: ${formData.location}
Number of Guests: ${formData.guests}

Menu Details:

Selected Menu Type: ${formData.menuType}
Required Items / Custom Menu:
${formData.foodItems || "Not specified"}

Additional Requirements:
${formData.requirements || "None"}

Please contact me with more details.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open synchronously to avoid browser pop-up block
    window.open(url, "_blank");
    setSending(false);
    localStorage.removeItem("jip_booking_form");
    setFormData({
      name: "",
      mobile: "",
      eventType: "",
      eventDate: "",
      location: "",
      guests: "",
      menuType: "",
      foodItems: "",
      requirements: "",
    });
  };

  const inputClass = (fieldName) =>
    `form-input mt-2 ${errors[fieldName] ? "error-field border-red-500 shadow-red-100" : ""}`;

  const labelStyle = { fontFamily: "var(--font-body)", color: "#4A2E1B", fontWeight: 700, fontSize: "0.9rem" };

  return (
    <div className="relative">
      <PageSEO
        title="Book JIP Caterers | Wedding & Event Catering Enquiry – Tiruvallur & Chennai"
        description="Book JIP Caterers for your wedding, reception, engagement or housewarming. Fill our form or WhatsApp +91-9092881813. Serving Tiruvallur, Chennai, Poonamallee, Ambattur, Avadi & surrounding areas."
        keywords="book jip caterers, catering booking tiruvallur, wedding catering enquiry chennai, whatsapp catering booking, event catering form, housewarming catering booking, engagement catering tiruvallur"
        canonical="https://www.jipcaterers.com/booking"
        ogTitle="Book JIP Caterers | Wedding & Event Catering Enquiry"
        ogDescription="Book premium South Indian vegetarian catering for your wedding or celebration. WhatsApp +91-9092881813 or fill our booking form. JIP Caterers, Tiruvallur."
        ogUrl="https://www.jipcaterers.com/booking"
        ogType="website"
        structuredData={bookingSchemas}
        breadcrumbs={[{ name: "Book Now", url: "https://www.jipcaterers.com/booking" }]}
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
          className="max-w-2xl mx-auto relative z-10"
        >
          <span className="badge-traditional border border-orange-200">📋 Book Your Event</span>

          <div className="mt-6 min-h-[50px] overflow-visible text-center">
            <TypeAnimation
              sequence={[
                "Book Your Celebration",
                2000,
                "Reserve Heritage Catering",
                2000,
                "Plan Your Grand Feast",
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="font-cinzel text-[#4A2E1B] text-center"
              style={{
                fontSize: "clamp(1.3rem, 4.2vw, 2.4rem)",
                fontWeight: 800,
                display: "inline-block",
              }}
            />
          </div>

          <div className="gold-divider" />

          <p className="text-lg font-serif mt-4 leading-relaxed" style={{ color: "#7a5c40", fontFamily: "var(--font-serif)" }}>
            Submit your event details and customized menu preference to connect directly with our coordination team via WhatsApp.
          </p>

          {/* Contact quick links */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <a href="tel:9092881813"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-sm"
              style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(74,46,27,0.15)", color: "#4A2E1B", textDecoration: "none", fontFamily: "var(--font-body)" }}>
              📞 9092881813
            </a>
            <a href="tel:9551613736"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-sm"
              style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(74,46,27,0.15)", color: "#4A2E1B", textDecoration: "none", fontFamily: "var(--font-body)" }}>
              📞 9551613736
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── BOOKING FORM ──────────────────────────────── */}
      <section
        className="py-8 sm:py-16 px-4 sm:px-16 lg:px-28 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #E8DEC9 0%, #FAF1DF 50%, #FFD1A9 100%)" }}
      >
        <div className="absolute top-1/4 left-10 pointer-events-none opacity-10">
          <KolamPattern />
        </div>
        <div className="absolute bottom-20 right-10 pointer-events-none opacity-10">
          <KolamPattern />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="brass-frame rounded-3xl p-8 md:p-12"
          >
            {/* Section 1: Customer Details */}
            <div className="mb-10">
              <h2 className="text-xl font-bold font-marcellus mb-1 flex items-center gap-3 text-[#4A2E1B] tracking-wide">
                <span className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-white font-bold"
                  style={{ background: "#E3834F" }}>1</span>
                Customer Details
              </h2>
              <div className="h-0.5 mb-6 rounded-full" style={{ background: "linear-gradient(90deg, #E3834F, transparent)" }} />

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label style={labelStyle}>👤 Customer Name <span style={{ color: "#E3834F" }}>*</span></label>
                  <input type="text" name="name" onChange={handleChange} value={formData.name}
                    placeholder="Your full name" className={inputClass("name")} />
                  {errors.name && <p className="text-xs mt-1 text-red-500 font-semibold">{errors.name}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label style={labelStyle}>📞 Mobile Number <span style={{ color: "#E3834F" }}>*</span></label>
                  <input type="tel" name="mobile" onChange={handleChange} value={formData.mobile}
                    placeholder="Enter mobile number" className={inputClass("mobile")} />
                  {errors.mobile && <p className="text-xs mt-1 text-red-500 font-semibold">{errors.mobile}</p>}
                </div>
              </div>
            </div>

            {/* Section 2: Event Details */}
            <div className="mb-10">
              <h2 className="text-xl font-bold font-marcellus mb-1 flex items-center gap-3 text-[#4A2E1B] tracking-wide">
                <span className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-white font-bold"
                  style={{ background: "#B88E2F" }}>2</span>
                Event Details
              </h2>
              <div className="h-0.5 mb-6 rounded-full" style={{ background: "linear-gradient(90deg, #B88E2F, transparent)" }} />

              <div className="grid md:grid-cols-2 gap-6">
                {/* Event Type */}
                <div>
                  <label style={labelStyle}>🎉 Event Type <span style={{ color: "#E3834F" }}>*</span></label>
                  <select name="eventType" onChange={handleChange} value={formData.eventType}
                    className={inputClass("eventType")} style={{ cursor: "pointer" }}>
                    <option value="">Select Event Type</option>
                    <option>Wedding</option>
                    <option>Reception</option>
                    <option>Engagement</option>
                    <option>Birthday</option>
                    <option>Corporate Event</option>
                    <option>Family Function</option>
                    <option>Other</option>
                  </select>
                  {errors.eventType && <p className="text-xs mt-1 text-red-500 font-semibold">{errors.eventType}</p>}
                </div>

                {/* Event Date */}
                <div>
                  <label style={labelStyle}>📅 Event Date <span style={{ color: "#E3834F" }}>*</span></label>
                  <input type="date" name="eventDate" onChange={handleChange} value={formData.eventDate}
                    className={inputClass("eventDate")} style={{ cursor: "pointer" }} />
                  {errors.eventDate && <p className="text-xs mt-1 text-red-500 font-semibold">{errors.eventDate}</p>}
                </div>

                {/* Event Location */}
                <div>
                  <label style={labelStyle}>📍 Event Location <span style={{ color: "#E3834F" }}>*</span></label>
                  <input type="text" name="location" onChange={handleChange} value={formData.location}
                    placeholder="Venue / Area / City" className={inputClass("location")} />
                  {errors.location && <p className="text-xs mt-1 text-red-500 font-semibold">{errors.location}</p>}
                </div>

                {/* Number of Guests */}
                <div>
                  <label style={labelStyle}>👥 Number of Guests <span style={{ color: "#E3834F" }}>*</span></label>
                  <input type="number" name="guests" onChange={handleChange} value={formData.guests}
                    placeholder="Approx. guest count" min="1" className={inputClass("guests")} />
                  {errors.guests && <p className="text-xs mt-1 text-red-500 font-semibold">{errors.guests}</p>}
                </div>
              </div>
            </div>

            {/* Section 3: Menu Details */}
            <div className="mb-10">
              <h2 className="text-xl font-bold font-marcellus mb-1 flex items-center gap-3 text-[#4A2E1B] tracking-wide">
                <span className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-white font-bold"
                  style={{ background: "#234927" }}>3</span>
                Menu Details
              </h2>
              <div className="h-0.5 mb-6 rounded-full" style={{ background: "linear-gradient(90deg, #234927, transparent)" }} />

              {/* Menu Type */}
              <div className="mb-6">
                <label style={labelStyle}>🍽 Selected Menu Type <span style={{ color: "#E3834F" }}>*</span></label>
                <select name="menuType" onChange={handleChange} value={formData.menuType}
                  className={inputClass("menuType")} style={{ cursor: "pointer" }}>
                  <option value="">Select Menu Type</option>
                  <option>Normal Menu</option>
                  <option>Elite Menu</option>
                  <option>Premium Menu</option>
                  <option>Customized Menu</option>
                </select>
                {errors.menuType && <p className="text-xs mt-1 text-red-500 font-semibold">{errors.menuType}</p>}
              </div>

              {/* Food Items */}
              <div className="mb-6">
                <label style={labelStyle}>🥗 Required Food Items / Custom Menu</label>
                <textarea rows={4} name="foodItems" onChange={handleChange} value={formData.foodItems}
                  placeholder="Paste your customized menu or mention specific dishes..."
                  className="form-input mt-2 resize-none" style={{ display: "block" }} />
              </div>

              {/* Additional Requirements */}
              <div>
                <label style={labelStyle}>📝 Additional Requirements</label>
                <textarea rows={3} name="requirements" onChange={handleChange} value={formData.requirements}
                  placeholder="Any special arrangements, services, pricing preferences..."
                  className="form-input mt-2 resize-none" style={{ display: "block" }} />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(37,211,102,0.5)" }}
                whileTap={{ scale: 0.97 }}
                onClick={sendWhatsApp}
                disabled={sending}
                className="inline-flex items-center gap-3 px-12 py-4 rounded-full text-white text-base font-bold shadow-xl transition-all border-none"
                style={{
                  background: sending
                    ? "linear-gradient(135deg, #20ba5a, #16a34a)"
                    : "linear-gradient(135deg, #25D366, #20ba5a)",
                  cursor: sending ? "not-allowed" : "pointer",
                }}
              >
                {sending ? (
                  <>
                    <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                      ⏳
                    </motion.span>
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    💬 Send Enquiry on WhatsApp
                  </>
                )}
              </motion.button>

              <p className="mt-4 text-xs font-semibold" style={{ color: "#7a5c40", fontFamily: "var(--font-body)" }}>
                Fields marked with <span style={{ color: "#E3834F" }}>*</span> are required. Your details will be sent directly to WhatsApp for prompt execution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ faqs={[
        { question: "How do I book JIP Caterers for my wedding or event?", answer: "Fill out the booking form on this page with your name, mobile number, event type, date, location, guest count, and preferred menu. Submit the form and our team will contact you on WhatsApp within 24 hours to confirm availability and discuss details." },
        { question: "What information do I need to provide when booking JIP Caterers?", answer: "You need to provide your full name, mobile number, event type (wedding, reception, engagement, etc.), event date, venue/location, estimated guest count, and preferred menu package. Any special food requests can also be mentioned." },
        { question: "How early should I book JIP Caterers for a wedding reception?", answer: "We strongly recommend booking at least 2 to 4 weeks in advance. During peak auspicious seasons (Thai, Panguni, Vaikasi months), dates fill up very quickly — early booking guarantees our best team and full attention for your event." },
        { question: "Can I book JIP Caterers via WhatsApp?", answer: "Yes. After submitting the form, our team will immediately reach out on WhatsApp to confirm details. You can also directly WhatsApp us at 9092881813 or 9092881813 for quick enquiries and booking discussions." },
        { question: "What types of events can I book JIP Caterers for?", answer: "You can book JIP Caterers for weddings, wedding receptions, engagements, housewarming ceremonies, birthday parties, corporate lunches, community festivals, and any other large-scale family or social celebrations." },
        { question: "Is there a minimum guest count required to book JIP Caterers?", answer: "We cater for events of all sizes. Whether it's an intimate function of 50 guests or a grand reception of 5000+, JIP Caterers can plan and execute the perfect catering experience for your event." },
        { question: "Can I change my menu selection after making a booking?", answer: "Yes, menu changes can be accommodated if requested at least 1 week before the event date. Our team will work with you to adjust the menu based on ingredient availability and kitchen planning." },
        { question: "Will my booking form data be saved if I exit the page?", answer: "Yes. Your form data is automatically saved in your browser so you can return and continue filling it out without losing any information. Just revisit the booking page and your previous entries will be restored." },
      ]} />

      <Footer />
    </div>
  );
}

export default Booking;