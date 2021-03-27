export type PossibleLanguages = 'fr_CA' | 'fr_EU' | 'en_US' | 'en_EU' | 'sp' | 'jp';

export abstract class Languages {
    public static readonly CANADIAN_FRENCH = new class extends Languages {
    }('fr_CA');
    public static readonly EUROPEAN_FRENCH = new class extends Languages {
    }('fr_EU');
    public static readonly AMERICAN_ENGLISH = new class extends Languages {
    }('en_US');
    public static readonly EUROPEAN_ENGLISH = new class extends Languages {
    }('en_EU');
    public static readonly SPANISH = new class extends Languages {
    }('sp');
    public static readonly JAPANESE = new class extends Languages {
    }('jp');


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


    public static get currentLanguage(): Languages {
        return this.__CURRENT_LANGUAGE;
    }

    public static setCurrentLanguage(value: Languages | string) {
        let selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null)
            this.__CURRENT_LANGUAGE = selectedLanguage;
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
                this.CANADIAN_FRENCH, this.EUROPEAN_FRENCH,
                this.AMERICAN_ENGLISH, this.EUROPEAN_ENGLISH,
                this.SPANISH,
                this.JAPANESE,
            ]
            : this.__VALUES;
    }

}

Languages.setDefaultLanguage('en_US');