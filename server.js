const express=require('express')

const app=express()
const db=require('./db')
const Person=require('./models/person')
const bodyParser=require('body-parser')
app.use(bodyParser.json())

app.get('/',(req,res)=>{


    res.send("Hellow Node.js")
})

app.post("/person",async(req,res)=>{

try{

    const data=req.body

    const newPerson=new Person(data)
    const response=await newPerson.save()
    console.log("Data saved")
    res.status(200).send(response)

}
catch(err)
{
console.log("server error")
res.status(500).send({error:'Server Error!!'})
}


})

app.get("/person",async(req,res)=>{
    try{
const newData=await Person.find()
console.log("Send Data")
res.status(200).send(newData)
    }catch(Err){
res.status(500).send({error:'server error when fetching data'})
    }
})


app.listen(2000,()=>{
    console.log('server running on 2000')
})