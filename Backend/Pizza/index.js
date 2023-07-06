const express=require("express");
const cors=require('cors')
const app=express();
const bodyParser=require('body-parser');
const router=require("./Routes/pizzaRoutes");
const stores=require("./Routes/storeRoutes");
const mongoose=require('mongoose');
const PORT=process.env.PORT || 8000
app.use(cors());
app.use(bodyParser.json())
const password="6pRDkPt2D80b1bS5"
const DB_URI=`mongodb+srv://jainvaibhav0111it181110:${password}@clusterpizza.yitidot.mongodb.net/`
mongoose.connect('mongodb://localhost:27017/PizzaDB');
mongoose.connection.once('open',()=>{
    console.log('connected to the DB');
}).on('error',(err)=>{
    console.log(err);
})
app.use('/pizza',router);
app.use('/store',stores);
app.listen(PORT,()=>{
    console.log("hello from the port",PORT)
    
})
