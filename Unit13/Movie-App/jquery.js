$('form').on('submit', function(e){
    e.preventDefault();
    let title = $('input').eq(0).val();
    // console.log('title');
    let rating = $('input').eq(1).val();
    // console.log('input');
    $('.container2').add('<div class = "movies"></div>');
    $('.movies').append('<h1>' + title + '</h1>');
    // console.log('add title');
    $('.movies').append('<p> Rating: ' + rating + '</p>');
    // console.log('r');
    $('.movies').append('<button class = "remove"> Remove </button>');
    console.log('add button');
    $('form').trigger("reset");
})


$('.container2').on('click', ".remove", function() {
    console.log("remove");
    $('.remove').parent().remove();
})