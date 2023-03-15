import { Router } from 'express';
import { httpGetUsers, httpGetUser, httpUpdateUser, httpDeleteUser, httpCreateUser, httpLoginUser } from './users.contoller.js'
import userDeco from './privilegs_decorator.js'


const usersRouter = Router()

usersRouter.get('/users', userDeco(httpGetUsers, 'admin'))
usersRouter.get('/users/:id', userDeco(httpGetUser, 'admin'))
usersRouter.put('/users/:id', userDeco(httpUpdateUser, 'admin'))
usersRouter.delete('/users/:id', userDeco(httpDeleteUser, 'admin'))
usersRouter.post('/users', httpCreateUser)
usersRouter.post('/users/login', httpLoginUser)

export default usersRouter