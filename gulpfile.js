const path = require('path')
const url = require("url")
const del = require('del')
const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const purgecss = require('gulp-purgecss')
const htmlmin = require('gulp-htmlmin')
const flatmap = require('gulp-flatmap')

gulp.task('clean', function () {
	return del(['dist/**/*', '!dist/.git'])
})

gulp.task('css', function () {
	return gulp.src('public/**/*.css')
		.pipe(purgecss({
			content: ['public/**/*.html']
		}))
		.pipe(autoprefixer({
			browsers: ['defaults']
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist'))
})

function tmp() {
	return flatmap(function (stream, file) {
		const relPath = path.relative(file.base, path.dirname(file.path))
		const relUrl = url.parse(relPath).pathname + '/'

		return stream.pipe(htmlmin({
			collapseWhitespace: true,
			minifyCSS: true,
			minifyJS: true,
			removeAttributeQuotes: true,
			removeComments: true,
			removeEmptyAttributes: true,
			removeOptionalTags: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			trimCustomFragments: true,
			useShortDoctype: true,
			minifyURLs: 'https://gabriel.llera.eu/' + relUrl
		}))
	})
}

gulp.task('copy', function () {
	return gulp.src(['public/**/*', '!public/**/*.html', '!public/**/*.css'])
		.pipe(gulp.dest('dist'))
})

gulp.task('html', function () {
	return gulp.src('public/**/*.html')
		.pipe(tmp())
		.pipe(gulp.dest('dist'))
})

gulp.task('default', gulp.series('clean', gulp.parallel('css', 'html', 'copy')))