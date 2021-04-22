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

app.get('/',function(req,res){
    res.send("Hello from Express server");
});

app.get('/about',function(req,res){
    res.send("Welcome to About Page");
})


