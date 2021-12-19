import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                       from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                                                                                                                                                                                                                                         from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                                                                                                                                                         from '../ClassWithReference';
import type {CourseAndWorldTheme, DayGameName, DayOrNightGameName, EnumArray, EnumArray_OnlyCourseTheme, EnumArray_OnlyCourseTheme_SMM1, EnumArray_OnlyWorldTheme, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, LargeImagePath, Names, NightGameName, Ordinals, PossibleEnglishName, PossibleGameName, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue, SimpleImagePath, SmallImagePath} from './Themes.types';
import type {CourseTheme}                                                                                                                                                                                                                                                                                                                                                                                                                                from './CourseTheme';
import type {PossibleOtherEntities}                                                                                                                                                                                                                                                                                                                                                                                                                      from '../entity/Entity';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                                                                                                                                                                                                                                                                                    from '../PropertyGetter';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                            from '../../util/enum/Enum.types';
import type {ThemeProperty}                                                                                                                                                                                                                                                                                                                                                                                                                              from '../entity/properties/ThemeProperty';
import type {ThemeReferences}                                                                                                                                                                                                                                                                                                                                                                                                                            from '../entity/properties/ThemeReferences';
import type {WorldTheme}                                                                                                                                                                                                                                                                                                                                                                                                                                 from './WorldTheme';

import {Enum}            from '../../util/enum/Enum';
import {EmptyEntity}     from '../entity/EmptyEntity';
import {StringContainer} from '../../util/StringContainer';
import {ThemeComponent}  from './Theme.component';

/**
 * @recursiveReferenceVia<{@link ThemeBuilder}, {@link ThemeLoader}>
 * @recursiveReference<{@link ThemeLoader}>
 */
export class Themes
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CourseAndWorldTheme>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath>,
        PropertyReferenceGetter<ThemeReferences, PossibleOtherEntities>,
        PropertyGetter<ThemeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly GROUND =      new class Themes_Ground extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInGroundTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInGroundTheme'] {
            return referenceProperty.referenceInGroundTheme;
        }

    }     ('Ground', 'plain',);
    public static readonly UNDERGROUND = new class Themes_Underground extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInUndergroundTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInUndergroundTheme'] {
            return referenceProperty.referenceInUndergroundTheme;
        }

    }('Underground', 'underground',);
    public static readonly UNDERWATER =  new class Themes_Underwater extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInUnderwaterTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInUnderwaterTheme'] {
            return referenceProperty.referenceInUnderwaterTheme;
        }

    } ('Underwater', 'water',);
    public static readonly DESERT =      new class Themes_Desert extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInDesertTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInDesertTheme'] {
            return referenceProperty.referenceInDesertTheme;
        }

    }     ('Desert', 'desert',);
    public static readonly SNOW =        new class Themes_Snow extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInSnowTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInSnowTheme'] {
            return referenceProperty.referenceInSnowTheme;
        }

    }       ('Snow', 'snow',);
    public static readonly SKY =         new class Themes_Sky extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInSkyTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInSkyTheme'] {
            return referenceProperty.referenceInSkyTheme;
        }

    }        ('Sky', 'athletic',);
    public static readonly FOREST =      new class Themes_Forest extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInForestTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInForestTheme'] {
            return referenceProperty.referenceInForestTheme;
        }

    }     ('Forest', 'woods',);
    public static readonly GHOST_HOUSE = new class Themes_GhostHouse extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInGhostHouseTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInGhostHouseTheme'] {
            return referenceProperty.referenceInGhostHouseTheme;
        }

    } ('Ghost House', 'hauntedhouse',);
    public static readonly AIRSHIP =     new class Themes_Airship extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInAirshipTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInAirshipTheme'] {
            return referenceProperty.referenceInAirshipTheme;
        }

    }    ('Airship', 'airship',);
    public static readonly CASTLE =      new class Themes_Castle extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInCastleTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInCastleTheme'] {
            return referenceProperty.referenceInCastleTheme;
        }

    }     ('Castle', 'castle', 'Castle - Volcano',);

    public static readonly VOLCANO =     new Themes                                       ('Volcano', null,'Castle - Volcano',);
    public static readonly SPACE =       new class Themes_Space extends Themes {

        public get longImagePath(): LargeImagePath {
            //FIXME a temporary fix to still get the image until the png image can be retrieved.
            return `${this.imagePath} (large).jpg` as LargeImagePath;
        }

    }       ('Space', null,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    static #map?: ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme>;
    static #COURSES: EnumArray_OnlyCourseTheme;
    static #COURSES_SMM1: EnumArray_OnlyCourseTheme_SMM1;
    static #WORLDS: EnumArray_OnlyWorldTheme;

    #reference?: CourseAndWorldTheme;
    #courseTheme?: CourseTheme;
    #worldTheme?: WorldTheme;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #gameName: | PossibleGameName | null;
    readonly #imagePath: PossibleImagePath;
    #smallImagePath?: SmallImagePath;
    #largeImagePath?: LargeImagePath;

    //endregion -------------------- Attributes --------------------

    // @ts-ignore
    protected constructor(enumeration: Themes,)
    private constructor(englishNameAndImagePath: PossibleEnglishName, gameName: | PossibleGameName | null,)
    private constructor(englishName: PossibleEnglishName, gameName: | PossibleGameName | null, basicImagePath: SimpleImagePath,)
    private constructor(englishName_or_enumeration: | PossibleEnglishName | Themes, gameName: | PossibleGameName | null, basicImagePath: | SimpleImagePath | PossibleEnglishName = englishName_or_enumeration as PossibleEnglishName,) {
        super();
        if (englishName_or_enumeration instanceof Themes) {
            this.#englishName = englishName_or_enumeration.#englishName;
            this.#gameName = englishName_or_enumeration.gameName;
            this.#imagePath = englishName_or_enumeration.#imagePath;
        } else {
            this.#englishName = new StringContainer(englishName_or_enumeration);
            this.#gameName = gameName;
            this.#imagePath = `/game/themes/${basicImagePath}` as PossibleImagePath;
        }
    }

    //region -------------------- Getter methods --------------------


    private static get __map() {
        return this.#map ??= require('./Theme.loader').ThemeLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): CourseAndWorldTheme {
        return this.#reference ??= Themes.__map.get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get gameName(): | PossibleGameName | null {
        return this.#gameName;
    }

    public get courseTheme(): CourseTheme {
        return this.#courseTheme ??= this.reference[0];
    }

    public get worldTheme(): WorldTheme {
        return this.#worldTheme ??= this.reference[1];
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath;
    }

    public get smallImagePath(): SmallImagePath {
        return this.#smallImagePath ??= `${this.imagePath} (small).png`;
    }

    public get longImagePath(): LargeImagePath {
        return this.#largeImagePath ??= `${this.imagePath} (large).png`;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected _get(property: ThemeProperty,): | boolean | null {
        return false;
    }

    public get(property: ThemeProperty,): boolean {
        return this._get(property) ?? false;
    }

    public getReference(referenceProperty: ThemeReferences,): PossibleOtherEntities {
        return [EmptyEntity.get];
    }

    public getGameName(name: null, isNightTheme: any,): ''
    public getGameName<V extends string = string, >(name: | V | null, isNightTheme: false,): | '' | DayGameName<V>
    public getGameName<V extends string = string, >(name: V, isNightTheme: false,): | '' | DayGameName<V>
    public getGameName<V extends string = string, >(name: | V | null, isNightTheme: true,): | '' | NightGameName<V>
    public getGameName<V extends string = string, >(name: V, isNightTheme: true,): | '' | NightGameName<V>
    public getGameName<B extends boolean = boolean, V extends string = string, >(name: | V | null, isNightTheme: B,): | '' | DayOrNightGameName<B, V>
    public getGameName<B extends boolean = boolean, V extends string = string, >(name: V, isNightTheme: B,): | '' | DayOrNightGameName<B, V>
    public getGameName(name: | string | null, isNightTheme: boolean,) {
        if (name == null)
            return '';
        const text = this.gameName;
        if (text == null)
            return '';
        return isNightTheme ? `${name}_${text}_night` : `${name}_${text}`;
    }

    public renderSingleComponent(isSmallPath: boolean,) {
        return ThemeComponent.renderSingleComponent(this, isSmallPath,);
    }


    public static get courseThemes(): EnumArray_OnlyCourseTheme {
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

    public static get courseThemes_smm1(): EnumArray_OnlyCourseTheme_SMM1 {
        return this.#COURSES_SMM1 ??= [
            this.GROUND,
            this.UNDERGROUND,
            this.UNDERWATER,
            this.SKY,
            this.GHOST_HOUSE,
            this.AIRSHIP,
            this.CASTLE,
        ];
    }

    public static get worldThemes(): EnumArray_OnlyWorldTheme {
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

    protected get _static(): StaticReference<Themes> {
        return Themes;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends Themes = Themes, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Themes
    public static getValue(value: PossibleValue,): | Themes | null
    public static getValue(value: PossibleValue,) {
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

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
