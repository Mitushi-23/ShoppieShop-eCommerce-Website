const express = require('express')
const { route } = require('express/lib/router')
const { authController , getUserProfile, registerUser, updateUserProfile } = require('../controllers/usersController')

const {protect} = require('../middlewares/authMiddleware')

const router = express.Router()

// User Registration
router.route('/').post(registerUser);

// POST email and password auth
router.post('/login',authController);

// GET user profile private route
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);

module.exports = router
