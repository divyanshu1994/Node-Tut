var greetings=require('./greetings.json');

var greeter=function()
{
    console.log(greetings.hi);
}

module.exports=greeter;