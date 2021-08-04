import { RuleSetRule } from 'webpack'

const typescriptRule: RuleSetRule = {
  test: /\.(tsx?|jsx?)$/,
  use: {
    loader: 'babel-loader',
  },
  exclude: /node_modules/,
}

export default typescriptRule
