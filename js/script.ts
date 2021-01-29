//ERSTMAL HIER DER AUFBAU DES SPIELFELDS 
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



//Funktion um wieder auf die Startseite zu gelanden - 3 Buttons/ 3 Spielstärken erscheinden wieder 
function playAgain(): void {
    location.reload();
}

document.querySelector(".fa-redo").addEventListener("click", function(): void {
    playAgain();
});

//Interface für meine Karten-Objekte
interface Card {
    text: string;
    color: string;
    pic: string; 
    background: string;
}

const cards: Card [] = [
    {
        text: "DOM- Manipulation bezeichnet... ",
        color: "#3CFF00",
        pic:  "",
        background: ""
    },
    {
        text: " ... das Verändern von Inhalten zur Laufzeit des Browsers.",
        color: "#3CFF00",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart6.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart6.png",
        background: ""
    },
    {
        text: "",
        color: "#01FFFF",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "#01FFFF",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart4.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart4.png",
        background: ""
    },
    {
        text: "Statt viele Variablen zu benutzen... ",
        color: "#9933FF",
        pic:  "",
        background: ""
    },
    {
        text: " ...kann ein Array dafür genutzt werden.",
        color: "#9933FF",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "#EF00FF",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "#EF00FF",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "",
        background: ""   
    },
    {
        text: "",
        color: "",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart7.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart7.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart5.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart5.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart3.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart3.png",
        background: ""
    },
    {
        text: "LET- Variablen sind nur in dem Bereich gültig,... ",
        color: "#FFF700",
        pic:  "",
        background: ""
    },
    {
        text: " ...in dem sie deklariert wurden.",
        color: "#FFF700",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart8.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart8.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart2.png",
        background: ""
    },
    {
        text: "",
        color: "",
        pic:  "assets/clipart2.png",
        background: ""
    },
    {
        text: "",
        color: "#FF1100",
        pic:  "",
        background: ""
    },
    {
        text: "",
        color: "#FF1100",
        pic:  "",
        background: ""
    }


];
console.log("im Moment sind so viele Karten in deinem Array " + cards.length);

// Array cards wild durchmischeln 
const shuffleCardsEASY = cards => {
    for ( let i: number = 8 - 1; i > 0; i-- ) {
        const j: number = Math.floor( Math.random () * (i + 1));
        const temp: number = cards[i];
        cards[i] = cards[j];
        cards[j] = temp; 

    }
    return cards;
};

const shuffleCardsAVERAGE = cards => {
    for ( let i: number = 16 - 1; i > 0; i-- ) {
        const j: number = Math.floor( Math.random () * (i + 1));
        const temp: number = cards[i];
        cards[i] = cards[j];
        cards[j] = temp; 

    }
    return cards;
};

const shuffleCardsHARD = cards => {
    for ( let i: number = cards.length - 1; i > 0; i-- ) {
        const j: number = Math.floor( Math.random () * (i + 1));
        const temp: number = cards[i];
        cards[i] = cards[j];
        cards[j] = temp; 

    }
    return cards;
};




window.addEventListener("load", function(): void {
    //diese Funtkion soll ausgeführt werden beim Klicken des EASY Buttons - 8 Karten/ divs werden erzeugt und das
    //MemoryBoard/ die Flexbox 
    function CreateGAME( card: Card, cardsnumber: number): HTMLElement {
        //erstellen der Memoryboards in Abhängigkeit zur anzahl an karten, damit sie schön geordnet liegen 
        if (cardsnumber == 8) {
        let memoryBoard: HTMLDivElement = document.createElement("div");
        memoryBoard.id = "memoryBoard1";
        document.querySelector(".box").appendChild(memoryBoard);
        }

        if (cardsnumber == 16) {
        let memoryBoard: HTMLDivElement = document.createElement("div");
        memoryBoard.id = "memoryBoard2";
        document.querySelector(".box").appendChild(memoryBoard);
        }

        if (cardsnumber == 32) {
        let memoryBoard: HTMLDivElement = document.createElement("div");
        memoryBoard.id = "memoryBoard3"; 
        document.querySelector(".box").appendChild(memoryBoard);   
        }
        //Erstellen der karte
        let card1: HTMLDivElement = document.createElement("div");
        card1.className = "cardforeground";
        
        //Farbe 
        card1.style.background = card.color;

        if (cardsnumber == 16 || cardsnumber == 32) {
        //erstellen eines Textes nur bei 16 und 32 karten , die zwei geraden striche bedeuten "oder" = vergleichsoperator
        let texto: HTMLLabelElement = document.createElement("label");
        texto.className = "texto";
        texto.innerHTML = card.text;
        card1.appendChild(texto);
        }
 
        //erstelllen der Piktogramme
        let picto: HTMLImageElement = document.createElement("img");
        picto.className = "picto";
        picto.src = card.pic;
        card1.appendChild(picto);
       
        
       
        
        //kinder werden an den dom angehängt
        if ( cardsnumber == 8) {
            document.querySelector("#memoryBoard1").appendChild(card1);
        }
        if ( cardsnumber == 16) {
            document.querySelector("#memoryBoard2").appendChild(card1);
        }
        if ( cardsnumber == 32) {
            document.querySelector("#memoryBoard3").appendChild(card1);
        }

        
        
        return card1;
       
     }
    //Funktion Start soll nach dem Auswählen einer Spielstärke ausgeführt werden, mit der Forschleife und dessen Zählervariable
    //wird später festgelegt wie viele divs mit den jeweiligen Attributen erzeugt werden sollen
    function start (numberOfCards: number): void {
        for (var i: number = 0; i < numberOfCards; i++)
        CreateGAME(cards[i], numberOfCards);
    }
    //Eventlistener für jeden Button EASY AVERAGE HARD, Button sollen verschwinden UND CreateGAME funktion wird ausgeführt
    //es wird übergeben wie viele karten erzeugt werden sollen und das Array wird bei jedem Klick neu geshufflet
    document.getElementById("button1").addEventListener("click", function(): void {
        
        buttonBox.style.visibility = "hidden";
        shuffleCardsEASY(cards);
        start(8);
        console.log("So viele Karten wurden hinzugefügt " + cards.length);
        
       
    }); 

    document.getElementById("button2").addEventListener("click", function(): void {
        
        buttonBox.style.visibility = "hidden";
        shuffleCardsAVERAGE(cards);
        start(16);
        console.log("So viele Karten wurden hinzugefügt " + cards.length);
        
    }); 

    document.getElementById("button3").addEventListener("click", function(): void {
        
        buttonBox.style.visibility = "hidden";
        shuffleCardsHARD(cards);
        start(32);
        console.log("So viele Karten wurden hinzugefügt " + cards.length);
        
    }); 


});




//AB HIER KOMMEN ALLE FUNKTIONEN RUND UM DIE FUNKTION DES SPIELS

let score: number = 0;
//Hier werden die zwei geklickten karten rein gepusht, die nach paar sekunden wieder gelöscht werden, um 
//umgedreht zu werden, sofern sie nicht übereinstimmen
let selected: HTMLElement [] = [];                 