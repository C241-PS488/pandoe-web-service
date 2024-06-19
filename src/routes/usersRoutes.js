const express = require('express');
const {getUsers, updateUserById} = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

router.get('/', authMiddleware, getUsers);
router.put('/:id', authMiddleware, updateUserById);


module.exports = router;
