import gulp from "gulp";
import browserSync from "browser-sync";
import { copyAssets } from "./public.js";
import { compileSass } from "./styles.mjs";
import { compileScripts } from "./scripts.mjs";
import { processImages } from "./images.mjs";
import { createStack, optimizeVector } from "./svg.mjs";
import { processMarkup } from "./markup.mjs";

const server = browserSync.create();

/**
 * @type {browserSync.Options}
 */
const SERVER_OPTIONS = {
	server: "build",
	notify: true,
	open: true,
	cors: true,
	watch: true,
};

const streamStyles = () => compileSass().pipe(server.stream());

async function serve() {
	server.init(SERVER_OPTIONS);

	gulp.watch("source/pages/**/*.html", processMarkup);
	gulp.watch("source/public/**/*", copyAssets);
	gulp.watch("source/sass/**/*.scss", streamStyles);
	gulp.watch("source/js/**/*.{js,ts}", compileScripts);
	gulp.watch("source/images/**/*.{png,jpg}", processImages);
	gulp.watch("source/images/**/*.svg", optimizeVector);
	gulp.watch("source/icons/**/*.svg", createStack);
}

const initialBuild = gulp.parallel(
	processMarkup,
	copyAssets,
	compileSass,
	compileScripts,
	processImages,
	createStack,
	optimizeVector
);
const startServer = gulp.series(initialBuild, serve);

export { initialBuild, startServer };
