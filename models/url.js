const mongoose=require('mongoose')
//sechma for url 
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