module.exports = function(grunt, globalConfig){
	grunt.loadNpmTasks('grunt-contrib-copy');
	return {
    	assets: {
            files: [{
                expand: true,
                cwd: '<%= globalConfig.assets %>/',
                src: ['**'],
                dest: '<%= globalConfig.dest %>/application/'
            }]
        },
        html: {
            files: [{
                expand: true,
                cwd: '<%= globalConfig.applicationSrc %>/views/',
                src: ['**'],
                dest: '<%= globalConfig.dest %>/application/views/'
            }]
        },
        index: {
            files: [{
                expand: true,
                cwd: '<%= globalConfig.applicationSrc %>/',
                src: ['index.html'],
                dest: '<%= globalConfig.dest %>/application/'
            }]
        },
        componentsViews: {
            files: [{
                expand: true,
                cwd: '<%= globalConfig.applicationSrc %>/components/',
                src: ['**/*.html'],
                dest: '<%= globalConfig.dest %>/application/components/'
            }]
        }
    };
};