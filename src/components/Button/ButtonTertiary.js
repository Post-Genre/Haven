import { jsx as _jsx } from "react/jsx-runtime";
import "./button.css";
export default function ButtonTertiary({ link, text }) {
    return (_jsx("div", { className: "button-container", children: _jsx("a", { target: "_blank", rel: "noopener noreferrer", className: "button-tertiary", href: link, children: text }) }));
}
//# sourceMappingURL=ButtonTertiary.js.map