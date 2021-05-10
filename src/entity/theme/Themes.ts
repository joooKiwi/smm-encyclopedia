import {ThemeLoader} from "./ThemeLoader";
import {CourseTheme} from "./CourseTheme";
import {WorldTheme} from "./WorldTheme";
import {Entity} from "../simple/Entity";

type ThemesInBothCourseAndWorld = 'Ground' | 'Underground' | 'Desert' | 'Snow' | 'Sky' | 'Forest';
export type PossibleCourseTheme = ThemesInBothCourseAndWorld | 'Underwater' | 'Ghost House' | 'Airship' | 'Castle';
export type PossibleWorldTheme = ThemesInBothCourseAndWorld | 'Volcano' | 'Space';
export type PossibleTheme = PossibleCourseTheme | PossibleWorldTheme;


/**
 * @enum
 */
export abstract class Themes {
    public static readonly GROUND = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInGroundTheme;
        }
    }('Ground');
    public static readonly UNDERGROUND = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInUndergroundTheme;
        }
    }('Underground');
    public static readonly UNDERWATER = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInUnderwaterTheme;
        }
    }('Underwater');
    public static readonly DESERT = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInDesertTheme;
        }
    }('Desert');
    public static readonly SNOW = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInSnowTheme;
        }
    }('Snow');
    public static readonly SKY = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInSkyTheme;
        }
    }('Sky');
    public static readonly FOREST = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInForestTheme;
        }
    }('Forest');
    public static readonly GHOST_HOUSE = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInGhostHouseTheme;
        }
    }('Ghost House');
    public static readonly AIRSHIP = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInAirshipTheme;
        }
    }('Airship');
    public static readonly CASTLE = new class extends Themes {
        public _isEntityOnTheme(entity: Entity): boolean | null {
            return entity.isInCastleTheme;
        }
    }('Castle');

    public static readonly VOLCANO = new class extends Themes {
    }('Volcano');
    public static readonly SPACE = new class extends Themes {
    }('Space');

    private static __COURSES: readonly Themes[];
    private static __WORLDS: readonly Themes[];
    private static __VALUES: readonly Themes[];

    #references?: [CourseTheme, WorldTheme];
    #courseTheme?: CourseTheme;
    #worldTheme?: WorldTheme;
    readonly #englishName;

    private constructor(englishName: PossibleTheme) {
        this.#englishName = englishName;
    }

    public get englishName() {
        return this.#englishName;
    }

    protected _isEntityOnTheme(entity: Entity): boolean | null {
        return false;
    }

    public isEntityOnTheme(entity: Entity): boolean {
        return this._isEntityOnTheme(entity) ?? false;
    }

    public get references() {
        return this.#references ?? (this.#references = this.#references = ThemeLoader.get.load().get(this.englishName)!);
    }

    public get courseTheme() {
        return this.#courseTheme ?? (this.#courseTheme = this.references[0]);
    }

    public get worldTheme() {
        return this.#worldTheme ?? (this.#worldTheme = this.references[1]);
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
        return this.__VALUES === undefined
            ? this.__VALUES = [
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
            ]
            : this.__VALUES;
    }

}
