function woodCalculator(chair,table,bed){
    var chairWood = (chair * 1);
    var tableWood = (table * 3);
    var bedWood = (bed * 5);
    var totalWood = (chairWood + tableWood + bedWood);
    return totalWood;
}
var output = woodCalculator(6,4,2);
console.log("Total Woods:", output);