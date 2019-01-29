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
