const gulp = require("gulp"),
    uglify = require("gulp-uglify");
    minifyCss = require("gulp-csso")
    pump = require("pump");


gulp.task("js", function(cb) {
    pump([
        gulp.src("src/*.js"),
        uglify(),
        gulp.dest("dist/js/")
    ],cb);
})
gulp.task("css", function(cb) {
    pump([
        gulp.src("src/*.css"),
        minifyCss(),
        gulp.dest("dist/css/")
    ],cb);
});

gulp.task("build", ['css','js']);