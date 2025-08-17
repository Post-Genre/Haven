import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./event-item.css";
export default function EventItem({ title, date, doorsOpen, price, link, image, }) {
    function formatTime(timeStr) {
        if (!timeStr)
            return "TBA";
        //     console.log("formatTIme", timeStr);
        if (timeStr.includes(":")) {
            const [hours, minutes] = timeStr.split(":");
            const hour = parseInt(hours, 10);
            const ampm = hour >= 12 ? "PM" : "AM";
            const hour12 = hour % 12 || 12;
            if (minutes === "00") {
                return `${hour12}${ampm}`;
            }
            else {
                return `${hour12}:${minutes} ${ampm}`;
            }
        }
        return timeStr;
    }
    const [year, month, day] = date.split("-").map((num) => parseInt(num, 10));
    const eventDate = new Date(year, month - 1, day);
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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
    const formattedDate = `${dayNames[eventDate.getDay()]}, ${monthNames[eventDate.getMonth()]} ${day}`;
    const doorsTime = doorsOpen ? formatTime(doorsOpen) : "TBA";
    //   const eventCard = document.createElement("div");
    //   eventCard.className = "event-card";
    // let eventPrice = `$${price}`;
    let eventPrice = "TBA";
    if (price && price.length > 0) {
        const prices = price.map((ticket) => ticket.Price);
        const lowestPrice = Math.min(...prices);
        eventPrice = `$${lowestPrice.toFixed(2)}`;
    }
    // if (event.ticketTypes && event.ticketTypes.length > 0) {
    //     const prices = event.ticketTypes.map(ticket => ticket.Price);
    //     const lowestPrice = Math.min(...prices);
    //     price = `$${lowestPrice.toFixed(2)}`;
    // }
    return (_jsxs("div", { className: "full-event-item-container", style: { backgroundImage: `url(${image})` }, children: [_jsx("div", { className: "full-event-title-container", children: _jsx("h4", { children: title }) }), _jsxs("div", { className: "full-event-info-container", children: [_jsx("h6", { children: formattedDate }), _jsx("h6", { children: "|" }), _jsx("h6", { children: doorsTime }), _jsx("h6", { children: "|" }), _jsx("h6", { children: eventPrice }), _jsx("h6", { children: "|" }), _jsx("a", { href: link, target: "_blank", children: _jsx("h6", { children: _jsx("u", { children: "TICKETS" }) }) })] })] }));
}
//# sourceMappingURL=EventItem.js.map