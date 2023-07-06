const storeModel = require("../Models/storeModel");

const GetAllStores = async (req, res) => {
  try {
    const stores = await storeModel.find({});
    res.status(200).send(stores);
  } catch (err) {
    console.log(err);
  }
};

async function AddStore(req,res){
    try {
        const store = new storeModel(req.body);
        const data = await store.save();
        res.status(200).json(data);
      } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server Error" });
      }
}
async function DeleteStore(req,res){
    try{
        await storeModel.findOneAndRemove({_id:req.params.id});
        res.status(200).send({msg:"store removed succesfullt"});
    }
    catch(err){
        console.log(err);
        res.status(404).send({"msg":"no such store there"})
    }

}
async function UpdateStore(req,res){
    try{
        await storeModel.findOneAndRemove({_id:req.params.id});
        const store = new storeModel(req.body);
        const data = await store.save();
        res.status(200).json(data);
    }
    catch(err){console.log(err);}
}

module.exports = { GetAllStores,AddStore,DeleteStore,UpdateStore };
