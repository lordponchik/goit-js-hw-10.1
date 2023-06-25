import axios from 'axios';
import './axiosAPI';

const breedSelectEl = document.querySelector('.breed-select');

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
  } catch (error) {}
}

fetchBreeds();
