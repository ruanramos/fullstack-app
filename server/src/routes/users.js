const express = require('express');
const router = express.Router();

import UserController from '../controllers/UserController';


const controller = new UserController();

router.get('/', controller.getUsers);

router.get('/:id', controller.getUser);

router.post('/', controller.createUser);

router.put('/:id', controller.updateUser);

router.delete('/:id', controller.deleteUser);

module.exports = router;