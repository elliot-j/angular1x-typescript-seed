
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	ts = require('gulp-typescript'),
	srcMap = require('gulp-sourcemaps'),
	del = require('del'),
	merge = require('merge2'),
	karma = require('karma').Server,
	config = require('./build-config.js');

var tsProj = ts.createProject('tsconfig.json', {outFile:config.outFiles.js}),
	specTsProj = ts.createProject('tsconfig.json');

gulp.task('build-ts', function(cb){
	var tsResult = gulp.src(config.src.ts)
		.pipe(srcMap.init())
		.pipe(tsProj());
	var specResult = gulp.src(config.src.specs)
		.pipe(specTsProj());
	return merge([
		tsResult.js
			.pipe(srcMap.write())
			.pipe(gulp.dest(config.dist.main)),
		specResult.js
			.pipe(gulp.dest(config.dist.test))
	]);
});
gulp.task('build-css',function(){	
	return gulp.src(config.src.css)
		.pipe(concat(config.outFiles.css))
		.pipe(gulp.dest(config.dist.main));
});
gulp.task('copy-html', function(){
	return gulp.src(config.src.html)
		.pipe(gulp.dest(config.dist.main));
});
gulp.task('copy-third-party', function(){
	return gulp.src(config.src.thirdPartyJS)		
		.pipe(concat(config.outFiles.thirdPartyJS))
		.pipe(uglify())
		.pipe(gulp.dest(config.dist.main));
});

gulp.task('watch',['build'], function(){
	gulp.watch([config.src.ts, config.src.specs],['build-ts']);
});
gulp.task('clean',function(){
	del(config.clean);
});
gulp.task('run-tests',['build-ts'], function(){
	new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }).start();
});
gulp.task('build', ['build-ts', 'build-css','copy-html','copy-third-party']);
gulp.task('default',['build']);