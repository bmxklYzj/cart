
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('startLess', function () {
    gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch('*.less', ['startLess']);
})

gulp.task('default', ['startLess','watch']);