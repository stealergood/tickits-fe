import axios from "axios";

const baseUrl = "https://movie-ticket-be-fa755f297c1f.herokuapp.com";

export const getGenre = (controller) => {
  const url = `${baseUrl}/genre`;
  return axios.get(url, { signal: controller.signal });
};
