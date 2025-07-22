const express = require("express");
const { addContact } = require("../Controller/contactController");

const router = express.Router();

router.post('/add',addContact);

module.exports = router;