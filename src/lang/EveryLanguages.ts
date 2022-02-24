import type {Dispatch, SetStateAction} from 'react';
import i18n                            from 'i18next';

import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from './ClassWithEveryLanguages';
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal, PossibleAmericanOrEuropeanValue, PossibleCanadianOrEuropeanValue, PossibleChineseValue}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         from './name/containers/Language';
import type {AdditionalAcronym, AdditionalEnglishName, AdditionalOriginalName, BasicAcronym, BasicEnglishName, BasicOriginalName, EnumArray, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleInternationalAcronym, PossibleNonNullableValue, PossibleOriginalName, PossibleSpaceCharacter, PossibleStringValue, PossibleValue}                                                                                                                                                                                                                                                                                                                                                                                         from './EveryLanguages.types';
import type {LanguageEnumerable}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from './LanguageEnumerable';
import type {PossibleAcronym as PossibleAcronym_Project, PossibleDifferentWord, PossibleEnglishName as PossibleEnglishName_Project, PossibleInternationalAcronym as PossibleInternationalAcronym_Project, PossibleOriginalName as PossibleOriginalName_Project}                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from './ProjectLanguages.types';
import type {PossibleBraces_Array, PossibleBrackets_Array, PossibleColon, PossibleComma, PossibleCommercialAnd, PossibleEndingBrace, PossibleEndingBracket, PossibleEndingParentheses, PossibleExclamationPoint, PossibleInterrogationPoint, PossibleLowercaseRomainAlphabet_Array, PossibleNumbers_Array, PossibleParentheses_Array, PossiblePoint, PossiblePoints_Array, PossibleSemicolon, PossibleSingleCharacter, PossibleSlash, PossibleSlashes_Array, PossibleStartingBrace, PossibleStartingBracket, PossibleStartingParentheses, PossibleUnionTrait, PossibleUppercaseRomainAlphabet_Array, PossibleVerticalSlash, TextInBraces, TextInBrackets, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString} from './Characters.types';
import type {PossibleLanguageValue}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from './ClassWithOnlyProjectLanguages';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         from '../util/enum/Enum.types';

import {Characters} from './Characters';
import {Enum}       from '../util/enum/Enum';

export abstract class EveryLanguages
    extends Enum<Ordinals, Names>
    implements LanguageEnumerable<PossibleAcronym, PossibleInternationalAcronym, PossibleEnglishName, PossibleOriginalName, | PossibleDifferentWord | null> {

    //region -------------------- Enum instances --------------------

    public static readonly ENGLISH =             new class EveryLanguages_English extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage || EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isDefaultLanguage || EveryLanguages.EUROPEAN_ENGLISH.isDefaultLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['english']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return this.get(classWithEveryLanguages);
        }

        public get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['english']
        public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return classWithEveryLanguages.english;
        }

        public original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalEnglish']
        public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): AmericanOrEuropeanOriginal<T> {
            return classWithEveryLanguages.originalEnglish;
        }

    }           (true,  'en',    'en',    'English',              'English',);
    public static readonly AMERICAN_ENGLISH =    new class EveryLanguages_AmericanEnglish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanEnglish']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return this.get(classWithEveryLanguages);
        }

        public get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanEnglish']
        public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return classWithEveryLanguages.americanEnglish;
        }

    }   (true,  'en_AM', 'en-US', 'English (America)',    'English (America)',   'America',      EveryLanguages.ENGLISH,);
    public static readonly EUROPEAN_ENGLISH =    new class EveryLanguages_EuropeanEnglish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanEnglish']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return this.get(classWithEveryLanguages);
        }

        public get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanEnglish']
        public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return classWithEveryLanguages.europeanEnglish;
        }

    }   (true,  'en_EU', 'en-EU', 'English (Europe)',     'English (Europe)',    'Europe',       EveryLanguages.ENGLISH,);
    public static readonly FRENCH =              new class EveryLanguages_French extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage || EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isDefaultLanguage || EveryLanguages.EUROPEAN_FRENCH.isDefaultLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['french']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return this.get(classWithEveryLanguages);
        }

        public get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['french']
        public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return classWithEveryLanguages.french;
        }

        public original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalFrench']
        public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): CanadianOrEuropeanOriginal<T> {
            return classWithEveryLanguages.originalFrench;
        }

    }            (true,  'fr',    'fr',    'French',               'Français',);
    public static readonly CANADIAN_FRENCH =     new class EveryLanguages_CanadianFrench extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['canadianFrench']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return this.get(classWithEveryLanguages);
        }

        public get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['canadianFrench']
        public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return classWithEveryLanguages.canadianFrench;
        }

    }    (true,  'fr_CA', 'fr-CA', 'French (Canada)',      'Français (Canada)',   'Canada',       EveryLanguages.FRENCH,);
    public static readonly EUROPEAN_FRENCH =     new class EveryLanguages_EuropeanFrench extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanFrench']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return this.get(classWithEveryLanguages);
        }

        public get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanFrench']
        public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
            return classWithEveryLanguages.europeanFrench;
        }

    }    (true,  'fr_EU', 'fr-EU', 'French (Europe)',      'Français (Europe)',   'Europe',       EveryLanguages.FRENCH,);
    public static readonly GERMAN =              new class EveryLanguages_German extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        protected _get<T, U extends AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['german']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.german;
        }

    }            (false, 'de',    'de',    'German',               'Deutsche',);
    public static readonly SPANISH =             new class EveryLanguages_Spanish extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage || EveryLanguages.EUROPEAN_SPANISH.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_SPANISH.isDefaultLanguage || EveryLanguages.EUROPEAN_SPANISH.isDefaultLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['spanish']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.spanish;
        }

        public original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalSpanish']
        public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleAmericanOrEuropeanValue<T> {
            return classWithEveryLanguages.originalSpanish;
        }

    }           (false, 'es',    'es',    'Spanish',              'Español',);
    public static readonly AMERICAN_SPANISH =    new class EveryLanguages_AmericanSpanish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanSpanish']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.americanSpanish;
        }

    }   (false, 'es_AM', 'es-US', 'Spanish (America)',    'Español (America)',   'America',      EveryLanguages.SPANISH,);
    public static readonly EUROPEAN_SPANISH =    new class EveryLanguages_EuropeanSpanish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanSpanish']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.europeanSpanish;
        }

    }   (false, 'es_EU', 'es-EU', 'Spanish (Europe)',     'Español (Europa)',    'Europe',       EveryLanguages.SPANISH,);
    public static readonly ITALIAN =             new class EveryLanguages_Italian extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['italian']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.italian;
        }

    }           (false, 'it',    'it',    'Italian',              'Italiano',);
    public static readonly DUTCH =               new class EveryLanguages_Dutch extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['dutch']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.dutch;
        }

    }             (false, 'nl',    'nl',    'Dutch',                'Nederlands',);
    public static readonly PORTUGUESE =          new class EveryLanguages_Portuguese extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage || EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isDefaultLanguage || EveryLanguages.EUROPEAN_PORTUGUESE.isDefaultLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['portuguese']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.portuguese;
        }

        public original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalPortuguese']
        public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleAmericanOrEuropeanValue<T> {
            return classWithEveryLanguages.originalPortuguese;
        }

    }        (false, 'pt',    'pt',    'Portuguese',           'Português',);
    public static readonly AMERICAN_PORTUGUESE = new class EveryLanguages_AmericanPortuguese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanPortuguese']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.americanPortuguese;
        }

    }(false, 'pt_AM', 'pt-US', 'Portuguese (America)', 'Português (América)', 'America',      EveryLanguages.PORTUGUESE,);
    public static readonly EUROPEAN_PORTUGUESE = new class EveryLanguages_EuropeanPortuguese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanPortuguese']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.europeanPortuguese;
        }

    }(false, 'pt_EU', 'pt-EU', 'Portuguese (Europe)',  'Português (Europa)',  'Europe',       EveryLanguages.PORTUGUESE,);
    public static readonly RUSSIAN =             new class EveryLanguages_Russian extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['russian']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.russian;
        }

    }           (false, 'ru',    'ru',    'Russian',              'русский',);
    public static readonly JAPANESE =            new class EveryLanguages_Japanese extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_EVEN_LANGUAGE_WITHOUT_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['japanese']
        protected _get<T>(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.japanese;
        }

    }          (false, 'ja',    'ja',    'Japanese',             '日本語',);
    public static readonly CHINESE =             new class EveryLanguages_Chinese extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_EVEN_LANGUAGE_WITHOUT_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.TRADITIONAL_CHINESE.isCurrentLanguage || EveryLanguages.SIMPLIFIED_CHINESE.isCurrentLanguage;
        }

        public get isDefaultLanguage(): boolean {
            return EveryLanguages.TRADITIONAL_CHINESE.isDefaultLanguage || EveryLanguages.SIMPLIFIED_CHINESE.isDefaultLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['chinese']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.chinese;
        }

        public original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalChinese']
        public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleChineseValue<T> {
            return classWithEveryLanguages.originalChinese;
        }

    }           (false, 'zh',    'zh',    'Chinese',              '中国人',);
    public static readonly TRADITIONAL_CHINESE = new class EveryLanguages_TraditionalChinese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.SIMPLIFIED_CHINESE.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['traditionalChinese']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.traditionalChinese;
        }

     }(false, 'zh_T',  'zh-TW', 'Traditional chinese',  '繁體中文',              'Traditional', EveryLanguages.CHINESE,);
    public static readonly SIMPLIFIED_CHINESE =  new class EveryLanguages_SimplifiedChinese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.TRADITIONAL_CHINESE.isCurrentLanguage;
        }

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['simplifiedChinese']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.simplifiedChinese;
        }

    } (false, 'zh_S',  'zh-CN', 'Simplified chinese',   '简体中文',              'Simplified',  EveryLanguages.CHINESE,);
    public static readonly KOREAN =              new class EveryLanguages_Korean extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_EVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['korean']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.korean;
        }

    }            (false, 'ko',    'ko',    'Korean',               '한국어',);

    public static readonly GREEK =               new class EveryLanguages_Greek extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected get _spaceParameters(): SpaceParameterReceived {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE;
        }

        //endregion -------------------- Space getter methods --------------------

        protected _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['greek']
        protected _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T> {
            return classWithEveryLanguages.greek;
        }

    }             (false, 'el',    'el',    'Greek',                'ελληνικά',);

    protected static readonly _DEFAULT = EveryLanguages.AMERICAN_ENGLISH;

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: EveryLanguages;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #CURRENT_LANGUAGE: EveryLanguages;
    public static readonly UNKNOWN_STRING = '???';
    public static INTERNATIONALISATION_SET_CURRENT_LANGUAGE: | Dispatch<SetStateAction<PossibleInternationalAcronym_Project>> | null = null;
    protected static readonly _SPACE_EVEN_LANGUAGE_WITH_SPACE: SpaceParameterReceived = [true, true, false,];
    protected static readonly _SPACE_EVEN_LANGUAGE_WITHOUT_SPACE: SpaceParameterReceived = [false, true,];
    protected static readonly _SPACE_UNEVEN_LANGUAGE_WITH_SPACE: SpaceParameterReceived = [true, false,];

    readonly #isACompleteLanguage: boolean;

    #spaceParameter?: SpaceParameters;
    #hasSpace?: boolean;
    #isASpaceEvenLanguage?: boolean;
    #isASpaceEvenLanguageForThePointsAndSpace?: boolean;
    #isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace?: boolean;

    readonly #projectAcronym: PossibleAcronym;
    readonly #internationalAcronym: PossibleInternationalAcronym;
    readonly #englishName: PossibleEnglishName;
    readonly #originalName: PossibleOriginalName;
    readonly #differentWords: | PossibleDifferentWord | null;
    readonly #parent: | EveryLanguages | null;
    #children?: PossibleChildrenLanguages;

    #space?: PossibleSpaceCharacter;
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

    private constructor(isACompleteLanguage: boolean, projectAcronym: BasicAcronym, internationalAcronym: BasicAcronym, englishName: BasicEnglishName, originalName: BasicOriginalName,)
    private constructor(isACompleteLanguage: boolean, projectAcronym: AdditionalAcronym, internationalAcronym: AdditionalAcronym, englishName: AdditionalEnglishName, originalName: AdditionalOriginalName,)
    private constructor(isACompleteLanguage: boolean, projectAcronym: PossibleAcronym_Project, internationalAcronym: PossibleInternationalAcronym_Project, englishName: PossibleEnglishName_Project, originalName: PossibleOriginalName_Project,)
    private constructor(isACompleteLanguage: boolean, projectAcronym: PossibleAcronym_Project, internationalAcronym: PossibleInternationalAcronym_Project, englishName: PossibleEnglishName_Project, originalName: PossibleOriginalName_Project, differenceWords: PossibleDifferentWord, parent: EveryLanguages,)
    private constructor(isACompleteLanguage: boolean, projectAcronym: PossibleAcronym, internationalAcronym: PossibleInternationalAcronym, englishName: PossibleEnglishName, originalName: PossibleOriginalName, differenceWords: | PossibleDifferentWord | null = null, parent: | EveryLanguages | null = null,) {
        super();
        this.#isACompleteLanguage = isACompleteLanguage;
        this.#projectAcronym = projectAcronym;
        this.#internationalAcronym = internationalAcronym;
        this.#englishName = englishName;
        this.#originalName = originalName;
        this.#differentWords = differenceWords;
        this.#parent = parent;
    }

    //region -------------------- Getter methods --------------------

    public get isACompleteLanguage(): boolean {
        return this.#isACompleteLanguage;
    }

    //region -------------------- Space getter methods --------------------

    protected get _spaceParameters(): SpaceParameterReceived {
        return this.parent!._spaceParameters;
    }

    private get __spaceParameters(): SpaceParameters {
        if (this.#spaceParameter == null) {
            const spaceParameters = this._spaceParameters;
            if (spaceParameters.length === 3)
                this.#spaceParameter = spaceParameters;
            else
                this.#spaceParameter = [spaceParameters[0], spaceParameters[1], spaceParameters[1],];
        }
        return this.#spaceParameter;
    }

    public get hasSpace(): boolean {
        return this.#hasSpace ??= this.__spaceParameters[0];
    }

    public get isASpaceEvenLanguage(): boolean {
        return this.#isASpaceEvenLanguage ??= this.isASpaceEvenLanguageForThePointsAndSpace && this.isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace;
    }

    public get isASpaceEvenLanguageForThePointsAndSpace(): boolean {
        return this.#isASpaceEvenLanguageForThePointsAndSpace ??= this.__spaceParameters[1];
    }

    public get isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace(): boolean {
        return this.#isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace ??= this.__spaceParameters[2];
    }

    //endregion -------------------- Space getter methods --------------------

    public get projectAcronym(): PossibleAcronym {
        return this.#projectAcronym;
    }

    public get internationalAcronym(): PossibleInternationalAcronym {
        return this.#internationalAcronym;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName;
    }

    public get originalName(): PossibleOriginalName {
        return this.#originalName;
    }

    public get differentWords(): | PossibleDifferentWord | null {
        return this.#differentWords;
    }

    public get parent(): | EveryLanguages | null {
        return this.#parent;
    }

    public get children(): PossibleChildrenLanguages {
        return this.#children ??= EveryLanguages.values.filter(language => language.parent != null).filter(language => language.parent === this.parent) as unknown as PossibleChildrenLanguages;
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

    public get space(): PossibleSpaceCharacter {
        return this.#space ??= this.hasSpace ? ' ' : '';
    }

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

    public get colon(): PossibleColon {
        return this.points[3];
    }

    public get semicolon(): PossibleSemicolon {
        return this.points[4];
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

    protected abstract _get<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): T;
    protected abstract _get<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): PossibleLanguageValue<T>;
    protected abstract _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): PossibleLanguageValue<T>;

    public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
        return this._get(classWithEveryLanguages) ?? EveryLanguages.AMERICAN_ENGLISH.get(classWithEveryLanguages);
    }

    public original<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): | T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>
    public original<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): | PossibleLanguageValue<T> | PossibleAmericanOrEuropeanValue<T> | PossibleCanadianOrEuropeanValue<T> | PossibleChineseValue<T>
    public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): | PossibleLanguageValue<T> | PossibleAmericanOrEuropeanValue<T> | PossibleCanadianOrEuropeanValue<T> | PossibleChineseValue<T> {
        return this.parent?.original<T>(classWithEveryLanguages) ?? this.get(classWithEveryLanguages);
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
        this.INTERNATIONALISATION_SET_CURRENT_LANGUAGE?.(currentLanguage.internationalAcronym as PossibleInternationalAcronym_Project);
        return this;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<EveryLanguages> {
        return EveryLanguages;
    }

    public static get default(): EveryLanguages {
        return Enum.getNonNullDefaultOn(EveryLanguages);
    }

    public static set default(value: EveryLanguages | string | number,) {
        this.setDefault(value);
    }

    public static setDefault(value: | EveryLanguages | string | number,): typeof EveryLanguages {
        return Enum.setNonNullDefaultOn(EveryLanguages, value,);
    }


    public static getValue(value: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names>(name: N,): typeof EveryLanguages[N]
    public static getValue(nameOrAcronym: PossibleStringValue,): EveryLanguages
    public static getValue(nameOrAcronym: string,): | EveryLanguages | null
    public static getValue<I extends EveryLanguages = EveryLanguages, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EveryLanguages
    public static getValue(value: PossibleValue,): | EveryLanguages | null
    public static getValue(value: PossibleValue,) {
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

    public static get values(): EnumArray {
        return Enum.getValuesOn(EveryLanguages);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type SpaceParameterReceived = | [hasSpace: boolean, isSpaceEvenLanguage: boolean,] | readonly [hasSpace: boolean, isSpaceEvenLanguageExcludingPointsAndSpace: boolean, isSpaceEvenLanguagePointsAndSpace: boolean,];
type SpaceParameters = readonly [hasSpace: boolean, isSpaceEvenLanguageExcludingPointsAndSpace: boolean, isSpaceEvenLanguagePointsAndSpace: boolean,];
type PossibleChildrenLanguages = readonly [EveryLanguages, EveryLanguages,] | readonly [];
