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
    function EASY( card: Card): void {
        //erstellen der ersten Flexbox
        let memoryBoard: HTMLDivElement = document.createElement("div");
        memoryBoard.id = "memoryBoard1";
        //Erstellen der karte
        let card1: HTMLDivElement = document.createElement("div");
        card1.className = "cardforeground";
        //zweite Karte, die genau über den Karten liegt und somit den Inhalt verdeckt
        //=Rückseite der Karten
        let background: HTMLDivElement = document.createElement("div");
        background.className = "cardbackground";
        //Farbe 
        card1.style.background = card.color;
        //erstellen keines Textes,da bei dieser Spielstärke nur Farben und Bilder zu sehen sind
        //let texto: HTMLLabelElement = document.createElement("label");
        //texto.className = "texto";
        //texto.innerHTML = card.text;
        
        //erstelllen der Piktogramme
        let picto: HTMLImageElement = document.createElement("img");
        picto.className = "picto";
        picto.src = card.pic;
       
        
       
        
        //kinder werden an den dom angehängt
        document.querySelector(".box").appendChild(memoryBoard);
        document.querySelector("#memoryBoard1").appendChild(card1);
        document.querySelector("#memoryBoard1").appendChild(background);
        //card1.appendChild(texto);
        card1.appendChild(picto);
        
        
       
     }

    function startEASY(size: number): void {
        for (var i: number = 0; i < size; i++)
        EASY(cards[i]);
    }

    document.getElementById("button1").addEventListener("click", function(): void {
        
        buttonBox.style.visibility = "hidden";
        shuffleCardsEASY(cards);
        startEASY(8);
        console.log("So viele Karten wurden hinzugefügt " + cards.length);
        buttons.length = 0; //Schwierigkeit-buttons verschwinden / erzeugte Buttons verschwinden wieder
        console.log("die Buttons sind jetzt wieder verschwunden -> " + buttons.length);
    }); 

});

window.addEventListener("load", function(): void {
    //diese Funtkion soll ausgeführt werden beim Klicken des EASY Buttons - 8 Karten/ divs werden erzeugt und das
    //MemoryBoard/ die Flexbox 
    function AVERAGE( card: Card): void {
        //Erstellen der zweiten Flexbox
        let memoryBoard2: HTMLDivElement = document.createElement("div");
        memoryBoard2.id = "memoryBoard2";
        let card2: HTMLDivElement = document.createElement("div");
        card2.className = "cardforeground";
        //Farbe 
        card2.style.background = card.color;
        //erstellen des Textes
        let texto: HTMLLabelElement = document.createElement("label");
        texto.className = "texto";
        texto.innerHTML = card.text;
        //erstelllen der Piktogramme
        let picto: HTMLImageElement = document.createElement("img");
        picto.className = "picto";
        picto.src = card.pic;
        
    
    
        document.querySelector(".box").appendChild(memoryBoard2);
        document.querySelector("#memoryBoard2").appendChild(card2);
        card2.appendChild(texto);
        card2.appendChild(picto);
        
        
        
    }

    function startAVERAGE(size: number): void {
        for (var i: number = 0; i < size; i++)
        AVERAGE(cards[i]);
    }

    document.getElementById("button2").addEventListener("click", function(): void {
        
        buttonBox.style.visibility = "hidden";
        shuffleCardsAVERAGE(cards);
        startAVERAGE(16);
        console.log("So viele Karten wurden hinzugefügt " + cards.length);
        buttons.length = 0; //Schwierigkeit-buttons verschwinden / erzeugte Buttons verschwinden wieder
        console.log("die Buttons sind jetzt wieder verschwunden -> " + buttons.length);
    }); 

});

let card: HTMLDivElement = document.querySelector("cardbackground");

window.addEventListener("load", function(): void {
     
    document.querySelector(".cardforeground").addEventListener( "click", function(): void {
        card.style.visibility = "hidden";
    });
});

window.addEventListener("load", function(): void {
    //diese Funtkion soll ausgeführt werden beim Klicken des EASY Buttons - 8 Karten/ divs werden erzeugt und das
    //MemoryBoard/ die Flexbox 
    function HARD( card: Card): void {
        //Erstellen der dritten Flexbox
        let memoryBoard3: HTMLDivElement = document.createElement("div");
        memoryBoard3.id = "memoryBoard3";
        let card3: HTMLDivElement = document.createElement("div");
        card3.className = "cardforeground";
        //Farbe 
        card3.style.background = card.color;
        //erstellen des Textes
        let texto: HTMLLabelElement = document.createElement("label");
        texto.className = "texto";
        texto.innerHTML = card.text;
        //erstelllen der Piktogramme
        let picto: HTMLImageElement = document.createElement("img");
        picto.className = "picto";
        picto.src = card.pic;
       
    
        //Hier wird alles an den DOM angehängt oder direkt an die Karte angehängt wie Text, Farbe, Piktogramm
        document.querySelector(".box").appendChild(memoryBoard3);
        document.querySelector("#memoryBoard3").appendChild(card3);
        card3.appendChild(texto);
        card3.appendChild(picto);
        
        
        
        
    }
    //Mit der Zählervariable der forschleife und der Bedingung , wird die funktion so oft durchgeführt wie ich will. Abhängig 
    //davon wie viele karten/divs ich erzeugen will
    function startHARD(size: number): void {
        for (var i: number = 0; i < size; i++)
        HARD(cards[i]);
    }
   // Button hard wird klickbar und beim Klicken werden die Karten etc erzeugt....
    document.getElementById("button3").addEventListener("click", function(): void {
        
        buttonBox.style.visibility = "hidden";
        shuffleCardsHARD(cards);
        startHARD(32);
        console.log("So viele Karten wurden hinzugefügt " + cards.length);
        buttons.length = 0; //Schwierigkeit-buttons verschwinden / erzeugte Buttons verschwinden wieder
        console.log("die Buttons sind jetzt wieder verschwunden -> " + buttons.length);
    }); 

});


//AB HIER KOMMEN ALLE FUNKTIONEN RUND UM DIE FUNKTION DES SPIELS

let score: number = 0;
//Hier werden die zwei geklickten karten rein gepusht, die nach paar sekunden wieder gelöscht werden, um 
//umgedreht zu werden, sofern sie nicht übereinstimmen
let selected: HTMLElement [] = [];                 