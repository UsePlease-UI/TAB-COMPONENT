module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    modulePaths: ['<rootDir>/src/'],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
};
