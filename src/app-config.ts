const env = require('sugar-env')

export const config = {
  cors: {
    exposedHeaders: ['x-content-range']
  },
  deepStream: {
    url: env.get('DEEPSTREAM_URL'),
    user: env.get('DEEPSTREAM_USER'),
    pass: env.get('DEEPSTREAM_PASSWORD')
  }
}
