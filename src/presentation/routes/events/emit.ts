const rescue = require('express-rescue')
const { validate } = require('@expresso/expresso')

import { Request, Response } from 'express'
import { SocketService } from '../../../services/SocketService'

export function factory (service: SocketService) {
  return [
    validate({
      type: 'object',
      properties: {
        eventName: { type: 'string' },
        eventData: {
          oneOf: [
            { type: 'string' },
            { type: 'object' },
            { type: 'number' }
          ]
        }
      },
      additionalProperties: false,
      required: ['eventName', 'eventData']
    }),
    /**
     * Route handler
     * =============
     */
    rescue(async (req: Request, res: Response) => {
      const { eventName, eventData } = req.body
      service.emitEvent(eventName, eventData)

      res.status(204).end()
    })
  ]
}
