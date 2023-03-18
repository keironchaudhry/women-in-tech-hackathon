const choiceObjects = [
    {
        name: "Catherine Johnson",
        occupation: "NASA mathematician",
    },
    {
        name: "Ada Lovelace",
        occupation: "mathematician", 
    },
    {
        name: "Catherine Johnson",
        occupation: "mathematician", 
    },
    {
        name: "Catherine Johnson",
        occupation: "mathematician", 
    },
    {
        name: "Catherine Johnson",
        occupation: "mathematician", 
    }]

var personAnounce = document.getElementById("pers-info");
console.log("hjt")
function personInfo() {
    personAnounce.innerHTML = `Hi! I am ${choiceObjects.occupation} ${choiceObjects.name}. Ask me anything!`;
}