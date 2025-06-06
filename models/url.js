const mongoose=require('mongoose')

const urlSchema=new mongoose.Schema({
    longUrl:{
        type:String,
        required:true
    },
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    clickCount:{
        type:Number,
        default:0
    },
},{timestamps:true}
);
module.exports=new mongoose.model('Url',urlSchema);