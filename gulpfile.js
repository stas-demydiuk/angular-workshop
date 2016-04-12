const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

var paths = {
    vendor: [
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js'
    ],
    scripts: 'app/**/*.js',
    partials: [
        'app/**/*.html'
    ],
    destination: 'dist'
};

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['scripts', 'templates']);

gulp.task('scripts', function () {
    gulp
        .src([]
            .concat(paths.vendor)
            .concat(paths.scripts)
        )
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(paths.destination))
});

gulp.task('templates', function () {
    gulp.src(paths.partials)
        .pipe(gulp.dest(paths.destination))
});

gulp.task('watch', function () {
    gulp.watch(paths.partials, ['templates']);
    gulp.watch(paths.scripts, ['scripts']);
});