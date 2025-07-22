const contactModel = require("../Model/contactModel");

const addContact = async (req, res) => {
  try {
    const data = new contactModel({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
    });
    const result = await data.save();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const getContact = async (req, res) => {
  try {
    const result = await contactModel.find();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (req, res) => {
  try {
    const id = req.params.id;
    const data = {
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
    };
    const result = await contactModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await contactModel.findByIdAndDelete(id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { addContact, getContact, updateContact, deleteContact };
