

const express = require('express');
const router = express.Router();

import DoctorController from '../controllers/doctorController';


const controller = new DoctorController();

router.get('/', controller.getDoctors);

router.get('/:id', controller.getDoctor);

router.post('/', controller.createDoctor);

router.put('/:id', controller.updateDoctor);

router.delete('/:id', controller.deleteDoctor);

module.exports = router;