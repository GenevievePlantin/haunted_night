module.exports = function(grunt, globalConfig) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    return {
        allFiles: [
            'Gruntfile.js',
            '<%= globalConfig.src %>/application/*.js',
            '<%= globalConfig.src %>/application/**/*.js'
        ],
        options: {
            curly: true,
            eqeqeq: true,
            eqnull: true,
            browser: true,
            validthis: true,
            force: true,
            globals: {
                jQuery: true,
                angular: true
            },
            ignores:[]
            //reporter: require('jshint-stylish')
        }
    };
};