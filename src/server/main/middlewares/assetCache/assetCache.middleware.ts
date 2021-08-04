import { ServerResponse } from 'http'

import { Application } from 'express'
import expressStaticGzip from 'express-static-gzip'

export default (app: Application, staticPath: string) => {
  const enableBrotli = true
  const msToExpiry = 31536000000

  app.use(
    '/',
    expressStaticGzip(staticPath, {
      enableBrotli,
      serveStatic: {
        fallthrough: false,
        setHeaders: (res: ServerResponse) => {
          res.setHeader('Cache-Control', 'public, max-age=31536000')
          res.setHeader('Expires', new Date(Date.now() + msToExpiry).toUTCString())
        },
      },
    }),
  )
}
