var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    header = require('gulp-header');

gulp.task('lint', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('dev-scripts', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('game.js'))
		.pipe(gulp.dest('build/dev/js'));
});

gulp.task('dist-scripts', function () {
	return gulp.src('dev/js/**/*.js')
		.pipe(uglify())
		.rename('game.min.js')
		.pipe(gulp.dest('dist/js'));

});

gulp.task('default', function () {
   return gutil.log('Gulp is running!');
});
