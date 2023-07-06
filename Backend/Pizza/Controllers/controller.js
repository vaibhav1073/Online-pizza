const pizzaModel = require("../Models/pizzaModel");

async function GetAllPizza(req, res) {
  const pizza = await pizzaModel.find({});
  res.status(200).send(pizza);
}
async function PushPizza(req, res) {
  try {
    const pizza = new pizzaModel(req.body);
    const data = await pizza.save();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
}
async function DeletePizza(req, res) {
  console.log(req.params.id);
  await pizzaModel.findOneAndRemove({ id: req.params.id });
  const pizza = await pizzaModel.find({});
  res.status(200).send({ msg: "done succesfullt" });
}

async function UpdatePizza(req, res) {
  try {
      await pizzaModel.findOneAndRemove({ id: req.params.id });
    const pizza = new pizzaModel(req.body);
    const data = await pizza.save();
    // await pizzaModel.findOneAndUpdate({ id: req.params.id });
    res.status(200).send({ msg: "update ho gya!!" });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { GetAllPizza, PushPizza, DeletePizza, UpdatePizza };
