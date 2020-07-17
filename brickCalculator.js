function brickCalculator(n){
    if(n <= 10){
        var totalFeetFirst = n * 15;
        var totalBrickFirst = totalFeetFirst * 1000;
        return totalBrickFirst;
    }
    else if(n <= 20){
        var totalBrickFirst = 150 * 1000;  //for 1st 10 Floor;
        var n2 = n - 10;
        var totalFeetMid = n2 * 12;
        var brickMid = totalFeetMid * 1000;
        var totalBrickMid = totalBrickFirst + brickMid;
        return totalBrickMid;
    }
    else if(n > 20){
        var totalBrickFirstMid = (150 * 1000) + (120 * 1000);   //for 1st 20 Floor;
        var n3 = n - 20;
        var totalFeetLast = n3 * 10;
        var brickLast = totalFeetLast * 1000;
        var totalBrickLast = totalBrickFirstMid + brickLast;
        return totalBrickLast;
    }
}
var output = brickCalculator(24);
console.log("Total Bricks: ", output);