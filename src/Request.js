const key = "93133169af91e380d79d5dc75c93d060";
const baseURL = "https://api.themoviedb.org/3";

const request = {
  requestPopular: `${baseURL}/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `${baseURL}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `${baseURL}/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `${baseURL}/search/movie?api_key=${key}&language=en-US&query=horror&page=1`,
  requestUpcoming: `${baseURL}/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
export default request;
