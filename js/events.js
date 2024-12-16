    async function fetchEventData() {
        try {
            const response = await fetch("https://67sxoyzalltf7cnmecge2sj5yq0bckqd.lambda-url.us-east-2.on.aws", {
                method: 'GET',
                headers: { 'x-api-key' : '7a055rda' }
            })

            //if response is !ok, AKA there's no return object, throw this error
            if (!response.ok){
                throw new Error(`HTTP ERROR, STATUS: ${response.status}`);
            }
            //otherwise, everything's good, parse the JSON data

            const data = await response.json(); 
            console.log("event data:", data);
            
            data.forEach(event => {
                const {EventName, EventSubtitle, TicketsRemaining, EventURL, EventThumbnail} = event;
                displayEvent(EventName, EventSubtitle, TicketsRemaining, EventURL, EventThumbnail);
            })


        }
        catch (error) {
            console.error("Error fetching event data:", error);
        }
    };

function displayEvent(name, subtitle, tickets, url, thumbnail) {
    console.log("displayEvent");
    const eventContainer = document.getElementById("event-list");
    if (!eventContainer) {
        console.error("Element with ID 'event-list' not found!");
        return;
    };

    const eventHTML = `
        <div class="event-item">
            <p>poopeefart</p>
            <div>${thumbnail}</div>
            <h2>${name}</h2>
            <p>${subtitle}</p>
            <p>Tickets Remaining: ${tickets}</p>
            <a href="${url}" target="_blank">View Event</a>
        </div>
    `;
    eventContainer.innerHTML += eventHTML; // Append the event's HTML to the container
};

document.addEventListener("DOMContentLoaded", () => {
    fetchEventData();
});

displayEvent("Haven Show 1", "Bands: Poster Child", 50, "https://example.com");

