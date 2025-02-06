/*
?## Paso 1: Crear un Servidor Express
 
Lo primero creamos un servidor de express y lo levantamos.
Para ello inicializamos proyecto de node e instalamos dependencias:

!Terminal
```bash
npm init -y
npm i express mongoose dotenv
```

Instalamos express para crear el servidor, mongoose para la conexión a la base de datos y dotenv para poder usar las variables de entorno.
-----------------------------------------------------------------------------------------------------------------------------------------*/


const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = 8080;

//-------
//! Importamos la conexión de la base de datos a Mongo Atlas.

const { dbConnection } = require('./config/config');

dbConnection();

//--------

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});