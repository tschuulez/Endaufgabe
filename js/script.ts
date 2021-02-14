
let buttons: HTMLDivElement[] = [];

let buttonBox: HTMLElement = document.getElementById("buttonBox");



//zu Beginn werden 3 buttons erzeugt, die später wieder gelöscht werden, wenn die Karten erscheinen
//die Buttons entsprechen der Auswahl der Spielstärke 
function createButton(): void {


    let button1: HTMLDivElement = document.createElement("div");
    button1.id = "button1";
    button1.innerHTML = "EASY";

    let button2: HTMLDivElement = document.createElement("div");
    button2.id = "button2";
    button2.innerHTML = "MEDIUM";

    let button3: HTMLDivElement = document.createElement("div");
    button3.id = "button3";
    button3.innerHTML = "HARD";






    document.querySelector("#buttonBox").appendChild(button1);
    document.querySelector("#buttonBox").appendChild(button2);
    document.querySelector("#buttonBox").appendChild(button3);

    buttons.push(button1, button2, button3);

}

//sobald die Seite geladen hat, erscheinen die 3 Buttons mit den verschiedenen Spielstärken
window.addEventListener("load", function (): void {
    createButton();
    console.log("so viele buttons wurden hinzugefügt " + buttons.length);
});



//Funktion um wieder auf die Startseite zu gelanden - 3 Buttons/ 3 Spielstärken erscheinden wieder 
//quick & dirty , aber so kann man erneut spielen 
function playAgain(): void {
    location.reload();
}

document.querySelector(".fa-redo").addEventListener("click", function (): void {
    playAgain();
});

//Deklaration vieler Arrays , Variablen , Objekten 
let yourScore: number = 0;
let rivalScore: number = 0;
let yourScoreDOMElement: HTMLElement;
let rivalScoreDOMElement: HTMLElement;
let card1: HTMLDivElement;

let cheerSound: HTMLAudioElement = new Audio("../assets/cheerSound.mp3");
let matchSound: HTMLAudioElement = new Audio("../assets/itsaMatch.mp3");

//Hier werden die zwei geklickten karten rein gepusht, die nach paar sekunden wieder gelöscht werden, um 
//umgedreht zu werden, sofern sie nicht übereinstimmen
let selected: SelectedCard[] = [];

//boolean, der bei der Funktion checkForMatch bei einem Match auf true gesetzt wird
let itsaMatch: boolean;
let youCanClick: boolean;


//Interface für meine Karten-Objekte
interface Card {
    text: string;
    color: string;
    pic: string;
    background: string;
}
//Interface für meine Karten, die ausgewählt wurden und in den selected Array gepusht werden 
//Diese properties werden mit- übergeben, um die 2 Karten in dem Array selected miteinander zu vergleichen 
interface SelectedCard {
    reverse: HTMLImageElement;
    uncovered: HTMLElement;
    properties: Card;
}

//Die karten die erzeugt werden bei der jeweiligen Spielstärke werden wiederum in ein Array gepusht 
//SO kann der Computer nur Karten randomly aussuchen, die sich auch wirklich auf dem Spielfeld befinden 
const cardsOnField: SelectedCard[] = [];
//Hier sind alle 32 Karten gespeichert, mit ihren einzelnen Merkmalen 
const cards: Card[] = [
    {
        text: "DOM- Manipulation bezeichnet...",
        color: "#EF00FF",
        pic: "assets/clipart9.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...inhaltl. Veränderungen zur Laufzeit des Browsers.",
        color: "#EF00FF",
        pic: "assets/clipart9.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Objekte sind Variablen- typen, die...",
        color: "#AED1F6",
        pic: "assets/clipart7.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...versch. Datentypen beinhalten können. ",
        color: "#AED1F6",
        pic: "assets/clipart7.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Der Wert von CONST-Variablen kann nicht...",
        color: "#FFF700",
        pic: "assets/clipart11.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...durch Wertzuweisung verändert werden. ",
        color: "#FFF700",
        pic: "assets/clipart11.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " Ein Array kann... ",
        color: "#C3E2C9",
        pic: "assets/clipart8.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: " ...eine Liste von Objekten enthalten. ",
        color: "#C3E2C9",
        pic: "assets/clipart8.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Statt viele Variablen zu benutzen...",
        color: "#9933FF",
        pic: "assets/clipart6.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...kann man dafür 1 Array nutzen. ",
        color: "#9933FF",
        pic: "assets/clipart6.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Um Fehler zu vermeiden...",
        color: "#3CFF00",
        pic: "assets/clipart10.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...ist ein Konzept hilfreich.",
        color: "#3CFF00",
        pic: "assets/clipart10.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Um Objekte zu deklarieren, muss... ",
        color: "#848181",
        pic: "assets/clipart4.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...zuerst ein Interface definiert werden. ",
        color: "#848181",
        pic: "assets/clipart4.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Schleifen können...",
        color: "#FDFEFE",
        pic: "assets/clipart12.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...ihren Codeblock mehrfach durchlaufen.",
        color: "#FDFEFE",
        pic: "assets/clipart12.svg",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Eine einfache FOR-Schleife...",
        color: "#B7950B",
        pic: "assets/clipart5.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...braucht 3 Statements, um zu funktionieren.",
        color: "#B7950B",
        pic: "assets/clipart5.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Funktionen sind Anweisungs- blöcke, die...",
        color: "#FA9806",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...bestimmte Aufgaben zu einem von uns festgelegten Zeitpunkt ausführen.",
        color: "#FA9806",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Der Browser parst...",
        color: "#D4C3E2 ",
        pic: "assets/clipart3.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...von oben nach unten.",
        color: "#D4C3E2 ",
        pic: "assets/clipart3.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "LET- Variablen sind nur in dem Bereich gültig,...",
        color: "#01FFFF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...in dem sie deklariert wurden.",
        color: "#01FFFF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Um Funktionen zu einem best. Zeitpunkt aufzurufen,...",
        color: "#FFCCCC",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...benutzen wir Events.",
        color: "#FFCCCC",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Um einer Variable einen Wert zu zu weisen benötigen wir...",
        color: "#2604FF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...ein '=' , einen typ- entsprechenden Wert & ein ';'.",
        color: "#2604FF",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Variablen, die LOKAL deklariert werden,...",
        color: "#1E8449",
        pic: "assets/clipart2.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...sind nur innerhalb dieser Funktion verfügbar.",
        color: "#1E8449",
        pic: "assets/clipart2.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Variablen, die GLOBAL deklariert werden,...",
        color: "#FF1100",
        pic: "",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...sind überall verfügbar.",
        color: "#FF1100",
        pic: "",
        background: "assets/backgroundCard2.png"
    }


];
console.log("im Moment sind so viele Karten in deinem Array " + cardsOnField.length);


// Array cards wild durchmischeln / hier wird ein fisher yates algorithmus verwendet, damit sich keine Reihenfolge wiederholt
//QUELLE: youtube video: https://www.youtube.com/watch?v=5sNGqsMpW1E 
function shuffleCardsEASY(cards): void {
    for (let i: number = 8 - 1; i > 0; i--) {
        const randomNumber: number = Math.floor(Math.random() * (i + 1)); //randomNumber spuckt uns eine random zahl aus unserem arrays raus
        const temp: number = cards[i];
        cards[i] = cards[randomNumber];
        cards[randomNumber] = temp; //temp ist dafür da den ausgesuchten wert mit der randomnumber  zu swappen
        //i kann natürlich nicht kleiner als null sein, da es nur 8 karten hier gibt die zum shufflen da sind
        //um zu verhindern, dass keine pärchen bei spielstärke EASY da sind, werden nur die ersten 8 Karten aus meinem Array cards verwendet

    }

}

function shuffleCardsAVERAGE(cards): void {
    for (let i: number = 16 - 1; i > 0; i--) {
        const randomNumber: number = Math.floor(Math.random() * (i + 1));
        const temp: number = cards[i];
        cards[i] = cards[randomNumber];
        cards[randomNumber] = temp;

    }

}

function shuffleCardsHARD(cards): void {
    for (let i: number = 32 - 1; i > 0; i--) {
        const randomNumber: number = Math.floor(Math.random() * (i + 1));
        const temp: number = cards[i];
        cards[i] = cards[randomNumber];
        cards[randomNumber] = temp;

    }

}




window.addEventListener("load", function (): void {

    yourScoreDOMElement = document.querySelector(".yourScore");
    rivalScoreDOMElement = document.querySelector(".rivalScore");

    //Diese Funktion erstellt sowohl eine Flexbox abhängig von der Anzahl an Karten/ der Spielstärke und erstellt eine Karte/ ein div. 
    //Der Karte werden Attribute angehängt wie in meinem Objekt-Array cards beschrieben ( text, color, pic, background)
    function CreateGAME(card: Card, cardsnumber: number): void {


        yourScoreDOMElement.innerHTML = "Your <p> score: </p>" + yourScore;
        rivalScoreDOMElement.innerHTML = "Rival's <p> score: </p>" + rivalScore;

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
        //jedem div , jeder karte die erstellt wird, wird color, text und pic übergeben 

        //Dem divElement wird die property Farbe zugewiesen  
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
        if (card.pic != "" && cardsnumber != 32) {
            if (cardsnumber == 8) {
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

        //Je nach Spielstärke werden so und so viele Karten in das Array cardsOnField gepusht
        //So kann der computer randomly davon 2 karten aufdecken, die auch wirklich auf dem Spielfeld sind
        cardsOnField.push({
            reverse: background,
            uncovered: card1,
            properties: card
        });

        //Jede card1 / also jede erzeugte Karte soll klickbar sein, also füge ich den eventlistener direkt hier ein an meine 
        //Variable card1, die in diesem Codeblock deklariert und auffindbar ist 
        card1.addEventListener("click", function (): void {

            if (youCanClick == false) {
                return;
            }

            //Anweisungen, um die karten zu flippen 
            background.style.visibility = "hidden";
            //Die karte, die geklickt wurde, kommt in den Array selected 
            selected.push({
                reverse: background,
                uncovered: card1,
                properties: card
            });
            console.log(selected.length);

            //sobald 2 karten aufgedeckt worden sind, soll verglichen werden, es sollen nicht mehr als 2 Karten aufdeckbar sein 
            if (selected.length == 2) {

                youCanClick = false;

                //die FUnktion checkformatch ist weiter unten auffindbar 
                let itsaMatch: boolean = checkForMatch(selected[0], selected[1]);

                if (itsaMatch == true) {
                    //mit einem SetTimeoit legt man fest wie schnell dieser vergleichsprozess stattfinden soll
                    setTimeout(function (): void {
                        //Wenn es sich um ein Pärchen handelt, sollen diese 2 Karten verschwinden und der Score erhöht werden
                        //und das Array selected wird wieder geleert
                        selected[0].uncovered.style.visibility = "hidden";
                        selected[1].uncovered.style.visibility = "hidden";
                        youCanClick = true;

                        matchSound.play();

                        //die zusammmen gehörigen Karten werden aus dem Array CardsOnField rausgeschnitten, dass der rival diese
                        //nicht mehr zufällig aussuchen kann
                        cardsOnField.splice(cardsOnField.indexOf(selected[0]), 1);
                        cardsOnField.splice(cardsOnField.indexOf(selected[1]), 1);
                        selected = [];
                        console.log(selected.length);

                        //der score des interaktiven Nutzers wird um eine ganze Zahl erhöht
                        yourScore++;
                        //folglich wird der DOM so manipuliert -> es folgt eine immer aktuelle Score Anzeige 
                        yourScoreDOMElement.innerHTML = "Your <p> score: </p>" + yourScore;
                        // Es soll überprüft werden ob die Karten nach dem Finden eines Matches auch wirklich us dem Array gelöscht werden 
                        console.log(cardsOnField.length + " Karten sind noch auf dem Spielfeld");
                    },         2200);
                }
                //Wenn es sich nicht um ein Pärchen handelt soll nach wenigen Augenblicken die Karte wieder zugedeckt
                //werden, indem wir den style wieder auf visible verändern
                if (itsaMatch == false) {
                    setTimeout(function (): void {
                        selected[0].reverse.style.visibility = "visible";
                        selected[1].reverse.style.visibility = "visible";

                        //auch hier wird der Array wieder geleert, um neue Karten auszuwählen und das nach jedem try
                        selected = [];
                        console.log(" es sind wieder " + selected.length + " Karten selected");


                    },         2200);

                    //Wenn ich kein Match gefunden habe, soll wieder der rival nach einem timout dran sein 
                    //So verdecken sich die KArten erst wieder, bevor der rival schon 2 aufdeckt 
                    setTimeout(function (): void {
                        console.log(cardsOnField.length + " Karten sind noch auf dem Spielfeld");
                        rivalsTurn();
                    },         3500);
                }
            }
        });


    }

    function rivalsTurn(): void {

        youCanClick = false;

        //es werden zwei karten aus dem array cardsOnField gezogen, die dann aufgedeckt werden sollen 
        let pickedCard1: SelectedCard = cardsOnField[Math.floor(Math.random() * (cardsOnField.length))];
        let pickedCard2: SelectedCard = cardsOnField[Math.floor(Math.random() * (cardsOnField.length))];
        //Wenn ausversehen dieselbe Karte ausgewählt wird soll solange nach neuen karten geguckt werden bis es sich 
        //nicht mehr um dieselbe Karte handelt
        while (pickedCard1 == pickedCard2) {
            pickedCard2 = cardsOnField[Math.floor(Math.random() * (cardsOnField.length))];
        }

        setTimeout(function (): void {
            //es sollen nicht beide karten gleichzeitig aufgedeckt werden
            pickedCard1.reverse.style.visibility = "hidden";

        },         1600);
        setTimeout(function (): void {
            //es sollen nicht beide karten gleichzeitig aufgedeckt werden
            pickedCard2.reverse.style.visibility = "hidden";

        },         500);

        //die beiden Karten werden wieder mit der Funktion checkforMatch verglichen
        let itsaMatch: boolean = checkForMatch(pickedCard1, pickedCard2);
        //Je nach dem, ob es sich um ein Pärchen handelt soll der rivalScore dementsprechend angepasst werden
        //und die Karten verschwinden oder werden erneut zugedeckt
        if (itsaMatch == true) {
            setTimeout(function (): void {

                pickedCard1.uncovered.style.visibility = "hidden";
                pickedCard2.uncovered.style.visibility = "hidden";

                matchSound.play();

                //Die 2 zusammenpassenden Karten werden komplett aus dem Array gestrichen, damit sie nicht nochmal 
                //ausgewählt werden können / die 1 bei splice sagt wie viele Elemente rausgeschnitten werden und da wir 
                //den index von der zufälligen karte nicht kennen benutzen wir indexOf
                cardsOnField.splice(cardsOnField.indexOf(pickedCard1), 1);
                cardsOnField.splice(cardsOnField.indexOf(pickedCard2), 1);

                rivalScore++;
                rivalScoreDOMElement.innerHTML = "Rival's <p> score: </p>" + rivalScore;
                console.log(cardsOnField.length + " Karten sind noch auf dem Spielfeld");

                //Wenn es sich um ein Pärchen gehandelt hat, soll nochmal die Funktion rivalsTurn aufgerufen werden 
                rivalsTurn();

            },         3000);


        }
        if (itsaMatch == false) {

            
            setTimeout(function (): void {
                pickedCard1.reverse.style.visibility = "visible";
                pickedCard2.reverse.style.visibility = "visible";
                youCanClick = true;
            },         3000);

        }
        
    }

    //Funktion Start soll nach dem Auswählen einer Spielstärke ausgeführt werden, mit der Forschleife und dessen Zählervariable
    //wird später festgelegt wie viele divs mit den jeweiligen Attributen erzeugt werden sollen
    function start(numberOfCards: number): void {
        for (var i: number = 0; i < numberOfCards; i++)
            CreateGAME(cards[i], numberOfCards);


    }

    function checkForMatch(firstCard: SelectedCard, secondCard: SelectedCard): boolean {
        //anhand der Farbe wird hier verglichen, ob es sich um ein Match handelt. Dementsprechend wird der boolean angepasst
        return firstCard.properties.color === secondCard.properties.color;
    }
    //Eventlistener für jeden Button EASY AVERAGE HARD, Button sollen verschwinden UND CreateGAME funktion wird ausgeführt
    //es wird übergeben wie viele karten erzeugt werden sollen und das Array wird bei jedem Klick neu geshufflet
    document.getElementById("button1").addEventListener("click", function (): void {

        buttonBox.style.visibility = "hidden";
        shuffleCardsEASY(cards);
        start(8);
        console.log("So viele Karten wurden hinzugefügt " + cardsOnField.length);
        rivalsTurn();
    });

    document.getElementById("button2").addEventListener("click", function (): void {

        buttonBox.style.visibility = "hidden";
        shuffleCardsAVERAGE(cards);
        start(16);
        console.log("So viele Karten wurden hinzugefügt " + cardsOnField.length);
        rivalsTurn();
    });

    document.getElementById("button3").addEventListener("click", function (): void {

        buttonBox.style.visibility = "hidden";
        shuffleCardsHARD(cards);
        start(32);
        console.log("So viele Karten wurden hinzugefügt " + cardsOnField.length);
        rivalsTurn();
    });
});

