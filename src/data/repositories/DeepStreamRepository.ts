export class DeepStreamRepository {
  private readonly connection: any

  constructor (connection: any) {
    this.connection = connection
  }

  emit (eventName: string, eventData: any) {
    return this.connection.event.emit(eventName, eventData)
  }
}
