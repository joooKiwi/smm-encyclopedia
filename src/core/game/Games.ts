import type {CollectionHolder} from '@joookiwi/collection'
import type {Singleton}        from '@joookiwi/enumerable'
import type {Array, Nullable}  from '@joookiwi/type'
import {isArray}               from '@joookiwi/collection'
import {Enum}                  from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                          from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                      from 'core/ClassWithEnglishName'
import type {PropertyGetter}                                                                                                            from 'core/PropertyGetter'
import type {GameProperty}                                                                                                              from 'core/entity/properties/game/GameProperty'
import type {CompanionEnumDeclaration_Games}                                                                                            from 'core/game/Games.companionEnumDeclaration'
import type {GroupUrlName, GroupUrlValue, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleUrlValue, PossibleSimpleValue} from 'core/game/Games.types'
import type {GameImageFile}                                                                                                             from 'core/game/file/GameImageFile'
import type {ClassUsedInRoute}                                                                                                          from 'route/ClassUsedInRoute'
import type {ClassWithImageFile}                                                                                                        from 'util/file/image/ClassWithImageFile'

import {gameImage}                                                                       from 'core/game/file/fileCreator'
import {StringContainer}                                                                 from 'util/StringContainer'
import {Empty}                                                                           from 'util/emptyVariables'
import {getValueByAcronym, getValueByEnglishName, getValueByUrlName, getValueByUrlValue} from 'util/utilitiesMethods'
import {ArrayAsCollection}                                                               from 'util/collection/ArrayAsCollection'
import {CompanionEnumWithCurrentAndSetCurrentEventAsCollection}                          from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

/** @usedByTheRouting */
export abstract class Games<const ACRONYM extends PossibleAcronym = PossibleAcronym,
    const URL_NAME extends PossibleSimpleValue = PossibleSimpleValue,
    const URL_VALUE extends PossibleUrlValue = PossibleUrlValue,
    const NAME extends PossibleEnglishName = PossibleEnglishName,>
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<NAME>,
        ClassWithAcronym<ACRONYM>,
        ClassWithImageFile<GameImageFile<NAME>>,
        ClassUsedInRoute<URL_VALUE, URL_NAME>,
        PropertyGetter<GameProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_1 =                new class Games_SuperMarioMaker1 extends Games<'SMM', '1', '1', 'Super Mario Maker'> {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMaker1
        }

    }('SMM', '1', '1', 'Super Mario Maker',)
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class Games_SuperMarioMakerForNintendo3DS extends Games<'SMM3DS', '3DS', '3ds', 'Super Mario Maker for Nintendo 3DS'> {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMakerFor3DS
        }

    }('SMM3DS', '3DS', '3ds', 'Super Mario Maker for Nintendo 3DS',)
    public static readonly SUPER_MARIO_MAKER_2 =                new class Games_SuperMarioMaker2 extends Games<'SMM2', '2', '2', 'Super Mario Maker 2'> {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMaker2
        }

    }('SMM2', '2', '2', 'Super Mario Maker 2',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_Games> = class CompanionEnum_Games
        extends CompanionEnumWithCurrentAndSetCurrentEventAsCollection<Games, typeof Games>
        implements CompanionEnumDeclaration_Games {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Games

        private constructor() {
            super(Games,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Games()
        }

        //endregion -------------------- Singleton usage --------------------
        //region -------------------- Fields --------------------

        protected override readonly _EXCLUDED_NAMES = ['SMM1', 'SMM2', 'SMM3DS',] as const satisfies Array<keyof typeof Games>

        public readonly URL_NAME_SEPARATOR = '/'
        public readonly NAME_ARGUMENT_SEPARATOR = ','

        // public readonly URL_REGEX = /.*\/game-((1|3ds|2)(,(1|3ds|2))*|(all))(\/|$)/i
        // public readonly SINGLE_URL_REGEX = /.*\/game-(1|3ds|2)(\/|$)/i
        // public readonly DOUBLE_URL_REGEX = /.*\/game-(1|3ds),2(\/|$)/i
        public readonly PREFIX_WITHOUT_SLASH = 'game-'
        public readonly PREFIX = '/game-'
        public readonly ALL_PREFIX_GROUP = '/game-all/'

        //endregion -------------------- Fields --------------------

        public getValueByUrlValue(value: Nullable<| Games | string | number>,): Games {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null url value.`,)
            if (value instanceof this.instance)
                return value
            return getValueByUrlValue(`${value}`, this,)
        }

        public getValueByUrlName(value: Nullable<| Games | string | number>,): Games {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null url name.`,)
            if (value instanceof this.instance)
                return value
            return getValueByUrlName(`${value}`, this,)
        }

        public getValueByAcronym(value: Nullable<| Games | string>,): Games {
            return getValueByAcronym(value, this,)
        }

        public getValueByName(value: Nullable<| Games | string>,): Games {
            return getValueByEnglishName(value, this,)
        }


        public findInUrl(url: string,): CollectionHolder<Games> {
            const lowerCasedUrl = url.toLowerCase()
            if (lowerCasedUrl.includes(this.ALL_PREFIX_GROUP,))
                return Games.ALL

            const prefix = this.PREFIX
            if (!lowerCasedUrl.includes(prefix,))
                return EMPTY_COLLECTION_HOLDER

            /** All the possible {@link Games.urlValue} that could be found in the url */
            const valuesFound = new ArrayAsCollection(lowerCasedUrl.substring(lowerCasedUrl.indexOf(prefix,) + prefix.length,).split(this.URL_NAME_SEPARATOR, 1,),).getFirst()
            const withSmm1 = valuesFound.includes('1',)
            const withSmm3ds = valuesFound.includes('3ds',)
            const withSmm2 = valuesFound.includes('2',)

            if (withSmm1) {
                if (withSmm3ds) {
                    if (withSmm2)
                        return Games.ALL
                    return Games.SMM1_AND_3DS
                }
                if (withSmm2)
                    return Games.SMM1_AND_2
                return Games.SMM1_ONLY
            }
            if (withSmm3ds) {
                if (withSmm2)
                    return Games.SMM3DS_AND_2
                return Games.SMM3DS_ONLY
            }
            if (withSmm2)
                return Games.SMM2_ONLY
            return EMPTY_COLLECTION_HOLDER
        }

        public findInName(name: string,): CollectionHolder<Games> {
            const startingIndex = name.indexOf('Game=',)
            if (startingIndex === -1)
                return EMPTY_COLLECTION_HOLDER

            const nameFromGame = name.substring(startingIndex + 5,)
            if (nameFromGame === 'all)' || nameFromGame.startsWith('all ',))
                return Games.ALL

            if (nameFromGame === '1)' || nameFromGame.startsWith('1 ',))
                return Games.SMM1_ONLY
            if (nameFromGame === '3DS)' || nameFromGame.startsWith('3DS ',))
                return Games.SMM3DS_ONLY
            if (nameFromGame === '2)' || nameFromGame.startsWith('2 ',))
                return Games.SMM2_ONLY

            if (nameFromGame === '1&3DS)' || nameFromGame.startsWith('1&3DS ',))
                return Games.SMM1_AND_3DS
            if (nameFromGame === '1&2)' || nameFromGame.startsWith('1&2 ',))
                return Games.SMM1_AND_2
            if (nameFromGame === '3DS&2)' || nameFromGame.startsWith('3DS&2 ',))
                return Games.SMM3DS_AND_2

            throw new ReferenceError(`No games have a name associated to the name "${name}".`,)
        }

        public getGroupUrlValue(games: | Array<Games> | CollectionHolder<Games>,): GroupUrlValue {
            const games2 = isArray(games,) ? new ArrayAsCollection(games,) : games
            const withSmm1 = games2.has(Games.SUPER_MARIO_MAKER_1,)
            const withSmm3ds = games2.has(Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,)
            const withSmm2 = games2.has(Games.SUPER_MARIO_MAKER_2,)

            if (withSmm1) {
                if (withSmm3ds) {
                    if (withSmm2)
                        return 'all'
                    return '1,3ds'
                }
                if (withSmm2)
                    return '1,2'
                return '1'
            }
            if (withSmm3ds) {
                if (withSmm2)
                    return '3ds,2'
                return '3ds'
            }
            if (withSmm2)
                return '2'
            throw new ReferenceError('No game group url value is findable from empty array or collection.',)
        }

        public getGroupUrlName(games: | Array<Games> | CollectionHolder<Games>,): GroupUrlName {
            const games2 = isArray(games,) ? new ArrayAsCollection(games,) : games
            const withSmm1 = games2.has(Games.SUPER_MARIO_MAKER_1,)
            const withSmm3ds = games2.has(Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,)
            const withSmm2 = games2.has(Games.SUPER_MARIO_MAKER_2,)

            if (withSmm1) {
                if (withSmm3ds) {
                    if (withSmm2)
                        return 'all'
                    return '1&3DS'
                }
                if (withSmm2)
                    return '1&2'
                return '1'
            }
            if (withSmm3ds) {
                if (withSmm2)
                    return '3DS&2'
                return '3DS'
            }
            if (withSmm2)
                return '2'
            throw new ReferenceError('No game group url name is findable from empty array or collection.',)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #acronym
    readonly #englishName
    readonly #urlName
    readonly #urlValue
    #imageFile?: GameImageFile<NAME>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(acronym: ACRONYM, urlName: URL_NAME, urlValue: URL_VALUE, englishName: NAME,) {
        super()
        this.#acronym = acronym
        this.#englishName = new StringContainer(englishName,)
        this.#urlName = urlName
        this.#urlValue = urlValue
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get acronym(): ACRONYM {
        return this.#acronym
    }

    public get englishName(): NAME {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get urlName(): URL_NAME {
        return this.#urlName
    }

    public get urlValue(): URL_VALUE {
        return this.#urlValue
    }

    public get imageFile(): GameImageFile<NAME> {
        return this.#imageFile ??= gameImage(this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameProperty,): boolean

    //endregion -------------------- Methods --------------------

}

export namespace Games {

    /** The companion instance of a {@link Games} */
    export const Companion = Games.CompanionEnum.get

    //region -------------------- Singular possibility --------------------

    /** A {@link CollectionHolder} representing the games with only {@link SMM1} */
    export const SMM1_ONLY = new ArrayAsCollection([Games.SUPER_MARIO_MAKER_1,],)
    /** A {@link CollectionHolder} representing the games with only {@link SMM3DS} */
    export const SMM3DS_ONLY = new ArrayAsCollection([Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,],)
    /** A {@link CollectionHolder} representing the games with only {@link SMM2} */
    export const SMM2_ONLY = new ArrayAsCollection([Games.SUPER_MARIO_MAKER_2,],)

    /** A {@link CollectionHolder} representing the games with {@link SMM1} & {@link SMM3DS} */
    export const SMM1_AND_3DS = new ArrayAsCollection([Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,],)
    /** A {@link CollectionHolder} representing the games with {@link SMM1} & {@link SMM2} */
    export const SMM1_AND_2 = new ArrayAsCollection([Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_2,],)
    /** A {@link CollectionHolder} representing the games with {@link SMM3DS} & {@link SMM2} */
    export const SMM3DS_AND_2 = new ArrayAsCollection([Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, Games.SUPER_MARIO_MAKER_2,],)

    /**
     * A {@link CollectionHolder} representing the games with every game
     * ({@link SMM1}, {@link SMM3DS} & {@link SMM2})
     */
    const ALL_GAMES = Companion.values

    //endregion -------------------- Singular possibility --------------------
    //region -------------------- Group possibility --------------------

    /** Every single (1x) {@link Games} fields in the {@link Games} possibilities */
    export const EVERY_SINGLE_GAME = new ArrayAsCollection([SMM1_ONLY, SMM3DS_ONLY, SMM2_ONLY,],)

    /** Every double (2x) {@link Games} fields in the {@link Games} possibilitiesGamePossibility} */
    export const EVERY_DOUBLE_GAME = new ArrayAsCollection([SMM1_AND_3DS, SMM1_AND_2, SMM3DS_AND_2,],)

    /** Every {@link Games} fields in the {@link Games} possibilities */
    export const EVERY_GAME = new ArrayAsCollection([
        ALL_GAMES,
        SMM1_ONLY, SMM3DS_ONLY, SMM2_ONLY,
        SMM1_AND_3DS, SMM1_AND_2, SMM3DS_AND_2,
    ],)

    //endregion -------------------- Group possibility --------------------

    /** All the {@link Games} */
    export const ALL = ALL_GAMES

    /** An alias of {@link Games.SUPER_MARIO_MAKER_1} */
    export const SMM1 = Games.SUPER_MARIO_MAKER_1
    /** An alias of {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS} */
    export const SMM3DS = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
    /** An alias of {@link Games.SUPER_MARIO_MAKER_2} */
    export const SMM2 = Games.SUPER_MARIO_MAKER_2

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).Games = Games
