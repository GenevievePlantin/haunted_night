module.exports = function(grunt, globalConfig){
	grunt.loadNpmTasks('grunt-contrib-concat');
	return {
    	options: {
         separator: '\n'
        },
        app: {
            src: [
                '<%= globalConfig.assets %>/lib/bootstrap-select.min.js',
                '<%= globalConfig.assets %>/lib/bootstrap-checkbox.min.js',
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