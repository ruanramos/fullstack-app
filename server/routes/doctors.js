const express = require('express');
const router = express.Router();

const Doctor = require('../models/Doctor');

router.get('/', (req, res) => {
    Doctor.find({}, (err, doctors) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(doctors);
        }
    }).sort({ name: 1 });
});

router.get('/:id', (req, res) => {
    Doctor.findById(req.params.id, (err, doctor) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(doctor);
        }
    }).sort({ name: 1 });
});

router.post('/', (req, res) => {
    const doctor = new Doctor(req.body);
    doctor.save((err, newDoctor) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newDoctor);
        }
    });
});

router.put('/:id', (req, res) => {
    Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, doctor) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(doctor);
        }
    }).sort({ name: 1 });
});

router.delete('/:id', (req, res) => {
    Doctor.findByIdAndRemove(req.params.id, (err, doctor) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(doctor);
        }
    }).sort({ name: 1 });
});

module.exports = router;