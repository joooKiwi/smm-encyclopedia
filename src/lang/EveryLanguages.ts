import type {Dispatch, SetStateAction} from 'react';
import i18n                            from 'i18next';

import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from './ClassWithEveryLanguages';
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from './name/containers/Language';
import type {BasicAcronym, BasicEnglishName, BasicOriginalName, EveryLanguagesArray, EveryLanguagesNames, EveryLanguagesOrdinals, PossibleEveryLanguagesAcronym, PossibleEveryLanguagesEnglishName, PossibleEveryLanguagesInternationalAcronym, PossibleEveryLanguagesOriginalName, PossibleNonNullableValue, PossibleProjectLanguagesAcronym, PossibleProjectLanguagesEnglishName, PossibleProjectLanguagesInternationalAcronym, PossibleProjectLanguagesOriginalName}                                                                                                                                                                                                                             from './EveryLanguages.types';
import type {LanguageEnumerable}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from './LanguageEnumerable';
import type {PossibleBraces_Array, PossibleBrackets_Array, PossibleComma, PossibleCommercialAnd, PossibleEndingBrace, PossibleEndingBracket, PossibleEndingParentheses, PossibleExclamationPoint, PossibleInterrogationPoint, PossibleLowercaseRomainAlphabet_Array, PossibleNumbers_Array, PossibleParentheses_Array, PossiblePoint, PossiblePoints_Array, PossibleSingleCharacter, PossibleSlash, PossibleSlashes_Array, PossibleStartingBrace, PossibleStartingBracket, PossibleStartingParentheses, PossibleUnionTrait, PossibleUppercaseRomainAlphabet_Array, PossibleVerticalSlash, TextInBraces, TextInBrackets, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString} from './Characters.types';

import {Characters} from './Characters';
import {Enum}       from '../util/enum/Enum';

export abstract class EveryLanguages
    extends Enum<EveryLanguagesOrdinals, EveryLanguagesNames>
    implements LanguageEnumerable<PossibleEveryLanguagesAcronym, PossibleEveryLanguagesInternationalAcronym, PossibleEveryLanguagesEnglishName, PossibleEveryLanguagesOriginalName> {

    //region -------------------- Enum instances --------------------

    public static readonly ENGLISH =             new class EveryLanguages_English extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage || EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isDefaultLanguage || EveryLanguages.EUROPEAN_ENGLISH.isDefaultLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T): T['english'] {
            return this.get(classWithEveryLanguages);
        }

        public get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['english'] {
            return classWithEveryLanguages.english;
        }

        public original<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['originalEnglish'] {
            return classWithEveryLanguages.originalEnglish;
        }

    }           (true,  false,           'en',    'en',    'English',              'English',);
    public static readonly AMERICAN_ENGLISH =    new class EveryLanguages_AmericanEnglish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T): T['americanEnglish'] {
            return this.get(classWithEveryLanguages);
        }

        public get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['americanEnglish'] {
            return classWithEveryLanguages.americanEnglish;
        }

    }   (true,  false,           'en_AM', 'en-US', 'English (America)',    'English (America)',   EveryLanguages.ENGLISH,);
    public static readonly EUROPEAN_ENGLISH =    new class EveryLanguages_EuropeanEnglish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T): T['europeanEnglish'] {
            return this.get(classWithEveryLanguages);
        }

        public get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['europeanEnglish'] {
            return classWithEveryLanguages.europeanEnglish;
        }

    }   (true,  false,           'en_EU', 'en-EU', 'English (Europe)',     'English (Europe)',    EveryLanguages.ENGLISH,);
    public static readonly FRENCH =              new class EveryLanguages_French extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage || EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isDefaultLanguage || EveryLanguages.EUROPEAN_FRENCH.isDefaultLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T): T['french'] {
            return this.get(classWithEveryLanguages);
        }

        public get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['french'] {
            return classWithEveryLanguages.french;
        }

        public original<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['originalFrench'] {
            return classWithEveryLanguages.originalFrench;
        }

    }            (true,  false,           'fr',    'fr',    'French',               'Français',);
    public static readonly CANADIAN_FRENCH =     new class EveryLanguages_CanadianFrench extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T): T['canadianFrench'] {
            return this.get(classWithEveryLanguages);
        }

        public get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['canadianFrench'] {
            return classWithEveryLanguages.canadianFrench;
        }

    }    (true,  false,           'fr_CA', 'fr-CA', 'French (Canada)',      'Français (Canada)',   EveryLanguages.FRENCH,);
    public static readonly EUROPEAN_FRENCH =     new class EveryLanguages_EuropeanFrench extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T): T['europeanFrench'] {
            return this.get(classWithEveryLanguages);
        }

        public get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['europeanFrench'] {
            return classWithEveryLanguages.europeanFrench;
        }

    }    (true,  false,           'fr_EU', 'fr-EU', 'French (Europe)',      'Français (Europe)',   EveryLanguages.FRENCH,);
    public static readonly GERMAN =              new class EveryLanguages_German extends EveryLanguages {

        protected _get<T extends | ClassWithEveryLanguages | CompleteClassWithEveryLanguages>(classWithEveryLanguages: T,): T['german'] {
            return classWithEveryLanguages.german;
        }

    }            (false, false,           'de',    'de',    'German',               'Deutsche',);
    public static readonly SPANISH =             new class EveryLanguages_Spanish extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage || EveryLanguages.EUROPEAN_SPANISH.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_SPANISH.isDefaultLanguage || EveryLanguages.EUROPEAN_SPANISH.isDefaultLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['spanish'] {
            return classWithEveryLanguages.spanish;
        }

        public original<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['originalSpanish'] {
            return classWithEveryLanguages.originalSpanish;
        }

    }           (false, false,           'es',    'es',    'Spanish',              'Español',);
    public static readonly AMERICAN_SPANISH =    new class EveryLanguages_AmericanSpanish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['americanSpanish'] {
            return classWithEveryLanguages.americanSpanish;
        }

    }   (false, false,           'es_AM', 'es-US', 'Spanish (America)',    'Español (America)',   EveryLanguages.SPANISH,);
    public static readonly EUROPEAN_SPANISH =    new class EveryLanguages_EuropeanSpanish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['europeanSpanish'] {
            return classWithEveryLanguages.europeanSpanish;
        }

    }   (false, false,           'es_EU', 'es-EU', 'Spanish (Europe)',     'Español (Europa)',    EveryLanguages.SPANISH,);
    public static readonly ITALIAN =             new class EveryLanguages_Italian extends EveryLanguages {

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['italian'] {
            return classWithEveryLanguages.italian;
        }

    }           (false, false,           'it',    'it',    'Italian',              'Italiano',);
    public static readonly DUTCH =               new class EveryLanguages_Dutch extends EveryLanguages {

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['dutch'] {
            return classWithEveryLanguages.dutch;
        }

    }             (false, false,           'nl',    'nl',    'Dutch',                'Nederlands',);
    public static readonly PORTUGUESE =          new class EveryLanguages_Portuguese extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage || EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isDefaultLanguage || EveryLanguages.EUROPEAN_PORTUGUESE.isDefaultLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['portuguese'] {
            return classWithEveryLanguages.portuguese;
        }

        public original<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['originalPortuguese'] {
            return classWithEveryLanguages.originalPortuguese;
        }

    }        (false, false,           'pt',    'pt',    'Portuguese',           'Português',);
    public static readonly AMERICAN_PORTUGUESE = new class EveryLanguages_AmericanPortuguese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['americanPortuguese'] {
            return classWithEveryLanguages.americanPortuguese;
        }

    }(false, false,           'pt_AM', 'pt-US', 'Portuguese (America)', 'Português (América)', EveryLanguages.PORTUGUESE,);
    public static readonly EUROPEAN_PORTUGUESE = new class EveryLanguages_EuropeanPortuguese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['europeanPortuguese'] {
            return classWithEveryLanguages.europeanPortuguese;
        }

    }(false, false,           'pt_EU', 'pt-EU', 'Portuguese (Europe)',  'Português (Europa)',  EveryLanguages.PORTUGUESE,);
    public static readonly RUSSIAN =             new class EveryLanguages_Russian extends EveryLanguages {

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['russian'] {
            return classWithEveryLanguages.russian;
        }

    }           (false, false,           'ru',    'ru',    'Russian',              'русский',);
    public static readonly JAPANESE =            new class EveryLanguages_Japanese extends EveryLanguages {

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['japanese'] {
            return classWithEveryLanguages.japanese;
        }

    }          (false, true,            'ja',    'ja',    'Japanese',             '日本語',);
    public static readonly CHINESE =             new class EveryLanguages_Chinese extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.TRADITIONAL_CHINESE.isCurrentLanguage || EveryLanguages.SIMPLIFIED_CHINESE.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.TRADITIONAL_CHINESE.isDefaultLanguage || EveryLanguages.SIMPLIFIED_CHINESE.isDefaultLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['chinese'] {
            return classWithEveryLanguages.chinese;
        }

        public original<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['originalChinese'] {
            return classWithEveryLanguages.originalChinese;
        }

    }           (false, true,            'zh',    'zh',    'Chinese',              '中国人',);
    public static readonly TRADITIONAL_CHINESE = new class EveryLanguages_TraditionalChinese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.SIMPLIFIED_CHINESE.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['traditionalChinese'] {
            return classWithEveryLanguages.traditionalChinese;
        }

    }(false, true,            'zh_T',  'zh',    'Traditional chinese',  '繁體中文',              EveryLanguages.CHINESE,);
    public static readonly SIMPLIFIED_CHINESE =  new class EveryLanguages_SimplifiedChinese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.TRADITIONAL_CHINESE.isCurrentLanguage;
        }

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['simplifiedChinese'] {
            return classWithEveryLanguages.simplifiedChinese;
        }

    } (false, true,            'zh_S',  'zh',    'Simplified chinese',   '简体中文',              EveryLanguages.CHINESE,);
    public static readonly KOREAN =              new class EveryLanguages_Korean extends EveryLanguages {

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['korean'] {
            return classWithEveryLanguages.korean;
        }

    }            (false, [true, false,],  'ko',    'ko',    'Korean',               '한국어',);

    public static readonly GREEK =               new class EveryLanguages_Greek extends EveryLanguages {

        protected _get<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): T['greek'] {
            return classWithEveryLanguages.greek;
        }

    }             (false, false,           'el',    'el',    'Greek',                'ελληνικά',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: EveryLanguagesArray;
    static #DEFAULT?: EveryLanguages;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #CURRENT_LANGUAGE: EveryLanguages;
    public static readonly UNKNOWN_STRING = '???';
    public static INTERNATIONALISATION_SET_CURRENT_LANGUAGE: | Dispatch<SetStateAction<PossibleProjectLanguagesInternationalAcronym>> | null = null;

    readonly #isACompleteLanguage: boolean;

    readonly #isASpaceEvenLanguage: boolean;
    readonly #isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace: boolean;
    readonly #isASpaceEvenLanguageForThePointsAndSpace: boolean;

    readonly #projectAcronym: PossibleEveryLanguagesAcronym;
    readonly #internationalAcronym: PossibleEveryLanguagesInternationalAcronym;
    readonly #englishName: PossibleEveryLanguagesEnglishName;
    readonly #originalName: PossibleEveryLanguagesOriginalName;
    readonly #parent: | EveryLanguages | null;

    #points?: PossiblePoints_Array;
    #comma?: PossibleComma;
    #unionTrait?: PossibleUnionTrait;
    #commercialAnd?: PossibleCommercialAnd;
    #parentheses?: PossibleParentheses_Array;
    #brackets?: PossibleBrackets_Array;
    #braces?: PossibleBraces_Array;
    #slashes?: PossibleSlashes_Array;
    #romainLowercaseAlphabet?: PossibleLowercaseRomainAlphabet_Array;
    #romainUppercaseAlphabet?: PossibleUppercaseRomainAlphabet_Array;
    #numbers?: PossibleNumbers_Array;

    //endregion -------------------- Attributes --------------------

    private constructor(isACompleteLanguage: boolean, isASpaceEvenLanguage: IsASpaceEvenLanguageReceived, projectAcronym: BasicAcronym, internationalAcronym: BasicAcronym, englishName: BasicEnglishName, originalName: BasicOriginalName,)
    private constructor(isACompleteLanguage: boolean, isASpaceEvenLanguage: IsASpaceEvenLanguageReceived, projectAcronym: PossibleProjectLanguagesAcronym, internationalAcronym: PossibleProjectLanguagesInternationalAcronym, englishName: PossibleProjectLanguagesEnglishName, originalName: PossibleProjectLanguagesOriginalName,)
    private constructor(isACompleteLanguage: boolean, isASpaceEvenLanguage: IsASpaceEvenLanguageReceived, projectAcronym: PossibleProjectLanguagesAcronym, internationalAcronym: PossibleProjectLanguagesInternationalAcronym, englishName: PossibleProjectLanguagesEnglishName, originalName: PossibleProjectLanguagesOriginalName, parent: EveryLanguages,)
    private constructor(isACompleteLanguage: boolean, isASpaceEvenLanguage: IsASpaceEvenLanguageReceived, projectAcronym: PossibleEveryLanguagesAcronym, internationalAcronym: PossibleEveryLanguagesInternationalAcronym, englishName: PossibleEveryLanguagesEnglishName, originalName: PossibleEveryLanguagesOriginalName, parent: | EveryLanguages | null = null,) {
        super(EveryLanguages);
        this.#isACompleteLanguage = isACompleteLanguage;
        if (typeof isASpaceEvenLanguage == 'boolean')
            this.#isASpaceEvenLanguage = this.#isASpaceEvenLanguageForThePointsAndSpace = this.#isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace = isASpaceEvenLanguage;
        else {
            this.#isASpaceEvenLanguage = isASpaceEvenLanguage[0] && isASpaceEvenLanguage[1];
            this.#isASpaceEvenLanguageForThePointsAndSpace = isASpaceEvenLanguage[0];
            this.#isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace = isASpaceEvenLanguage[1];
        }
        this.#projectAcronym = projectAcronym;
        this.#internationalAcronym = internationalAcronym;
        this.#englishName = englishName;
        this.#originalName = originalName;
        this.#parent = parent;
    }

    //region -------------------- Getter methods --------------------

    public get isACompleteLanguage(): boolean {
        return this.#isACompleteLanguage;
    }

    public get isASpaceEvenLanguage(): boolean {
        return this.#isASpaceEvenLanguage;
    }

    public get isASpaceEvenLanguageForThePointsAndSpace(): boolean {
        return this.#isASpaceEvenLanguageForThePointsAndSpace;
    }

    public get isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace(): boolean {
        return this.#isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace;
    }

    public get projectAcronym(): PossibleEveryLanguagesAcronym {
        return this.#projectAcronym;
    }

    public get internationalAcronym(): PossibleEveryLanguagesInternationalAcronym {
        return this.#internationalAcronym;
    }

    public get englishName(): PossibleEveryLanguagesEnglishName {
        return this.#englishName;
    }

    public get originalName(): PossibleEveryLanguagesOriginalName {
        return this.#originalName;
    }

    public get parent(): | EveryLanguages | null {
        return this.#parent;
    }

    public get isCurrentLanguage(): boolean {
        return this === EveryLanguages.currentLanguage;
    }

    public get isCurrentLanguageOrAssociatedWithIt(): boolean {
        return this.isCurrentLanguage;
    }

    public get isDefaultLanguage(): boolean {
        return this === EveryLanguages.default;
    }

    //region -------------------- Characters getter methods --------------------

    public get points(): PossiblePoints_Array {
        return this.#points ??= this.isASpaceEvenLanguage ? Characters.points_spaceEven : Characters.points_spaceUneven;
    }

    public get point(): PossiblePoint {
        return this.points[0];
    }

    public get interrogationPoint(): PossibleInterrogationPoint {
        return this.points[1];
    }

    public get exclamationPoint(): PossibleExclamationPoint {
        return this.points[2];
    }

    public get comma(): PossibleComma {
        return this.#comma ??= Characters.COMMA.getCharacters(this.isASpaceEvenLanguage)[0] as PossibleComma;
    }

    public get unionTrait(): PossibleUnionTrait {
        return this.#unionTrait ??= Characters.UNION_TRAIT.getCharacters(this.isASpaceEvenLanguage)[0] as PossibleUnionTrait;
    }


    public get commercialAnd(): PossibleCommercialAnd {
        return this.#commercialAnd ??= Characters.COMMERCIAL_AND.getCharacters(this.isASpaceEvenLanguage)[0] as PossibleCommercialAnd;
    }


    public get parentheses(): PossibleParentheses_Array {
        return this.#parentheses ??= this.isASpaceEvenLanguage ? Characters.parentheses_spaceEven : Characters.parentheses_spaceUneven;
    }

    public get startingParenthesis(): PossibleStartingParentheses {
        return this.parentheses[0];
    }

    public get endingParenthesis(): PossibleEndingParentheses {
        return this.parentheses[1];
    }

    public get brackets(): PossibleBrackets_Array {
        return this.#brackets ??= this.isASpaceEvenLanguage ? Characters.brackets_spaceEven : Characters.brackets_spaceUneven;
    }

    public get startingBrackets(): PossibleStartingBracket {
        return this.brackets[0];
    }

    public get endingBrackets(): PossibleEndingBracket {
        return this.brackets[1];
    }

    public get braces(): PossibleBraces_Array {
        return this.#braces ??= this.isASpaceEvenLanguage ? Characters.braces_spaceEven : Characters.braces_spaceUneven;
    }

    public get startingBraces(): PossibleStartingBrace {
        return this.braces[0];
    }

    public get endingBraces(): PossibleEndingBrace {
        return this.braces[1];
    }


    public get slashes(): PossibleSlashes_Array {
        return this.#slashes ??= this.isASpaceEvenLanguage ? Characters.slashes_spaceEven : Characters.slashes_spaceUneven;
    }

    public get slash(): PossibleSlash {
        return this.slashes[0];
    }

    public get verticalSlash(): PossibleVerticalSlash {
        return this.slashes[1];
    }


    public get romainLowercaseAlphabet(): PossibleLowercaseRomainAlphabet_Array {
        return this.#romainLowercaseAlphabet ??= this.isASpaceEvenLanguage ? Characters.lowercaseLetters_spaceEven : Characters.lowercaseLetters_spaceUneven;
    }

    public get romainUppercaseAlphabet(): PossibleUppercaseRomainAlphabet_Array {
        return this.#romainUppercaseAlphabet ??= this.isASpaceEvenLanguage ? Characters.uppercaseLetters_spaceEven : Characters.uppercaseLetters_spaceUneven;
    }


    public get numbers(): PossibleNumbers_Array {
        return this.#numbers ??= this.isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace ? Characters.numbers_spaceEven : Characters.numbers_spaceUneven;
    }


    public character<C extends PossibleSingleCharacter, >(character: C,): VariableCharacterByCharacter<this['isASpaceEvenLanguage'], C>
    public character<C extends string, >(character: C,): VariableCharacterByString<this['isASpaceEvenLanguage'], C>
    public character(character: string,) {
        return Characters.getCharacter(this.isASpaceEvenLanguage, character,);
    }

    //endregion -------------------- Characters getter methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected abstract _get<T extends CompleteClassWithEveryLanguages = CompleteClassWithEveryLanguages, >(classWithEveryLanguages: T,): string;
    protected abstract _get<T extends ClassWithEveryLanguages = ClassWithEveryLanguages, >(classWithEveryLanguages: T,): | string | null;
    protected abstract _get(classWithEveryLanguages: AnyClassWithEveryLanguages,): | string | null;

    public get(classWithEveryLanguages: ClassWithEveryLanguages,): string {
        return this._get(classWithEveryLanguages) ?? EveryLanguages.AMERICAN_ENGLISH.get(classWithEveryLanguages);
    }

    public original<T extends CompleteClassWithEveryLanguages = CompleteClassWithEveryLanguages, >(classWithEveryLanguages: T,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal
    public original<T extends ClassWithEveryLanguages = ClassWithEveryLanguages, >(classWithEveryLanguages: T,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null
    public original(classWithEveryLanguages: AnyClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null {
        return this.parent?.original(classWithEveryLanguages) ?? this.get(classWithEveryLanguages);
    }

    //region -------------------- Transformation methods --------------------

    public textInParentheses<S extends string, >(text: S,): TextInParentheses<this['isASpaceEvenLanguage'], S>
    public textInParentheses(text: string,) {
        return Characters.textInParentheses(this.isASpaceEvenLanguage, text,);
    }

    public textInBrackets<S extends string, >(text: S,): TextInBrackets<this['isASpaceEvenLanguage'], S>
    public textInBrackets(text: string,) {
        return Characters.textInBrackets(this.isASpaceEvenLanguage, text,);
    }

    public textInBraces<S extends string, >(text: S,): TextInBraces<this['isASpaceEvenLanguage'], S>
    public textInBraces(text: string,) {
        return Characters.textInBraces(this.isASpaceEvenLanguage, text,);
    }

    //endregion -------------------- Transformation methods --------------------

    /**
     * Set the language into the dom elements using a <b>lang</b> attribute
     * to change it to the current instance.
     *
     * @private
     */
    private __setLanguageToHTML(): this {
        document.querySelectorAll('[lang]').forEach(element => element.setAttribute('lang', this.projectAcronym));
        return this;
    }

    public static get currentLanguage(): EveryLanguages {
        return this.#CURRENT_LANGUAGE;
    }

    public static set currentLanguage(value: | EveryLanguages | string | number,) {
        this.setCurrentLanguage(value);
    }

    public static setCurrentLanguage(value: | EveryLanguages | string | number,): typeof EveryLanguages {
        let selectedLanguage = this.getValue(value);
        if (selectedLanguage == null || selectedLanguage.isCurrentLanguage)
            return this;

        const currentLanguage = (this.#CURRENT_LANGUAGE = selectedLanguage.__setLanguageToHTML());
        i18n.changeLanguage(currentLanguage.projectAcronym);
        this.INTERNATIONALISATION_SET_CURRENT_LANGUAGE?.(currentLanguage.internationalAcronym as PossibleProjectLanguagesInternationalAcronym);
        return this;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static get default(): EveryLanguages {
        return this.#DEFAULT!;
    }

    public static set default(value: EveryLanguages | string | number,) {
        this.setDefault(value);
    }

    public static setDefault(value: | EveryLanguages | string | number,): typeof EveryLanguages {
        const selectedValue = this.getValue(value);
        if (selectedValue == null || selectedValue.isDefaultLanguage)
            return this;

        this.#DEFAULT = selectedValue;
        return this;
    }


    public static getValue(value: | null | undefined,): null
    public static getValue(value: PossibleNonNullableValue,): EveryLanguages
    public static getValue<O extends EveryLanguagesOrdinals, >(ordinal: O,): EveryLanguagesArray[O]
    public static getValue<O extends number, >(ordinal: O,): | NonNullable<EveryLanguagesArray[O]> | null
    public static getValue<I extends EveryLanguages, >(instance: I,): I
    public static getValue(nameOrAcronym: | PossibleEveryLanguagesAcronym | PossibleEveryLanguagesEnglishName | PossibleEveryLanguagesOriginalName | EveryLanguagesNames,): EveryLanguages
    public static getValue(nameOrAcronym: string,): | EveryLanguages | null
    public static getValue(value: | EveryLanguages | string | number | null | undefined,): | EveryLanguages | null
    public static getValue(value: | EveryLanguages | string | number | null | undefined,): | EveryLanguages | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                ?? this.values.find(language => language.projectAcronym === value || language.internationalAcronym === value || language.englishName === value || language.originalName === value)
                ?? null
                : typeof value == 'number'
                    ? this.values[value] ?? null
                    : value ?? null;
    }

    public static get values(): EveryLanguagesArray {
        return this.#VALUES ??= [
            this.ENGLISH, this.AMERICAN_ENGLISH, this.EUROPEAN_ENGLISH,
            this.FRENCH, this.CANADIAN_FRENCH, this.EUROPEAN_FRENCH,
            this.GERMAN,
            this.SPANISH, this.AMERICAN_SPANISH, this.EUROPEAN_SPANISH,
            this.ITALIAN,
            this.DUTCH,
            this.PORTUGUESE, this.AMERICAN_PORTUGUESE, this.EUROPEAN_PORTUGUESE,
            this.RUSSIAN,
            this.JAPANESE,
            this.CHINESE, this.TRADITIONAL_CHINESE, this.SIMPLIFIED_CHINESE,
            this.KOREAN,
            this.GREEK,
        ];
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type IsASpaceEvenLanguageReceived = | boolean | [excludingPointsAndSpace: boolean, pointsAndSpace:boolean,];
