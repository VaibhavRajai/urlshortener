const shortid=require('shortid')  //package for generating an id in case if it is not provided by user
const Url=require('../models/url')

//api for creating an short url
exports.shorterenUrl=async(req,res)=>{
    const {longurl,id}=req.body;
    try{
        let urlid=id || shortid.generate();
        const existing=await Url.findOne({urlid})
        if(existing){
            return res.json({message:"Short Id already in use"})
        }
        const newUrl=await Url.create({
            longurl,urlid
        });
        res.status(201).json({shorturl:`${baseUrl}/${urlid}`,
            longurl:newUrl.longurl
        })
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

//api for redirecting
exports.redirectToLongUrl=async(req,res)=>{
    try{
        const {shortId}=req.body;
        const url=await Url.findOne({shortId});
        if(!url) return res.status(404).json({message:"short id not found"})
        url.clickCount++;
        await url.save();
        res.redirect(url.longurl);
    }catch(error){
                res.status(500).json({message:error.message});
    }
}
//api for getting analytics
exports.getAnalytics=async(req,res)=>{
    try{
        const urls=await Url.find();
        res.json(urls)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
};
