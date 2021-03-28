export type PossibleLanguagesAcronym =
    'ja'
    | 'en_US' | 'en_EU'
    | 'es_AM' | 'es_EU'
    | 'fr_CA' | 'fr_EU'
    | 'nl' | 'de' | 'it' | 'ru'
    | 'ko'
    | 'zh_T' | 'zh_S';
export type PossibleLanguagesEnglishName =
    'Japanese'
    | 'English (America)' | 'English (Europe)'
    | 'Spanish (America)' | 'Spanish (Europa)'
    | 'French (Canada)' | 'French (Europe)'
    | 'Dutch' | 'German' | 'Italian' | 'Russian'
    | 'Korean'
    | 'Chinese (Traditional)' | 'Chinese (Simplified)';
export type PossibleLanguagesOriginalName =
    '日本語'
    | 'English (America)' | 'English (Europe)'
    | 'Español (America)' | 'Español (Europe)'
    | 'Français (Canada)' | 'Français (Europe)'
    | 'Nederlands' | 'Deutsche' | 'Italiano' | 'русский'
    | '한국어'
    | '简体(中文)' | '中國(傳統的)';

export abstract class Languages {
    public static readonly JAPANESE = new class extends Languages {
    }('ja', 'Japanese', '日本語',);
    public static readonly AMERICAN_ENGLISH = new class extends Languages {
    }('en_US', 'English (America)', 'English (America)',);
    public static readonly EUROPEAN_ENGLISH = new class extends Languages {
    }('en_EU', 'English (Europe)', 'English (Europe)',);
    public static readonly AMERICAN_SPANISH = new class extends Languages {
    }('es_AM', 'Spanish (America)', 'Español (America)',);
    public static readonly EUROPEAN_SPANISH = new class extends Languages {
    }('es_EU', 'Spanish (Europe)', 'Español (Europa)',);
    public static readonly CANADIAN_FRENCH = new class extends Languages {
    }('fr_CA', 'French (Canada)', 'Français (Canada)',);
    public static readonly EUROPEAN_FRENCH = new class extends Languages {
    }('fr_EU', 'French (Europe)', 'Français (Europe)',);
    public static readonly DUTCH = new class extends Languages {
    }('nl', 'Dutch', 'Nederlands',);
    public static readonly GERMAN = new class extends Languages {
    }('de', 'German', 'Deutsche',);
    public static readonly ITALIAN = new class extends Languages {
    }('it', 'Italian', 'Italiano',);
    public static readonly RUSSIAN = new class extends Languages {
    }('ru', 'Russian', 'русский');
    public static readonly KOREAN = new class extends Languages {
    }('ko', 'Korean', '한국어',);
    public static readonly CHINESE_TRADITIONAL = new class extends Languages {
    }('zh_S', 'Chinese (Traditional)', '简体(中文)',);
    public static readonly CHINESE_SIMPLIFIED = new class extends Languages {
    }('zh_S', 'Chinese (Simplified)', '中國(傳統的)',);


    private static __VALUES: readonly Languages[];
    private static __CURRENT_LANGUAGE: Languages;
    private static __DEFAULT_LANGUAGE: PossibleLanguagesAcronym;

    readonly #acronym;
    readonly #englishName;
    readonly #originalName;

    private constructor(acronym: PossibleLanguagesAcronym, englishName: PossibleLanguagesEnglishName, originalName: PossibleLanguagesOriginalName) {
        this.#acronym = acronym;
        this.#englishName = englishName;
        this.#originalName = originalName;
    }


    public get acronym() {
        return this.#acronym;
    }

    public get englishName() {
        return this.#englishName;
    }

    public get originalName() {
        return this.#originalName;
    }

    private __setLanguageToHTML(): this {
        document.querySelectorAll('[lang]').forEach(element => element.setAttribute('lang', this.acronym))
        return this;
    }


    public static get currentLanguage(): Languages {
        return this.__CURRENT_LANGUAGE;
    }

    public static setCurrentLanguage(value: Languages | string): void {
        let selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null)
            this.__CURRENT_LANGUAGE = selectedLanguage.__setLanguageToHTML();
    }


    public static get defaultLanguage(): PossibleLanguagesAcronym {
        return this.__DEFAULT_LANGUAGE;
    }

    public static setDefaultLanguage(value: Languages | PossibleLanguagesAcronym): void {
        this.__DEFAULT_LANGUAGE = typeof value === 'string' ? value : value.acronym;
    }


    public static getValue(value: Languages | PossibleLanguagesAcronym | PossibleLanguagesEnglishName | PossibleLanguagesOriginalName): Languages
    public static getValue(value: string): Languages | null
    public static getValue(value: Languages | string): Languages | null
    public static getValue(value: Languages | string): Languages | null {
        return typeof value === 'string'
            ? this.values.find(language => language.acronym === value || language.englishName === value || language.originalName === value) || null
            : value;
    }


    public static get values(): readonly Languages[] {
        return this.__VALUES === undefined
            ? this.__VALUES = [
                this.JAPANESE,
                this.AMERICAN_ENGLISH, this.EUROPEAN_ENGLISH,
                this.AMERICAN_SPANISH, this.EUROPEAN_SPANISH,
                this.CANADIAN_FRENCH, this.EUROPEAN_FRENCH,
                this.DUTCH,
                this.GERMAN,
                this.ITALIAN,
                this.RUSSIAN,
                this.KOREAN,
                this.CHINESE_TRADITIONAL, this.CHINESE_SIMPLIFIED,
            ]
            : this.__VALUES;
    }

}

Languages.setDefaultLanguage('en_US');

export function __(key: string, language: PossibleLanguagesAcronym = Languages.currentLanguage.acronym): string {
    //TODO add file searcher on the json files for this method
    return key;
}