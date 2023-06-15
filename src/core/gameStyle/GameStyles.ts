import type {BasicCompanionEnumDeclaration, CollectionHolder, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable/dist/types'
import {BasicCompanionEnum, Enum}                                                                   from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                     from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                   from 'core/ClassWithReference'
import type {PropertyGetter, PropertyReferenceGetter}                                                                              from 'core/PropertyGetter'
import type {GameStylesInSMM1, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleGameAcronym, PossibleShortImagePath} from 'core/gameStyle/GameStyles.types'
import type {GameStyle}                                                                                                            from 'core/gameStyle/GameStyle'
import type {GameStyleImageFile}                                                                                                   from 'core/gameStyle/file/GameStyleImageFile'
import type {PossibleOtherEntities}                                                                                                from 'core/entity/Entity'
import type {GameStyleProperty}                                                                                                    from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {GameStyleReferences}                                                                                                  from 'core/entity/properties/gameStyle/GameStyleReferences'
import type {ClassWithImageFile}                                                                                                   from 'util/file/image/ClassWithImageFile'
import type {Nullable}                                                                                                             from 'util/types/nullable'

import GameStyleComponent            from 'core/gameStyle/GameStyle.component'
import {GameStyleLoader}             from 'core/gameStyle/GameStyle.loader'
import {GameStyleImageFileContainer} from 'core/gameStyle/file/GameStyleImageFile.container'
import {StringContainer}             from 'util/StringContainer'
import {getValueByEnglishName}       from 'util/utilitiesMethods'

export abstract class GameStyles
    extends Enum<Ordinals, Names>
    implements ClassWithReference<GameStyle>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImageFile<GameStyleImageFile>,
        PropertyReferenceGetter<GameStyleReferences, PossibleOtherEntities>,
        PropertyGetter<GameStyleProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_BROS =       new class GameStyles_SuperMarioBros extends GameStyles {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioBrosStyle
        }

        public override getReference(referenceProperty: GameStyleReferences,) {
            return referenceProperty.referenceInSuperMarioBrosStyle
        }

    }('SMB', 'M1', 'Super Mario Bros.',)
    public static readonly SUPER_MARIO_BROS_3 =     new class GameStyles_SuperMarioBros3 extends GameStyles {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioBros3Style
        }

        public override getReference(referenceProperty: GameStyleReferences,) {
            return referenceProperty.referenceInSuperMarioBros3Style
        }

    }('SMB3', 'M3', 'Super Mario Bros. 3',)
    public static readonly SUPER_MARIO_WORLD =      new class GameStyles_SuperMarioWorld extends GameStyles {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioWorldStyle
        }

        public override getReference(referenceProperty: GameStyleReferences,) {
            return referenceProperty.referenceInSuperMarioWorldStyle
        }

    }('SMW', 'MW', 'Super Mario World',)
    public static readonly NEW_SUPER_MARIO_BROS_U = new class GameStyles_NewSuperMarioBrosU extends GameStyles {

        public override get(property: GameStyleProperty,) {
            return property.isInNewSuperMarioBrosUStyle
        }

        public override getReference(referenceProperty: GameStyleReferences,) {
            return referenceProperty.referenceInNewSuperMarioBrosUStyle
        }

    }('NSMBU', 'WU', 'New Super Mario Bros. U',)
    public static readonly SUPER_MARIO_3D_WORLD =   new class GameStyles_SuperMario3DWorld extends GameStyles {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMario3DWorldStyle === true
        }

        public override getReference(referenceProperty: GameStyleReferences,) {
            return referenceProperty.referenceInSuperMario3DWorldStyle
        }

    }('SM3DW', '3W', 'Super Mario 3D World',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<GameStyles, typeof GameStyles>> = class CompanionEnum_GameStyles
        extends BasicCompanionEnum<GameStyles, typeof GameStyles> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_GameStyles

        private constructor() {
            super(GameStyles,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_GameStyles()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, GameStyle>
    static #GAME_STYLES_SMM1?: GameStylesInSMM1

    #reference?: GameStyle
    readonly #acronym
    readonly #gameAcronym
    readonly #englishNameContainer: StringContainer<PossibleEnglishName>
    #imageFile?: GameStyleImageFile
    #shortImagePath?: PossibleShortImagePath

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(acronym: PossibleAcronym, gameAcronym: PossibleGameAcronym, englishName: PossibleEnglishName,) {
        super()
        this.#acronym = acronym
        this.#gameAcronym = gameAcronym
        this.#englishNameContainer = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, GameStyle> {
        return this.#REFERENCE_MAP ??= GameStyleLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): GameStyle {
        return this.#reference ??= GameStyles.REFERENCE_MAP.get(this.englishName)!
    }


    public get acronym(): PossibleAcronym {
        return this.#acronym
    }

    public get gameAcronym(): PossibleGameAcronym {
        return this.#gameAcronym
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }

    public get imageFile(): GameStyleImageFile {
        return this.#imageFile ??= new GameStyleImageFileContainer(this.englishName, this.gameAcronym,)
    }

    public get shortImagePath(): PossibleShortImagePath {
        return this.#shortImagePath ??= `${this.ordinal + 1} - ${this.acronym}` as PossibleShortImagePath
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameStyleProperty,): boolean

    public abstract getReference(referenceProperty: GameStyleReferences,): PossibleOtherEntities

    public get renderSingleComponent() {
        return GameStyleComponent.renderSingleComponent(this)
    }


    public static get gameStyles_smm1(): GameStylesInSMM1 {
        return this.#GAME_STYLES_SMM1 ??= [this.SUPER_MARIO_BROS, this.SUPER_MARIO_BROS_3, this.SUPER_MARIO_WORLD, this.NEW_SUPER_MARIO_BROS_U,]
    }


    public static getValueByName(value: Nullable<| GameStyles | string>,): GameStyles {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<GameStyles>,): GameStyles {
        return GameStyles.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<GameStyles> {
        return GameStyles.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<GameStyles> {
        yield* GameStyles.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
