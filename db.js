const mongoose=require('mongoose')


const mongoUrl="mongodb://localhost:27017/hotels"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const db=mongoose.connection
db.on("connected",()=>{
    console.log("connected to mongodb server")
})

module.exports=db