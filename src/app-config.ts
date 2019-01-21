const env = require('sugar-env')

export const config = {
  cors: {
    exposedHeaders: ['x-content-range']
  },
  deepStream: {
    url: env.get('DEEPSTREAM_URL')
  }
}
