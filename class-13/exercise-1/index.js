var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.age = 0;
        this.height = 0;
    }
    User.prototype.logMyName = function () {
        // logging the user's name
        console.log("My name is " + this.name);
    };
    User.prototype.logMyDetails = function () {
        // Log my name to the console.
        this.logMyName();
        // Log my age to the console
        console.log("My age is " + this.age);
        // Log my height to the console
        console.log("My height is " + this.height);
    };
    return User;
}());
var user = new User();
{
    user.name = "John";
    user.age = 20;
    user.height = 5.6;
}
