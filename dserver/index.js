var http=require('http');
var fs=require('fs');

var urls=[
    //{route:'route',calback:'callback'}
];
function DServer()  // DServer function contructor
{
    this.urls=urls;
   
}
DServer.prototype.add=function(route,callback)
{
    var url={
        route:route,
        callback:callback
    }

    urls.push(url);
   if(urls.indexOf(url)>-1)
   {
       console.log(url.route+"Added");
   }

}
DServer.prototype.createServer=function(port,host)
{
    
    http.createServer(function(req,res)
    {
   
   
    var url_found=false;
    urls.filter(function(item)
    {
         if(item.route===req.url)
        {
            url_found=true;
            item.callback(req,res);
        }
    });

    if(!url_found)
    {
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Page not found");
    }
    }).listen(port,host);
}

module.exports=DServer;

// http.createServer(function(req,res)
// {
//     if(req.url==='/')
//     {
//     res.writeHead(200,{'Content-Type':'text/html'});
//     //var html=fs.readFileSync(__dirname+"/index.html"); 
//     //this is synchronus
//     //res.end(html);

//     //better and less memory using stream
//     //create a stream , it will pass junk (packet ) into pipe as soon as it recive one
//     //res is a writable stream
//     fs.createReadStream(__dirname+'/index.html').pipe(res);
//     }

//     else if(req.url=='/jsons')
//     {
//         res.writeHead(200,{'Content-Type':'application/json'});
//         var obj={
//             name:"divyanshu",
//             college:"IITD"
//         }
//         res.end(JSON.stringify(obj));
//     }
//     else{
//         res.writeHead(404,{'Content-Type':'text/plain'});
//         res.end("Page not exist");
//     }
// }).listen(1337,'127.0.0.1');