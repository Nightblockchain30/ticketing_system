//IMPORTs
import 'dotenv/config';
import app from './app.js';
import express_app from './app.js';

const port = process.env.PORT || 3000;


const server = express_app.listen(port, () => {
    console.log(`Envioronment: ${process.env.NODE_ENV}`)
    console.log(`Server is running at http://localhost:${port}`);
})

// EXPORTs
// export default server; // Para testear errores
