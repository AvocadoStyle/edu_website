const express = require('express');

const {
    httpGetAllVideos,
    // httpGetVideo,
    // httpPostLaunch,
    // httpDeleteLaunch,
} = require('./videos.controller')


const launchesRouter = express.Router()

launchesRouter.get('/launches', httpGetAllVideos)
launchesRouter.post('/launches', httpPostLaunch)
launchesRouter.delete('/launches', httpDeleteLaunch)
// launchesRouter.get('/launches/:id', getLaunch)

module.exports = launchesRouter