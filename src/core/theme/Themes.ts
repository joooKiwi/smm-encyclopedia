import type {NullOr} from '@joookiwi/type'
import {Enum}        from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                   from 'core/ClassWithReference'
import type {PropertyGetter, PropertyReferenceGetter}                              from 'core/PropertyGetter'
import type {Entity, PossibleOtherEntities}                                        from 'core/entity/Entity'
import type {ThemeProperty}                                                        from 'core/entity/properties/theme/ThemeProperty'
import type {CourseTheme}                                                          from 'core/theme/CourseTheme'
import type {Names, Ordinals, PossibleEnglishName, PossibleName_InFile}            from 'core/theme/Themes.types'
import type {CourseAndWorldTheme}                                                  from 'core/theme/CourseAndWorldTheme'
import type {WorldTheme}                                                           from 'core/theme/WorldTheme'
import type {EndlessMarioThemeImageFile, LargeThemeImageFile, SmallThemeImageFile} from 'core/theme/file/ThemeImageFile'
import type {CompanionEnumByNameSingleton}                                         from 'util/enumerable/Singleton.types'

import {ThemeLoader}                    from 'core/theme/Theme.loader'
import * as FileCreator                 from 'core/theme/file/fileCreator'
import {EMPTY_ARRAY}                    from 'util/emptyVariables'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

export abstract class Themes
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CourseAndWorldTheme>,
        ClassWithEnglishName<PossibleEnglishName>,
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
            return property.isInDesertTheme === true
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInDesertTheme
        }

    }('Desert', 'desert',)
    public static readonly SNOW =        new class Themes_Snow extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInSnowTheme === true
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInSnowTheme
        }

    }('Snow', 'snow',)
    public static readonly SKY =         new class Themes_Sky extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInSkyTheme === true
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInSkyTheme
        }

    }('Sky', 'athletic',)
    public static readonly FOREST =      new class Themes_Forest extends Themes {

        public override get(property: ThemeProperty,) {
            return property.isInForestTheme === true
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
    readonly #nameInFile
    #smallImageFile?: SmallThemeImageFile
    #largeImageFile?: LargeThemeImageFile
    #endlessMarioImageFile?: NullOr<EndlessMarioThemeImageFile>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName, nameInFile: PossibleName_InFile,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#nameInFile = nameInFile
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

    public get nameInFile(): PossibleName_InFile {
        return this.#nameInFile
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

    public abstract get(property: ThemeProperty,): boolean

    public getReference(entity: Entity,): PossibleOtherEntities {
        return EMPTY_ARRAY
    }

    //endregion -------------------- Methods --------------------

}

export namespace Themes {

    /** All the course themes (in any "Super Mario Maker" game)*/
    export const courseThemes = [
        Themes.GROUND,
        Themes.UNDERGROUND,
        Themes.UNDERWATER,
        Themes.DESERT,
        Themes.SNOW,
        Themes.SKY,
        Themes.FOREST,
        Themes.GHOST_HOUSE,
        Themes.AIRSHIP,
        Themes.CASTLE,
    ] as const

    /** All the course themes (in {@link SMM1}) */
    export const courseThemes_smm1 = [
        Themes.GROUND,
        Themes.UNDERGROUND,
        Themes.UNDERWATER,
        Themes.GHOST_HOUSE,
        Themes.AIRSHIP,
        Themes.CASTLE,
    ] as const

    /** All the world themes (only in {@link SMM2}) */
    export const worldThemes = [
        Themes.GROUND,
        Themes.UNDERGROUND,
        Themes.DESERT,
        Themes.SNOW,
        Themes.SKY,
        Themes.FOREST,
        Themes.VOLCANO,
        Themes.SPACE,
    ] as const

}
