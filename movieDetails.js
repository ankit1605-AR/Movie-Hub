
const movieDetail = document.querySelector("#movie-detail");

const params = new URLSearchParams(location.search)
const imdbID = params.get("id");
// console.log(imdbID);
if (imdbID) {
    searchMovie(imdbID.trim());
}

async function searchMovie(imdbID) {
    let response = await fetch(`http://www.omdbapi.com/?apikey=7a461a79&i=${imdbID}&plot=full`);
    let data = await response.json();
    console.log(data);
    if (data.Response === "True") {
        displayMovie(data);
    }
    else {
        console.log(data.Error);
    }
}


function displayMovie(data){

    movieDetail.innerHTML = `<div class="detail-poster">
            <img src="${data.Poster}" alt="${data.Title} poster">
        </div>

        <div class="detail-info">
            <h2>${data.Title}</h2>
            <section class="meta">
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p class="rating">IMDB ${data.imdbRating}</p>
            </section>

            <div class="block">
                <p class="label">Plot Overview</p>
                <p>${data.Plot}</p>
            </div>
            <div class="pair">
                <section>
                    <p class="label">Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p class="label">Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>
            <div class="block">
                <p class="label">Actors</p>
                <p>${data.Actors}</p>
            </div>
            <div class="pair">
                <section>
                    <p class="label">Language</p>
                    <p>${data.Language}</p>
                </section>
                <section>
                    <p class="label">Country</p>
                    <p>${data.Country}</p>
                </section>
            </div>
            <div class="actions">
                <a class="back" href="index.html">&larr; Back to search</a>
                <a class="watch" href="https://www.imdb.com/title/${data.imdbID}/" target="_blank" rel="noopener">Watch</a>
            </div>
        </div>`
}
