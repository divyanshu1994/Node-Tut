// using node internal event emmiter

var Emmiter=require('events');
var eventsType=require('./events_config').events; // to avoid typo errors !

var emtr=new Emmiter();

emtr.on(eventsType.LOG,function()
{
    console.log("Some has typed");
});

console.log("Hi");
emtr.emit(eventsType.LOG);