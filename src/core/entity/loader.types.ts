import type {PossibleEnglishName} from 'core/entity/Entities.types'

export type EntityLink = | 'this' | PossibleEnglishName
                         | `this / ${PossibleEnglishName}`
                         | `this / ${PossibleEnglishName} / ${PossibleEnglishName}`
