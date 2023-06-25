import axios from 'axios';
import './axiosAPI';

export async function fetchBreeds() {
  const breeds = await axios.get('breeds');
  const data = await breeds.data;

  return data;
}

export async function fetchCatByBreed(breedId) {
  const catInfo = await axios.get(`images/search?breed_ids=${breedId}`);
  const data = await catInfo.data[0];

  return data;
}
