const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Notificacion = new Schema({

    tituloMensaje: String,
    cuerpoMensaje: String,
    hora: String,
    fecha: String,
    timestamp: Date

}, { collection: 'notificaciones' })

module.exports = mongoose.model('Notificacion', Notificacion)
