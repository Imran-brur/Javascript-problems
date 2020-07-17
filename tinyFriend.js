function tinyFriend(name){
    var smallName = name[0];
    for(var i = 0; i < name.length; i++){
       var newName = name[i];
       if(newName.length < smallName.length){
           smallName = newName;
       }
   }
   return smallName;
}
var output = tinyFriend(["Rakibul", "Shihab", "Imran", "Faysal", "Ezazul"]);
console.log("Small Name: ", output);
