var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
	sassMain: './src/sass/styles.sass',
	sass: './src/sass/**/*.sass',
	css: './src/css'
};

// Compile SASS

gulp.task('sass', function(){
	return gulp.src(paths.sassMain)
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest(paths.css));
});

// Watch
gulp.task('watch', function(){
	gulp.watch(paths.sass, ['sass']);
});


//Default
gulp.task('default', ['sass', 'watch']);

