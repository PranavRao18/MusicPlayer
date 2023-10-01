//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const songs = ["Adore You", "Astronaut in the ocean", "Bad Habits", "Blueberry Faygo", "Cheerleader", "Circles", "FML", "Heat Waves", "idfc", "Industry Baby", "Let Her Go", "Lover", "One Dance", "Peaches", "Roxanne", "Starboy", "STAY", "Uptown Funk", ];

app.get("/", (req,res) => {
    res.render("index", {songs: songs});
});

app.post("/song", (req,res) => {
    const song = req.body.song; 
    console.log(song);
    var f = 0;
    for(var i = 0; i < songs.length; i++){
        if(song == songs[i]){
            f = 1;
            break;
        }
    }
    if(f==0){
        const m = "Error, song not in database";
        res.render("index", {songs: songs, message: m});
    }
    else{
        res.render("play", {song: song})
    }
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
})
