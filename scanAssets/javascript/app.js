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
            1: {
                name: "Joaquin Phoenix",
                img: "https://i.pinimg.com/736x/15/c8/0c/15c80cc3b4fc678c3c6c7af39a480dd0.jpg",
            },
            2: {
                name: "Connie Nielsen",
                img: "http://www.julienslive.com/images/lot/9217/92175_0.jpg",
            }
            3: {
                name: "Djimon Hounsou",
                img: "https://cdn.pastemagazine.com/www/system/images/photo_albums/djimon-hounsou/large/04-hounsou-gladiator.jpg?1384968217",
            }
        },
        similarMovies: ["troy","ben-hur","spartacus"]
    }
    "male_angry" : {
        name: "matrix",
        cast : {
            0: {
                name: "Keanu Reeves",
                img :"https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/f0wakuyix5vca2yyh2oj.jpg",
            },
            1: {
                name: "Carrie-Anne Moss",
                img: "https://cnet3.cbsistatic.com/img/naDA2uSjuqrJbeta3lqitdOAu70=/fit-in/970x0/2015/02/03/551669b4-c633-4091-9ee6-3d8acafc6518/trinitymatrix.jpg",
            },
            2: {
                name: "Laurence Fishburne",
                img :"https://ewedit.files.wordpress.com/2015/01/2014-kia-matrix.jpg?w=612",
        },
            3: {
                name: "Hugo Weaving",
                img :"http://www.giantfreakinrobot.com/wp-content/uploads/2012/07/weaving.jpg",
        },
        similarMovies: ["the matrix reloaded","the matrix revolutions","john wick"]
    }
    "male_sad" : {
        name: "Dirty Grandpa",
        cast : {
            0: {
                name: "Zac Effron",
                img :"https://kinobody.com/wp-content/uploads/2017/05/zac-efron-baywatch.jpg",
            },
            1: {
                name: "Robert De Niro",
                img: "https://newsonia.com/media/upload/images/2014/01/03/DG2QGgK4C3GXdrgp3XSNTN69Sh4pJt6T_598x414.jpg"
            },
            2: {
                name: "Julianne Hough",
                img :"https://cdn.cliqueinc.com/posts/207500/exclusive-julianne-hough-reveals-her-hack-for-getting-rid-of-under-eye-bags-207500-1478204306-fb.1200x627uc.jpg",
        },
            3: {
                name: "Zoey Deutch",
                img :"http://cdn-img.instyle.com/sites/default/files/styles/320x384/public/1496158443/instyle-july-lew-zoe-deutch-3.jpg?itok=Wge-mVlD",
        },
        similarMovies: ["neighbours","neighbors 2","bad grandpa"]
    }
    "female_happy" : {
        name: "how to train your dragon",
        cast : {
            0: {
                name: "Jay Baruchel",
                img :"http://cdn.collider.com/wp-content/uploads/jay_baruchel_image3.jpg",
            },
            1: {
                name: "America Ferrera",
                img: "https://pmcdeadline2.files.wordpress.com/2014/01/ferrera__140117225717.png"
            },
            2: {
                name: "Gerard Butler",
                img :"https://i.pinimg.com/736x/c0/b9/91/c0b9918a59180895d9889e663d7ccbe1--black-suits-gerard-butler-.jpg",
        },
            3: {
                name: "T.J Miller",
                img :"http://cdn5.thr.com/sites/default/files/2011/02/108275370_a_p.jpg",
        },
        similarMovies: ["how to train your dragon 2","wall-e","the incredibles"]
    }
    "female_angry" : {
        name: "Charles Angels",
        cast : {
            0: {
                name: "Drew Barrymore",
                img :"http://www.ultimatemovierankings.com/wp-content/uploads/2016/02/drew-11111.jpg",
            },
            1: {
                name: "Cameron Diaz",
                img: "https://vignette2.wikia.nocookie.net/charliesangels/images/1/10/Charliesangels2-still-026.jpg/revision/latest?cb=20111121021415"
            },
            2: {
                name: "Lucy Liu",
                img :"http://cimg.tvgcdn.net/i/2015/06/10/a107c869-4e96-4ac9-aee8-4badbf507ce4/80a850181e52e9b5fd8c4629aa75ef6b/150609-news-lucy-liu-elementary.jpg",
            },
            3: {
                name: "Luke Wilson",
                img :"https://summits.forgerock.com/app/uploads/2017/05/luke-wilson.jpg",
        },
        similarMovies: ["tomb raider","salt","knight and day"]
    }
    "female-sad:"{
        name: "The Notebook",
        cast:{
            0: {
                name: "Ryan Gosling",
                img: "https://images-production.global.ssl.fastly.net/uploads/photos/file/108421/ryan-gosling-the-notebook.jpg",
            },
            1: {
                name: "Rachel McAdams",
                img: "https://i.ytimg.com/vi/jpsBisr7gAk/maxresdefault.jpg",
            }
            2: {
                name: "Joan Allen",
                img: "http://media.gettyimages.com/photos/actress-joan-allen-poses-for-a-portrait-in-1988-in-new-york-city-new-picture-id685267384",
            }
            3: {
                name: "James Marsden",
                img: "https://vignette.wikia.nocookie.net/westworld/images/8/89/James-Marsden.jpg/revision/latest?cb=20141209213715",
            },
            similarMovies: ["Dear John", "The Vow", "La La Land"]
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

        $("#movie-casts").prepend(castsDiv);


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

            $("#similar-movies").prepend(similarMoviesDiv);

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

        $("#movies-view").prepend(movieDiv);

    });
}

var subscriptionKey = "be57b4281af0422d8175e0b77fd7b798";

var uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";


var params = {
    "returnFaceId": "true",
    "returnFaceLandmarks": "false",
    "returnFaceAttributes": "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
};

//$(".submit").on("click", function () {
    var age = "";
    var happiness = "";
    var anger = "";
    var sadness = "";
    var gender = "";
    //var sourceImageUrl = document.getElementById("inputImage").value;
    //document.querySelector("#sourceImage").src = sourceImageUrl;
    var sourceImageUrl = "https://media.licdn.com/media/p/2/005/009/2f8/2ad00d5.jpg";

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
        var happiness = responseVar['faceAttributes']['emotion']['happiness'];
        var anger = responseVar['faceAttributes']['emotion']['anger'];
        var sadness = responseVar['faceAttributes']['emotion']['sadness'];
        var gender = responseVar['faceAttributes']['gender'];

        console.log(age);
        console.log(happiness);
        console.log(anger);
        console.log(sadness);
        console.log(gender);
        if(happiness>anger && happiness>sadness && gender === "male"){
            console.log(happiness);
            var mood ="happy";
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



//})


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