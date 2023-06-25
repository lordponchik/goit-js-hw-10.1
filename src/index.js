import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const slimSelect = new SlimSelect({
  select: '#single',
  settings: {
    showSearch: false,
  },
});

const breedSelectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const catInfoEl = document.querySelector('.cat-info');

fetchBreeds()
  .then(data => {
    loaderEl.classList.add('visibility');
    const cats = data.map(({ id, name }) => {
      return { text: name, value: id };
    });
    slimSelect.setData([...cats]);
    breedSelectEl.classList.add('visibility');
    loaderEl.classList.remove('visibility');
  })
  .catch(error => {
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
    breedSelectEl.classList.remove('visibility');
    loaderEl.classList.remove('visibility');
  });

breedSelectEl.addEventListener('change', e => {
  catInfoEl.classList.remove('visibility');
  fetchCatByBreed(e.currentTarget.value)
    .then(data => {
      const { url, breeds } = data;
      const { name, description, temperament } = breeds[0];
      catInfoEl.innerHTML = '';

      catInfoEl.innerHTML = `<img src="${url}" alt="" class="cat-info__img" width="40%"/>
      <div class="cat-info__meta">
        <h1 class="cat-info__title">${name}</h1>
        <p class="cat-info__description">${description}</p>
        <p class="cat-info__temperament">${temperament}</p>
      </div>`;
      loaderEl.classList.remove('visibility');
      catInfoEl.classList.add('visibility');
    })
    .catch(error => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
      breedSelectEl.classList.remove('visibility');
      loaderEl.classList.remove('visibility');
    });
});
