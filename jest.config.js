

module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
    ],
    setupFiles: ['@testing-library/react/dont-cleanup-after-each']
}