let currentId = 0;
let movieList = [];
let movieObj;
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
        // console.log(rating);
        // console.log(title);
        movieObj = {"title": title, "rating": rating, "currentId" : currentId};
        movieList.push(movieObj);
        // movieList.sort(function(a,b){
        //     a.title.localeCompare(b.title);
        // });
        movieList.sort(function(a, b) {
            let titleA= a.title.toUpperCase();
            let titleB= b.title.toUpperCase();
            if (titleA > titleB) {
                return 1;
            }
            if (titleA < titleB) {
                return -1;
            }
            return 0;
        })

        for (let i = 0; i < movieList.length; i++){
            // console.log('input');
            let name = movieList[i].title;
            let id = movieList[i].currentId;
            let rate = movieList[i].rating;
            console.log(name);
            console.log(id);
            console.log(rate);
            // $('.container2').append('<div class = "movies" id =' + movieList[i].currentId + '></div>');
            // console.log(movieList[i].currentId);
            // $('#' + movieList[i].currentId).append('<h1>' + movieList[i].title + '</h1>');
            // // console.log('add title');
            // $('#' + movieList[i].currentId).append('<p> Rating: ' + movieList[i].rating + '</p>');
            // // console.log('r');
            // $('#' + movieList[i].currentId).append('<button class = "remove"> Remove </button>');
            // console.log('add button');
            // $('form').trigger("reset");
            }
    }

    $('form').trigger("reset");
})




$('.container2').on('click', ".remove", function (e) {
    // console.log($(e.target).parent());
    $(e.target).parent().remove();
})
