import type {PossibleEnglishName} from './Entities.types';

export type EntityLink = | 'this' | PossibleEnglishName | `${PossibleEnglishName} / ${PossibleEnglishName}` | `${PossibleEnglishName} / this` | `this / ${PossibleEnglishName}`;
