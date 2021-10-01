console.log('Let’s get ready to party with jQuery!');

// Give all images inside of an article tag the class of image-center
$('img').addClass("image-center");
// emove the last paragraph in the article
const lastParagraph = $('p').eq(5);
lastParagraph.remove();
// Set the font size 
const randomSize = Math.floor(Math.random() * 100) + "px";
$('h1').css('font-size', randomSize);

// Add an item to the list
$('ol').append("<li> AAAAA </li>");

// cratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence
$('aside').empty().append("<p>Sorry about the list</p>");

// change backgroundcolor
const r = $('input').eq(0).val();
const g = $('input').eq(1).val();
const b = $('input').eq(2).val();
const color = rgb(r, g, b);
$('body').css("background-color", "color");

// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function(){
    $(this).remove();
})

