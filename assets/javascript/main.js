$(document).ready(function(){

    var nbaArray = ["nba", "miami heat", "basketball", "nba playoffs"];

    // startButtons();

    function startButtons(arrayAdd, classAdd, placeToPut) {

        for (let i = 0; i < arrayAdd.length; i++) {
            var btn = $("<button>");
            btn.addClass(classAdd); 
            btn.attr("data-name", arrayAdd[i]);
            btn.text(arrayAdd[i]);
            $(placeToPut).append(btn);
        }
    };

$(document).on("click", ".gif-button", function() {

        var nba = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ZBwLge5PL0tz4xUHC7ZJGqJ6ahDqlzne&q=" + nba + "&limit=10&offset=0&rating=G&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){

           
            // look at the response in the console 
            // create a variable called rating and save the response.rating 
            // append it in the id of "#gifImages"
            var results = response.data;
            console.log(response);
        });
        
    });
    startButtons( nbaArray, "gif-button", "#buttons");
    



    // jquery on click event function for the buttons 
    // gifs need to show up and play 
    // for loop might help with that






// displayNba();

});

