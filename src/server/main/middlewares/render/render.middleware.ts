import ejs from 'ejs'
import { Application, Request, Response } from 'express'

const renderMiddleware = (app: Application, config: any) => {
  app.set('views', config.staticPath)
  app.engine('html', ejs.renderFile)
  app.set('view engine', 'html')

  app.get(`/*`, async (_req: Request, res: Response): Promise<void> => {
    res.render('index.html')
  })
}

export default renderMiddleware
