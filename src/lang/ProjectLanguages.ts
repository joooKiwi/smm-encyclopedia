import type {ImpossibleNames, PossibleEnumerableValue, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable'
import type {Nullable, NullOr}                                                               from '@joookiwi/type'
import {Enum, NullReferenceException}                                                        from '@joookiwi/enumerable'

import type {ClassInAnySuperMarioMakerGame}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from 'core/game/ClassInAnySuperMarioMakerGame'
import type {PossibleBraces_Collection, PossibleBrackets_Collection, PossibleChevrons_Collection, PossibleColon, PossibleComma, PossibleCommercialAnd, PossibleEndingBrace, PossibleEndingBracket, PossibleEndingChevron, PossibleEndingParentheses, PossibleExclamationPoint, PossibleInterrogationPoint, PossibleLowercaseRomainAlphabet_Collection, PossibleNumbers_Collection, PossibleParentheses_Collection, PossiblePoint, PossiblePoints_Collection, PossibleSemicolon, PossibleSingleCharacter, PossibleSlash, PossibleSlashes_Collection, PossibleStartingBrace, PossibleStartingBracket, PossibleStartingChevron, PossibleStartingParentheses, PossibleUnionTrait, PossibleUppercaseRomainAlphabet_Collection, PossibleVerticalSlash, TextInBraces, TextInBrackets, TextInChevrons, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString} from 'lang/Characters.types'
import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         from 'lang/ClassWithEveryLanguages'
import type {PossibleSpaceCharacter}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from 'lang/EveryLanguages.types'
import type {LanguageEnumerable}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'lang/LanguageEnumerable'
import type {CompanionEnumDeclaration_ProjectLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'lang/ProjectLanguages.companionEnumDeclaration'
import type {Names, Ordinals, PossibleAcronym, PossibleDifferentWord, PossibleEnglishName, PossibleInternationalAcronym, PossibleOriginalName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from 'lang/ProjectLanguages.types'
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from 'lang/name/containers/Language'
import type {ClassUsedInRoute}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             from 'route/ClassUsedInRoute'
import type {ClassWithIsCurrent}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'util/enumerable/ClassWithIsCurrent'

import {EveryLanguages}                from 'lang/EveryLanguages'
import {CompanionEnumRetrievableInUrl} from 'util/enumerable/companion/CompanionEnumRetrievableInUrl'

import Companion = EveryLanguages.Companion

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
export class ProjectLanguages<const ACRONYM extends PossibleAcronym = PossibleAcronym,
    const INTERNATIONAL_ACRONYM extends PossibleInternationalAcronym = PossibleInternationalAcronym, >
    extends Enum<Ordinals, Names>
    implements LanguageEnumerable<PossibleAcronym, PossibleInternationalAcronym, PossibleEnglishName, PossibleOriginalName, PossibleDifferentWord>,
        ClassWithIsCurrent,
        ClassUsedInRoute<PossibleAcronym, never>,
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
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_ProjectLanguages> = class CompanionEnum_ProjectLanguages
        extends CompanionEnumRetrievableInUrl<ProjectLanguages, typeof ProjectLanguages>
        implements CompanionEnumDeclaration_ProjectLanguages {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ProjectLanguages

        private constructor() {
            super(ProjectLanguages,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ProjectLanguages()
        }

        //endregion -------------------- Singleton usage --------------------

        public override readonly URL_REGEX = /\/(((en|es|pt)-(AM|EU))|(fr-(CA|EU))|(zh-(tw|cn))|de|it|nl|ru|ja|ko)\//i

        public override get defaultValue(): ProjectLanguages {
            return this.getValueByLanguage(Companion.defaultValue,)
        }

        public override set defaultValue(value: Nullable<PossibleEnumerableValue<| ProjectLanguages | EveryLanguages>>,) {
            if (value instanceof ProjectLanguages) {
                Companion.setDefaultValue(value.language,)
                return
            }

            Companion.setDefaultValue(value,)
        }

        public override setDefaultValue(value: ImpossibleNames,): never
        public override setDefaultValue(value: Nullable<PossibleEnumerableValue<| ProjectLanguages | EveryLanguages>>,): this
        public override setDefaultValue(value: Nullable<PossibleEnumerableValue<| ProjectLanguages | EveryLanguages>>,): this {
            this.defaultValue = value
            return this
        }


        public get currentOrNull(): NullOr<ProjectLanguages> {
            const value = Companion.currentOrNull
            if (value == null)
                return null
            return this.getValueByLanguage(value,)
        }

        public get current(): ProjectLanguages {
            return this.getValueByLanguage(Companion.current,)
        }

        public set current(value: PossibleEnumerableValueBy<| ProjectLanguages | EveryLanguages>,) {
            if (value instanceof ProjectLanguages) {
                Companion.current = value.language
                return
            }
            Companion.current = value
        }


        public getValueByLanguage(value: PossibleEnumerableValueBy<| EveryLanguages | ProjectLanguages>,): ProjectLanguages {
            if (value instanceof EveryLanguages) {
                const valueFound = this.values.findFirstOrNull(it => it.language === value,)
                if (valueFound == null)
                    throw new NullReferenceException(`No "${this.instance.name}" could be found by this value "${value}".`, value,)
                return valueFound
            }
            return this._getValue(value,)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #language
    readonly #isInSuperMarioMaker1: boolean
    readonly #isInSuperMarioMakerFor3DS: boolean
    readonly #isInSuperMarioMaker2: boolean
    #isInEverySuperMarioMakerGame?: boolean

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(language: EveryLanguages<ACRONYM, INTERNATIONAL_ACRONYM>, isASupportedLanguageInSMM1?: boolean, isASupportedLanguageInSMM3DS?: boolean, isASupportedLanguageInSMM2?: boolean,) {
        super()
        this.#language = language
        this.#isInSuperMarioMaker1 = isASupportedLanguageInSMM1 as boolean
        this.#isInSuperMarioMakerFor3DS = isASupportedLanguageInSMM3DS as boolean
        this.#isInSuperMarioMaker2 = isASupportedLanguageInSMM2 as boolean
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get language(): EveryLanguages<ACRONYM, INTERNATIONAL_ACRONYM> {
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

    public get urlName(): never {
        throw new ReferenceError('No language name can exist in an url.',)
    }

    public get projectAcronym(): ACRONYM {
        return this.language.projectAcronym
    }

    public get internationalAcronym(): INTERNATIONAL_ACRONYM {
        return this.language.internationalAcronym
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

    public get points(): PossiblePoints_Collection {
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


    public get parentheses(): PossibleParentheses_Collection {
        return this.language.parentheses
    }

    public get startingParenthesis(): PossibleStartingParentheses {
        return this.language.startingParenthesis
    }

    public get endingParenthesis(): PossibleEndingParentheses {
        return this.language.endingParenthesis
    }


    public get brackets(): PossibleBrackets_Collection {
        return this.language.brackets
    }

    public get startingBrackets(): PossibleStartingBracket {
        return this.language.startingBrackets
    }

    public get endingBrackets(): PossibleEndingBracket {
        return this.language.endingBrackets
    }


    public get braces(): PossibleBraces_Collection {
        return this.language.braces
    }

    public get startingBraces(): PossibleStartingBrace {
        return this.language.startingBraces
    }

    public get endingBraces(): PossibleEndingBrace {
        return this.language.endingBraces
    }


    public get chevrons(): PossibleChevrons_Collection {
        return this.language.chevrons
    }

    public get startingChevrons(): PossibleStartingChevron {
        return this.language.startingChevrons
    }

    public get endingChevrons(): PossibleEndingChevron {
        return this.language.endingChevrons
    }


    public get slashes(): PossibleSlashes_Collection {
        return this.language.slashes
    }

    public get slash(): PossibleSlash {
        return this.language.slash
    }

    public get verticalSlash(): PossibleVerticalSlash {
        return this.language.verticalSlash
    }


    public get romainLowercaseAlphabet(): PossibleLowercaseRomainAlphabet_Collection {
        return this.language.romainLowercaseAlphabet
    }

    public get romainUppercaseAlphabet(): PossibleUppercaseRomainAlphabet_Collection {
        return this.language.romainUppercaseAlphabet
    }


    public get numbers(): PossibleNumbers_Collection {
        return this.language.numbers
    }


    public character<C extends PossibleSingleCharacter, >(character: C,): VariableCharacterByCharacter<this['isASpaceEvenLanguage'], C>
    public character<C extends string, >(character: C,): VariableCharacterByString<this['isASpaceEvenLanguage'], C>
    public character(character: string,) {
        return this.language.character(character)
    }

    //endregion -------------------- Characters getter methods --------------------
    //region -------------------- Getter methods (current) --------------------

    public get isCurrent(): boolean {
        return this === ProjectLanguages.Companion.currentOrNull
    }

    public get isCurrentOrAssociatedWithIt(): boolean {
        return this.isCurrent
    }

    //endregion -------------------- Getter methods (current) --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
        return this.language.get(classWithEveryLanguages,)
    }

    public original<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): | T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>
    public original<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): NullOr<| T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>>
    public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
        return this.language.original<T>(classWithEveryLanguages,)
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

    public textInChevrons<S extends string, >(text: S,): TextInChevrons<this['isASpaceEvenLanguage'], S>
    public textInChevrons(text: string,) {
        return this.language.textInChevrons(text,)
    }

    //endregion -------------------- Transformation methods --------------------

    //endregion -------------------- Methods --------------------

}

export namespace ProjectLanguages {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link ProjectLanguages} */
    export const Companion = ProjectLanguages.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}
