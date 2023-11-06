const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const chartJs = require('chart.js');


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
        .pipe(gulp.dest('./app/css/'))
        .pipe(browserSync.stream());
}

function jsTask() {
    return gulp.src('src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

function compressImages() {
    return gulp.src('./app/css/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}


function sync(done) {
    browserSync.init({
        server: {
            baseDir: './app'
        },
        port: 3000
    });
    done();
}

function watchSass() {
    gulp.watch('./app/sass/**/*.scss', css_style);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
    gulp.watch('./app/js/*.js').on('change', browserSync.reload);
}

function defaultTask() {
    gulp.parallel(css_style, sync, watchSass)();
    gulp.watch('src/js/*.js', jsTask);
    gulp.series(compressImages)
}

exports.default = defaultTask;