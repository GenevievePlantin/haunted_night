module.exports = function(grunt, globalConfig){
	grunt.loadNpmTasks('grunt-express');
	return {
        app: {
            options:{
                server: 'express.js',
                port:'<%= globalConfig.applicationPort %>',
                hostname: '<%= globalConfig.applicationDomain %>'
            }
        }
    };
};