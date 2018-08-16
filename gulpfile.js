var gulp = require('gulp'),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  insert = require('gulp-insert'),
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

gulp.task('default', ['navburger', 'map_leaflet_landing', 'map_leaflet'], function(){});
