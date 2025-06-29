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
    
      // Fixed typo in function name (was "showCaracter")
    let cartmanRight = new Image();  // Create the image first
    cartmanRight.src = "CartmanRight (2).png";  // Then set the source
    
    // Store the image reference in your model
    Model.data.character[0].imgRight = cartmanRight;
    
    cartmanRight.onload = function() {
        context.drawImage(
            cartmanRight,  // Use the image directly
            Model.data.character[0].x, 
            Model.data.character[0].y, 
            Model.data.character[0].cartmanWidth, 
            Model.data.character[0].cartmanHeight
        );
    };
}
