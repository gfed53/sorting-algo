var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
	sassMain: './sass/styles.sass',
	sass: './sass/**/*.sass',
	css: './css'
};

// Compile SASS

gulp.task('sass', function(){
	return gulp.src(paths.sassMain)
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest(paths.css));
});