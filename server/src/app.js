const express = require('express')
// const OAuth2Data = require('./cred.json')
const path = require('path')
// const { google } = require('googleapis')
const cors = require('cors')
const morgan = require('morgan')
const videosRouter = require('./router/videos/videos.router')

const app = express();


app.use(cors({
    origin:["http://localhost:8000",
"https://edu-api-backend.onrender.com",
"https://youtube.googleapis.com/youtube/v3",
"https://youtube.googleapis.com"]
}))
app.use(morgan('combined'))
app.use(express.json());
app.use(videosRouter)


// app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(planetRouter)
// app.use(launchRouter)
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
//   });


module.exports = app;

