const { src, dest, watch, parallel, series } = require('gulp');


const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const fileInclude = require('gulp-file-include');




const htmlInclude = () => {
  return src(['docs/html/*.html']) 								
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file',
    }))
    .pipe(dest('docs'))
    .pipe(browserSync.stream());
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'docs/'
    }
  })
}

function svgSprites() {
  return src('docs/images/icons/*.svg')
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(dest('docs/images'));
}

function styles() {
  return src([
    'node_modules/ion-rangeslider/css/ion.rangeSlider.min.css',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.css',

    'node_modules/rateyo/src/jquery.rateyo.css',
    'node_modules/swiper/swiper-bundle.css',
    'docs/scss/style.scss'])
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('docs/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.min.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.min.js',
    'docs/js/main.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('docs/js'))
    .pipe(browserSync.stream())
}

function images() {
  return src('docs/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest('dist/images'))
}

function build() {
  return src([
    'docs/**/*.html',
    'docs/css/style.min.css',
    'docs/js/main.min.js'
  ], { base: 'docs' })
    .pipe(dest('dist'))
}

function cleanDist() {
  return del('dist')
}

function watching() {
  watch(['docs/scss/**/*.scss'], styles)
  watch(['docs/js/**/*.js', '!docs/js/main.min.js'], scripts)
  watch(['docs/*.html']).on('change', browserSync.reload)
  watch(['docs/images/icons/*.svg'], svgSprites)
  watch(['docs/html/**/*.html'], htmlInclude)
}


exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.svgSprites = svgSprites;
exports.htmlInclude = htmlInclude;
exports.build = series(cleanDist, images, build);


exports.default = parallel(htmlInclude, svgSprites, styles, scripts, browsersync, watching)