import { motion } from "motion/react";
import "./loading-icon.css";
import havenLogo from "../../assets/media/haven-church-logo.png";

export default function LoadingIcon() {
  return (
    <div>
      <motion.img
        src={havenLogo}
        alt="Haven Church Logo"
        className="loading-icon-logo"
        animate={{ rotateY: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 2.5,
          ease: "linear",
        }}
      />
    </div>
  );
}
