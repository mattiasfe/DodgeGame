let board;
let context;

function showBackground() {
    board = document.getElementById("board");
    board.height = Model.data.board.height;
    board.width = Model.data.board.width;
    context = board.getContext("2d");
    showCharacter();
}

function showCharacter() {
    
    let cartmanRight = new Image(); 
    cartmanRight.src = "CartmanRight (2).png"; 
    
    Model.data.character[0].imgRight = cartmanRight;
    
    cartmanRight.onload = function() {
        context.drawImage(
            cartmanRight,  
            Model.data.character[0].x, 
            Model.data.character[0].y, 
            Model.data.character[0].cartmanWidth, 
            Model.data.character[0].cartmanHeight
        );
    };
}


