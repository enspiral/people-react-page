import gulp from 'gulp'
import rename from 'gulp-rename'
import ignore from 'gulp-ignore'

// DL: we need to overwrite the paths of any asset that we include in the build

const copyCss = (done) => {
  gulp.src(['./build/static/css/main.*.chunk.css'])
    .pipe(rename('community.min.css'))
    .pipe(gulp.dest('./js-deliver'))
    done()
}

const copyJs = (done) => {
   gulp.src(['./build/static/js/main.*.chunk.js'])
   .pipe(rename('community.main.min.js'))
   .pipe(gulp.dest('./js-deliver'))
   gulp.src(['./build/static/js/runtime~main.*.js'])
   .pipe(rename('community-runtime.min.js'))
   .pipe(gulp.dest('./js-deliver'))
   gulp.src(['./build/static/js/*.chunk.js'])
   .pipe(ignore.exclude('main.*'))
   .pipe(rename('community.vendor.min.js'))
   .pipe(gulp.dest('./js-deliver'))
   done()
}

const defaultTasks = gulp.parallel(copyCss, copyJs)

export default defaultTasks