import {CourseTheme}                 from './CourseTheme';
import {PropertyGetterWithReference} from '../PropertyGetter';
import {ThemeLoader}                 from './ThemeLoader';
import {WorldTheme}                  from './WorldTheme';
import {IsInThemeProperty}           from '../properties/IsInThemeProperty';

type ThemesInBothCourseAndWorld = | 'Ground' | 'Underground' | 'Desert' | 'Snow' | 'Sky' | 'Forest';
export type PossibleCourseTheme = | ThemesInBothCourseAndWorld | 'Underwater' | 'Ghost House' | 'Airship' | 'Castle';
export type PossibleWorldTheme = | ThemesInBothCourseAndWorld | 'Volcano' | 'Space';
export type PossibleTheme = | PossibleCourseTheme | PossibleWorldTheme;


/**
 * @enum
 */
export class Themes
    implements PropertyGetterWithReference<PossibleTheme, IsInThemeProperty, [CourseTheme, WorldTheme]> {
    public static readonly GROUND = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean {
            return property.isInGroundTheme;
        }
    }('Ground');
    public static readonly UNDERGROUND = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean | null {
            return property.isInUndergroundTheme;
        }
    }('Underground');
    public static readonly UNDERWATER = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean | null {
            return property.isInUnderwaterTheme;
        }
    }('Underwater');
    public static readonly DESERT = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean | null {
            return property.isInDesertTheme;
        }
    }('Desert');
    public static readonly SNOW = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean | null {
            return property.isInSnowTheme;
        }
    }('Snow');
    public static readonly SKY = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean | null {
            return property.isInSkyTheme;
        }
    }('Sky');
    public static readonly FOREST = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean | null {
            return property.isInForestTheme;
        }
    }('Forest');
    public static readonly GHOST_HOUSE = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean | null {
            return property.isInGhostHouseTheme;
        }
    }('Ghost House');
    public static readonly AIRSHIP = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean | null {
            return property.isInAirshipTheme;
        }
    }('Airship');
    public static readonly CASTLE = new class extends Themes {
        public _get(property: IsInThemeProperty): boolean | null {
            return property.isInCastleTheme;
        }
    }('Castle', 'Castle - Volcano');

    public static readonly VOLCANO = new Themes('Volcano', 'Castle - Volcano');
    public static readonly SPACE = new Themes('Space');


    private static __COURSES: readonly Themes[];
    private static __WORLDS: readonly Themes[];
    private static __VALUES: readonly Themes[];

    #references?: [CourseTheme, WorldTheme];
    #courseTheme?: CourseTheme;
    #worldTheme?: WorldTheme;
    readonly #englishName;
    readonly #imagePath;

    private constructor(englishNameAndImagePath: PossibleTheme)
    private constructor(englishName: PossibleTheme, basicImagePath: string)
    private constructor(englishName: PossibleTheme, basicImagePath: string = englishName) {
        this.#englishName = englishName;
        this.#imagePath = '/game/themes/' + basicImagePath;
    }

    public get englishName() {
        return this.#englishName;
    }

    protected _get(property: IsInThemeProperty): boolean | null {
        return false;
    }

    public get(property: IsInThemeProperty): boolean {
        return this._get(property) ?? false;
    }

    public get references() {
        return this.#references ?? (this.#references = ThemeLoader.get.load().get(this.englishName)!);
    }

    public get courseTheme() {
        return this.#courseTheme ?? (this.#courseTheme = this.references[0]);
    }

    public get worldTheme() {
        return this.#worldTheme ?? (this.#worldTheme = this.references[1]);
    }

    public get imagePath() {
        return this.#imagePath;
    }

    public get smallImagePath() {
        return this.imagePath + ' (small).png';
    }

    public get longImagePath() {
        return this.imagePath + ' (long).jpg';
    }


    public static get courseThemes(): readonly Themes[] {
        return this.__COURSES === undefined
            ? this.__COURSES = [
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
            ]
            : this.__COURSES;
    }

    public static get worldThemes(): readonly Themes[] {
        return this.__WORLDS === undefined
            ? this.__WORLDS = [
                this.GROUND,
                this.UNDERGROUND,
                this.DESERT,
                this.SNOW,
                this.SKY,
                this.FOREST,
                this.VOLCANO,
                this.SPACE,
            ]
            : this.__WORLDS;
    }

    public static getValue(value: Themes | PossibleTheme): Themes
    public static getValue(value: string): Themes | null
    public static getValue(value: Themes | string): Themes | null
    public static getValue(value: Themes | string): Themes | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): readonly Themes[] {
        return this.__VALUES ?? (this.__VALUES = [
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
        ]);
    }

}
