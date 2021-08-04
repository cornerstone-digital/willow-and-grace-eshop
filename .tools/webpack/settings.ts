import serverConfig from '@shared/config/server.config'
import isWindows from 'is-windows'
import { Configuration } from 'webpack-dev-server'

interface WebpackSettings {
  isDev: boolean
  isProd: boolean
  isTest: boolean
  isCypress: boolean
  isDevServer: boolean
  devServer: {
    port: number
    host: string
    url: string
    config: Configuration
  }
}

const devServerPort: WebpackSettings['devServer']['port'] = serverConfig.port
const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0'

const settings: WebpackSettings = {
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isCypress: process.env.NODE_ENV === 'cypress',
  isDevServer: process.env.WEBPACK_IS_DEV_SERVER === 'true',
  devServer: {
    port: devServerPort,
    host: devServerHost,
    url: `http://${devServerHost}:${devServerPort}/`,
    config: {
      stats: 'errors-warnings',
      contentBase: './dist',
      publicPath: '/',
      port: devServerPort,
      historyApiFallback: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      hot: true,
      overlay: false,
      host: devServerHost,
      open: false,
      quiet: false,
      noInfo: false,
      writeToDisk: true,
      inline: true,
    },
  },
}

export default settings
