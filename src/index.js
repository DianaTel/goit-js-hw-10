import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document
  .getElementById('breed-select')
  .addEventListener('change', async function (e) {
    try {
      const response = await fetchCatByBreed(e.target.value);

      document.getElementById('cat-info').style.display = '';
      document.querySelector('#cat-info .cat-info-img').src = response[0].url;
      document.querySelector('#cat-info .cat-info-title').innerHTML =
        e.target.selectedOptions[0].dataset.title;
      document.querySelector('#cat-info .cat-info-desc').innerHTML =
        e.target.selectedOptions[0].dataset.desc;
      document.querySelector('#cat-info .cat-info-tamp').innerHTML =
        '<b>Temperament: </b>' + e.target.selectedOptions[0].dataset.tamp;
    } catch (e) {
      document.getElementById('error').style.display = '';
    }
  });

async function initStart() {
  try {
    const response = await fetchBreeds();
    let scr = '';
    for (const cat of response) {
      scr += `<option 
        data-title="${cat.name}" 
        data-desc="${cat.description}" 
        data-tamp="${cat.temperament}" 
        value="${cat.id}">
        ${cat.name}
      </option>`;
    }
    document.getElementById('breed-select').innerHTML = scr;
  } catch (e) {
    document.getElementById('error').style.display = '';
  }
}
initStart();
