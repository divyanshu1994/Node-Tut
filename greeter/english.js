var greetings=require('./greetings.json');

var greeter=function()
{
    console.log(greetings.en);
}

module.exports=greeter;