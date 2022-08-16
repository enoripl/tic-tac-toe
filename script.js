// gameboard object
const gameBoard = (() => {
    let marks = ['','','','','','','','',''];
    const winningMarks = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
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
        updateBoard,
        winningMarks
    };
    
})();

// player object
const player = (() => {
    const createPlayer = (name, marker) => {
        return { 
            name,
            marker,
        }
    }
    return {
        createPlayer,
    }
})();

// game object
const game = (()=> {
    const playerOne = player.createPlayer('Player One', 'x');
    const playerTwo = player.createPlayer('Player Two', 'o');
    const infoDisplay = document.querySelector('#currentPlayer')
    let currentPlayer = playerOne;
    let hasEnded = false;
    
    const switchPlayer = () => {
        if (currentPlayer === playerOne) {
            currentPlayer = playerTwo;
            infoDisplay.innerText = `It's ${currentPlayer.name} turn`;
        } else {
            currentPlayer = playerOne;
            infoDisplay.innerText = `It's ${currentPlayer.name} turn`;
        }
    }

    const checkWinner = () => {
        gameBoard.winningMarks.forEach((item, index) => {
            if (gameBoard.marks[item[0]] === currentPlayer.marker && gameBoard.marks[item[1]] === currentPlayer.marker && gameBoard.marks[item[2]] === currentPlayer.marker) {
                infoDisplay.innerText = `${currentPlayer.name} is a winner!`;
                infoDisplay.classList.add('winnerText', 'animate__animated', 'animate__pulse')
                hasEnded = true;
            }
        })
    }

    const addMark = () => {
        const boxes = document.querySelectorAll('.box');
        infoDisplay.innerText = `It's ${currentPlayer.name} turn`;
        boxes.forEach((box) => {
            box.addEventListener('click', () => {
                const position = box.id;
                if (gameBoard.marks[position] == '') {
                    gameBoard.marks.splice(position, 1, `${currentPlayer.marker}`);
                    gameBoard.updateBoard();
                    checkWinner();
                    if (hasEnded === false) {
                    switchPlayer();
                    }
                    } else {console.log('Place is taken')};
                })
            })
        }
    return {
        addMark,
        currentPlayer,
    }
})();

gameBoard.newBoard();
game.addMark(game.currentPlayer);
