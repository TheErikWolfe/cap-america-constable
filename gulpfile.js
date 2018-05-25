var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');

gulp.task('sass', function()
{
	return gulp.src('app/style/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/style/'));
});

gulp.task('copy', function()
{
	return gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('watch', function()
{
	gulp.watch('app/**/*', ['copy','sass']);
});

gulp.task('default', function(callback)
{
	runSequence(['sass', 'copy'], 'watch');
});