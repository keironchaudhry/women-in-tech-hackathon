const userMessage = document.getElementById("user_message");
const messageHistory = document.getElementById("message_history");
const chatBox = document.getElementById("chat_box");
const chatSelector = document.getElementById("chat_selector");
const selection = new URLSearchParams(window.location.search).get("selection");
let pictureURL = "";
let roleName = "";
let roleDesc = "";
initialise();

function initialise() {
    // set roleName, roleDesc and pictureURL from query param
    switch (selection) {
        case "katherine":
            roleName = "Katherine Johnson";
            roleDesc = "NASA mathematician";
            pictureURL = "../static/assets/imgs/katherine.jpg";
            break;
        case "ada":
            roleName = "Ada Lovelace";
            roleDesc = "first programmer";
            pictureURL = "../static/assets/imgs/ada.jpg";
            break;
        case "grace":
            roleName = "Grace Hopper";
            roleDesc = "computer scientist";
            pictureURL = "../static/assets/imgs/grace.jpg";
            break;
        case "reshma":
            roleName = "Reshma Saujani";
            roleDesc = "advocate for women in technology";
            pictureURL = "../static/assets/imgs/reshma-saujani.jpg";
            break;
        case "mary":
            roleName = "Mary Keller";
            roleDesc = "computer scientist";
            pictureURL = "../static/assets/imgs/mary-keller.jpg";
            break;
    }

    // Update mobile menu name and picture
    document.getElementById("mobile_img").src = pictureURL;
    document.getElementById("mobile_name").textContent = roleName;

    // remove highlight from all selector elements
    chatSelector.childNodes.forEach((element) => {
        if (element.classList) {
            element.classList.remove("chat-sidebar-active");
        }
    });

    // add highlight to selected option
    // console.log(selection+"_nav_link")
    document
        .querySelector(`[data-name="${roleName}"]`)
        .parentNode.classList.add("chat-sidebar-active");

    // clear chatbox and message history
    chatBox.innerHTML = "";
    messageHistory.value = "";

    // add greeting to chatbox
    let message = `Hi! I am ${roleName} the ${roleDesc}. Ask me anything!`;
    addMessage("reply", message);
}

function addMessage(type, message) {
    // set inner and outer classes by message type
    let outerClass = type == "user" ? "ms-5 me-1" : "ms-1 me-5";
    let innerClass = type == "user" ? "bg-light" : "bg-reply";
    // create new div and add styles and message
    let messageDiv = document.createElement("div");
    messageDiv.className = `card my-4 ${outerClass}`;
    messageDiv.innerHTML = `<div class="card-body text-dark ${innerClass} chat-card">${message}</div>`;
    // append to chatbox
    chatBox.appendChild(messageDiv);
}

function removeSpinners() {
    // select all spinner elements
    const spinners = document.querySelectorAll(".chat-spinner");
    // iterate through and remove all
    spinners.forEach((spinner) => {
        spinner.remove();
    });
}

function addSpinner() {
    // remove all spinners first
    removeSpinners();
    // create spinner element and add styles
    let spinnerDiv = document.createElement("div");
    spinnerDiv.className = "d-flex justify-content-center chat-spinner";
    spinnerDiv.innerHTML = `<div role="status" class="spinner-border"><span class="visually-hidden">Loading...</span></div>`;
    // append spinner to chatbox
    chatBox.appendChild(spinnerDiv);
}

document
    .getElementById("user_message_form")
    .addEventListener("submit", function (event) {
        // prevent submission of form
        event.preventDefault();

        // do not proceed with function if message is empty
        if (userMessage.value === "") {
            return;
        }

        addMessage("user", userMessage.value);
        addSpinner();

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
                removeSpinners();
                let replyMessage = data["message"];

                // add response to chatbox
                addMessage("reply", replyMessage);

                // append reply to message history
                messageHistory.value += `|assistant: ${replyMessage}`;
            });
    });

chatSelector.addEventListener("click", function (e) {
    // set role name and description from data attributes of clicked element
    roleName = e.target.dataset.name;
    roleDesc = e.target.dataset.desc;

    // update mobile menu picture url
    switch (roleName) {
        case "Katherine Johnson":
            pictureURL = "../static/assets/imgs/katherine.jpg";
            break;
        case "Ada Lovelace":
            pictureURL = "../static/assets/imgs/ada.jpg";
            break;
        case "Grace Hopper":
            pictureURL = "../static/assets/imgs/grace.jpg";
            break;
        case "Reshma Saujani":
            pictureURL = "../static/assets/imgs/reshma-saujani.jpg";
            break;
        case "Mary Keller":
            pictureURL = "../static/assets/imgs/mary-keller.jpg";
            break;
    }

    document.getElementById("mobile_img").src = pictureURL;
    document.getElementById("mobile_name").textContent = roleName;

    // remove highlight from all selector elements
    chatSelector.childNodes.forEach((element) => {
        if (element.classList) {
            element.classList.remove("chat-sidebar-active");
        }
    });
    // add highlight to selected option
    e.target.parentNode.classList.add("chat-sidebar-active");
    // clear chatbox and message history
    chatBox.innerHTML = "";
    messageHistory.value = "";
    // add greeting to chatbox
    let message = `Hi! I am ${roleName} the ${roleDesc}. Ask me anything!`;
    addMessage("reply", message);
});
