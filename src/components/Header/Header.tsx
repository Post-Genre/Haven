import "./header.css";
// import { useLocation } from "react-router";
import ChurchAnimation from "../ChurchAnimation/ChurchAnimation";

type HeaderProps = {
  onClick?: () => void; // optional click handler
};
export default function Header({}: HeaderProps) {

  return (
    <>
        <div className="header-container" id="home">
          <ChurchAnimation />
        </div>
    </>
  );
}
