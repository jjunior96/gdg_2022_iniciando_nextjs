// Para ver o relatorio, basta ir em /coverage/lcov-report/index.html
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  // collectCoverage: true,
  coverageDirectory: './coverage/',
  // collectCoverageFrom: [
  //   'src/**/*.test.ts(x)',
  //   '!src/**/stories.tsx',
  //   '!src/pages/**/*.tsx',
  //   '!src/styles/**/*.tsx'
  // ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'react-toastify',
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
  // coverageThreshold: {
  //   global: {
  //     statements: 100,
  //     branches: 95,
  //     functions: 100,
  //     lines: 100
  //   }
  // }
};
