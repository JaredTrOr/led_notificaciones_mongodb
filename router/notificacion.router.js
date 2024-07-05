const router = require('express').Router()
const Notificacion = require('../models/Notificacion')

router.get('/get-notificaciones', async (req,res) => {
    try {
        const notificaciones = await Notificacion.find()
        res.json({success: true, message: 'Las notificaciones se han obtenido con éxito', data: notificaciones})
    } catch(err) {
        res.json({success: false, message: err})
    }
})

router.post('/create-notificacion', async (req,res) => {
    try {
        await Notificacion.create(req.body)
        res.json({success: true, message: 'La notificación se ha guardado con éxito'})
    } catch(err) {
        res.json({success: false, message: err})
    }
})

module.exports = router