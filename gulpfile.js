'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-html-minifier');

    // paths:
    var path = {

        scripts: {
            _src: 'src/js/**/*.js',
            _dest: 'dist/js/'
        },

        styles: {
            _src: 'src/less/main.less',
            _dest: 'dist/css/main.css'
        },

        html: {
            _src: 'src/*.html',
            _dest: 'dist/'
        }
    };

// ======= function

gulp.task('minify', function() {
  gulp.src(path.html._src)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('js:dev', function () {
  return gulp.src(path.scripts._src)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest(path.scripts._dest));
});


//=== style ===//
gulp.task('style:dev', function () {
 return gulp.src("./src/less/main.less")
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(gulp.dest("./dist/css/"));
});


gulp.task('watch', ['style:dev', 'js:dev', 'minify'], function() {
  gulp.watch(path.html._src, ['minify']);
  gulp.watch(path.scripts._src, ['js:dev']);
  gulp.watch('src/less/**/*.less', ['style:dev']);

});

gulp.task('default', ['watch']);
