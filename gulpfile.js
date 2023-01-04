const prop = require('./package.json');
const minify = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass')); // Use Dart Sass;
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const sizereport = require('gulp-sizereport');
const gzip = require('gulp-gzip');
const head = '/*\r\n* Bee UI ' + prop.version +
    `\r\n* © ${new Date().getFullYear()} Xirosoft, \r\n* https://xirosoft.github.io/bee\r\n*/\r\n`;;

generateGulpBuild(`core`, `src/bee-core.scss`, `bee-core`);
generateGulpBuild(`all`, `src/bee-all.scss`, `bee-all`);
// Compile separate components
generateGulpBuildComponents(`components`, `src/components/`, `components/`);

// source file name
// file name
function generateGulpBuild(taskName, sassFilePath, outputName) {
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
            .pipe($.concat(`${outputName}.css`))
            .pipe($.header(head))
            .pipe($.size())
            .pipe(gulp.dest('./dist/'))
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
                    .src([`./dist/${outputName}.css`])
                    .pipe(
                        minify(
                            {
                                level: {
                                    1: {
                                        all: true,
                                        normalizeUrls: false,
                                    },
                                    2: {
                                        all: false,
                                        removeDuplicateRules: true,
                                        reduceNonAdjacentRules: true,
                                        removeDuplicateFontRules: true,
                                        removeDuplicateMediaBlocks: true,
                                        mergeAdjacentRules: true,
                                        mergeIntoShorthands: true,
                                        mergeMedia: true,
                                        mergeNonAdjacentRules: true,
                                        mergeSemantically: false,
                                        removeEmpty: true,
                                    },
                                },
                            },
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
                    .pipe(gulp.dest('./dist/'))
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
                    .src([`./dist/${outputName}.min.css`])
                    .pipe(gzip())
                    .pipe(
                        sizereport({
                            gzip: true,
                            total: false,
                        })
                    )
                    .pipe(gulp.dest('./dist/'))
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
            .src([`${sassDir}*.scss`])
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
            .pipe(gulp.dest(`./dist/${outputDir}`))
            .on('error', (err) => {
                console.error(err);
                process.exit(1);
            });
    });
}

gulp.task('watch', () => gulp.watch('./src/**/*.scss', gulp.parallel('minify-core', 'components', 'minify-all')));

gulp.task('default', gulp.parallel('minify-core', 'components', 'minify-all'));

gulp.task('gzip', gulp.parallel('gzip-core', 'gzip-all'));
