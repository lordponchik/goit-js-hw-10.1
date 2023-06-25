import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const breedSelectEl = document.querySelector('.breed-select');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

fetchBreeds()
  .then(data => {
    const breeds = data
      .map(({ id, name }) => {
        return `<option value="${id}">${name}</option>`;
      })
      .join('');
    breedSelectEl.insertAdjacentHTML('beforeend', breeds);
    breedSelectEl.classList.add('visibility');
    errorEl.classList.remove('visibility');
  })
  .catch(error => {
    breedSelectEl.classList.remove('visibility');
    errorEl.classList.add('visibility');
  });

breedSelectEl.addEventListener('change', e => {
  fetchCatByBreed(e.currentTarget.value).then(data => {
    console.log(data);
    const { url } = data;
    catInfoEl.innerHTML = `<img src="${url}" alt="" width="50%"/>
      <h1></h1>
      <p></p>
      <p></p>`;
  });
});
