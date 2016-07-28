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
 
}
DServer.prototype.createServer=function(port,host)
{
    
    http.createServer(function(req,res)
    {
   
   // as soon as reuest is passed from brower it runs

    var url_found=false;

    //check whether it is added or not
    urls.filter(function(item)
    {
         if(item.route===req.url)
        {
            url_found=true;
            item.callback(req,res);
        }
    });

    if(!url_found)  // if url not found
    {
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Page not found");
    }
    }).listen(port,host);
}

module.exports=DServer;
