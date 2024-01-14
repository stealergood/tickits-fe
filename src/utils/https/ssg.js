import axios from 'axios';

const baseUrl = "https://movie-ticket-be-fa755f297c1f.herokuapp.com";

export const getNowShowingMovies = () => {
  return axios.get(`${baseUrl}/movies?page=1&limit=10`);
};
