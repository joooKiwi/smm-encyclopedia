import type {CollectionHolder} from '@joookiwi/collection'
import type {Singleton}        from '@joookiwi/enumerable'
import type {Array, Nullable}  from '@joookiwi/type'
import {Enum}                  from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                                                  from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                                              from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                from 'core/ClassWithReference'
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                           from 'core/PropertyGetter'
import type {CompanionEnumDeclaration_GameStyles}                                                                                                               from 'core/gameStyle/GameStyles.companionEnumDeclaration'
import type {Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleAcronym_InFile, PossibleSimpleValue, PossibleUrlValue, GroupUrlValue, GroupUrlName} from 'core/gameStyle/GameStyles.types'
import type {GameStyle}                                                                                                                                         from 'core/gameStyle/GameStyle'
import type {GameStyleImageFile}                                                                                                                                from 'core/gameStyle/file/GameStyleImageFile'
import type {Entity}                                                                                                                                            from 'core/entity/Entity'
import type {GameStyleProperty}                                                                                                                                 from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {ClassUsedInRoute}                                                                                                                                  from 'route/ClassUsedInRoute'
import type {ClassWithImageFile}                                                                                                                                from 'util/file/image/ClassWithImageFile'

import {GameStyleLoader}                                                                 from 'core/gameStyle/GameStyle.loader'
import {GameStylesPossibility}                                                           from 'core/gameStyle/GameStyles.possibility'
import {gameStyleImage}                                                                  from 'core/gameStyle/file/fileCreator'
import {StringContainer}                                                                 from 'util/StringContainer'
import {Empty}                                                                           from 'util/emptyVariables'
import {getValueByAcronym, getValueByEnglishName, getValueByUrlName, getValueByUrlValue} from 'util/utilitiesMethods'
import {CompanionEnumWithCurrentAndSetCurrentEventAsCollection}                          from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'
import {ArrayAsCollection}                                                               from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

/**
 * @recursiveReference<{@link GameStyleLoader}>
 * @usedByTheRouting
 */
export abstract class GameStyles<const ACRONYM extends PossibleAcronym = PossibleAcronym,
    const ACRONYM_IN_FILE extends PossibleAcronym_InFile = PossibleAcronym_InFile,
    const URL_NAME extends PossibleSimpleValue = PossibleSimpleValue,
    const URL_VALUE extends PossibleUrlValue = PossibleUrlValue,
    const NAME extends PossibleEnglishName = PossibleEnglishName, >
    extends Enum<Ordinals, Names>
    implements ClassWithReference<GameStyle>,
        ClassWithAcronym<ACRONYM>,
        ClassWithEnglishName<NAME>,
        ClassWithImageFile<GameStyleImageFile>,
        ClassUsedInRoute<URL_VALUE, URL_NAME>,
        PropertyReferenceGetter<Entity, CollectionHolder<Entity>>,
        PropertyGetter<GameStyleProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_BROS =       new class GameStyles_SuperMarioBros extends GameStyles<'SMB', 'M1', '1', '1', 'Super Mario Bros.'> {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioBrosStyle
        }

        public override getReference(entity: Entity,) {
            return entity.referencesInSuperMarioBrosStyle
        }

    }('SMB', 'M1', '1', '1', 'Super Mario Bros.',)
    public static readonly SUPER_MARIO_BROS_3 =     new class GameStyles_SuperMarioBros3 extends GameStyles<'SMB3', 'M3', '3', '3', 'Super Mario Bros. 3'> {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioBros3Style
        }

        public override getReference(entity: Entity,) {
            return entity.referencesInSuperMarioBros3Style
        }

    }('SMB3', 'M3', '3', '3', 'Super Mario Bros. 3',)
    public static readonly SUPER_MARIO_WORLD =      new class GameStyles_SuperMarioWorld extends GameStyles<'SMW', 'MW', 'W', 'w', 'Super Mario World'> {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMarioWorldStyle
        }

        public override getReference(entity: Entity,) {
            return entity.referencesInSuperMarioWorldStyle
        }

    }('SMW', 'MW', 'W', 'w', 'Super Mario World',)
    public static readonly NEW_SUPER_MARIO_BROS_U = new class GameStyles_NewSuperMarioBrosU extends GameStyles<'NSMBU', 'WU', 'U', 'u', 'New Super Mario Bros. U'> {

        public override get(property: GameStyleProperty,) {
            return property.isInNewSuperMarioBrosUStyle
        }

        public override getReference(entity: Entity,) {
            return entity.referencesInNewSuperMarioBrosUStyle
        }

    }('NSMBU', 'WU',  'U', 'u', 'New Super Mario Bros. U',)
    public static readonly SUPER_MARIO_3D_WORLD =   new class GameStyles_SuperMario3DWorld extends GameStyles<'SM3DW', '3W', '3DW', '3dw', 'Super Mario 3D World'> {

        public override get(property: GameStyleProperty,) {
            return property.isInSuperMario3DWorldStyle
        }

        public override getReference(entity: Entity,) {
            return entity.referencesInSuperMario3DWorldStyle
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

        protected override readonly _EXCLUDED_NAMES = ['SMB', 'SMB3', 'SMW', 'NSMBU', 'SM3DW',] as const satisfies Array<keyof typeof GameStyles>

        public readonly URL_NAME_SEPARATOR = '/'
        public readonly NAME_ARGUMENT_SEPARATOR = ','

        // public readonly URL_REGEX = /.*\/game-style-((1|3|w|u|3dw)(,(1|3|w|u|3dw))*|(all))(\/|$)/i
        // public readonly SINGLE_URL_REGEX = /.*\/game-style-(1|3|w|u|3dw)(\/|$)/i
        public readonly PREFIX_WITHOUT_SLASH = 'game-style-'
        public readonly PREFIX = '/game-style-'
        public readonly ALL_PREFIX_GROUP = '/game-style-all/'

        //endregion -------------------- Fields --------------------

        public getValueByUrlValue(value: Nullable<| GameStyles | string | number>,): GameStyles {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null url value.`,)
            if (value instanceof this.instance)
                return value
            return getValueByUrlValue(`${value}`, this,)
        }

        public getValueByUrlName(value: Nullable<| GameStyles | string | number>,): GameStyles {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null url name.`,)
            if (value instanceof this.instance)
                return value
            return getValueByUrlName(`${value}`, this,)
        }

        public getValueByAcronym(value: Nullable<| GameStyles | string>,): GameStyles {
            return getValueByAcronym(value, this,)
        }

        public getValueByName(value: Nullable<| GameStyles | string>,): GameStyles {
            return getValueByEnglishName(value, this,)
        }


        public findInUrl(url: string,): CollectionHolder<GameStyles> {
            const lowerCasedUrl = url.toLowerCase()
            if (lowerCasedUrl.includes(this.ALL_PREFIX_GROUP,))
                return GameStylesPossibility.ALL

            const prefix = this.PREFIX
            if (!lowerCasedUrl.includes(prefix,))
                return EMPTY_COLLECTION_HOLDER

            /** All the possible {@link GameStyles.urlValue} that could be found in the url */
            const valuesFound = new ArrayAsCollection(lowerCasedUrl.substring(lowerCasedUrl.indexOf(prefix,) + prefix.length,).split(this.URL_NAME_SEPARATOR, 1,),).getFirst()
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
                                return GameStylesPossibility.ALL
                            return GameStylesPossibility.NOT_SM3DW
                        }
                        if (withSm3dw)
                            return GameStylesPossibility.NOT_NSMBU
                        return GameStylesPossibility.SMB_AND_SMB3_AND_SMW
                    }
                    if (withNsmbu) {
                        if (withSm3dw)
                            return GameStylesPossibility.NOT_SMW
                        return GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU
                    }
                    if (withSm3dw)
                        return GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW
                    return GameStylesPossibility.SMB_AND_SMB3
                }
                if (withSmw) {
                    if (withNsmbu) {
                        if (withSm3dw)
                            return GameStylesPossibility.NOT_SMB3
                        return GameStylesPossibility.SMB_AND_SMW_AND_NSMBU
                    }
                    if (withSm3dw)
                        return GameStylesPossibility.SMB_AND_SMW_AND_SM3DW
                    return GameStylesPossibility.SMB_AND_SMW
                }
                if (withNsmbu) {
                    if (withSm3dw)
                        return GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW
                    return GameStylesPossibility.SMB_AND_NSMBU
                }
                if (withSm3dw)
                    return GameStylesPossibility.SMB_AND_SM3DW
                return GameStylesPossibility.SMB_ONLY
            }
            if (withSmb3) {
                if (withSmw) {
                    if (withNsmbu) {
                        if (withSm3dw)
                            return GameStylesPossibility.NOT_SMB
                        return GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU
                    }
                    if (withSm3dw)
                        return GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW
                    return GameStylesPossibility.SMB3_AND_SMW
                }
                if (withNsmbu) {
                    if (withSm3dw)
                        return GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW
                    return GameStylesPossibility.SMB3_AND_NSMBU
                }
                if (withSm3dw)
                    return GameStylesPossibility.SMB3_AND_SM3DW
                return GameStylesPossibility.SMB3_ONLY
            }
            if (withSmw) {
                if (withNsmbu) {
                    if (withSm3dw)
                        return GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW
                    return GameStylesPossibility.SMW_AND_NSMBU
                }
                if (withSm3dw)
                    return GameStylesPossibility.SMW_AND_SM3DW
                return GameStylesPossibility.SMW_ONLY
            }
            if (withNsmbu) {
                if (withSm3dw)
                    return GameStylesPossibility.NSMBU_AND_SM3DW
                return GameStylesPossibility.NSMBU_ONLY
            }
            if (withSm3dw)
                return GameStylesPossibility.SM3DW_ONLY
            return EMPTY_COLLECTION_HOLDER
        }

        public findInName(name: string,): CollectionHolder<GameStyles> {
            const startingIndex = name.indexOf('GameStyle=',)
            if (startingIndex === -1)
                return EMPTY_COLLECTION_HOLDER

            const nameFromGameStyle = name.substring(startingIndex + 10,)
            if (nameFromGameStyle === 'all)' || nameFromGameStyle.startsWith('all ',))
                return GameStylesPossibility.ALL

            if (nameFromGameStyle === '1)' || nameFromGameStyle.startsWith('1 ',))
                return GameStylesPossibility.SMB_ONLY
            if (nameFromGameStyle === '3)' || nameFromGameStyle.startsWith('3 ',))
                return GameStylesPossibility.SMB3_ONLY
            if (nameFromGameStyle === 'W)' || nameFromGameStyle.startsWith('W ',))
                return GameStylesPossibility.SMW_ONLY
            if (nameFromGameStyle === 'U)' || nameFromGameStyle.startsWith('U ',))
                return GameStylesPossibility.NSMBU_ONLY
            if (nameFromGameStyle === '3DW)' || nameFromGameStyle.startsWith('3DW ',))
                return GameStylesPossibility.SM3DW_ONLY

            if (nameFromGameStyle === '1&3)' || nameFromGameStyle.startsWith('1&3 ',))
                return GameStylesPossibility.SMB_AND_SMB3
            if (nameFromGameStyle === '1&W)' || nameFromGameStyle.startsWith('1&W ',))
                return GameStylesPossibility.SMB_AND_SMW
            if (nameFromGameStyle === '1&U)' || nameFromGameStyle.startsWith('1&U ',))
                return GameStylesPossibility.SMB_AND_NSMBU
            if (nameFromGameStyle === '1&3DW)' || nameFromGameStyle.startsWith('1&3DW ',))
                return GameStylesPossibility.SMB_AND_SM3DW
            if (nameFromGameStyle === '3&W)' || nameFromGameStyle.startsWith('3&W ',))
                return GameStylesPossibility.SMB3_AND_SMW
            if (nameFromGameStyle === '3&U)' || nameFromGameStyle.startsWith('3&U ',))
                return GameStylesPossibility.SMB3_AND_NSMBU
            if (nameFromGameStyle === '3&3DW)' || nameFromGameStyle.startsWith('3&3DW ',))
                return GameStylesPossibility.SMB3_AND_SM3DW
            if (nameFromGameStyle === 'W&U)' || nameFromGameStyle.startsWith('W&U ',))
                return GameStylesPossibility.SMW_AND_NSMBU
            if (nameFromGameStyle === 'W&3DW)' || nameFromGameStyle.startsWith('W&3DW ',))
                return GameStylesPossibility.SMW_AND_SM3DW
            if (nameFromGameStyle === 'U&3DW)' || nameFromGameStyle.startsWith('U&3DW ',))
                return GameStylesPossibility.NSMBU_AND_SM3DW

            if (nameFromGameStyle === '1&3&W)' || nameFromGameStyle.startsWith('1&3&W ',))
                return GameStylesPossibility.SMB_AND_SMB3_AND_SMW
            if (nameFromGameStyle === '1&3&U)' || nameFromGameStyle.startsWith('1&3&U ',))
                return GameStylesPossibility.SMB_AND_SMB3_AND_NSMBU
            if (nameFromGameStyle === '1&3&3DW)' || nameFromGameStyle.startsWith('1&3&3DW ',))
                return GameStylesPossibility.SMB_AND_SMB3_AND_SM3DW
            if (nameFromGameStyle === '1&W&U)' || nameFromGameStyle.startsWith('1&W&U ',))
                return GameStylesPossibility.SMB_AND_SMW_AND_NSMBU
            if (nameFromGameStyle === '1&W&3DW)' || nameFromGameStyle.startsWith('1&W&3DW ',))
                return GameStylesPossibility.SMB_AND_SMW_AND_SM3DW
            if (nameFromGameStyle === '1&U&3DW)' || nameFromGameStyle.startsWith('1&U&3DW ',))
                return GameStylesPossibility.SMB_AND_NSMBU_AND_SM3DW
            if (nameFromGameStyle === '3&W&U)' || nameFromGameStyle.startsWith('3&W&U ',))
                return GameStylesPossibility.SMB3_AND_SMW_AND_NSMBU
            if (nameFromGameStyle === '3&W&3DW)' || nameFromGameStyle.startsWith('3&W&3DW ',))
                return GameStylesPossibility.SMB3_AND_SMW_AND_SM3DW
            if (nameFromGameStyle === '3&U&3DW)' || nameFromGameStyle.startsWith('3&U&3DW ',))
                return GameStylesPossibility.SMB3_AND_NSMBU_AND_SM3DW
            if (nameFromGameStyle === 'W&U&3DW)' || nameFromGameStyle.startsWith('W&U&3DW ',))
                return GameStylesPossibility.SMW_AND_NSMBU_AND_SM3DW

            if (nameFromGameStyle === '1&3&W&U)' || nameFromGameStyle.startsWith('1&3&W&U ',))
                return GameStylesPossibility.NOT_SM3DW
            if (nameFromGameStyle === '1&3&W&3DW)' || nameFromGameStyle.startsWith('1&3&W&3DW ',))
                return GameStylesPossibility.NOT_NSMBU
            if (nameFromGameStyle === '1&3&U&3DW)' || nameFromGameStyle.startsWith('1&3&U&3DW ',))
                return GameStylesPossibility.NOT_SMW
            if (nameFromGameStyle === '1&W&U&3DW)' || nameFromGameStyle.startsWith('1&W&U&3DW ',))
                return GameStylesPossibility.NOT_SMB3
            if (nameFromGameStyle === '3&W&U&3DW)' || nameFromGameStyle.startsWith('3&W&U&3DW ',))
                return GameStylesPossibility.NOT_SMB

            throw new ReferenceError(`No game styles have a name associated to the name "${name}".`,)
        }


        public getGroupUrlValue(gameStyles: CollectionHolder<GameStyles>,): GroupUrlValue {
            const withSmb = gameStyles.has(GameStyles.SUPER_MARIO_BROS,)
            const withSmb3 = gameStyles.has(GameStyles.SUPER_MARIO_BROS_3,)
            const withSmw = gameStyles.has(GameStyles.SUPER_MARIO_WORLD,)
            const withNsmbu = gameStyles.has(GameStyles.NEW_SUPER_MARIO_BROS_U,)
            const withSm3dw = gameStyles.has(GameStyles.SUPER_MARIO_3D_WORLD,)

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

        public getGroupUrlName(gameStyles: CollectionHolder<GameStyles>,): GroupUrlName {
            const withSmb = gameStyles.has(GameStyles.SUPER_MARIO_BROS,)
            const withSmb3 = gameStyles.has(GameStyles.SUPER_MARIO_BROS_3,)
            const withSmw = gameStyles.has(GameStyles.SUPER_MARIO_WORLD,)
            const withNsmbu = gameStyles.has(GameStyles.NEW_SUPER_MARIO_BROS_U,)
            const withSm3dw = gameStyles.has(GameStyles.SUPER_MARIO_3D_WORLD,)

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

    #reference?: GameStyle
    readonly #acronym
    readonly #acronymInFile
    readonly #englishName
    readonly #simpleValue
    #imageFile?: GameStyleImageFile
    readonly #urlValue

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(acronym: ACRONYM, acronymInFile: ACRONYM_IN_FILE, simpleValue: URL_NAME, urlValue: URL_VALUE, englishName: NAME,) {
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
        return this.#reference ??= GameStyles.REFERENCE_MAP.get(this.englishName,)!
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

    public get urlValue(): URL_VALUE {
        return this.#urlValue
    }

    public get urlName(): URL_NAME {
        return this.#simpleValue
    }

    public get imageFile(): GameStyleImageFile {
        return this.#imageFile ??= gameStyleImage(this.acronymInFile, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameStyleProperty,): boolean

    public abstract getReference(entity: Entity,): CollectionHolder<Entity>

    //endregion -------------------- Methods --------------------

}

export namespace GameStyles {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link GameStyles} */
    export const Companion = GameStyles.CompanionEnum.get

    export const ALL =      Companion.values
    export const ALL_SMM1 = new ArrayAsCollection([GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,],)

    /** An alias of {@link GameStyles.SUPER_MARIO_BROS} */
    export const SMB = GameStyles.SUPER_MARIO_BROS
    /** An alias of {@link GameStyles.SUPER_MARIO_BROS_3} */
    export const SMB3 = GameStyles.SUPER_MARIO_BROS_3
    /** An alias of {@link GameStyles.SUPER_MARIO_WORLD} */
    export const SMW = GameStyles.SUPER_MARIO_WORLD
    /** An alias of {@link GameStyles.NEW_SUPER_MARIO_BROS_U} */
    export const NSMBU = GameStyles.NEW_SUPER_MARIO_BROS_U
    /** An alias of {@link GameStyles.SUPER_MARIO_3D_WORLD} */
    export const SM3DW = GameStyles.SUPER_MARIO_3D_WORLD

}

//TODO remove this test variable when the application will be complete
(window.test ??= {}).GameStyles = GameStyles
