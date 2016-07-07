var a=1;
var b=2;

//first class functions
var greet=function()
{
    console.log("greet");
}

function greet2()
{
    console.log("greet2");
}

function logGreet(fn)
{
    fn();
}

logGreet(greet);
logGreet(greet2);
logGreet(function()
{
console.log("greet3");
});