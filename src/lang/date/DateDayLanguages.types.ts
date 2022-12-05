import type {EveryLanguages}                                                                           from 'lang/EveryLanguages'
import type {ProjectLanguages}                                                                         from 'lang/ProjectLanguages'
import type {PossibleAcronym, PossibleEnglishName, PossibleInternationalAcronym, PossibleOriginalName} from 'lang/ProjectLanguages.types'
import type {DateDayLanguages}                                                                         from 'lang/date/DateDayLanguages'

export type DateDayLanguagesByLanguage<T, > = T extends (PossibleAcronym | PossibleInternationalAcronym | PossibleEnglishName | PossibleOriginalName | ProjectLanguages)
    ? DateDayLanguages
    : T extends EveryLanguages
        ? | DateDayLanguages | never
        : never
