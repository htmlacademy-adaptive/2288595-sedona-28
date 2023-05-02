
import gulp from 'gulp'
import gulpEsbuild from 'gulp-esbuild'
import { isDev } from './mode.mjs'

export function compileScripts() {
  const isDevMode = isDev()
	return gulp.src('source/js/*.{js,ts}')
			.pipe(gulpEsbuild({
					bundle: true,
					target: 'es2015',
					sourcemap: isDevMode && 'external',
					format: 'esm',
					minify: !isDevMode
			}))
			.pipe(gulp.dest('build/js'))
}
