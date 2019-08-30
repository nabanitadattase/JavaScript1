//Sum of 3 arguments of a function
function sum(number) {
    console.log(number[0] + number[1] + number[2]);
}
const number = [3, 4, 6];
sum(number);
//A function that receives color
function colorCar(color) {
    console.log('A ' + color[1] + ' Car');
}
let color = ['red', 'blue', 'black'];
colorCar(color);
//Display object details
function display(obj) {
    console.log(obj);
}
//Create an object
let obj = {
    name: "Nabanita",
    age: 32,
    country: 'India'
};
display(obj);
//Function Creation
function vehicleType(colour, code) {
    console.log("A " + colour[0] + " " + code[2] + "");
}
let colour = ['blue', 'red', 'white', 'green'];
const code = {
    '1': "car",
    '2': "motorbike",
    '3': "bike"
};
vehicleType(colour, code);
//Ternary Operator
console.log(3 === 3 ? "yes" : "no");
//Creation of a function
function vehicle(colour, age, code) {

    console.log("A " + colour[0] + " " + age[1] + " " + code[1]);
}
let age = {
    1: "used",
    3: "new"
};
vehicle(colour, age, code);
//Declare a list of variables
let list_vehicle = ["motorbike", "bike", "caravan", "car"];
//Get third element of the list
console.log(list_vehicle[2]);
//create a function
function vehicle_list(colour, list_vehicle, age) {
    console.log("A " + colour[3] + " " + age[3] + " " + code[3]);
};
vehicle_list(colour, list_vehicle, age);
//question no.10//Writing an advertisement
let list_vehicles = ["cars", " motorbikes", " caravans ", "bikes"];
let allVehicles = "";
for (let i = 0; i < list_vehicles.length; i++) {
    if (i === list_vehicles.length - 1) {
        allVehicles += "and " + list_vehicles[i] + ".";
        break;
    };
    allVehicles += list_vehicles[i];    
};
console.log("Amazing Joe\'s Garage, we service " + allVehicles);
//Question no.11 //Add one more vehicle to the list with out changing the code
list_vehicles.push("BMW");
let allVehicles1 = "";
for (let i = 0; i < list_vehicles.length; i++) {
    if (i === list_vehicles.length - 1) {
        allVehicles1 += " and " + list_vehicles[i] + ".";
        break;
    };
    allVehicles1 += list_vehicles[i];    
};
console.log("Amazing Joe\'s Garage, we service " + allVehicles1);
//Question 12//create an empty object
let obj1 = {};
console.log(obj1);
//Question 13//create teachers name object
let obj2 = {
    Name: "Baraa, Peter, Robin, Albert, Stephen"
};
console.log(obj2.Name);
//Question 14//
obj2 = {
    Name: ["Baraa", "Peter", "Robin", "Albert", "Stephen"],
    Language: ["HTML & CSS", "Introduction", "Animation", "GIT", "JavaScript"] 
};
for(let o =0;o <obj2.Name.length;o++)
{
    console.log(obj2.Name[o]+": " +obj2.Language[o]);
}
//Question 15//Compare arrays
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log( x == y);
console.log(x === y);
console.log(z === y);
console.log(z === x);
var is_same = x.length == y.length && x.every(function(element, index) {
    return element === y[index]; 
});
console.log(is_same);
// Question 16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
console.log("Output of o2 is" +o2);
let o3 = o2;
console.log("Output of o3 is" +o3);
 o2 = { name: "Karina" };
console.log("After Change Output of o2 is" +o2);
o3 = o2;
console.log("After Change Output of o3 is" +o3);
o1 = { sex: "female" };
console.log("After Change Output of o1 is" +o1);
o2 = o3;
console.log("After changing the order" +o2);
//Question 17 //type of a variable
let bar = 42;
console.log("Type of string is " +typeof typeof bar);
