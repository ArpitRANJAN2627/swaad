const mongoose=require('mongoose')

const foodSchema=mongoose.Schema({
     name:{
        type:String,
        trim:true,
        required:true
     },
     price:{
        type:Number,
        price:0
     },
     desc:{
        type:String,
        trim:true
     }
});

module.exports=new mongoose.model('Food',foodSchema);