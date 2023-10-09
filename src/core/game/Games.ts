import type {Singleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}           from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                                                   from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                                               from 'core/ClassWithEnglishName'
import type {PropertyGetter}                                                                                                                                     from 'core/PropertyGetter'
import type {GameProperty}                                                                                                                                       from 'core/entity/properties/game/GameProperty'
import type {CompanionEnumDeclaration_Games}                                                                                                                     from 'core/game/Games.companionEnumDeclaration'
import type {FullUrlValue, FullValidUrlValue, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleSimpleValue, PossibleSimpleUrlValue, GroupUrlValue} from 'core/game/Games.types'
import type {GameImageFile}                                                                                                                                      from 'core/game/file/GameImageFile'
import type {ClassUsedInRoute}                                                                                                                                   from 'route/ClassUsedInRoute'
import type {ClassWithImageFile}                                                                                                                                 from 'util/file/image/ClassWithImageFile'
import type {Selectable}                                                                                                                                         from 'util/types/Selectable'

import GameComponent                                                  from 'core/game/Game.component'
import {gameImage}                                                    from 'core/game/file/fileCreator'
import {StringContainer}                                              from 'util/StringContainer'
import {getValueByAcronym, getValueByEnglishName, getValueByUrlValue} from 'util/utilitiesMethods'
import {GameCollection}                                               from 'util/collection/GameCollection'
import {EMPTY_ARRAY}                                                  from 'util/emptyVariables'

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

        /** The separator the every url parts */
        protected readonly _PART_SEPARATOR = '/'
        /** The separator the url arguments */
        protected readonly _ARGUMENT_SEPARATOR = ','

        // public readonly URL_REGEX = /.*\/game-((1|3ds|2)(,(1|3ds|2))+|(all))(\/|$)/i
        // public readonly ALL_URL_REGEX = /.*\/game-all(\/|$)/i
        public readonly SINGLE_URL_REGEX = /.*\/game-(1|3ds|2)(\/|$)/i
        public readonly PREFIX_WITHOUT_SLASH = 'game-'
        public readonly PREFIX = '/game-'
        public readonly ALL_PREFIX_GROUP = '/game-all/'
        public readonly AMOUNT_OF_VALUES = 3

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
            const prefix = this.PREFIX
            if(!url.includes(prefix,))
                return EMPTY_ARRAY

            if (url.includes(this.ALL_PREFIX_GROUP,))
                return this.values.toArray()

            const lowerCasedUrl = url.toLowerCase()
            if (this.SINGLE_URL_REGEX.test(url,)) {
                const valueFound = this.values.find(it => lowerCasedUrl.includes(`${prefix}${it.urlValue}`,),)
                if (valueFound == null)
                    throw new ReferenceError(`No "${this.instance.name}" was found by the url "${url}".`,)
                return [valueFound,]
            }

            const prefixWithoutSlash = this.PREFIX_WITHOUT_SLASH
            const gameUrlsFound = lowerCasedUrl.split(this._PART_SEPARATOR,).find(it => it.startsWith(prefixWithoutSlash,),)!.substring(prefixWithoutSlash.length,).split(this._ARGUMENT_SEPARATOR,)
            const size = gameUrlsFound.length
            const valuesFound = new Array<Games>(size,)
            let index = size
            while (index-- > 0)
                valuesFound[index] = this.getValueByUrlValue(gameUrlsFound[index],)

            const gamesFound = this.values.filter(it => {
                let index = -1
                while (++index < size)
                    if (valuesFound[index] === it)
                        return true
                return false
            },)
            if (gamesFound.size === this.AMOUNT_OF_VALUES)
                return this.values.toArray()
            return gamesFound.toArray()
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Companion --------------------

    /**
     * A simple companion class to the {@link Games} but for the game possibilities (in stored {@link Array}).
     *
     * This class is mostly used in the {@link RoutesCreator} chain of operation.
     */
    public static readonly GamePossibilitiesCompanion = class Companion_GamePossibilities {

        //region -------------------- Singleton usage --------------------

        static #instance?: Companion_GamePossibilities

        private constructor() {}

        public static get get() {
            return Companion_GamePossibilities.#instance ??= new Companion_GamePossibilities()
        }

        //endregion -------------------- Singleton usage --------------------
        //region -------------------- Fields --------------------

        #everySingleFields?: readonly (readonly [Games,])[]
        #everyDoubleFields?: readonly (readonly [Games, Games,])[]

        //region -------------------- Array fields --------------------

        //region -------------------- Non-redirection array fields --------------------

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

        //endregion -------------------- Non-redirection array fields --------------------
        //region -------------------- Redirection (x2) array fields --------------------

        /**
         * An array representing the games with only {@link Games.SUPER_MARIO_MAKER_1 SMM1} (x2)
         * @inRedirectionOnly
         * @see SMM1_ONLY
         */
        public readonly SMM1_2X = [Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_1,] as const
        /**
         * An array representing the games with only {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} (x2)
         * @inRedirectionOnly
         * @see SMM3DS_ONLY
         */
        public readonly SMM3DS_2X = [Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,] as const
        /**
         * An array representing the games with only {@link Games.SUPER_MARIO_MAKER_2 SMM2} (x2)
         * @inRedirectionOnly
         * @see SMM2_ONLY
         */
        public readonly SMM2_2X = [Games.SUPER_MARIO_MAKER_2, Games.SUPER_MARIO_MAKER_2,] as const

        //endregion -------------------- Redirection (x2) array fields --------------------
        //region -------------------- Redirection (reverse order) array fields --------------------

        /**
         * An array representing the games with SMM {@link Games.SUPER_MARIO_MAKER_1 1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS 3DS},
         * but in a reverse order
         * @inRedirectionOnly
         * @see SMM1_AND_3DS
         */
        public readonly SMM3DS_AND_1 = [Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, Games.SUPER_MARIO_MAKER_1,] as const
        /**
         * An array representing the games with SMM {@link Games.SUPER_MARIO_MAKER_1 1} & {@link Games.SUPER_MARIO_MAKER_2 2},
         * but in a reverse order
         * @inRedirectionOnly
         * @see SMM1_AND_2
         */
        public readonly SMM2_AND_1 = [Games.SUPER_MARIO_MAKER_2, Games.SUPER_MARIO_MAKER_1,] as const
        /**
         * An array representing the games with SMM {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS 3DS} & {@link Games.SUPER_MARIO_MAKER_2 2},
         * but in a reverse order
         * @inRedirectionOnly
         * @see SMM3DS_AND_2
         */
        public readonly SMM2_AND_3DS = [Games.SUPER_MARIO_MAKER_2, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,] as const

        //endregion -------------------- Redirection (reverse order) array fields --------------------

        //endregion -------------------- Array fields --------------------

        //endregion -------------------- Fields --------------------
        //region -------------------- Getter methods --------------------

        /** Every single {@link Games} fields in the {@link Companion_GamePossibilities current instance} */
        private get __everySingleGameFields(): readonly (readonly [Games,])[] {
            return this.#everySingleFields ??= [this.SMM1_ONLY, this.SMM3DS_ONLY, this.SMM2_ONLY,]
        }

        /** Every double {@link Games} fields in the {@link Companion_GamePossibilities current instance} */
        private get __everyDoubleGameFields(): readonly (readonly [Games, Games,])[] {
            return this.#everyDoubleFields ??= [this.SMM1_AND_3DS, this.SMM1_AND_2, this.SMM3DS_AND_2,
                this.SMM1_2X, this.SMM3DS_2X, this.SMM2_2X,
                this.SMM3DS_AND_1, this.SMM2_AND_1, this.SMM2_AND_3DS,]
        }

        //endregion -------------------- Getter methods --------------------
        //region -------------------- Methods --------------------

        public getFromPath(path: | FullUrlValue | GroupUrlValue,): readonly Games[] {
            if (path === 'game-all' || path === 'all')
                return this.ALL_GAMES
            const pathFiltered = path.replace('game-', '',) as GroupUrlValue,
                gamesFound = pathFiltered.split(',',),
                gamesFoundSize = gamesFound.length

            const gameFound1 = Games.CompanionEnum.get.getValueByUrlValue(gamesFound[0],)
            if (gamesFoundSize === 1)
                return this.__everySingleGameFields.find(it => it[0] === gameFound1)!

            const gameFound2 = Games.CompanionEnum.get.getValueByUrlValue(gamesFound[1],)
            if (gamesFoundSize === 2)
                return this.__everyDoubleGameFields.find(it => it[0] === gameFound1 && it[1] === gameFound2)!

            throw new ReferenceError(`No games could be found using the path "${path}"`,)
        }

        //endregion -------------------- Methods --------------------

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
        this.#englishName = new StringContainer(englishName)
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


    public static getFromPath(path: | FullUrlValue | GroupUrlValue,): readonly Games[] {
        return Games.GamePossibilitiesCompanion.get.getFromPath(path,)
    }

    public static setSelected(games: readonly Games[],): typeof Games {
        const values = Games.CompanionEnum.get.values
        for (let game of values)
            game.isSelected = games.includes(game,)
        return this
    }

    public static getGroupUrlValue(games: Iterable<Games>,): GroupUrlValue {
        const gamesFiltered = new Set(games)
        if (gamesFiltered.size === 3)
            return 'all'
        return Array.from(gamesFiltered, it => it.urlValue,).join(',') as GroupUrlValue
    }

    public static get selectedGames(): GameCollection {
        return new GameCollection(this.CompanionEnum.get.values.filter(it => it.isSelected,),)
    }

    public static get selectedGamesAsUrlValue(): FullValidUrlValue {
        const selectedGames = this.selectedGames
        return selectedGames.hasAllGames
            ? 'game-all'
            : `game-${selectedGames.join(',', '', '', null, null, it => it.urlValue,)}` as FullValidUrlValue
    }

    //endregion -------------------- Methods --------------------

}
