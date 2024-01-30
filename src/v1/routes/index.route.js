const express = require('express')
const router = express.Router()

router.use('/access', require('./access/access.route'))
router.use('/user', require('./user/index.user'))

module.exports = router