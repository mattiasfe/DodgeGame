
initBoard(document.getElementById("board"), boardHeight, boardWidth);
function initBoard(boardElement, height, width) {
    Model.data.board = {
        board: boardElement,
        height: height,
        width: width,
        context: boardElement.getContext("2d")
    };
}


