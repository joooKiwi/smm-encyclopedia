import i18n from 'i18next';

import type {ClassWithLanguages} from './ClassWithLanguages';

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

    public static readonly AMERICAN_ENGLISH =    new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.americanEnglish;
        }

    }('en_AM', 'en-US', 'English (America)',    'English (America)',);
    public static readonly EUROPEAN_ENGLISH =    new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanEnglish;
        }

    }('en_EU', 'en-EU', 'English (Europe)',     'English (Europe)',);
    public static readonly CANADIAN_FRENCH =     new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.canadianFrench;
        }

    }('fr_CA', 'fr-CA', 'French (Canada)',      'Français (Canada)',);
    public static readonly EUROPEAN_FRENCH =     new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanFrench;
        }

    }('fr_EU', 'fr-EU', 'French (Europe)',      'Français (Europe)',);
    public static readonly GERMAN =              new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.german;
        }

    }('de',    'de',    'German',               'Deutsche',);
    public static readonly AMERICAN_SPANISH =    new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.americanSpanish;
        }

    }('es_AM', 'es-US', 'Spanish (America)',    'Español (America)',);
    public static readonly EUROPEAN_SPANISH =    new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanSpanish;
        }

    }('es_EU', 'es-EU', 'Spanish (Europe)',     'Español (Europa)',);
    public static readonly ITALIAN =             new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.italian;
        }

    }('it',    'it',    'Italian',              'Italiano',);
    public static readonly DUTCH =               new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.dutch;
        }

    }('nl',    'nl',    'Dutch',                'Nederlands',);
    public static readonly AMERICAN_PORTUGUESE = new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.americanPortuguese;
        }

    }('pt_AM', 'pt-US', 'Portuguese (America)', 'Português (América)',);
    public static readonly EUROPEAN_PORTUGUESE = new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanPortuguese;
        }

    }('pt_EU', 'pt-EU', 'Portuguese (Europe)',  'Português (Europa)',);
    public static readonly RUSSIAN =             new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.russian;
        }

    }('ru',    'ru',    'Russian',              'русский',);
    public static readonly JAPANESE =            new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.japanese;
        }

    }('ja',    'ja',    'Japanese',             '日本語',);
    public static readonly CHINESE_TRADITIONAL = new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.traditionalChinese;
        }

    }('zh_T',  'zh',    'Traditional chinese',  '简体中文',);
    public static readonly CHINESE_SIMPLIFIED =  new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.simplifiedChinese;
        }

    }('zh_S',  'zh',    'Simplified chinese',   '繁體中文',);
    public static readonly KOREAN =              new class extends Languages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.korean;
        }

    }('ko',    'ko',    'Korean',               '한국어',);

    //endregion -------------------- enum instances --------------------

    static #VALUES?: readonly Languages[];
    //region -------------------- Attributes --------------------

    static #CURRENT_LANGUAGE: Languages;
    static #DEFAULT_LANGUAGE: Languages;

    readonly #projectAcronym;
    readonly #internationalAcronym;
    readonly #englishName;
    readonly #originalName;

    //endregion -------------------- Attributes --------------------

    private constructor(projectAcronym: PossibleLanguagesAcronym, internationalAcronym: PossibleLanguagesInternationalAcronym, englishName: PossibleLanguagesEnglishName, originalName: PossibleLanguagesOriginalName) {
        this.#projectAcronym = projectAcronym;
        this.#internationalAcronym = internationalAcronym;
        this.#englishName = englishName;
        this.#originalName = originalName;
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

    public static set currentLanguage(value: Languages | string) {
        let selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null)
            i18n.changeLanguage((this.#CURRENT_LANGUAGE = selectedLanguage.__setLanguageToHTML()).projectAcronym);
    }

    public static get defaultLanguage(): Languages {
        return this.#DEFAULT_LANGUAGE;
    }

    public static set defaultLanguage(value: Languages | PossibleLanguagesAcronym) {
        this.#DEFAULT_LANGUAGE = this.getValue(value);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public static getValue(value: PossibleValueToGetLanguage): Languages
    public static getValue(value: string): Languages | null
    public static getValue(value: Languages | string): Languages | null
    public static getValue(value: Languages | string): Languages | null {
        return typeof value === 'string'
            ? this.values.find(language => language.projectAcronym === value || language.englishName === value || language.originalName === value) ?? null
            : value;
    }

    public static get values(): readonly Languages[] {
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


    public static* [Symbol.iterator]() {
        for (const value of this.values)
            yield value;
    }

    //endregion -------------------- enum methods --------------------

}

Languages.defaultLanguage = Languages.defaultLanguage ?? 'en_AM';
Languages.currentLanguage = Languages.currentLanguage ?? 'en_AM';
