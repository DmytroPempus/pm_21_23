const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function css_style() {
    return gulp.src('./app/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function jsTask() {
    return gulp.src('app/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

function compressImages() {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

function copyHTML() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
}

function copyScripts() {
    return gulp.src(['app/js/charts.js', 'app/js/main.js', 'app/js/jquery-3.7.1.min.js'])
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        port: 3000
    });
    done();
}

function watchSass() {
    gulp.watch('./app/sass/**/*.scss', css_style);
    gulp.watch('./app/*.html', copyHTML);
    gulp.watch('./app/js/*.js', jsTask);
}

function defaultTask() {
    gulp.parallel(css_style, jsTask, compressImages, copyHTML, copyScripts, sync, watchSass)();
}

exports.default = defaultTask;
