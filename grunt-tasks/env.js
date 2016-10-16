module.exports = function(grunt, globalConfig) {
    grunt.loadNpmTasks('grunt-env');
    return {
        haunted: {
            APP_NAME: 'Haunted_Night',
            APP_DOMAIN: 'localhost',
            PORT: 3001
        },
        doc: {
            APP_NAME: 'docs/ngdocs',
            APP_DOMAIN: 'ngdoc',
            PORT: 4001
        }
    };
};