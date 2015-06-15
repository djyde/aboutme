var gulp = require('gulp'),
    jade = require('gulp-jade'),
    scss = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css');

gulp.task('default',function(){
  console.log('Enjoy!');
})

gulp.task('jade',function(){
  gulp.src('src/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
})

gulp.task('scss',function(){
  gulp.src('src/scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('src/css'))
})