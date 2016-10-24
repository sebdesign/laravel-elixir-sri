var Elixir = require('laravel-elixir');
var sri = require('gulp-sri');

Elixir.extend('sri', function (src, output, options) {
    var filename = options && options.fileName;

    new Elixir.Task('sri', function () {
        this.recordStep('Generating hashes');

        return (
            gulp.src(this.src.path, { base: Elixir.config.publicPath })
                .pipe(sri(options))
                .pipe(gulp.dest(this.output.baseDir))
                .pipe(new Elixir.Notification('SRI complete!'))
        );
    }, getPaths(src, output, filename));
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @param  {string|null}  filename
 * @return {object}
 */
function getPaths(src, output, filename) {
    src = Array.isArray(src) ? src : [src];
    output = output || Elixir.config.publicPath;
    filename = filename || 'sri.json';

    return new Elixir.GulpPaths()
        .src(src, Elixir.config.publicPath)
        .output(output, filename);
}
