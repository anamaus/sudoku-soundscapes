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
var minifyInline = require('gulp-minify-inline');
var sassThemes = require('gulp-sass-themes');


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


//minify and concatenate js or css
gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'))
});


gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg|ico)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});
//font transfer to dist

gulp.task('font', function() {
    return gulp.src('app/font/**/*')
        .pipe(gulp.dest('dist/font'))
});

//cleaning up generated files
gulp.task('clean:dist', function() {
    return del.sync('dist');
});

//build task 1 and then task/tasks 2, then task3
gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref','cssnano', 'images', 'font','sounds'],
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


gulp.task('minify-inline', function() {
    gulp.src('app/*.html')
        .pipe(minifyInline())
        .pipe(gulp.dest('dist/'))
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

gulp.task('sounds', function(){
    return gulp.src('app/sounds/**/*')

        .pipe(gulp.dest('dist/sounds/'))
});


// gulp.task('styles',gulp.src('app/scss/themes/*.scss')
//     .pipe(sassThemes('./scss/themes/_*.scss'))
//     .pipe(sass()).on('error', sass.logError)
//     .pipe(gulp.dest('dist/styles'))
// );
// gulp.task('styles', function(){
//     return gulp.src('app/scss/themes/*.scss')
//
//         .pipe(sassThemes('./scss/themes/_*.scss'))
//         .pipe(sass()).on('error', sass.logError)
//         .pipe(cssnano())
//         .pipe(gulp.dest('dist/css/themes'))
// });
gulp.task('cssnano', function(){
    return gulp.src('app/css/**/*.css')


        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
});
