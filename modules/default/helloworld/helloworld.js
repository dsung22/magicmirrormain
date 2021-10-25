/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */

//FileReader file = new File("peddiemenu.txt");
//var fs = require('fs');
//var text = fs.readFileSync("peddiemenu.txt", 'utf-8');
//var textByLine = text.split('\n');
//var fs = require("fs");
//fs.readFile("peddiemenu.txt", function(text){
//    var textByLine = text.split("\n")
//});

Module.register("helloworld", {
	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	getTemplate: function () {
		return "helloworld.njk";
	},

	getTemplateData: function () {
		return this.config;
	}
});
