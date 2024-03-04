import {Enum} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleEnglishName_Plural, PossibleEnglishName_Singular} from 'core/otherWordInTheGame/OtherWordInTheGames.types'
import type {ClassWithReference}                                                        from 'core/ClassWithReference'
import type {OtherWordInTheGame}                                                        from 'core/otherWordInTheGame/OtherWordInTheGame'
import type {ClassWithEnglishName}                                                      from 'core/ClassWithEnglishName'
import type {CompanionEnumByNameSingleton}                                              from 'util/enumerable/Singleton.types'

import {isInProduction}           from 'variables'
import {OtherWordInTheGameLoader} from 'core/otherWordInTheGame/OtherWordInTheGame.loader'
import {EveryLanguages}           from 'lang/EveryLanguages'
import {StringContainer}          from 'util/StringContainer'
import {CompanionEnumByName}      from 'util/enumerable/companion/CompanionEnumByName'

//region -------------------- Import from deconstruction --------------------

const {PORTUGUESE, AMERICAN_PORTUGUESE, EUROPEAN_PORTUGUESE, CHINESE, KOREAN,} = EveryLanguages

//endregion -------------------- Import from deconstruction --------------------

export class OtherWordInTheGames<const out SINGULAR extends PossibleEnglishName_Singular = PossibleEnglishName_Singular, const out PLURAL extends NullOr<PossibleEnglishName_Plural> = NullOr<PossibleEnglishName_Plural>, const out IS_A_COMPLETE_WORD extends boolean = boolean, >
    extends Enum<Ordinals, Names>
    implements ClassWithReference<OtherWordInTheGame>,
        ClassWithEnglishName<PossibleEnglishName_Singular> {

    //region -------------------- Sub class --------------------

    /** A complete {@link OtherWordInTheGames} for every language (from any {@link Games game}) */
    private static readonly CompleteOtherWordInTheGame = class CompleteOtherWordInTheGame<const out SINGULAR extends PossibleEnglishName_Singular = PossibleEnglishName_Singular, const out PLURAL extends NullOr<PossibleEnglishName_Plural> = null, > extends OtherWordInTheGames<SINGULAR, PLURAL, true> {

        constructor(singularEnglishName: SINGULAR,)
        constructor(singularEnglishName: SINGULAR, pluralEnglishName: PLURAL,)
        constructor(singularEnglishName: SINGULAR, pluralEnglishName?: PLURAL,) {
            super(true, singularEnglishName, pluralEnglishName,)
        }


        public override get singularNameOnReferenceOrNull(): this['singularNameOnReference'] {
            if (!isInProduction)
                console.warn(`Calling the ${this.name}.singularNameOnReferenceOrNull should be replaced with ${this.name}.singularNameOnReference.`)
            return this.singularNameOnReference
        }

        public override get singularLowerCaseNameOnReferenceOrNull(): this['singularLowerCaseNameOnReference'] {
            if (!isInProduction)
                console.warn(`Calling the ${this.name}.singularLowerCaseOnReferenceOrNull should be replaced with ${this.name}.singularLowerCaseOnReference.`)
            return this.singularLowerCaseNameOnReference
        }


        public override get pluralNameOnReferenceOrNull(): this['pluralNameOnReference'] {
            if (!isInProduction)
                console.warn(`Calling the ${this.name}.singularNameOnReferenceOrNull should be replaced with ${this.name}.singularNameOnReference.`)
            return this.pluralNameOnReference
        }

        public override get pluralLowerCaseNameOnReferenceOrNull(): NullOr<string> {
            if (!isInProduction)
                console.warn(`Calling the ${this.name}.pluralLowerCaseOnReferenceOrNull should be replaced with ${this.name}.pluralLowerCaseOnReference.`)
            return this.pluralLowerCaseNameOnReference
        }

    }
    /**
     * A complete {@link OtherWordInTheGames} for every language applicable to the 1st game ({@link Games.SUPER_MARIO_MAKER_1 SMM} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}).
     *
     * Meaning that translations from chinese ({@link ProjectLanguages.SIMPLIFIED_CHINESE simplified} or {@link ProjectLanguages.TRADITIONAL_CHINESE traditional}) or {@link ProjectLanguages.KOREAN korean}
     * are defaulted to the {@link ProjectLanguages.AMERICAN_ENGLISH american english} value.
     */
    private static readonly CompleteInSMM1OtherWordInTheGame = class CompleteInSMM1OtherWordInTheGame<const out SINGULAR extends PossibleEnglishName_Singular = PossibleEnglishName_Singular, const out PLURAL extends NullOr<PossibleEnglishName_Plural> = null, > extends OtherWordInTheGames.CompleteOtherWordInTheGame<SINGULAR, PLURAL> {

        /**
         * Get the {@link singularEnglishName} (on the {@link EveryLanguages.current current language})
         * or the  {@link ProjectLanguages.AMERICAN_ENGLISH american english} value if it is
         * chinese ({@link ProjectLanguages.SIMPLIFIED_CHINESE simplified} or {@link ProjectLanguages.TRADITIONAL_CHINESE traditional}) or {@link ProjectLanguages.KOREAN korean}
         */
        public override get singularNameOnReference(): string {
            return CHINESE.isCurrent || KOREAN.isCurrent ? this.reference.english : super.singularNameOnReference
        }

        /**
         * Get the {@link pluralEnglishName} (on the {@link EveryLanguages.current current language})
         * or the {@link ProjectLanguages.AMERICAN_ENGLISH american english} value if it is
         * chinese ({@link ProjectLanguages.SIMPLIFIED_CHINESE simplified} or {@link ProjectLanguages.TRADITIONAL_CHINESE traditional}) or {@link ProjectLanguages.KOREAN korean}
         *
         * @throws {ReferenceError} There is no plural value
         */
        public override get pluralNameOnReference(): string {
            if (CHINESE.isCurrent || KOREAN.isCurrent) {
                const pluralForm = this.reference.pluralForm
                if (pluralForm == null)
                    throw new ReferenceError(`There is no plural value on the ${this.englishName}.`)
                return pluralForm.english
            }
            return super.pluralNameOnReference
        }

    }
    /**
     * A complete {@link OtherWordInTheGames} for every language applicable to the 1st game ({@link Games.SUPER_MARIO_MAKER_1 SMM} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}).
     *
     * Meaning that translations from portuguese ({@link ProjectLanguages.AMERICAN_PORTUGUESE american} or {@link ProjectLanguages.EUROPEAN_PORTUGUESE european})
     * are defaulted to the english ({@link ProjectLanguages.AMERICAN_ENGLISH american} or {@link ProjectLanguages.EUROPEAN_PORTUGUESE european}) value respectively.
     */
    private static readonly CompleteInSMM2OtherWordInTheGame = class CompleteInSMM2OtherWordInTheGame<const out SINGULAR extends PossibleEnglishName_Singular = PossibleEnglishName_Singular, const out PLURAL extends NullOr<PossibleEnglishName_Plural> = null, > extends OtherWordInTheGames.CompleteOtherWordInTheGame<SINGULAR, PLURAL> {

        /**
         * Get the {@link singularEnglishName} (on the {@link EveryLanguages.current current language})
         * or the {@link EveryLanguages.ENGLISH english} if it is {@link EveryLanguages.PORTUGUESE portuguese}
         * ({@link ProjectLanguages.AMERICAN_PORTUGUESE american} to {@link ProjectLanguages.AMERICAN_ENGLISH american}
         * & {@link ProjectLanguages.EUROPEAN_PORTUGUESE european} to {@link ProjectLanguages.EUROPEAN_ENGLISH european})
         */
        public override get singularNameOnReference(): string {
            return AMERICAN_PORTUGUESE.isCurrent ? this.reference.americanEnglish : EUROPEAN_PORTUGUESE.isCurrent ? this.reference.europeanEnglish : super.singularNameOnReference
        }

        /**
         * Get the {@link singularEnglishName} (on the {@link EveryLanguages.current current language})
         * or the {@link EveryLanguages.ENGLISH english} if it is {@link EveryLanguages.PORTUGUESE portuguese}
         * ({@link ProjectLanguages.AMERICAN_PORTUGUESE american} to {@link ProjectLanguages.AMERICAN_ENGLISH american}
         * & {@link ProjectLanguages.EUROPEAN_PORTUGUESE european} to {@link ProjectLanguages.EUROPEAN_ENGLISH european})
         *
         * @throws {ReferenceError} There is no plural value
         */
        public override get pluralNameOnReference(): string {
            if (PORTUGUESE.isCurrent) {
                const pluralForm = this.reference.pluralForm
                if (pluralForm == null)
                    throw new ReferenceError(`There is no plural value on the ${this.englishName}.`)
                return AMERICAN_PORTUGUESE.isCurrent ? pluralForm.americanEnglish : pluralForm.europeanEnglish
            }
            return super.pluralNameOnReference
        }

    }
    /** An unfinished {@link OtherWordInTheGames} having one or more {@link ProjectLanguages language} not completed */
    private static readonly UnfinishedOtherWordInTheGame = class UnfinishedOtherWordInTheGame<const out SINGULAR extends PossibleEnglishName_Singular = PossibleEnglishName_Singular, const out PLURAL extends NullOr<PossibleEnglishName_Plural> = null, > extends OtherWordInTheGames<SINGULAR, PLURAL, false> {

        constructor(singularEnglishName: SINGULAR, pluralEnglishName?: PLURAL,) {
            super(false, singularEnglishName, pluralEnglishName,)
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly FLYDAY =                new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Flyday',)
    public static readonly HAPPY_SUNDAY =          new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Happy Sunday',)
    public static readonly LET_GET_MAKING =        new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Let\'s get\nmaking!',)

    public static readonly GAME_STYLE =            new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Game Style',)
    public static readonly EXTRA_GAME_STYLE =      new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Extra Game Styles',)
    public static readonly CURRENT_CONDITION =     new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Current Condition',)
    public static readonly CLEAR_CONDITION =       new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Clear condition',)

    public static readonly COURSE_MAKER =          new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Course Maker',)
    public static readonly COURSE_THEME =          new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Course Theme',)
    public static readonly WORLD_MAKER =           new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('World Maker',)
    public static readonly WORLD_THEME =           new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('World Theme',)

    public static readonly AUTOSCROLL =            new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Autoscroll',)
    public static readonly MARIO_TRAIL =           new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Mario\'s Trail',)
    public static readonly COPY =                  new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Copy',)
    public static readonly ERASE =                 new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Erase',)
    public static readonly MULTIGRAB =             new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Multigrab',)
    public static readonly SOLO_MAKING =           new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Solo Making',)
    public static readonly COOP_MAKING =           new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Co-op Making',)
    public static readonly VIEW_MODE =             new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('View Mode',)
    public static readonly STAMP =                 new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Stamp', 'Stamps',)
    public static readonly STAMP_CARD =            new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Stamp Card',)
    public static readonly TAG =                   new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Tag', 'Tags',)

    public static readonly LIQUID =                new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Liquid', 'Liquids',)
    public static readonly WATER_LEVEL =           new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Water Level',)
    public static readonly POISON_LEVEL =          new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Poison Level',)
    public static readonly LAVA_LEVEL =            new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Lava Level',)

    public static readonly _10_MARIO_CHALLENGE =   new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('10 Mario Challenge',)
    public static readonly _100_MARIO_CHALLENGE =  new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('100 Mario Challenge',)
    public static readonly SUPER_MARIO_CHALLENGE = new OtherWordInTheGames.CompleteInSMM1OtherWordInTheGame('Super Mario Challenge',)
    public static readonly ENDLESS_CHALLENGE =     new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Endless Challenge',)
    public static readonly EASY =                  new OtherWordInTheGames.CompleteOtherWordInTheGame('Easy',)
    public static readonly NORMAL =                new OtherWordInTheGames.CompleteOtherWordInTheGame('Normal',)
    public static readonly EXPERT =                new OtherWordInTheGames.CompleteOtherWordInTheGame('Expert',)
    public static readonly SUPER_EXPERT =          new OtherWordInTheGames.CompleteOtherWordInTheGame('Super expert',)

    public static readonly YAMAMURA_DOJO =         new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Yamamura\'s Dojo',)
    public static readonly STORY_MODE =            new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Story Mode',)
    public static readonly COURSE_WORLD =          new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Course World',)
    public static readonly NETWORK_PLAY =          new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Network Play',)
    public static readonly MULTIPLAYER_VERSUS =    new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Multiplayer Versus',)
    public static readonly MULTIPLAYER_COOP =      new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Multiplayer Co-op',)
    public static readonly LEADERBOARD =           new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Leaderboard',)
    public static readonly EVENT_COURSES =         new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Event Courses',)
    public static readonly NINJI_SPEEDRUNS =       new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Ninji Speedruns',)
    public static readonly SUPER_WORLD =           new OtherWordInTheGames.CompleteInSMM2OtherWordInTheGame('Super World', 'Super Worlds',)

    public static readonly KOOPA_TROOPA =          new OtherWordInTheGames.CompleteOtherWordInTheGame('Koopa Troopa',)
    public static readonly BEACH_KOOPA =           new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Beach Koopa',)
    public static readonly KOOPA_SHELL =           new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Koopa Shell',)

    public static readonly MYSTERY_MUSHROOM =      new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Mystery Mushroom', 'Mystery Mushrooms',)
    public static readonly MII_COSTUME =           new class OtherWordInTheGames_MiiCostume extends OtherWordInTheGames.UnfinishedOtherWordInTheGame<'Mii costume', 'Mii costumes'> {

        //region -------------------- Fields --------------------

        static #miiSpaceUnevenCapitalCase?: string
        static #miiSpaceUnevenLowerCase?: string
        static #miiSpaceEvenCapitalCase?: string
        static #miiSpaceEvenLowerCase?: string

        //endregion -------------------- Fields --------------------
        //region -------------------- Getter methods --------------------

        static get __miiSpaceUnevenCapitalCase(): string {
            return this.#miiSpaceUnevenCapitalCase ??= OtherWordInTheGames.MII.reference.english
        }

        static get __miiSpaceUnevenLowerCase(): string {
            return this.#miiSpaceUnevenLowerCase ??= OtherWordInTheGames.MII.reference.english.toLowerCase()
        }


        static get __miiSpaceEvenCapitalCase(): string {
            return this.#miiSpaceEvenCapitalCase ??= OtherWordInTheGames.MII.reference.japanese!
        }

        static get __miiSpaceEvenLowerCase(): string {
            return this.#miiSpaceEvenLowerCase ??= OtherWordInTheGames.MII.reference.japanese!.toLowerCase()
        }

        //endregion -------------------- Getter methods --------------------

        /** Get the {@link singularNameOnReferenceOrNull} in lower case, but keep the {@link OtherWordInTheGames.MII Mii} as a noun */
        public override get singularLowerCaseNameOnReferenceOrNull(): NullOr<string> {
            const value = this.singularNameOnReferenceOrNull
            if (value == null)
                return null
            return value.toLowerCase()
                .replace(OtherWordInTheGames_MiiCostume.__miiSpaceUnevenLowerCase, OtherWordInTheGames_MiiCostume.__miiSpaceUnevenCapitalCase,)
                .replace(OtherWordInTheGames_MiiCostume.__miiSpaceEvenLowerCase, OtherWordInTheGames_MiiCostume.__miiSpaceEvenCapitalCase,)
        }

        /** Get the {@link pluralNameOnReferenceOrNull} in lower case, but keep the {@link OtherWordInTheGames.MII Mii} as a noun */
        public override get pluralLowerCaseNameOnReferenceOrNull(): NullOr<string> {
            const value = this.pluralNameOnReferenceOrNull
            if (value == null)
                return null
            return value.toLowerCase()
                .replace(OtherWordInTheGames_MiiCostume.__miiSpaceUnevenLowerCase, OtherWordInTheGames_MiiCostume.__miiSpaceUnevenCapitalCase,)
                .replace(OtherWordInTheGames_MiiCostume.__miiSpaceEvenLowerCase, OtherWordInTheGames_MiiCostume.__miiSpaceEvenCapitalCase,)
        }

    }('Mii costume', 'Mii costumes',)
    public static readonly MII =                   new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Mii', 'Miis',)
    public static readonly KOOPALING =             new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Koopaling', 'Koopalings',)
    public static readonly ENTITY =                new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Entity', 'Entities',)
    public static readonly PLAYER =                new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Player', 'Players',)
    public static readonly COURSE =                new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Course', 'Courses',)
    public static readonly WORLD_RECORD =          new OtherWordInTheGames.UnfinishedOtherWordInTheGame('World Record', 'World Records',)
    public static readonly POWER_UP =              new OtherWordInTheGames.UnfinishedOtherWordInTheGame('Power-up', 'Power-ups',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<OtherWordInTheGames, typeof OtherWordInTheGames> = class CompanionEnum_OtherWordInTheGames
        extends CompanionEnumByName<OtherWordInTheGames, typeof OtherWordInTheGames> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_OtherWordInTheGames

        private constructor() {
            super(OtherWordInTheGames,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_OtherWordInTheGames()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| OtherWordInTheGames | string>,): OtherWordInTheGames {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.find(it =>
                it.singularEnglishName === value
                || it.pluralEnglishName === value,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCES_MAP?: ReadonlyMap<PossibleEnglishName_Singular, OtherWordInTheGame>

    #reference?: OtherWordInTheGame
    readonly #isACompleteWord
    readonly #singularEnglishName
    readonly #pluralEnglishName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(isACompleteWord: IS_A_COMPLETE_WORD, singularEnglishName: SINGULAR, pluralEnglishName: PLURAL = null as PLURAL,) {
        super()
        this.#isACompleteWord = isACompleteWord
        this.#singularEnglishName = new StringContainer(singularEnglishName)
        this.#pluralEnglishName = pluralEnglishName == null ? null : new StringContainer(pluralEnglishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Getter methods (reference) --------------------

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


    /**
     * Get the {@link singularEnglishName} (dependant on the {@link EveryLanguages.current current language})
     *
     * @throws {ReferenceError} The value (on the {@link EveryLanguages.current current language}) has never been initialized
     */
    public get singularNameOnReference(): string {
        const value = this.reference.languageValue
        if (value == null)
            throw new ReferenceError(`The singular value "${this.singularEnglishName}" has never been initialized on the ${EveryLanguages.CompanionEnum.get.current.englishName} language.`,)
        return value
    }

    /** Get the {@link singularNameOnReference} but in lower case */
    public get singularLowerCaseNameOnReference(): string {
        return this.singularNameOnReference.toLowerCase()
    }

    /** Get the {@link singularEnglishName} (dependent on the {@link EveryLanguages.current current language}) or <b>null</b> (if there is none) */
    public get singularNameOnReferenceOrNull(): NullOr<string> {
        const value = this.reference.languageValue
        if (EveryLanguages.ENGLISH.isCurrent || EveryLanguages.FRENCH.isCurrent)
            return value
        return value === this.singularEnglishName ? null : value
    }

    /** Get the {@link singularNameOnReferenceOrNull} but in lower case */
    public get singularLowerCaseNameOnReferenceOrNull(): NullOr<string> {
        return this.singularNameOnReferenceOrNull?.toLowerCase() ?? null
    }


    /**
     * Get the {@link pluralEnglishName} (dependant on the {@link EveryLanguages.current current language})
     *
     * @throws {ReferenceError} There is no plural value
     * @throws {ReferenceError} The value (on the {@link EveryLanguages.current current language}) has never been initialized
     */
    public get pluralNameOnReference(): string {
        const pluralForm = this.reference.pluralForm
        if (pluralForm == null)
            throw ReferenceError(`There is no plural value on the ${this.englishName}.`)
        const value = pluralForm.languageValue
        if (value == null)
            throw new ReferenceError(`The plural value "${this.pluralEnglishName}" has never been initialized on the ${EveryLanguages.CompanionEnum.get.current.englishName} language.`,)
        return value
    }

    /** Get the {@link pluralNameOnReference} but in lower case */
    public get pluralLowerCaseNameOnReference(): string {
        return this.pluralNameOnReference.toLowerCase()
    }

    /** Get the {@link pluralEnglishName} (dependent on the {@link EveryLanguages.current current language}) or <b>null</b> (if there is none) */
    public get pluralNameOnReferenceOrNull(): NullOr<string> {
        const value = this.reference.pluralForm?.languageValue ?? null
        if (EveryLanguages.ENGLISH.isCurrent || EveryLanguages.FRENCH.isCurrent)
            return value
        return value === this.pluralEnglishName ? null : value
    }

    /** Get the {@link pluralNameOnReferenceOrNull} but in lower case */
    public get pluralLowerCaseNameOnReferenceOrNull(): NullOr<string> {
        return this.pluralNameOnReferenceOrNull?.toLowerCase() ?? null
    }

    //endregion -------------------- Getter methods (reference) --------------------

    /** The {@link OtherWordInTheGames current word} is complete (from any {@link Games game}) */
    public get isACompleteWord(): IS_A_COMPLETE_WORD {
        return this.#isACompleteWord
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

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------


    //endregion -------------------- Methods --------------------

}
