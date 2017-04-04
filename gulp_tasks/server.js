'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('nodemon', function(cb) {
    var called = false;
    return nodemon({
            script: 'server/app.js',
            ignore: [
                'gulpfile.js',
                'node_modules/',
                'typings/',
                'gulp_tasks/'
            ],
            env: {
                'NODE_ENV': 'development'
            }
        })
        .on('start', function() {
            if (!called) {
                called = true;
                cb();
            }
        })
        .on('restart', function() {
            setTimeout(function() {
                reload({ stream: false });
            }, 1000);
        });
});

gulp.task('server:nodemon', gulp.series('nodemon'));