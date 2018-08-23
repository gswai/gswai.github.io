var gulp = require('gulp'),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  image = require('gulp-image'),
  gp_uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var purify = require('gulp-purifycss');
let cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var site = 'https://d40e46fc.ngrok.io';

gulp.task('image', function () {
  gulp.src('./assets/images/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true // defaults to false
    }))
    .pipe(gulp.dest('./assets/images/'));
});

gulp.task('sass', function () {
  return gulp.src('./_sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./_sass/'));
});

// purify removes unused CSS classes
gulp.task('purify', ['sass'],  function() {
  return gulp.src('./_sass/main.css')
    .pipe(purify(['./_layouts/**.html', './_pages/**.html'], {info: true}))
    .pipe(replace(/!important/gm, ''))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '-min' }))
    .pipe(gulp.dest('./_includes'));
});

gulp.task("watch", ["purify"], function() {
  gulp.watch(["./_sass/main.scss", "./_sass/_variables.scss"], ["sass", "purify"]);
  gulp.watch(["./_pages/**", "./_layouts/**", "./_includes/**.html", "./blog/*"], ["purify"]);
})

gulp.task('default', ['sass', 'purify'], function(){});
