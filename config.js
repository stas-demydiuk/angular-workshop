const paths = {
    vendor: [
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js'
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
