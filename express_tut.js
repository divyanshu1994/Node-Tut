var express =require('express'); // express is a function
var app=express();  // invoke express and get value in app
var cookieParser = require('cookie-parser');
var bodyParser=require('body-parser');

// we can break our routes in different files alse eg ->
var apiController=require('./express_controller/api_controller');

//urlencoded parser of type - application/x-www-form-urlencoded
var urlencodedParser=bodyParser.urlencoded({extended:false});

//json parser - for parsing json data posted by browser
var jsonParser=bodyParser.json();

//port
var port=process.env.PORT || 3000;

//EJS
//EJS is a view engine
//use set to set an view engine
// no need to require a view engine
app.set('view engine','ejs');
// express looks for his files in views folder 

// the express() being a first class function has properties like listen , get etc
// it has function http methods like get for GEt ,post for POST

//Middleware : 
// JS Code that comes between request and response
// First param is route and second is a function which does the job and then calls next() to invoke other middlware eg. app.get
// express static middleware : when /assests/filename is ssen in req express searches for filname inside the public folder and download it
// The route works for everything after route name eg '/' will be available to all which have '/' in their url
app.use('/assets',express.static(__dirname+"/public"));

//OWN MIDDLEWARE
// have to specifify next() explicitly

app.use('/',function(req,res,next){
    console.log("Requested "+req.url);
    next();
});

// read for middleware at https://expressjs.com/en/resources/middleware.html

//cookie middleware 
// if we do not give route to a middleware then it is available for every route
//it sotoes cookies in req.cookies
app.use(cookieParser()); // using middlwrare with no route


app.get('/',function(req,res) // these can be (a,b) or something else
{
    console.log("Cookie "+JSON.stringify(req.cookies));
    // no need for content type headers as express method like send and json do it for you

    //   res.send("<html><head><link type=text/css rel=stylesheet href=assets/styles.css /></head><body><h1>Hi there</h1></body></html>");

    res.render('index');    
});
app.get('/api',function(req,res)
{
    // json take parameters as object literals
    res.json({name:"Divyanshu",colege:"IIT Delhi"});
});

app.get('/person/:id',function(req,res)
{
    // when express sees :id , it passes it to the req.params object
  
  //render search in views folder and adds ejs extension after index
    res.render('person',{ID:req.params.id});
});


//GET AND POST FROM BROWSER AND PARSING BODY

app.get('/player/:id',function(req,res)
{
    res.render('player',{ID: req.params.id , QUERY :req.query.q});
   // called from browser like this - type in url http://localhost:3000/player/1?q=raina
   //or do  get method by form
});


app.get('/playerpost',function(req,res)
{
    res.render('playerpost');
});


// POSTING DATA USING FORM USING HTTP
// we  also can use middleware by putting it b/w route and our callback

//get a post request from a form
app.post('/player_post',urlencodedParser, function(req,res)
{
    
    res.send("You have successfully sent data");

    //middleware urlencodedParser stores elements of body of form in req.body by their names
   console.log("DATA FROM HTTP POST");
    console.log(req.body.firstname);
    console.log(req.body.lastname);

});

//get a post request of json type using ajax call from browser
app.post('/playerpostjson',jsonParser,function(req,res)
{
    res.send("Success posting json data");

     //middleware jsonParser stores elements of body of form in req.body by their names
     console.log("DATA FROM JSON POST");
    console.log(req.body.first);
    console.log(req.body.last);
});

// use api controller
apiController(app);


app.listen(port);  // .listen is i ./application.js 
// it works the same way we created the server usinh http

