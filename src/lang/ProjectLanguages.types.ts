import type {PossibleProjectLanguagesAcronym, PossibleProjectLanguagesEnglishName, PossibleProjectLanguagesOriginalName, ProjectLanguagesNames} from './EveryLanguages.types';
import type {ProjectLanguages}                                                                                                                  from './ProjectLanguages';

export type PossibleNonNullableValue = | ProjectLanguages
                                       | ProjectLanguagesOrdinals
                                       | PossibleProjectLanguagesAcronym
                                       | PossibleProjectLanguagesEnglishName | PossibleProjectLanguagesOriginalName | ProjectLanguagesNames;

//region -------------------- Enum types --------------------

export type ProjectLanguagesOrdinals = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
                                       | 11 | 12 | 13 | 14 | 15;

//endregion -------------------- Enum types --------------------