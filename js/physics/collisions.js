function distanceBetween (Obj1,Obj2){
    return Math.sqrt((Obj1.y -Obj2.y)**2  + (Obj1.x -Obj2.x)**2)
}

function circlesCollide(obj1, obj2, multiplier= 1){
    return distanceBetween(obj1,obj2) <= (obj1.r + obj2.r)* multiplier  //should be dynammic
}

function checkStarCollisions(candy, stars){

    stars.forEach(element => {
        if (!element.got) 
            element.got = circlesCollide(candy,element,1.5);
    });
}

function checkFrogCollision(candy, frog){
    return circlesCollide(candy,frog);
}

function checkBubblesCollision(candy, bubbles){
    for (let i = 0; i < bubbles.length; i++) {
        if (!bubbles[i].popped && circlesCollide(candy, bubbles[i],0.5)) {
            return bubbles[i];
        }
    }
    return null;
}


function checkForCollsions(candy, stars , frog,bubbles = []){
    
    checkStarCollisions(candy, stars);
    return{
        frogHit: checkFrogCollision(candy, frog),
        bubbleHit: checkBubblesCollision(candy, bubbles),
        //TODO: Add bubble and dynamic anchors and traps later
    };
}
export  {checkForCollsions };