import { DETAILS } from '../constants/Details';

export const sortedFilms = films => [...films].sort((a, b) => a.release_date.split('-')[0] - b.release_date.split('-')[0]);

export const getDetails = (detail, searchType) => Object.entries(detail).filter(([key, _]) => DETAILS[searchType].indexOf(key) !== -1);

export const getFilmsByResult = (result, films) => {
    const filmsIndex = result.films.map(film => parseInt(film.split('/')[film.split('/').length - 2]));
    const filmsTitles = films.filter( (_, index) => filmsIndex.indexOf(index + 1) !== -1).map(film => film.title);
    return filmsTitles;
}

export const formatDetail = detail => detail.replace(/_/g, ' ');

export const trimDetail = detail => detail.length > 28 ? `${detail.substring(0, 25)}...` : detail;





