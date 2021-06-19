const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;


//THIS IS FROM A MYSQL ACTIVITY NOT SURE IF WE WILL USE ANY OF THIS SINCE WE ARE USING MONGO, HOWEVER IT MIGHT BE A GOOD EXAMPLE FOR SEARCH QUERY PERAMETERS

// connection.connect((err) => {
//     if (err) throw err;
//     runSearch();
//   });
  
//   const runSearch = () => {

//    
//   const artistSearch = () => {
//         connection.query(query, { artist: input.artist }, (err, res) => {
//           if (err) throw err;
//           res.forEach(({ position, song, year }) => {
//             console.log(
//               `Position: ${position} || Song: ${song} || Year: ${year}`
//             );
//           });
//           runSearch();
//         });
//       });
//   };
  
//   const multiSearch = () => {
//     const query 
//     connection.query(query, (err, res) => {
//       if (err) throw err;
//       res.forEach(({ artist }) => console.log(artist));
//       runSearch();
//     });
//   };
  
//   const rangeSearch = () => {
//   
//           validate(value) {
//             if (isNaN(value) === false) {
//               return true;
//             }
//             return false;
//           },
//         },
//         {
//          
//           validate(value) {
//             if (isNaN(value) === false) {
//               return true;
//             }
//             return false;
//           },
//         },
//       ])
//         const query =
//          ;
//         connection.query(query, ], (err, res) => {
//           if (err) throw err;
//           res.forEach(({ position, song, artist, year }) =>
//             console.log(
//               `Position: ${position} || Song: ${song} || Artist: ${artist} || Year: ${year}`
//             )
//           );
//           runSearch();
//         });
//       });
//   };
  
//   const songSearch = () => {
//     

//           { song: input.song },
//           (err, res) => {
//             if (err) throw err;
//             if (res[0]) {
//               console.log(
//                 `Position: ${res[0].position} || Song: ${res[0].song} || Artist: ${res[0].artist} || Year: ${res[0].year}`
//               );
//               runSearch();
//             } else {
//               console.error('Song not found :(\n');
//               runSearch();
//             }
//           }
//         );
//       });
//   };
  