module.exports = function(grunt, globalConfig){
	grunt.loadNpmTasks('grunt-ng-annotate');
	return {
    	options: {
        	remove: true,
        	add: true
      	},
      	app: {
        	files: {
            //'<%= globalConfig.dest %>/modules/modules.js': ['<%= globalConfig.dest %>/modules/modules.js'],
            '<%= globalConfig.applicationDest %>/app.js': ['<%= globalConfig.applicationDest %>/app.js']
        	}
      	}
  };
};