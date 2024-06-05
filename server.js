import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

const server_app = express(); //Esta instancia es nuestra "app express" con todas las funcionalidades del framework
const port = process.env.PORT || 3000;

//middlewares -> Funciones que nos ayudan a interactuar con el REQ-UEST OBJECT y el RES-PONSE OBJECT 
server_app.use(morgan('dev'));
server_app.use(express.json()); // El middleware json() nos ayuda a convertir la petición del cliente a formato JSON para poder trabajar con ella desde el BACKEND 

// root path
server_app.get('/', (req, res) => {
    res.status(200).send("Holaaa");
});

server_app.listen(port, () => {
    console.log(`Envioronment: ${process.env.NODE_ENV}`)
    console.log(`Server is running at http://localhost:${port}`);
})

// console.log(process.env); // Comando para visualizar las variables de entorno de la aplicación

