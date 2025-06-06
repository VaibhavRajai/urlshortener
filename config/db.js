const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config()

const connect=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URI);
        if(connection) console.log('connection scesfull')
    }catch(error){
        console.log(error.message)
    }
}
module.exports=connect;