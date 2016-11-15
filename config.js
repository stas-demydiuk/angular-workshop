const paths = {
    vendor: [
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js'
    ],
    testVendor: [
        'node_modules/angular-mocks/angular-mocks.js'
    ],
    bootstrap: 'node_modules/bootstrap/dist/**',
    scripts: 'app/**/*.js',
    tests: 'app/**/*.spec.js',
    partials: [
        'app/**/*.html'
    ],
    destination: 'dist'
};

module.exports = {
    paths: paths
};
