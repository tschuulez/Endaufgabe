var buttons = [];
var buttonBox = document.getElementById("buttonBox");
//zu Beginn werden 3 buttons erzeugt, die später wieder gelöscht werden, wenn die Karten erscheinen
function createButton() {
    var button1 = document.createElement("div");
    button1.id = "button1";
    button1.innerHTML = "EASY";
    var button2 = document.createElement("div");
    button2.id = "button2";
    button2.innerHTML = "AVERAGE";
    var button3 = document.createElement("div");
    button3.id = "button3";
    button3.innerHTML = "HARD";
    document.querySelector("#buttonBox").appendChild(button1);
    document.querySelector("#buttonBox").appendChild(button2);
    document.querySelector("#buttonBox").appendChild(button3);
    buttons.push(button1, button2, button3);
}
//sobald die Seit geladen hat, erscheinen die 3 Buttons mit den verschiednen Spielstärken
window.addEventListener("load", function () {
    createButton();
    console.log("so viele buttons wurden hinzugefügt " + buttons.length);
});
var score = 0;
var cards = [];
console.log("im Moment sind so viele Karten in deinem Array " + cards.length);
function EASY() {
    var card1 = document.createElement("div");
    card1.className = "cardbackground";
    var card2 = document.createElement("div");
    card2.className = "cardbackground";
    document.getElementById("#memoryBoard").appendChild(card1);
    document.getElementById("#memoryBoard").appendChild(card2);
    //pushe karten in den array cards
    cards.push({
        cardstext: "DOM-Manipilation bezeichnet...",
        cardflipped: false
    }, {
        cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
        cardflipped: false
    });
}
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button1");
var button3 = document.querySelector(".button1");
window.addEventListener("load", function () {
    document.getElementById("button1").addEventListener("click", function () {
        buttonBox.style.visibility = "hidden";
        EASY();
        console.log(cards.length);
        buttons.length = 0; //Schwierigkeit-buttons verschwinden / erzeugte Buttons verschwinden wieder
        console.log("die Buttons sind jetzt wieder verschwunden -> " + buttons.length);
    });
});
//# sourceMappingURL=script.js.map