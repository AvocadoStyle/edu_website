
import { Router } from 'express';

import  httpGetAllVideos  from './videos.controller.js';


const videosRouter = Router()

videosRouter.get('/videos', httpGetAllVideos)
// launchesRouter.post('/launches', httpPostLaunch)
// launchesRouter.delete('/launches', httpDeleteLaunch)
// launchesRouter.get('/launches/:id', getLaunch)

export default videosRouter