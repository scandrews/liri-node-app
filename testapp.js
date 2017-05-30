console.log("The Bot is starting");

// var Twit = require('twit');

// var config = require('./keys');
// console.log ("config is - " + config);
// var T = new Twit(config);
// console.log = ("T is - " + T);

// var params = {
// 	q:'rainbow',
// 	count: 2
// }

// T.get('search/tweets', params, gotData);

// function gotData(error, data, response){
// 	console.log(data)
// }


	console.log("spotify the song - " + song);
	// url:"http://open.spotify.com/v1/track/6rqhFgbbKwnb9MLmUQDhG7/&song=command"
	request("https://api.spotify.com/v1/me", function(error, response, body));
	console.log("Me - " + response);
	console.log("error - " + error);
	request("http://api.spotify.com/v1/search?q=blue&type=album&artist=joni%20mitchell", function(error, response, body){
		if (!error && response.statusCode === 200) {
			console.log("We got back from spotify - " + body);
			console.log("the inspector - " + util.inspect(response, false, null));
		}
		else{
			console.log("Got an Error - " + error);
			console.log("the response status code - " + response.statusCode);
			// console.log("error inspector - " + util.inspect(error, false, null));
			// console.log("response inspector - " + util.inspect(response, false, null));
		}
	})