const express = require('express');
const router = express.Router();
var UserController = require('../controllers/userController')

router.post('/login', UserController.login)

module.exports = router;