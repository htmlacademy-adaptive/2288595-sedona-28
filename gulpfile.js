import gulp from 'gulp';
import cache from "gulp-cache";

import { cleanBuild } from './tasks/clean.mjs';
import { setDev, setProd } from './tasks/mode.mjs';
import { initialBuild, startServer } from './tasks/serve.mjs';

export { lintMarkup as lint } from "./tasks/lint.mjs";

export const clearCache = cache.clearAll;

export default gulp.series(cleanBuild, setDev, initialBuild, startServer);
export const build = gulp.series(cleanBuild, setProd, initialBuild);
