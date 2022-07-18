const gameBoard = (() => {
    const marks = ['','','','','','','','',''];
    const newBoard = () => {
        for (let i = 0; i < 9; i++) {
            const boardContainer = document.querySelector('#boardContainer')
            const divs = document.createElement('div');
            divs.classList.add('box')
            divs.setAttribute('id', `${[i]}`)
            boardContainer.appendChild(divs)
        }
    }; 
    const updateBoard = () => {
        const boxes = document.querySelectorAll(".box")
        for (let i = 0; i < 9; i++) {
            boxes[i].innerText = `${gameBoard.marks[i]}`
        }
    }
    return {
        marks: marks,
        newBoard,
        updateBoard
    };
    
})();

const createPlayer = (name, marker) => {
    return { 
        name,
        marker,
    }
};

const gameFlow = (()=> {
    const addMark = (currentPlayer, position) => {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach((box) => {
            box.addEventListener('click', () => {
                const position = box.id;
                if (gameBoard.marks[position] == '') {
                gameBoard.marks.splice(position, 1, `${currentPlayer.marker}`);
                gameBoard.updateBoard();
            } else {console.log('Place is taken')};
            })
        })
    }
    const startGame = () => {
        const startButton = document.querySelector('#startButton');
        startButton.forEach((button) => {
            button.addEventListener('click', () => {

            })
        })
    }
    return {
        addMark
    }
})();

const jerzy = createPlayer('Jerzy', 'x')
gameBoard.newBoard();
const tomek = createPlayer('Tomek', 'o')
gameBoard.updateBoard();
console.log(gameBoard.marks) 
gameFlow.addMark(tomek);
