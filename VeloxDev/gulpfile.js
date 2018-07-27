var gulp 				 = require('gulp'),					
		sass 				 = require('gulp-sass'),
		watch 			 = require('gulp-watch'),
		browserSync  = require('browser-sync'),
		autoprefixer = require('gulp-autoprefixer'),
		concat			 = require('gulp-concat'),
		uglify			 = require('gulp-uglifyjs'),
		cssnano			 = require('gulp-cssnano'),
		rename			 = require('gulp-rename')
		del					 = require('del'),
		imagemin		 = require('gulp-imagemin'),
		pngquant		 = require('imagemin-pngquant'),
		cache				 = require('gulp-cache');


// КОМПИЛЯЦИЯ SASS
gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});



//  СЖАТИЕ JS библиотек
// gulp.task('scripts', function(){
// 	return gulp.src([
// 		'app/libs/jquery/dist/jquery.min.js'
// 		]);
// 	.pipe(concat('libs.min.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('app/js'))
// });

//		СЖАТИЕ Css файла
gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/main.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

//  Live-reload
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});


gulp.task('clean', function() {
	return del.sync('dist')
});
// ЧИСТКА КЭША 
gulp.task('clear', function() {
	return cache.clearAll();
});


gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlagins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});



gulp.task('watch',['browser-sync', 'css-libs'], function(){		//Добавить в перечень 'scripts'
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
})

// запуск в продакшен
gulp.task('build',['clean', 'img', 'sass'], function() {

	var buildCss = gulp.src([
			'app/css/main.css',
			'app/css/main.min.css',
		])
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});