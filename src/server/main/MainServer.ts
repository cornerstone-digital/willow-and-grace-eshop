import { resolve } from 'path'

import serverConfig from '@shared/config/server.config'
import compress from 'compression'
import cookieParser from 'cookie-parser'
import express, { Application } from 'express'
import methodOverride from 'method-override'

import assetCacheMiddleware from './middlewares/assetCache'
import renderMiddleware from './middlewares/render'

class MainServer {
  app: Application = express()

  private staticPath: string = resolve(process.cwd(), './dist/client')

  constructor() {
    if (process.env.NODE_ENV !== 'development') {
      this.staticPath = resolve(process.cwd(), '/dist/client')
    }
  }

  public mountMiddleware(): void | Promise<any> {
    this.app
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(express.json())
      .use(
        express.urlencoded({
          extended: true,
        }),
      )

    assetCacheMiddleware(this.app, this.staticPath)
    renderMiddleware(this.app, { staticPath: this.staticPath })
  }

  public setApp(app: Application) {
    this.app = app

    return this
  }

  public bootstrap() {
    this.mountMiddleware()

    return this
  }

  public start() {
    this.app.listen(serverConfig.port, () => console.log('Server started on port', serverConfig.port))
  }
}

export default new MainServer()
