var Emitter=require('./emitter.js');

var emttr=new Emitter();

emttr.on('logging',function () {
    console.log("Someone has done console.log");
});

emttr.on('logging',function () {
   console.log("A print has occured") ;
});

//do emit manually here ...  
console.log("Hi");
emttr.emit('logging');




