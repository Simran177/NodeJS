//Require your express module
const express =require("express");

//Initialize your express app
const app= express();

//Application level middleware--> works for all routes
//order of middlewares matter
app.listen(4000,()=>{
    console.log("Server is running on 4000");
});
/*
app.use((req,res,next)=>{
    console.log("This is an App level middleware-2");
    next();
})
*/
app.use((req,res,next)=>{
    console.log(`Log: ${req.url} ${req.ip} -- ${new Date()}`);
     next();
});

// ROUTE LEVEL MIDDLEWARE
// Method-1 of declaring rote leel middleware
/*
app.use('/dashboard',(req,res,next)=>{
    console.log("Route Level Middleware");
    next();
});
*/

app.get('/',(req,res)=>{
    console.log("Home Page");
    res.send("Home Page");

});


app.get('/dashboard',auth,(req,res)=>{ //auth added for route-level 
    console.log("Dashboard Page");
    res.send("Dashboard Page");

});
app.post('/user',(req,res)=>{
    console.log("User Page");
    res.send("User Page");
});

// Method-2 of route level 
function auth(req,res,next){
    // console.log("Route Level Middleware");
    if(req.query.pwd==="admin")
    {
    next();
    }
    else{
        res.send("You are not an Authentic user");
    }
}

