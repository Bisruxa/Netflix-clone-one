import axios from 'axios'

const instance = axios.create(
  {
    baseURL: "https://api.themoviedb.org/3"
  }
);

export default instance;

//axios is like a postman it helps us to send a request and get the data that we need
//async await is used when we are trying to fetch data fro third party and we have to wait until that data comes to continue what we are doing it is like dataw eskimeta tebek ena perform your action.