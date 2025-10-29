console.log("script.js loaded");

// Link to the giphy API with key and query "q"
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=fMhbYCtzDG99THAyTZBQnVoZoJXj2mbV&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

// Storing gif-container in a variable
const gifContainer = document.querySelector("#gif-container");
// Storing button in a variable
const fetchButton = document.querySelector("#fetch-gif-btn");

// Adding click event listener
fetchButton.addEventListener("click", async function() {
    const response = await fetch(endpoint);
    const data = await response.json();

    // Looping through an array "images" and getting the url for each gif to display on my webpage
    const images = [];
    for (let i = 0; i < data.data.length; i++) {
        const url = data.data[i].images.original.url;   // Getting the original url from current gif in the array
        images.push(url);   //adding url to the array
    }

    console.log(images);     // Checking the urls in the array are correct through the console


    // Clearing it every time you click the button so it doesn't stack the gifs every time you click
    gifContainer.innerHTML = "";

    // Displaying the gifs
    for (let i = 0; i < images.length; i++) {
        gifContainer.innerHTML += `<img src=${images[i]} class = "col-3 mb-3">`;
    }
});