import axios from 'axios';
import './axiosAPI';

const loaderEl = document.querySelector('.loader');

export async function fetchBreeds() {
  loaderEl.classList.add('visibility');
  const breeds = await axios.get('breeds');
  const data = await breeds.data;

  return data;
}

export async function fetchCatByBreed(breedId) {
  loaderEl.classList.add('visibility');

  const catInfo = await axios.get(`images/search?breed_ids=${breedId}`);
  const data = await catInfo.data[0];

  return data;
}
