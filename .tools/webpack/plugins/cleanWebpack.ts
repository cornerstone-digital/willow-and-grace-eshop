import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const config = {
  cleanOnceBeforeBuildPatterns: ['**/*', '!profile.json', '!tsconfig.tsbuildinfo'],
}

export default new CleanWebpackPlugin(config)
