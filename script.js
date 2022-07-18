// gameboard object
const gameBoard = (() => {
    const marks = ['','','','','','','','',''];
    const winningMarks = [
        [0,1,2]
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
    const tomek = player.createPlayer('Tomek', 'o');
    const jerzy = player.createPlayer('Jerzy', 'x');
    let currentPlayer = tomek;
    function checkWinner() {
        gameBoard.winningMarks.forEach((item, index) => {
            if (gameBoard.marks[item[0]] === currentPlayer.marker && gameBoard.marks[item[1]] === currentPlayer.marker && gameBoard.marks[item[2]] === currentPlayer.marker) {
                console.log('winner!')
            }
        })
    }
    // function nextPlayer() {
    //     currentPlayer === tomek ? currentPlayer = jerzy : currentPlayer = tomek;
    //     console.log('nextPlayer() function ran')
    //     console.log('active player: ' + currentPlayer.name);
    // }
    const addMark = (currentPlayer, position) => {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach((box) => {
            box.addEventListener('click', () => {
                const position = box.id;
                if (gameBoard.marks[position] == '') {
                    gameBoard.marks.splice(position, 1, `${currentPlayer.marker}`);
                    gameBoard.updateBoard();
                    console.log(currentPlayer.marker)
                    console.log(gameBoard.marks) 
                    checkWinner();
                    if (currentPlayer === tomek) {
                        currentPlayer = jerzy
                    } else {
                        currentPlayer = tomek
                    }
                } else {console.log('Place is taken')};
            })
        })
    }
  
    return {
        addMark,
        currentPlayer,
        checkWinner,
        // nextPlayer
    }
})();

gameBoard.newBoard();
game.addMark(game.currentPlayer);
