const express = require('express');
const router = express.Router();
const {signUp} = require("../controllers/studentController");

router.post('/signUp',signUp);

module.exports = router;