import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./title-container.css";
export default function TitleContainer({ image, text }) {
    console.log(image);
    return (_jsxs("div", { className: "title-container", style: { display: "grid" }, children: [_jsx("img", { src: "${image}" }), _jsx("h1", { children: text })] }));
}
//# sourceMappingURL=TitleContainer.js.map