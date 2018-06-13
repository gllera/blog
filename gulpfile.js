const path = require('path')
const del = require('del')
const gulp = require('gulp')
const include = require('gulp-include')
const gulpif = require('gulp-if')
const gutil = require('gulp-util')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const runSequence = require('run-sequence')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const base64 = require('gulp-base64')
const sassImporter = require('node-sass-tilde-importer')
const hash = require('gulp-hash')
const pug = require('gulp-pug')

var prod = false

function onError(error) {
	var err = new gutil.PluginError('tmp', error, {
		showProperties: false
	})

	console.log(gutil.colors.red(err))
	this.emit('end')
}

gulp.task('js', function () {
	gulp.src('gulp/app.js')
//		.pipe(gulpif(!prod, sourcemaps.init()))
		.pipe(include({includePaths: ['./node_modules', __dirname + '/gulp']}))							.on('error', onError)
//		.pipe(gulpif(prod, uglify()))				.on('error', onError)
//		.pipe(gulpif(!prod, sourcemaps.write()))
		.pipe(gulp.dest('static'))
})

gulp.task('clean', function () {
	del.sync(['static/**/*.css'])
	del.sync(['static/**/*.js'])
	del.sync(['layouts/**/g_*.html'])
})


gulp.task('sass', function () {
    return gulp.src('gulp/app.scss')
		.pipe(sass({ importer: sassImporter, outputStyle: 'expanded' }))			.on('error', onError)
		.pipe(base64({maxImageSize: 8*1024}))
		.pipe(autoprefixer({browsers: ['defaults']}))	.on('error', onError)
        .pipe(gulpif(prod, cleanCSS()))					.on('error', onError)
        .pipe(gulpif(prod, hash({template:'<%= name %>.<%= hash %><%= ext %>', hashLength: 20})))
		.pipe(gulp.dest('static'))
        .pipe(gulpif(prod, hash.manifest('assets.json', {space: 2})))
		.pipe(gulpif(prod, gulp.dest('gulp')))
})

gulp.task('pug', function buildHTML() {
	return gulp.src('gulp/**/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('layouts'))
})

gulp.task('watch', function () {
	gulp.watch('gulp/**/*.scss', ['sass'])
	gulp.watch('gulp/**/*.pug', ['pug'])
	gulp.watch('gulp/**/*.js', ['js'])
})

gulp.task('default', function () {
	runSequence('clean', 'sass', 'pug', 'js', 'watch')
})

gulp.task('prod', function () {
	prod = true
	gulp.start('default')
})
