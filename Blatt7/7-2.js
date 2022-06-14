//Definiere Konstruktor
function Animal(averageAge, age){
    this.averageAge = averageAge;
    this.age = age;
}

//Definiere Methode
Animal.prototype.getAverageAge = function(){
    console.log(this.averageAge);
}
Animal.prototype.getAge = function(){
    console.log(this.age);
}
Animal.prototype.setAge = function(newAge){
    this.age = newAge;
}

//Unterklassenkonstruktor
function Elephant(averageAge, age){
    // Super-Konstruktor als erstes aufrufen
    Animal.call(this, averageAge, age)
}

//Sub-Klasse erb von Super-Klasse
Elephant.prototype = new Animal();

// korrigieren des Konstruktors
Elephant.prototype.constructor = Elephant;

//Testing Animal
let fish = new Animal(80, 2);
fish.getAverageAge();
fish.getAge();

//Testing Elephant
let el1 = new Elephant(70, 25);
el1.getAverageAge();
el1.getAge();
el1.setAge(27);
el1.getAge();
