import type {PossibleEnglishName} from './Entities.types';

type SingleEntityLink = | 'this' | PossibleEnglishName;
export type EntityLink = | SingleEntityLink
                         | Exclude<`${SingleEntityLink} / ${SingleEntityLink}`, 'this / this'>
                         | `this / ${PossibleEnglishName} / ${PossibleEnglishName}`;
