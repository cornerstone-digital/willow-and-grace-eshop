import { join } from 'path'

import CopyPlugin from 'copy-webpack-plugin'

const config = {
  patterns: [{ from: join(process.cwd(), './src/client/assets'), to: 'assets' }],
}

export default new CopyPlugin(config)
