/**
 * Created by karuana on 15. 8. 18..
 */
var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');

var scriptsPath ='./public/app/**/*.coffee';

gulp.task('coffee', function() {
    gulp.src(scriptsPath)
        .pipe(sourcemaps.init())
        .pipe(coffee())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./public/app'));
});

gulp.task('watch', function(){
    gulp.watch(scriptsPath, ['coffee']);
});


gulp.task('default', ['coffee']);