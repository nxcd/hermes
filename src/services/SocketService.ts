import { DeepStreamRepository } from '../data/repositories/DeepStreamRepository'

export class SocketService {
  private readonly repository: DeepStreamRepository

  constructor (repository: DeepStreamRepository) {
    this.repository = repository
  }

  emitEvent (eventName: string, eventData: any): void {
    return this.repository.emit(eventName, eventData)
  }
}
