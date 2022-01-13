import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from './ClassWithEveryLanguages';
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from './name/containers/Language';
import type {ClassInAnySuperMarioMakerGame}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from '../core/ClassInAnySuperMarioMakerGame';
import type {EnumArray, Names, Ordinals, PossibleAcronym, PossibleDifferentWord, PossibleEnglishName, PossibleInternationalAcronym, PossibleNonNullableValue, PossibleOriginalName, PossibleStringValue, PossibleValue}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from './ProjectLanguages.types';
import type {LanguageEnumerable}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from './LanguageEnumerable';
import type {PossibleBraces_Array, PossibleBrackets_Array, PossibleColon, PossibleComma, PossibleCommercialAnd, PossibleEndingBrace, PossibleEndingBracket, PossibleEndingParentheses, PossibleExclamationPoint, PossibleInterrogationPoint, PossibleLowercaseRomainAlphabet_Array, PossibleNumbers_Array, PossibleParentheses_Array, PossiblePoint, PossiblePoints_Array, PossibleSemicolon, PossibleSingleCharacter, PossibleSlash, PossibleSlashes_Array, PossibleStartingBrace, PossibleStartingBracket, PossibleStartingParentheses, PossibleUnionTrait, PossibleUppercaseRomainAlphabet_Array, PossibleVerticalSlash, TextInBraces, TextInBrackets, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString} from './Characters.types';
import type {PossibleSpaceCharacter}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from './EveryLanguages.types';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         from '../util/enum/Enum.types';

import {Enum}           from '../util/enum/Enum';
import {EveryLanguages} from './EveryLanguages';

/**
 * <p>
 *     An enum class containing every languages in the project.
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
 *     <li>en_AM - American English</li>
 *     <li>en_EU - European English</li>
 *     <li>fr_CA - Canadian French</li>
 *     <li>fr_EU - European French</li>
 *     <li>de    - German</li>
 *     <li>es_AM - American Spanish</li>
 *     <li>es_EU - European Spanish</li>
 *     <li>it    - Italian</li>
 *     <li>nl    - Dutch</li>
 *     <li>pt_AM - American Portuguese</li>
 *     <li>pt_EU - European Portuguese</li>
 *     <li>ru    - Russian</li>
 *     <li>ja    - Japanese</li>
 *     <li>zh_T  - Traditional Chinese</li>
 *     <li>zh_S  - Simplified Chinese</li>
 *     <li>ko    - Korean</li>
 * </ol>
 *
 * @indirectlyInherit<EveryLanguages>
 */
export class ProjectLanguages
    extends Enum<Ordinals, Names>
    implements LanguageEnumerable<PossibleAcronym, PossibleInternationalAcronym, PossibleEnglishName, PossibleOriginalName, PossibleDifferentWord>,
        ClassInAnySuperMarioMakerGame {

    //region -------------------- Enum instances --------------------

    public static readonly AMERICAN_ENGLISH =    new ProjectLanguages(EveryLanguages.AMERICAN_ENGLISH,    true,  true, );
    public static readonly EUROPEAN_ENGLISH =    new ProjectLanguages(EveryLanguages.EUROPEAN_ENGLISH,    true,  true, );
    public static readonly CANADIAN_FRENCH =     new ProjectLanguages(EveryLanguages.CANADIAN_FRENCH,     true,  true, );
    public static readonly EUROPEAN_FRENCH =     new ProjectLanguages(EveryLanguages.EUROPEAN_FRENCH,     true,  true, );
    public static readonly GERMAN =              new ProjectLanguages(EveryLanguages.GERMAN,              true,  true, );
    public static readonly AMERICAN_SPANISH =    new ProjectLanguages(EveryLanguages.AMERICAN_SPANISH,    true,  true, );
    public static readonly EUROPEAN_SPANISH =    new ProjectLanguages(EveryLanguages.EUROPEAN_SPANISH,    true,  true, );
    public static readonly ITALIAN =             new ProjectLanguages(EveryLanguages.ITALIAN,             true,  true, );
    public static readonly DUTCH =               new ProjectLanguages(EveryLanguages.DUTCH,               true,  true, );
    public static readonly AMERICAN_PORTUGUESE = new ProjectLanguages(EveryLanguages.AMERICAN_PORTUGUESE, false, false,);
    public static readonly EUROPEAN_PORTUGUESE = new ProjectLanguages(EveryLanguages.EUROPEAN_PORTUGUESE, true,  false,);
    public static readonly RUSSIAN =             new ProjectLanguages(EveryLanguages.RUSSIAN,             true,  true, );
    public static readonly JAPANESE =            new ProjectLanguages(EveryLanguages.JAPANESE,            true,  true, );
    public static readonly TRADITIONAL_CHINESE = new ProjectLanguages(EveryLanguages.TRADITIONAL_CHINESE, false, true, );
    public static readonly SIMPLIFIED_CHINESE =  new ProjectLanguages(EveryLanguages.SIMPLIFIED_CHINESE,  false, true, );
    public static readonly KOREAN =              new ProjectLanguages(EveryLanguages.KOREAN,              false, true, );

    protected static readonly _DEFAULT = this.getValue(EveryLanguages.default)!;

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: ProjectLanguages;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #language: EveryLanguages;
    readonly #isInSuperMarioMaker1: boolean;
    readonly #isInSuperMarioMaker2: boolean;
    #isInEverySuperMarioMakerGame?: boolean;

    //endregion -------------------- Attributes --------------------

    protected constructor(language: ProjectLanguages,)
    // @ts-ignore
    private constructor(language: EveryLanguages, isASupportedLanguageInSMM1: boolean, isASupportedLanguageInSMM2: boolean,)
    protected constructor(language: EveryLanguages | ProjectLanguages, isASupportedLanguageInSMM1?: boolean, isASupportedLanguageInSMM2?: boolean,) {
        super();
        if (language instanceof ProjectLanguages) {
            this.#language = language.language;
            this.#isInSuperMarioMaker1 = language.isInSuperMarioMaker1;
            this.#isInSuperMarioMaker2 = language.isInSuperMarioMaker2;
        } else {
            this.#language = language;
            this.#isInSuperMarioMaker1 = isASupportedLanguageInSMM1 as boolean;
            this.#isInSuperMarioMaker2 = isASupportedLanguageInSMM2 as boolean;
        }
    }

    //region -------------------- Getter methods --------------------

    public get language(): EveryLanguages {
        return this.#language;
    }

    public get isACompleteLanguage(): boolean {
        return this.language.isACompleteLanguage;
    }

    //region -------------------- Space getter methods --------------------

    public get hasSpace(): boolean{
        return this.language.hasSpace;
    }

    public get isASpaceEvenLanguage(): boolean {
        return this.language.isASpaceEvenLanguage;
    }

    public get isASpaceEvenLanguageForThePointsAndSpace(): boolean {
        return this.language.isASpaceEvenLanguageForThePointsAndSpace;
    }

    public get isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace(): boolean {
        return this.language.isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace;
    }

    //endregion -------------------- Space getter methods --------------------

    public get projectAcronym(): PossibleAcronym {
        return this.language.projectAcronym as PossibleAcronym;
    }

    public get internationalAcronym(): PossibleInternationalAcronym {
        return this.language.internationalAcronym as PossibleInternationalAcronym;
    }

    public get englishName(): PossibleEnglishName {
        return this.language.englishName as PossibleEnglishName;
    }

    public get originalName(): PossibleOriginalName {
        return this.language.originalName as PossibleOriginalName;
    }

    public get differentWords(): PossibleDifferentWord {
        return this.language.differentWords!;
    }

    public get isCurrentLanguage(): boolean {
        return this.language.isCurrentLanguage;
    }

    public get isCurrentLanguageOrAssociatedWithIt(): boolean {
        return this.language.isCurrentLanguageOrAssociatedWithIt;
    }

    public get isDefaultLanguage(): boolean {
        return this.language.isDefaultLanguage;
    }

    public get isInSuperMarioMaker1(): boolean {
        return this.#isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.#isInSuperMarioMaker2;
    }

    public get isInEverySuperMarioMakerGame(): boolean {
        return this.#isInEverySuperMarioMakerGame ??= this.isInSuperMarioMaker1 && this.isInSuperMarioMaker2;
    }

    //region -------------------- Characters getter methods --------------------

    public get space(): PossibleSpaceCharacter {
        return this.language.space;
    }

    public get points(): PossiblePoints_Array {
        return this.language.points;
    }

    public get point(): PossiblePoint {
        return this.language.point;
    }

    public get interrogationPoint(): PossibleInterrogationPoint {
        return this.language.interrogationPoint;
    }

    public get exclamationPoint(): PossibleExclamationPoint {
        return this.language.exclamationPoint;
    }

    public get colon(): PossibleColon {
        return this.language.colon;
    }

    public get semicolon(): PossibleSemicolon {
        return this.language.semicolon;
    }

    public get comma(): PossibleComma {
        return this.language.comma;
    }

    public get unionTrait(): PossibleUnionTrait {
        return this.language.unionTrait;
    }


    public get commercialAnd(): PossibleCommercialAnd {
        return this.language.commercialAnd;
    }


    public get parentheses(): PossibleParentheses_Array {
        return this.language.parentheses;
    }

    public get startingParenthesis(): PossibleStartingParentheses {
        return this.language.startingParenthesis;
    }

    public get endingParenthesis(): PossibleEndingParentheses {
        return this.language.endingParenthesis;
    }

    public get brackets(): PossibleBrackets_Array {
        return this.language.brackets;
    }

    public get startingBrackets(): PossibleStartingBracket {
        return this.language.startingBrackets;
    }

    public get endingBrackets(): PossibleEndingBracket {
        return this.language.endingBrackets;
    }

    public get braces(): PossibleBraces_Array {
        return this.language.braces;
    }

    public get startingBraces(): PossibleStartingBrace {
        return this.language.startingBraces;
    }

    public get endingBraces(): PossibleEndingBrace {
        return this.language.endingBraces;
    }


    public get slashes(): PossibleSlashes_Array {
        return this.language.slashes;
    }

    public get slash(): PossibleSlash {
        return this.language.slash;
    }

    public get verticalSlash(): PossibleVerticalSlash {
        return this.language.verticalSlash;
    }


    public get romainLowercaseAlphabet(): PossibleLowercaseRomainAlphabet_Array {
        return this.language.romainLowercaseAlphabet;
    }

    public get romainUppercaseAlphabet(): PossibleUppercaseRomainAlphabet_Array {
        return this.language.romainUppercaseAlphabet;
    }


    public get numbers(): PossibleNumbers_Array {
        return this.language.numbers;
    }


    public character<C extends PossibleSingleCharacter, >(character: C,): VariableCharacterByCharacter<this['isASpaceEvenLanguage'], C>
    public character<C extends string, >(character: C,): VariableCharacterByString<this['isASpaceEvenLanguage'], C>
    public character(character: string,) {
        return this.language.character(character);
    }

    //endregion -------------------- Characters getter methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(classWithEveryLanguages: AnyClassWithEveryLanguages,): string {
        return this.language.get(classWithEveryLanguages);
    }

    /**
     * @param classWithEveryLanguages
     * @see EveryLanguages.getEnglish
     */
    public static getEnglish(classWithEveryLanguages: AnyClassWithEveryLanguages,): string {
        return this.AMERICAN_ENGLISH.get(classWithEveryLanguages);
    }

    public original(classWithEveryLanguages: CompleteClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal
    public original(classWithEveryLanguages: ClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null
    public original(classWithEveryLanguages: AnyClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null {
        return this.language.original(classWithEveryLanguages);
    }

    //region -------------------- Transformation methods --------------------

    public textInParentheses<S extends string, >(text: S,): TextInParentheses<this['isASpaceEvenLanguage'], S>
    public textInParentheses(text: string,) {
        return this.language.textInParentheses(text,);
    }

    public textInBrackets<S extends string, >(text: S,): TextInBrackets<this['isASpaceEvenLanguage'], S>
    public textInBrackets(text: string,) {
        return this.language.textInBrackets(text,);
    }

    public textInBraces<S extends string, >(text: S,): TextInBraces<this['isASpaceEvenLanguage'], S>
    public textInBraces(text: string,) {
        return this.language.textInBraces(text,);
    }

    //endregion -------------------- Transformation methods --------------------

    public static get currentLanguage(): ProjectLanguages {
        return this.getValue(EveryLanguages.currentLanguage)!;
    }

    public static set currentLanguage(value: | EveryLanguages | ProjectLanguages | string | number,) {
        this.setCurrentLanguage(value);
    }

    public static setCurrentLanguage(value: | EveryLanguages | ProjectLanguages | string | number,): typeof ProjectLanguages {
        if (value instanceof ProjectLanguages)
            EveryLanguages.setCurrentLanguage(value.language);
        else
            EveryLanguages.setCurrentLanguage(value);
        return this;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<ProjectLanguages> {
        return ProjectLanguages;
    }

    public static get default(): ProjectLanguages {
        return this.getValue(EveryLanguages.default)!;
    }

    public static set default(value: | EveryLanguages | ProjectLanguages | string | number,) {
        this.setDefault(value);
    }

    public static setDefault(value: | EveryLanguages | ProjectLanguages | string | number,): typeof ProjectLanguages {
        if (value instanceof ProjectLanguages)
            EveryLanguages.setDefault(value.language);
        else
            EveryLanguages.setDefault(value);
        return this;
    }


    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names, >(name: N,): typeof ProjectLanguages[N]
    public static getValue(nameOrAcronym: PossibleStringValue,): ProjectLanguages
    public static getValue(nameOrAcronym: string,): | ProjectLanguages | null
    public static getValue<I extends ProjectLanguages, >(instance: I,): I
    public static getValue(instance: EveryLanguages,): | ProjectLanguages | null
    public static getValue(value: PossibleNonNullableValue,): ProjectLanguages
    public static getValue(value: PossibleValue,): | ProjectLanguages | null
    public static getValue(value: PossibleValue,): | ProjectLanguages | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                ?? this.getValue(EveryLanguages.getValue(value))
                ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value instanceof EveryLanguages
                        ? this.values.find(language => language.language === value) ?? null
                        : value;
    }


    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
