    //1.1 - creo costante pulsante 'START'
    const start = document.getElementById('start');
    //2.1 - creo costante collegata al container
    const container = document.getElementById('container');
    //2.2 - creo costante collegata alla grid
    const grid = document.getElementById('grid');
    //2.3 - creo variabile square
    let square = "";
    //3 - addEventListner al click del bottone start
    start.addEventListener('click', function () {
        //se c'è, rimuovo la classe che mi impedisce di cliccare una volta perso
        grid.classList.remove('events-none');
        //7 - creo array di 16 numeri casuali in una funzione
        //7.1 - definisco l'array vuoto con una costante
        const arrayBombs = []
        function createBombsArray(min,max) {
            let i = 0;
            //7.2 - con un ciclo while genero i 16 numeri
            while (i < 16) {
                //7.2.1 - dichiaro in una variabile il valore del singolo numero casuale 
                 let rndNbr = Math.floor(Math.random() * (max - min + 1) + min);
                //7.2.2 - se l'array non contiene il numero appena creato, inserisco tale numero nell'array
                 if(!arrayBombs.includes(rndNbr)){
                    arrayBombs.push(rndNbr);
                    i++
                 }  
            
            }   
            return arrayBombs;
        }

        //4 - creo costante del numero dei riquadri in base al value della select
        let difficulty = document.getElementById('select').value;
        let squaresNumber;
        //5 - creo uno switch per determinare il numero dei riquadri in base alla scelta del giocatore
        switch (difficulty) {
            case "1":
                squaresNumber = 100;
                break;
            case "2":
                squaresNumber = 81;
                break;
            case "3":
                squaresNumber = 49;
                break;
            default:
                squaresNumber = 100;
                break;
            }
            
            console.log(squaresNumber);
        //invoco la funzione per la creazione dell'array delle bombe
        createBombsArray (1, squaresNumber);

    //10.1 - creo una funzione per mostrare le bombe a schermo
    function showAllBombs(arrayBombs) {
        //10.1.1 -  dichiaro una variabile relativa al numero dei quadrati ( celle )
        let cells
        //10.1.2 -  in base alla scelta della difficoltà seleziono quale classe recuperare dall'HTMl 
        switch (difficulty) {
            case "1":
                cells = document.getElementsByClassName('square-easy');
                break;
            case "2":
                cells = document.getElementsByClassName('square-normal');
                break;
            case "3":
                cells = document.getElementsByClassName('square-hard');
                break;
            default:
                cells = document.getElementsByClassName('square-easy');
                break;
            }
        //10.1.3 - creo un ciclo for da 1 fino alla al numero delle celle
        for (let i = 1; i <=  cells.length; i++) {
            //10.1.3.1 - dichiaro una variabile relativa al numero di iterazione attuale delle celle da collegare alla singola cella
            let cell = cells[i-1];
            // 10.1.3.2 - se il numero di iterazione attuale è presente nell'array delle bombe...
            if(arrayBombs.includes(i)){
                //10.1.3.2.1 - ...aggiungo la classe 'bg-bomb' alla cell attuale
                cell.classList.add('bg-bomb')
            }     
        }
        
    }
    //9.2 - creo variabile contatore FUORI dal ciclo
    let counter = 0;
    //3.1 - creo ciclo for per generare gli square in base al valore relativo alla difficoltà
    grid.innerHTML = "";
    for (let i = 1; i <= squaresNumber; i++) {
        //3.1.1 - creo l'elemento div all'interno della grid
        square = grid.appendChild(document.createElement('div'));
        //6 - creo uno stwitch al posto del punto 3.1.2 per determinare quale classe assegnare allo square in base alla difficoltà
        switch (difficulty) {
            case "1":
                square.className = 'square-easy';
                break;
            case "2":
                square.className = 'square-normal';
                break;
            case "3":
                square.className = 'square-hard';
                break;
            default:
                square.className = 'square-easy';
                break;
            }
            
        //3.1.3 - visualizzo il numero dell'iterazione nel suo square
        square.append(i)
        //3.1.4 - addEventListner al click dello square
        square.addEventListener('click', function() {
            //3.1.4.1- assegno classe bg-blue allo square
            this.classList.toggle('bg-blue');
            //8 - verifico quando clicco uno square se abbia il numero uguale ad uno dei numeri inseriti nell'array delle bombe
            if(arrayBombs.includes(parseInt(i))){
                 //8.1 - Se così fosse, aggiungo la class 'bg-bomb' al div cliccato e faccio apparire l'alert 'Hai perso'
                this.classList.add('bg-bomb');
                alert('BOOM! Hai perso');
                showAllBombs(arrayBombs);
                //9.4 - mostro il risultato collegandomi all'ID creato nell'HTML
                document.getElementById('score').innerText = counter;
                //impedisco di cliccare su altre caselle quando si perde
                grid.classList.add('events-none');
            }
             //9.3 - se non clicco una bomba, il contatore aumenta di 1
            else {
                counter++;
            }

            if(counter == squaresNumber - 16){
                alert('HAI VINTO!')
                showAllBombs(arrayBombs);

            }

            //3.1.4.2 - visualizzo numero dello suqare cliccato in console log
            console.log(i);
            
            console.log(counter);
        }) 
        
    }
    console.log(arrayBombs);
    
})



