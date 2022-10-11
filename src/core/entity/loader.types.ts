import type {PossibleEnglishName} from './Entities.types'

export type EntityLink = | 'this' | PossibleEnglishName
                         | `this / ${PossibleEnglishName}`
                         | `this / ${PossibleEnglishName} / ${PossibleEnglishName}`
