
let buttons: HTMLDivElement[] = [];
let buttonBox: HTMLElement = document.getElementById("#buttonBox");
//zu Beginn werden 3 buttons erzeugt, die später wieder gelöscht werden, wenn die Karten erscheinen
function createButton(): void {
    
    let button1: HTMLDivElement = document.createElement("div");
    button1.className = "button1";
    button1.innerHTML = "EASY";
    let button2: HTMLDivElement = document.createElement("div");
    button2.className = "button2";
    button2.innerHTML = "AVERAGE";
    let button3: HTMLDivElement = document.createElement("div");
    button3.className = "button3"; 
    button3.innerHTML = "HARD";

    document.querySelector("#buttonBox").appendChild(button1);
    document.querySelector("#buttonBox").appendChild(button2);
    document.querySelector("#buttonBox").appendChild(button3);

    buttons.push(button1, button2, button3);

}
//sobald die Seit geladen hat, erscheinen die 3 Buttons mit den verschiednen Spielstärken
window.addEventListener("load", function(): void {     
    createButton();
    console.log("so viele buttons wurden hinzugefügt " + buttons.length);
});

let score: number = 0;

//Interface für meine Karten-Objekte
interface Card {
    cardstext: string;
    cardflipped: boolean;

}

let cards: Card [] = [];
console.log("im Moment sind so viele Karten in deinem Array " + cards.length);

function EASY(): void {
    let card1: HTMLDivElement = document.createElement("div");
    card1.className = "cardbackground";
    let card2: HTMLDivElement = document.createElement("div");
    card2.className = "cardbackground";

    document.getElementById("#memoryBoard").appendChild(card1);
    document.getElementById("#memoryBoard").appendChild(card2);
    //pushe karten in den array cards
    cards.push({
       cardstext: "DOM-Manipilation bezeichnet...",
        cardflipped: false
    },
               {
       cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
       cardflipped: false
   }
    );
}

let button1: HTMLDivElement = document.querySelector(".button1");
let button2: HTMLDivElement = document.querySelector(".button1");
let button3: HTMLDivElement = document.querySelector(".button1");


window.addEventListener("load", function(): void{
    document.querySelector(".button1").addEventListener("click", function(): void {
        buttonBox.style.visibility = "hidden";
        EASY();
        console.log(cards.length);
        buttons.length = 0; //Schwierigkeit-buttons verschwinden / erzeugte Buttons verschwinden wieder
        console.log("die Buttons sind jetzt wieder verschwunden -> " + buttons.length);
    }); 

});


                    