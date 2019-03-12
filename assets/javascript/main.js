$(document).ready(function () {

    var nbaArray = ["nba", "miami heat", "basketball", "nba playoffs"];

    // startButtons();

    function startButtons() {
        $("#buttons").empty();

        for (let i = 0; i < nbaArray.length; i++) {
            var btn = $("<button>");
            btn.addClass("nbaClass");
            btn.attr("data-name", nbaArray[i]);
            btn.text(nbaArray[i]);
            $("#buttons").append(btn);
        }
    };

    $("#buttonToClick").on("click", function (event) {
        event.preventDefault();
        var addedData = $("#userChoice").val().trim();
        if (addedData != "") {
            nbaArray.push(addedData);
            startButtons();
            $("#userChoice").val();
        }
    })

    $(document).on("click", ".nbaClass", function () {

        var nba = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nba + "&rating=g&limit=10&api_key=ZBwLge5PL0tz4xUHC7ZJGqJ6ahDqlzne";;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // look at the response in the console 
            // create a variable called rating and save the response.rating 
            // append it in the id of "#gifImages"
            var results = response.data;


            for (var i = 0; i < results.length; i++) {
                var dataImage = $("<img>");
                dataImage.attr("src", results[i].images.fixed_height_still.url);
                dataImage.attr("data-animate", results[i].images.fixed_height.url);
                dataImage.attr("data-still", results[i].images.fixed_height_still.url);
                dataImage.addClass("gif");
                dataImage.attr("data-state", "still");

                var newItemdiv = $('<div class="newItem">');
                var gifRating = results[i].rating;
                var divRating = $("<p>").text("Rating: " + gifRating);

                newItemdiv.append(divRating);
                newItemdiv.append(dataImage);

                $("#gifImages").prepend(newItemdiv);
            }
        });

        $("#gifImages").on("click", ".gif", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
            else if (state === "animate") {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still")
            }
        });
    });
    startButtons(nbaArray, "#buttons");

});

