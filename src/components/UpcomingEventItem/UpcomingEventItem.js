import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./upcoming-event-item.css";
export default function UpcomingEventItem({ title, date, link, }) {
    const [year, month, day] = date.split("-").map((num) => parseInt(num, 10));
    const eventDate = new Date(year, month - 1, day);
    const monthNames = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ];
    const formattedDate = `${monthNames[eventDate.getMonth()]} ${day}`;
    return (_jsxs("div", { className: "event-item-container", children: [_jsx("div", { className: "event-title-container", children: _jsx("h4", { children: title }) }), _jsxs("div", { className: "event-info-container", children: [_jsx("h6", { className: "date-container", children: formattedDate }), _jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "tickets-container", children: "TICKETS" })] })] }));
}
//# sourceMappingURL=UpcomingEventItem.js.map