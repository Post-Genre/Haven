import { motion } from "motion/react";
import "./loading-icon.css";
import havenLogo from "../../assets/media/haven-church-logo.png";
import havenLogoBlack from "../../assets/media/haven-church-logo-black.png";

type LoadingIconProps = {
  blackLogo: boolean;
};

export default function LoadingIcon({ blackLogo }: LoadingIconProps) {
  return (
    <div>
      <motion.img
        src={blackLogo ? havenLogoBlack : havenLogo}
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
