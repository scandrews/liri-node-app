// This is theHomework 10 - the console API

var request = require("request");
const util = require('util');
var Twitter = require('twitter');

var keys = require('./keys');

// get the thing to do from the command line
var command = process.argv[2];
console.log("The command is - " + command);

switch (command){
	case "my-tweets":
		getLatestTweets()
		break;
	case "spotify-this-song":
		getSpotifySongInfo(process.argv[3])
		break;
	case "movie-this":
		getMovieInfo(process.argv[3])
		break;
	case "do-what-it-says":

		break;
	default:
		console.log("WTF")
		break;
};

function getSpotifySongInfo(song){
	console.log("spotify the song - " + song);
	// url:"http://open.spotify.com/v1/track/6rqhFgbbKwnb9MLmUQDhG7/&song=command"
	// request("http://api.spotify.com/v1/search?q=blue&type=album&artist=joni%20mitchell", function(error, response, body){
	request(" https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy", function(error, response, body){
		if (!error && response.statusCode === 200) {
			console.log("We got back from spotify - " + body);
			console.log("the inspector - " + util.inspect(response, false, null));
		}
		else{
			console.log("Got an Error - " + error);
			console.log("the response status code - " + response.statusCode);
			console.log("error inspector - " + util.inspect(error, false, null));
			// console.log("response inspector - " + util.inspect(response, false, null));
		}
	})
}

function getLatestTweets(){
	var twitterKeys = new Twitter(keys);
	// console.log("the inspector - " + util.inspect(twitterKeys, false, null));	
	console.log("twitterKeys - " + twitterKeys.VERSION);

	var params = {
		q: 'searchitem',
		count: 5,
		screen_name: 'scandrews3'
	}
	twitterKeys.get('search/tweets', params, function(error, response, body) {
		if (!error) {
			console.log("Middle return value - " + response);
			var tweets = response.statuses;
			for (i=0; i < tweets.length; i++){
				console.log("the tweet - " + tweets[i].text);
			}
		}
		else if (error){
			console.log ("Error - " + error)
			console.log("the inspector error - " + util.inspect(error, false, null));
		}
	});


}

function getMovieInfo(movieToGet){
	
	console.log("the movie is - " + movieToGet);
			 // http://www.omdbapi.com/?i=tt3896198&apikey=bd9e5ee8
	request("http://www.omdbapi.com/?apikey=bd9e5ee8&t=" + movieToGet, function(error, response, body){
		if (!error && response.statusCode === 200){
			console.log("The Error - " + error);
			console.log("The Response - " + response);
			console.log("Response inspector - " + util.inspect(response, false, null));
			console.log("The return Body - " + body);

		}
		else{
			console.log("Error - " + error);
			console.log("statusCode - " + response.statusCode);
			// console.log("the inspector - " + util.inspect(response, false, null));
		}
	});
}
