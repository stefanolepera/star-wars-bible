import { ajax } from 'rxjs/ajax';

export const getData = (url) => ajax.get(`${url}`)
