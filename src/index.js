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
  fetchCatByBreed(e.currentTarget.value)
    .then(data => {
      console.log(data);
      const { url, breeds } = data;
      const { name, description, temperament } = breeds[0];
      console.log(name);
      catInfoEl.innerHTML = `<img src="${url}" alt="" class="cat-info__img" width="40%"/>
   <div class="cat-info__wrapper">
   <h1 class="cat-info__title">${name}</h1>
      <p class="cat-info__description">${description}</p>
      <p class="cat-info__temperament">${temperament}</p></div>`;
    })
    .catch(error => {
      breedSelectEl.classList.remove('visibility');
      errorEl.classList.add('visibility');
    });
});
