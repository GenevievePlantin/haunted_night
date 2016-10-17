module.exports = function(grunt) {
	// ==================================================
    // Global Config
    // ==================================================
    var globalConfig = {
        src:                'src/webapp',
        dest:               'target/<%= APP_NAME %>',
        applicationDest:    'target/<%= APP_NAME %>/application',
        assets:             '<%= globalConfig.src %>/assets',
        applicationSrc:     '<%= globalConfig.src %>/application',
        specificAssets:     '<%= globalConfig.src %>/assets/<%= APP_NAME %>',
        npm:                'node_modules',  
        applicationDomain:    '<%= APP_DOMAIN %>',
        applicationPort:    '<%= PORT %>',
        watchedFiles: [
            '<%= globalConfig.src %>/assets/**/*',
            '<%= globalConfig.applicationSrc %>/**/*.js',
            '<%= globalConfig.applicationSrc %>/**/*.html'
        ],
        watchTask: ['clean', 'copy', 'concat', 'jshint',  'ngAnnotate']
    };
    
    // ==================================================
    // Project Config
    // ==================================================
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        globalConfig: globalConfig,

        // ENV variable change @t runtime
        env: require('./grunt-tasks/env.js')(grunt, globalConfig),

        // JS & CSS Concat sourcemap
        concat_sourcemap: require('./grunt-tasks/concat-source-map.js')(grunt, globalConfig),
        concat: require('./grunt-tasks/concat.js')(grunt, globalConfig),

        // JS Minifcation
        uglify: require('./grunt-tasks/uglify.js')(grunt, globalConfig),

        // File Watch
        watch: require('./grunt-tasks/watch.js')(grunt, globalConfig),

        // JS Hint
        jshint: require('./grunt-tasks/jshint.js')(grunt, globalConfig),

        // Start Express Server
        express: require('./grunt-tasks/express.js')(grunt, globalConfig),

        // Copy css, js && html files
        copy: require('./grunt-tasks/copy.js')(grunt, globalConfig),

        // Remove dest folder before generate another one
        clean: require('./grunt-tasks/clean.js')(grunt, globalConfig),

        // Dependencies injection
        ngAnnotate: require('./grunt-tasks/annotate.js')(grunt, globalConfig),

        // Doc AngularJs generator
        ngdocs: require('./grunt-tasks/ng-doc.js')(grunt, globalConfig)

    });

    // Doc. angular task.
    grunt.registerTask('ng-doc', ['env:doc', 'load-exec-config', 'clean:doc', 'ngdocs', 'set-express-env', 'express:app', 'express-keepalive']);

    grunt.registerTask('test', ['env:haunted', 'load-exec-config', 'clean', 'copy', 'concat', 'ngAnnotate', 'launch-express', 'watch']);

    grunt.registerTask('launch-express', ['set-express-env', 'express:app']);

    grunt.registerTask('load-exec-config', 'load exec. context configs', function(){
        grunt.config('APP_NAME', process.env.APP_NAME);
        grunt.config('APP_DOMAIN', process.env.APP_DOMAIN);
        grunt.config('PORT', process.env.PORT);
    });

    grunt.registerTask('set-express-env', 'Set Express Environment Variable', function() {
        grunt.config('globalConfig.expressStarted-<%= APP_NAME %>', true);
    });

};
