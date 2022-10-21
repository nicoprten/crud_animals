const mongoose = require('mongoose');

    // ID SENASA (Alfanumerico 16 chars) - Requerido
    // ● Tipo Animal (Novillo, Toro, Vaquillona) - Requerido
    // ● Peso animal (kg - numerico) - Opcional
    // ● Nombre de potrero.(Texto hasta 200 chars) - Requerido
    // ● Tipo de Dispositivo (COLLAR, CARAVANA) - Requerido
    // ● Número de dispositivo. (Alfanumerico 8 chars) - Requerido

const animalSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    device: {
        type: String,
        required: true
    },
    deviceNumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Animal', animalSchema);