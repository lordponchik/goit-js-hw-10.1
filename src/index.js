import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
const slimSelect = new SlimSelect({
  select: '#single',
  settings: {
    showSearch: false,
  },
});

const breedSelectEl = document.querySelector('.breed-select');
const errorEl = document.querySelector('.error');
const loaderEl = document.querySelector('.loader');
const catInfoEl = document.querySelector('.cat-info');

fetchBreeds()
  .then(data => {
    const cats = data.map(({ id, name }) => {
      return { text: name, value: id };
    });
    slimSelect.setData([...cats]);
    breedSelectEl.classList.add('visibility');
    errorEl.classList.remove('visibility');
    loaderEl.classList.remove('visibility');
  })

  .catch(error => {
    breedSelectEl.classList.remove('visibility');
    errorEl.classList.add('visibility');
  });

breedSelectEl.addEventListener('change', e => {
  catInfoEl.classList.remove('visibility');
  fetchCatByBreed(e.currentTarget.value)
    .then(data => {
      const { url, breeds } = data;
      const { name, description, temperament } = breeds[0];
      catInfoEl.innerHTML = '';

      catInfoEl.innerHTML = `<img src="${url}" alt="" class="cat-info__img" width="40%"/>
      <div class="cat-info__wrapper">
        <h1 class="cat-info__title">${name}</h1>
        <p class="cat-info__description">${description}</p>
        <p class="cat-info__temperament">${temperament}</p>
      </div>`;
      loaderEl.classList.remove('visibility');
      catInfoEl.classList.add('visibility');
    })
    .catch(error => {
      breedSelectEl.classList.remove('visibility');
      errorEl.classList.add('visibility');
    });
});
