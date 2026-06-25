import traditionalGarland from "../assets/traditional_garland.png";
import { motion } from "framer-motion";

function SwayingGarland({ className = "" }) {
  return (
    <div className={`absolute top-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-10 ${className}`}>
      <motion.div
        className="w-full"
        style={{ willChange: "transform" }}
        animate={{
          y: [0, 4, 0],
          rotate: [-0.4, 0.4, -0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex w-[300%] md:w-[100%] justify-between items-start opacity-95 drop-shadow-[0_5px_8px_rgba(74,46,27,0.25)]">
          <img src={traditionalGarland} alt="Garland Decoration" className="h-16 sm:h-24 md:h-[95px] w-1/3 md:w-1/3 object-fill" />
          <img src={traditionalGarland} alt="Garland Decoration" className="h-16 sm:h-24 md:h-[95px] w-1/3 md:w-1/3 object-fill" />
          <img src={traditionalGarland} alt="Garland Decoration" className="h-16 sm:h-24 md:h-[95px] w-1/3 md:w-1/3 object-fill" />
        </div>
      </motion.div>
    </div>
  );
}

export default SwayingGarland;
