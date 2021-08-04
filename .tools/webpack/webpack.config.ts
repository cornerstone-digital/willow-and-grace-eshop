import 'tsconfig-paths/register'

import path, { join } from 'path'

import { Application } from 'express'
import { Compiler, Configuration } from 'webpack'
import WebpackDevServer, { Configuration as WDSConfiguration } from 'webpack-dev-server'

import MainServer from '../../src/server/main/MainServer'
import plugins from './plugins'
import rules from './rules'
import settings from './settings'

interface WebpackConfig extends Configuration {
  devServer?: WDSConfiguration
}

const config: WebpackConfig = {
  // context: __dirname,
  target: settings.isDev ? 'web' : ['web', 'es5'],
  mode: settings.isDev ? 'development' : 'production',
  devtool: settings.isDev ? 'eval-cheap-module-source-map' : false,
  cache: settings.isDev
    ? {
        type: 'filesystem',
      }
    : false,
  entry: {
    main: [join(process.cwd(), '/src/client/index.tsx'), join(__dirname, './utils/cleanConsoleOnHMR.js')],
  },
  output: {
    path: path.join(process.cwd(), 'dist/client'),
    publicPath: settings.isDev ? settings.devServer.url : './',
    filename: settings.isDev ? '[name].[fullhash].js' : '[name].[contenthash].js',
  },
  resolve: {
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
  module: {
    rules: [rules.typescript, rules.html, rules.images, rules.fonts],
  },
  plugins: [
    plugins.htmlWebpackPlugin,
    plugins.preloadPlugin,
    plugins.providePlugin,
    plugins.definePlugin,
    plugins.forkTsChecker,
    plugins.eslintPlugin,
    plugins.copyPlugin,
    plugins.workboxPlugin,
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module: any) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },
}

if (settings.isDev) {
  config.devServer = {
    ...settings.devServer.config,
    noInfo: true,
    // @ts-ignore
    before: (app: Application, _server: WebpackDevServer, compiler: Compiler): void => {
      compiler.hooks.done.tap('Start app', () => {
        MainServer.setApp(app).bootstrap()
      })
    },
  }
}

if (settings.isProd) {
  config.optimization = {
    ...config.optimization,
    minimize: true,
    minimizer: [plugins.terserPlugin],
  }

  // @ts-ignore
  config.plugins?.push(plugins.cleanWebpack)

  config.performance = {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  }
}

export default config
