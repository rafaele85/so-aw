import nextJest from "next/jest";

const createJestConfig = nextJest({
    dir: './',
});

const config = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
};

export default createJestConfig(config);
