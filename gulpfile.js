// Sass configuration
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
  // 1. Find scss files
  return gulp.src('./styles/**/*.scss')
  // 2. Pass the files thru the sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. Save the compiled CSS in this path
    .pipe(gulp.dest('./styles'))
  // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

// Watch & Auto-update
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  //Watch for any changes in .scss files and run the style function
  gulp.watch('./styles/**/*.scss', style);
  // Watch for html changes, update and give a refresh. This is needed for html files
  gulp.watch('./*.html').on('change', browserSync.reload);
  // js
  // gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

// Export so that gulp can use the functions
exports.style = style;
exports.watch = watch;

