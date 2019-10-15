const gulp = require("gulp");
const browserSync = require("browser-sync").create();
var sourceMap = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
const reload = browserSync.reload;

// 任务：拷贝html
gulp.task("copyHtml", function() {
  // 选取到src目录下的所有html文件 （为了测试效果，请自己再src目录下随便创建两个html文件咯）
  gulp.src("./index.html").pipe(gulp.dest("dist")); // 将html拷贝到dist目录下，没有dist会自动生成
});

gulp.task("sourceMap", function() {
  gulp
    .src("./src/*.js")
    .pipe(
      babel()
    )
    .pipe(sourceMap.init())
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(sourceMap.write("./maps/", { addComment: false }))
    .pipe(gulp.dest("./dist"));
});

/*实时监控*/
gulp.task("watch", function() {
  browserSync.init({
    files: ["./src/*.js"],
    logLevel: "debug",
    logPrefix: "insgeek",
    server: {
      /*这里写的是html文件相对于根目录所在的文件夹*/
      baseDir: "./dist"
      /*这里如果不写，默认启动的是index.html，如果是其他名字，需要这里写*/
      // index: "insurance_template_statement.html"
    },
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    },
    browser: "chrome"
  });
});

gulp.task("default", ["copyHtml", "sourceMap", "watch"]);
