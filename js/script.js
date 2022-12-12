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
                document.getElementById('score').innerText = counter
            }
             //9.3 - se non clicco una bomba, il contatore aumenta di 1
            else {
                counter++;
            }

            //3.1.4.2 - visualizzo numero dello suqare cliccato in console log
            console.log(i);
            
            console.log(counter);
        }) 

    
        
    }
    console.log(arrayBombs);
    
})







//     //4.1 - creo costante collegata a normal
//     const normal = document.getElementById('button-normal');
//     //4.2 - creo costante collegata a hard
//     const hard = document.getElementById('button-hard');

// //5 - addEventListner al click di normal
// normal.addEventListener('click', function () {
//     //5.1 - creo ciclo for per generare 81 square
//     grid.innerHTML = "";
//     for (let i = 1; i <= 81; i++) {
//         //5.1.1 - creo l'elemento div all'interno della grid
//         square = grid.appendChild(document.createElement('div'));
//         //5.1.2 - assegno classe square-normal al div creato
//         square.className = 'square-normal';
//         //5.1.3 - visualizzo il numero dell'iterazione nel suo square
//         square.append(i)
//         //5.1.4 - addEventListner al click dello square
//         square.addEventListener('click', function() {
//             //5.1.4.1- assegno classe bg-blue allo square
//             this.classList.toggle('bg-blue')
//             //5.1.4.2 - visualizzo numero dello suqare cliccato in console log
//             console.log(i);
//         }) 
//     }
// })

// //6 - addEventListner al click di hard
// hard.addEventListener('click', function () {
//     //6.1 - creo ciclo for per generare 49 square
//     grid.innerHTML = "";
//     for (let i = 1; i <= 49; i++) {
//         //6.1.1 - creo l'elemento div all'interno della grid
//         square = grid.appendChild(document.createElement('div'));
//         //6.1.2 - assegno classe square-hard al div creato
//         square.className = 'square-hard';
//         //6.1.3 - visualizzo il numero dell'iterazione nel suo square
//         square.append(i)
//         //6.1.4 - addEventListner al click dello square
//         square.addEventListener('click', function() {
//             //6.1.4.1- assegno classe bg-blue allo square
//             this.classList.toggle('bg-blue')
//             //6.1.4.2 - visualizzo numero dello suqare cliccato in console log
//             console.log(i);
//         }) 
//     }
// })


