const gulp = require('gulp');
const sass = require("gulp-sass")(require("node-sass"));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

// const browserSync = require('browser-sync').create();

//compile scss into css
function css() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(concat('app.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
}

/**
 * Watch 
 */
function watch() {
    gulp.watch('src/scss/**/*.scss', css);
}

exports.css= css;
exports.watch= watch;