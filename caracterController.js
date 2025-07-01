function moveCharacter(e){
    if (e.code == "ArrowRight" || e.code == "KeyD"){
        cartmanRight = Model.data.character[0].imgRight;
        return cartmanRight;
    }
    else if (e.code == "ArrowLeft" || e.code == "KeyA"){
        cartmanLeft = Model.data.character[0].imgLeft;
        return cartmanLeft;
    }
}