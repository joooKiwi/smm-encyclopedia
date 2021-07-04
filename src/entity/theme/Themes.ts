import {CourseTheme}                 from './CourseTheme';
import {PropertyGetterWithReference} from '../PropertyGetter';
import {ThemeLoader}                 from './ThemeLoader';
import {ThemeProperty}               from '../properties/ThemeProperty';
import {WorldTheme}                  from './WorldTheme';

//region -------------------- themes texts --------------------

type ThemesInBothCourseAndWorld = | 'Ground' | 'Underground' | 'Desert' | 'Snow' | 'Sky' | 'Forest';
export type PossibleCourseTheme = | ThemesInBothCourseAndWorld | 'Underwater' | 'Ghost House' | 'Airship' | 'Castle';
export type PossibleWorldTheme = | ThemesInBothCourseAndWorld | 'Volcano' | 'Space';
export type PossibleTheme = | PossibleCourseTheme | PossibleWorldTheme;

//endregion -------------------- themes texts --------------------

/**
 * @enum
 */
export class Themes
    implements PropertyGetterWithReference<PossibleTheme, ThemeProperty, readonly [CourseTheme, WorldTheme]> {

    //region -------------------- enum instances --------------------

    public static readonly GROUND = new class extends Themes {
        public _get(property: ThemeProperty): boolean {
            return property.isInGroundTheme;
        }
    }('Ground');
    public static readonly UNDERGROUND = new class extends Themes {
        public _get(property: ThemeProperty): boolean | null {
            return property.isInUndergroundTheme;
        }
    }('Underground');
    public static readonly UNDERWATER = new class extends Themes {
        public _get(property: ThemeProperty): boolean | null {
            return property.isInUnderwaterTheme;
        }
    }('Underwater');
    public static readonly DESERT = new class extends Themes {
        public _get(property: ThemeProperty): boolean | null {
            return property.isInDesertTheme;
        }
    }('Desert');
    public static readonly SNOW = new class extends Themes {
        public _get(property: ThemeProperty): boolean | null {
            return property.isInSnowTheme;
        }
    }('Snow');
    public static readonly SKY = new class extends Themes {
        public _get(property: ThemeProperty): boolean | null {
            return property.isInSkyTheme;
        }
    }('Sky');
    public static readonly FOREST = new class extends Themes {
        public _get(property: ThemeProperty): boolean | null {
            return property.isInForestTheme;
        }
    }('Forest');
    public static readonly GHOST_HOUSE = new class extends Themes {
        public _get(property: ThemeProperty): boolean | null {
            return property.isInGhostHouseTheme;
        }
    }('Ghost House');
    public static readonly AIRSHIP = new class extends Themes {
        public _get(property: ThemeProperty): boolean | null {
            return property.isInAirshipTheme;
        }
    }('Airship');
    public static readonly CASTLE = new class extends Themes {
        public _get(property: ThemeProperty): boolean | null {
            return property.isInCastleTheme;
        }
    }('Castle', 'Castle - Volcano');

    public static readonly VOLCANO = new Themes('Volcano', 'Castle - Volcano');
    public static readonly SPACE = new Themes('Space');

    //endregion -------------------- enum instances --------------------

    static #COURSES: readonly Themes[];
    //region -------------------- Attributes --------------------
    static #WORLDS: readonly Themes[];
    static #VALUES: readonly Themes[];

    #references?: readonly [CourseTheme, WorldTheme];
    #courseTheme?: CourseTheme;
    #worldTheme?: WorldTheme;
    readonly #englishName;
    readonly #imagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(englishNameAndImagePath: PossibleTheme)
    private constructor(englishName: PossibleTheme, basicImagePath: string)
    private constructor(englishName: PossibleTheme, basicImagePath: string = englishName) {
        this.#englishName = englishName;
        this.#imagePath = '/game/themes/' + basicImagePath;
    }

    //region -------------------- Methods --------------------

    public get englishName() {
        return this.#englishName;
    }

    protected _get(property: ThemeProperty): boolean | null {
        return false;
    }

    public get(property: ThemeProperty): boolean {
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
        return this.imagePath + ' (large).jpg';
    }


    public static get courseThemes(): readonly Themes[] {
        return this.#COURSES ?? (this.#COURSES = [
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
        ]);
    }

    public static get worldThemes(): readonly Themes[] {
        return this.#WORLDS ?? (this.#WORLDS = [
            this.GROUND,
            this.UNDERGROUND,
            this.DESERT,
            this.SNOW,
            this.SKY,
            this.FOREST,
            this.VOLCANO,
            this.SPACE,
        ]);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public static getValue(value: Themes | PossibleTheme): Themes
    public static getValue(value: string): Themes | null
    public static getValue(value: Themes | string): Themes | null
    public static getValue(value: Themes | string): Themes | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): readonly Themes[] {
        return this.#VALUES ?? (this.#VALUES = [
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

    public static* [Symbol.iterator]() {
        for (const value of this.values)
            yield value;
    }

    //endregion -------------------- enum methods --------------------

}
