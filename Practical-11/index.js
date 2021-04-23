//Require your express module
const express =require("express");

//Initialize your express app
const app= express();

//Application level middleware--> works for all routes
//order of middlewares matter
app.listen(4000,()=>{
    console.log("Server is running on 4000");
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/home.html");
});
app.get('/home.html',(req,res)=>{
    res.sendFile(__dirname+"/home.html");
});
app.get('/login.html',(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});
app.get('/about.html',(req,res)=>{
    res.sendFile(__dirname+"/about.html");
});
app.get('/valid.html',(req,res)=>{
    res.sendFile(__dirname+"/valid.html");
});
app.get('/invalid.html',(req,res)=>{
    res.sendFile(__dirname+"/invalid.html");
});
app.get('*',(req, res)=>{
    res.sendFile(__dirname+"/404.jpg");
  });

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.post('/valid.html', (req,res)=>{
    if(req.body.uname=="admin" && req.body.pwd=="manager"){
        res.sendFile(__dirname+"/valid.html");
    }
    else{
        res.sendFile(__dirname+"/invalid.html");
    }
});

