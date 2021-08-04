import { join } from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
  filename: 'index.html',
  inject: true,
  template: join(process.cwd(), './src/client/public/index.html'),
  title: 'Vodafone',
  gitHash: '',
  versions: '',
  buildTime: '',
  minify: false,
}

export default new HtmlWebpackPlugin(config)
