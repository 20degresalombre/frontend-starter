// Load plugins
var gulp          = require('gulp'),
    $load         = require('gulp-load-plugins')(),
    sass          = require('gulp-ruby-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    minifycss     = require('gulp-minify-css'),
    jshint        = require('gulp-jshint'),
    uglify        = require('gulp-uglify'),
    rename        = require('gulp-rename'),
    concat        = require('gulp-concat'),
    cmq           = require('gulp-combine-media-queries'),
    cache         = require('gulp-cache'),
    argv          = require('yargs').argv,
    del           = require('del'),
    fileinclude   = require('gulp-file-include'),
    runSequence   = require('run-sequence');

if(argv._ !== "build"){
  var livereload    = require('gulp-livereload'),
      opn           = require('opn');
}

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
  app.use(express.static('www'));
  app.listen(4000);
});

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

// Styles
gulp.task('styles', function() {
  return gulp.src('src/scss/**/*.scss')
        .pipe($load.changed('styles', {
            extension: '.scss'
        }))
        .pipe($load.sass({
                includePaths: require('node-bourbon').includePaths
            })
            .on('error', console.error.bind(console))
        )
        .pipe(gulp.dest('www/css/'))
        .pipe(gulp.dest('www/css/'))
        .pipe(cmq({log: true }))
        .pipe($load.autoprefixer({
            browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: false
        }))
        .pipe($load.if( '*.css', $load.csso() ))
        .pipe($load.rename('styles.min.css'))
        .pipe(gulp.dest('www/css/'))
        .pipe(gulp.dest('www/css/'))
        .pipe($load.size({
            title: 'styles'
        }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('www/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('www/js'));
});

// Clean
gulp.task('clean', function(cb) {
    return del(['www/css', 'www/js'], cb);
});

//Include Templates
gulp.task('fileinclude', function() {
  console.log('logged fileinclude start');
  return gulp.src('src/templates/*.html')
    .pipe(fileinclude())
    .pipe(gulp.dest('www/'));
});


gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/scss/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/js/**/*.js', ['scripts']);

  // watch task for gulp-file-include
  gulp.watch('src/templates/*.html', ['fileinclude']);
  gulp.watch('src/templates/partials/*.tpl.html', ['fileinclude']);

  gulp.watch('www/*.html', notifyLiveReload);
  gulp.watch('www/css/*.css', notifyLiveReload);
  gulp.watch('www/js/*.js', notifyLiveReload);

});

gulp.task('openbrowser', function() {
  // opn( 'http://localhost:4000');
});

gulp.task('default', function(cb) {
  runSequence('clean', 
              'fileinclude', 
              'styles', 
              'scripts', 
              'express', 
              'livereload', 
              'watch', 
              'openbrowser',
              cb);
});


gulp.task('build', function(cb) {
  runSequence('clean', 
              'fileinclude',
              'styles',
              'scripts',
              cb);
});