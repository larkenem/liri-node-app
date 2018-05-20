require("dotenv").config();
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
var keys = require('./keys.js')

//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//node command and command for twitter, spotify, etc
var nodeArgv = process.argv;
var command = process.argv[2];
var song = process.argv[3];

//defining command function in the correct position on the command line
switch(command) {
    case "my-tweets":
      myTweets();
    break;
  
    case "spotify-this-song":
      spotifySong();
    break;
};

//function that will pull last tweets and date created
function myTweets(){
    var screenName = {screen_name: 'youdontnodeme'};
    client.get('statuses/user_timeline', screenName, function(error, tweets, response) {
      if(!error) {
        for(var i = 0; i<tweets.length; i++) {
          var date = tweets[i].created_at;
          console.log("@youdontnodeme: " + tweets[i].text + " Created: " + date.substring(0, 19));
          console.log("-----------------------");
        };
      }
      else {
        console.log('Error occurred');
      };
    });
  };

  function spotifySong(song) {
    spotify.search({ type: 'track', query: song}, function(error, data) {
      if(!error) {
        for(var i = 0; i < data.tracks.items.length; i++) {
          var songData = data.tracks.items[i];
          console.log("Artist: " + songData.artists[0].name);
          console.log("Song: " + songData.name);
          console.log("Preview URL: " + songData.preview_url);
          console.log("Album: " + songData.album.name);
          console.log("-----------------------");
        };
    } 
    else {
      console.log('Error occurred.');
    };
  });
};