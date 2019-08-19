import axios from 'axios';

export const getData = async (url, query = '') => {
    const response = await axios.get(`${url}${query}`);

    return response;
};
