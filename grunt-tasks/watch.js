module.exports = function(grunt, globalConfig) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    return {
        app: {
            tasks: globalConfig.watchTask,
            files: globalConfig.watchedFiles
        },
        options: {
            nospawn: true,
            livereload: true
        }
    };
};