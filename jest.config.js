module.exports = {
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|html)$': '<rootDir>config/jest/jest.filemock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./.tools/jest/jest.setup.ts', 'jest-canvas-mock'],
  modulePaths: ['<rootDir>/src'],
  modulePathIgnorePatterns: ['<rootDir>/lib', '<rootDir>/cypress'],
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
    'src/**/*.(d|types|test|style).(ts|tsx)',
    '!src/server/**/*.(ts|tsx)',
    '!src/**/logger/**',
    '!src/**/index.(ts|tsx)',
    '!src/**/global.ts',
    '!src/pages/BasketPage/BasketPage.tsx',
    '!src/pages/FeatureFlags',
    '!src/service-worker.ts',
    '!src/routes.ts',
  ],
  coverageDirectory: '.testresults/jest-coverage',
  transform: {
    '^.+\\.(js|ts|jsx|tsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@vfuk/(components|web-core|web-shop-core|web-cms-core)).+\\.js$'],
  verbose: true,
  testResultsProcessor: 'jest-junit',
}