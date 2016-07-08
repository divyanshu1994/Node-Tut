//inheriting event Emitter

var Emitter=require('events');
var util=require('util');

function Greetr()
{
    this.greeting="Hello world";
}

Greetr.prototype.greet=function(data)
{
    console.log("HI "+this.greeting);
    this.emit('greet',data);
}

util.inherits(Greetr,Emitter);

var greet1=new Greetr();

greet1.on('greet',function(data)
{
    console.log("You are doing great "+data);
})
greet1.greet("HS");
