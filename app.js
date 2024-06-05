//IMPORTs
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

//OBJECTs
const server_app = express(); //Esta instancia es nuestra "app express" con todas las funcionalidades del framework


//MIDDLEWAREs -> Funciones que nos ayudan a interactuar con el REQ-UEST OBJECT y el RES-PONSE OBJECT 
server_app.use(morgan('dev')); // Mejora nuestro LOG y nuestra info en cada petición
server_app.use(express.json()); // El middleware json() nos ayuda a convertir la petición del cliente a formato JSON para poder trabajar con ella desde el BACKEND 


// PATHs
server_app.get('/', (req, res) => {
    res.status(200).send("Holaaa");
});


//EXPORTs
export default server_app;