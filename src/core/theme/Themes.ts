import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                        from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                                                                                                                                                                          from '../ClassWithReference';
import type {CourseAndWorldTheme, DayGameName, DayOrNightGameName, EndlessMarioImagePath, EnumArray, EnumArray_OnlyCourseTheme, EnumArray_OnlyCourseTheme_SMM1, EnumArray_OnlyWorldTheme, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, LargeImagePath, Names, NightGameName, Ordinals, PossibleEnglishName, PossibleGameName, PossibleGameName_CourseTheme, PossibleNonNullableValue, PossibleStringValue, PossibleValue, SmallImagePath} from './Themes.types';
import type {CourseTheme}                                                                                                                                                                                                                                                                                                                                                                                                                                                 from './CourseTheme';
import type {PossibleOtherEntities}                                                                                                                                                                                                                                                                                                                                                                                                                                       from '../entity/Entity';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                                                                                                                                                                                                                                                                                                     from '../PropertyGetter';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                                             from '../../util/enum/Enum.types';
import type {ThemeProperty}                                                                                                                                                                                                                                                                                                                                                                                                                                               from '../entity/properties/ThemeProperty';
import type {ThemeReferences}                                                                                                                                                                                                                                                                                                                                                                                                                                             from '../entity/properties/ThemeReferences';
import type {WorldTheme}                                                                                                                                                                                                                                                                                                                                                                                                                                                  from './WorldTheme';

import {Enum}            from '../../util/enum/Enum';
import {StringContainer} from '../../util/StringContainer';
import {Import}          from '../../util/DynamicImporter';
import {ThemeComponent}  from './Theme.component';

/**
 * @recursiveReferenceVia {@link ThemeBuilder} → {@link ThemeLoader}
 * @recursiveReference {@link ThemeLoader}
 * @classWithDynamicImport {@link EmptyEntity}, {@link ThemeLoader}
 */
export class Themes
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CourseAndWorldTheme>,
        ClassWithEnglishName<PossibleEnglishName>,
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

    }     ('Castle', 'castle',);

    public static readonly VOLCANO =     new class Themes_Volcano extends Themes {

        public get endlessMarioImagePath() {
            return null;
        }

    }    ('Volcano', 'magma',);
    public static readonly SPACE =       new class Themes_Space extends Themes   {

        public get endlessMarioImagePath() {
            return null;
        }

    }    ('Space', 'night',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: Themes;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #COURSES: EnumArray_OnlyCourseTheme;
    static #COURSES_SMM1: EnumArray_OnlyCourseTheme_SMM1;
    static #WORLDS: EnumArray_OnlyWorldTheme;

    #reference?: CourseAndWorldTheme;
    #courseTheme?: CourseTheme;
    #worldTheme?: WorldTheme;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #gameName: PossibleGameName;
    #smallImagePath?: SmallImagePath;
    #largeImagePath?: LargeImagePath;
    #endlessMarioImagePath?: | EndlessMarioImagePath | null;

    //endregion -------------------- Attributes --------------------

    // @ts-ignore
    protected constructor(enumeration: Themes,)
    private constructor(englishNameAndImagePath: PossibleEnglishName, gameName: PossibleGameName,)
    private constructor(englishName_or_enumeration: | PossibleEnglishName | Themes, gameName: PossibleGameName,) {
        super();
        if (englishName_or_enumeration instanceof Themes) {
            this.#englishName = englishName_or_enumeration.#englishName;
            this.#gameName = englishName_or_enumeration.gameName;
        } else {
            this.#englishName = new StringContainer(englishName_or_enumeration);
            this.#gameName = gameName;
        }
    }

    //region -------------------- Getter methods --------------------


    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): CourseAndWorldTheme {
        return this.#reference ??= Import.ThemeLoader.get.load().get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get gameName(): PossibleGameName {
        return this.#gameName;
    }

    public get courseTheme(): CourseTheme {
        return this.#courseTheme ??= this.reference[0];
    }

    public get worldTheme(): WorldTheme {
        return this.#worldTheme ??= this.reference[1];
    }

    public get smallImagePath(): SmallImagePath {
        return this.#smallImagePath ??= `/theme/Lyt_E_SceneSmall_${this.gameName}_00.tiff`;
    }

    public get longImagePath(): LargeImagePath {
        return this.#largeImagePath ??= `/theme/Lyt_E_Scene_${this.gameName}_00.tiff`;
    }

    public get endlessMarioImagePath(): | EndlessMarioImagePath | null {
        return this.#endlessMarioImagePath ??= `/theme/WM_GameSkin_${this.gameName as PossibleGameName_CourseTheme}_00^l.tiff`;
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
        return [Import.EmptyEntity.get,];
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


    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(limit => limit.englishName);
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


    protected static _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
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
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
