// https://github.com/lazd/gulp-karma/issues/7

var gulp = require('gulp');
var karma = require('gulp-karma');

gulp.task('workingtest', function(){
    return gulp.src('blop')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run',
            singleRun: true
        }))
    ;
});

gulp.task('failingtest', function(){
    return gulp.src('js/file_to_test.js')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run',
            singleRun: true
        }))
    ;
});