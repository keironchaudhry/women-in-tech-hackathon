const userMessage = document.getElementById("user_message");
const messageHistory = document.getElementById("message_history");
const chatBox = document.getElementById("chat_box");

document
    .getElementById("user_message_form")
    .addEventListener("submit", function (event) {
        // prevent submission of form
        event.preventDefault();

        let messageDiv = document.createElement("div");
        messageDiv.textContent = userMessage.value;
        chatBox.append(messageDiv);

        // build messageData object
        let messageData = {
            userMessage: userMessage.value,
            messageHistory: messageHistory.value,
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

        // empty input box
        userMessage.value = "";

        // send fetch request to server
        fetch(fetchURL, jsonRequest)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let aiMessage = data["message"];
                console.log("POST data:");
                console.log(aiMessage);

                // add response to chatbox
                let replyDiv = document.createElement("div");
                replyDiv.textContent = aiMessage;
                chatBox.append(replyDiv);

                // append messages to message history
                messageHistory.value += `|user: ${userMessage.value}`;
                messageHistory.value += `|assistant: ${aiMessage}`;
            });
    });
