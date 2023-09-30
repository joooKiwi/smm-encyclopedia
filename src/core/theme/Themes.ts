import type {CollectionHolder, CollectionIterator}              from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                   from 'core/ClassWithReference'
import type {PropertyGetter, PropertyReferenceGetter}                              from 'core/PropertyGetter'
import type {PossibleOtherEntities}                                                from 'core/entity/Entity'
import type {ThemeProperty}                                                        from 'core/entity/properties/theme/ThemeProperty'
import type {ThemeReferences}                                                      from 'core/entity/properties/theme/ThemeReferences'
import type {CourseTheme}                                                          from 'core/theme/CourseTheme'
import type {Names, Ordinals, PossibleEnglishName, PossibleGameName}               from 'core/theme/Themes.types'
import type {CourseAndWorldTheme}                                                  from 'core/theme/CourseAndWorldTheme'
import type {WorldTheme}                                                           from 'core/theme/WorldTheme'
import type {EndlessMarioThemeImageFile, LargeThemeImageFile, SmallThemeImageFile} from 'core/theme/file/ThemeImageFile'

import {ThemeComponent}        from 'core/theme/Theme.component'
import {ThemeLoader}           from 'core/theme/Theme.loader'
import * as FileCreator        from 'core/theme/file/fileCreator'
import {EMPTY_ARRAY}           from 'util/emptyVariables'
import {StringContainer}       from 'util/StringContainer'
import {getValueByEnglishName} from 'util/utilitiesMethods'

export class Themes
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CourseAndWorldTheme>,
        ClassWithEnglishName<PossibleEnglishName>,
        PropertyReferenceGetter<ThemeReferences, PossibleOtherEntities>,
        PropertyGetter<ThemeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly GROUND =      new class Themes_Ground extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInGroundTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInGroundTheme'] {
            return referenceProperty.referenceInGroundTheme
        }

    }('Ground', 'plain',)
    public static readonly UNDERGROUND = new class Themes_Underground extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInUndergroundTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInUndergroundTheme'] {
            return referenceProperty.referenceInUndergroundTheme
        }

    }('Underground', 'underground',)
    public static readonly UNDERWATER =  new class Themes_Underwater extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInUnderwaterTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInUnderwaterTheme'] {
            return referenceProperty.referenceInUnderwaterTheme
        }

    }('Underwater', 'water',)
    public static readonly DESERT =      new class Themes_Desert extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInDesertTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInDesertTheme'] {
            return referenceProperty.referenceInDesertTheme
        }

    }('Desert', 'desert',)
    public static readonly SNOW =        new class Themes_Snow extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInSnowTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInSnowTheme'] {
            return referenceProperty.referenceInSnowTheme
        }

    }('Snow', 'snow',)
    public static readonly SKY =         new class Themes_Sky extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInSkyTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInSkyTheme'] {
            return referenceProperty.referenceInSkyTheme
        }

    }('Sky', 'athletic',)
    public static readonly FOREST =      new class Themes_Forest extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInForestTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInForestTheme'] {
            return referenceProperty.referenceInForestTheme
        }

    }('Forest', 'woods',)
    public static readonly GHOST_HOUSE = new class Themes_GhostHouse extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInGhostHouseTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInGhostHouseTheme'] {
            return referenceProperty.referenceInGhostHouseTheme
        }

    }('Ghost House', 'hauntedhouse',)
    public static readonly AIRSHIP =     new class Themes_Airship extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInAirshipTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInAirshipTheme'] {
            return referenceProperty.referenceInAirshipTheme
        }

    }('Airship', 'airship',)
    public static readonly CASTLE =      new class Themes_Castle extends Themes {

        protected override _get(property: ThemeProperty,) {
            return property.isInCastleTheme
        }

        public override getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInCastleTheme'] {
            return referenceProperty.referenceInCastleTheme
        }

    }('Castle', 'castle',)

    public static readonly VOLCANO =     new class Themes_Volcano extends Themes {

        public override get endlessMarioImageFile() {
            return null
        }

    }('Volcano', 'magma',)
    public static readonly SPACE =       new class Themes_Space extends Themes   {

        public override get endlessMarioImageFile() {
            return null
        }

    }('Space', 'night',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<Themes, typeof Themes> = class CompanionEnum_Themes
        extends CompanionEnum<Themes, typeof Themes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Themes

        private constructor() {
            super(Themes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Themes()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme>
    static #COURSES: readonly Themes[]
    static #COURSES_SMM1: readonly Themes[]
    static #WORLDS: readonly Themes[]

    #reference?: CourseAndWorldTheme
    readonly #englishName
    readonly #gameName
    #smallImageFile?: SmallThemeImageFile
    #largeImageFile?: LargeThemeImageFile
    #endlessMarioImageFile?: NullOr<EndlessMarioThemeImageFile>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName, gameName: PossibleGameName,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#gameName = gameName
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme> {
        return this.#REFERENCE_MAP ??= ThemeLoader.get.load()
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

        return this.#gameName
    public get gameName(): PossibleName_InFile {
    }

    public get courseTheme(): CourseTheme {
        return this.reference.courseTheme
    }

    public get worldTheme(): WorldTheme {
        return this.reference.worldTheme
    }


    public get smallImageFile(): SmallThemeImageFile {
        return this.#smallImageFile ??= FileCreator.smallImageFile(this,)
    }

    public get largeImageFile(): LargeThemeImageFile {
        return this.#largeImageFile ??= FileCreator.largeImageFile(this,)
    }

    public get endlessMarioImageFile(): NullOr<EndlessMarioThemeImageFile> {
        return this.#endlessMarioImageFile ??= FileCreator.endlessMarioImageFile(this,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected _get(property: ThemeProperty,): NullOrBoolean {
        return false
    }

    public get(property: ThemeProperty,): boolean {
        return this._get(property) ?? false
    }

    public getReference(referenceProperty: ThemeReferences,): PossibleOtherEntities {
        return EMPTY_ARRAY
    }

    public renderSingleComponent(isSmallPath: boolean,) {
        return ThemeComponent.renderSingleComponent(this, isSmallPath,)
    }


    public static get courseThemes(): readonly Themes[] {
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

    public static get courseThemes_smm1(): readonly Themes[] {
        return this.#COURSES_SMM1 ??= [
            this.GROUND,
            this.UNDERGROUND,
            this.UNDERWATER,
            this.GHOST_HOUSE,
            this.AIRSHIP,
            this.CASTLE,
        ]
    }

    public static get worldThemes(): readonly Themes[] {
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

    public static getValueByName(value: Nullable<| Themes | string>,): Themes {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<Themes>,): Themes {
        return Themes.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<Themes> {
        return Themes.CompanionEnum.get.values
    }

    public static [Symbol.iterator](): CollectionIterator<Themes> {
        return Themes.CompanionEnum.get[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
