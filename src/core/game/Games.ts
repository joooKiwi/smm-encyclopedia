import type {CollectionHolder} from '@joookiwi/collection'
import type {Singleton}        from '@joookiwi/enumerable'
import {CompanionEnum, Enum}   from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                  from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                              from 'core/ClassWithEnglishName'
import type {PropertyGetter}                                                                                                    from 'core/PropertyGetter'
import type {GameProperty}                                                                                                      from 'core/entity/properties/game/GameProperty'
import type {CompanionEnumDeclaration_Games}                                                                                    from 'core/game/Games.companionEnumDeclaration'
import type {GroupUrlValue, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleSimpleUrlValue, PossibleSimpleValue} from 'core/game/Games.types'
import type {GameImageFile}                                                                                                     from 'core/game/file/GameImageFile'
import type {ClassUsedInRoute}                                                                                                  from 'route/ClassUsedInRoute'
import type {ClassWithImageFile}                                                                                                from 'util/file/image/ClassWithImageFile'
import type {Selectable}                                                                                                        from 'util/types/Selectable'

import GameComponent                                                                            from 'core/game/Game.component'
import {gameImage}                                                                              from 'core/game/file/fileCreator'
import {StringContainer}                                                                        from 'util/StringContainer'
import {getValueByAcronym, getValueByEnglishName, getValueByUrlValue, intersect, isArrayEquals} from 'util/utilitiesMethods'
import {GameCollection}                                                                         from 'util/collection/GameCollection'
import {EMPTY_ARRAY}                                                                            from 'util/emptyVariables'

/** @usedByTheRouting */
export abstract class Games
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithImageFile<GameImageFile>,
        ClassUsedInRoute<PossibleSimpleUrlValue>,
        Selectable,
        PropertyGetter<GameProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_1 =                new class Games_SuperMarioMaker1 extends Games {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMaker1
        }

    }('SMM', '1', '1', 'Super Mario Maker', false,)
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class Games_SuperMarioMakerForNintendo3DS extends Games {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMakerFor3DS
        }

    }('SMM3DS', '3DS', '3ds', 'Super Mario Maker for Nintendo 3DS', false,)
    public static readonly SUPER_MARIO_MAKER_2 =                new class Games_SuperMarioMaker2 extends Games {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMaker2
        }

    }('SMM2', '2', '2', 'Super Mario Maker 2', true,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_Games> = class CompanionEnum_Games
        extends CompanionEnum<Games, typeof Games>
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

        public readonly ALL = Games.GamePossibilitiesCompanion.get.ALL_GAMES

        public get singleFields() {
            return Games.GamePossibilitiesCompanion.get.everySingleGameFields
        }

        public get doubleFields() {
            return Games.GamePossibilitiesCompanion.get.everyDoubleGameFields
        }

        public get fields() {
            return Games.GamePossibilitiesCompanion.get.everyFields
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

            //endregion -------------------- Valid possibilities --------------------

            if (!this.URL_REGEX.test(url,))
                return EMPTY_ARRAY

            //region -------------------- Valid possibilities from unknown amount of arguments --------------------

            const prefixWithoutSlash = this.PREFIX_WITHOUT_SLASH
            const valuesInUrlsFound = lowerCasedUrl.split(this.URL_NAME_SEPARATOR,).find(it => it.startsWith(prefixWithoutSlash,) && (it.endsWith('1',) || it.endsWith('2',) || it.endsWith('3ds',)),)!.substring(prefixWithoutSlash.length,).split(this.NAME_ARGUMENT_SEPARATOR,)
            const size = valuesInUrlsFound.length
            const valuesFound = new Array<Games>(size,)
            let index = size
            while (index-- > 0)
                valuesFound[index] = this.getValueByUrlValue(valuesInUrlsFound[index],)

            const uniqueValuesFound = intersect(this.values, valuesFound,).toArray()
            return this.fields.find(it => isArrayEquals(it, uniqueValuesFound,),)!

            //endregion -------------------- Valid possibilities --------------------
        }


        public get selected(): GameCollection {
            return new GameCollection(this.values.filter(it => it.isSelected,),)
        }

        public set selected(value: readonly Games[],) {
            this.values.forEach(it => it.isSelected = value.includes(it,),)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Companion --------------------

    /**
     * A simple companion class to the {@link Games} but for the game possibilities (in stored {@link Array}).
     *
     * @note This class is only used in the {@link EveryRoutes}
     * @todo Rename to Possibilities
     */
    public static readonly GamePossibilitiesCompanion = class Companion_Possibilities {

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

    #isSelected

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(acronym: PossibleAcronym, simpleValue: PossibleSimpleValue, urlValue: PossibleSimpleUrlValue, englishName: PossibleEnglishName, isSelected: boolean,) {
        super()
        this.#acronym = acronym
        this.#englishName = new StringContainer(englishName,)
        this.#simpleValue = simpleValue
        this.#urlValue = urlValue
        this.#isSelected = isSelected
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

    public get urlValue(): PossibleSimpleUrlValue {
        return this.#urlValue
    }


    public get isSelected(): boolean {
        return this.#isSelected
    }

    public set isSelected(value: boolean,) {
        this.#isSelected = value
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameProperty,): boolean

    public get renderSingleComponent() {
        return GameComponent.renderSingleComponent(this)
    }



    public static getGroupUrlValue(games: | readonly Games[] | CollectionHolder<Games>,): GroupUrlValue {
        return Games.CompanionEnum.get.getGroupUrlValue(games,)
    }

    public static get selected(): GameCollection {
        return Games.CompanionEnum.get.selected
    }

    public static set selected(value: readonly Games[],) {
        Games.CompanionEnum.get.selected = value
    }

    public static setSelected(games: readonly Games[],): typeof Games {
        Games.CompanionEnum.get.selected = games
        return this
    }

    //endregion -------------------- Methods --------------------

}
