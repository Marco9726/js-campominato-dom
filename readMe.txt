L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//1 - creo bottone nell'html con id di riferimento
    //1.1 - creo costante collegata al bottone start
//2 - creo container e grid nell'html
    //2.1 - creo costante collegata al container
    //2.2 - creo costante collegata alla grid
    //2.3 - creo variabile square
//3 - addEventListner al click del bottone start
    //3.1 - creo ciclo for per generare 100 square
        //3.1.1 - creo l'elemento div all'interno della grid
        //3.1.2 - assegno classe square al div creato
        //3.1.3 - visualizzo il numero dell'iterazione nel suo square
            //3.1.4 - addEventListner al click dello square
                //3.1.4.1 - assegno classe bg-blue allo square
                //3.1.4.2 - visualizzo numero dello suqare cliccato in console log


//4 - creo costante del numero dei riquadri in base al value della select X
//5 - creo uno switch per determinare il numero dei riquadri in base alla scelta del giocatore X
//6 - creo uno stwitch al posto del punto 3.1.2 per determinare quale classe assegnare allo square in base alla difficoltà X

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//7 - creo array di 16 numeri casuali in una funzione
        //7.1 - definisco l'array vuoto con una costante
        //7.2 - con un ciclo while genero i 16 numeri
            //7.2.1 - dichiaro in una variabile il valore del singolo numero casuale 
            //7.2.2 - se l'array non contiene il numero appena creato, inserisco tale numero nell'array

