let buttons: HTMLDivElement[] = [];

let buttonBox: HTMLElement = document.getElementById("buttonBox");
//zu Beginn werden 3 buttons erzeugt, die später wieder gelöscht werden, wenn die Karten erscheinen
function createButton(): void {
    

    let button1: HTMLDivElement = document.createElement("div");
    button1.id = "button1";
    button1.innerHTML = "EASY";

    let button2: HTMLDivElement = document.createElement("div");
    button2.id = "button2";
    button2.innerHTML = "AVERAGE";

    let button3: HTMLDivElement = document.createElement("div");
    button3.id = "button3"; 
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

//Funktion um wieder auf die Startseite zu gelanden - 3 Buttons/ 3 Spielstärken erscheinden wieder 
function playAgain(): void {
    location.reload();
}

document.querySelector(".fa-redo").addEventListener("click", function(): void {
    playAgain();
});

//Interface für meine Karten-Objekte
interface Card {
    cardstext: string;
    cardflipped: boolean;

}

let cards: Card [] = [];
console.log("im Moment sind so viele Karten in deinem Array " + cards.length);

window.addEventListener("load", function(): void {
    //diese Funtkion soll ausgeführt werden beim Klicken des EASY Buttons - 8 Karten/ divs werden erzeugt und das
    //MemoryBoard/ die Flexbox 
    function EASY(): void {

        let memoryBoard: HTMLDivElement = document.createElement("div");
        memoryBoard.id = "memoryBoard1";
        let card1: HTMLDivElement = document.createElement("div");
        card1.className = "cardbackground";
        let card2: HTMLDivElement = document.createElement("div");
        card2.className = "cardbackground";
        let card3: HTMLDivElement = document.createElement("div");
        card3.className = "cardbackground";
        let card4: HTMLDivElement = document.createElement("div");
        card4.className = "cardbackground";
        let card5: HTMLDivElement = document.createElement("div");
        card5.className = "cardbackground";
        let card6: HTMLDivElement = document.createElement("div");
        card6.className = "cardbackground";
        let card7: HTMLDivElement = document.createElement("div");
        card7.className = "cardbackground";
        let card8: HTMLDivElement = document.createElement("div");
        card8.className = "cardbackground";
    
    
        document.querySelector(".box").appendChild(memoryBoard);
    
        document.querySelector("#memoryBoard1").appendChild(card1);
        document.querySelector("#memoryBoard1").appendChild(card2);
        document.querySelector("#memoryBoard1").appendChild(card3);
        document.querySelector("#memoryBoard1").appendChild(card4);
        document.querySelector("#memoryBoard1").appendChild(card5);
        document.querySelector("#memoryBoard1").appendChild(card6);
        document.querySelector("#memoryBoard1").appendChild(card7);
        document.querySelector("#memoryBoard1").appendChild(card8);
        //pushe karten in den array cards
        cards.push({
           cardstext: "DOM-Manipilation bezeichnet...",
           cardflipped: false
        },
                   {
           cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
           cardflipped: false
       },
                   {
        cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
        cardflipped: false
        },
                   {
        cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
        cardflipped: false
        },
                   {
        cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
        cardflipped: false
        },
                   {
        cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
        cardflipped: false
        },
                   {
        cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
        cardflipped: false
        },
                   {
        cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
        cardflipped: false
        }

        );
    }
    document.getElementById("button1").addEventListener("click", function(): void {
        
        buttonBox.style.visibility = "hidden";
        EASY();
        console.log("So viele Karten wurden hinzugefügt " + cards.length);
        buttons.length = 0; //Schwierigkeit-buttons verschwinden / erzeugte Buttons verschwinden wieder
        console.log("die Buttons sind jetzt wieder verschwunden -> " + buttons.length);
    }); 

    //document.getElementById(".cardbackground").addEventListener("click", function(): void {
        
    

    //});

});

window.addEventListener("load", function(): void {
    //diese Funtkion soll ausgeführt werden beim Klicken des EASY Buttons - 8 Karten/ divs werden erzeugt und das
    //MemoryBoard/ die Flexbox 
    function AVERAGE(): void {

        let memoryBoard2: HTMLDivElement = document.createElement("div");
        memoryBoard2.id = "memoryBoard2";
        let card1: HTMLDivElement = document.createElement("div");
        card1.className = "cardbackground";
        let card2: HTMLDivElement = document.createElement("div");
        card2.className = "cardbackground";
        let card3: HTMLDivElement = document.createElement("div");
        card3.className = "cardbackground";
        let card4: HTMLDivElement = document.createElement("div");
        card4.className = "cardbackground";
        let card5: HTMLDivElement = document.createElement("div");
        card5.className = "cardbackground";
        let card6: HTMLDivElement = document.createElement("div");
        card6.className = "cardbackground";
        let card7: HTMLDivElement = document.createElement("div");
        card7.className = "cardbackground";
        let card8: HTMLDivElement = document.createElement("div");
        card8.className = "cardbackground";
        let card9: HTMLDivElement = document.createElement("div");
        card9.className = "cardbackground";
        let card10: HTMLDivElement = document.createElement("div");
        card10.className = "cardbackground";
        let card11: HTMLDivElement = document.createElement("div");
        card11.className = "cardbackground";
        let card12: HTMLDivElement = document.createElement("div");
        card12.className = "cardbackground";
        let card13: HTMLDivElement = document.createElement("div");
        card13.className = "cardbackground";
        let card14: HTMLDivElement = document.createElement("div");
        card14.className = "cardbackground";
        let card15: HTMLDivElement = document.createElement("div");
        card15.className = "cardbackground";
        let card16: HTMLDivElement = document.createElement("div");
        card16.className = "cardbackground";
    
    
        document.querySelector(".box").appendChild(memoryBoard2);
    
        document.querySelector("#memoryBoard2").appendChild(card1);
        document.querySelector("#memoryBoard2").appendChild(card2);
        document.querySelector("#memoryBoard2").appendChild(card3);
        document.querySelector("#memoryBoard2").appendChild(card4);
        document.querySelector("#memoryBoard2").appendChild(card5);
        document.querySelector("#memoryBoard2").appendChild(card6);
        document.querySelector("#memoryBoard2").appendChild(card7);
        document.querySelector("#memoryBoard2").appendChild(card8);
        document.querySelector("#memoryBoard2").appendChild(card9);
        document.querySelector("#memoryBoard2").appendChild(card10);
        document.querySelector("#memoryBoard2").appendChild(card11);
        document.querySelector("#memoryBoard2").appendChild(card12);
        document.querySelector("#memoryBoard2").appendChild(card13);
        document.querySelector("#memoryBoard2").appendChild(card14);
        document.querySelector("#memoryBoard2").appendChild(card15);
        document.querySelector("#memoryBoard2").appendChild(card16);
        //pushe karten in den array cards
        cards.push({
           cardstext: "DOM-Manipilation bezeichnet...",
           cardflipped: false
        },
                   {
           cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
           cardflipped: false
       },
                   {
           cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
           cardflipped: false
        },
                   {
           cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
           cardflipped: false
        },
                   {
           cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
           cardflipped: false
        },
                   {
           cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
           cardflipped: false
        },
                   {
           cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
           cardflipped: false
        },
                   {
           cardstext: "das Manipulieren von Inhalten zur Laufzeit des Browsers.",
           cardflipped: false
        }

        );
    }
    document.getElementById("button2").addEventListener("click", function(): void {
        
        buttonBox.style.visibility = "hidden";
        AVERAGE();
        console.log("So viele Karten wurden hinzugefügt " + cards.length);
        buttons.length = 0; //Schwierigkeit-buttons verschwinden / erzeugte Buttons verschwinden wieder
        console.log("die Buttons sind jetzt wieder verschwunden -> " + buttons.length);
    }); 

});







                    