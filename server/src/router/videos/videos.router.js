
const express = require('express');

const {
    httpGetAllVideos,
    // httpGetVideo,
    // httpPostLaunch,
    // httpDeleteLaunch,
} = require('./videos.controller')


const videosRouter = express.Router()

videosRouter.get('/videos', httpGetAllVideos)
// launchesRouter.post('/launches', httpPostLaunch)
// launchesRouter.delete('/launches', httpDeleteLaunch)
// launchesRouter.get('/launches/:id', getLaunch)

module.exports = videosRouter