import WorkboxPlugin from 'workbox-webpack-plugin'

export default new WorkboxPlugin.GenerateSW({
  // these options encourage the ServiceWorkers to get in there fast
  // and not allow any straggling "old" SWs to hang around
  clientsClaim: true,
  skipWaiting: true,
  maximumFileSizeToCacheInBytes: 4194304,
})
