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

module.exports = { addContact };
