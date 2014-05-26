// include gulp
var gulp  = require('gulp');
var gutil = require('gulp-util');

// plugins
var changed  = require('gulp-changed');
var coffee   = require('gulp-coffee');
var plumber  = require('gulp-plumber');
var sass     = require('gulp-sass');
var serve    = require('gulp-serve');
var watch    = require('gulp-watch');

// input directories
var coffee_src     = 'assets/scripts/**/*.coffee';
var sass_src       = 'assets/styles/**/*.scss';

// output directories
var coffee_dist   	= 'application/scripts/';
var sass_dist     	= 'application/styles/';


// serve files
gulp.task('server:start', function () {
    serve({
        root: 'application',
        port: 6174
    })();
});

// compile coffeescript
gulp.task('coffee:compile', function () {
    gulp.src(coffee_src)
        .pipe(plumber())
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest(coffee_dist));
});

// compile sass
gulp.task('sass:compile', function () {
    gulp.src(sass_src)
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest(sass_dist));
});

// serve
gulp.task('dev', ['server:start', 'coffee:compile', 'sass:compile'], function () {
    watch({glob: coffee_src}, function () {
        gulp.start('coffee:compile');
    });
    watch({glob: sass_src}, function () {
        gulp.start('sass:compile');
    });

    gutil.log('Server listening on port: ' + gutil.colors.magenta('http://0.0.0.0:6174'));
});

// run all
gulp.task('default', function () {
    gutil.log('No default task registered.');
});
