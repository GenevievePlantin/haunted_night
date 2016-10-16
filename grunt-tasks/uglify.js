module.exports = function(grunt, globalConfig){
	grunt.loadNpmTasks('grunt-contrib-uglify');
    return {
        //modules: {
        //    src: '<%= globalConfig.dest %>/modules/modules.js',
        //    dest: '<%= globalConfig.dest %>/modules/modules.js'
        //},
        options : {},
        app: {
            src: '<%= globalConfig.applicationDest %>/app.js',
            dest: '<%= globalConfig.applicationDest %>/app.js'
        }
    };
};