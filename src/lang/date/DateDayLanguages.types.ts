import type {DateDayLanguages}                                                                         from './DateDayLanguages'
import type {EveryLanguages}                                                                           from '../EveryLanguages'
import type {ProjectLanguages}                                                                         from '../ProjectLanguages'
import type {PossibleAcronym, PossibleEnglishName, PossibleInternationalAcronym, PossibleOriginalName} from '../ProjectLanguages.types'

export type DateDayLanguagesByLanguage<T, > = T extends (PossibleAcronym | PossibleInternationalAcronym | PossibleEnglishName | PossibleOriginalName | ProjectLanguages)
    ? DateDayLanguages
    : T extends (EveryLanguages)
        ? | DateDayLanguages | never
        : never
