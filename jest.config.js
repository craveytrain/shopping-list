module.exports = {
  mapCoverage: true,
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  modulePaths: [
    '<rootDir>/src/'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$',
  testPathIgnorePatterns: [
    '<rootDir>/dist'
  ]
};
