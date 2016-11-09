// write jQuery or vanilla javascript to do the following:
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

function danger(e) {
  $('body').children().fadeOut("slow");
  $('body').append("<p>you have now entered the danger zone</p>"); 
  
}

function fadestuff(e) {
  $('body').children().fadeOut("slow");
  $('body').append("<p>Goodbye for now</p>"); 
}

$(document).ready(function() {

  $('ol li').each(function() {
    $(this).text("AAAAAHHHHHH!!!!");
    $(this).css('font-size','2em');
  });

	$(".links li a").click(function(e) {
		e.preventDefault();
    alert("you clicked a link, good for you");
	});

  var acc = $(".honda");
  var i; 
  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  }
});

(function($) {
	console.log("this is a message for you!!!");
  
})(jQuery);
