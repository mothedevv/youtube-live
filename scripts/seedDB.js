const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const videoSeed = [
  {
    Title:
    Song: "Hello World",
    Artist: "admin",
    Band:
    Genre:
    Year:
    Venue:  
    date: new Date(Date.now())
  },
  {
 

    const runSearch = () => {
      inquirer
        .prompt({
          name: 'action',
          type: 'list',
          message: 'What would you like to do?',
          choices: [
            'Find songs by artist',
            'Find all artists who appear more than once',
            'Find data within a specific range',
            'Search for a specific song',
            'exit',
          ],
        })
        .then((answer) => {
          switch (answer.action) {
            case 'Find songs by artist':
              artistSearch();
              break;
    
            case 'Find all artists who appear more than once':
              multiSearch();
              break;
    
            case 'Find data within a specific range':
              rangeSearch();
              break;
    
            case 'Search for a specific song':
              songSearch();
              break;
    
            case 'Exit':
              connection.end();
              break;
    
            default:
              console.log(`Invalid action: ${answer.action}`);
              break;
          }
        });
    };
    
    const artistSearch = () => {
      inquirer
        .prompt({
          name: 'artist',
          type: 'input',
          message: 'What artist would you like to search for?',
        })
        .then((answer) => {
          const query = 'SELECT position, song, year FROM top5000 WHERE ?';
          connection.query(query, { artist: answer.artist }, (err, res) => {
            if (err) throw err;
            res.forEach(({ position, song, year }) => {
              console.log(
                `Position: ${position} || Song: ${song} || Year: ${year}`
              );
            });
            runSearch();
          });
        });
    };
    
    const multiSearch = () => {
      const query =
        'SELECT artist FROM;
              connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach(({ artist }) => console.log(artist));
        runSearch();
      });
    };
    
    const rangeSearch = () => {
      inquirer
        .prompt([
          {
            name: 'start',
            type: 'input',
            message: 'Enter starting position: ',
            validate(value) {
              if (isNaN(value) === false) {
                return true;
              }
              return false;
            },
          },
          {
            name: 'end',
            type: 'input',
            message: 'Enter ending position: ',
            validate(value) {
              if (isNaN(value) === false) {
                return true;
              }
              return false;
            },
          },
        ])
        .then((answer) => {
          const query =
            'SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?';
          connection.query(query, [answer.start, answer.end], (err, res) => {
            if (err) throw err;
            res.forEach(({ position, song, artist, year }) =>
              console.log(
                `Position: ${position} || Song: ${song} || Artist: ${artist} || Year: ${year}`
              )
            );
            runSearch();
          });
        });
    };
    
    const songSearch = () => {
      inquirer
        .prompt({
          name: 'song',
          type: 'input',
          message: 'What song would you like to look for?',
        })
        .then((answer) => {
          console.log(`You searched for "${answer.song}"`);
          connection.query(
            'SELECT * FROM top5000 WHERE ?',
            { song: answer.song },
            (err, res) => {
              if (err) throw err;
              if (res[0]) {
                console.log(
                  `Position: ${res[0].position} || Song: ${res[0].song} || Artist: ${res[0].artist} || Year: ${res[0].year}`
                );
                runSearch();
              } else {
                console.error('Song not found :(\n');
                runSearch();
              }
            }
          );
        });
    };
    

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(videoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
