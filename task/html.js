const { src, dest } = require("gulp");


//config
const path = require("../config/path.js");
const app = require("../config/app.js");
//Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const webphtml = require("gulp-webp-html");


const html = () => {
  return src(path.html.src)
    .pipe(plumber(
      {
        errorHandler: notify.onError(
          error => ({
            title: "HTML",
            message: error.message
          })
        )
      }
    ))
    .pipe(fileInclude())
    .pipe(webphtml())
    .pipe(size({ title: "До сжаатия" }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: "После сжатия" }))
    .pipe(dest(path.html.dest))
}

module.exports = html; 