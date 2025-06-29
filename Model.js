const Model = {
    app: {
        currentCharacter: [],
        currentBackground: [],  // Fixed typo (was 'curentBackground')
        currentDifficulty: "",  // Fixed typo (was 'currentDiffeculty')
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
                // These will need to be calculated after the object is created
                cartmanX: 0,  // Placeholder - will be set later
                cartmanY: 0,   // Placeholder - will be set later
                imgRight: "CartmanRight.png",
                x: 0,          // Placeholder - will reference cartmanX
                y: 0           // Placeholder - will reference cartmanY
            }
        ]
    }
};

// Now calculate the positions after the object exists
Model.data.character[0].cartmanX = Model.data.board.width/2 - Model.data.character[0].cartmanWidth/2;
Model.data.character[0].cartmanY = Model.data.board.height*7/8 - Model.data.character[0].cartmanHeight;
Model.data.character[0].x = Model.data.character[0].cartmanX;
Model.data.character[0].y = Model.data.character[0].cartmanY;