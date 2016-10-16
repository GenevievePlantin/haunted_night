/*===========================================
 * Modules dependencies & Variables
 *===========================================*/
var express = require("express");
var app     = express();
var path    = require("path");
var livereload 	= require("connect-livereload");
var browserSync	= require("browser-sync");
var connectBS	= require("connect-browser-sync");
var bs 			= browserSync({logSnippet : false});
var grunt  	= require('grunt');

/*===========================================
 * Config Express
 *===========================================*/
var appPath = grunt.config("globalConfig.applicationDest");

// Get index.html
app.use(express.static(path.join(__dirname, appPath)));
app.use(livereload({port:35729}));
app.use(connectBS(bs));

/*===========================================
 * Routing
 *===========================================*/
require("./stub/routes")(app);

module.exports = app;