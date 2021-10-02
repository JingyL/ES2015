let currentId = 0;
$('form').on('submit', function (e) {
    e.preventDefault();
    let rating;
    let title;
    if ($("#movieName").val().length >= 2) { 
        title = $("#movieName").val(); 
        console.log(title);  
        // return title;  
     
    }else{
        alert(' title should has at least 2 characters')
        // $('form').trigger("reset");
    }

    if ($("#rate").val() > 0 && $("#rate").val() < 10) {  
        rating = $("#rate").val();
        console.log(rating); 
        // return rating;
        
    }else {
        alert('Number should between 0 and 10');
        // $('form').trigger("reset");
    }

    if (rating !== undefined && title !== undefined) {
        currentId++;
        // console.log('input');
        $('.container2').append('<div class = "movies" id =' + currentId + '></div>');
        $('#' + currentId).append('<h1>' + title + '</h1>');
        // console.log('add title');
        $('#' + currentId).append('<p> Rating: ' + rating + '</p>');
        // console.log('r');
        $('#' + currentId).append('<button class = "remove"> Remove </button>');
        console.log('add button');
        $('form').trigger("reset");
    }

    $('form').trigger("reset");
})


$('.container2').on('click', ".remove", function (e) {
    // console.log($(e.target).parent());
    $(e.target).parent().remove();
})