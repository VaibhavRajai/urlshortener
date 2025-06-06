const express=require('express')
const router=express.Router();
const urlController=require('../controllers/urlControllers')

router.post('/',urlController.shorterenUrl)
router.get('/',urlController.redirectToLongUrl)
router.get('/',urlController.getAnalytics)

module.exports=router;