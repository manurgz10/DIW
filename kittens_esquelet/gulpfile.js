const { series, src, dest, watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-clean-css');
const uglifyJS = require('gulp-uglify')
var concat = require('gulp-concat');




function compilaSCSS() {
    return src ('sass/**/*.scss')
    .pipe(scss())
    .pipe(dest('css/'))
}

function watcher() {
    watch('sass/**/*.scss', compilaSCSS);
  }

function minimizarCSS() {
    return src('css/*.css')
    .pipe(minifyCSS())
    .pipe(dest('dist/css/'))
}

function uglify() {
    return src('js/*.js')
    .pipe(uglifyJS())
    .pipe(dest('dist/js/'))
  }

  function concatenarCSS() {
    return src('dist/css/*.css')
    .pipe(concat('all.css'))
    .pipe(dest('dist/css/'))
  }


  function concatenarJS() {
    return src('dist/js/*.js')
    .pipe(concat('all.js'))
    .pipe(dest('dist/js/'))
  }

exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;
exports.minifyCSS = minimizarCSS;
exports.uglifyJS = uglify;
exports.concat = concatenarCSS;
exports.concat = concatenarJS;
exports.kittens = series(compilaSCSS,minimizarCSS,uglify, concatenarCSS, concatenarJS);