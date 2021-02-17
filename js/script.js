var buttons = [];
var buttonBox = document.getElementById("buttonBox");
//zu Beginn werden 3 buttons erzeugt, die später wieder gelöscht werden, wenn die Karten erscheinen
//die Buttons entsprechen der Auswahl der Spielstärke 
function createButton() {
    var button1 = document.createElement("div");
    button1.id = "button1";
    button1.innerHTML = "EASY";
    var button2 = document.createElement("div");
    button2.id = "button2";
    button2.innerHTML = "MEDIUM";
    var button3 = document.createElement("div");
    button3.id = "button3";
    button3.innerHTML = "HARD";
    document.querySelector("#buttonBox").appendChild(button1);
    document.querySelector("#buttonBox").appendChild(button2);
    document.querySelector("#buttonBox").appendChild(button3);
    buttons.push(button1, button2, button3);
}
//sobald die Seite geladen hat, erscheinen die 3 Buttons mit den verschiedenen Spielstärken
window.addEventListener("load", function () {
    createButton();
    console.log("so viele buttons wurden hinzugefügt " + buttons.length);
});
//Funktion um wieder auf die Startseite zu gelanden - 3 Buttons/ 3 Spielstärken erscheinden wieder 
//quick & dirty , aber so kann man erneut spielen 
document.querySelector(".fa-redo").addEventListener("click", function () {
    location.reload();
});
//Deklaration vieler Arrays , Variablen , Objekten 
var yourScore = 0;
var rivalScore = 0;
var yourScoreDOMElement;
var rivalScoreDOMElement;
var card1;
//unsichtbare h1 Überschrift die später den Gewinner bekannt gibt 
var winner = document.createElement("h1");
winner.id = "winner";
document.body.appendChild(winner);
winner.style.visibility = "hidden";
//Variablen der ganzen Sounds, die später abgespielt werden mit .play()
var cheerSound = new Audio("../assets/cheerSound.mp3");
var matchSound = new Audio("../assets/itsaMatch.mp3");
var gameOverSound = new Audio("../assets/gameOver.wav");
//Hier werden die zwei geklickten karten rein gepusht, die nach paar sekunden wieder gelöscht werden,
//es beifnden sich so maximal 2 Karten in diesem Array 
var selected = [];
//boolean, der bei der Funktion checkForMatch bei einem Match auf true gesetzt wird
var itsaMatch;
//boolean- nur wenn dieser true ist kann der User karten aufdecken / anlicken - sonst nicht
var youCanClick;
//Die karten die erzeugt werden bei der jeweiligen Spielstärke werden wiederum in ein Array gepusht 
//SO kann der Computer nur Karten randomly aussuchen, die sich auch wirklich auf dem Spielfeld befinden 
var cardsOnField = [];
//Hier sind alle 32 Karten gespeichert, mit ihren einzelnen Merkmalen 
//ACHTUNG es folgen viiiiiiele Zeilen 
var cards = [
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
        text: "Funktionen sind Anweisungs- blöcke, die...  ",
        color: "#FA9806",
        pic: "assets/clipart13.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...best. Aufgaben zu 1 Zeitpunkt ausführen.",
        color: "#FA9806",
        pic: "assets/clipart13.png",
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
        text: "LET-Variablen sind nur in dem Bereich gültig,...",
        color: "#01FFFF",
        pic: "assets/clipart14.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...in dem sie deklariert wurden. ",
        color: "#01FFFF",
        pic: "assets/clipart14.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Um Funktionen am best. Zeitpunkt aufzurufen,...",
        color: "#FFCCCC",
        pic: "assets/clipart15.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...benutzen wir Events.",
        color: "#FFCCCC",
        pic: "assets/clipart15.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Um 1 Variable 1 Wert zu zu weisen benötigen wir...   ",
        color: "#2604FF",
        pic: "assets/clipart17.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...1 '=' , 1 typ- entsprechenden Wert & 1 ';'. ",
        color: "#2604FF",
        pic: "assets/clipart17.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Variablen, die LOKAL deklariert werden,..",
        color: "#1E8449",
        pic: "assets/clipart2.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...sind innerhalb der Funktion verfügbar",
        color: "#1E8449",
        pic: "assets/clipart2.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "Variablen, die GLOBAL deklariert werden,...",
        color: "#FF1100",
        pic: "assets/clipart16.png",
        background: "assets/backgroundCard2.png"
    },
    {
        text: "...sind überall verfügbar.",
        color: "#FF1100",
        pic: "assets/clipart16.png",
        background: "assets/backgroundCard2.png"
    }
];
console.log("im Moment sind so viele Karten in deinem Array " + cardsOnField.length);
// Array cards wild durchmischeln / hier wird ein fisher yates algorithmus verwendet, damit sich keine Reihenfolge wiederholt
//QUELLE: youtube video: https://www.youtube.com/watch?v=5sNGqsMpW1E 
//Die Typisierung T [] hier erlaubt uns Arrays des Typs number []  und des Typs Card[] zu shufflen
function shuffle(allTheCards) {
    for (var i = allTheCards.length - 1; i > 0; i--) {
        var randomNumber = Math.floor(Math.random() * (i + 1)); // randomNUmber sucht uns einen random Wert aus unserem Array
        var temporary = allTheCards[i]; // und temporay hat die Funktion die die Stellen zu swappen
        allTheCards[i] = allTheCards[randomNumber];
        allTheCards[randomNumber] = temporary;
    }
    return allTheCards;
}
//diese Funktion wird ausgeführt sobald das Array CArdsOnField leer ist, sprich wenn keine Karten mehr auf der Spielfäche liegen
function WhoIsTheWinner() {
    //das wird angezeigt falls der computer gewinnt
    if (yourScore < rivalScore) {
        setTimeout(function () {
            console.log("game over");
            winner.style.visibility = "visible";
            winner.innerHTML = "GAME OVER";
            gameOverSound.play();
            rivalScoreDOMElement.style.visibility = "hidden";
            yourScoreDOMElement.style.visibility = "hidden";
        }, 2000);
    }
    //das hier wird ausgeführt wenn der Spieler /User gewinnt
    if (yourScore > rivalScore) {
        setTimeout(function () {
            winner.style.visibility = "visible";
            winner.innerHTML = "YOU WON !!!";
            rivalScoreDOMElement.style.visibility = "hidden";
            yourScoreDOMElement.style.visibility = "hidden";
            cheerSound.play();
        }, 2000);
    }
    //Und das hier bei dem Fall: Unentschieden 
    if (rivalScore == yourScore) {
        setTimeout(function () {
            winner.style.visibility = "visible";
            winner.innerHTML = "IT ENDED IN A TIE...";
            gameOverSound.play();
            rivalScoreDOMElement.style.visibility = "hidden";
            yourScoreDOMElement.style.visibility = "hidden";
        }, 2000);
    }
}
window.addEventListener("load", function () {
    yourScoreDOMElement = document.querySelector(".yourScore");
    rivalScoreDOMElement = document.querySelector(".rivalScore");
    //Diese Funktion erstellt sowohl eine Flexbox abhängig von der Anzahl an Karten/ der Spielstärke und erstellt eine Karte/ ein div. 
    //Der Karte werden Attribute angehängt wie in meinem Objekt-Array cards beschrieben ( text, color, pic, background)
    function CreateGAME(card, cardsnumber) {
        yourScoreDOMElement.innerHTML = "Your <p> score: </p>" + yourScore;
        rivalScoreDOMElement.innerHTML = "Rival's <p> score: </p>" + rivalScore;
        //erstellen der Memoryboards in Abhängigkeit zur anzahl an karten, damit sie schön geordnet liegen 
        if (cardsnumber == 8) {
            var memoryBoard = document.createElement("div");
            memoryBoard.id = "memoryBoard1";
            document.querySelector(".box").appendChild(memoryBoard);
        }
        if (cardsnumber == 16) {
            var memoryBoard = document.createElement("div");
            memoryBoard.id = "memoryBoard2";
            document.querySelector(".box").appendChild(memoryBoard);
        }
        if (cardsnumber == 32) {
            var memoryBoard = document.createElement("div");
            memoryBoard.id = "memoryBoard3";
            document.querySelector(".box").appendChild(memoryBoard);
        }
        //Erstellen der Karte/ des divs, dessen Klasse zuvor in css deklariert wurde
        var card1 = document.createElement("div");
        card1.className = "cardforeground";
        //jedem div , jeder karte die erstellt wird, wird color, text und pic übergeben 
        //Dem divElement wird die property Farbe zugewiesen  
        card1.style.background = card.color;
        if (cardsnumber == 16) {
            //erstellen eines Textes nur bei 16 und 32 karten 
            var texto = document.createElement("label");
            texto.className = "texto";
            texto.innerHTML = card.text;
            card1.appendChild(texto);
        }
        if (cardsnumber == 32) {
            //erstellen eines Textes nur bei 16 und 32 karten 
            var texto = document.createElement("label");
            texto.className = "textoHARD";
            texto.innerHTML = card.text;
            card1.appendChild(texto);
        }
        //nur wenn bei dem Objekt eine Bildquelle vorhanden ist, soll die Option eines Bildes erst da sein
        //sont hat jede karte (auch wenn kein Bild vorhanden ist) einen störenden leeren Rahmen
        if (card.pic != "" && cardsnumber != 32) {
            if (cardsnumber == 8) {
                //erstelllen der Piktogramme
                var picto = document.createElement("img");
                picto.className = "pictoEASY";
                picto.src = card.pic;
                card1.appendChild(picto);
            }
            else {
                var picto = document.createElement("img");
                picto.className = "picto";
                picto.src = card.pic;
                card1.appendChild(picto);
            }
        }
        //erstellen eines vierten attributs, um alle karten zu bedecken, dieses Bild wird dem div card1 angehängt im DOM
        //und in css positioniert, um alle gestylten karten zu bedecken 
        var background = document.createElement("img");
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
        card1.addEventListener("click", function () {
            //sollte dieser boolean false sein wird mit return der rest des Codes innerhalb der klammern nicht berücksichtigt 
            //so kann der user nicht klicken und keine Karten aufdecken 
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
                var itsaMatch_1 = checkForMatch(selected[0], selected[1]);
                if (itsaMatch_1 == true) {
                    //mit einem SetTimeoit legt man fest wie schnell dieser vergleichsprozess stattfinden soll
                    setTimeout(function () {
                        //Wenn es sich um ein Pärchen handelt, sollen diese 2 Karten verschwinden und der Score erhöht werden
                        //und das Array selected wird wieder geleert
                        selected[0].uncovered.style.visibility = "hidden";
                        selected[1].uncovered.style.visibility = "hidden";
                        youCanClick = true;
                        //ein matchsound ertönt
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
                        //wenn das array cardsonfield leer ist/ wenn keine Karten mehr auf dem Spielfeld liegen
                        //soll der Gewinner bekannt gegeben werden
                        if (cardsOnField.length == 0) {
                            WhoIsTheWinner();
                            console.log("we have a winner");
                        }
                    }, 2000);
                }
                //Wenn es sich nicht um ein Pärchen handelt soll nach wenigen Augenblicken die Karte wieder zugedeckt
                //werden, indem wir den style wieder auf visible verändern
                if (itsaMatch_1 == false) {
                    setTimeout(function () {
                        selected[0].reverse.style.visibility = "visible";
                        selected[1].reverse.style.visibility = "visible";
                        //auch hier wird der Array wieder geleert, um neue Karten auszuwählen und das nach jedem try
                        selected = [];
                        console.log(" es sind wieder " + selected.length + " Karten selected");
                        //Wenn ich kein Match gefunden habe, soll wieder der rival nach einem timout dran sein 
                        //So verdecken sich die KArten erst wieder, bevor der rival schon 2 aufdeckt 
                        setTimeout(function () {
                            console.log(cardsOnField.length + " Karten sind noch auf dem Spielfeld");
                            rivalsTurn();
                        }, 1000);
                    }, 2000);
                }
            }
        });
    }
    //funltion des imagnären gegners 
    function rivalsTurn() {
        //sobald der rival dran ist soll der user keine Karten aufdecken können 
        youCanClick = false;
        //die farben der scores ändern sich so, damit der user sehen kann wer im moment dran ist
        yourScoreDOMElement.style.color = "white";
        rivalScoreDOMElement.style.textShadow = "1px 3px 5px #c9c9c9";
        rivalScoreDOMElement.style.color = "blue";
        //es werden zwei karten aus dem array cardsOnField gezogen, die dann aufgedeckt werden sollen 
        var pickedCard1 = cardsOnField[Math.floor(Math.random() * (cardsOnField.length))];
        var pickedCard2 = cardsOnField[Math.floor(Math.random() * (cardsOnField.length))];
        //Wenn ausversehen dieselbe Karte ausgewählt wird soll solange nach neuen karten geguckt werden bis es sich 
        //nicht mehr um dieselbe Karte handelt
        while (pickedCard1 == pickedCard2) {
            pickedCard2 = cardsOnField[Math.floor(Math.random() * (cardsOnField.length))];
        }
        setTimeout(function () {
            //es sollen nicht beide karten gleichzeitig aufgedeckt werden
            pickedCard1.reverse.style.visibility = "hidden";
        }, 1500);
        setTimeout(function () {
            //es sollen nicht beide karten gleichzeitig aufgedeckt werden
            pickedCard2.reverse.style.visibility = "hidden";
        }, 1000);
        //die beiden Karten werden wieder mit der Funktion checkforMatch verglichen
        var itsaMatch = checkForMatch(pickedCard1, pickedCard2);
        //Je nach dem, ob es sich um ein Pärchen handelt soll der rivalScore dementsprechend angepasst werden
        //und die Karten verschwinden oder werden erneut zugedeckt
        if (itsaMatch == true) {
            setTimeout(function () {
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
                //hier ist der return wichtig, damit der rest des codes nicht berücksichtigt wird. SOnst wird die rivalsTurn function
                //nochmals aufgerufen und der browser hängt sich durch die obige while Schleife auf, da beide pickedcards 0 entsprechen 
                //-> es kommt zu einer endlos schleife
                if (cardsOnField.length == 0) {
                    WhoIsTheWinner();
                    console.log("we have a winner");
                    return;
                }
                //Wenn es sich um ein Pärchen gehandelt hat, soll nochmal die Funktion rivalsTurn aufgerufen werden 
                setTimeout(function () {
                    rivalsTurn();
                }, 1000);
            }, 2500);
        }
        if (itsaMatch == false) {
            setTimeout(function () {
                //Bei keinem match drehen sich die karten wieder um und der user kann wieder maximal 2 karten aufdecken 
                pickedCard1.reverse.style.visibility = "visible";
                pickedCard2.reverse.style.visibility = "visible";
                youCanClick = true;
                //die farbe der scores wird wieder angepasst 
                yourScoreDOMElement.style.color = "orange";
                yourScoreDOMElement.style.textShadow = "1px 3px 5px #c9c9c9";
                rivalScoreDOMElement.style.color = "white";
            }, 3000);
        }
    }
    //Funktion Start soll nach dem Auswählen einer Spielstärke ausgeführt werden, mit der Forschleife und dessen Zählervariable
    //wird später festgelegt wie viele divs mit den jeweiligen Attributen erzeugt werden sollen
    function start(numberOfCards) {
        //DIe hälfte aller karten werden hier rein gepusht- Spich jeweils nur ein Partner befindet sich hier drin/ diese werden 
        //dann mit der shuffle funktion vermischt
        var allTheIndices = [];
        for (var i_1 = 0; i_1 < cards.length / 2; i_1++) {
            //jeweils eine Karte jeden Paares ist in diesem Array dann drin
            allTheIndices.push(i_1);
        }
        //diese werden mit der Funktion shuffle durch gemischelt
        shuffle(allTheIndices);
        //hier sind dann die Paare später drin die nach auswählen der spielstärke gezeigt werden
        var mixedArray = [];
        //Wenn 8 Karten auf dem Spielfeld sind
        if (numberOfCards == 8) {
            //sollen IMMER 4 Pärchen da sein
            var availablePairs = 4;
            for (var i_2 = 0; i_2 < availablePairs; i_2++) {
                var index = allTheIndices[i_2] * 2; //um die jeweiligen Gegenkarten hinzuzufügen
                var oneCard = cards[index];
                var otherCard = cards[index + 1];
                mixedArray.push(oneCard);
                mixedArray.push(otherCard);
                //somit befinden sich PAARE in dem Array und nicht einfach nur 8 random karten von 32
            }
            shuffle(mixedArray);
            for (var i = 0; i < numberOfCards; i++) {
                CreateGAME(mixedArray[i], numberOfCards);
            }
        }
        //Wenn 16 Karten auf dem Spielfeld sind
        if (numberOfCards == 16) {
            //sollen IMMER 8 Pärchen da sein
            var availablePairs = 8;
            for (var i_3 = 0; i_3 < availablePairs; i_3++) {
                var index = allTheIndices[i_3] * 2; //um die jeweiligen Gegenkarten hinzuzufügen
                var oneCard = cards[index];
                var otherCard = cards[index + 1];
                mixedArray.push(oneCard);
                mixedArray.push(otherCard);
            }
            shuffle(mixedArray);
            for (var i2 = 0; i2 < numberOfCards; i2++) {
                CreateGAME(mixedArray[i2], numberOfCards);
            }
        }
        //Wenn 32 Karten auf dem Spielfeld sind
        if (numberOfCards == 32) {
            //sollen IMMER 16 Pärchen da sein
            var availablePairs = 16;
            for (var i_4 = 0; i_4 < availablePairs; i_4++) {
                var index = allTheIndices[i_4] * 2; //um die jeweiligen Gegenkarten hinzuzufügen
                var oneCard = cards[index];
                var otherCard = cards[index + 1];
                mixedArray.push(oneCard);
                mixedArray.push(otherCard);
            }
            shuffle(mixedArray);
            for (var i3 = 0; i3 < numberOfCards; i3++) {
                CreateGAME(mixedArray[i3], numberOfCards);
            }
        }
    }
    function checkForMatch(firstCard, secondCard) {
        //anhand der Farbe wird hier verglichen, ob es sich um ein Match handelt. Dementsprechend wird der boolean angepasst
        return firstCard.properties.pic === secondCard.properties.pic;
    }
    //Eventlistener für jeden Button EASY AVERAGE HARD, Button sollen verschwinden UND CreateGAME funktion wird ausgeführt
    //es wird übergeben wie viele karten erzeugt werden sollen und das Array wird bei jedem Klick neu geshufflet
    document.getElementById("button1").addEventListener("click", function () {
        buttonBox.style.visibility = "hidden";
        start(8);
        console.log("So viele Karten wurden hinzugefügt " + cardsOnField.length);
        rivalsTurn();
    });
    document.getElementById("button2").addEventListener("click", function () {
        buttonBox.style.visibility = "hidden";
        start(16);
        console.log("So viele Karten wurden hinzugefügt " + cardsOnField.length);
        rivalsTurn();
    });
    document.getElementById("button3").addEventListener("click", function () {
        buttonBox.style.visibility = "hidden";
        start(32);
        console.log("So viele Karten wurden hinzugefügt " + cardsOnField.length);
        rivalsTurn();
    });
});
//# sourceMappingURL=script.js.map