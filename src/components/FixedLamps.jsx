import brassLamp from "../assets/brass_lamp.png";
import { motion } from "framer-motion";

function FixedLamps() {
  return (
    <div className="pointer-events-none select-none">
      {/* Left Fixed Lamp */}
      <motion.div
        className="fixed bottom-6 left-1.5 sm:left-4 z-40"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={brassLamp}
          alt="Traditional Brass Lamp Left"
          className="w-8 sm:w-12 lg:w-20 drop-shadow-[0_4px_10px_rgba(74,46,27,0.25)] flicker-lamp"
        />
      </motion.div>

      {/* Right Fixed Lamp */}
      <motion.div
        className="fixed bottom-6 right-1.5 sm:right-4 z-40"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={brassLamp}
          alt="Traditional Brass Lamp Right"
          className="w-8 sm:w-12 lg:w-20 drop-shadow-[0_4px_10px_rgba(74,46,27,0.25)] flicker-lamp"
        />
      </motion.div>
    </div>
  );
}

export default FixedLamps;
