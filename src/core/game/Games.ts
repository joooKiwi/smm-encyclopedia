import type {BasicCompanionEnumDeclaration, CollectionHolder, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable/dist/types'
import {BasicCompanionEnum, Enum}                                                                   from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                                                                                                                   from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                                               from 'core/ClassWithEnglishName'
import type {PropertyGetter}                                                                                                                                     from 'core/PropertyGetter'
import type {GameProperty}                                                                                                                                       from 'core/entity/properties/game/GameProperty'
import type {FullUrlValue, FullValidUrlValue, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleSimpleValue, PossibleSimpleUrlValue, GroupUrlValue} from 'core/game/Games.types'
import type {GameImageFile}                                                                                                                                      from 'core/game/file/GameImageFile'
import type {ClassUsedInRoute}                                                                                                                                   from 'route/ClassUsedInRoute'
import type {MultipleRetrievableByUrl}                                                                                                                           from 'util/enumerable/MultipleRetrievableByUrl'
import type {ClassWithImageFile}                                                                                                                                 from 'util/file/image/ClassWithImageFile'
import type {Nullable}                                                                                                                                           from 'util/types/nullable'
import type {Selectable}                                                                                                                                         from 'util/types/Selectable'

import GameComponent            from 'core/game/Game.component'
import {GameImageFileContainer} from 'core/game/file/GameImageFile.container'
import {StringContainer}        from 'util/StringContainer'
import {EMPTY_ARRAY}            from 'util/emptyVariables'
import {GameCollection}         from 'util/collection/GameCollection'

/**
 * @usedByTheRouting
 */
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

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<Games, typeof Games>> = class CompanionEnum_Games
        extends BasicCompanionEnum<Games, typeof Games> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Games

        private constructor() {
            super(Games,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Games()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Companion --------------------

    /**
     * The reference of the static methods applicable to the class {@link Games}
     *
     * @see https://kotlinlang.org/docs/object-declarations.html#companion-objects
     * @singleton
     */
    public static readonly Companion = class Companion_Games
        implements MultipleRetrievableByUrl<Games> {

        //region -------------------- Singleton usage --------------------

        static #instance?: Companion_Games

        private constructor() {
        }

        public static get get() {
            return this.#instance ??= new this()
        }

        //endregion -------------------- Singleton usage --------------------
        //region -------------------- Fields --------------------

        readonly URL_REGEX = /\/game-((1|3ds|2)(,(1|3ds|2))?|(all))\//i
        readonly ALL_URL_REGEX = /\/game-all\//i
        readonly SINGLE_URL_REGEX = /\/game-(1|3ds|2)\//i

        //endregion -------------------- Fields --------------------

        /**
         * Get the {@link Games games} from an url found or null if there is none
         *
         * @param url The url to find the {@link Games games} (if they are found)
         * @throws {ReferenceError} A fail-safe error on {@link Games} that were not found
         */
        public getInUrl(url: string,): readonly Games[] {
            if (!this.URL_REGEX.test(url))
                return EMPTY_ARRAY

            if (this.ALL_URL_REGEX.test(url))
                return [...Games,]

            const lowerCasedUrl = url.toLowerCase()
            if (this.SINGLE_URL_REGEX.test(url)) {
                const valueFound = Games.values.find(it => lowerCasedUrl.includes(`/game-${it.urlValue}/`))
                if (valueFound == null)
                    throw new ReferenceError(`No "${Games.name}" was found by the url "${url}".`)
                return [valueFound,]
            }
            for (let game1 of Games)
                for (let game2 of Games)
                    if (lowerCasedUrl.includes(`/game-${game1.urlValue},${game2.urlValue}`))
                        return [game1, game2,]

            throw new ReferenceError(`No "${Games.name}" was found by the url "${url}".`)
        }

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
        return this.#imageFile ??= new GameImageFileContainer(this.englishName,)
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


    public static getUniqueSelected(path: | FullUrlValue | GroupUrlValue,): ReadonlySet<Games> {
        return path === 'game-all' || path === 'all' ? this.values.toSet() : new Set(this.getSelected(path))
    }

    public static getSelected(path: | FullUrlValue | GroupUrlValue,): readonly Games[] {
        return path === 'game-all' || path === 'all' ? this.values.toArray() : path.replace('game-', '',).split(',').map(it => this.getValueByUrlValue(it))
    }

    public static setSelected(games: readonly Games[],): typeof Games {
        for (let game of Games)
            game.isSelected = games.includes(game)
        return this
    }

    public static getGroupUrlValue(games: Iterable<Games>,): GroupUrlValue {
        const gamesFiltered = new Set(games)
        if (gamesFiltered.size === 3)
            return 'all'
        return [...gamesFiltered,].map(it => it.urlValue).join(',') as GroupUrlValue
    }

    public static get selectedGames(): GameCollection {
        return new GameCollection(this.values.filter(it => it.isSelected))
    }

    public static get selectedGamesAsUrlValue(): FullValidUrlValue {
        const selectedGames = this.selectedGames
        return selectedGames.hasAllGames
            ? 'game-all'
            : `game-${selectedGames.map(it => it.urlValue).join(',')}` as FullValidUrlValue
    }


    /**
     * A simple intermediate method to retrieve a {@link Games} by an url
     *
     * @param url The url to retrieve the {@link Games games} (if they are present)
     * @see Games.Companion.getInUrl
     */
    public static getInUrl(url: string,): readonly Games[]{
        return this.Companion.get.getInUrl(url,)
    }

    public static getValueByUrlValue(value: Nullable<| Games | string>,): Games {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.urlValue === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by an url value from "${value}".`)
        return valueFound
    }

    public static getValueByValue(value: Nullable<| Games | string | number>,): Games {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const stringValue = `${value}`,
            valueFound = this.values.find(enumerable => enumerable.englishName === value
                || enumerable.acronym === value
                || enumerable.simpleValue === stringValue)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<Games>,): Games {
        return Games.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<Games> {
        return Games.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<Games> {
        yield* Games.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
