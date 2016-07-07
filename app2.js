//module patterns

var p1=require('./patterns/pattern1');
p1();

var p2=require('./patterns/pattern2');
p2();

var p3=require('./patterns/pattern3');
p3.show();
p3.msg="New msg";

var p3b=require('./patterns/pattern3');    //due to caching require has the same obj as defined earlier
p3b.show();


var p4=require('./patterns/pattern4');   // No caching can be done here as whole constructor is returned
var P4=new p4();
P4.show();

var p5=require('./patterns/pattern5');
p5.show();

var p6=require('./patterns/pattern6').show;
p6();