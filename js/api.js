//Get Movies
//Intial Values
const API_KEY ="6fd1bacb224d157a34d76ee1386dd1cfb";

const url = "https://api.themoviedb.org/3/search/movie?api_key=fd1bacb224d157a34d76ee1386dd1cfb"

const IMAGE_URL = "https://image.tmdb.org/t/p/w500"; 

function generateUrl(path){
  const url = `https://api.themoviedb.org/3${path}?api_key=fd1bacb224d157a34d76ee1386dd1cfb`;
  return url;
  }

function requestMovies(Url, onComplete, onError) {
fetch(Url)
  .then ((res) => res.json())
  .then(onComplete)
  .catch(onError);
  }
  
function moviesSearch(value) {
  path = '/search/movie'
  const Url = generateUrl(path) + "&query=" + value;
  
  requestMovies(Url, renderSearchMovies, handleError);
  }

function getUpcomingMovies(){
  const path= '/movie/upcoming';
  const Url = generateUrl(path);

  const render = renderMovies.bind({title: "Upcoming Movies"});

  requestMovies(Url, render, handleError);
}

function getTopRatedMovies(){
  const path= '/movie/top_rated';
  const Url = generateUrl(path);
  
  const render = renderMovies.bind({title: "Top Rated Movies"});
  requestMovies(Url, render, handleError);
}

function getPopularMovies(){
  const path= '/movie/popular';
  const Url = generateUrl(path);
  
  const render = renderMovies.bind({title: "Popular Movies"});
  requestMovies(Url, render, handleError);
}
