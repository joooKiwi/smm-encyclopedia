import type {CollectionHolder} from '@joookiwi/collection'
import type {Singleton} from '@joookiwi/enumerable'
import {Enum}           from '@joookiwi/enumerable'

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

import {GameStyleLoader}                                                                             from 'core/gameStyle/GameStyle.loader'
import {gameStyleImage}                                                                              from 'core/gameStyle/file/fileCreator'
import {StringContainer}                                                                             from 'util/StringContainer'
import {EMPTY_ARRAY}                                                                                 from 'util/emptyVariables'
import {getValueByAcronym, getValueByEnglishName, getValueByUrlValue, has, intersect, isArrayEquals} from 'util/utilitiesMethods'
import {CompanionEnumWithCurrentAndSetCurrentEventAsCollection}                                      from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'

/**
 * @recursiveReference<{@link GameStyleLoader}>
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
            //region -------------------- "all" possibility --------------------

            const lowerCasedUrl = url.toLowerCase()

            if (lowerCasedUrl.includes(this.ALL_PREFIX_GROUP,))
                return this.ALL

            //endregion -------------------- "all" possibility --------------------

            const prefix = this.PREFIX
            if (!lowerCasedUrl.includes(prefix,))
                return EMPTY_ARRAY

            //region -------------------- Possibilities from 1 to 5 arguments --------------------

            const valuesFound = lowerCasedUrl.substring(lowerCasedUrl.indexOf(prefix,) + prefix.length,).split(this.URL_NAME_SEPARATOR, 1,)[0]
            const separatedValuesFound = valuesFound.split(this.NAME_ARGUMENT_SEPARATOR,)
            const amountOfValues = separatedValuesFound.length

            if (amountOfValues === 1) {
                if (valuesFound === 'smb')
                    return GameStyles.Possibilities.get.SMB_ONLY
                if (valuesFound === 'smb3')
                    return GameStyles.Possibilities.get.SMB3_ONLY
                if (valuesFound === 'smw')
                    return GameStyles.Possibilities.get.SMW_ONLY
                if (valuesFound === 'nsmbu')
                    return GameStyles.Possibilities.get.NSMBU_ONLY
                if (valuesFound === 'sm3dw')
                    return GameStyles.Possibilities.get.SM3DW_ONLY

                return EMPTY_ARRAY
            }

            if (amountOfValues === 2) {
                if (valuesFound === 'smb,smb')
                    return GameStyles.Possibilities.get.SMB_ONLY
                if (valuesFound === 'smb3,smb3')
                    return GameStyles.Possibilities.get.SMB3_ONLY
                if (valuesFound === 'smw,smw')
                    return GameStyles.Possibilities.get.SMW_ONLY
                if (valuesFound === 'nsmbu,nsmbu')
                    return GameStyles.Possibilities.get.NSMBU_ONLY
                if (valuesFound === 'sm3dw,sm3dw')
                    return GameStyles.Possibilities.get.SM3DW_ONLY

                if (valuesFound === 'smb,smb3' || valuesFound === 'smb3,smb')
                    return GameStyles.Possibilities.get.SMB_AND_SMB3
                if (valuesFound === 'smb,smw' || valuesFound === 'smw,smb')
                    return GameStyles.Possibilities.get.SMB_AND_SMW
                if (valuesFound === 'smb,nsmbu' || valuesFound === 'nsmbu,smb')
                    return GameStyles.Possibilities.get.SMB_AND_NSMBU
                if (valuesFound === 'smb,sm3dw' || valuesFound === 'sm3dw,smb')
                    return GameStyles.Possibilities.get.SMB_AND_SM3DW
                if (valuesFound === 'smb3,smw' || valuesFound === 'smw,smb3')
                    return GameStyles.Possibilities.get.SMB3_AND_SMW
                if (valuesFound === 'smb3,nsmbu' || valuesFound === 'nsmbu,smb3')
                    return GameStyles.Possibilities.get.SMB3_AND_NSMBU
                if (valuesFound === 'smb3,sm3dw' || valuesFound === 'sm3dw,smb3')
                    return GameStyles.Possibilities.get.SMB3_AND_SM3DW
                if (valuesFound === 'smw,nsmbu' || valuesFound === 'nsmbu,smw')
                    return GameStyles.Possibilities.get.SMW_AND_NSMBU
                if (valuesFound === 'smw,sm3dw' || valuesFound === 'sm3dw,smw')
                    return GameStyles.Possibilities.get.SMW_AND_SM3DW
                if (valuesFound === 'nsmbu,sm3dw' || valuesFound === 'sm3dw,nsmbu')
                    return GameStyles.Possibilities.get.NSMBU_AND_SM3DW

                return EMPTY_ARRAY
            }

            if (amountOfValues === 3) {
                if (valuesFound === 'smb,smb,smb')
                    return GameStyles.Possibilities.get.SMB_ONLY
                if (valuesFound === 'smb3,smb3,smb3')
                    return GameStyles.Possibilities.get.SMB3_ONLY
                if (valuesFound === 'smw,smw,smw')
                    return GameStyles.Possibilities.get.SMW_ONLY
                if (valuesFound === 'nsmbu,nsmbu,nsmbu')
                    return GameStyles.Possibilities.get.NSMBU_ONLY
                if (valuesFound === 'sm3dw,sm3dw,sm3dw')
                    return GameStyles.Possibilities.get.SM3DW_ONLY

                const tripleValuesFound = this.tripleFields.find(it =>
                    separatedValuesFound.includes(it[0].urlValue,)
                    && separatedValuesFound.includes(it[1].urlValue,)
                    && separatedValuesFound.includes(it[2].urlValue,),)
                if (tripleValuesFound != null)
                    return tripleValuesFound

                const doubleValuesFound = this.doubleFields.find(it =>
                    separatedValuesFound.includes(it[0].urlValue,)
                    && separatedValuesFound.includes(it[1].urlValue,),)
                if (doubleValuesFound != null)
                    return doubleValuesFound

                return EMPTY_ARRAY
            }

            if (amountOfValues === 4) {
                if (valuesFound === 'smb,smb,smb,smb')
                    return GameStyles.Possibilities.get.SMB_ONLY
                if (valuesFound === 'smb3,smb3,smb3,smb3')
                    return GameStyles.Possibilities.get.SMB3_ONLY
                if (valuesFound === 'smw,smw,smw,smw')
                    return GameStyles.Possibilities.get.SMW_ONLY
                if (valuesFound === 'nsmbu,nsmbu,nsmbu,nsmbu')
                    return GameStyles.Possibilities.get.NSMBU_ONLY
                if (valuesFound === 'sm3dw,sm3dw,sm3dw,sm3dw')
                    return GameStyles.Possibilities.get.SM3DW_ONLY

                const quadrupleValuesFound = this.quadrupleFields.find(it =>
                    separatedValuesFound.includes(it[0].urlValue,)
                    && separatedValuesFound.includes(it[1].urlValue,)
                    && separatedValuesFound.includes(it[2].urlValue,)
                    && separatedValuesFound.includes(it[3].urlValue,),)
                if (quadrupleValuesFound != null)
                    return quadrupleValuesFound

                const tripleValuesFound = this.tripleFields.find(it =>
                    separatedValuesFound.includes(it[0].urlValue,)
                    && separatedValuesFound.includes(it[1].urlValue,)
                    && separatedValuesFound.includes(it[2].urlValue,),)
                if (tripleValuesFound != null)
                    return tripleValuesFound

                const doubleValuesFound = this.doubleFields.find(it =>
                    separatedValuesFound.includes(it[0].urlValue,)
                    && separatedValuesFound.includes(it[1].urlValue,),)
                if (doubleValuesFound != null)
                    return doubleValuesFound

                return EMPTY_ARRAY
            }

            if (amountOfValues === 5) {
                const all = this.ALL
                if (separatedValuesFound.includes(all[0].urlValue,)
                    && separatedValuesFound.includes(all[1].urlValue,)
                    && separatedValuesFound.includes(all[2].urlValue,)
                    && separatedValuesFound.includes(all[3].urlValue,)
                    && separatedValuesFound.includes(all[4].urlValue,))
                    return all

                if (valuesFound === 'smb,smb,smb,smb,smb')
                    return GameStyles.Possibilities.get.SMB_ONLY
                if (valuesFound === 'smb3,smb3,smb3,smb3,smb3')
                    return GameStyles.Possibilities.get.SMB3_ONLY
                if (valuesFound === 'smw,smw,smw,smw,smw')
                    return GameStyles.Possibilities.get.SMW_ONLY
                if (valuesFound === 'nsmbu,nsmbu,nsmbu,nsmbu,nsmbu')
                    return GameStyles.Possibilities.get.NSMBU_ONLY
                if (valuesFound === 'sm3dw,sm3dw,sm3dw,sm3dw,sm3dw')
                    return GameStyles.Possibilities.get.SM3DW_ONLY

                const quadrupleValuesFound = this.quadrupleFields.find(it =>
                    separatedValuesFound.includes(it[0].urlValue,)
                    && separatedValuesFound.includes(it[1].urlValue,)
                    && separatedValuesFound.includes(it[2].urlValue,)
                    && separatedValuesFound.includes(it[3].urlValue,),)
                if (quadrupleValuesFound != null)
                    return quadrupleValuesFound

                const tripleValuesFound = this.tripleFields.find(it =>
                    separatedValuesFound.includes(it[0].urlValue,)
                    && separatedValuesFound.includes(it[1].urlValue,)
                    && separatedValuesFound.includes(it[2].urlValue,),)
                if (tripleValuesFound != null)
                    return tripleValuesFound

                const doubleValuesFound = this.doubleFields.find(it =>
                    separatedValuesFound.includes(it[0].urlValue,)
                    && separatedValuesFound.includes(it[1].urlValue,),)
                if (doubleValuesFound != null)
                    return doubleValuesFound

                return EMPTY_ARRAY
            }

            //endregion -------------------- Possibilities from 1 to 5 arguments --------------------

            if (!this.URL_REGEX.test(url,))
                return EMPTY_ARRAY

            //region -------------------- Valid possibilities from unknown amount of arguments --------------------

            const valuesFoundAsGameStyle = new Array<GameStyles>(amountOfValues,)
            let index = amountOfValues
            while (index-- > 0)
                valuesFoundAsGameStyle[index] = this.getValueByUrlValue(separatedValuesFound[index],)

            const uniqueValuesFound = intersect(this.values, valuesFoundAsGameStyle,)
            return this.fields.find(it => isArrayEquals(it, uniqueValuesFound,),)!

            //endregion -------------------- Valid possibilities from unknown amount of arguments --------------------
        }

        public getGroupUrlValue(gameStyles: | readonly GameStyles[] | CollectionHolder<GameStyles>,): GroupUrlValue {
            const withSmb = has(gameStyles, GameStyles.SUPER_MARIO_BROS,)
            const withSmb3 = has(gameStyles, GameStyles.SUPER_MARIO_BROS_3,)
            const withSmw = has(gameStyles, GameStyles.SUPER_MARIO_WORLD,)
            const withNsmbu = has(gameStyles, GameStyles.NEW_SUPER_MARIO_BROS_U,)
            const withSm3dw = has(gameStyles, GameStyles.SUPER_MARIO_3D_WORLD,)

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
            const withSmb = has(gameStyles, GameStyles.SUPER_MARIO_BROS,)
            const withSmb3 = has(gameStyles, GameStyles.SUPER_MARIO_BROS_3,)
            const withSmw = has(gameStyles, GameStyles.SUPER_MARIO_WORLD,)
            const withNsmbu = has(gameStyles, GameStyles.NEW_SUPER_MARIO_BROS_U,)
            const withSm3dw = has(gameStyles, GameStyles.SUPER_MARIO_3D_WORLD,)

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
