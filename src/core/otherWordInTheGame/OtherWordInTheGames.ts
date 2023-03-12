import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleEnglishName_Plural, PossibleEnglishName_Singular} from 'core/otherWordInTheGame/OtherWordInTheGames.types'
import type {ClassWithReference}                                                        from 'core/ClassWithReference'
import type {OtherWordInTheGame}                                                        from 'core/otherWordInTheGame/OtherWordInTheGame'
import type {ClassWithEnglishName}                                                      from 'core/ClassWithEnglishName'
import type {Nullable, NullOr}                                                          from 'util/types/nullable'

import {OtherWordInTheGameLoader} from 'core/otherWordInTheGame/OtherWordInTheGame.loader'
import {StringContainer}          from 'util/StringContainer'

export class OtherWordInTheGames<SINGULAR extends PossibleEnglishName_Singular = PossibleEnglishName_Singular, PLURAL extends NullOr<PossibleEnglishName_Plural> = NullOr<PossibleEnglishName_Plural>,>
    extends Enum<Ordinals, Names>
    implements ClassWithReference<OtherWordInTheGame>,
        ClassWithEnglishName<PossibleEnglishName_Singular> {

    //region -------------------- Enum instances --------------------

    public static readonly FLYDAY =                new OtherWordInTheGames('Flyday',)
    public static readonly HAPPY_SUNDAY =          new OtherWordInTheGames('Happy Sunday',)
    public static readonly LET_GET_MAKING =        new OtherWordInTheGames('Let\'s get\nmaking!',)

    public static readonly GAME_STYLE =            new OtherWordInTheGames('Game Style',)
    public static readonly EXTRA_GAME_STYLE =      new OtherWordInTheGames('Extra Game Styles',)
    public static readonly CURRENT_CONDITION =     new OtherWordInTheGames('Current Condition',)
    public static readonly CLEAR_CONDITION =       new OtherWordInTheGames('Clear condition',)

    public static readonly COURSE_MAKER =          new OtherWordInTheGames('Course Maker',)
    public static readonly COURSE_THEME =          new OtherWordInTheGames('Course Theme',)
    public static readonly WORLD_MAKER =           new OtherWordInTheGames('World Maker',)
    public static readonly WORLD_THEME =           new OtherWordInTheGames('World Theme',)

    public static readonly AUTOSCROLL =            new OtherWordInTheGames('Autoscroll',)
    public static readonly MARIO_TRAIL =           new OtherWordInTheGames('Mario\'s Trail',)
    public static readonly COPY =                  new OtherWordInTheGames('Copy',)
    public static readonly ERASE =                 new OtherWordInTheGames('Erase',)
    public static readonly MULTIGRAB =             new OtherWordInTheGames('Multigrab',)
    public static readonly SOLO_MAKING =           new OtherWordInTheGames('Solo Making',)
    public static readonly COOP_MAKING =           new OtherWordInTheGames('Co-op Making',)
    public static readonly VIEW_MODE =             new OtherWordInTheGames('View Mode',)
    public static readonly STAMP =                 new OtherWordInTheGames('Stamp', 'Stamps',)
    public static readonly STAMP_CARD =            new OtherWordInTheGames('Stamp Card',)
    public static readonly TAG =                   new OtherWordInTheGames('Tag', 'Tags',)

    public static readonly LIQUID =                new OtherWordInTheGames('Liquid', 'Liquids',)
    public static readonly WATER_LEVEL =           new OtherWordInTheGames('Water Level',)
    public static readonly POISON_LEVEL =          new OtherWordInTheGames('Poison Level',)
    public static readonly LAVA_LEVEL =            new OtherWordInTheGames('Lava Level',)

    public static readonly _10_MARIO_CHALLENGE =   new OtherWordInTheGames('10 Mario Challenge',)
    public static readonly _100_MARIO_CHALLENGE =  new OtherWordInTheGames('100 Mario Challenge',)
    public static readonly SUPER_MARIO_CHALLENGE = new OtherWordInTheGames('Super Mario Challenge',)
    public static readonly ENDLESS_CHALLENGE =     new OtherWordInTheGames('Endless Challenge',)
    public static readonly EASY =                  new OtherWordInTheGames('Easy',)
    public static readonly NORMAL =                new OtherWordInTheGames('Normal',)
    public static readonly EXPERT =                new OtherWordInTheGames('Expert',)
    public static readonly SUPER_EXPERT =          new OtherWordInTheGames('Super expert',)

    public static readonly YAMAMURA_DOJO =         new OtherWordInTheGames('Yamamura\'s Dojo',)
    public static readonly STORY_MODE =            new OtherWordInTheGames('Story Mode',)
    public static readonly COURSE_WORLD =          new OtherWordInTheGames('Course World',)
    public static readonly NETWORK_PLAY =          new OtherWordInTheGames('Network Play',)
    public static readonly MULTIPLAYER_VERSUS =    new OtherWordInTheGames('Multiplayer Versus',)
    public static readonly MULTIPLAYER_COOP =      new OtherWordInTheGames('Multiplayer Co-op',)
    public static readonly LEADERBOARD =           new OtherWordInTheGames('Leaderboard',)
    public static readonly EVENT_COURSES =         new OtherWordInTheGames('Event Courses',)
    public static readonly NINJI_SPEEDRUNS =       new OtherWordInTheGames('Ninji Speedruns',)
    public static readonly SUPER_WORLD =           new OtherWordInTheGames('Super World', 'Super Worlds',)

    public static readonly KOOPA_TROOPA =          new OtherWordInTheGames('Koopa Troopa',)
    public static readonly BEACH_KOOPA =           new OtherWordInTheGames('Beach Koopa',)
    public static readonly KOOPA_SHELL =           new OtherWordInTheGames('Koopa Shell',)

    public static readonly MYSTERY_MUSHROOM =      new OtherWordInTheGames('Mystery Mushroom', 'Mystery Mushrooms',)
    public static readonly MII_COSTUME =           new OtherWordInTheGames('Mii costume', 'Mii costumes',)
    public static readonly MII =                   new OtherWordInTheGames('Mii', 'Miis',)
    public static readonly KOOPALING =             new OtherWordInTheGames('Koopaling', 'Koopalings',)
    public static readonly ENTITY =                new OtherWordInTheGames('Entity', 'Entities',)
    public static readonly PLAYER =                new OtherWordInTheGames('Player', 'Players',)
    public static readonly COURSE =                new OtherWordInTheGames('Course', 'Courses',)
    public static readonly WORLD_RECORD =          new OtherWordInTheGames('World Record', 'World Records',)
    public static readonly POWER_UP =              new OtherWordInTheGames('Power-up', 'Power-ups',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: OtherWordInTheGames

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCES_MAP?: ReadonlyMap<PossibleEnglishName_Singular, OtherWordInTheGame>

    #reference?: OtherWordInTheGame
    readonly #singularEnglishName
    readonly #pluralEnglishName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(singularEnglishName: SINGULAR, pluralEnglishName: PLURAL = null as PLURAL,) {
        super()
        this.#singularEnglishName = new StringContainer(singularEnglishName)
        this.#pluralEnglishName = pluralEnglishName == null ? null : new StringContainer(pluralEnglishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName_Singular, OtherWordInTheGame> {
        return this.#REFERENCES_MAP ??= OtherWordInTheGameLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): OtherWordInTheGame {
        return this.#reference ??= OtherWordInTheGames.REFERENCE_MAP.get(this.englishName)!
    }

    //region -------------------- Getter methods (english name) --------------------

    public get englishName(): SINGULAR {
        return this.#singularEnglishName.get
    }

    public get englishNameInHtml(): string {
        return this.#singularEnglishName.getInHtml
    }

    public get singularEnglishName(): SINGULAR {
        return this.englishName
    }

    public get singularEnglishNameInHtml(): string {
        return this.englishNameInHtml
    }

    public get pluralEnglishName(): PLURAL {
        return this.#pluralEnglishName?.get ?? null as PLURAL
    }

    public get pluralEnglishNameInHtml(): NullOr<string> {
        return this.#pluralEnglishName?.getInHtml ?? null
    }

    //endregion -------------------- Getter methods (english name) --------------------

    //region -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByName(value: Nullable<| OtherWordInTheGames | string>,): OtherWordInTheGames {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.singularEnglishName === value
            || it.pluralEnglishName === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return OtherWordInTheGames
    }

    public static getValue(value: PossibleValueByEnumerable<OtherWordInTheGames>,): OtherWordInTheGames {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<OtherWordInTheGames> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<OtherWordInTheGames> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------


}