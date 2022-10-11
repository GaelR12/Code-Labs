class User{
    name: string = "";
    age: number = 0;
    height: number = 0;

    logMyName(){
        // logging the user's name
        console.log("My name is " + this.name)
      }

    logMyDetails(){
        // Log my name to the console.
        this.logMyName();    
        // Log my age to the console
        console.log("My age is " + this.age)
        // Log my height to the console
        console.log("My height is " + this.height)
      }

}

let user:User = new User();{
user.name = "John";
user.age = 20;
user.height = 5.6;

}