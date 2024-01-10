import type {Singleton} from '@joookiwi/enumerable'
import {Enum}           from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                                                                                                                  from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                                                                                                              from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                                                                from 'core/ClassWithReference'
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                                                           from 'core/PropertyGetter'
import type {CompanionEnumDeclaration_GameStyles}                                                                                                                                                                               from 'core/gameStyle/GameStyles.companionEnumDeclaration'
import type {GameStyles_ArrayInSMM1, GameStyles_ArrayInSMM2, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleAcronym_InFile, PossibleShortImagePath, PossibleSimpleValue, PossibleSimpleUrlValue, GroupUrlValue} from 'core/gameStyle/GameStyles.types'
import type {GameStyle}                                                                                                                                                                                                         from 'core/gameStyle/GameStyle'
import type {GameStyleImageFile}                                                                                                                                                                                                from 'core/gameStyle/file/GameStyleImageFile'
import type {PossibleOtherEntities}                                                                                                                                                                                             from 'core/entity/Entity'
import type {GameStyleProperty}                                                                                                                                                                                                 from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {GameStyleReferences}                                                                                                                                                                                               from 'core/entity/properties/gameStyle/GameStyleReferences'
import type {ClassUsedInRoute}                                                                                                                                                                                                  from 'route/ClassUsedInRoute'
import type {ClassWithImageFile}                                                                                                                                                                                                from 'util/file/image/ClassWithImageFile'
import type {Selectable}                                                                                                                                                                                                        from 'util/types/Selectable'

import GameStyleComponent                             from 'core/gameStyle/GameStyle.component'
import {GameStyleLoader}                              from 'core/gameStyle/GameStyle.loader'
import {gameStyleImage}                               from 'core/gameStyle/file/fileCreator'
import {StringContainer}                              from 'util/StringContainer'
import {EMPTY_ARRAY}                                  from 'util/emptyVariables'
import {getValueByUrlValue, intersect, isArrayEquals} from 'util/utilitiesMethods'
import {GameStyleCollection}                          from 'util/collection/GameStyleCollection'
import {CompanionEnumByAcronymOrName}                 from 'util/enumerable/companion/CompanionEnumByAcronymOrName'

/**
 * @recursiveReference<{@link GameStyleLoader}>
 * @usedByTheRouting
 */
export abstract class GameStyles
    extends Enum<Ordinals, Names>
    implements ClassWithReference<GameStyle>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImageFile<GameStyleImageFile>,
        ClassUsedInRoute<PossibleSimpleUrlValue>,
        Selectable,
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

    }('SMB', 'M1', '1', '1', 'Super Mario Bros.',)
    public static readonly SUPER_MARIO_BROS_3 =     new class GameStyles_SuperMarioBros3 extends GameStyles {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioBros3Style
        }

        public override getReference(referenceProperty: GameStyleReferences,) {
            return referenceProperty.referenceInSuperMarioBros3Style
        }

    }('SMB3', 'M3', '3', '3', 'Super Mario Bros. 3',)
    public static readonly SUPER_MARIO_WORLD =      new class GameStyles_SuperMarioWorld extends GameStyles {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioWorldStyle
        }

        public override getReference(referenceProperty: GameStyleReferences,) {
            return referenceProperty.referenceInSuperMarioWorldStyle
        }

    }('SMW', 'MW', 'W', 'w', 'Super Mario World',)
    public static readonly NEW_SUPER_MARIO_BROS_U = new class GameStyles_NewSuperMarioBrosU extends GameStyles {

        public override get(property: GameStyleProperty,) {
            return property.isInNewSuperMarioBrosUStyle
        }

        public override getReference(referenceProperty: GameStyleReferences,) {
            return referenceProperty.referenceInNewSuperMarioBrosUStyle
        }

    }('NSMBU', 'WU',  'U', 'u', 'New Super Mario Bros. U',)
    public static readonly SUPER_MARIO_3D_WORLD =   new class GameStyles_SuperMario3DWorld extends GameStyles {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMario3DWorldStyle === true
        }

        public override getReference(referenceProperty: GameStyleReferences,) {
            return referenceProperty.referenceInSuperMario3DWorldStyle
        }

    }('SM3DW', '3W', '3DW', '3dw', 'Super Mario 3D World',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_GameStyles> = class CompanionEnum_GameStyles
        extends CompanionEnumByAcronymOrName<GameStyles, typeof GameStyles>
        implements CompanionEnumDeclaration_GameStyles {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_GameStyles

        private constructor() {
            super(GameStyles,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_GameStyles()
        }

        //endregion -------------------- Singleton usage --------------------
        //region -------------------- Fields --------------------

        public readonly ALL = GameStyles.Possibilities.get.ALL_GAME_STYLES

        public get singleFields() {
            return GameStyles.Possibilities.get.everySingleGameFields
        }

        public get doubleFields() {
            return GameStyles.Possibilities.get.everyDoubleGameFields
        }

        public get tripleFields() {
            return GameStyles.Possibilities.get.everyTripleGameFields
        }

        public get quadrupleFields() {
            return GameStyles.Possibilities.get.everyQuadrupleGameFields
        }

        public get fields() {
            return GameStyles.Possibilities.get.everyFields
        }


        public readonly URL_NAME_SEPARATOR = '/'
        public readonly NAME_ARGUMENT_SEPARATOR = ','

        public readonly URL_REGEX = /.*\/game-style-((1|3|w|u|3dw)(,(1|3|w|u|3dw))*|(all))(\/|$)/i
        public readonly PREFIX_WITHOUT_SLASH = 'game-style-'
        public readonly PREFIX = '/game-style-'
        public readonly ALL_PREFIX_GROUP = '/game-style-all/'

        //endregion -------------------- Fields --------------------

        public getValueByUrlValue(value: Nullable<| GameStyles | string>,): GameStyles {
            return getValueByUrlValue(value, this,);
        }

        public getValueBySimpleValue(value: Nullable<| GameStyles | string | number>,): GameStyles {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null simple value.`,)
            if (value instanceof this.instance)
                return value
            const stringValue = `${value}`
            const valueFound = this.values.find(it => it.simpleValue === stringValue,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound    }

        public getValueInUrl(url: string,): readonly GameStyles[] {
            //region -------------------- Valid possibilities --------------------

            const lowerCasedUrl = url.toLowerCase()

            if (lowerCasedUrl.includes(this.ALL_PREFIX_GROUP,))
                return this.ALL

            const prefix = this.PREFIX
            if (!lowerCasedUrl.includes(prefix,))
                return EMPTY_ARRAY

            const singleValueFound = this.singleFields.find(it => lowerCasedUrl.includes(`${prefix}${it[0].urlValue}`,),)
            if (singleValueFound != null)
                return singleValueFound

            const separator = this.NAME_ARGUMENT_SEPARATOR
            const doubleValueFound = this.doubleFields.find(it => lowerCasedUrl.includes(`${prefix}${it[0].urlValue}${separator}${it[1].urlValue}`,),)
            if (doubleValueFound != null)
                return doubleValueFound

            const tripleValueFound = this.tripleFields.find(it => lowerCasedUrl.includes(`${prefix}${it[0].urlValue}${separator}${it[1].urlValue}${separator}${it[2].urlValue}`,),)
            if (tripleValueFound != null)
                return tripleValueFound

            const quadrupleValueFound = this.quadrupleFields.find(it => lowerCasedUrl.includes(`${prefix}${it[0].urlValue}${separator}${it[1].urlValue}${separator}${it[2].urlValue}${separator}${it[3].urlValue}`,),)
            if (quadrupleValueFound != null)
                return quadrupleValueFound

            //endregion -------------------- Valid possibilities --------------------

            if (!this.URL_REGEX.test(url,))
                return EMPTY_ARRAY

            //region -------------------- Valid possibilities from unknown amount of arguments --------------------

            const prefixWithoutSlash = this.PREFIX_WITHOUT_SLASH
            const valuesInUrlsFound = lowerCasedUrl.split(this.URL_NAME_SEPARATOR,).find(it => it.startsWith(prefixWithoutSlash,) && (it.endsWith('1',) || it.endsWith('3',) || it.endsWith('w',) || it.endsWith('u',) || it.endsWith('3dw',)),)!.substring(prefixWithoutSlash.length,).split(this.NAME_ARGUMENT_SEPARATOR,)
            const size = valuesInUrlsFound.length
            const valuesFound = new Array<GameStyles>(size,)
            let index = size
            while (index-- > 0)
                valuesFound[index] = this.getValueByUrlValue(valuesInUrlsFound[index],)

            const uniqueValuesFound = intersect(this.values, valuesFound,).toArray()
            return this.fields.find(it => isArrayEquals(it, uniqueValuesFound,),)!

            //endregion -------------------- Valid possibilities from unknown amount of arguments --------------------
        }

        public get selected(): GameStyleCollection {
            return new GameStyleCollection(this.values.filter(it => it.isSelected,),)
        }

        public set selected(value: readonly GameStyles[],) {
            this.values.forEach(it => it.isSelected = value.includes(it,),)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Companion --------------------

    public static readonly Possibilities = class Companion_Possibilities {

        //region -------------------- Singleton usage --------------------

        static #instance?: Companion_Possibilities

        private constructor() {}

        public static get get() {
            return Companion_Possibilities.#instance ??= new Companion_Possibilities()
        }

        //endregion -------------------- Singleton usage --------------------
        //region -------------------- Fields --------------------

        #everySingleFields?: readonly (readonly [GameStyles,])[]
        #everyDoubleFields?: readonly (readonly [GameStyles, GameStyles,])[]
        #everyTripleFields?: readonly (readonly [GameStyles, GameStyles, GameStyles,])[]
        #everyQuadrupleFields?: readonly (readonly [GameStyles, GameStyles, GameStyles, GameStyles,])[]
        #everyFields?: readonly (readonly GameStyles[])[]

        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} */
        public readonly SMB_ONLY = [GameStyles.SUPER_MARIO_BROS,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} */
        public readonly SMB3_ONLY = [GameStyles.SUPER_MARIO_BROS_3,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_WORLD SMW} */
        public readonly SMW_ONLY = [GameStyles.SUPER_MARIO_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
        public readonly NSMBU_ONLY = [GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SM3DW_ONLY = [GameStyles.SUPER_MARIO_3D_WORLD,] as const

        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} & {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} */
        public readonly SMB_AND_SMB3 = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} & {@link GameStyles.SUPER_MARIO_WORLD SMW} */
        public readonly SMB_AND_SMW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
        public readonly SMB_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SMB_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.SUPER_MARIO_WORLD SMW} */
        public readonly SMB3_AND_SMW = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
        public readonly SMB3_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SMB3_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
        public readonly SMW_AND_NSMBU = [GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SMW_AND_SM3DW = [GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly NSMBU_AND_SM3DW = [GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const

        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.SUPER_MARIO_WORLD SMW} */
        public readonly SMB_AND_SMB3_AND_SMW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
        public readonly SMB_AND_SMB3_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SMB_AND_SMB3_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
        public readonly SMB_AND_SMW_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SMB_AND_SMW_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SMB_AND_NSMBU_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}, {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
        public readonly SMB3_AND_SMW_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}, {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SMB3_AND_SMW_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SMB3_AND_NSMBU_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles with only {@link GameStyles.SUPER_MARIO_WORLD SMW}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly SMW_AND_NSMBU_AND_SM3DW = [GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const

        /** An array representing the game styles excluding {@link GameStyles.SUPER_MARIO_BROS SMB} */
        public readonly NOT_SMB = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles excluding {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} */
        public readonly NOT_SMB3 = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles excluding {@link GameStyles.SUPER_MARIO_WORLD SMW} */
        public readonly NOT_SMW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles excluding {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
        public readonly NOT_NSMBU = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,] as const
        /** An array representing the game styles excluding {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
        public readonly NOT_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const

        /**
         * An array representing every game style
         * ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3},
         * {@link GameStyles.SUPER_MARIO_WORLD SMW}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} &
         * {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW})
         */
        public readonly ALL_GAME_STYLES = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const

        //endregion -------------------- Fields --------------------
        //region -------------------- Getter methods --------------------

        /** Every single (1x) {@link Games} fields in the {@link Companion_Possibilities current instance} */
        public get everySingleGameFields(): readonly (readonly [GameStyles,])[] {
            return this.#everySingleFields ??= [this.SMB_ONLY, this.SMB3_ONLY, this.SMW_ONLY, this.NSMBU_ONLY, this.SM3DW_ONLY,]
        }

        /** Every double (2x) {@link Games} fields in the {@link Companion_Possibilities current instance} */
        public get everyDoubleGameFields(): readonly (readonly [GameStyles, GameStyles,])[] {
            return this.#everyDoubleFields ??= [
                this.SMB_AND_SMB3, this.SMB_AND_SMW, this.SMB_AND_NSMBU, this.SMB_AND_SM3DW,
                this.SMB3_AND_SMW, this.SMB3_AND_NSMBU, this.SMB3_AND_SM3DW,
                this.SMW_AND_NSMBU, this.SMW_AND_SM3DW,
                this.NSMBU_AND_SM3DW,
            ]
        }

        /** Every triple (3x) {@link Games} fields in the {@link Companion_Possibilities current instance} */
        public get everyTripleGameFields(): readonly (readonly [GameStyles, GameStyles, GameStyles,])[] {
            return this.#everyTripleFields ??= [
                this.SMB_AND_SMB3_AND_SMW, this.SMB_AND_SMB3_AND_NSMBU, this.SMB_AND_SMB3_AND_SM3DW,
                this.SMB_AND_SMW_AND_NSMBU, this.SMB_AND_SMW_AND_SM3DW,
                this.SMB_AND_NSMBU_AND_SM3DW,

                this.SMB3_AND_SMW_AND_NSMBU, this.SMB3_AND_SMW_AND_SM3DW,
                this.SMB3_AND_NSMBU_AND_SM3DW,

                this.SMW_AND_NSMBU_AND_SM3DW,
            ]
        }

        /** Every quadruple (4x) {@link Games} fields in the {@link Companion_Possibilities current instance} */
        public get everyQuadrupleGameFields(): readonly (readonly [GameStyles, GameStyles, GameStyles, GameStyles,])[] {
            return this.#everyQuadrupleFields ??= [this.NOT_SM3DW, this.NOT_NSMBU, this.NOT_SMW, this.NOT_SMB3, this.NOT_SMB,]
        }

        public get everyFields(): readonly (readonly GameStyles[])[] {
            return this.#everyFields ??= [
                this.ALL_GAME_STYLES,

                this.SMB_ONLY, this.SMB3_ONLY, this.SMW_ONLY, this.NSMBU_ONLY, this.SM3DW_ONLY,

                this.SMB_AND_SMB3, this.SMB_AND_SMW, this.SMB_AND_NSMBU, this.SMB_AND_SM3DW,
                this.SMB3_AND_SMW, this.SMB3_AND_NSMBU, this.SMB3_AND_SM3DW,
                this.SMW_AND_NSMBU, this.SMW_AND_SM3DW,
                this.NSMBU_AND_SM3DW,


                this.SMB_AND_SMB3_AND_SMW, this.SMB_AND_SMB3_AND_NSMBU, this.SMB_AND_SMB3_AND_SM3DW,
                this.SMB_AND_SMW_AND_NSMBU, this.SMB_AND_SMW_AND_SM3DW,
                this.SMB_AND_NSMBU_AND_SM3DW,

                this.SMB3_AND_SMW_AND_NSMBU, this.SMB3_AND_SMW_AND_SM3DW,
                this.SMB3_AND_NSMBU_AND_SM3DW,

                this.SMW_AND_NSMBU_AND_SM3DW,

                this.NOT_SM3DW, this.NOT_NSMBU, this.NOT_SMW, this.NOT_SMB3, this.NOT_SMB,
            ]
        }

        //endregion -------------------- Getter methods --------------------

    }

    //endregion -------------------- Companion --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, GameStyle>
    static #GAME_STYLES_SMM1?: GameStyles_ArrayInSMM1
    static #GAME_STYLES_SMM2?: GameStyles_ArrayInSMM2

    #reference?: GameStyle
    readonly #acronym
    readonly #acronymInFile
    readonly #englishName
    readonly #simpleValue
    #imageFile?: GameStyleImageFile
    #shortImagePath?: PossibleShortImagePath
    readonly #urlValue

    #isSelected

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(acronym: PossibleAcronym, acronymInFile: PossibleAcronym_InFile, simpleValue: PossibleSimpleValue, urlValue: PossibleSimpleUrlValue, englishName: PossibleEnglishName,) {
        super()
        this.#acronym = acronym
        this.#acronymInFile = acronymInFile
        this.#englishName = new StringContainer(englishName,)
        this.#simpleValue = simpleValue
        this.#urlValue = urlValue
        this.#isSelected = true
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

    public get acronymInFile(): PossibleAcronym_InFile {
        return this.#acronymInFile
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get simpleValue(): PossibleSimpleValue {
        return this.#simpleValue
    }

    public get imageFile(): GameStyleImageFile {
        return this.#imageFile ??= gameStyleImage(this.acronymInFile, this.englishName,)
    }

    public get shortImagePath(): PossibleShortImagePath {
        return this.#shortImagePath ??= `${this.ordinal + 1} - ${this.acronym}` as PossibleShortImagePath
    }

    public get urlValue(): PossibleSimpleUrlValue {
        return this.#urlValue
    }


    public get isSelected(): boolean {
        return this.#isSelected
    }

    public set isSelected(value: boolean,) {
        this.#isSelected = value
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameStyleProperty,): boolean

    public abstract getReference(referenceProperty: GameStyleReferences,): PossibleOtherEntities

    public get renderSingleComponent() {
        return GameStyleComponent.renderSingleComponent(this)
    }


    public static get gameStyles_smm1(): GameStyles_ArrayInSMM1 {
        return this.#GAME_STYLES_SMM1 ??= [this.SUPER_MARIO_BROS, this.SUPER_MARIO_BROS_3, this.SUPER_MARIO_WORLD, this.NEW_SUPER_MARIO_BROS_U,]
    }

    public static get gameStyles_smm2(): GameStyles_ArrayInSMM2 {
        return this.#GAME_STYLES_SMM2 ??= this.CompanionEnum.get.values.toArray() as GameStyles_ArrayInSMM2
    }


    public static getGroupUrlValue(gameStyles: Iterable<GameStyles>,): GroupUrlValue {
        const gameStylesFiltered = new Set(gameStyles,)
        if (gameStylesFiltered.size === 5)
            return 'all'
        return Array.from(gameStylesFiltered, it => it.urlValue,).join(',',) as GroupUrlValue
    }

    public static get selected(): GameStyleCollection {
        return new GameStyleCollection(GameStyles.CompanionEnum.get.values.filter(it => it.isSelected,),)
    }

    //endregion -------------------- Methods --------------------

}
