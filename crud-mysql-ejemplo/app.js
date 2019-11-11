const express = require('express');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);


app.listen(app,() => {
	console.log('Escuchando en el puerto 3000')

})