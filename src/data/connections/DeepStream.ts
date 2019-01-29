const deepStreamClient = require('deepstream.io-client-js')

export class DeepStream {

  private readonly url: string
  private readonly user: string
  private readonly pass: string

  constructor (options: { url: string, user: string, pass: string }) {
    this.url = options.url
    this.user = options.user
    this.pass = options.pass
    console.log(options)
  }

  connect () {
    const ds = deepStreamClient(this.url)
    ds.login({
      username: this.user,
      password: this.pass
    }, (success: boolean, data: any) => console.log(success, data))
    return ds
  }
}
