var gulp = require('gulp');
var babelify = require("babelify");
var browserify = require('browserify');
var through2 = require('through2');

gulp.task('compile_js', function() {
  var browserified = through2.obj(function(file, enc, next) {
    return browserify(file.path, {
      debug: true
    })
      .transform(babelify)
      .bundle(function(err, res) {
        // assumes file.contents is a Buffer
        file.contents = res;
        next(null, file);
      });
  });

  gulp.src('./index.js')
    .pipe(browserified)
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(['./index.js', './components/**/*.js'], ['compile_js']);
});
