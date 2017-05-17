(function(){
	"use strict"
	var s = "hello";
	var app = angular.module("test", []);

	app.controller("SayHello", function(){
		this.printHelloWorld = function(){
			console.log("Hello World!");
		};
	});

})();
