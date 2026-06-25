import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Disable browser's native scroll restoration so it doesn't
// try to remember scroll positions when navigating back/forward.
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'instant' ensures the jump happens before paint, avoiding a flash
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;