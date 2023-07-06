const mongoose=require('mongoose');
const storeSchema=new mongoose.Schema({
    
       
        storeLocation:{ type:String},
        
        storeAddress:{type:String},
        storeManager: {type:String},
        managerNumber:{type: String}
      
})

module.exports=mongoose.model('Store',storeSchema,'Stores')