import i18n from 'i18next';

import type {ClassWithLanguages} from './ClassWithLanguages';
import type {SimpleEnum}         from '../util/enum/EnumTypes';

//region -------------------- Languages types --------------------
//region -------------------- Languages text --------------------

export type PossibleLanguagesAcronym =
    | 'en_AM' | 'en_EU'
    | 'fr_CA' | 'fr_EU'
    | 'de'
    | 'es_AM' | 'es_EU'
    | 'it' | 'nl'
    | 'pt_AM' | 'pt_EU'
    | 'ru' | 'ja'
    | 'zh_T' | 'zh_S'
    | 'ko';

export type PossibleLanguagesInternationalAcronym =
    | 'en-US' | 'en-EU'
    | 'fr-CA' | 'fr-EU'
    | 'de'
    | 'es-US' | 'es-EU'
    | 'it' | 'nl'
    | 'pt-US' | 'pt-EU'
    | 'ru' | 'ja'
    | 'zh'
    | 'ko';
export type PossibleLanguagesEnglishName =
    | `English (${'America' | 'Europe'})`
    | `French (${'Canada' | 'Europe'})`
    | 'German'
    | `Spanish (${'America' | 'Europe'})`
    | 'Dutch' | 'Italian'
    | `Portuguese (${'America' | 'Europe'})`
    | 'Russian' | 'Japanese'
    | `${'Traditional' | 'Simplified'} chinese`
    | 'Korean';
export type PossibleLanguagesOriginalName =
    | `English (${'America' | 'Europe'})`
    | `Français (${'Canada' | 'Europe'})`
    | 'Deutsche'
    | `Español (${'America' | 'Europa'})`
    | `Português (${'América' | 'Europa'})`//Canadá
    | 'Nederlands' | 'Italiano'
    | 'русский' | '日本語'
    | '简体中文' | '繁體中文'
    | '한국어';

//endregion -------------------- Languages text --------------------

export type PossibleValueToGetLanguage = Languages | PossibleLanguagesAcronym | PossibleLanguagesEnglishName | PossibleLanguagesOriginalName;

//endregion -------------------- Languages types --------------------
//region -------------------- Enum types --------------------

export type LanguagesOrdinals = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    | 11 | 12 | 13 | 14 | 15;
export type LanguagesNames = | `${| 'AMERICAN' | 'EUROPEAN'}_${| 'ENGLISH' | 'SPANISH' | 'PORTUGUESE'}`
    | `${| 'CANADIAN' | 'EUROPEAN'}_FRENCH`
    | 'GERMAN' | 'ITALIAN' | 'DUTCH' | 'RUSSIAN' | 'JAPANESE' | 'KOREAN'
    | `CHINESE_${| 'TRADITIONAL' | 'SIMPLIFIED'}`;
export type SimpleLanguages<T = Languages, > = SimpleEnum<LanguagesNames, T>;
export type LanguagesArray<T = Languages, > = readonly [
    SimpleLanguages<T>['AMERICAN_ENGLISH'], SimpleLanguages<T>['EUROPEAN_ENGLISH'],
    SimpleLanguages<T>['CANADIAN_FRENCH'], SimpleLanguages<T>['EUROPEAN_FRENCH'],
    SimpleLanguages<T>['GERMAN'],
    SimpleLanguages<T>['AMERICAN_SPANISH'], SimpleLanguages<T>['EUROPEAN_SPANISH'],
    SimpleLanguages<T>['ITALIAN'],
    SimpleLanguages<T>['DUTCH'],
    SimpleLanguages<T>['AMERICAN_PORTUGUESE'], SimpleLanguages<T>['EUROPEAN_PORTUGUESE'],
    SimpleLanguages<T>['RUSSIAN'],
    SimpleLanguages<T>['JAPANESE'],
    SimpleLanguages<T>['CHINESE_TRADITIONAL'], SimpleLanguages<T>['CHINESE_SIMPLIFIED'],
    SimpleLanguages<T>['KOREAN'],
];

//endregion -------------------- Enum types --------------------

/**
 * <p>
 *     An enum class containing every languages in the project.
 *     The languages used are only those direct languages and not a basic language.
 * </p>
 *
 * <p>
 *     The other utility class is the getter and setter from a {@link ClassWithLanguages}
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
 *     <li>zh_S  - Simplified Chinese</li>
 *     <li>zh_T  - Traditional Chinese</li>
 *     <li>ko    - Korean</li>
 * </ol>
 *
 * @see https://en.wikipedia.org/wiki/Russian_alphabet Russian alphabet
 * @enum
 */
export abstract class Languages {

    //region -------------------- enum instances --------------------

    public static readonly AMERICAN_ENGLISH =    new class Languages_AmericanEnglish extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.americanEnglish;
        }

    }   ('en_AM', 'en-US', 'English (America)',    'English (America)',);
    public static readonly EUROPEAN_ENGLISH =    new class Languages_EuropeanEnglish extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanEnglish;
        }

    }   ('en_EU', 'en-EU', 'English (Europe)',     'English (Europe)',);
    public static readonly CANADIAN_FRENCH =     new class Languages_CanadianFrench extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.canadianFrench;
        }

    }    ('fr_CA', 'fr-CA', 'French (Canada)',      'Français (Canada)',);
    public static readonly EUROPEAN_FRENCH =     new class Languages_EuropeanFrench extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanFrench;
        }

    }    ('fr_EU', 'fr-EU', 'French (Europe)',      'Français (Europe)',);
    public static readonly GERMAN =              new class Languages_German extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.german;
        }

    }            ('de',    'de',    'German',               'Deutsche',);
    public static readonly AMERICAN_SPANISH =    new class Languages_AmericanSpanish extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.americanSpanish;
        }

    }   ('es_AM', 'es-US', 'Spanish (America)',    'Español (America)',);
    public static readonly EUROPEAN_SPANISH =    new class Languages_EuropeanSpanish extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanSpanish;
        }

    }   ('es_EU', 'es-EU', 'Spanish (Europe)',     'Español (Europa)',);
    public static readonly ITALIAN =             new class Languages_Italian extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.italian;
        }

    }           ('it',    'it',    'Italian',              'Italiano',);
    public static readonly DUTCH =               new class Languages_Dutch extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.dutch;
        }

    }             ('nl',    'nl',    'Dutch',                'Nederlands',);
    public static readonly AMERICAN_PORTUGUESE = new class Languages_AmericanPortuguese extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.americanPortuguese;
        }

    }('pt_AM', 'pt-US', 'Portuguese (America)', 'Português (América)',);
    public static readonly EUROPEAN_PORTUGUESE = new class Languages_EuropeanPortuguese extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanPortuguese;
        }

    }('pt_EU', 'pt-EU', 'Portuguese (Europe)',  'Português (Europa)',);
    public static readonly RUSSIAN =             new class Languages_Russian extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.russian;
        }

    }           ('ru',    'ru',    'Russian',              'русский',);
    public static readonly JAPANESE =            new class Languages_Japanese extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.japanese;
        }

    }          ('ja',    'ja',    'Japanese',             '日本語',);
    public static readonly CHINESE_TRADITIONAL = new class Languages_TraditionalChinese extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.traditionalChinese;
        }

    }('zh_T',  'zh',    'Traditional chinese',  '简体中文',);
    public static readonly CHINESE_SIMPLIFIED =  new class Languages_SimplifiedChinese extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.simplifiedChinese;
        }

    } ('zh_S',  'zh',    'Simplified chinese',   '繁體中文',);
    public static readonly KOREAN =              new class Languages_Korean extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.korean;
        }

    }            ('ko',    'ko',    'Korean',               '한국어',);

    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: LanguagesArray;
    static #DEFAULT: Languages;
    static #LAST_ORDINAL: LanguagesOrdinals = 0;
    readonly #ordinal: LanguagesOrdinals;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #CURRENT_LANGUAGE: Languages;

    readonly #projectAcronym;
    readonly #internationalAcronym;
    readonly #englishName;
    readonly #originalName;

    //endregion -------------------- Attributes --------------------

    protected constructor(language: Languages,)
    // @ts-ignore
    private constructor(projectAcronym: PossibleLanguagesAcronym, internationalAcronym: PossibleLanguagesInternationalAcronym, englishName: PossibleLanguagesEnglishName, originalName: PossibleLanguagesOriginalName)
    protected constructor(projectAcronymOrLanguage: PossibleLanguagesAcronym | Languages, internationalAcronym?: PossibleLanguagesInternationalAcronym, englishName?: PossibleLanguagesEnglishName, originalName?: PossibleLanguagesOriginalName) {
        this.#ordinal = Languages.#LAST_ORDINAL++ as LanguagesOrdinals;
        if (projectAcronymOrLanguage instanceof Languages) {
            this.#projectAcronym = projectAcronymOrLanguage.projectAcronym;
            this.#internationalAcronym = projectAcronymOrLanguage.internationalAcronym;
            this.#englishName = projectAcronymOrLanguage.englishName;
            this.#originalName = projectAcronymOrLanguage.originalName;
        } else {
            this.#projectAcronym = projectAcronymOrLanguage;
            this.#internationalAcronym = internationalAcronym!;
            this.#englishName = englishName!;
            this.#originalName = originalName!;
        }
    }

    //region -------------------- Methods --------------------

    public get projectAcronym(): PossibleLanguagesAcronym {
        return this.#projectAcronym;
    }

    public get internationalAcronym(): PossibleLanguagesInternationalAcronym {
        return this.#internationalAcronym;
    }

    public get englishName(): PossibleLanguagesEnglishName {
        return this.#englishName;
    }

    public get originalName(): PossibleLanguagesOriginalName {
        return this.#originalName;
    }

    public abstract get(classWithLanguages: ClassWithLanguages): string;

    private __setLanguageToHTML(): this {
        document.querySelectorAll('[lang]').forEach(element => element.setAttribute('lang', this.projectAcronym));
        return this;
    }


    public static get currentLanguage(): Languages {
        return this.#CURRENT_LANGUAGE;
    }

    public static set currentLanguage(value: Languages | string,) {
        let selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null)
            i18n.changeLanguage((this.#CURRENT_LANGUAGE = selectedLanguage.__setLanguageToHTML()).projectAcronym);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public get ordinal(): LanguagesOrdinals {
        return this.#ordinal;
    }

    public static get default(): Languages {
        return this.#DEFAULT;
    }

    public static set default(value: Languages | PossibleLanguagesAcronym,) {
        this.#DEFAULT = this.getValue(value);
    }

    public static getValue(value: PossibleValueToGetLanguage): Languages
    public static getValue(value: string): Languages | null
    public static getValue(value: Languages | string): Languages | null
    public static getValue(value: Languages | string): Languages | null {
        return typeof value === 'string'
            ? this.values.find(language => language.projectAcronym === value || language.englishName === value || language.originalName === value) ?? null
            : value;
    }

    public static get values(): LanguagesArray {
        return this.#VALUES ?? (this.#VALUES = [
            this.AMERICAN_ENGLISH, this.EUROPEAN_ENGLISH,
            this.CANADIAN_FRENCH, this.EUROPEAN_FRENCH,
            this.GERMAN,
            this.AMERICAN_SPANISH, this.EUROPEAN_SPANISH,
            this.ITALIAN,
            this.DUTCH,
            this.AMERICAN_PORTUGUESE, this.EUROPEAN_PORTUGUESE,
            this.RUSSIAN,
            this.JAPANESE,
            this.CHINESE_TRADITIONAL, this.CHINESE_SIMPLIFIED,
            this.KOREAN,
        ]);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- enum methods --------------------

}

Languages.default = Languages.default ?? 'en_AM';
Languages.currentLanguage = Languages.currentLanguage ?? 'en_AM';
