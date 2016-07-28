module.exports=function(app)
{
    app.get('/api/user/:id',function(req,res)
    {
        res.send("FETCH USER "+req.params.id+"DETAIL FROM DATABASE");
    });

    app.post('/api/user',function(req,res)
    {
        res.send("POSTING TO DATABASE");
    }); 

    app.delete('/api/user/:id',function(req,res)
    {
        res.send("DELETING USER FROM DB");
    })
}