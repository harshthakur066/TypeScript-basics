// tsc <filename>.ts --watch --> to run continously like nodemon
var sum = function (a, b) {
    return a + b;
};
var answer = sum(10, 5);
console.log(answer);
// Tupple
var basket;
basket = ["basket", 1];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var SizeName = Size[2];
console.log(SizeName);
// Any
var whatever = "like JavaScript";
whatever = basket;
// Union
var confused = "hello";
confused = 5;
// Void
var noob = function () {
    console.log("I am Noob.");
};
// Never
var error = function () {
    throw Error("Oops!!");
};
var fightRobotArmy = function (robots) {
    console.log("Fight!!!");
};
var dog = {};
// Now we can use dog.count
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("RAWWWR");
// lion.sing --> Can't be used because it's private
console.log(lion.greet());
