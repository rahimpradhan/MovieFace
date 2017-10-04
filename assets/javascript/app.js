/*function processImage() {
    var subscriptionKey = "13hc77781f7e4b19b5fcdd72a8df7156";

    var uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";


    var params = {
        "returnFaceId": "true",
        "returnFaceLandmarks": "false",
        "returnFaceAttributes": "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
    };


    var sourceImageUrl = document.getElementById("inputImage").value;
    document.querySelector("#sourceImage").src = sourceImageUrl;

    $.ajax({
        url: uriBase + "?" + $.param(params),

        // Request headers.
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",


        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

        .done(function(data) {
            // Show formatted JSON on webpage.
            $("#responseTextArea").val(JSON.stringify(data, null, 2));
        })

        .fail(function(jqXHR, textStatus, errorThrown) {
            // Display error message.
            var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ? "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
                jQuery.parseJSON(jqXHR.responseText).message : jQuery.parseJSON(jqXHR.responseText).error.message;
            alert(errorString);
        });
};*/

movies = {

    "male_happy" : {
        name: "gladiator",
        cast : {
            0: {
                name: "Russell Crowe",
                img :"https://metrouk2.files.wordpress.com/2017/03/gladiator_145_4da95a905e73d632e900092a_1303089142.jpeg?w=620&h=348&crop=1",
            },
        },
        similarMovies: ["troy","ben-hur","spartacus"]

    }



    
}


function displaycast(gender,mood){
    var castsDiv = $("<div class='cast'>");
    for(var key in movies[gender + "_" + mood]["cast"]){
        var keyVar = movies[gender + "_" + mood]["cast"][key]
        var castName = keyVar.name;
        var castImg = keyVar.img;
        console.log(castName);
        console.log(castImg);


        var pOne = $("<p>").text(castName);
        castsDiv.append(pOne);



        var image = $("<img>").attr("src", castImg);
        castsDiv.append(image);
        var moviecastDiv = $("<div id='moviecast' >")

        $("body").append(moviecastDiv);
        $(moviecastDiv).prepend(castsDiv);


    }
}

function displaysimilars(gender,mood){

    var similarMoviesDiv = $("<div class='similar_movie'>");


    for(var i =0; i<3;i++){
        var similarMovie = movies[gender + "_" + mood]["similarMovies"][i];
        console.log(similarMovie);
        var queryURL = "http://www.omdbapi.com/?t=" + similarMovie + "&y=&plot=short&apikey=40e9cece";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {

            var title = response.Title;
            var pOne = $("<p>").text("Title: " + title);
            similarMoviesDiv.append(pOne);
            console.log("title: "+title);

            var imgURL = response.Poster;
            var image = $("<img>").attr("src", imgURL);
            similarMoviesDiv.append(image);

            var similarDiv = $("<div id='similarmovies' >")

            $("body").append(similarDiv);

            $(similarDiv).prepend(similarMoviesDiv);

        })
    }

}
function displayMovieInfo(gender,mood) {
    var movie = movies[gender + "_" + mood].name;
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {

        var movieDiv = $("<div class='movie'>");

        var rating = response.Rated;
        var pOne = $("<p>").text("Rating: " + rating);
        movieDiv.append(pOne);

        var released = response.Released;
        var pTwo = $("<p>").text("Released: " + released);
        movieDiv.append(pTwo);

        var plot = response.Plot;
        var pThree = $("<p>").text("Plot: " + plot);
        movieDiv.append(pThree);


        var imgURL = response.Poster;
        var image = $("<img>").attr("src", imgURL);
        movieDiv.append(image);

        var movieResultDiv = $("<div id='movieresult' >")

        $("body").append(movieResultDiv);

        $(movieResultDiv).prepend(movieDiv);

    });
}

var subscriptionKey = "be57b4281af0422d8175e0b77fd7b798";

var uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";


var params = {
    "returnFaceId": "true",
    "returnFaceLandmarks": "false",
    "returnFaceAttributes": "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
};

$("#scanbutton").on("click", function () {


    console.log("test");
    email = $("#email").val().trim();
    name = $("#name").val().trim();



    var age = "";
    var happiness = "";
    var anger = "";
    var sadness = "";
    var gender = "";
    var sourceImageUrl = document.getElementById("url").value;

    //var sourceImageUrl = "https://media.licdn.com/media/p/2/005/009/2f8/2ad00d5.jpg";

    $.ajax({

        url: uriBase + "?" + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",
        data: '{"url": ' + '"' + sourceImageUrl + '"}',

    }).done(function (response) {

        var responseVar = response[0];
        console.log(response);
        var age = responseVar['faceAttributes']['age'];
        var ageDiv = $("<p>").text("age: " + age);
        var happiness = responseVar['faceAttributes']['emotion']['happiness'];
        var happinessDiv = $("<p>").text("happiness: " + happiness);
        var anger = responseVar['faceAttributes']['emotion']['anger'];
        var angerDiv = $("<p>").text("anger: " + anger);
        var sadness = responseVar['faceAttributes']['emotion']['sadness'];
        var sadDiv = $("<p>").text("sadness: " + sadness);
        var gender = responseVar['faceAttributes']['gender'];
        var genderDiv = $("<p>").text("gender: " + gender);

        var sourceImageDiv = $("<img id='sourceImage'>").attr("src", sourceImageUrl);


        var faceReultsDiv = $("<div id='faceResults'>");
        $("body").append(faceReultsDiv);
        $(faceReultsDiv).prepend(sourceImageDiv).append(ageDiv).append(happinessDiv).append(angerDiv).append(sadDiv).append(genderDiv)




        console.log(age);
        console.log(happiness);
        console.log(anger);
        console.log(sadness);
        console.log(gender);

        if(happiness>anger && happiness>sadness && gender === "male"){
            console.log(happiness);
            var mood ="happy";
            $("#facescan").remove();
            displayMovieInfo(gender,mood);
            displaysimilars(gender,mood);
            displaycast(gender,mood);


        }

    })
        .fail(function (jqXHR, textStatus, errorThrown) {
            // Display error message.
            var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ? "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
                jQuery.parseJSON(jqXHR.responseText).message : jQuery.parseJSON(jqXHR.responseText).error.message;
            alert(errorString);
        });

    event.preventDefault();
})



/*1- male 20-30  happiness>anger
2- male 20-30  happiness<anger
3- male 30-40  happiness<anger
4- male 30-40  happiness>anger
5- male 40-50  happiness>anger
6- male 40-50  happiness<anger
7- male 50-80  happiness<anger
8- male 50-80  happiness>anger

9- female 20-30  happiness>anger
10- female 20-30  happiness<anger
11- female 30-40  happiness<anger
12- female 30-40  happiness>anger
13- female 40-50  happiness>anger
14- female 40-50  happiness<anger
15- female 50-80  happiness<anger
16- female 50-80  happiness>anger


1-female Angry
2-Female Sad
3-female happy

1-male Angry
2-male Sad
3-male happy*/
