import { jsx as _jsx } from "react/jsx-runtime";
import "./button.css";
export default function ButtonPrimary({ link, text }) {
    return (_jsx("div", { className: "button-container", children: _jsx("a", { target: "_blank", rel: "noopener noreferrer", className: "button-primary", href: link, children: text }) }));
}
//# sourceMappingURL=ButtonPrimary.js.map