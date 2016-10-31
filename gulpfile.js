var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var responsive = require('gulp-responsive-images');


gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        //.pipe(uncss({
        //    html: ['app/index.html']
        //}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'],function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Other watchers
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});


//minify js or css
gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});



//font transfer to dist

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

//cleaning up generated files
gulp.task('clean:dist', function() {
    return del.sync('dist');
});

//build task 1 and then task/tasks 2, then task3
gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'images', 'fonts'],
        callback
    )
});

//build task for 1st set... calls it by typing only gulp in cmd
gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
        callback
    )
});
gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
        callback
    )
});




//IMAGE RESIZING

gulp.task('resize', function () {
    gulp.src('app/images/**/*')
        .pipe(responsive({
            '*': [{
                width:500,
                suffix: '-500'
            }, {
                width: 300 ,
                suffix: '-300'
            }]
            // ,
            // '*.jpg': [{
            //     width: 600,
            //     crop: true
            // }]
        }))
        .pipe(gulp.dest('app/images/resized'));
});