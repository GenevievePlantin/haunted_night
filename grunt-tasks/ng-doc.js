module.exports = function(grunt, globalConfig){
	grunt.loadNpmTasks('grunt-ngdocs');
	return{
		options:{
			dest: 'docs/ngdocs',
			html5mode: true,
			startPage: '/app/Demo.app', 
			title:'Demo App Docs',
			titleLink: '/DemoApp'
		},
		app:{
			api:true, 
			title: 'Application', 
			src: [
				'<%= globalConfig.applicationSrc %>/*.js',
            	'<%= globalConfig.applicationSrc %>/**/*.js'
			]
		}
	};
};