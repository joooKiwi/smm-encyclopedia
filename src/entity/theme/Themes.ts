import type {ClassWithEnglishName}                                                                                                                               from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                 from '../ClassWithReference';
import type {CourseAndWorldTheme, PossibleTheme, ThemePath, ThemesArray, ThemesArrayAsOnlyCourseTheme, ThemesArrayAsOnlyWorldTheme, ThemesNames, ThemesOrdinals} from './Themes.types';
import type {CourseTheme}                                                                                                                                        from './CourseTheme';
import type {Entity}                                                                                                                                             from '../simple/Entity';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                            from '../PropertyGetter';
import type {ThemeProperty}                                                                                                                                      from '../properties/ThemeProperty';
import type {ThemeReferences}                                                                                                                                    from '../properties/ThemeReferences';
import type {WorldTheme}                                                                                                                                         from './WorldTheme';

import {Enum}        from '../../util/enum/Enum';
import {ThemeLoader} from './ThemeLoader';
import {EmptyEntity} from '../simple/EmptyEntity';

/**
 * @recursiveReferenceVia<{@link ThemeBuilder}, {@link ThemeLoader}>
 * @recursiveReference<{@link ThemeLoader}>
 */
export class Themes
    extends Enum<ThemesOrdinals, ThemesNames>
    implements ClassWithReference<readonly [CourseTheme, WorldTheme,]>,
        ClassWithEnglishName<PossibleTheme>,
        PropertyReferenceGetter<ThemeReferences>,
        PropertyGetter<ThemeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly GROUND =      new class Themes_Ground extends Themes {

        public _get(property: ThemeProperty,): boolean {
            return property.isInGroundTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInGroundTheme;
        }

    }     ('Ground',);
    public static readonly UNDERGROUND = new class Themes_Underground extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInUndergroundTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInUndergroundTheme;
        }

    }('Underground',);
    public static readonly UNDERWATER =  new class Themes_Underwater extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInUnderwaterTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInUnderwaterTheme;
        }

    } ('Underwater',);
    public static readonly DESERT =      new class Themes_Desert extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInDesertTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInDesertTheme;
        }

    }     ('Desert',);
    public static readonly SNOW =        new class Themes_Snow extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInSnowTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInSnowTheme;
        }

    }       ('Snow',);
    public static readonly SKY =         new class Themes_Sky extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInSkyTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInSkyTheme;
        }

    }        ('Sky',);
    public static readonly FOREST =      new class Themes_Forest extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInForestTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInForestTheme;
        }

    }     ('Forest',);
    public static readonly GHOST_HOUSE = new class Themes_GhostHouse extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInGhostHouseTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInGhostHouseTheme;
        }

    } ('Ghost House',);
    public static readonly AIRSHIP =     new class Themes_Airship extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInAirshipTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInAirshipTheme;
        }

    }    ('Airship',);
    public static readonly CASTLE =      new class Themes_Castle extends Themes {

        public _get(property: ThemeProperty,): | boolean | null {
            return property.isInCastleTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): Entity {
            return referenceProperty.referenceInCastleTheme;
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

    #reference?: CourseAndWorldTheme;
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

    public get reference(): readonly [CourseTheme, WorldTheme,] {
        return this.#reference ??= ThemeLoader.get.load().get(this.englishName)!;
    }


    public get englishName() {
        return this.#englishName;
    }

    public get courseTheme() {
        return this.#courseTheme ??= this.reference[0];
    }

    public get worldTheme() {
        return this.#worldTheme ??= this.reference[1];
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

    public getReference(referenceProperty: ThemeReferences,): Entity {
        return EmptyEntity.get;
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
