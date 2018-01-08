var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs();
  //queryDanceSongs();
});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + "Artist: " + res[i].artist + " | " + "Album: " + res[i].album + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
    queryPopSongs()
  });
}
//
function queryPopSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Pop"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].album + "| " + res[i].genre);
    }
  });
}

  function addSong() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO songs SET ?", {
        title: "Radioactive",
        artist: "Imagine Dragons",
        album: "Night Visions",
        genre: "Alternative"
      },
      function(err, res) {
        console.log(res.affectedRows + " Song inserted\n");
        // Call updateProduct AFTER the INSERT completes
        // queryAlternativeSongs();
      }
    )
  };

    function queryAlternativeSongs() {
      var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Alternative"], function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].album + "| " + res[i].genre);
        }
      });
      // logs the actual query being run
      console.log(query.sql);
      connection.end()
    }
