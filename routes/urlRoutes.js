const express=require('express')
const router=express.Router();
const urlController=require('../controllers/urlControllers')

router.post('/shorterenUrl',urlController.shorterenUrl)
router.get('/redirectToLongUrl',urlController.redirectToLongUrl)
router.get('/getAnalytics',urlController.getAnalytics)

module.exports=router;