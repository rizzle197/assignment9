console.log("script.js loaded");

// Link to the giphy API with key and query "q"
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=fMhbYCtzDG99THAyTZBQnVoZoJXj2mbV&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

// Storing gif-container in a variable
const gifContainer = document.querySelector("#gif-container");
// Storing button in a variable
const fetchButton = document.querySelector("#fetch-gif-btn");