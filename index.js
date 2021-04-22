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
