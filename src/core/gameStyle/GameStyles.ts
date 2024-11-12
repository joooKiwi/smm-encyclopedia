import type {CollectionHolder}                from '@joookiwi/collection'
import type {Singleton}                       from '@joookiwi/enumerable'
import {getFirstByArray, hasByArray, isArray} from '@joookiwi/collection'
import {Enum}                                 from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                                                                                                  from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                                                                                              from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                                                from 'core/ClassWithReference'
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                                           from 'core/PropertyGetter'
import type {CompanionEnumDeclaration_GameStyles}                                                                                                                                                               from 'core/gameStyle/GameStyles.companionEnumDeclaration'
import type {GameStyles_ArrayInSMM1, GameStyles_ArrayInSMM2, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleAcronym_InFile, PossibleSimpleValue, PossibleUrlValue, GroupUrlValue, GroupUrlName} from 'core/gameStyle/GameStyles.types'
import type {GameStyle}                                                                                                                                                                                         from 'core/gameStyle/GameStyle'
import type {GameStyleImageFile}                                                                                                                                                                                from 'core/gameStyle/file/GameStyleImageFile'
import type {Entity, PossibleOtherEntities}                                                                                                                                                                     from 'core/entity/Entity'
import type {GameStyleProperty}                                                                                                                                                                                 from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {ClassUsedInRoute}                                                                                                                                                                                  from 'route/ClassUsedInRoute'
import type {ClassWithImageFile}                                                                                                                                                                                from 'util/file/image/ClassWithImageFile'

import {GameStyleLoader}                                              from 'core/gameStyle/GameStyle.loader'
import {gameStyleImage}                                               from 'core/gameStyle/file/fileCreator'
import {StringContainer}                                              from 'util/StringContainer'
import {Import}                                                       from 'util/DynamicImporter'
import {EMPTY_ARRAY}                                                  from 'util/emptyVariables'
import {getValueByAcronym, getValueByEnglishName, getValueByUrlValue} from 'util/utilitiesMethods'
import {CompanionEnumWithCurrentAndSetCurrentEventAsCollection}       from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'

/**
 * @recursiveReference<{@link GameStyleLoader}>
 * @recursiveReference<{@link GameStylePossibility}>
 * @usedByTheRouting
 */
export abstract class GameStyles<const out ACRONYM extends PossibleAcronym = PossibleAcronym,
    const out ACRONYM_IN_FILE extends PossibleAcronym_InFile = PossibleAcronym_InFile,
    const out NAME extends PossibleEnglishName = PossibleEnglishName, >
    extends Enum<Ordinals, Names>
    implements ClassWithReference<GameStyle>,
        ClassWithAcronym<ACRONYM>,
        ClassWithEnglishName<NAME>,
        ClassWithImageFile<GameStyleImageFile>,
        ClassUsedInRoute<PossibleUrlValue>,
        PropertyReferenceGetter<Entity, PossibleOtherEntities>,
        PropertyGetter<GameStyleProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_BROS =       new class GameStyles_SuperMarioBros extends GameStyles<'SMB', 'M1', 'Super Mario Bros.'> {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioBrosStyle
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInSuperMarioBrosStyle
        }

    }('SMB', 'M1', '1', '1', 'Super Mario Bros.',)
    public static readonly SUPER_MARIO_BROS_3 =     new class GameStyles_SuperMarioBros3 extends GameStyles<'SMB3', 'M3', 'Super Mario Bros. 3'> {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioBros3Style
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInSuperMarioBros3Style
        }

    }('SMB3', 'M3', '3', '3', 'Super Mario Bros. 3',)
    public static readonly SUPER_MARIO_WORLD =      new class GameStyles_SuperMarioWorld extends GameStyles<'SMW', 'MW', 'Super Mario World'> {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioWorldStyle
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInSuperMarioWorldStyle
        }

    }('SMW', 'MW', 'W', 'w', 'Super Mario World',)
    public static readonly NEW_SUPER_MARIO_BROS_U = new class GameStyles_NewSuperMarioBrosU extends GameStyles<'NSMBU', 'WU', 'New Super Mario Bros. U'> {

        public override get(property: GameStyleProperty,) {
            return property.isInNewSuperMarioBrosUStyle
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInNewSuperMarioBrosUStyle
        }

    }('NSMBU', 'WU',  'U', 'u', 'New Super Mario Bros. U',)
    public static readonly SUPER_MARIO_3D_WORLD =   new class GameStyles_SuperMario3DWorld extends GameStyles<'SM3DW', '3W', 'Super Mario 3D World'> {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMario3DWorldStyle === true
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInSuperMario3DWorldStyle
        }

    }('SM3DW', '3W', '3DW', '3dw', 'Super Mario 3D World',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_GameStyles> = class CompanionEnum_GameStyles
        extends CompanionEnumWithCurrentAndSetCurrentEventAsCollection<GameStyles, typeof GameStyles>
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

        public readonly URL_NAME_SEPARATOR = '/'
        public readonly NAME_ARGUMENT_SEPARATOR = ','

        public readonly URL_REGEX = /.*\/game-style-((1|3|w|u|3dw)(,(1|3|w|u|3dw))*|(all))(\/|$)/i
        public readonly PREFIX_WITHOUT_SLASH = 'game-style-'
        public readonly PREFIX = '/game-style-'
        public readonly ALL_PREFIX_GROUP = '/game-style-all/'

        //endregion -------------------- Fields --------------------

        public getValueByUrlValue(value: Nullable<| GameStyles | string>,): GameStyles {
            return getValueByUrlValue(value, this,)
        }

        public getValueByAcronym(value: Nullable<| GameStyles | string>,): GameStyles {
            return getValueByAcronym(value, this,)
        }

        public getValueByName(value: Nullable<| GameStyles | string>,): GameStyles {
            return getValueByEnglishName(value, this,)
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
            return valueFound
        }


        public getValueInUrl(url: string,): readonly GameStyles[] {
            const lowerCasedUrl = url.toLowerCase()
            if (lowerCasedUrl.includes(this.ALL_PREFIX_GROUP,))
                return Import.GameStylePossibility.ALL_GAME_STYLES

            const prefix = this.PREFIX
            if (!lowerCasedUrl.includes(prefix,))
                return EMPTY_ARRAY

            /** All the possible {@link GameStyles.urlValue} that could be found in the url */
            const valuesFound = getFirstByArray(lowerCasedUrl.substring(lowerCasedUrl.indexOf(prefix,) + prefix.length,).split(this.URL_NAME_SEPARATOR, 1,),)
            const withSmb = valuesFound.includes('smb',)
            const withSmb3 = valuesFound.includes('smb3',)
            const withSmw = valuesFound.includes('smw',)
            const withNsmbu = valuesFound.includes('nsmbu',)
            const withSm3dw = valuesFound.includes('sm3dw',)

            if (withSmb) {
                if (withSmb3) {
                    if (withSmw) {
                        if (withNsmbu) {
                            if (withSm3dw)
                                return Import.GameStylePossibility.ALL_GAME_STYLES
                            return Import.GameStylePossibility.NOT_SM3DW
                        }
                        if (withSm3dw)
                            return Import.GameStylePossibility.NOT_NSMBU
                        return Import.GameStylePossibility.SMB_AND_SMB3_AND_SMW
                    }
                    if (withNsmbu) {
                        if (withSm3dw)
                            return Import.GameStylePossibility.NOT_SMW
                        return Import.GameStylePossibility.SMB_AND_SMB3_AND_NSMBU
                    }
                    if (withSm3dw)
                        return Import.GameStylePossibility.SMB_AND_SMB3_AND_SM3DW
                    return Import.GameStylePossibility.SMB_AND_SMB3
                }
                if (withSmw) {
                    if (withNsmbu) {
                        if (withSm3dw)
                            return Import.GameStylePossibility.NOT_SMB3
                        return Import.GameStylePossibility.SMB_AND_SMW_AND_NSMBU
                    }
                    if (withSm3dw)
                        return Import.GameStylePossibility.SMB_AND_SMW_AND_SM3DW
                    return Import.GameStylePossibility.SMB_AND_SMW
                }
                if (withNsmbu) {
                    if (withSm3dw)
                        return Import.GameStylePossibility.SMB_AND_NSMBU_AND_SM3DW
                    return Import.GameStylePossibility.SMB_AND_NSMBU
                }
                if (withSm3dw)
                    return Import.GameStylePossibility.SMB_AND_SM3DW
                return Import.GameStylePossibility.SMB_ONLY
            }
            if (withSmb3) {
                if (withSmw) {
                    if (withNsmbu) {
                        if (withSm3dw)
                            return Import.GameStylePossibility.NOT_SMB
                        return Import.GameStylePossibility.SMB3_AND_SMW_AND_NSMBU
                    }
                    if (withSm3dw)
                        return Import.GameStylePossibility.SMB3_AND_SMW_AND_SM3DW
                    return Import.GameStylePossibility.SMB3_AND_SMW
                }
                if (withNsmbu) {
                    if (withSm3dw)
                        return Import.GameStylePossibility.SMB3_AND_NSMBU_AND_SM3DW
                    return Import.GameStylePossibility.SMB3_AND_NSMBU
                }
                if (withSm3dw)
                    return Import.GameStylePossibility.SMB3_AND_SM3DW
                return Import.GameStylePossibility.SMB3_ONLY
            }
            if (withSmw) {
                if (withNsmbu) {
                    if (withSm3dw)
                        return Import.GameStylePossibility.SMW_AND_NSMBU_AND_SM3DW
                    return Import.GameStylePossibility.SMW_AND_NSMBU
                }
                if (withSm3dw)
                    return Import.GameStylePossibility.SMW_AND_SM3DW
                return Import.GameStylePossibility.SMW_ONLY
            }
            if (withNsmbu) {
                if (withSm3dw)
                    return Import.GameStylePossibility.NSMBU_AND_SM3DW
                return Import.GameStylePossibility.NSMBU_ONLY
            }
            if (withSm3dw)
                return Import.GameStylePossibility.SM3DW_ONLY
            return EMPTY_ARRAY
        }

        public getGroupUrlValue(gameStyles: | readonly GameStyles[] | CollectionHolder<GameStyles>,): GroupUrlValue {
            const isGameStylesArray = isArray(gameStyles,)
            const withSmb = isGameStylesArray ? hasByArray(gameStyles, GameStyles.SUPER_MARIO_BROS,) : gameStyles.has(GameStyles.SUPER_MARIO_BROS,)
            const withSmb3 = isGameStylesArray ? hasByArray(gameStyles, GameStyles.SUPER_MARIO_BROS_3,) : gameStyles.has(GameStyles.SUPER_MARIO_BROS_3,)
            const withSmw = isGameStylesArray ? hasByArray(gameStyles, GameStyles.SUPER_MARIO_WORLD,) : gameStyles.has(GameStyles.SUPER_MARIO_WORLD,)
            const withNsmbu = isGameStylesArray ? hasByArray(gameStyles, GameStyles.NEW_SUPER_MARIO_BROS_U,) : gameStyles.has(GameStyles.NEW_SUPER_MARIO_BROS_U,)
            const withSm3dw = isGameStylesArray ? hasByArray(gameStyles, GameStyles.SUPER_MARIO_3D_WORLD,) : gameStyles.has(GameStyles.SUPER_MARIO_3D_WORLD,)

            if (withSmb) {
                if (withSmb3) {
                    if (withSmw) {
                        if (withNsmbu) {
                            if (withSm3dw)
                                return 'all'
                            return '1,3,w,u'
                        }
                        if (withSm3dw)
                            return '1,3,w,3dw'
                        return '1,3,w'
                    }
                    if (withNsmbu) {
                        if (withSm3dw)
                            return '1,3,u,3dw'
                        return '1,3,u'
                    }
                    if (withSm3dw)
                        return '1,3,3dw'
                    return '1,3'
                }
                if (withSmw) {
                    if (withNsmbu) {
                        if (withSm3dw)
                            return '1,w,u,3dw'
                        return '1,w,u'
                    }
                    if (withSm3dw)
                        return '1,w,3dw'
                    return '1,w'
                }
                if (withNsmbu) {
                    if (withSm3dw)
                        return '1,u,3dw'
                    return '1,u'
                }
                if (withSm3dw)
                    return '1,3dw'
                return '1'
            }
            if (withSmb3) {
                if (withSmw) {
                    if (withNsmbu) {
                        if (withSm3dw)
                            return '3,w,u,3dw'
                        return '3,w,u'
                    }
                    if (withSm3dw)
                        return '3,w,3dw'
                    return '3,w'
                }
                if (withNsmbu) {
                    if (withSm3dw)
                        return '3,u,3dw'
                    return '3,u'
                }
                if (withSm3dw)
                    return '3,3dw'
                return '3'
            }
            if (withSmw) {
                if (withNsmbu) {
                    if (withSm3dw)
                        return 'w,u,3dw'
                    return 'w,u'
                }
                if (withSm3dw)
                    return 'w,3dw'
                return 'w'
            }
            if (withNsmbu) {
                if (withSm3dw)
                    return 'u,3dw'
                return 'u'
            }
            if (withSm3dw)
                return '3dw'
            throw new ReferenceError('No game style group url value is findable from empty array or collection.',)
        }

        public getGroupUrlName(gameStyles: | readonly GameStyles[] | CollectionHolder<GameStyles>,): GroupUrlName {
            const isGameStylesArray = isArray(gameStyles,)
            const withSmb = isGameStylesArray ? hasByArray(gameStyles, GameStyles.SUPER_MARIO_BROS,) : gameStyles.has(GameStyles.SUPER_MARIO_BROS,)
            const withSmb3 = isGameStylesArray ? hasByArray(gameStyles, GameStyles.SUPER_MARIO_BROS_3,) : gameStyles.has(GameStyles.SUPER_MARIO_BROS_3,)
            const withSmw = isGameStylesArray ? hasByArray(gameStyles, GameStyles.SUPER_MARIO_WORLD,) : gameStyles.has(GameStyles.SUPER_MARIO_WORLD,)
            const withNsmbu = isGameStylesArray ? hasByArray(gameStyles, GameStyles.NEW_SUPER_MARIO_BROS_U,) : gameStyles.has(GameStyles.NEW_SUPER_MARIO_BROS_U,)
            const withSm3dw = isGameStylesArray ? hasByArray(gameStyles, GameStyles.SUPER_MARIO_3D_WORLD,) : gameStyles.has(GameStyles.SUPER_MARIO_3D_WORLD,)

            if (withSmb) {
                if (withSmb3) {
                    if (withSmw) {
                        if (withNsmbu) {
                            if (withSm3dw)
                                return 'all'
                            return '1&3&W&U'
                        }
                        if (withSm3dw)
                            return '1&3&W&3DW'
                        return '1&3&W'
                    }
                    if (withNsmbu) {
                        if (withSm3dw)
                            return '1&3&U&3DW'
                        return '1&3&U'
                    }
                    if (withSm3dw)
                        return '1&3&3DW'
                    return '1&3'
                }
                if (withSmw) {
                    if (withNsmbu) {
                        if (withSm3dw)
                            return '1&W&U&3DW'
                        return '1&W&U'
                    }
                    if (withSm3dw)
                        return '1&W&3DW'
                    return '1&W'
                }
                if (withNsmbu) {
                    if (withSm3dw)
                        return '1&U&3DW'
                    return '1&U'
                }
                if (withSm3dw)
                    return '1&3DW'
                return '1'
            }
            if (withSmb3) {
                if (withSmw) {
                    if (withNsmbu) {
                        if (withSm3dw)
                            return '3&W&U&3DW'
                        return '3&W&U'
                    }
                    if (withSm3dw)
                        return '3&W&3DW'
                    return '3&W'
                }
                if (withNsmbu) {
                    if (withSm3dw)
                        return '3&U&3DW'
                    return '3&U'
                }
                if (withSm3dw)
                    return '3&3DW'
                return '3'
            }
            if (withSmw) {
                if (withNsmbu) {
                    if (withSm3dw)
                        return 'W&U&3DW'
                    return 'W&U'
                }
                if (withSm3dw)
                    return 'W&3DW'
                return 'W'
            }
            if (withNsmbu) {
                if (withSm3dw)
                    return 'U&3DW'
                return 'U'
            }
            if (withSm3dw)
                return '3DW'
            throw new ReferenceError('No game style group url name is findable from empty array or collection.',)
        }

    }

    //endregion -------------------- Companion enum --------------------
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
    readonly #urlValue

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(acronym: ACRONYM, acronymInFile: ACRONYM_IN_FILE, simpleValue: PossibleSimpleValue, urlValue: PossibleUrlValue, englishName: NAME,) {
        super()
        this.#acronym = acronym
        this.#acronymInFile = acronymInFile
        this.#englishName = new StringContainer(englishName,)
        this.#simpleValue = simpleValue
        this.#urlValue = urlValue
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


    public get acronym(): ACRONYM {
        return this.#acronym
    }

    public get acronymInFile(): ACRONYM_IN_FILE {
        return this.#acronymInFile
    }

    public get englishName(): NAME {
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

    public get urlValue(): PossibleUrlValue {
        return this.#urlValue
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameStyleProperty,): boolean

    public abstract getReference(entity: Entity,): PossibleOtherEntities


    public static get gameStyles_smm1(): GameStyles_ArrayInSMM1 {
        return this.#GAME_STYLES_SMM1 ??= [this.SUPER_MARIO_BROS, this.SUPER_MARIO_BROS_3, this.SUPER_MARIO_WORLD, this.NEW_SUPER_MARIO_BROS_U,]
    }

    public static get gameStyles_smm2(): GameStyles_ArrayInSMM2 {
        return this.#GAME_STYLES_SMM2 ??= this.CompanionEnum.get.values.toArray() as GameStyles_ArrayInSMM2
    }

    //endregion -------------------- Methods --------------------

}

// TODO remove this test variable when the application will be complete
// @ts-ignore
(window.test ??= {}).GameStyles = GameStyles
