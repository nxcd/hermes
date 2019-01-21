const deepStreamClient = require('deepstream.io-client-js')

export class DeepStream {

  private readonly url: string

  constructor (url: string) {
    this.url = url
  }

  connect () {
    const ds = deepStreamClient(this.url)
    ds.login()
    return ds
  }
}
