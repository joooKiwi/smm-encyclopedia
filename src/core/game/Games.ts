import type {CollectionHolder}                from '@joookiwi/collection'
import type {Singleton}                       from '@joookiwi/enumerable'
import type {Array, Nullable}                 from '@joookiwi/type'
import {getFirstByArray, hasByArray, isArray} from '@joookiwi/collection'
import {Enum}                                 from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                          from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                      from 'core/ClassWithEnglishName'
import type {PropertyGetter}                                                                                                            from 'core/PropertyGetter'
import type {GameProperty}                                                                                                              from 'core/entity/properties/game/GameProperty'
import type {CompanionEnumDeclaration_Games}                                                                                            from 'core/game/Games.companionEnumDeclaration'
import type {GroupUrlName, GroupUrlValue, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleUrlValue, PossibleSimpleValue} from 'core/game/Games.types'
import type {GameImageFile}                                                                                                             from 'core/game/file/GameImageFile'
import type {ClassUsedInRoute}                                                                                                          from 'route/ClassUsedInRoute'
import type {ClassWithImageFile}                                                                                                        from 'util/file/image/ClassWithImageFile'

import {gameImage}                                                    from 'core/game/file/fileCreator'
import {StringContainer}                                              from 'util/StringContainer'
import {Import}                                                       from 'util/DynamicImporter'
import {Empty}                                                        from 'util/emptyVariables'
import {getValueByAcronym, getValueByEnglishName, getValueByUrlValue} from 'util/utilitiesMethods'
import {CompanionEnumWithCurrentAndSetCurrentEventAsCollection}       from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

/**
 * @recursiveReference<{@link GamePossibility}>
 * @usedByTheRouting
 */
export abstract class Games<const ACRONYM extends PossibleAcronym = PossibleAcronym,
    const URL_VALUE extends PossibleUrlValue = PossibleUrlValue,
    const NAME extends PossibleEnglishName = PossibleEnglishName,>
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithAcronym<ACRONYM>,
        ClassWithImageFile<GameImageFile>,
        ClassUsedInRoute<PossibleUrlValue>,
        PropertyGetter<GameProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_1 =                new class Games_SuperMarioMaker1 extends Games<'SMM', '1', 'Super Mario Maker'> {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMaker1
        }

    }('SMM', '1', '1', 'Super Mario Maker',)
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class Games_SuperMarioMakerForNintendo3DS extends Games<'SMM3DS', '3ds', 'Super Mario Maker for Nintendo 3DS'> {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMakerFor3DS
        }

    }('SMM3DS', '3DS', '3ds', 'Super Mario Maker for Nintendo 3DS',)
    public static readonly SUPER_MARIO_MAKER_2 =                new class Games_SuperMarioMaker2 extends Games<'SMM2', '2', 'Super Mario Maker 2'> {

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

        protected override readonly _EXCLUDED_NAMES = ['SMM1', 'SMM2', 'SMM3DS',]

        public readonly URL_NAME_SEPARATOR = '/'
        public readonly NAME_ARGUMENT_SEPARATOR = ','

        public readonly URL_REGEX = /.*\/game-((1|3ds|2)(,(1|3ds|2))*|(all))(\/|$)/i
        public readonly SINGLE_URL_REGEX = /.*\/game-(1|3ds|2)(\/|$)/i
        public readonly DOUBLE_URL_REGEX = /.*\/game-(1|3ds),2(\/|$)/i
        public readonly PREFIX_WITHOUT_SLASH = 'game-'
        public readonly PREFIX = '/game-'
        public readonly ALL_PREFIX_GROUP = '/game-all/'

        //endregion -------------------- Fields --------------------

        public getValueByUrlValue(value: Nullable<| Games | string>,): Games {
            return getValueByUrlValue(value, this,)
        }

        public getValueByAcronym(value: Nullable<| Games | string>,): Games {
            return getValueByAcronym(value, this,)
        }

        public getValueByName(value: Nullable<| Games | string>,): Games {
            return getValueByEnglishName(value, this,)
        }

        public getValueBySimpleValue(value: Nullable<| Games | string | number>,): Games {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null simple value.`,)
            if (value instanceof this.instance)
                return value
            const stringValue = `${value}`
            const valueFound = this.values.findFirstOrNull(it => it.simpleValue === stringValue,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }


        public getValueInUrl(url: string,): Array<Games> {
            const lowerCasedUrl = url.toLowerCase()
            if (lowerCasedUrl.includes(this.ALL_PREFIX_GROUP,))
                return Import.GamePossibility.ALL_GAMES

            const prefix = this.PREFIX
            if (!lowerCasedUrl.includes(prefix,))
                return EMPTY_ARRAY

            /** All the possible {@link Games.urlValue} that could be found in the url */
            const valuesFound = getFirstByArray(lowerCasedUrl.substring(lowerCasedUrl.indexOf(prefix,) + prefix.length,).split(this.URL_NAME_SEPARATOR, 1,),)
            const withSmm1 = valuesFound.includes('1',)
            const withSmm3ds = valuesFound.includes('3ds',)
            const withSmm2 = valuesFound.includes('2',)

            if (withSmm1) {
                if (withSmm3ds) {
                    if (withSmm2)
                        return Import.GamePossibility.ALL_GAMES
                    return Import.GamePossibility.SMM1_AND_3DS
                }
                if (withSmm2)
                    return Import.GamePossibility.SMM1_AND_2
                return Import.GamePossibility.SMM1_ONLY
            }
            if (withSmm3ds) {
                if (withSmm2)
                    return Import.GamePossibility.SMM3DS_AND_2
                return Import.GamePossibility.SMM3DS_ONLY
            }
            if (withSmm2)
                return Import.GamePossibility.SMM2_ONLY
            return EMPTY_ARRAY
        }

        public getGroupUrlValue(games: | Array<Games> | CollectionHolder<Games>,): GroupUrlValue {
            const isGamesArray = isArray(games,)
            const withSmm1 = isGamesArray ? hasByArray(games, Games.SUPER_MARIO_MAKER_1,) : games.has(Games.SUPER_MARIO_MAKER_1,)
            const withSmm3ds = isGamesArray ? hasByArray(games, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,) : games.has(Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,)
            const withSmm2 = isGamesArray ? hasByArray(games, Games.SUPER_MARIO_MAKER_2,) : games.has(Games.SUPER_MARIO_MAKER_2,)

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
            const isGamesArray = isArray(games,)
            const withSmm1 = isGamesArray ? hasByArray(games, Games.SUPER_MARIO_MAKER_1,) : games.has(Games.SUPER_MARIO_MAKER_1,)
            const withSmm3ds = isGamesArray ? hasByArray(games, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,) : games.has(Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,)
            const withSmm2 = isGamesArray ? hasByArray(games, Games.SUPER_MARIO_MAKER_2,) : games.has(Games.SUPER_MARIO_MAKER_2,)

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
    readonly #simpleValue
    #imageFile?: GameImageFile
    readonly #urlValue

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(acronym: ACRONYM, simpleValue: PossibleSimpleValue, urlValue: URL_VALUE, englishName: NAME,) {
        super()
        this.#acronym = acronym
        this.#englishName = new StringContainer(englishName,)
        this.#simpleValue = simpleValue
        this.#urlValue = urlValue
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public get acronym(): ACRONYM {
        return this.#acronym
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

    public get imageFile(): GameImageFile {
        return this.#imageFile ??= gameImage(this.englishName,)
    }

    public get urlValue(): URL_VALUE {
        return this.#urlValue
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameProperty,): boolean

    //endregion -------------------- Methods --------------------

}

export namespace Games {

    /** All the {@link Games} */
    export const ALL = [Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, Games.SUPER_MARIO_MAKER_2,] as const

    /** An alias of {@link Games.SUPER_MARIO_MAKER_1} */
    export const SMM1 = Games.SUPER_MARIO_MAKER_1
    /** An alias of {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS} */
    export const SMM3DS = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
    /** An alias of {@link Games.SUPER_MARIO_MAKER_2} */
    export const SMM2 = Games.SUPER_MARIO_MAKER_2

}

// TODO remove this test variable when the application will be complete
// @ts-ignore
(window.test ??= {}).Games = Games
