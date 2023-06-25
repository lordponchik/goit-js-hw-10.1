import axios from 'axios';
import './axiosAPI';

const breedSelectEl = document.querySelector('.breed-select');
const errorEl = document.querySelector('.error');

async function fetchBreeds() {
  try {
    const breeds = await axios.get('breeds');
    const data = await breeds.data;

    const options = data
      .map(({ id, name }) => {
        return `<option value=${id}>${name}</option>`;
      })
      .join('');

    breedSelectEl.insertAdjacentHTML('beforeend', options);
    breedSelectEl.classList.add('visibility');
    errorEl.classList.remove('visibility');
  } catch (error) {
    breedSelectEl.classList.remove('visibility');
    errorEl.classList.add('visibility');
  }
}

fetchBreeds();
