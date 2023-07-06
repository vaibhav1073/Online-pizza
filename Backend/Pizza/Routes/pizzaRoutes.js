const express=require("express")
const router=express.Router();
const {GetAllPizza,PushPizza,DeletePizza, UpdatePizza}=require("../Controllers/controller");

router.get('/',GetAllPizza)
router.post('/',PushPizza)
router.delete('/:id',DeletePizza)
router.patch('/:id',UpdatePizza)
module.exports=router;