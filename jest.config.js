module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testMatch: ['**/__tests__/**/*.test.ts'], // Specify test files pattern
	moduleFileExtensions: ['ts', 'js'], // Resolve TypeScript and JavaScript files
	coverageDirectory: 'coverage', // Directory for test coverage reports
	collectCoverage: true, // Enable coverage collection
	coverageReporters: ['text', 'lcov'], // Coverage report types
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	transform: {
		'^.+\\.ts$': 'ts-jest', // Transform TypeScript files using ts-jest
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1', // Map @/ to the src directory for easier imports
	},
}
