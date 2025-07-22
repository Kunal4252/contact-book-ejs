const express = require("express");
const {
  addContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../Controller/contactController");

const router = express.Router();

router.post("/add", addContact);
router.get("/show", getContact);
router.put("/update/:id", updateContact);
router.delete("/delete/:id", deleteContact);

module.exports = router;
