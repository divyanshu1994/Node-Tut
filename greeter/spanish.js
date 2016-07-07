var greetings=require('./greetings.json');

var greeter=function()
{
    console.log(greetings.es);
}

module.exports=greeter;