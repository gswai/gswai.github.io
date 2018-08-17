var gulp = require('gulp'),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  image = require('gulp-image'),
  gp_uglify = require('gulp-uglify');

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

gulp.task('default', ['navburger', 'map_leaflet_landing', 'map_leaflet', 'defer_css_loading'], function(){});
