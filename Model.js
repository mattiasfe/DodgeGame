const Model = {
    app: {
        currentCharacter: [],
        currentBackground: [],  
        currentDifficulty: "",  
    },

    input: {},

    data: {
        board: {
            height: 670,
            width: 1190
        },
        
        character: [
            {
                name: "Cartman",
                cartmanWidth: 96,
                cartmanHeight: 96,
                
                cartmanX: 0,  
                cartmanY: 0,  
                imgRight: "CartmanRight (2).png",
                imgLeft: "CartmanLeft (2).png",
                x: 0,          
                y: 0           
            }
        ]
    }
};


Model.data.character[0].cartmanX = Model.data.board.width/2 - Model.data.character[0].cartmanWidth/2;
Model.data.character[0].cartmanY = Model.data.board.height*7/8 - Model.data.character[0].cartmanHeight;
Model.data.character[0].x = Model.data.character[0].cartmanX;
Model.data.character[0].y = Model.data.character[0].cartmanY;