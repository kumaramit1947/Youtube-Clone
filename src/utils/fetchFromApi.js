import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: { maxResults: '50' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_SECRET_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}
const fetchFromApi= async (url) =>{
const {data} = await axios.get(`${BASE_URL}/${url}`,options);
return data;
}
export default fetchFromApi;