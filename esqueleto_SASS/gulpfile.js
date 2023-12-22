const { series, src, dest, watch, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass')); // compilar scss

function compilaSCSS() {
    return src ('./src/scss/*.scss') // entry 
    .pipe(scss())
    .pipe(dest('./dist')) //output.
} // funcion para compilar el scss

function watchSCSS() {
    watch('./**/*.scss', compilaSCSS);
}

exports.compilaSCSS = compilaSCSS;
exports.watchSCSS = watchSCSS;

