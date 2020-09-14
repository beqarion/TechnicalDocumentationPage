$(document).ready(function(){
	$("#master-header i").on("click", function(){
		var main = $("#main-doc");
		var nav = $("#navbar");

		nav.toggleClass("hidden");
		main.toggleClass("main-doc-full");
		console.log("click");
	});
});