const messages = [
    {
        title: "You are my sunshine ☀️",
        text: "I love the way your smile brightens up my day. You mean everything to me.",
        imageQuery: "sunshine" 
    }
];

const messageContainer = document.getElementById("message-container");

async function fetchImage(query) {
    const apiKey = 'F9Z3nszKpx1FkZuB5RXahHv5u3BPpr9SAspz9j85AJ9EZIFhO4pggCso';
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

    const response = await fetch(url, {
        headers: {
            Authorization: apiKey
        }
    });

    const data = await response.json();
    return data.photos[0]?.src?.medium || 'https://via.placeholder.com/60';
}

async function createMessageCards() {
    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const card = document.createElement("div");
        card.classList.add("message-card");

        const imageUrl = await fetchImage(message.imageQuery);

        const img = document.createElement("img");
        img.src = imageUrl;
        card.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = message.title;
        card.appendChild(title);

        const text = document.createElement("p");
        text.textContent = message.text;
        card.appendChild(text);

        messageContainer.appendChild(card);

        setTimeout(() => {
            card.classList.add("fade-in");
        }, i * 300);
    }
}

createMessageCards();
//...........................