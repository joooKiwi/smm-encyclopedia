import type {CourseTheme}                 from './CourseTheme';
import type {PropertyGetterWithReference} from '../PropertyGetter';
import type {SimpleEnum}                  from '../../util/enum/EnumTypes';
import type {ThemeProperty}               from '../properties/ThemeProperty';
import type {WorldTheme}                  from './WorldTheme';

import {Enum}             from '../../util/enum/Enum';
import {ThemeLoader}      from './ThemeLoader';

//region -------------------- Theme texts --------------------

type ThemesInBothCourseAndWorld = | 'Ground' | 'Underground' | 'Desert' | 'Snow' | 'Sky' | 'Forest';
export type PossibleCourseTheme = | ThemesInBothCourseAndWorld | 'Underwater' | 'Ghost House' | 'Airship' | 'Castle';
export type PossibleWorldTheme = | ThemesInBothCourseAndWorld | 'Volcano' | 'Space';
export type PossibleTheme = | PossibleCourseTheme | PossibleWorldTheme;

export type ThemePath = `/game/themes/${PossibleTheme | string}`

//endregion -------------------- Theme texts --------------------
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

export class Themes
    extends Enum<ThemesOrdinals, ThemesNames>
    implements PropertyGetterWithReference<PossibleTheme, ThemeProperty, readonly [CourseTheme, WorldTheme]> {

    //region -------------------- Enum instances --------------------

    public static readonly GROUND =      new class Themes_Ground extends Themes {

        public _get(property: ThemeProperty,): boolean {
            return property.isInGroundTheme;
        }

    }     ('Ground',);
    public static readonly UNDERGROUND = new class Themes_Underground extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInUndergroundTheme;
        }

    }('Underground',);
    public static readonly UNDERWATER =  new class Themes_Underwater extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInUnderwaterTheme;
        }

    } ('Underwater',);
    public static readonly DESERT =      new class Themes_Desert extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInDesertTheme;
        }

    }     ('Desert',);
    public static readonly SNOW =        new class Themes_Snow extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInSnowTheme;
        }

    }       ('Snow',);
    public static readonly SKY =         new class Themes_Sky extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInSkyTheme;
        }

    }        ('Sky',);
    public static readonly FOREST =      new class Themes_Forest extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInForestTheme;
        }

    }     ('Forest',);
    public static readonly GHOST_HOUSE = new class Themes_GhostHouse extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInGhostHouseTheme;
        }

    } ('Ghost House',);
    public static readonly AIRSHIP =     new class Themes_Airship extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInAirshipTheme;
        }

    }    ('Airship',);
    public static readonly CASTLE =      new class Themes_Castle extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInCastleTheme;
        }

    }     ('Castle', 'Castle - Volcano',);

    public static readonly VOLCANO =     new Themes                                       ('Volcano', 'Castle - Volcano',);
    public static readonly SPACE =       new Themes                                       ('Space',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: ThemesArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #COURSES: ThemesArrayAsOnlyCourseTheme;
    static #WORLDS: ThemesArrayAsOnlyWorldTheme;

    #references?: readonly [CourseTheme, WorldTheme];
    #courseTheme?: CourseTheme;
    #worldTheme?: WorldTheme;
    readonly #englishName;
    readonly #imagePath: ThemePath;

    //endregion -------------------- Attributes --------------------

    private constructor(englishNameAndImagePath: PossibleTheme,)
    private constructor(englishName: PossibleTheme, basicImagePath: string,)
    private constructor(englishName: PossibleTheme, basicImagePath: string = englishName,) {
        super(Themes);
        this.#englishName = englishName;
        this.#imagePath = `/game/themes/${basicImagePath}`;
    }

    //region -------------------- Getter methods --------------------

    public get englishName() {
        return this.#englishName;
    }

    public get references() {
        return this.#references ??= ThemeLoader.get.load().get(this.englishName)!;
    }

    public get courseTheme() {
        return this.#courseTheme ??= this.references[0];
    }

    public get worldTheme() {
        return this.#worldTheme ??= this.references[1];
    }

    public get imagePath() {
        return this.#imagePath;
    }

    public get smallImagePath() {
        return this.imagePath + ' (small).png';
    }

    public get longImagePath() {
        return this.imagePath + ' (large).jpg';
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected _get(property: ThemeProperty,): boolean | null {
        return false;
    }

    public get(property: ThemeProperty,): boolean {
        return this._get(property) ?? false;
    }


    public static get courseThemes(): ThemesArrayAsOnlyCourseTheme {
        return this.#COURSES ??= [
            this.GROUND,
            this.UNDERGROUND,
            this.UNDERWATER,
            this.DESERT,
            this.SNOW,
            this.SKY,
            this.FOREST,
            this.GHOST_HOUSE,
            this.AIRSHIP,
            this.CASTLE,
        ];
    }

    public static get worldThemes(): ThemesArrayAsOnlyWorldTheme {
        return this.#WORLDS ??= [
            this.GROUND,
            this.UNDERGROUND,
            this.DESERT,
            this.SNOW,
            this.SKY,
            this.FOREST,
            this.VOLCANO,
            this.SPACE,
        ];
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends ThemesOrdinals = ThemesOrdinals, >(ordinal: O,): ThemesArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<ThemesArray[O]> | null
    public static getValue(name: PossibleTheme,): Themes
    public static getValue(name: string,): | Themes | null
    public static getValue<I extends Themes = Themes, >(instance: I,): I
    public static getValue(value: | Themes | string | number | null | undefined,): | Themes | null
    public static getValue(value: | Themes | string | number | null | undefined,): | Themes | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(theme => theme.englishName === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): ThemesArray {
        return this.#VALUES ??= [
            this.GROUND,
            this.UNDERGROUND,
            this.UNDERWATER,
            this.DESERT,
            this.SNOW,
            this.SKY,
            this.FOREST,
            this.GHOST_HOUSE,
            this.AIRSHIP,
            this.CASTLE,

            this.VOLCANO,
            this.SPACE,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
