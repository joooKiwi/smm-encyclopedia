import type {SimpleEnum} from '../../util/enum/EnumTypes';
import type {Themes}     from './Themes';

export type ThemesInBothCourseAndWorld = | 'Ground' | 'Underground' | 'Desert' | 'Snow' | 'Sky' | 'Forest';
export type PossibleCourseTheme = | ThemesInBothCourseAndWorld | 'Underwater' | 'Ghost House' | 'Airship' | 'Castle';
export type PossibleWorldTheme = | ThemesInBothCourseAndWorld | 'Volcano' | 'Space';
export type PossibleTheme = | PossibleCourseTheme | PossibleWorldTheme;

export type ThemePath = `/game/themes/${PossibleTheme | string}`

//region -------------------- Enum types --------------------

export type ThemesOrdinals = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ThemesNames =
    | 'GROUND' | 'UNDERGROUND' | 'UNDERWATER' | 'DESERT' | 'SNOW' |
      'SKY' | 'FOREST' | 'GHOST_HOUSE' | 'AIRSHIP' | 'CASTLE' |

      'VOLCANO' | 'SPACE';
export type SimpleThemes<T = Themes, > = SimpleEnum<ThemesNames, T>;
export type ThemesArray<T = Themes, > = readonly [
    ...ThemesArrayAsOnlyCourseTheme<T>,

    SimpleThemes<T>['VOLCANO'], SimpleThemes<T>['SPACE'],
];
export type ThemesArrayAsOnlyCourseTheme<T = Themes, > = readonly [
    SimpleThemes<T>['GROUND'], SimpleThemes<T>['UNDERGROUND'], SimpleThemes<T>['UNDERWATER'], SimpleThemes<T>['DESERT'], SimpleThemes<T>['SNOW'],
    SimpleThemes<T>['SKY'], SimpleThemes<T>['FOREST'], SimpleThemes<T>['GHOST_HOUSE'], SimpleThemes<T>['AIRSHIP'], SimpleThemes<T>['CASTLE'],
];
export type ThemesArrayAsOnlyWorldTheme<T = Themes, > = readonly [
    SimpleThemes<T>['GROUND'], SimpleThemes<T>['UNDERGROUND'], SimpleThemes<T>['DESERT'], SimpleThemes<T>['SNOW'],
    SimpleThemes<T>['SKY'], SimpleThemes<T>['FOREST'], SimpleThemes<T>['VOLCANO'], SimpleThemes<T>['SPACE'],
];

//endregion -------------------- Enum types --------------------

