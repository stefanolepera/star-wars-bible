import { ajax } from 'rxjs/ajax';

export const getData = (url, query = '') => ajax.get(`${url}${query}`)
