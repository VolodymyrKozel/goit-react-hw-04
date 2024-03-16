import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';
/* const paramsRequest = {
  query: '',
  client_id: '5oq-O0l79UtWEfgesuk7FNxEhMjgmglWAfYeOAPGJFs',
}; */
export default async function getImagesAPI(paramsRequest) {
  /*   const response = axios.get(''); */
  if (paramsRequest.query === '') return;
  const response = axios.get('', { params: paramsRequest });
  return response;
}
