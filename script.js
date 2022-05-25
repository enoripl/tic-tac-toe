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
        gameBoard.marks.splice(position, 0, `${player.mark}`)
    } else {console.log('Place is taken')};
}
    return {
        addMark
    }
})();

const jerzy = createPlayer('Jerzy', 'x')
gameFlow.addMark(jerzy, 4)
const tomek = createPlayer('Tomek', 'o')
gameFlow.addMark(tomek, 1)
console.log(gameBoard.marks) 