//Require your express module
const express =require("express");

//Initialize your express app
const app= express();

//we can set port a/c to availability of port
//Generalize production port
const PORT= process.env.PORT || 4000;

//Listen service app on a port
app.listen(4000, function(){
    console.log(`Server started at PORT ${PORT}`);
});
//nodemon automatically restarts server by windows powershell
//OR
// goto package.json and add "start":"nodemon index.js" in scripts

// Handle Client Server

//Syntax
//get, post, put, delete
// app.method('Route',callback(){})

// Handle '/' Home Route
/*
app.get('/',function(req,res){
    res.send("Hello from Express server");
});

app.get('/about',function(req,res){
    res.send("Welcome to About Page");
})
*/
//////////////////////////////////////////////////////////
/*
// 1. Require your Express model
const express= require("express");
const path = path;

// 2. Initialize your express app
const app= express();

//Generalize production port
const PORT= process.env.PORT || 5000;           //available port will be provided


//3. Listen server request on PORT
app.listen(PORT, function(){
    console.log(`Server started at PORT ${PORT}`);
});


//Handle Client Request (get, post, put, delete)
// app.method('Route', callback(){})

//Handle '/' Home Route

// app.get('/', function(req, res){
//     //making client-server model
//     res.send("Hello from Express Server");
// });

// app.get('/about', function(req, res){
//     res.send("Welcome to About Page");
// })

app.get("/", (req,res)=>{
    console.log(req.url);
});

app.get("/about", (req,res)=>{
    console.log(req.url);   
    res.send("User requested for About Page");
});

app.get("/about", (req,res)=>{
    console.log(req.method);     
    res.send("User requested for About Page");
});

// app.get("/contact", (req,res)=>{
//     console.log(req.method);   
//     console.log(req.headers);   
//     console.log(req.query);   
//     res.send("Hi from the server");
// });


//Response Methods

app.get("/contact", (req,res)=>{
    console.log(req.url); 
    console.log(req.method);   
    console.log(req.headers);   
    console.log(req.query);   
    res.write("<h1>Hi from the server</h1><br/>");
    res.write("I'll render your request");
    res.end();
});

app.get("/signin", (req,res)=>{
    console.log(req.url); 
    console.log(req.method);   
    console.log(req.headers);   
    console.log(req.query);   
    res.write("<h1>Hi from the server</h1><br/>");
    res.write("I'll render your request");
    res.end();
    res.sendFile(path.resolve(_dirname)+"/login.html");       //current directory
});

app.get("/stdnlist", (req,res)=>{
    res.json([
        rno: 1, name:"Pankaj",
        rno: 2, name:"Pooja",
        rno: 2, name:"me",
    ])
    
});
//////////////////////////////////////////////
*/
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});

/*
app.get('/login.html', (req,res)=>{
    if(req.query.uname=="admin" && req.query.pwd=="manager"){
        res.send("Login Successful");
    }
    else{
        res.send("Invalid login");
    }
});
*/
//middleware are funcions that execute before server
// bodyParser will convert body data into json value
// const bodyParser= require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json());


//express can alse do above task

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/login.html', (req,res)=>{
    console.log(req.body);
    if(req.body.uname=="admin" && req.body.pwd=="manager"){
        res.send("Login Successful");
    }
    else{
        res.send("Invalid login");
    }
});

