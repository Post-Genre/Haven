import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./footer.css";
import havenLogo from "../../assets/media/havenpngvirile2.png";
import { FaFacebookF, FaDiscord, FaInstagram, FaEnvelope, FaI, } from "react-icons/fa6";
export default function Footer() {
    return (_jsxs("div", { className: "footer-container", children: [_jsx("img", { src: havenLogo, alt: "" }), _jsxs("div", { className: "address-and-icon-container", children: [_jsx("div", { className: "address-container", children: _jsxs("h5", { children: ["401 Atwood Street ", _jsx("br", {}), "Pittsburgh, PA, 15213"] }) }), _jsxs("div", { className: "icon-container", children: [_jsx("div", { className: "fa-icon", children: _jsx(FaEnvelope, { size: 48, color: "white" }) }), _jsx("div", { className: "fa-icon", children: _jsx(FaInstagram, { size: 48, color: "white" }) }), _jsx("div", { className: "fa-icon", children: _jsx(FaFacebookF, { size: 48, color: "white" }) }), _jsx("div", { className: "fa-icon", children: _jsx(FaDiscord, { size: 48, color: "white" }) })] })] }), _jsx("p", { className: "smallest-font", children: "\u00A92025 Post Genre. All Rights Reserved." })] }));
}
//# sourceMappingURL=Footer.js.map