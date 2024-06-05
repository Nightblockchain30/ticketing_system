import express from 'express';
import 'dotenv/config';

const server_app = express(); //Esta instancia es nuestra "app express" con todas las funcionalidades del framework
const port = process.env.PORT || 3000;

// root path
server_app.get('/', (req, res) => {
    res.status(200).send("Holaaa");
});

server_app.listen(port, () => {
    console.log(`Envioronment: ${process.env.NODE_ENV}`)
    console.log(`Server is running at http://localhost:${port}`);
})

// console.log(process.env); // Comando para visualizar las variables de entorno de la aplicación

