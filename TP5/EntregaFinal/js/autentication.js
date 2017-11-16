$(document).ready(function(){

    var imagenesXHashtag = [];
    
    // var Codebird = require("codebird");
    // creamos una instancia  de corebird
    var cb = new Codebird;
    cb.setProxy("https://cb-proxy.herokuapp.com/");
    // configuramos ConsumerKey
    cb.setConsumerKey("xtbiN6O12KIXJuL0ZhEThrMlE", "D43xWnJ77YTIrsFYRD2JSs9YbuDgcCKpBAYZ4qR2T3Pr3XoItm");
    //configuramos el token
    cb.setToken("2422393664-kTvJvaEaFkJzdLVYk4kJDaR2h0uhbA8zrT1wyQT", "459Zg6FS3Vfch7qMPPijZUKrhbk3Y4If4W9RzI7Ga0PKZ");
    
    document.getElementById("search").addEventListener("click", cargarDatos);

    function cargarDatos() {
        var hashtag = $("#hashtag").val()+ ' filter:images';
        console.log(hashtag);
        var params = {
            q: hashtag,
            result_type: "mixed",
            count:100,
            include_entities: "true"
        };
    
        cb.__call(
            "search_tweets",
            params,
            function (reply) {
                document.getElementById("tweetsContainer").innerHTML = " ";
                imagenesXHashtag =[];
                console.log(reply);
                for (var i = 0; i < reply.statuses.length; i++) {
                   var t = reply.statuses[i];
                   console.log(reply.statuses.length);
				//    if ((t.entities.media) != null) {
                    // console.log(t.entities);
                    if ((t.extended_entities != null) && (t.extended_entities.media[0].type == "photo")) {
                    // console.log(i);
                    //alert('entre ');
                       var data = {
                        url: t.extended_entities.media[0].media_url_https,
                    //    url: t.entities.media["0"].media_url_https,                       
                        likes: t.favorite_count
                     };
                     //console.log(data);
                     imagenesXHashtag.push(data);
                     
                     //console.log(imagenesXHashtag.length);
                     document.getElementById("tweetsContainer").innerHTML +=
                     '<div id="tweet1" class="col-lg-4 col-sm-3 col-md-6 btn-group btn-group-sm" role="group">'
                     + '<div class="thumbnail">'
                     + '<img src="' + imagenesXHashtag[i].url
                     + '"<div class="caption">'
                     + '<p class="singleTweet"><div id="likeHeart" class="likeHeart"></div> <span id="likesCount">' + imagenesXHashtag[i].likes + '</span> Likes'
                     + '<i class="material-icons">loop</i> 122 Retweets'
                     + '<i class="material-icons">replay</i> 62 Replays</p>'
                     + '</div></div></div>';
                     
                   }
                 }
            }
        );
    }
    
    });