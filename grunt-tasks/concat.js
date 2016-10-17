module.exports = function(grunt, globalConfig){
	grunt.loadNpmTasks('grunt-contrib-concat');
	return {
    	options: {
         separator: '\n'
        },
        app: {
            src: [
                '<%= globalConfig.npm %>/underscore/underscore-min.js',
                '<%= globalConfig.npm %>/ngstorage/ngStorage.min.js',
                '<%= globalConfig.assets %>/lib/angular-ui-router.min.js',
                '<%= globalConfig.applicationSrc %>/modules/app.js',
                '<%= globalConfig.applicationSrc %>/providers/*js', 
                '<%= globalConfig.applicationSrc %>/services/*.js',
                '<%= globalConfig.applicationSrc %>/models/*.js',
                '<%= globalConfig.applicationSrc %>/factories/*.js',
                '<%= globalConfig.applicationSrc %>/controllers/*.js',
                '<%= globalConfig.applicationSrc %>/filters/*.js',
                '<%= globalConfig.applicationSrc %>/components/**/*.js',
                '<%= globalConfig.applicationSrc %>/directives/*.js'
            ],
            dest: '<%= globalConfig.dest %>/application/app.js'
        }
    };
};