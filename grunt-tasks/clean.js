module.exports = function(grunt, globalConfig){
	grunt.loadNpmTasks('grunt-contrib-clean');
	return {
    	demo: ['<%= globalConfig.dest %>'],
    	doc: ['target/docs']
    };
};