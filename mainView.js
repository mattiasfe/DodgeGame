let board;
let context;

    function showBackground() {
    board = document.getElementById("board");
    board.height = Model.data.board.height;
    board.width = Model.data.board.width;
    context = board.getContext("2d");
}


