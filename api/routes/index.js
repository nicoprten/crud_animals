const express = require('express');
const router = express.Router();

const animalSchema = require('./../models/animal.js');

// GET ALL COWS
router.get('/animals', (req, res) => {
    animalSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

// CREATE A NEW ANIMAL
router.post('/create', (req, res) => {
    const cow = animalSchema(req.body);
    cow.save().then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

// MODIFICAR ANIMAL
router.put('/animals/:id', (req, res) => {
    const { id } = req.params;
    const { type, weight, name, device, deviceNumber } = req.body;
    animalSchema.updateOne({ _id: id }, { $set: {type, weight, name, device, deviceNumber} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
})

// ELIMINAR ANIMAL
router.delete('/animals/:id', (req, res) => {
    const { id } = req.params;
    animalSchema.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
})

module.exports = router;