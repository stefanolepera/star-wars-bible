import axios from 'axios';

export const getData = async (query) => {
    console.log('query', query);
    const response = await axios.get(`https://swapi.co/api/people/?search=${query}`);

    return response;
};
