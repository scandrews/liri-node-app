// This is Homework 10 - console APIs

var request = require("request");
const util = require('util');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var keys = require('./keys');
// logging code from github vikas5914/log.js
var logTool = require('../writetofile/log.js');

// get the thing to do from the command line
var command = process.argv[2];
// argument = process.argv[4];
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

	var spotify = new Spotify({
		id: keys.spotifyKeys.client_id,
		secret: keys.spotifyKeys.client_secret
	});
	
	spotify.search({ type: 'track', query: song }, function(err, data) {
		if (err) {
			console.log("Error occurred - " + err);
			return;
		}
	 	for (i=0; i<data.tracks.items.length; i++){
			console.log("Artist - " + data.tracks.items[i].artists[0].name);
			console.log("Song - " + song);
			console.log("Link to song preview - " + data.tracks.items[i].href);
			console.log("Album - " + data.tracks.items[i].album.name);
			console.log("");
	 	}
	});
}


function getLatestTweets(){
	var twitterKeys = new Twitter(keys);
	// console.log("the inspector - " + util.inspect(twitterKeys, false, null));	
	console.log("twitterKeys - " + twitterKeys.VERSION);

	var params = {
		q: 'searchitem',
		count: 5,
		screen_name: 'nodejs'
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
	// request("http://www.omdbapi.com/?i=tt3896198&apikey=40e9cece" + movieToGet, function(error, response, body) {

	request("http://www.omdbapi.com/?apikey=bd9e5ee8&t=" + movieToGet, function(error, response, body){
		if (!error && response.statusCode === 200){
			console.log("Movie Title - " + body.Title);
			console.log("Year - " + response.Year);
			console.log("IMDB Rating - " + body.imdbRating);
			console.log("body - " + body.statusCode);
			logTool.info(body);
			console.log("end NOT error");

		}
		else{
			console.log("Error - " + error);
			console.log("statusCode - " + response.statusCode);
			// console.log("the inspector - " + util.inspect(response, false, null));
			console.log("end EROR");
		}
	});
}
