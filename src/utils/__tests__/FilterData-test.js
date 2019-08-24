import { sortedFilms, getCharacterDetails, getFilmsByCharacter, formatDetail } from '../FilterData';
import { DETAILS } from '../../constants/Details';
import { filmsResponse } from '../../__mocks__/FilmsResponseMock';
import { singleCharacterResponse } from '../../__mocks__/CharacterResponseMock'

describe('FilterData test', () => {
    it('sortedFilms should retun a sorted array ascending by release date so the first 3 films should be the old trilogy', () => {
        expect(sortedFilms(filmsResponse.data.results)[0].title).toEqual('A New Hope');
        expect(sortedFilms(filmsResponse.data.results)[1].title).toEqual('The Empire Strikes Back');
        expect(sortedFilms(filmsResponse.data.results)[2].title).toEqual('Return of the Jedi');
    })

    it ('getCharacterDetails should return an array with the same lenght of relevant details', () => {
        expect(getCharacterDetails(singleCharacterResponse.data.results[0]).length).toEqual(DETAILS.length);
    })

    it ('getCharacterDetails should contain relevant details', () => {
        const details = getCharacterDetails(singleCharacterResponse.data.results[0]).map(detail => detail[0]);
        expect((details).indexOf('mass')).toBeGreaterThan(-1);
    })

    it ('getCharacterDetails should not contain irrelevant details', () => {
        const details = getCharacterDetails(singleCharacterResponse.data.results[0]).map(detail => detail[0]);
        expect((details).indexOf('homeworld')).toEqual(-1);
    })

    it('getFilmsByCharacter should return an array with length of the relevant films for that character', () => {
        expect(getFilmsByCharacter(singleCharacterResponse.data.results[0], filmsResponse.data.results).length).toEqual(5);
    })

    it('getFilmsByCharacter should return an array of only titles', () => {
        expect(typeof getFilmsByCharacter(singleCharacterResponse.data.results[0], filmsResponse.data.results)[0]).toBe('string');
    })

    it('formatDetail should return a string replacing underscore with a whitespace', () => {
        expect(formatDetail('eye_color')).toEqual('eye color');
    })
})