# liri-node-app
node app with language interpretation and recognition interface


Used Node JS to create a LIRI bot, like iPhone's SIRI, but takes in command through Language vs Speech. LIRI is a command line node app that takes in parameters and returns data based on commands:

    -my-tweets

    -spotify-this-song

What commands do: 

node liri.js my-tweets: displays last 20 tweets and date of creation
node liri.js spotify-this-song <song name>: displays artist, song name, preview url link, and album

Tech Used: 
    -Nodejs
    -Twitter NPM Package - https://www.npmjs.com/package/twitter
    -Spotify NPM Package - https://www.npmjs.com/package/spotify
    -Request NPM Package - https://www.npmjs.com/package/request