import app from './app.js';
import { createConnection } from './data/database.data.js';

createConnection()

const PORT = process.env.PORT || 8000;

async function startServer(){
    app.listen(PORT, () => {
        console.log(`Listening on port [${PORT}]...`)
    })
}


startServer()
