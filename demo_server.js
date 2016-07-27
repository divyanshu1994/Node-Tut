var DS=require('./dserver');
var fs=require('fs');
var ds=new DS();


ds.add('/',function(req,res)
{
         res.writeHead(200,{'Content-Type':'text/html'});
          fs.createReadStream(__dirname+'/index.html').pipe(res);
});
ds.add('/json',function(req,res){

    res.writeHead(200,{'Content-Type':'application.json'});
    var obj={
        name:"Divyanshu"
    }

    res.end(JSON.stringify(obj));
});

ds.createServer(1337,'127.0.0.1');