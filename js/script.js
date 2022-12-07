    //1.1 - creo costante collegata al bottone
    const easy = document.getElementById('button-easy');
    //2.1 - creo costante collegata al container
    const container = document.getElementById('container');
    //2.2 - creo costante collegata alla grid
    const grid = document.getElementById('grid');
    //2.3 - creo variabile square
    let square = ""
//3 - addEventListner al click del bottone
easy.addEventListener('click', function () {
    //3.1 - creo ciclo for per generare 100 square
    grid.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
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

    //4.1 - creo costante collegata a normal
    const normal = document.getElementById('button-normal');
    //4.2 - creo costante collegata a hard
    const hard = document.getElementById('button-hard');

//5 - addEventListner al click di normal
normal.addEventListener('click', function () {
    //5.1 - creo ciclo for per generare 81 square
    grid.innerHTML = "";
    for (let i = 1; i <= 81; i++) {
        //5.1.1 - creo l'elemento div all'interno della grid
        square = grid.appendChild(document.createElement('div'));
        //5.1.2 - assegno classe square-normal al div creato
        square.className = 'square-normal';
        //5.1.3 - visualizzo il numero dell'iterazione nel suo square
        square.append(i)
        //5.1.4 - addEventListner al click dello square
        square.addEventListener('click', function() {
            //5.1.4.1- assegno classe bg-blue allo square
            this.classList.toggle('bg-blue')
            //5.1.4.2 - visualizzo numero dello suqare cliccato in console log
            console.log(i);
        }) 
    }
})

//6 - addEventListner al click di hard
hard.addEventListener('click', function () {
    //6.1 - creo ciclo for per generare 49 square
    grid.innerHTML = "";
    for (let i = 1; i <= 49; i++) {
        //6.1.1 - creo l'elemento div all'interno della grid
        square = grid.appendChild(document.createElement('div'));
        //6.1.2 - assegno classe square-hard al div creato
        square.className = 'square-hard';
        //6.1.3 - visualizzo il numero dell'iterazione nel suo square
        square.append(i)
        //6.1.4 - addEventListner al click dello square
        square.addEventListener('click', function() {
            //6.1.4.1- assegno classe bg-blue allo square
            this.classList.toggle('bg-blue')
            //6.1.4.2 - visualizzo numero dello suqare cliccato in console log
            console.log(i);
        }) 
    }
})


