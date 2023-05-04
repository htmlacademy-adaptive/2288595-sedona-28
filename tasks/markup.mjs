import gulp from "gulp";

export const processMarkup = () => gulp.src("source/pages/*.html").pipe(gulp.dest("build"));
