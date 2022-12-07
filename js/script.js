    //1.1 - creo costante pulsante 'START'
    const start = document.getElementById('start');
    //2.1 - creo costante collegata al container
    const container = document.getElementById('container');
    //2.2 - creo costante collegata alla grid
    const grid = document.getElementById('grid');
    //2.3 - creo variabile square
    let square = ""
    //3 - addEventListner al click del bottone start
    start.addEventListener('click', function () {
        //4 - creo costante del numero dei riquadri in base al value della select
        let difficulty = document.getElementById('select').value;
        let squaresNumber
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
    //3.1 - creo ciclo for per generare 100 square
    grid.innerHTML = "";
    for (let i = 1; i <= squaresNumber; i++) {
        //3.1.1 - creo l'elemento div all'interno della grid
        square = grid.appendChild(document.createElement('div'));
        //3.1.2 - assegno classe square al div creato
        square.className = 'square';
        //3.1.3 - visualizzo il numero dell'iterazione nel suo square
        square.append(i)
        //3.1.4 - addEventListner al click dello square
        square.addEventListener('click', function() {
            //3.1.4.1- assegno classe bg-blue allo square
            this.classList.toggle('bg-blue')
            //3.1.4.2 - visualizzo numero dello suqare cliccato in console log
            console.log(i);
        }) 
    }
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

