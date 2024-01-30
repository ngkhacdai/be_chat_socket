const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller')
const { checkAuth } = require('../../auth/auth')
router.post('/search', checkAuth, userController.search)

module.exports = router
