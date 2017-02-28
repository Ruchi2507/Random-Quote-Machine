function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function writeNewQuote()
{
  var color = getRandomColor();
  $("body").css("background-color",color);
  $(".quotation_mark").css("color",color);
  $(".quote").css("color",color);
  $(".tweet_quote").css("background-color",color);
  $(".tweet_quote").css("border-color",color);
  $(".new_quote").css("background-color",color);
  $(".new_quote").css("border-color",color);
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(a) {
  $(".quote").html("<span class='quoteContent'>" + a["quoteText"]+"</span>");
  $(".quote").append("<p class='title'>— " + a["quoteAuthor"]+ "</p>");
  });
};

$(document).ready(function()
{
  writeNewQuote();
  
  $('.post_quote').click(function(){
  var test=$(".quoteContent").html();  $(".post_quote").attr("href",'https://twitter.com/intent/tweet?text='+test);
    console.log('inside')
  });
});

$(".new_quote").on("click",writeNewQuote);