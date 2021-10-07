/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

// key:ebYLPYv4zCjCzeEU5kqVvGWkd02pVe5a
/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */

const ul = document.querySelector('#episodes-list');
async function searchShows(query) {
    // TODO: Make an ajax request to the searchShows api.  Remove
    // hard coded data.
    let response = await axios.get(
        `http://api.tvmaze.com/search/shows?q=${query}`);
    console.log(response.data);
    let shows = response.data.map(function (result) {
        return {
            id: result.show.id,
            name: result.show.name,
            summary: result.show.summary,
            image: result.show.image.medium
        }
    })
    // console.log(shows);
    return shows;

}


/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
    console.log(shows);
    const $showsList = $("#shows-list");
    $showsList.empty();
    for (let show of shows) {
        console.log(show);
        console.log(show.image);
        let $item = $(
            `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
         <img class="card-img-top" src="${show.image}" >
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
           </div>
           <button type="button" class="btn btn-primary" id="episode"> Episodes </button>
         </div>
       </div>
      `);

        $showsList.append($item);
    }

}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch(evt) {
    evt.preventDefault();

    let query = $("#search-query").val();
    if (!query) return;

    $("#episodes-area").hide();

    let shows = await searchShows(query);

    populateShows(shows);
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
    let response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
    let array = [];
    for (let each of response.data) {
        array.push(each.name);
    }
    console.log(array);
    return array;

    // TODO: get episodes from tvmaze
    //       you can get this by making GET request to
    //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes

    // TODO: return array-of-episode-info, as described in docstring above  
}


$("#shows-list").on("click", "#episode", async function showEpisode(evt) {
    let id = evt.target.parentElement.getAttribute("data-show-id");
    console.log(id);
    $("#episodes-list").empty();
    const episodeList = await getEpisodes(id);
    for (let each of episodeList) {
        const li = document.createElement('LI');
        li.innerText = each;
        ul.append(li);
    }
    $("#episodes-area").show();
});