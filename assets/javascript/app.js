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

movies: {

    
}

var subscriptionKey = "be57b4281af0422d8175e0b77fd7b798";

var uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";


var params = {
    "returnFaceId": "true",
    "returnFaceLandmarks": "false",
    "returnFaceAttributes": "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
};


   // var sourceImageUrl = document.getElementById("inputImage").value;
   // document.querySelector("#sourceImage").src = sourceImageUrl;
    var sourceImageUrl ="https://media.licdn.com/media/p/2/005/009/2f8/2ad00d5.jpg";
    //var queryURL = "url: uriBase + "?" + $.param(params)";
    console.log(sourceImageUrl);
    $.ajax({

        url: uriBase + "?" + $.param(params),
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",
        data: '{"url": ' + '"' + sourceImageUrl + '"}',

    }).done(function(response) {

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

    })
        .fail(function(jqXHR, textStatus, errorThrown) {
            // Display error message.
            var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ? "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
                jQuery.parseJSON(jqXHR.responseText).message : jQuery.parseJSON(jqXHR.responseText).error.message;
            alert(errorString);
        });


