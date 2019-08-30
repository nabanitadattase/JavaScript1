//Strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newStr = myString.replace(/,/g, ' ');
console.log(newStr);
//Arrays
let favouriteAnimals = ["blowfish", "capricorn","giraffe" ];
favouriteAnimals.push("turtle");
console.log(favouriteAnimals);
favouriteAnimals.splice(1,0,'meerkat');
//array.splice(start, delete count,item1,item2...)
console.log('New value of the array becomes ["blowfish","meerkat","capricorn","giraffe","turtle"]');
//2.5 question no.                                                                                                                                                                                           
console.log(favouriteAnimals);
console.log("Array has a length of "+favouriteAnimals.length);
favouriteAnimals.splice(3,1);
console.log(favouriteAnimals);
console.log( 'The item you are looking for is at index: '+favouriteAnimals.indexOf("meerkat"));