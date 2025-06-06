const express=require('express')
const dotenv=require('dotenv')
const connect=require('./config/db')
const urlRoutes=require('./routes/urlRoutes') 
const cors=require('cors')
dotenv.config()
connect();
const app=express();
app.use(express.json());
app.use(cors());
app.use('/api/url',urlRoutes)
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server started')
})