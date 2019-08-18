import { DETAILS } from './Details';

export const sortedFilms = films => [...films].sort((a, b) => a.release_date.split('-')[0] - b.release_date.split('-')[0]);

export const getCharacterDetails = character => Object.entries(character).filter(([key, value]) => DETAILS.indexOf(key) !== -1);

export const getFilmsByCharacter = (character, films) => {
    const filmsIndex = character.films.map(film => parseInt(film.split('/')[film.split('/').length - 2]));
    const filmsTitles = films.filter( (film, index) => filmsIndex.indexOf(index + 1) !== -1).map(film => film.title);
    return filmsTitles;
}

export const formatDetail = detail => detail.replace(/_/g, ' ');





