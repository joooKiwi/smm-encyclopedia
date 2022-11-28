import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                                        from '../ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                                    from '../ClassWithEnglishName'
import type {ClassWithImagePath}                                                                                                                      from '../ClassWithImagePath'
import type {ClassWithReference}                                                                                                                      from '../ClassWithReference'
import type {GameStylesInSMM1, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleGameAcronym, PossibleImagePath, PossibleShortImagePath} from './GameStyles.types'
import type {GameStyle}                                                                                                                               from './GameStyle'
import type {GameStyleProperty}                                                                                                                       from '../entity/properties/gameStyle/GameStyleProperty'
import type {GameStyleReferences}                                                                                                                     from '../entity/properties/gameStyle/GameStyleReferences'
import type {Nullable}                                                                                                                                from '../../util/types'
import type {PossibleOtherEntities}                                                                                                                   from '../entity/Entity'
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                 from '../PropertyGetter'

import {BASE_PATH}             from '../../variables'
import GameStyleComponent      from './GameStyle.component'
import {getValueByEnglishName} from '../../util/utilitiesMethods'
import {Import}                from '../../util/DynamicImporter'
import {StringContainer}       from '../../util/StringContainer'

/**
 * @recursiveReferenceVia<{@link GameStyleBuilder}, {@link GameStyleLoader}>
 * @recursiveReference<{@link GameStyleLoader}>
 */
export abstract class GameStyles
    extends Enum<Ordinals, Names>
    implements ClassWithReference<GameStyle>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath>,
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
    //region -------------------- Enum fields --------------------

    static [index: number]: GameStyles

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, GameStyle>
    static #GAME_STYLES_SMM1?: GameStylesInSMM1

    #reference?: GameStyle
    readonly #acronym
    readonly #gameAcronym
    readonly #englishNameContainer: StringContainer<PossibleEnglishName>
    #imagePath?: PossibleImagePath
    #shortImagePath?: PossibleShortImagePath

    //endregion -------------------- Fields --------------------

    // @ts-ignore
    protected constructor(enumeration: GameStyles,)
    private constructor(acronym: PossibleAcronym, gameAcronym: PossibleGameAcronym, englishName: PossibleEnglishName,)
    private constructor(acronym_or_enumeration: | PossibleAcronym | GameStyles, gameAcronym: PossibleGameAcronym, englishName: PossibleEnglishName,) {
        super()
        if (acronym_or_enumeration instanceof GameStyles) {
            this.#acronym = acronym_or_enumeration.acronym
            this.#gameAcronym = acronym_or_enumeration.gameAcronym
            this.#englishNameContainer = acronym_or_enumeration.#englishNameContainer
        } else {
            this.#acronym = acronym_or_enumeration
            this.#gameAcronym = gameAcronym
            this.#englishNameContainer = new StringContainer(englishName)
        }
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, GameStyle> {
        return this.#REFERENCE_MAP ??= Import.GameStyleLoader.get.load()
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

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/${BASE_PATH}/game style/${this.gameAcronym}_Lyt_Logo_00.tiff`
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


    public static get everyAcronyms(): readonly PossibleAcronym[] {
        return this.values.map(limit => limit.acronym).toArray()
    }

    public static get gameStyles_smm1(): GameStylesInSMM1 {
        return this.#GAME_STYLES_SMM1 ??= [this.SUPER_MARIO_BROS, this.SUPER_MARIO_BROS_3, this.SUPER_MARIO_WORLD, this.NEW_SUPER_MARIO_BROS_U,]
    }


    // public static getValueByName<T extends string, >(value: Nullable<| GameStyles | T>,): GameStylesByName<T>
    public static getValueByName(value: Nullable<| GameStyles | string>,): GameStyles {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return GameStyles
    }

    public static getValue(value: PossibleValueByEnumerable<GameStyles>,): GameStyles {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<GameStyles> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
