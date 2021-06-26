// import axios from "axios";

// export default {
//   getVideo function (query) {
//     return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//   },
//   // Deletes the book with the given id
//   deleteVideo: function (id) {
//     return axios.delete("/api/books/" + id).then(result => result.data);
//   },
//   // Saves a book to the database
//   saveVideo: function (bookData) {
//     return axios.post("/api/books", bookData).then(result => result.data);
//   },
//   // Get the saved a books from the database
//   savedVideo: function () {
//     return axios.get("/api/books").then(result => result.data);
//   }
// };