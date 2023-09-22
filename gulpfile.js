var gulp = require ("gulp");
//Створюємо тестовий таск
gulp.task ('testTask', function () {
    console.log ('This is a test task!');
});
//Запуск тасків за замовчуванням
gulp.task ("default", ["testTask"]);zz

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('C:\\Users\\123\\Desktop\\lab_1_web(2)\\app\\sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('C:\\Users\\123\\Desktop\\lab_1_web(2)\\app\\css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
};