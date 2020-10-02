module.exports = {
  setupFilesAfterEnv: ['./setupTests.js'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  snapshotSerializers: [
    'enzyme-to-json/serializer',
    'snapshot-diff/serializer.js',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
}
