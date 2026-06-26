import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Utensils, Star, Crown, ClipboardList, Bell, X, Menu } from "lucide-react";

const items = [
  { id: 0, icon: <Home size={20} />, label: "Home", path: "/", emoji: "🏠" },
  { id: 1, icon: <User size={20} />, label: "Why Jip", path: "/why-jip", emoji: "🌿" },
  { id: 2, icon: <Utensils size={20} />, label: "Normal Menu", path: "/normal-menu", emoji: "🍃" },
  { id: 3, icon: <Star size={20} />, label: "Elite Menu", path: "/elite-menu", emoji: "⭐" },
  { id: 4, icon: <Crown size={20} />, label: "Premium Menu", path: "/premium-menu", emoji: "👑" },
  { id: 5, icon: <ClipboardList size={20} />, label: "Customize", path: "/custom-menu", emoji: "✨" },
  { id: 6, icon: <Bell size={20} />, label: "Book Now", path: "/booking", emoji: "📋" },
];

/* ── DESKTOP pill nav ─────────────────────────── */
function DesktopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef(null);
  const btnRefs = useRef([]);
  const active = items.findIndex((item) => item.path === location.pathname);

  useEffect(() => {
    const updateIndicator = () => {
      const btn = btnRefs.current[active];
      const container = containerRef.current;
      if (!btn || !container) return;
      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicatorStyle({ width: btnRect.width, left: btnRect.left - containerRect.left });
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  return (
    <div className="hidden sm:block fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-3">
      <div
        ref={containerRef}
        className="relative flex items-center justify-between rounded-full px-2 py-2"
        style={{
          background: "rgba(245, 230, 211, 0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 4px 24px rgba(74,46,27,0.18), 0 0 0 1px rgba(227,131,79,0.25)",
          border: "1px solid rgba(227,131,79,0.2)",
        }}
      >
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => (btnRefs.current[index] = el)}
            onClick={() => navigate(item.path)}
            title={item.label}
            className="relative z-20 flex flex-col items-center justify-center flex-1 px-2 py-1.5 transition-colors duration-200"
            style={{
              color: active === index ? "#fff" : "#4A2E1B",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
            }}
          >
            <div className="z-10">{item.icon}</div>
            <span className="text-[10px] mt-0.5 font-medium block leading-tight">
              {item.label}
            </span>
          </button>
        ))}
        <motion.div
          animate={indicatorStyle}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="absolute top-1 bottom-1 rounded-full"
          style={{
            background: "linear-gradient(135deg, #E3834F, #D46F35)",
            boxShadow: "0 4px 15px rgba(227,131,79,0.4)",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
}

/* ── MOBILE nav — 100% CSS transitions, zero Framer Motion ── */
function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const active = items.findIndex((item) => item.path === location.pathname);

  const handleNav = (path) => {
    setOpen(false);
    navigate(path);
  };

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <div className="sm:hidden">
      {/* Backdrop — pure CSS opacity transition, no JS animation */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(20,10,3,0.52)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.18s ease",
        }}
      />

      {/* Drawer — pure CSS transform transition, GPU accelerated */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderRadius: "24px 24px 0 0",
          background: "#FDF0E4",
          boxShadow: "0 -4px 24px rgba(74,46,27,0.18)",
          borderTop: "1.5px solid rgba(227,131,79,0.22)",
          willChange: "transform",
          transform: open ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.22s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      >
        {/* Handle */}
        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px" }}>
          <div style={{ width: 40, height: 4, borderRadius: 9999, background: "rgba(74,46,27,0.18)" }} />
        </div>

        {/* Brand header */}
        <div style={{
          padding: "8px 24px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(227,131,79,0.14)",
        }}>
          <div>
            <p className="font-cinzel font-bold text-lg tracking-widest" style={{ color: "#4A2E1B" }}>
              JIP CATERERS
            </p>
            <p className="text-xs font-medium" style={{ color: "#E3834F", fontFamily: "var(--font-body)" }}>
              🌿 South Indian Heritage Catering
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(227,131,79,0.1)",
              border: "1px solid rgba(227,131,79,0.18)",
              color: "#4A2E1B",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav grid */}
        <div style={{ padding: "16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {items.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.path)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 16,
                  textAlign: "left",
                  cursor: "pointer",
                  background: isActive ? "linear-gradient(135deg,#E3834F,#D46F35)" : "#fff",
                  border: isActive ? "none" : "1px solid rgba(227,131,79,0.16)",
                  boxShadow: isActive ? "0 4px 12px rgba(227,131,79,0.28)" : "0 1px 3px rgba(74,46,27,0.06)",
                  transition: "transform 0.08s ease",
                }}
                onTouchStart={(e) => { e.currentTarget.style.transform = "scale(0.96)"; }}
                onTouchEnd={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                <span style={{ fontSize: 20 }}>{item.emoji}</span>
                <span style={{
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  color: isActive ? "#fff" : "#4A2E1B",
                }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Contact strip */}
        <div style={{
          margin: "4px 16px 24px",
          borderRadius: 16,
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg,#1A3A21,#0E2211)",
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#D4AF37", fontFamily: "var(--font-body)" }}>
              📞 Quick Contact
            </p>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "var(--font-body)" }}>
              9445025504
            </p>
          </div>
          <a
            href="https://wa.me/919445025504"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "8px 16px",
              borderRadius: 9999,
              fontSize: 12, fontWeight: 700, color: "#fff",
              background: "linear-gradient(135deg,#25D366,#20ba5a)",
              textDecoration: "none",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* FAB — plain button, instant response */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 20,
          zIndex: 55,
          width: 56,
          height: 56,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: open
            ? "linear-gradient(135deg,#E3834F,#D46F35)"
            : "linear-gradient(135deg,#4A2E1B,#7a4d30)",
          boxShadow: "0 4px 20px rgba(74,46,27,0.38)",
          border: "2.5px solid rgba(212,175,55,0.5)",
          cursor: "pointer",
          transition: "background 0.15s ease",
        }}
      >
        {open ? <X size={22} color="#fff" /> : <Menu size={22} color="#D4AF37" />}
      </button>
    </div>
  );
}

function FloatingNav() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}

export default FloatingNav;