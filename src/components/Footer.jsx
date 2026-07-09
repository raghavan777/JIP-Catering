import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1_transparent.png";

function Footer() {
  const navigate = useNavigate();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a3a1e 0%, #122B15 50%, #0d2010 100%)",
      }}
    >
      {/* Decorative top border */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, #B88E2F, #D4AF37, transparent)" }} />

      {/* Decorative leaf pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(212,175,55,0.4) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(212,175,55,0.3) 0%, transparent 40%)"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 sm:py-14">
        <div className="grid md:grid-cols-4 gap-10 items-start">

          {/* Brand Column */}
          <div className="text-center">
            <img
              src={logo}
              alt="Jip Caterers Logo"
              className="mb-3 mx-auto"
              style={{
                width: "180px",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
            <div className="w-16 h-0.5 mb-4 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}>
              Authentic South Indian vegetarian catering for weddings, receptions, engagements, birthday parties, corporate events &amp; all special celebrations.
            </p>
            <p className="mt-4 text-xs font-medium tracking-widest uppercase" style={{ color: "#D4AF37", fontFamily: "var(--font-body)" }}>
              Traditional • Hygienic • Trusted
            </p>
          </div>

          {/* Navigation Column */}
          <div className="text-center">
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: "#D4AF37", fontFamily: "var(--font-display)" }}>
              Explore
            </h3>
            <nav className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Why Jip Caterers", path: "/why-jip" },
                { label: "Normal Menu", path: "/normal-menu" },
                { label: "Elite Menu", path: "/elite-menu" },
                { label: "Premium Menu", path: "/premium-menu" },
                { label: "Customize Menu", path: "/custom-menu" },
                { label: "Book Now", path: "/booking" },
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="block w-full text-sm transition-all duration-200 hover:translate-x-1"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "var(--font-body)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  onMouseEnter={e => e.target.style.color = "#D4AF37"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Address Column */}
          <div className="text-center">
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: "#D4AF37", fontFamily: "var(--font-display)" }}>
              Our Location
            </h3>
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}>
                Pallipat Road,<br />
                Jip Caterers in Podaturpeta,<br />
                Tiruvallur
              </p>
              <a
                href="https://maps.google.com/?q=Podaturpeta,Tiruvallur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-wider uppercase transition-colors"
                style={{ color: "#D4AF37", textDecoration: "none", fontFamily: "var(--font-body)" }}
                onMouseEnter={e => e.target.style.color = "#F0D060"}
                onMouseLeave={e => e.target.style.color = "#D4AF37"}
              >
                View on Map →
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: "#D4AF37", fontFamily: "var(--font-display)" }}>
              Contact Us
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href="tel:9092881813"
                className="flex items-center justify-center md:justify-end gap-2 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontFamily: "var(--font-body)" }}
              >
                <span>📞</span>
                <span>9092881813</span>
              </a>
              <a
                href="tel:9551613736"
                className="flex items-center justify-center md:justify-end gap-2 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontFamily: "var(--font-body)" }}
              >
                <span>📞</span>
                <span>9551613736</span>
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919092881813"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 hover:scale-105 whatsapp-btn"
              style={{
                background: "linear-gradient(135deg, #25D366, #20ba5a)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
              }}
            >
              <span>💬</span> WhatsApp Us
            </a>

            <div className="mt-5">
              <motion.button
                onClick={() => navigate("/booking")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm shadow-lg border transition-all duration-300"
                style={{
                  background: "transparent",
                  borderColor: "#D4AF37",
                  color: "#D4AF37",
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                }}
              >
                ✨ Book Your Event
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(212,175,55,0.2)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>
            © 2026 Jip Caterers. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(212,175,55,0.5)", fontFamily: "var(--font-body)" }}>
            Serving with love Since 2015 🌿
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
