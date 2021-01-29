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
window.addEventListener("load", function (): void {
    createButton();
    console.log("so viele buttons wurden hinzugefügt " + buttons.length);
});



//Funktion um wieder auf die Startseite zu gelanden - 3 Buttons/ 3 Spielstärken erscheinden wieder 
function playAgain(): void {
    location.reload();
}

document.querySelector(".fa-redo").addEventListener("click", function (): void {
    playAgain();
});

//Interface für meine Karten-Objekte
interface Card {
    text: string;
    color: string;
    pic: string;
    background: string;
}

const cards: Card[] = [
    {
        text: "DOM- Manipulation bezeichnet... ",
        color: "#3CFF00",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...das Verändern von Inhalten zur Laufzeit des Browsers.",
        color: "#3CFF00",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Objekte sind komplexe Variablen- typen, die... ",
        color: "",
        pic: "assets/clipart6.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...viele Informations- einheiten versch. Datentypen speichern können. ",
        color: "",
        pic: "assets/clipart6.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Der Wert von CONST-Variablen kann nicht... ",
        color: "#01FFFF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...durch Wertzu- weisung o. Neu- deklaration verändert werden.",
        color: "#01FFFF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Ein Array kann... ",
        color: "",
        pic: "assets/clipart4.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...eine Liste von Objekten enthalten.",
        color: "",
        pic: "assets/clipart4.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Statt viele Variablen zu benutzen... ",
        color: "#9933FF",
        pic: "assets/clipart7.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...kann ein Array dafür genutzt werden. ",
        color: "#9933FF",
        pic: "assets/clipart7.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Um Fehler zu vermeiden... ",
        color: "#EF00FF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...ist die Entwicklung eines Konzepts sehr hilfreich. ",
        color: "#EF00FF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Um Objekte zu deklarieren, muss... ",
        color: "#848181",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...zuerst ein Interface definiert werden!",
        color: "#848181",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Im Gegensatz zu Bedingungen... ",
        color: "",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...können Schleifen ihren Codeblock mehrfach durchlaufen. ",
        color: "",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Eine einfache FOR-Schleife... ",
        color: "",
        pic: "assets/clipart5.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...braucht 3 Statements, um zu funktionieren.",
        color: "",
        pic: "assets/clipart5.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Funktionen sind Anweisungs- blöcke, die... ",
        color: "#FA9806",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...bestimmte Aufgaben zu einem von uns festgelegten Zeitpunkt ausführen.",
        color: "#FA9806",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Der Browser parst... ",
        color: "",
        pic: "assets/clipart3.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...von oben nach unten. ",
        color: "",
        pic: "assets/clipart3.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "LET- Variablen sind nur in dem Bereich gültig,... ",
        color: "#FFF700",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...in dem sie deklariert wurden.",
        color: "#FFF700",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Um Funktionen zu einem best. Zeitpunkt aufzurufen,... ",
        color: "#FFCCCC",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...benutzen wir Events. ",
        color: "#FFCCCC",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Um einer Variable einen Wert zu zu weisen benötigen wir...",
        color: "#2604FF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...ein '=' , einen typ- entsprechenden Wert & ein ';' . ",
        color: "#2604FF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Variablen, die LOKAL deklariert werden,... ",
        color: "",
        pic: "assets/clipart2.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...sind nur innerhalb dieser Funktion verfügbar. ",
        color: "",
        pic: "assets/clipart2.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Variablen, die GLOBAL deklariert werden,... ",
        color: "#FF1100",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...sind überall verfügbar. ",
        color: "#FF1100",
        pic: "",
        background: "assets/backgroundCard2.png"
    }


];
console.log("im Moment sind so viele Karten in deinem Array " + cards.length);

// Array cards wild durchmischeln / hier wird ein fisher yates algorithmus verwendet, damit sich keine Reihenfolge wiederholt
//youtube video: https://www.youtube.com/watch?v=5sNGqsMpW1E 
const shuffleCardsEASY = cards => {
    for (let i: number = 8 - 1; i > 0; i--) {
        const randomNumber: number = Math.floor(Math.random() * (i + 1)); //randomNumber spuckt uns eine random zahl aus unserem arrays raus
        const temp: number = cards[i];
        cards[i] = cards[randomNumber];
        cards[randomNumber] = temp; //temp ist dafür da den ausgesuchten wert mit der randomnumber  zu swappen
        //i kann natürlich nicht kleiner als null sein, da es nur 8 karten hier gibt die zum shufflen da sind
        //um zu verhindern, dass keine pärchen bei spielstärke EASY da sind, werden nur die ersten 8 Karten aus meinem Array verwendet

    }
    return cards;
};

const shuffleCardsAVERAGE = cards => {
    for (let i: number = 16 - 1; i > 0; i--) {
        const randomNumber: number = Math.floor(Math.random() * (i + 1));
        const temp: number = cards[i];
        cards[i] = cards[randomNumber];
        cards[randomNumber] = temp;

    }
    return cards;
};

const shuffleCardsHARD = cards => {
    for (let i: number = cards.length - 1; i > 0; i--) {
        const randomNumber: number = Math.floor(Math.random() * (i + 1));
        const temp: number = cards[i];
        cards[i] = cards[randomNumber];
        cards[randomNumber] = temp;

    }
    return cards;
};




window.addEventListener("load", function (): void {
    //diese Funtkion soll ausgeführt werden beim Klicken des EASY Buttons - 8 Karten/ divs werden erzeugt und das
    //MemoryBoard/ die Flexbox 
    function CreateGAME(card: Card, cardsnumber: number): HTMLElement {
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
        //Erstellen der Karte/ des divs, dessen Klasse zuvor in css deklariert wurde
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

        //nur wenn bei dem Objekt eine Bildquelle vorhanden ist, soll die Option eines Bildes erst da sein
        //sont hat jede karte (auch wenn kein Bild vorhanden ist) einen störenden leeren Rahmen
        if ( card.pic != "" && cardsnumber != 32) {
        if ( cardsnumber == 8 ) {
            //erstelllen der Piktogramme
            let picto: HTMLImageElement = document.createElement("img");
            picto.className = "pictoEASY";
            picto.src = card.pic;
            card1.appendChild(picto);
        }    
        else {
            let picto: HTMLImageElement = document.createElement("img");
            picto.className = "picto";
            picto.src = card.pic;
            card1.appendChild(picto);
        }
    }
        
        //erstellen eines vierten attributs, um alle karten zu bedecken, dieses Bild wird dem div card1 angehängt im DOM
        //und in css positioniert, um alle gestylten karten zu bedecken 
        let background: HTMLImageElement = document.createElement("img");
        background.className = "background";
        background.src = card.background;
        card1.appendChild(background);





        //kinder werden an den dom angehängt, abhängig von der anzahl an karten und somit an die jeweilige flexbox
        if (cardsnumber == 8) {
            document.querySelector("#memoryBoard1").appendChild(card1);
        }
        if (cardsnumber == 16) {
            document.querySelector("#memoryBoard2").appendChild(card1);
        }
        if (cardsnumber == 32) {
            document.querySelector("#memoryBoard3").appendChild(card1);
        }



        return card1;

    }
    //Funktion Start soll nach dem Auswählen einer Spielstärke ausgeführt werden, mit der Forschleife und dessen Zählervariable
    //wird später festgelegt wie viele divs mit den jeweiligen Attributen erzeugt werden sollen
    function start(numberOfCards: number): void {
        for (var i: number = 0; i < numberOfCards; i++)
            CreateGAME(cards[i], numberOfCards);
    }
    //Eventlistener für jeden Button EASY AVERAGE HARD, Button sollen verschwinden UND CreateGAME funktion wird ausgeführt
    //es wird übergeben wie viele karten erzeugt werden sollen und das Array wird bei jedem Klick neu geshufflet
    document.getElementById("button1").addEventListener("click", function (): void {

        buttonBox.style.visibility = "hidden";
        shuffleCardsEASY(cards);
        start(8);
        console.log("So viele Karten wurden hinzugefügt " + cards.length);


    });

    document.getElementById("button2").addEventListener("click", function (): void {

        buttonBox.style.visibility = "hidden";
        shuffleCardsAVERAGE(cards);
        start(16);
        console.log("So viele Karten wurden hinzugefügt " + cards.length);

    });

    document.getElementById("button3").addEventListener("click", function (): void {

        buttonBox.style.visibility = "hidden";
        shuffleCardsHARD(cards);
        start(32);
        console.log("So viele Karten wurden hinzugefügt " + cards.length);

    });

    //Funktion um Karte aufzudecken
    function selectCard(): void {
        let clickedBackground: HTMLDivElement = document.querySelector(".background");
        clickedBackground.style.visibility = "hidden";




    }

    document.querySelector(".cardforeground").addEventListener("click", function (): void {
        selectCard();
    });


});

//AB HIER KOMMEN ALLE FUNKTIONEN RUND UM DIE FUNKTION DES SPIELS

let score: number = 0;
//Hier werden die zwei geklickten karten rein gepusht, die nach paar sekunden wieder gelöscht werden, um 
//umgedreht zu werden, sofern sie nicht übereinstimmen
let selected: HTMLElement[] = [];                 