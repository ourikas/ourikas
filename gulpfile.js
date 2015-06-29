var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    manifest = require('gulp-manifest');

gulp.task('manifest', function(){
  gulp.src(['./app/index.html',
            './app/app.css',
            './app/app.js',
            './app/companies.json'
            ])
    .pipe(manifest({
      hash: true,
      preferOnline: true,
      network: ['http://*', 'https://*', '*'],
      cache: [
              '//ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js'
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
    .pipe(gulp.dest('./app/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/**/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
  gulp.watch('./app/**/*.html', ['html']);
  gulp.watch('./app/**/*', ['manifest']);
});

gulp.task('serve', ['connect', 'watch']);
