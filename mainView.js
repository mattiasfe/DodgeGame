let board;
let context;


function preloadCharacterImages() {
    Model.data.character[0].imgRight = new Image();
    Model.data.character[0].imgRight.src = "CartmanRight (2).png";
    
    Model.data.character[0].imgLeft = new Image();
    Model.data.character[0].imgLeft.src = "CartmanLeft (2).png";
    

    Model.data.character[0].imgDefault = Model.data.character[0].imgRight;
}

function showBackground() {
    board = document.getElementById("board");
    board.height = Model.data.board.height;
    board.width = Model.data.board.width;
    context = board.getContext("2d");
    

    drawCharacter('default');
}


function drawCharacter(direction) {
    
    context.clearRect(0, 0, board.width, board.height);
    
    let imgToDraw;
    switch(direction) {
        case 'left':
            imgToDraw = Model.data.character[0].imgLeft;
            break;
        case 'right':
            imgToDraw = Model.data.character[0].imgRight;
            break;
        default:
            imgToDraw = Model.data.character[0].imgDefault;
    }

    if (imgToDraw.complete) {
        context.drawImage(
            imgToDraw,  
            Model.data.character[0].x, 
            Model.data.character[0].y, 
            Model.data.character[0].cartmanWidth, 
            Model.data.character[0].cartmanHeight
        );
    }
}

function handleKeyPress(e) {
    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        drawCharacter('left');
        Model.data.character[0].x -= 12;
    }
    else if (e.code == "ArrowRight" || e.code == "KeyD") {
        drawCharacter('right');
        Model.data.character[0].x += 12;
    }
    else if (e.code == "ArrowUp" || e.code == "KeyW"){
        drawCharacter();
        Model.data.character[0].y -= 12;
    }
    else if (e.code == "ArrowDown" || e.code == "KeyS"){
        drawCharacter();
        Model.data.character[0].y += 12;
    }
}


function initGame() {
    preloadCharacterImages();
    showBackground();
    document.addEventListener('keydown', handleKeyPress);
}


