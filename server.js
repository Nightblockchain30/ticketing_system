//IMPORTs
import 'dotenv/config';
import app from './app.js';
import server_app from './app.js';

const port = process.env.PORT || 3000;


const server = server_app.listen(port, () => {
    console.log(`Envioronment: ${process.env.NODE_ENV}`)
    console.log(`Server is running at http://localhost:${port}`);
})

// EXPORTs
// export default server; // Para testear errores
