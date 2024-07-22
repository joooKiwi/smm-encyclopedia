import type {CollectionHolder} from '@joookiwi/collection'
import type {Singleton}        from '@joookiwi/enumerable'
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

import {gameImage}                                                                              from 'core/game/file/fileCreator'
import {StringContainer}                                                                        from 'util/StringContainer'
import {getValueByAcronym, getValueByEnglishName, getValueByUrlValue, intersect, isArrayEquals} from 'util/utilitiesMethods'
import {EMPTY_ARRAY}                                                                            from 'util/emptyVariables'
import {CompanionEnumWithCurrentAndSetCurrentEventAsCollection}                                 from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'

/** @usedByTheRouting */
export abstract class Games
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithImageFile<GameImageFile>,
        ClassUsedInRoute<PossibleUrlValue>,
        PropertyGetter<GameProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_1 =                new class Games_SuperMarioMaker1 extends Games {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMaker1
        }

    }('SMM', '1', '1', 'Super Mario Maker',)
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class Games_SuperMarioMakerForNintendo3DS extends Games {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMakerFor3DS
        }

    }('SMM3DS', '3DS', '3ds', 'Super Mario Maker for Nintendo 3DS',)
    public static readonly SUPER_MARIO_MAKER_2 =                new class Games_SuperMarioMaker2 extends Games {

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

        public readonly ALL = Games.Possibilities.get.ALL_GAMES

        public get singleFields() {
            return Games.Possibilities.get.everySingleGameFields
        }

        public get doubleFields() {
            return Games.Possibilities.get.everyDoubleGameFields
        }

        public get fields() {
            return Games.Possibilities.get.everyFields
        }


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
            const valueFound = this.values.find(it => it.simpleValue === stringValue,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }


        public getValueInUrl(url: string,): readonly Games[] {
            //region -------------------- "all" possibility --------------------

            const lowerCasedUrl = url.toLowerCase()

            if (lowerCasedUrl.includes(this.ALL_PREFIX_GROUP,))
                return this.ALL

            //endregion -------------------- "all" possibility --------------------

            const prefix = this.PREFIX
            if (!lowerCasedUrl.includes(prefix,))
                return EMPTY_ARRAY

            //region -------------------- Possibilities from 1 to 3 arguments --------------------

            const valuesFound = lowerCasedUrl.substring(lowerCasedUrl.indexOf(prefix,) + prefix.length,).split(this.URL_NAME_SEPARATOR, 1,)[0]
            const separatedValuesFound = valuesFound.split(this.NAME_ARGUMENT_SEPARATOR,)
            const amountOfValues = separatedValuesFound.length

            if (amountOfValues === 1) {
                if (valuesFound === '1')
                    return Games.Possibilities.get.SMM1_ONLY
                if (valuesFound === '3ds')
                    return Games.Possibilities.get.SMM3DS_ONLY
                if (valuesFound === '2')
                    return Games.Possibilities.get.SMM2_ONLY

                return EMPTY_ARRAY
            }

            if (amountOfValues === 2) {
                if (valuesFound === '1,1')
                    return Games.Possibilities.get.SMM1_ONLY
                if (valuesFound === '3ds,3ds')
                    return Games.Possibilities.get.SMM3DS_ONLY
                if (valuesFound === '2,2')
                    return Games.Possibilities.get.SMM2_ONLY

                if (valuesFound === '1,3ds' || valuesFound === '3ds,1')
                    return Games.Possibilities.get.SMM1_AND_3DS
                if (valuesFound === '1,2' || valuesFound === '2,1')
                    return Games.Possibilities.get.SMM1_AND_2
                if (valuesFound === '3ds,2' || valuesFound === '2,3ds')
                    return Games.Possibilities.get.SMM1_AND_2

                return EMPTY_ARRAY
            }

            if (amountOfValues === 3) {
                const all = this.ALL
                if (separatedValuesFound.includes(all[0].urlValue,)
                    && separatedValuesFound.includes(all[1].urlValue,)
                    && separatedValuesFound.includes(all[2].urlValue,))
                    return all

                if (valuesFound === '1,1,1')
                    return Games.Possibilities.get.SMM1_ONLY
                if (valuesFound === '3ds,3ds,3ds')
                    return Games.Possibilities.get.SMM3DS_ONLY
                if (valuesFound === '2,2,2')
                    return Games.Possibilities.get.SMM2_ONLY

                const doubleValuesFound = this.doubleFields.find(it =>
                    separatedValuesFound.includes(it[0].urlValue,)
                    && separatedValuesFound.includes(it[1].urlValue,),)
                if (doubleValuesFound != null)
                    return doubleValuesFound

                return EMPTY_ARRAY
            }

            //endregion -------------------- Possibilities from 1 to 3 arguments --------------------

            if (!this.URL_REGEX.test(url,))
                return EMPTY_ARRAY

            //region -------------------- Valid possibilities from unknown amount of arguments --------------------

            const valuesFoundAsGame = new Array<Games>(amountOfValues,)
            let index = amountOfValues
            while (index-- > 0)
                valuesFoundAsGame[index] = this.getValueByUrlValue(separatedValuesFound[index],)

            const uniqueValuesFound = intersect(this.values, valuesFoundAsGame,)
            return this.fields.find(it => isArrayEquals(it, uniqueValuesFound,),)!

            //endregion -------------------- Valid possibilities --------------------
        }

        public getGroupUrlValue(games: | readonly Games[] | CollectionHolder<Games>,): GroupUrlValue {
            let withSmm1 = false
            const smm1 = Games.SUPER_MARIO_MAKER_1
            for (let game of games)
                if (game === smm1) {
                    withSmm1 = true
                    break
                }

            let withSmm3ds = false
            const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
            for (let game of games)
                if (game === smm3ds) {
                    withSmm3ds = true
                    break
                }

            let withSmm2 = false
            const smm2 = Games.SUPER_MARIO_MAKER_2
            for (let game of games)
                if (game === smm2) {
                    withSmm2 = true
                    break
                }

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

        public getGroupUrlName(games: | readonly Games[] | CollectionHolder<Games>,): GroupUrlName {
            let withSmm1 = false
            const smm1 = Games.SUPER_MARIO_MAKER_1
            for (let game of games)
                if (game === smm1) {
                    withSmm1 = true
                    break
                }

            let withSmm3ds = false
            const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
            for (let game of games)
                if (game === smm3ds) {
                    withSmm3ds = true
                    break
                }

            let withSmm2 = false
            const smm2 = Games.SUPER_MARIO_MAKER_2
            for (let game of games)
                if (game === smm2) {
                    withSmm2 = true
                    break
                }

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
    //region -------------------- Companion --------------------

    /**
     * A simple companion class to the {@link Games} but for the game possibilities (in stored {@link Array}).
     *
     * @note This class is only used in the {@link EveryRoutes}
     */
    public static readonly Possibilities = class Companion_Possibilities {

        //region -------------------- Singleton usage --------------------

        static #instance?: Companion_Possibilities

        private constructor() {}

        public static get get() {
            return Companion_Possibilities.#instance ??= new Companion_Possibilities()
        }

        //endregion -------------------- Singleton usage --------------------
        //region -------------------- Fields --------------------

        #everySingleFields?: readonly (readonly [Games,])[]
        #everyDoubleFields?: readonly (readonly [Games, Games,])[]
        #everyFields?: readonly (readonly Games[])[]

        /** An array representing the games with only {@link Games.SUPER_MARIO_MAKER_1 SMM1} */
        public readonly SMM1_ONLY = [Games.SUPER_MARIO_MAKER_1,] as const
        /** An array representing the games with only {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} */
        public readonly SMM3DS_ONLY = [Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,] as const
        /** An array representing the games with only {@link Games.SUPER_MARIO_MAKER_2 SMM2} */
        public readonly SMM2_ONLY = [Games.SUPER_MARIO_MAKER_2,] as const

        /** An array representing the games with SMM {@link Games.SUPER_MARIO_MAKER_1 1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS 3DS} */
        public readonly SMM1_AND_3DS = [Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,] as const
        /** An array representing the games with SMM {@link Games.SUPER_MARIO_MAKER_1 1} & {@link Games.SUPER_MARIO_MAKER_2 2} */
        public readonly SMM1_AND_2 = [Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_2,] as const
        /** An array representing the games with SMM {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS 3DS} & {@link Games.SUPER_MARIO_MAKER_2 2} */
        public readonly SMM3DS_AND_2 = [Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, Games.SUPER_MARIO_MAKER_2,] as const

        /**
         * An array representing the games with every SMM games
         * ({@link Games.SUPER_MARIO_MAKER_1 1}, {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS 3DS} & {@link Games.SUPER_MARIO_MAKER_2 2})
         */
        public readonly ALL_GAMES = [Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, Games.SUPER_MARIO_MAKER_2,] as const

        //endregion -------------------- Fields --------------------
        //region -------------------- Getter methods --------------------

        /** Every single (1x) {@link Games} fields in the {@link Companion_Possibilities current instance} */
        public get everySingleGameFields(): readonly (readonly [Games,])[] {
            return this.#everySingleFields ??= [this.SMM1_ONLY, this.SMM3DS_ONLY, this.SMM2_ONLY,]
        }

        /** Every double (2x) {@link Games} fields in the {@link Companion_Possibilities current instance} */
        public get everyDoubleGameFields(): readonly (readonly [Games, Games,])[] {
            return this.#everyDoubleFields ??= [this.SMM1_AND_3DS, this.SMM1_AND_2, this.SMM3DS_AND_2,]
        }

        public get everyFields(): readonly (readonly Games[])[] {
            return this.#everyFields ??= [
                this.ALL_GAMES,
                this.SMM1_ONLY, this.SMM3DS_ONLY, this.SMM2_ONLY,
                this.SMM1_AND_3DS, this.SMM1_AND_2, this.SMM3DS_AND_2,
            ]
        }

        //endregion -------------------- Getter methods --------------------

    }

    //endregion -------------------- Companion --------------------
    //region -------------------- Fields --------------------

    readonly #acronym
    readonly #englishName
    readonly #simpleValue
    #imageFile?: GameImageFile
    readonly #urlValue

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(acronym: PossibleAcronym, simpleValue: PossibleSimpleValue, urlValue: PossibleUrlValue, englishName: PossibleEnglishName,) {
        super()
        this.#acronym = acronym
        this.#englishName = new StringContainer(englishName,)
        this.#simpleValue = simpleValue
        this.#urlValue = urlValue
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public get acronym(): PossibleAcronym {
        return this.#acronym
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

    public get imageFile(): GameImageFile {
        return this.#imageFile ??= gameImage(this.englishName,)
    }

    public get urlValue(): PossibleUrlValue {
        return this.#urlValue
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameProperty,): boolean

    //endregion -------------------- Methods --------------------

}

// TODO remove this test variable when the application will be complete
// @ts-ignore
(window.test ??= {}).Games = Games
