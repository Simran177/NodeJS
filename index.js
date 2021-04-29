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

//////////////////////////////////////////////////////////////////////

const courses= [
    {
        id:1,
        name:"HTML5",
    },
    {
        id:2,
        name:"CSS",
    },
    {
        id:3,
        name:"Javascript",
    },
    {
        id:4,
        name:"Bootstrap",
    },
    {
        id:5,
        name:"Express",
    }
];

//API for reading the available courses

app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

////API for reading the specific courses

app.get('/api/courses/:id', (req,res)=>{
    const course= courses.find((c)=> c.id === parseInt(req.params.id))
    if(!course) 
        res.status(404).send("The course you are looking is not available");
    res.send(course);
});
app.get('/api/courses/:name', (req,res)=>{
    const course= courses.find((c)=> c.name === (req.params.name))
    if(!course) 
        res.status(404).send("The course you are looking is not available");
    res.send(course);
});


// API for creating new course
//use middleware
app.use(express.json());
app.post('/api/courses', (req,res)=>{
    const course= {
        id:courses.length +1,
        name :req.body.name,
    };

    courses.push(course);
    // res.send(course)
    res.send(course);
});
