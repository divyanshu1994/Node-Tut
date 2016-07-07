//Object Literal
var ds={
firstname:'Divyanshu',
lastname:'Sundriyal',
Address:{
    House:'28',
    Locality:'Timarpur'
}
}
console.log(ds); 
console.log(ds.Address.House);

//Prototype and function constructors

function Person(firstname,lastname)
{
    this.firstname=firstname;
    this.lastname=lastname;
}

Person.prototype.greet=function()
{
    console.log("Hi "+this.firstname+" "+this.lastname);
}
Person.prototype.urName=function()
{
    console.log("Your name is "+this.firstname);
}
Person.prototype.country="India";
var john=new Person("John","Doe");
john.greet();
john.urName();
console.log(john.country);
console.log(john);

console.log("John proto" +john.__proto__);