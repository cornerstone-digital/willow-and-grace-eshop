import { DefinePlugin } from 'webpack'

import settings from '../settings'

const config = {
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
  IS_PROD: settings.isProd,
  IS_DEV: settings.isDev,
  IS_DEV_SERVER: settings.isDevServer,
}

export default new DefinePlugin(config)
