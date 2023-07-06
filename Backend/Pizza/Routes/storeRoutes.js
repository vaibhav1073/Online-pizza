const express=require('express');
const storeRouter=express.Router();
const {GetAllStores, AddStore, DeleteStore, UpdateStore}=require('../Controllers/storeController');

storeRouter.get('/',GetAllStores);
storeRouter.post('/',AddStore)
storeRouter.delete('/:id',DeleteStore);
storeRouter.patch('/:id',UpdateStore);

module.exports=storeRouter