const app = require('./app')
// const http = require('http')

const PORT = process.env.PORT || 8000;

const { loadPlanetsData } = require('./models/planets.model');
// const server = http.createServer(app);

// server.listen(PORT, () =>{
//     console.log(`Listening on port [${PORT}]...`)
// })
async function startServer(){
    await loadPlanetsData();
    app.listen(PORT, () => {
        console.log(`Listening on port [${PORT}]...`)
    })
}


startServer()
