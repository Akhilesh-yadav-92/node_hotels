const mongoose=require('mongoose')


const personSchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},
age:{
    type:Number
},
work:{
    type:String,
    enum:['chef','waiter','manager'],
    required:true
},
address:{
    type:String,
    required:true
},
mobile:{
    type:String
},
email:{
    type:String,
    required:true,
    unique:true
}

})



const Person=mongoose.model("Person",personSchema)

module.exports=Person