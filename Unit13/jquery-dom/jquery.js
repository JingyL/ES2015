console.log('Let’s get ready to party with jQuery!');
// console.log(("age: "  + 25) === "age: 25")

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

$('input').on('keyup blur change', function(){
    let r =  $('input').eq(0).val();
    let b = $('input').eq(1).val();
    let g =  $('input').eq(2).val()
    $('body').css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");

})


// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function(){
    $(this).remove();
})

