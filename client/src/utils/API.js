import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes/"
const APIKEY = "AIzaSyCC3WWtul2NhKLHso3htU-FB47tv_9vgqk&limit=10"

export default {
    // Gets all books
    getBooks: function() {
      return axios.get(BASEURL + "batman" + APIKEY);
    },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get(BASEURL + id + APIKEY);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete(BASEURL + id + APIKEY);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };