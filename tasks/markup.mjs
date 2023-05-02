import gulp from "gulp";

export const processMarkup = () => gulp.src("source/*.html").pipe(gulp.dest("build"));
