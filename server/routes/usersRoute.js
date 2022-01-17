const express = require('express')
const { authController , getUserProfile } = require('../controllers/usersController')
const router = express.Router()

// POST email and password auth
router.post('/login',authController);

// GET user profile private route
router.route('/profile').get(getUserProfile);

module.exports = router
