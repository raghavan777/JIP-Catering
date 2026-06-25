import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import FloatingNav from "./components/floatingnav";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

import Landing from "./pages/landing";
import WhyJip from "./pages/whyjip";
import NormalMenu from "./pages/normalmenu";
import EliteMenu from "./pages/elitemenu";
import PremiumMenu from "./pages/premiummenu";
import CustomMenu from "./pages/customizedmenu";
import Booking from "./pages/booking";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If refreshed/loaded on a subpage, redirect to home page
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav />
      <ScrollToTop />

      <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #FFD1A9 0%, #F7EDD8 30%, #E8DEC9 60%, #FFD1A9 100%)" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/why-jip" element={<WhyJip />} />
          <Route path="/normal-menu" element={<NormalMenu />} />
          <Route path="/elite-menu" element={<EliteMenu />} />
          <Route path="/premium-menu" element={<PremiumMenu />} />
          <Route path="/custom-menu" element={<CustomMenu />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;