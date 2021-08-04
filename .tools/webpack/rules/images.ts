import { RuleSetRule } from 'webpack'

const imageRule: RuleSetRule = {
  test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  type: 'asset/resource',
}

export default imageRule
