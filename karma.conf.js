const paths = require('./config').paths;

module.exports = function(config) {
    config.set({

        basePath: '',

        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        preprocessors: {
            'app/**/!(*.spec).js': ['coverage']
        },

        files: paths.vendor.concat(paths.testVendor, paths.scripts, paths.tests),

        reporters: ['mocha'],

        coverageReporter: {
            reporters: [
                {type: 'html'}
            ]
        }
    });
}
