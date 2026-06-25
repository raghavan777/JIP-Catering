import splash from "../assets/splash.png";
import { motion } from "framer-motion";

function SplashScreen() {
  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFD1A9 0%, #F7E5CE 30%, #E8DEC9 65%, #FFD1A9 100%)",
      }}
    >
      {/* Decorative radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(35,73,39,0.1) 0%, transparent 70%)" }} />
      </div>

      {/* Floating gold particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            background: "#D4AF37",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.5,
          }}
          animate={{
            y: [-20, -80],
            opacity: [0.5, 0],
            scale: [1, 0.5],
          }}
          transition={{
            duration: Math.random() * 2 + 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Main logo */}
      <motion.div className="relative z-10">
        <motion.img
          src={splash}
          alt="JIP Caterers"
          className="w-[380px] md:w-[600px]"
          initial={{
            opacity: 0,
            scale: 0.55,
          }}
          animate={{
            opacity: 1,
            scale: [0.55, 1.02, 0.98, 1],
            filter: [
              "drop-shadow(0 0 0px #D4AF37)",
              "drop-shadow(0 0 20px #D4AF37)",
              "drop-shadow(0 0 45px rgba(212,175,55,0.8))",
              "drop-shadow(0 0 20px #D4AF37)",
            ],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.4, 0.7, 1],
            ease: "easeInOut",
          }}
        />

        {/* Tagline under logo */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-3 text-sm font-medium tracking-widest uppercase"
          style={{ color: "#B88E2F", fontFamily: "var(--font-body)" }}
        >
          Tradition in Every Leaf
        </motion.p>
      </motion.div>
    </div>
  );
}

export default SplashScreen;