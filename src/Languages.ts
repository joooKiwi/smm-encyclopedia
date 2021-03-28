export type PossibleLanguages = 'fr_CA' | 'fr_EU'
    | 'en_US' | 'en_EU'
    | 'es_AM' | 'es_EU'
    | 'nl' | 'de'| 'it' | 'ru'
    | 'ja' | 'ko'
    | 'zh_T' | 'zh_S';

export abstract class Languages {
    public static readonly JAPANESE = new class extends Languages {
    }('ja');
    public static readonly AMERICAN_ENGLISH = new class extends Languages {
    }('en_US');
    public static readonly EUROPEAN_ENGLISH = new class extends Languages {
    }('en_EU');
    public static readonly AMERICAN_SPANISH = new class extends Languages {
    }('es_AM');
    public static readonly EUROPEAN_SPANISH = new class extends Languages {
    }('es_EU');
    public static readonly CANADIAN_FRENCH = new class extends Languages {
    }('fr_CA');
    public static readonly EUROPEAN_FRENCH = new class extends Languages {
    }('fr_EU');
    public static readonly DUTCH = new class extends Languages {
    }('nl');
    public static readonly GERMAN = new class extends Languages {
    }('de');
    public static readonly ITALIAN = new class extends Languages {
    }('it');
    public static readonly RUSSIAN = new class extends Languages {
    }('ru');
    public static readonly KOREAN = new class extends Languages {
    }('ko');
    public static readonly CHINESE_TRADITIONAL = new class extends Languages {
    }('zh_S');
    public static readonly CHINESE_SIMPLIFIED = new class extends Languages {
    }('zh_S');


    private static __VALUES: readonly Languages[];
    private static __CURRENT_LANGUAGE: Languages;
    private static __DEFAULT_LANGUAGE: PossibleLanguages;

    readonly #_acronym

    private constructor(acronym: PossibleLanguages) {
        this.#_acronym = acronym;
    }


    public get acronym() {
        return this.#_acronym;
    }

    private __setLanguageToHTML(): this {
        document.querySelectorAll('[lang]').forEach(element => element.setAttribute('lang', this.acronym))
        return this;
    }


    public static get currentLanguage(): Languages {
        return this.__CURRENT_LANGUAGE;
    }

    public static setCurrentLanguage(value: Languages | string) {
        let selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null)
            this.__CURRENT_LANGUAGE = selectedLanguage.__setLanguageToHTML();
    }


    public static get defaultLanguage(): PossibleLanguages {
        return this.__DEFAULT_LANGUAGE;
    }

    public static setDefaultLanguage(value: Languages | PossibleLanguages) {
        this.__DEFAULT_LANGUAGE = typeof value === 'string' ? value : value.acronym;
    }


    public static getValue(value: Languages | PossibleLanguages): Languages
    public static getValue(value: string): Languages | null
    public static getValue(value: Languages | string): Languages | null
    public static getValue(value: Languages | string): Languages | null {
        return typeof value === 'string'
            ? this.values.find(language => language.acronym === value) || null
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

export function __(key: string, language: PossibleLanguages = Languages.currentLanguage.acronym): string {
    //TODO add file searcher on the json files for this method
    return key;
}