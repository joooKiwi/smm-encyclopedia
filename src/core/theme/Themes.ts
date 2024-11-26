import type {NullOr} from '@joookiwi/type'
import {Enum}        from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                      from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                        from 'core/ClassWithReference'
import type {PropertyGetter, PropertyReferenceGetter}                                                   from 'core/PropertyGetter'
import type {Entity, PossibleOtherEntities}                                                             from 'core/entity/Entity'
import type {ThemeProperty}                                                                             from 'core/entity/properties/theme/ThemeProperty'
import type {CourseTheme}                                                                               from 'core/theme/CourseTheme'
import type {Names, Ordinals, PossibleEnglishName}                                                      from 'core/theme/Themes.types'
import type {CourseAndWorldTheme}                                                                       from 'core/theme/CourseAndWorldTheme'
import type {WorldTheme}                                                                                from 'core/theme/WorldTheme'
import type {EndlessMarioThemeImageFile, LargeThemeImageFile, PossibleName_InFile, SmallThemeImageFile} from 'core/theme/file/ThemeImageFile'
import type {CompanionEnumByNameSingleton}                                                              from 'util/enumerable/Singleton.types'

import * as FileCreator                 from 'core/theme/file/fileCreator'
import {Empty}                          from 'util/emptyVariables'
import {Import}                         from 'util/DynamicImporter'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

export abstract class Themes<const NAME extends PossibleEnglishName = PossibleEnglishName,
    const NAME_IN_FILE extends PossibleName_InFile = PossibleName_InFile, >
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CourseAndWorldTheme>,
        ClassWithEnglishName<NAME, Lowercase<NAME>>,
        PropertyReferenceGetter<Entity, PossibleOtherEntities>,
        PropertyGetter<ThemeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly GROUND =      new class Themes_Ground extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInGroundTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInGroundTheme
        }

    }('Ground', 'plain',)
    public static readonly UNDERGROUND = new class Themes_Underground extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInUndergroundTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInUndergroundTheme
        }

    }('Underground', 'underground',)
    public static readonly UNDERWATER =  new class Themes_Underwater extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInUnderwaterTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInUnderwaterTheme
        }

    }('Underwater', 'water',)
    public static readonly DESERT =      new class Themes_Desert extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInDesertTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInDesertTheme
        }

    }('Desert', 'desert',)
    public static readonly SNOW =        new class Themes_Snow extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInSnowTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInSnowTheme
        }

    }('Snow', 'snow',)
    public static readonly SKY =         new class Themes_Sky extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInSkyTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInSkyTheme
        }

    }('Sky', 'athletic',)
    public static readonly FOREST =      new class Themes_Forest extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInForestTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInForestTheme
        }

    }('Forest', 'woods',)
    public static readonly GHOST_HOUSE = new class Themes_GhostHouse extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInGhostHouseTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInGhostHouseTheme
        }

    }('Ghost House', 'hauntedhouse',)
    public static readonly AIRSHIP =     new class Themes_Airship extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInAirshipTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInAirshipTheme
        }

    }('Airship', 'airship',)
    public static readonly CASTLE =      new class Themes_Castle extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInCastleTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInCastleTheme
        }

    }('Castle', 'castle',)

    public static readonly VOLCANO =     new class Themes_Volcano extends Themes {

        public override get() {
            return false
        }

        public override get endlessMarioImageFile() {
            return null
        }

    }('Volcano', 'magma',)
    public static readonly SPACE =       new class Themes_Space extends Themes   {

        public override get() {
            return false
        }

        public override get endlessMarioImageFile() {
            return null
        }

    }('Space', 'night',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<Themes, typeof Themes> = class CompanionEnum_Themes
        extends CompanionEnumByEnglishNameOnly<Themes, typeof Themes> {

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

    #reference?: CourseAndWorldTheme
    readonly #englishName
    #englishNameInHtml?: Lowercase<NAME>
    readonly #nameInFile
    #smallImageFile?: SmallThemeImageFile<NAME_IN_FILE>
    #largeImageFile?: LargeThemeImageFile<NAME_IN_FILE>
    #endlessMarioImageFile?: NullOr<EndlessMarioThemeImageFile>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: NAME, nameInFile: NAME_IN_FILE,) {
        super()
        this.#englishName = englishName
        this.#nameInFile = nameInFile
    }

    //endregion -------------------- Constructor --------------------
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


    public get englishName(): NAME {
        return this.#englishName
    }

    public get englishNameInHtml(): Lowercase<NAME> {
        return this.#englishNameInHtml ??= this.englishName.toLowerCase() as Lowercase<NAME>
    }

    public get nameInFile(): NAME_IN_FILE {
        return this.#nameInFile
    }

    public get courseTheme(): CourseTheme {
        return this.reference.courseTheme
    }

    public get worldTheme(): WorldTheme {
        return this.reference.worldTheme
    }


    public get smallImageFile(): SmallThemeImageFile<NAME_IN_FILE> {
        return this.#smallImageFile ??= FileCreator.smallImageFile(this,)
    }

    public get largeImageFile(): LargeThemeImageFile<NAME_IN_FILE> {
        return this.#largeImageFile ??= FileCreator.largeImageFile(this,)
    }

    public get endlessMarioImageFile(): NullOr<EndlessMarioThemeImageFile> {
        return this.#endlessMarioImageFile ??= FileCreator.endlessMarioImageFile(this,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: ThemeProperty,): boolean

    public getReference(entity: Entity,): PossibleOtherEntities {
        return EMPTY_ARRAY
    }

    //endregion -------------------- Methods --------------------

}

export namespace Themes {

    /** The companion instance of a {@link Themes} */
    export const Companion = Themes.CompanionEnum.get

    /** All the {@link Themes} (in any "Super Mario Maker" game) */
    export const ALL = [
        Themes.GROUND, Themes.UNDERGROUND,
        Themes.UNDERWATER, Themes.DESERT,
        Themes.SNOW, Themes.SKY,
        Themes.FOREST, Themes.GHOST_HOUSE,
        Themes.AIRSHIP, Themes.CASTLE,
        Themes.VOLCANO, Themes.SPACE,
    ] as const

    /** All the course {@link Themes} (in any "Super Mario Maker" game) */
    export const COURSE_THEMES = [
        Themes.GROUND, Themes.UNDERGROUND,
        Themes.UNDERWATER, Themes.DESERT,
        Themes.SNOW, Themes.SKY,
        Themes.FOREST, Themes.GHOST_HOUSE,
        Themes.AIRSHIP, Themes.CASTLE,
    ] as const

    /** All the course {@link Themes} (in {@link SMM1}) */
    export const COURSE_THEMES_SMM1 = [
        Themes.GROUND, Themes.UNDERGROUND, Themes.UNDERWATER,
        Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,
    ] as const

    /** All the world {@link Themes} (only in {@link SMM2}) */
    export const WORLD_THEMES = [
        Themes.GROUND, Themes.UNDERGROUND,
        Themes.DESERT, Themes.SNOW,
        Themes.SKY, Themes.FOREST,
        Themes.VOLCANO, Themes.SPACE,
    ] as const

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).Themes = Themes
