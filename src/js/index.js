import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
// import './style.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';

const selectElm = document.getElementById('breed-select');
const loaderElm = document.getElementById('loader');
const errorElm = document.getElementById('error');
const catInfoElm = document.getElementById('cat-info');

selectElm.addEventListener('change', function (e) {

  errorElm.classList.add('is-hidden');
  catInfoElm.classList.add('is-hidden');
  loaderElm.classList.remove('is-hidden');

  fetchCatByBreed(e.target.value)
  .then(response => {

    catInfoElm.innerHTML = `
      <img class="cat-info-img" src="${response.data[0].url}">
      <div class="cat-info-right">
        <div class="cat-info-title">${e.target.selectedOptions[0].dataset.title}</div>
        <div class="cat-info-desc">${e.target.selectedOptions[0].dataset.desc}</div>
        <div class="cat-info-tamp"><b>Temperament: </b> ${e.target.selectedOptions[0].dataset.tamp}</div>
      </div>
    `;

    catInfoElm.classList.remove('is-hidden');
    loaderElm.classList.add('is-hidden');
  })
  .catch(e => {

    errorElm.classList.remove('is-hidden');
    loaderElm.classList.add('is-hidden');
  })
});

function initStart() {

  fetchBreeds()
  .then(response => {

    let scr = '';
    for (const cat of response.data) {
      scr += `<option 
        data-title="${cat.name}" 
        data-desc="${cat.description}" 
        data-tamp="${cat.temperament}" 
        value="${cat.id}">
        ${cat.name}
      </option>`;
    }

    loaderElm.classList.add('is-hidden');

    const breedSelect = document.getElementById('breed-select');
    breedSelect.innerHTML = scr;
    breedSelect.classList.remove('is-hidden');
  })
  .catch(e => {

    loaderElm.classList.add('is-hidden');
    errorElm.classList.remove('is-hidden');
  })
}
initStart();
