// const { createElement } = require("react");


const movieForm = document.querySelector("#movie-form");
const movieInput = document.querySelector("#movie-input");
const movieHub = document.querySelector("#movie-hub");
const hamburger = document.querySelector("#hamburger");
const options = document.querySelector("#options");

movieForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let query = movieInput.value.trim();
    if (!query) {
        return;
    }
    console.log(query);
    searchMovies(query);
})

async function searchMovies(movieName) {
    movieHub.innerHTML = `<span class="loader"></span>`;
    // movieHub.innerHTML = `<p>Searching Movie...</p>`;
    // movieHub.textContent = "Searching Movie...";
    let response = await fetch(`http://www.omdbapi.com/?apikey=7a461a79&s=${encodeURIComponent(movieName)}`);
    let data = await response.json();
    console.log(data);
    if (data.Response === "True") {
        displayMovies(data.Search);
    }
    else {
        console.log(data.Error);
        movieHub.innerHTML = `<p class="msg">${data.Error}</p>`
    }
}
function displayMovies(movies) {
    movieHub.innerHTML = "";
    movies.forEach((movie) => {
        const div = document.createElement("div")

        div.dataset.id = movie.imdbID
        div.setAttribute("class", "movie-card")
        div.innerHTML = `<div class="poster">
                <img src="${movie.Poster}" alt="${movie.Title} poster" loading="lazy">
            </div>

            <div class="card-text">
                <p class="card-title">${movie.Title}</p>
                <p class="card-year">${movie.Year}</p>
            </div>`

        movieHub.append(div);
    })
}

movieHub.addEventListener('click', (e) => {
    e.stopPropagation();
    const movieCard = e.target.closest(".movie-card")
    if (!movieCard) return;

    const imdbID = movieCard.dataset.id;
    // console.log(imdbID);

    location.href = `movieDetails.html?id=${imdbID}`
})

const defaultData =
    [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_QL75_UX380_CR0,0,380,562_.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODg3ZTM2YWQtZDE5Ny00NGNiLTkzYjgtYWVlYjNkOTg5NDI1XkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "War of the Worlds",
            "Year": "2005",
            "imdbID": "tt0407304",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
        },
        {
            "Title": "Lord of War",
            "Year": "2005",
            "imdbID": "tt0399295",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNThlY2NkYmMtNTFhNi00MzBiLWJmNzEtZjk5MzYwYWU2MjllXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg"
        },
        {
            "Title": "War for the Planet of the Apes",
            "Year": "2017",
            "imdbID": "tt3450958",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzNhMzNiZDYtMzYxYy00YTYwLTkxNmYtNTJhOGU1Yjg5ODI5XkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "War Dogs",
            "Year": "2016",
            "imdbID": "tt2005151",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Civil War",
            "Year": "2024",
            "imdbID": "tt17279496",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTkzMjc0YzgtY2E0Yi00NDBlLWI0MWUtODY1ZjExMDAyOWZiXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "The Tomorrow War",
            "Year": "2021",
            "imdbID": "tt9777666",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmUyNzY2YWYtNWQ0My00ODMwLTkwOTQtOTA0ZjM0MjRmYjJiXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "This Means War",
            "Year": "2012",
            "imdbID": "tt1596350",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg"
        }
]

displayMovies(defaultData);

hamburger.addEventListener('click',(e)=>{
    e.stopPropagation();
    options.classList.toggle("hidden")
})


