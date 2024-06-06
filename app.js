//IMPORTs
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

//OBJECTs
const express_app = express(); //Esta instancia es nuestra "app express" con todas las funcionalidades del framework
// Variable con la URL de la conexión de la DB
const URL_DB = (process.env.MODE_ENV = "test" // ¿Estamos en modo Test?
    ? `mongodb://localhost:27017/ticketing-db-test` // Si estamos en test cogemos esta URL
    : process.env.URL_DB || "mongodb://localhost:27017/ticketing-db"); // Sino escogeriamos la variable de entorno si existe y sino la última URL


mongoose.connect(URL_DB); // Esta conexión llamará a la URL en cuestión de MongoDB

//MIDDLEWAREs -> Funciones que nos ayudan a interactuar con el REQ-UEST OBJECT y el RES-PONSE OBJECT 
express_app.use(morgan('dev')); // Mejora nuestro LOG y nuestra info en cada petición
express_app.use(express.json()); // El middleware json() nos ayuda a convertir el objeto del cliente a formato JSON para poder trabajar con ella desde el BACKEND 


// PATHs
express_app.get('/', (req, res) => {
    res.status(200).send("Holaaa");
});


//EXPORTs
export default express_app;