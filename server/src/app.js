import express, { json } from 'express'
// const OAuth2Data = require('./cred.json')
import path from 'path'
// const { google } = require('googleapis')
import cors from 'cors'
import morgan from 'morgan'
import videosRouter from './router/videos/videos.router.js'

const app = express();


app.use(cors({
    origin:["http://localhost:8000",
"https://edu-api-backend.onrender.com",
"https://youtube.googleapis.com/youtube/v3",
"https://youtube.googleapis.com",
"http://localhost:5174",
"http://localhost:5174/",
"https://education-website.onrender.com",
"https://education-website.onrender.com/"]
}))
app.use(morgan('combined'))
app.use(json());
app.use(videosRouter)


// app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(planetRouter)
// app.use(launchRouter)
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
//   });


export default app;

