const gameBoard = (() => {
    const marks = ['empty','empty','empty','empty','empty','empty','empty','empty','empty']
    return {
        marks: marks
    };
})();

const createPlayer = (playerName, playerMark) => {
    const mark = playerMark;
    const name = playerName;
    
    return { 
        name,
        mark,
    }
};

const gameFlow = (()=> {
    const addMark = (player, position) => {
        if (gameBoard.marks[position] == 'empty') {
        gameBoard.marks.splice(position, 1, `${player.mark}`)
    } else {console.log('Place is taken')};
    displayController.updateBoard();
}
    return {
        addMark
    }
})();

const displayController = (() => {
    const newBoard = () => {
        for (let i = 0; i < 9; i++) {
            const boardContainer = document.querySelector('#boardContainer')
            const divs = document.createElement('div');
            divs.classList.add('box')
            divs.setAttribute('id', `box${[i+1]}`)
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
        newBoard,
        updateBoard
    };
})();

const jerzy = createPlayer('Jerzy', 'x')
displayController.newBoard();
gameFlow.addMark(jerzy, 1)
const tomek = createPlayer('Tomek', 'o')
gameFlow.addMark(tomek, 8)
console.log(gameBoard.marks) 
