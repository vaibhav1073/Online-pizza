const mongoose=require('mongoose');
const pizzaSchema=new mongoose.Schema({
    
        id: {
            type:String,
            required:true,
            unique:true
        },
        name:{ type:String,
            required:true},
        vegetarian: {type:Boolean,
            required:true},
        image: {type:String,
            required:true},
        toppings:{type: Array,
            required:true},
        sizes: {
          type:Object,
          required:true
        }
      
})

module.exports=mongoose.model('Pizza',pizzaSchema,'Pizzas')