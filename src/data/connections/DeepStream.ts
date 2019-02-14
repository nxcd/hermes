const deepStreamClient = require('deepstream.io-client-js')

export class DeepStream {

  private readonly url: string
  private readonly user: string
  private readonly pass: string

  constructor (options: { url: string, user: string, pass: string }) {
    this.url = options.url
    this.user = options.user
    this.pass = options.pass
  }

  connect () {
    const options = {
      // Reconnect after 1, 2, 3 seconds
      reconnectIntervalIncrement: 1000,
      // Try reconnecting every three seconds
      maxReconnectInterval: 3000,
      // We never want to stop trying to reconnect
      maxReconnectAttempts: 5,
      // Send heartbeats only once a minute
      heartbeatInterval: 10000
    }
    const ds = deepStreamClient(this.url, options)
    ds.on('error', console.error)

    if (!this.user || !this.pass) {
      ds.login()
      return ds
    }

    ds.login({
      username: this.user,
      password: this.pass
    })
    return ds
  }
}
