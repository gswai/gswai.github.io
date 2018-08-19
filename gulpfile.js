var gulp = require('gulp'),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  image = require('gulp-image'),
  psi = require('psi'),
  gp_uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var purify = require('gulp-purifycss');
var minifyCss = require('gulp-minify-css');

var site = 'https://d40e46fc.ngrok.io';

gulp.task('navburger', function(){
  return gulp.src(['./assets/js/navburger_click.js'])
    .pipe(gp_rename({ extname: '.min.js' }))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./_includes/'));
});

gulp.task('map_leaflet_landing', function () {
  return gulp.src('./assets/js/map_leaflet_landing.js')
    .pipe(gp_rename({ extname: '.min.js' }))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./_includes/'));
});

gulp.task('map_leaflet', function () {
  return gulp.src('./assets/js/map_leaflet.js')
    .pipe(gp_rename({ extname: '.min.js' }))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./_includes/'));
});

gulp.task('defer_css_loading', function () {
  return gulp.src('./assets/js/defer_css_loading.js')
    .pipe(gp_rename({ extname: '.min.js' }))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./_includes/'));
});

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

gulp.task('mobile', function () {
  return psi(site, {
    // key: key
    nokey: 'true',
    strategy: 'mobile',
  }).then(function (data) {
    console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    console.log(data.pageStats);
  });
});

gulp.task('desktop', function () {
  return psi(site, {
    nokey: 'true',
    // key: key,
    strategy: 'desktop',
  }).then(function (data) {
    console.log('Speed score: ' + data.ruleGroups.SPEED.score);
  });
});

gulp.task('sass', function () {
  return gulp.src('./_sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./_includes/'));
});

// purify removes unused CSS classes
gulp.task('purify', function() {
  return gulp.src('./_includes/main.css')
    .pipe(purify(['./_layouts/default.html', './_pages/index.html', './_pages/gswai2017.html'], {info: true, rejected: true}))
    .pipe(minifyCss())
    .pipe(gulp.dest('./_includes/purify'));
});

gulp.task("watch", ["purify"], function() {
  gulp.watch("./_pages/*", ["purify"])
})

gulp.task('default', ['navburger', 'map_leaflet_landing', 'map_leaflet', 'defer_css_loading', 'mobile'], function(){});
