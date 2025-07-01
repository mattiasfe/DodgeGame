function moveCharacter(e) {
    if (!Model.data?.character?.[0]) return null;

    switch(e.code) {
        case "ArrowRight":
        case "KeyD":
            return Model.data.character[0].imgRight;
        case "ArrowLeft":
        case "KeyA":
            return Model.data.character[0].imgLeft;
        default:
            return null;
    }
}
