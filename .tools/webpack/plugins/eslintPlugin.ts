import { join } from 'path'

import ESLintPlugin from 'eslint-webpack-plugin'

const config = {
  context: join(process.cwd(), '/src'),
  extensions: ['js', 'jsx', 'ts', 'tsx'],
}

export default new ESLintPlugin(config)
