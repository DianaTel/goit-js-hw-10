import axios from 'axios';

const endpoint = 'https://api.thecatapi.com';

axios.defaults.headers.common['x-api-key'] =
  'live_I5Q3fJGlmzNwvEf1nLvlLV61govF3JOKqbHMqdoC4IXG881cjoIiT1Nl2X79bihi';

export function fetchBreeds() {

  return axios.get(`${endpoint}/v1/breeds`);
}

export function fetchCatByBreed(breedId) {

  return axios.get(`${endpoint}/v1/images/search?breed_ids=${breedId}`);
}