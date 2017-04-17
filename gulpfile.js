var gulp        = require('gulp');
var babelify    = require('babelify');
var watchify    = require('watchify');
var browserify  = require('browserify');
var exorcist  = require('exorcist');
var browserSync = require('browser-sync').create();
var source      = require('vinyl-source-stream');
var sass         = require('gulp-sass');


var config = {
  watchInterval: 1000 // polling-loop sleep time for watch tasks, gulp-default is 100
};



// Input file.
watchify.args.debug = true;
var bundler = watchify(browserify(__dirname + '/es6/main.js', watchify.args));

// Babel transform
bundler.transform(babelify.configure({
    sourceMapRelative: 'es6'
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {

    return bundler.bundle()
        .on('error', function (err) {
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        .pipe(exorcist(__dirname + '/js/bundle.js.map'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(__dirname + '/js'))
        .pipe(browserSync.stream({once: true}));
}

/**
 * Gulp task alias
 */
gulp.task('bundle', function () {
    return bundle();
});


gulp.task('sass', function () {
    gulp.src('sass/style.scss')
        .pipe(sass({
            style: 'compressed',
        }).on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

/**
 * First bundle, then serve from the ./app directory
 */
gulp.task('default', ['bundle', 'sass'], function () {

    gulp.watch(['**/*.html'], {
        interval: config.watchInterval
    })
    .on('change', browserSync.reload);

    gulp.watch(['**/*.scss'], {
        interval: config.watchInterval
    }, ['sass']);
});