/**
 * Created by SelcetStudio on 1/23/16.
 */

// Requires the gulp-sass plugin
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		size = require('gulp-size'),
		sourcemaps = require('gulp-sourcemaps');

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}
	})
});

gulp.task('mainStyle', function(){
	return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
		.pipe(sourcemaps.init())
		.pipe(sass.sync({
			sourceMap: true,
			sourceComments: 'normal',
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

//Watch task
gulp.task('watch', ['browserSync', 'mainStyle'], function (){
	// Reloads the browser whenever Scss files change
	gulp.watch('app/scss/**/*.scss', ['mainStyle']);

	// Reloads the browser whenever HTML files change
	gulp.watch('app/*.html', browserSync.reload);

	// Reloads the browser whenever JS files change
	gulp.watch('app/js/**/*.js', browserSync.reload);
});