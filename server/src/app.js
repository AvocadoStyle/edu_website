import express, { json } from 'express'
// const OAuth2Data = require('./cred.json')
import path from 'path'
// const { google } = require('googleapis')
import cors from 'cors'
import morgan from 'morgan'
import videosRouter from './router/videos/videos.router.js'
import usersRouter from './router/users/users.router.js'


const app = express();


app.use(cors())
app.use(morgan('combined'))
app.use(json());
app.use(videosRouter)
app.use(usersRouter)


// app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(planetRouter)
// app.use(launchRouter)
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
//   });


export default app;

