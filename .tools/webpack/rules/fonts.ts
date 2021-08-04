import { RuleSetRule } from 'webpack'

const fontsRule: RuleSetRule = {
  test: /\.(woff(2)?|eot|ttf|otf|)$/,
  type: 'asset/inline',
}

export default fontsRule
