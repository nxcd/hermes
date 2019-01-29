const expresso = require('@expresso/expresso')

import routes from './routes'
import { Express } from 'express'

import { SocketService } from '../services/SocketService'
import { DeepStreamRepository } from '../data/repositories/DeepStreamRepository'
import { DeepStream } from '../data/connections/DeepStream'

export const app = expresso(async (app: Express, config: any) => {
  const deepStreamConnection = new DeepStream(config.deepStream).connect()

  const socketRepository = new DeepStreamRepository(deepStreamConnection)
  const socketService = new SocketService(socketRepository)
  /**
   * Production Orders
   * =================
   */
  app.post('/events', routes.events.emit.factory(socketService))
})
