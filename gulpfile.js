var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    manifest = require('gulp-manifest'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');

gulp.task('manifest', function(){
  gulp.src(['./app/index.html',
            './app/app.css',
            './app/app.js',
            './app/companies.json'
            ])
    .pipe(manifest({
      hash: true,
      preferOnline: false,
      network: ['http://*', 'https://*', '*'],
      cache: [
              '//ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js',
              '//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
              'bower_components/html5-boilerplate/dist/css/normalize.css',
              'bower_components/html5-boilerplate/dist/css/main.css'
              ],
      filename: 'app.manifest',
      exclude: ['app.manifest', 'cache.appcache']
     }))
    .pipe(gulp.dest('app'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 8000,
    livereload: true
  });
});

gulp.task('sass', function () {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest('./app/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function() {
  return gulp.src('./app/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
  gulp.watch('./app/**/*.html', ['html']);
  gulp.watch('./app/js/*.js', ['js']);
  gulp.watch('./app/**/*', ['manifest']);
});

gulp.task('build', ['sass', 'js', 'manifest']);

gulp.task('serve', ['connect', 'build', 'watch']);
