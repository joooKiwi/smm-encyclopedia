import type {CollectionHolder, EnumerableConstructorWithDefault, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import type {Dispatch, SetStateAction}                                                      from 'react'
import {Enum}                                                                               from '@joookiwi/enumerable'

import type {PossibleBraces_Array, PossibleBrackets_Array, PossibleColon, PossibleComma, PossibleCommercialAnd, PossibleEndingBrace, PossibleEndingBracket, PossibleEndingParentheses, PossibleExclamationPoint, PossibleInterrogationPoint, PossibleLowercaseRomainAlphabet_Array, PossibleNumbers_Array, PossibleParentheses_Array, PossiblePoint, PossiblePoints_Array, PossibleSemicolon, PossibleSingleCharacter, PossibleSlash, PossibleSlashes_Array, PossibleStartingBrace, PossibleStartingBracket, PossibleStartingParentheses, PossibleUnionTrait, PossibleUppercaseRomainAlphabet_Array, PossibleVerticalSlash, TextInBraces, TextInBrackets, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString} from 'lang/Characters.types'
import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'lang/ClassWithEveryLanguages'
import type {PossibleSpaceCharacter}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from 'lang/EveryLanguages.types'
import type {LanguageEnumerable}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from 'lang/LanguageEnumerable'
import type {Names, Ordinals, PossibleAcronym, PossibleDifferentWord, PossibleEnglishName, PossibleInternationalAcronym, PossibleOriginalName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'lang/ProjectLanguages.types'
import type {ClassInAnySuperMarioMakerGame}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/game/ClassInAnySuperMarioMakerGame'
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from 'lang/name/containers/Language'
import type {ClassUsedInRoute}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'route/ClassUsedInRoute'
import type {ClassWithCurrent}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'util/enumerable/ClassWithCurrent'
import type {ClassWithIsCurrent}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from 'util/enumerable/ClassWithIsCurrent'
import type {Nullable, NullOr}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'util/types/nullable'
import type {SingleRetrievableByUrl}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from 'util/enumerable/SingleRetrievableByUrl'

import {EveryLanguages}                       from 'lang/EveryLanguages'
import {SingleRetrievableByUrlImplementation} from 'util/enumerable/SingleRetrievableByUrl.implementation'

/**
 * <p>
 *     An enum class containing every language in the project.
 *     The languages used are only those direct languages and not a basic language.
 * </p>
 *
 * <p>
 *     The other utility class is the getter and setter from a {@link ClassWithEveryLanguages}
 *     to retrieve its property by the instance that is used.
 * </p>
 *
 * As it stands, the languages are:
 * <ol>
 *     <li>en-AM - American English</li>
 *     <li>en-EU - European English</li>
 *     <li>fr-CA - Canadian French</li>
 *     <li>fr-EU - European French</li>
 *     <li>de    - German</li>
 *     <li>es-AM - American Spanish</li>
 *     <li>es-EU - European Spanish</li>
 *     <li>it    - Italian</li>
 *     <li>nl    - Dutch</li>
 *     <li>pt-AM - American Portuguese</li>
 *     <li>pt-EU - European Portuguese</li>
 *     <li>ru    - Russian</li>
 *     <li>ja    - Japanese</li>
 *     <li>zh-tw - Traditional Chinese</li>
 *     <li>zh-cn - Simplified Chinese</li>
 *     <li>ko    - Korean</li>
 * </ol>
 *
 * @indirectlyInherit {@link EveryLanguages}
 * @usedByTheRouting
 */
export class ProjectLanguages
    extends Enum<Ordinals, Names>
    implements LanguageEnumerable<PossibleAcronym, PossibleInternationalAcronym, PossibleEnglishName, PossibleOriginalName, PossibleDifferentWord>,
        ClassWithIsCurrent,
        ClassUsedInRoute<PossibleAcronym>,
        ClassInAnySuperMarioMakerGame {

    //region -------------------- Enum instances --------------------

    public static readonly AMERICAN_ENGLISH =    new ProjectLanguages(EveryLanguages.AMERICAN_ENGLISH,    true,  true,  true, )
    public static readonly EUROPEAN_ENGLISH =    new ProjectLanguages(EveryLanguages.EUROPEAN_ENGLISH,    true,  true,  true, )
    public static readonly CANADIAN_FRENCH =     new ProjectLanguages(EveryLanguages.CANADIAN_FRENCH,     true,  true,  true, )
    public static readonly EUROPEAN_FRENCH =     new ProjectLanguages(EveryLanguages.EUROPEAN_FRENCH,     true,  true,  true, )
    public static readonly GERMAN =              new ProjectLanguages(EveryLanguages.GERMAN,              true,  true,  true, )
    public static readonly AMERICAN_SPANISH =    new ProjectLanguages(EveryLanguages.AMERICAN_SPANISH,    true,  true,  true, )
    public static readonly EUROPEAN_SPANISH =    new ProjectLanguages(EveryLanguages.EUROPEAN_SPANISH,    true,  true,  true, )
    public static readonly ITALIAN =             new ProjectLanguages(EveryLanguages.ITALIAN,             true,  true,  true, )
    public static readonly DUTCH =               new ProjectLanguages(EveryLanguages.DUTCH,               true,  true,  true, )
    public static readonly AMERICAN_PORTUGUESE = new ProjectLanguages(EveryLanguages.AMERICAN_PORTUGUESE, false, false, false,)
    public static readonly EUROPEAN_PORTUGUESE = new ProjectLanguages(EveryLanguages.EUROPEAN_PORTUGUESE, true,  true,  false,)
    public static readonly RUSSIAN =             new ProjectLanguages(EveryLanguages.RUSSIAN,             true,  true,  true, )
    public static readonly JAPANESE =            new ProjectLanguages(EveryLanguages.JAPANESE,            true,  true,  true, )
    public static readonly TRADITIONAL_CHINESE = new ProjectLanguages(EveryLanguages.TRADITIONAL_CHINESE, false, false, true, )
    public static readonly SIMPLIFIED_CHINESE =  new ProjectLanguages(EveryLanguages.SIMPLIFIED_CHINESE,  false, false, true, )
    public static readonly KOREAN =              new ProjectLanguages(EveryLanguages.KOREAN,              false, false, true, )

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: ProjectLanguages
    protected static readonly _DEFAULT = this.getValueByLanguage(EveryLanguages.default)

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Companion --------------------

    /**
     * The reference of the static methods applicable to the class {@link ProjectLanguages}
     *
     * @see https://kotlinlang.org/docs/object-declarations.html#companion-objects
     * @singleton
     */
    public static readonly Companion = class Companion_ProjectLanguages
        implements ClassWithCurrent<ProjectLanguages>, SingleRetrievableByUrl<ProjectLanguages> {

        //region -------------------- Singleton usage --------------------

        static #instance?: Companion_ProjectLanguages

        private constructor() {
        }

        public static get get() {
            return this.#instance ??= new this()
        }

        //endregion -------------------- Singleton usage --------------------
        //region -------------------- Fields --------------------

        /** A {@link RegExp regex} to identify the possible {@link ProjectLanguages} in an url */
        public readonly URL_REGEX = ProjectLanguages.#SingleRetrievableByUrl.get.URL_REGEX

        //endregion -------------------- Fields --------------------

        public get currentOrNull(): NullOr<ProjectLanguages> {
            const value = EveryLanguages.currentOrNull
            return value == null ? null : ProjectLanguages.getValueByLanguage(value)
        }

        public get current(): ProjectLanguages {
            return ProjectLanguages.getValueByLanguage(EveryLanguages.current)
        }

        public set current(value: PossibleValueByEnumerable<ProjectLanguages>,) {
            EveryLanguages.current = ProjectLanguages.getValue(value).language
        }


        /**
         * Get a {@link ProjectLanguages} from an url found or null if there is none
         *
         * @param url The url to find the {@link ProjectLanguages language} (if it is found)
         * @throws {ReferenceError} A fail-safe error on a {@link ProjectLanguages} that was not found
         */
        public getInUrl = (url: string,) => ProjectLanguages.#SingleRetrievableByUrl.get.getInUrl(url)


    }

    static readonly #SingleRetrievableByUrl = class SingleRetrievableByUrl_ProjectLanguages
        extends SingleRetrievableByUrlImplementation<ProjectLanguages> {

        //region -------------------- Singleton usage --------------------

        static #instance?: SingleRetrievableByUrl_ProjectLanguages

        private constructor() {
            super()
        }

        public static get get() {
            return this.#instance ??= new this()
        }

        //endregion -------------------- Singleton usage --------------------

        override readonly URL_REGEX = /\/(((en|es|pt)-(AM|EU))|(fr-(CA|EU))|(zh-(tw|cn))|de|it|nl|ru|ja|ko)\//i
        override readonly _enumerableConstructor = ProjectLanguages

    }

    //endregion -------------------- Companion --------------------
    //region -------------------- Fields --------------------

    readonly #language: EveryLanguages
    readonly #isInSuperMarioMaker1: boolean
    readonly #isInSuperMarioMakerFor3DS: boolean
    readonly #isInSuperMarioMaker2: boolean
    #isInEverySuperMarioMakerGame?: boolean

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(language: EveryLanguages, isASupportedLanguageInSMM1?: boolean, isASupportedLanguageInSMM3DS?: boolean, isASupportedLanguageInSMM2?: boolean,) {
        super()
        this.#language = language
        this.#isInSuperMarioMaker1 = isASupportedLanguageInSMM1 as boolean
        this.#isInSuperMarioMakerFor3DS = isASupportedLanguageInSMM3DS as boolean
        this.#isInSuperMarioMaker2 = isASupportedLanguageInSMM2 as boolean
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public get language(): EveryLanguages {
        return this.#language
    }

    public get isACompleteLanguage(): boolean {
        return this.language.isACompleteLanguage
    }

    //region -------------------- Space getter methods --------------------

    public get hasSpace(): boolean {
        return this.language.hasSpace
    }

    public get isASpaceEvenLanguage(): boolean {
        return this.language.isASpaceEvenLanguage
    }

    public get isASpaceEvenLanguageForThePointsAndSpace(): boolean {
        return this.language.isASpaceEvenLanguageForThePointsAndSpace
    }

    public get isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace(): boolean {
        return this.language.isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace
    }

    //endregion -------------------- Space getter methods --------------------

    public get urlValue(): PossibleAcronym {
        return this.projectAcronym
    }

    public get projectAcronym(): PossibleAcronym {
        return this.language.projectAcronym as PossibleAcronym
    }

    public get internationalAcronym(): PossibleInternationalAcronym {
        return this.language.internationalAcronym as PossibleInternationalAcronym
    }

    public get englishName(): PossibleEnglishName {
        return this.language.englishName as PossibleEnglishName
    }

    public get originalName(): PossibleOriginalName {
        return this.language.originalName as PossibleOriginalName
    }

    public get differentWords(): PossibleDifferentWord {
        return this.language.differentWords!
    }

    public get isDefaultLanguage(): boolean {
        return this.language.isDefaultLanguage
    }

    public get isInSuperMarioMaker1(): boolean {
        return this.#isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.#isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.#isInSuperMarioMaker2
    }

    public get isInEverySuperMarioMakerGame(): boolean {
        return this.#isInEverySuperMarioMakerGame ??= this.isInSuperMarioMaker1 && this.isInSuperMarioMakerFor3DS && this.isInSuperMarioMaker2
    }

    //region -------------------- Characters getter methods --------------------

    public get space(): PossibleSpaceCharacter {
        return this.language.space
    }

    public get points(): PossiblePoints_Array {
        return this.language.points
    }

    public get point(): PossiblePoint {
        return this.language.point
    }

    public get interrogationPoint(): PossibleInterrogationPoint {
        return this.language.interrogationPoint
    }

    public get exclamationPoint(): PossibleExclamationPoint {
        return this.language.exclamationPoint
    }

    public get colon(): PossibleColon {
        return this.language.colon
    }

    public get semicolon(): PossibleSemicolon {
        return this.language.semicolon
    }

    public get comma(): PossibleComma {
        return this.language.comma
    }

    public get unionTrait(): PossibleUnionTrait {
        return this.language.unionTrait
    }


    public get commercialAnd(): PossibleCommercialAnd {
        return this.language.commercialAnd
    }


    public get parentheses(): PossibleParentheses_Array {
        return this.language.parentheses
    }

    public get startingParenthesis(): PossibleStartingParentheses {
        return this.language.startingParenthesis
    }

    public get endingParenthesis(): PossibleEndingParentheses {
        return this.language.endingParenthesis
    }

    public get brackets(): PossibleBrackets_Array {
        return this.language.brackets
    }

    public get startingBrackets(): PossibleStartingBracket {
        return this.language.startingBrackets
    }

    public get endingBrackets(): PossibleEndingBracket {
        return this.language.endingBrackets
    }

    public get braces(): PossibleBraces_Array {
        return this.language.braces
    }

    public get startingBraces(): PossibleStartingBrace {
        return this.language.startingBraces
    }

    public get endingBraces(): PossibleEndingBrace {
        return this.language.endingBraces
    }


    public get slashes(): PossibleSlashes_Array {
        return this.language.slashes
    }

    public get slash(): PossibleSlash {
        return this.language.slash
    }

    public get verticalSlash(): PossibleVerticalSlash {
        return this.language.verticalSlash
    }


    public get romainLowercaseAlphabet(): PossibleLowercaseRomainAlphabet_Array {
        return this.language.romainLowercaseAlphabet
    }

    public get romainUppercaseAlphabet(): PossibleUppercaseRomainAlphabet_Array {
        return this.language.romainUppercaseAlphabet
    }


    public get numbers(): PossibleNumbers_Array {
        return this.language.numbers
    }


    public character<C extends PossibleSingleCharacter, >(character: C,): VariableCharacterByCharacter<this['isASpaceEvenLanguage'], C>
    public character<C extends string, >(character: C,): VariableCharacterByString<this['isASpaceEvenLanguage'], C>
    public character(character: string,) {
        return this.language.character(character)
    }

    //endregion -------------------- Characters getter methods --------------------
    //region -------------------- Getter & setter methods (current) --------------------

    public get isCurrent(): boolean {
        return this === ProjectLanguages.currentOrNull
    }

    public get isCurrentOrAssociatedWithIt(): boolean {
        return this.isCurrent
    }


    /**
     * Get the current {@link ProjectLanguages language} that may be initialized
     *
     * @see EveryLanguages.currentOrNull
     */
    public static get currentOrNull(): NullOr<ProjectLanguages> {
        return this.Companion.get.currentOrNull
    }

    /**
     * Get the non-nullable current {@link ProjectLanguages language}
     *
     * @throws ReferenceError The current {@link ProjectLanguages language} has not been initialized yet
     * @see EveryLanguages.current
     */
    public static get current(): ProjectLanguages {
        return this.Companion.get.current
    }

    /**
     * Set the current {@link ProjectLanguages language} held in the {@link ProjectLanguages.Companion}
     *
     * @param value The {@link ProjectLanguages language} to set as the current one
     * @see EveryLanguages.current
     */
    public static set current(value: PossibleValueByEnumerable<| EveryLanguages | ProjectLanguages>,) {
        this.Companion.get.current = value
    }


    /**
     * Get the current {@link EveryLanguages language} event listener or <b>null</b> if it has not been initialized
     *
     * @see EveryLanguages.onSetCurrentEventOrNull
     */
    public static get onSetCurrentEventOrNull(): NullOr<Dispatch<SetStateAction<NullOr<EveryLanguages>>>> {
        return EveryLanguages.onSetCurrentEventOrNull
    }

    /**
     * Get the non-nullable current {@link EveryLanguages language} event listener
     *
     * @throws {ReferenceError} The event listener has not been initialized
     * @see EveryLanguages.onSetCurrentEvent
     */
    public static get onSetCurrentEvent(): Dispatch<SetStateAction<NullOr<EveryLanguages>>> {
        return EveryLanguages.onSetCurrentEvent
    }

    /**
     * Initialize the event listener on the setting of the current {@link EveryLanguages language}
     *
     * @param value The event listener to set
     * @see EveryLanguages.onSetCurrentEvent
     * @shouldOnlyBeCalledOnce
     */
    public static set onSetCurrentEvent(value: Dispatch<SetStateAction<NullOr<EveryLanguages>>>,) {
        EveryLanguages.onSetCurrentEvent = value
    }

    //endregion -------------------- Getter & setter methods (current) --------------------

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
        return this.language.get(classWithEveryLanguages)
    }

    public original<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): | T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>
    public original<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): NullOr<| T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>>
    public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
        return this.language.original<T>(classWithEveryLanguages)
    }


    /**
     * A simple intermediate method to retrieve a {@link ProjectLanguages} by an url
     *
     * @param url The url to retrieve the {@link ProjectLanguages language} (if it is present)
     * @see ProjectLanguages.Companion.getInUrl
     */
    public static getInUrl(url: string,): NullOr<ProjectLanguages> {
        return this.Companion.get.getInUrl(url,)
    }

    //region -------------------- Transformation methods --------------------

    public textInParentheses<S extends string, >(text: S,): TextInParentheses<this['isASpaceEvenLanguage'], S>
    public textInParentheses(text: string,) {
        return this.language.textInParentheses(text,)
    }

    public textInBrackets<S extends string, >(text: S,): TextInBrackets<this['isASpaceEvenLanguage'], S>
    public textInBrackets(text: string,) {
        return this.language.textInBrackets(text,)
    }

    public textInBraces<S extends string, >(text: S,): TextInBraces<this['isASpaceEvenLanguage'], S>
    public textInBraces(text: string,) {
        return this.language.textInBraces(text,)
    }

    //endregion -------------------- Transformation methods --------------------

    // public static getValueByLanguage<T,>(value: T,): ProjectLanguagesByLanguage<T>
    public static getValueByLanguage(value: Nullable<| ProjectLanguages | EveryLanguages | string>,): ProjectLanguages {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof ProjectLanguages && value._static === ProjectLanguages)
            return value
        if (typeof value == 'string')
            return this.getValueByLanguage(EveryLanguages.getValueByLanguage(value))
        const valueFound = this.values.find(it => it.language === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructorWithDefault<Ordinals, Names> {
        return ProjectLanguages
    }

    public static get default(): ProjectLanguages {
        return this.getValueByLanguage(EveryLanguages.default)
    }

    public static set default(value: PossibleValueByEnumerable<| EveryLanguages | ProjectLanguages>,) {
        this.setDefault(value)
    }

    public static setDefault(value: PossibleValueByEnumerable<| EveryLanguages | ProjectLanguages>,): typeof ProjectLanguages {
        EveryLanguages.setDefault(value instanceof ProjectLanguages ? value.language : value)
        return this
    }

    public static getValue(value: PossibleValueByEnumerable<ProjectLanguages>,): ProjectLanguages {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<ProjectLanguages> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<ProjectLanguages> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}
