const prop = require('./package.json');
const minify = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass')); // Use Dart Sass;
const gulp = require('gulp');
const csscomb = require('gulp-csscomb');
const $ = require('gulp-load-plugins')();
const sizereport = require('gulp-sizereport');
const gzip = require('gulp-gzip');
const head =  `/*\r\n* Bee UI ${prop.version} \r\n* © ${new Date().getFullYear()} Xirosoft, \r\n* https://xirosoft.github.io/bee\r\n*/\r\n`;
const cssDir = prop.directories.css;

gulpComplier(`core`, `source/beeui.core.scss`, `beeui.core`);
gulpComplier(`all`, `source/beeui.all.scss`, `beeui.all`);
generateGulpBuildComponents(`components`, `source/components/`, `components/`);

// source file name
// file name
function gulpComplier(taskName, sassFilePath, outputName) {
    gulp.task(taskName, () => {
        return gulp
            .src([sassFilePath])
            .pipe(
                sass({
                    includePaths: ['./node_modules'],
                })
            )
            .on('error', sass.logError)
            .pipe(
                sass.sync().on('error', function (err) {
                    sass.logError.call(this, err);
                })
            )
            .pipe(csscomb())
            .pipe($.concat(`${outputName}.css`))
            .pipe($.header(head))
            .pipe($.size())
            .pipe(gulp.dest(prop.directories.css))
            .on('error', (err) => {
                console.error(err);
                process.exit(1);
            });
    });

    gulp.task(
        `minify-${taskName}`,
        gulp.series(taskName, () => {
            return (
                gulp
                    .src([`${prop.directories.css}${outputName}.css`])
                    .pipe(
                        minify(
                            { compatibility: 'ie8' },
                            (details) => {
                                console.log('FULL');
                                console.log(details.name + ': ' + details.stats.originalSize);
                                console.log(`${outputName}.min.css ${details.stats.minifiedSize}`);
                            }
                        )
                    )
                    .pipe($.header(head))
                    .pipe($.size())
                    .pipe($.concat(`${outputName}.min.css`))
                    .pipe(gulp.dest(prop.directories.css))
                    .on('error', (err) => {
                        console.error(`Error encountered for task ${taskName}. Failing.`);
                        process.exit(1);
                    })
            );
        })
    );

    // Create Gzipped build
    gulp.task(
        `gzip-${taskName}`,
        gulp.series(taskName, `minify-${taskName}`, () => {
            return (
                gulp
                    .src([`${prop.directories.css}${outputName}.min.css`])
                    .pipe(gzip())
                    .pipe(
                        sizereport({
                            gzip: true,
                            total: false,
                        })
                    )
                    .pipe(gulp.dest(prop.directories.css))
                    .on('error', (err) => {
                        console.error(`Error encountered for task ${taskName}. Failing.`);
                        process.exit(1);
                    })
            );
        })
    );
}


function generateGulpBuildComponents(taskName, sassDir, outputDir) {
    gulp.task(taskName, () => {
        return gulp
            .src([sassDir + '*.scss'])
            .pipe(
                sass({
                    includePaths: ['./node_modules'],
                })
            )
            .on('error', sass.logError)
            .pipe(
                sass.sync().on('error', function (err) {
                    sass.logError.call(this, err);
                })
            )
            .pipe($.header(head))
            .pipe($.size())
            .pipe(csscomb())
            .pipe(gulp.dest(prop.directories.css + outputDir))
            .on('error', (err) => {
                console.error(err);
                process.exit(1);
            });
    });
}

gulp.task('watch', () => gulp.watch('./source/**/*.scss', gulp.parallel('minify-core', 'components', 'minify-all')));

gulp.task('default', gulp.parallel('minify-core', 'components', 'minify-all'));

gulp.task('gzip', gulp.parallel('gzip-core', 'gzip-all'));
