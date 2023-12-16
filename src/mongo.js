const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/AuthTut")

.then(()=>{
    console.log("mongo connected")
})
.catch((e)=>{
    console.log("eror", e)
})

const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    }
})

const Collection=new mongoose.model("AuthCollection",Schema)

module.exports=Collection
