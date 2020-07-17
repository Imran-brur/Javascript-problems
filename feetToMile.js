function feetToMile(feet){
    var mile = feet / 5280;
    if(mile < 0){
        return console.log("Warning: Distance cannot be negative");
    }
    else{
        return mile;
    }
}
var output = feetToMile(15648);
console.log("Mile: ", output);

