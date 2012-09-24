// console.log("main.js is loaded"); //Check Chrome Javascript console and you will see this line.
// $("img").width(200); //jQuery, find img tags in the page and reduce width to 200
//Highlight the codes, then command or ctrl / and it will be all comments

$(document).ready(function(){
	/* jQuery document and once document is ready, run this codes in this function
	ready here means the html webpage is fully loaded. 
	This is important because jQuery needs to find the tags to execute 
	So, always write codes inside this block for jQuery */
	
	// $("img").on("click", function(){ //same as img.click
	// 	//when img tag, and when click, do this function
	// 	//there is a whole list of click, doubleclicks, hover, etc
	// 	$("img").width(200);
	// });

//All these functions are found only inside jQuery

$("li").on("click", function(){ //done class is defined in your CSS in index.html.

	if ($(this).hasClass("done")) {
		$(this).removeClass("done");
	} else {
		$(this).addClass("done");
	}
	
		//$(this).addClass("done");	
		//$("li").text-decoration: line-through;
		//$("li").addClass("done");
	

}); //li function


	$("img").on("dblclick", function(){ //same as img.click
		//when img tag, and when click, do this function
		//there is a whole list of click, doubleclicks, hover, etc
		$("img").width(600);
		$("h1").fadeOut();
		$(".booboo").slideUp(); //booboo is a class selector in CSS
		$("#rahul").hide(); //remember rehul is a id tag in CSS
	});

	// $("img").click(function(){ //find img tag, and once it is clicked, do this this ..
	// 	$("img").width(200);
	// }); //img.click

}); //document.ready

I was here. (Using GitHub web login)