const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const notificacionRouter = require('./router/notificacion.router')
dotenv.config()
const app = express()

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Conexión con MongoDB Atlas!!')
})
.catch(err => {
    console.log(`Hubo un error en la conexón ${err}`)
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/not', notificacionRouter)

app.get('/', (req,res) => res.json({message: 'Bienvenido al servidor de guardado de notificaciones de Firebase :)'}))

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});