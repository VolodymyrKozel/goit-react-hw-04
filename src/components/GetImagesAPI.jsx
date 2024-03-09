import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';
const paramsRequest = {
  query: '',
  client_id: '5oq-O0l79UtWEfgesuk7FNxEhMjgmglWAfYeOAPGJFs',
};

export default async function getImagesAPI(topic) {
  paramsRequest.query = topic;

  /*   const response = axios.get(''); */
  const response = axios.get('', { params: paramsRequest });
  return response;
}
