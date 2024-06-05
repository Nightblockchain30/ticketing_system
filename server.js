import express from 'express';

const server_app = express();
const port = 3000;

// root path
server_app.get('/', (req, res) => {
    res.send("Hello World");
});

server_app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
