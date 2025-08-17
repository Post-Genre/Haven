import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./events.css";
// import events from "./events-list";
import banner1 from "../../assets/media/banners/banner1.jpg";
import TitleContainer from "../TitleContainer/TitleContainer";
import EventItem from "../EventItem/EventItem";
import bottom1 from "../../assets/media/banners/bottom1.jpg";
import { useState, useEffect } from "react";
export default function UpcomingEvents() {
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);
    function sortEventsByDate(events) {
        return events.sort((a, b) => {
            const [yearA, monthA, dayA] = a.EventDate.split("-").map(Number);
            const [yearB, monthB, dayB] = b.EventDate.split("-").map(Number);
            const dateA = new Date(yearA, monthA - 1, dayA);
            const dateB = new Date(yearB, monthB - 1, dayB);
            return dateA.getTime() - dateB.getTime();
        });
    }
    function getUpcomingEvents(events) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return events.filter((event) => {
            const [year, month, day] = event.EventDate.split("-").map((num) => parseInt(num, 10));
            const eventDate = new Date(year, month - 1, day);
            return eventDate >= today && event.ShowPublic;
        });
    }
    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch("https://67sxoyzalltf7cnmecge2sj5yq0bckqd.lambda-url.us-east-2.on.aws", {
                method: "GET",
                headers: { "x-api-key": "7a055rda" },
            });
            if (!response.ok) {
                throw new Error(`HTTP ERROR, STATUS: ${response.status}`);
            }
            const data = await response.json();
            if (data && data.length > 0) {
                const sortedEvents = sortEventsByDate(data);
                setEvents(getUpcomingEvents(sortedEvents));
                setLoading(false);
            }
        }
        catch (error) {
            console.error("Error fetching event data:", error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    if (loading) {
        return (_jsxs("div", { className: "events-container", children: [_jsx(TitleContainer, { text: "EVENTS", image: banner1 }), _jsxs("div", { className: "events-list-container", children: [_jsx("img", { src: bottom1, alt: "", className: "bg-image" }), _jsx("div", { className: "event-items-wrapper", children: _jsx("h6", { children: "Loading events, please wait!" }) })] })] }));
    }
    return (_jsxs("div", { className: "events-container", children: [_jsx(TitleContainer, { text: "EVENTS", image: banner1 }), _jsxs("div", { className: "events-list-container", children: [_jsx("img", { src: bottom1, alt: "", className: "bg-image" }), _jsx("div", { className: "event-items-wrapper", children: events && events.length > 0
                            ? events.map((event, index) => {
                                return (_jsx(EventItem, { title: event.EventName, date: event.EventDate, doorsOpen: event.EventDoorsOpen, price: event.ticketTypes, link: event.EventUrl, image: event.EventThumbnail }));
                            })
                            : null })] })] }));
}
//# sourceMappingURL=Events.js.map