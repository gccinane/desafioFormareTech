import { Router } from 'express'

import UserController from './app/controllers/UserController'
import MessageController from './app/controllers/MessageController'
import SessionController from './app/controllers/SessionController'

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/messages', MessageController.store)
routes.get('/messages', MessageController.index)
routes.delete('/messages/', MessageController.delete)

routes.post('/sessions', SessionController.store)

export default routes
