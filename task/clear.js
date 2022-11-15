const del = require("del");
const plumber = require("gulp-plumber");

//config
const path = require("../config/path.js");

const clear = () => {
  return del(path.root);
}
module.exports = clear;