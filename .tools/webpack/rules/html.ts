import { RuleSetRule } from 'webpack'

const htmlRule: RuleSetRule = {
  test: /\.(html)$/,
  use: {
    loader: 'html-loader',
  },
}

export default htmlRule
