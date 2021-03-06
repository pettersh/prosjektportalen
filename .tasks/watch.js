'use strict';
var gulp = require("gulp"),
    plumber = require("gulp-plumber"),
    format = require("string-format"),
    watch = require("gulp-watch"),
    spsave = require("gulp-spsave"),
    runSequence = require("run-sequence"),
    livereload = require('gulp-livereload'),
    config = require('./@configuration.js'),
    settings = require('./@settings.js');


function __startWatch(packageCodeFunc) {
 livereload.listen({
        start: true,
    });
    watch(config.paths.sourceGlob).on("change", () => {
        runSequence("clean:lib", "clean:dist", packageCodeFunc, () => {
            uploadFile(format("{0}/js/pp.main.js", config.paths.dist), settings.siteUrl, "siteassets/pp/js")
        })
    });
    watch(config.paths.stylesGlob).on("change", () => {
        runSequence("package:styles", () => {
            uploadFile(format("{0}/css/*.css", config.paths.dist), settings.siteUrl, "siteassets/pp/css")
        })
    });
    watch(config.paths.searchDispTemplatesGlob).on("change", (file) => {
        uploadFile(file, settings.siteUrl, "_catalogs/masterpage/Display Templates/Search")
    });
    watch(config.paths.filtersDispTemplatesGlob).on("change", (file) => {
        uploadFile(file, settings.siteUrl, "_catalogs/masterpage/Display Templates/Filters")
    });
    watch(config.resources.glob).on("change", () => {
        runSequence("build:jsonresources");
    });
}

gulp.task("watch", () => {
   __startWatch("package:code");
});

gulp.task("watch::eval", () => {
   __startWatch("package:code::eval");
});

gulp.task("watch::prod", () => {
   __startWatch("package:code::prod");
});

function uploadFile(glob, url, folder) {
    gulp.src(glob)
        .pipe(plumber({
            errorHandler: function (err) {
                this.emit("end");
            }
        }))
        .pipe(spsave({ folder: folder, siteUrl: url }, {
            username: settings.username,
            password: settings.password
        }))
        .pipe(livereload());
}