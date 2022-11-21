import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                                                                                                                                                   from '../ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                                                                                                     from '../ClassWithReference'
import type {CourseAndWorldTheme}                                                                                                                                                                                                                                    from './CourseAndWorldTheme'
import type {DayGameName, DayOrNightGameName, EndlessMarioImagePath, LargeImagePath, Names, NightGameName, OnlyCourseThemes, OnlyCourseThemesInSMM1, OnlyWorldThemes, Ordinals, PossibleEnglishName, PossibleGameName, PossibleGameName_CourseTheme, SmallImagePath} from './Themes.types'
import type {CourseTheme}                                                                                                                                                                                                                                            from './CourseTheme'
import type {PossibleOtherEntities}                                                                                                                                                                                                                                  from '../entity/Entity'
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                                                                                                from '../PropertyGetter'
import type {ThemeProperty}                                                                                                                                                                                                                                          from '../entity/properties/theme/ThemeProperty'
import type {ThemeReferences}                                                                                                                                                                                                                                        from '../entity/properties/theme/ThemeReferences'
import type {WorldTheme}                                                                                                                                                                                                                                             from './WorldTheme'

import {BASE_PATH}             from '../../variables'
import {EmptyEntity}           from '../entity/EmptyEntity'
import {getValueByEnglishName} from '../../util/utilitiesMethods'
import {Import}                from '../../util/DynamicImporter'
import {StringContainer}       from '../../util/StringContainer'
import {ThemeComponent}        from './Theme.component'

/**
 * @recursiveReferenceVia {@link ThemeBuilder} → {@link ThemeLoader}
 * @recursiveReference {@link ThemeLoader}
 * @classWithDynamicImport {@link ThemeLoader}
 */
export class Themes
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CourseAndWorldTheme>,
        ClassWithEnglishName<PossibleEnglishName>,
        PropertyReferenceGetter<ThemeReferences, PossibleOtherEntities>,
        PropertyGetter<ThemeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly GROUND =      new class Themes_Ground extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInGroundTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInGroundTheme'] {
            return referenceProperty.referenceInGroundTheme
        }

    }('Ground', 'plain',)
    public static readonly UNDERGROUND = new class Themes_Underground extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInUndergroundTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInUndergroundTheme'] {
            return referenceProperty.referenceInUndergroundTheme
        }

    }('Underground', 'underground',)
    public static readonly UNDERWATER =  new class Themes_Underwater extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInUnderwaterTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInUnderwaterTheme'] {
            return referenceProperty.referenceInUnderwaterTheme
        }

    }('Underwater', 'water',)
    public static readonly DESERT =      new class Themes_Desert extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInDesertTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInDesertTheme'] {
            return referenceProperty.referenceInDesertTheme
        }

    }('Desert', 'desert',)
    public static readonly SNOW =        new class Themes_Snow extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInSnowTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInSnowTheme'] {
            return referenceProperty.referenceInSnowTheme
        }

    }('Snow', 'snow',)
    public static readonly SKY =         new class Themes_Sky extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInSkyTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInSkyTheme'] {
            return referenceProperty.referenceInSkyTheme
        }

    }('Sky', 'athletic',)
    public static readonly FOREST =      new class Themes_Forest extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInForestTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInForestTheme'] {
            return referenceProperty.referenceInForestTheme
        }

    }('Forest', 'woods',)
    public static readonly GHOST_HOUSE = new class Themes_GhostHouse extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInGhostHouseTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInGhostHouseTheme'] {
            return referenceProperty.referenceInGhostHouseTheme
        }

    }('Ghost House', 'hauntedhouse',)
    public static readonly AIRSHIP =     new class Themes_Airship extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInAirshipTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInAirshipTheme'] {
            return referenceProperty.referenceInAirshipTheme
        }

    }('Airship', 'airship',)
    public static readonly CASTLE =      new class Themes_Castle extends Themes {

        protected override _get(property: ThemeProperty,): | boolean | null {
            return property.isInCastleTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInCastleTheme'] {
            return referenceProperty.referenceInCastleTheme
        }

    }('Castle', 'castle',)

    public static readonly VOLCANO =     new class Themes_Volcano extends Themes {

        public override get endlessMarioImagePath() {
            return null
        }

    }('Volcano', 'magma',)
    public static readonly SPACE =       new class Themes_Space extends Themes   {

        public override get endlessMarioImagePath() {
            return null
        }

    }('Space', 'night',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Themes

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme>
    static #COURSES: OnlyCourseThemes
    static #COURSES_SMM1: OnlyCourseThemesInSMM1
    static #WORLDS: OnlyWorldThemes

    #reference?: CourseAndWorldTheme
    readonly #englishName: StringContainer<PossibleEnglishName>
    readonly #gameName: PossibleGameName
    #smallImagePath?: SmallImagePath
    #largeImagePath?: LargeImagePath
    #endlessMarioImagePath?: | EndlessMarioImagePath | null

    //endregion -------------------- Fields --------------------

    // @ts-ignore
    protected constructor(enumeration: Themes,)
    private constructor(englishNameAndImagePath: PossibleEnglishName, gameName: PossibleGameName,)
    private constructor(englishName_or_enumeration: | PossibleEnglishName | Themes, gameName: PossibleGameName,) {
        super()
        if (englishName_or_enumeration instanceof Themes) {
            this.#englishName = englishName_or_enumeration.#englishName
            this.#gameName = englishName_or_enumeration.gameName
        } else {
            this.#englishName = new StringContainer(englishName_or_enumeration)
            this.#gameName = gameName
        }
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme> {
        return this.#REFERENCE_MAP ??= Import.ThemeLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): CourseAndWorldTheme {
        return this.#reference ??= Themes.REFERENCE_MAP.get(this.englishName)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get gameName(): PossibleGameName {
        return this.#gameName
    }

    public get courseTheme(): CourseTheme {
        return this.reference.courseTheme
    }

    public get worldTheme(): WorldTheme {
        return this.reference.worldTheme
    }

    public get smallImagePath(): SmallImagePath {
        return this.#smallImagePath ??= `/${BASE_PATH}/theme/Lyt_E_SceneSmall_${this.gameName}_00.tiff`
    }

    public get longImagePath(): LargeImagePath {
        return this.#largeImagePath ??= `/${BASE_PATH}/theme/Lyt_E_Scene_${this.gameName}_00.tiff`
    }

    public get endlessMarioImagePath(): | EndlessMarioImagePath | null {
        return this.#endlessMarioImagePath ??= `/${BASE_PATH}/theme/WM_GameSkin_${this.gameName as PossibleGameName_CourseTheme}_00^l.tiff`
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected _get(property: ThemeProperty,): | boolean | null {
        return false
    }

    public get(property: ThemeProperty,): boolean {
        return this._get(property) ?? false
    }

    public getReference(referenceProperty: ThemeReferences,): PossibleOtherEntities {
        return [EmptyEntity.get,]
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
            return ''
        const text = this.gameName
        if (text == null)
            return ''
        return isNightTheme ? `${name}_${text}_night` : `${name}_${text}`
    }

    public renderSingleComponent(isSmallPath: boolean,) {
        return ThemeComponent.renderSingleComponent(this, isSmallPath,)
    }


    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(it => it.englishName).toArray()
    }

    public static get courseThemes(): OnlyCourseThemes {
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
        ]
    }

    public static get courseThemes_smm1(): OnlyCourseThemesInSMM1 {
        return this.#COURSES_SMM1 ??= [
            this.GROUND,
            this.UNDERGROUND,
            this.UNDERWATER,
            this.GHOST_HOUSE,
            this.AIRSHIP,
            this.CASTLE,
        ]
    }

    public static get worldThemes(): OnlyWorldThemes {
        return this.#WORLDS ??= [
            this.GROUND,
            this.UNDERGROUND,
            this.DESERT,
            this.SNOW,
            this.SKY,
            this.FOREST,
            this.VOLCANO,
            this.SPACE,
        ]
    }

    // public static getValueByName<T extends string, >(value: | Themes | T | null | undefined,): ThemesByName<T>
    public static getValueByName(value: | Themes | string | null | undefined,): Themes {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return Themes
    }

    public static getValue(value: PossibleValueByEnumerable<Themes>,): Themes {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Themes> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
