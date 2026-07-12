let gaiaData = [];

fetch("gaia_dataset.json")
    .then(res => res.json())
    .then(data => {
        gaiaData = data;
        console.log(
            "GAIA Dataset Loaded:",
            gaiaData.length
        );

    })
    .catch(error => {

        console.error(
            "Dataset Load Error:",
            error
        );
    });

function greetingReply(text) {
    const greetings = [
        "hi",
        "hello",
        "hey",
        "good morning",
        "good evening",
        "how are you"
    ];

    return greetings.includes(
        text.toLowerCase().trim()
    );
}

async function askGAIA(question) {

    console.log("Sending:", question);
    const API = "https://gaia-nkv5.onrender.com/ask";
    const response = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question: question
        })
    })

    console.log("Status:", response.status);
    const data = await response.json();
    console.log(data);
    return marked.parse(data.answer);
}

let currentRequest = 0;

async function sendMessage() {
    const input =
        document.getElementById(
            "gaia-question"
        );

    const text =
        input.value.trim();

    if (!text) return;

    const messages =
        document.getElementById(
            "gaia-messages"
        );

    messages.innerHTML += `
<div class="gaia-user">
${text}
</div>
`;

    input.value = "";

    messages.scrollTop =
        messages.scrollHeight;

    const requestId =
        ++currentRequest;

    const typingId =
        "typing-" + Date.now();

    messages.innerHTML += `
<div class="gaia-bot typing" id="${typingId}">
    <span></span>
    <span></span>
    <span></span>
</div>
`;

    messages.scrollTop =
        messages.scrollHeight;

    try {

        let answer = "";

        if (
            greetingReply(text)
        ) {

            answer = `
Hello, I am GAIA.

I help explore concepts,
relationships,
clusters,
patterns,
and connections found within the
Great Awakening Intelligence Atlas.

Ask me anything about the map.
`;

        } else {

            answer =
                await askGAIA(text);

        }

        if (
            requestId !==
            currentRequest
        ) {

            const bubble =
                document.getElementById(typingId);

            if (bubble) {
                bubble.classList.remove("typing");
                bubble.innerHTML = answer;

            }

            return;
        }

        const bubble =
            document.getElementById(
                typingId
            );

        if (bubble) {
            bubble.innerHTML = answer;
        }

    }
    catch (error) {
        console.error(error);
        const bubble =
            document.getElementById(typingId);
        if (bubble) {
            bubble.innerHTML = `
        <strong>⚠️ GAIA is temporarily underconstruction.</strong>

        <br><br>

        This may happen because:

        <ul>
            <li>The GAIA backend is not running.</li>
            <li>Since, the admin is figuring out a free backend flask hosting site.</li>
        </ul>

        <br>

        <a href="mailto:tanujamodakm@email.com?subject=GAIA API Update Request">
            📩 Click here to notify the administrator if you can help or waiting...
        </a>

        <br><br>

        Please try again later.
        `;

        }

    }

    messages.scrollTop =
        messages.scrollHeight;

}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "GAIA Website Loaded"
        );

        const sendBtn =
            document.getElementById(
                "send-gaia"
            );

        const input =
            document.getElementById(
                "gaia-question"
            );

        const chatBtn =
            document.getElementById(
                "gaia-chat-btn"
            );

        const closeBtn =
            document.getElementById(
                "close-chat"
            );

        const chatWindow =
            document.getElementById(
                "gaia-chat-window"
            );

        if (
            chatBtn &&
            chatWindow
        ) {

            chatBtn.addEventListener(
                "click",
                () => {
                    chatWindow.style.display =
                        "flex";
                }
            );

        }

        if (
            closeBtn &&
            chatWindow
        ) {

            closeBtn.addEventListener(
                "click",
                () => {

                    chatWindow.style.display =
                        "none";
                }
            );
        }

        if (sendBtn) {
            sendBtn.addEventListener(
                "click",
                sendMessage
            );
        }

        if (input) {

            input.addEventListener(
                "keydown",
                function (e) {
                    if (
                        e.key === "Enter"
                    ) {
                        e.preventDefault();
                        sendMessage();

                    }
                }
            );
        }
    }
);
