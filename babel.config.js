module.exports = api => {
  const mode = process.env.NODE_ENV ?? 'production'

  // This caches the Babel config by environment.
  api.cache.using(() => mode)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
        },
        useBuiltIns: 'usage',
        debug: false,
        corejs: 3,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ]

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-styled-components',
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: false,
        useESModules: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@tools': '.tools',
          '@client': './src/client',
          '@server': './src/server',
          '@shared': './src/shared',
          '@components': './src/client/components',
          '@constants': './src/client/constants',
          '@hooks': './src/client/hooks',
          '@styles': './src/client/styles',
        },
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
