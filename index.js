const express = require("express")

const app= new express()
app.use(express.json());


const dbArray=[
    {id:101,name:"Tiya",age:22,dept:"CS"},
    {id:102,name:"Siya",age:19,dept:"Maths"},
    {id:103,name:"Riya",age:20,dept:"English"},
    {id:104,name:"Diya",age:18,dept:"Physics"},
    {id:106,name:"Jiya",age:23,dept:"Botany"},
    
];


app.get('/',(req,res)=>{
    res.send("Message from the server")
})

app.get('/arr',(req,res)=>{
    res.send(dbArray)
})

app.put('/edit',(req,res)=>{
    dbArray.splice(1,1,req.body);
    res.send("Updated successfully!")
})

app.post('/add',(req,res)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("Data added")
})

app.delete('/remove',(req,res)=>{
    dbArray.pop();
    res.send("Deleted successfully!")
})


app.listen(8081,()=>{
    console.log("port is running")
})