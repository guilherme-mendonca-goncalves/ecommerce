const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.jsx'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@src(.*)$': '<rootDir>/src$1'
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/build/',
    '<rootDir>/node_modules/'
  ],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    './src/components/**/*.{ts,tsx}',
    './src/utils/**/*.{ts,tsx}',
    '!./src/**/index.ts'
  ],
  coverageReporters: [
    'text',
    'cobertura',
    'lcov'
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
