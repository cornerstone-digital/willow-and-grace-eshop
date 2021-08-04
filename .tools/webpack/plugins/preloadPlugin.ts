// @ts-ignore
import PreloadPlugin from '@vue/preload-webpack-plugin'

export default new PreloadPlugin({
  rel: 'preload',
  include: 'initial', // or 'initial'
})
