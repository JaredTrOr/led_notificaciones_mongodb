# MongoDB API para guardado de notificaciones

La API realizada en express hace un guardado de las notificaciones enviadas por firebase en la aplicación de led_smartphone_smartwatch y led_smartphone_smartphone, su propósito es guardar las notificaciones enviadas y recibidas dentro de MongoDB Atlas para poder observarlas en el dispositvo del smartwatch


HOSTING 
https://led-notificaciones-mongodb.onrender.com/not

Obtener notificaciones
GET https://led-notificaciones-mongodb.onrender.com/not/get-notificaciones

Guardas notificación
POST https://led-notificaciones-mongodb.onrender.com/not/create-notificacion
'Content-type': 'application/json'

{
  'tituloMensaje': message.notification!.title.toString(),
  'cuerpoMensaje': message.notification!.body.toString(),
  'hora': _dateTimeHelper.getFormattedTime(),
  'fecha': _dateTimeHelper.getFormattedDate()
}

![Captura de pantalla 2024-07-05 162310](https://github.com/JaredTrOr/led_notificaciones_mongodb/assets/115369767/f9fe21f2-fa05-46ea-97f7-d5000159ca06)
