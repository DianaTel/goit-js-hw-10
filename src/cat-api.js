import axios from 'axios';

axios.interceptors.request.use((config) => {
  document.getElementById('loader').style.display="";  
    return config;
  }, (error) => {
    document.getElementById('loader').style.display='none';  
    return Promise.reject(error);
  });

  axios.interceptors.response.use((response) => {
    document.getElementById('loader').style.display='none';  
    return response;
  }, (error) => {
    document.getElementById('loader').style.display='none';  
    return Promise.reject(error);
  });


axios.defaults.headers.common['x-api-key'] =
  'live_I5Q3fJGlmzNwvEf1nLvlLV61govF3JOKqbHMqdoC4IXG881cjoIiT1Nl2X79bihi';

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function fetchCatByBreed(breedId) {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids='+ breedId);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  }