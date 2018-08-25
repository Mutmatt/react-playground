"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');


var config = {
    dev: {
        port: 666,
        baseUrl: 'http://localhost',
        paths: {
            html: './src/*.html',
            js: './src/**/*.js',
            images: './src/images/*',
            css: [
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/bootstrap/dist/css/bootstrap-reboot.min.css',
                'node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
            ],
            mainJs: './src/main.js',
            dist: './dist'
        }
    }
};


//default 'gulp'
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);

gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.dev.port,
        base: config.dev.baseUrl,
        livereload: true
    });
});



gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.dev.baseUrl + ':' + config.dev.port + '/' }));
});

gulp.task('lint', function() {
    return gulp.src(config.dev.paths.js)
        .pipe(lint( { configFile: 'eslint.config.json' } ))
        .pipe(lint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.dev.paths.html, ['html']);
    gulp.watch(config.dev.paths.js, ['js', 'lint']);
    gulp.watch(config.dev.paths.css, ['css']);
    gulp.watch(config.dev.paths.images, ['images']);
});

gulp.task('html', function() {
    gulp.src(config.dev.paths.html)
        .pipe(gulp.dest(config.dev.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    browserify(config.dev.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.dev.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    gulp.src(config.dev.paths.images)
        .pipe(gulp.dest(config.dev.paths.dist + '/images'))
        .pipe(connect.reload());

    gulp.src('./src/images/favicon.ico')
        .pipe(gulp.dest(config.dev.paths.dist));
});

gulp.task('css', function() {
    gulp.src(config.dev.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.dev.paths.dist + '/css'))
        .pipe(connect.reload());
});