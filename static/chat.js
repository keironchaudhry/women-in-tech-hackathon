const userMessage = document.getElementById("user_message");
const messageHistory = document.getElementById("message_history");
const chatBox = document.getElementById("chat_box");
let roleName = "Katherine Johnson";
let roleDesc = "NASA mathematician";

function addMessage(type, message) {
    let outerClass = type == "user" ? "ms-5 me-1" : "ms-1 me-5";
    let innerClass = type == "user" ? "bg-light" : "bg-reply";
    let messageDiv = document.createElement("div");
    messageDiv.className = `card my-4 ${outerClass}`;
    messageDiv.innerHTML = `<div class="card-body text-dark ${innerClass} chat-card">${message}</div>`;
    chatBox.appendChild(messageDiv);
}

document
    .getElementById("user_message_form")
    .addEventListener("submit", function (event) {
        // prevent submission of form
        event.preventDefault();

        addMessage("user", userMessage.value);

        // build messageData object
        let messageData = {
            userMessage: userMessage.value,
            messageHistory: messageHistory.value,
            roleName: roleName,
            roleDesc: roleDesc,
        };

        // build JSON request to send to server
        let jsonRequest = {
            cache: "no-cache",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(messageData),
        };

        // add message to history and empty input box
        messageHistory.value += `|user: ${userMessage.value}`;
        userMessage.value = "";

        // send fetch request to server
        fetch(fetchURL, jsonRequest)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let replyMessage = data["message"];

                // add response to chatbox
                addMessage("reply", replyMessage);

                // append reply to message history
                messageHistory.value += `|assistant: ${replyMessage}`;
            });
    });

document
    .getElementById("chat_selector")
    .addEventListener("click", function (e) {
        roleName = e.target.dataset.name;
        roleDesc = e.target.dataset.desc;
        chatBox.innerHTML = "";
        let message = `Hi! I am ${roleName} the ${roleDesc}. Ask me anything!`;
        addMessage("reply", message);
    });
