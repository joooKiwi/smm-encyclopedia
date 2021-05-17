import {
    Languages,
    PossibleLanguagesAcronym,
    PossibleLanguagesEnglishName as PossibleLanguagesEnglishNameLanguages,
    PossibleLanguagesOriginalName as PossibleLanguagesOriginalNameLanguages
}                                   from '../../lang/Languages';
import {SMM2Name}                   from './SMM2Name';
import {CanadianOrEuropeanOriginal} from './CanadianAndEuropeanLanguage';
import {AmericanOrEuropeanOriginal} from './AmericanAndEuropeanLanguage';
import {ChineseOriginal}            from './ChineseLanguage';


type BasicOriginalName = | 'English' | 'Français' | 'Español' | 'Português' | '中国人';
type BasicEnglishName = | 'English' | 'French' | 'Spanish' | 'Portuguese' | 'Chinese';
export type PossibleLanguagesEnglishName = | BasicEnglishName | PossibleLanguagesEnglishNameLanguages;
export type PossibleLanguagesOriginalName = | BasicOriginalName | PossibleLanguagesOriginalNameLanguages;

export class SMM2Languages {
    public static readonly ENGLISH = new class extends SMM2Languages {

        public get isCurrentLanguage(): boolean {
            return SMM2Languages.AMERICAN_ENGLISH.isCurrentLanguage || SMM2Languages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }

        public get(name: SMM2Name) {
            return name.english;
        }

        public original(name: SMM2Name): AmericanOrEuropeanOriginal {
            return name.originalEnglish;
        }

    }('English', 'English',);
    public static readonly AMERICAN_ENGLISH = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }
    }(Languages.AMERICAN_ENGLISH, SMM2Languages.ENGLISH);
    public static readonly EUROPEAN_ENGLISH = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.AMERICAN_ENGLISH.isCurrentLanguage;
        }
    }(Languages.EUROPEAN_ENGLISH, SMM2Languages.ENGLISH);
    public static readonly FRENCH = new class extends SMM2Languages {

        public get isCurrentLanguage(): boolean {
            return SMM2Languages.CANADIAN_FRENCH.isCurrentLanguage || SMM2Languages.EUROPEAN_FRENCH.isCurrentLanguage;
        }

        public get(name: SMM2Name) {
            return name.french;
        }

       public original(name: SMM2Name): CanadianOrEuropeanOriginal  {
            return name.originalFrench;
        }

    }('French', 'Français',);
    public static readonly CANADIAN_FRENCH = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.EUROPEAN_FRENCH.isCurrentLanguage;
        }
    }(Languages.CANADIAN_FRENCH, SMM2Languages.FRENCH,);
    public static readonly EUROPEAN_FRENCH = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.CANADIAN_FRENCH.isCurrentLanguage;
        }
    }(Languages.EUROPEAN_FRENCH, SMM2Languages.FRENCH,);
    public static readonly GERMAN = new SMM2Languages(Languages.GERMAN);
    public static readonly SPANISH = new class extends SMM2Languages {

        public get isCurrentLanguage(): boolean {
            return SMM2Languages.AMERICAN_SPANISH.isCurrentLanguage || SMM2Languages.EUROPEAN_SPANISH.isCurrentLanguage;
        }

        public get(name: SMM2Name) {
            return name.spanish;
        }

        public original(name: SMM2Name): AmericanOrEuropeanOriginal {
            return name.originalSpanish;
        }

    }('Spanish', 'Español',);
    public static readonly AMERICAN_SPANISH = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.AMERICAN_SPANISH.isCurrentLanguage;
        }
    }(Languages.AMERICAN_SPANISH, SMM2Languages.SPANISH,);
    public static readonly EUROPEAN_SPANISH = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.AMERICAN_SPANISH.isCurrentLanguage;
        }
    }(Languages.EUROPEAN_SPANISH, SMM2Languages.SPANISH,);
    public static readonly ITALIAN = new SMM2Languages(Languages.ITALIAN);
    public static readonly DUTCH = new SMM2Languages(Languages.DUTCH);
    public static readonly PORTUGUESE = new class extends SMM2Languages {

        public get isCurrentLanguage(): boolean {
            return SMM2Languages.AMERICAN_PORTUGUESE.isCurrentLanguage || SMM2Languages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

        public get(name: SMM2Name) {
            return name.portuguese;
        }

        public original(name: SMM2Name): AmericanOrEuropeanOriginal {
            return name.originalPortuguese;
        }

    }('Portuguese', 'Português',);
    public static readonly AMERICAN_PORTUGUESE = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }
    }(Languages.AMERICAN_PORTUGUESE, SMM2Languages.PORTUGUESE,);
    public static readonly EUROPEAN_PORTUGUESE = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.AMERICAN_PORTUGUESE.isCurrentLanguage;
        }
    }(Languages.EUROPEAN_PORTUGUESE, SMM2Languages.PORTUGUESE,);
    public static readonly RUSSIAN = new SMM2Languages(Languages.RUSSIAN);
    public static readonly JAPANESE = new SMM2Languages(Languages.JAPANESE);
    public static readonly CHINESE = new class extends SMM2Languages {

        public get isCurrentLanguage(): boolean {
            return SMM2Languages.CHINESE_SIMPLIFIED.isCurrentLanguage || SMM2Languages.CHINESE_TRADITIONAL.isCurrentLanguage;
        }

        public get(name: SMM2Name) {
            return name.chinese;
        }

        public original(name: SMM2Name): ChineseOriginal {
            return name.originalChinese;
        }

    }('Chinese', '中国人');
    public static readonly CHINESE_SIMPLIFIED = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.CHINESE_TRADITIONAL.isCurrentLanguage;
        }
    }(Languages.CHINESE_SIMPLIFIED, SMM2Languages.CHINESE,);
    public static readonly CHINESE_TRADITIONAL = new class extends SMM2Languages {
        get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && SMM2Languages.CHINESE_SIMPLIFIED.isCurrentLanguage;
        }
    }(Languages.CHINESE_TRADITIONAL, SMM2Languages.CHINESE,);
    public static readonly KOREAN = new SMM2Languages(Languages.KOREAN);


    private static __VALUES: readonly SMM2Languages[];
    readonly #englishName: PossibleLanguagesEnglishName;
    readonly #originalName: PossibleLanguagesOriginalName;
    readonly #parent: null | SMM2Languages;
    readonly #reference: null | Languages;

    private constructor(englishName: BasicEnglishName, originalName: BasicOriginalName)
    private constructor(reference: Languages,)
    private constructor(reference: Languages, parent: SMM2Languages,)
    private constructor(referenceOrEnglishName: Languages | BasicEnglishName, parentOrOriginalName?: SMM2Languages | BasicOriginalName,) {

        if (typeof referenceOrEnglishName === 'string') {
            this.#englishName = referenceOrEnglishName;
            this.#reference = null;
        } else {
            this.#englishName = referenceOrEnglishName.englishName;
            this.#reference = referenceOrEnglishName;
        }
        if (typeof parentOrOriginalName === 'string') {
            this.#originalName = parentOrOriginalName;
            this.#parent = null;
        } else {
            this.#originalName = this.reference!.originalName;
            this.#parent = parentOrOriginalName ?? null;
        }

    }


    public get englishName(): PossibleLanguagesEnglishName {
        return this.#englishName;
    }

    public get originalName(): PossibleLanguagesOriginalName {
        return this.#originalName;
    }

    public get parent(): null | SMM2Languages {
        return this.#parent;
    }

    public get reference(): null | Languages {
        return this.#reference;
    }

    public get isCurrentLanguage(): boolean {
        return this.reference !== null && this === SMM2Languages.getValue(SMM2Languages.currentLanguage);
    }

    public get isCurrentLanguageOrAssociatedWithIt(): boolean {
        return this.isCurrentLanguage;
    }

    public get(name: SMM2Name): string {
        return this.reference!.get(name);
    }

    public original(name: SMM2Name): string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal {
        return this.parent?.original(name) ?? this.get(name);
    }


    public static get currentLanguage(): SMM2Languages {
        return SMM2Languages.getValue(Languages.currentLanguage);
    }

    public static set currentLanguage(value: SMM2Languages) {
        this.setCurrentLanguage(value);
    }

    public static setCurrentLanguage(value: SMM2Languages | Languages | string): void {
        const selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null && selectedLanguage.reference !== null)
            Languages.setCurrentLanguage(selectedLanguage.reference);
    }

    public static get defaultLanguage(): SMM2Languages {
        return SMM2Languages.getValue(Languages.defaultLanguage);
    }

    public static set defaultLanguage(value: SMM2Languages) {
        this.setDefaultLanguage(value);
    }

    public static setDefaultLanguage(value: SMM2Languages | Languages | string): void {
        const selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null && selectedLanguage.reference !== null)
            Languages.setDefaultLanguage(selectedLanguage.reference);
    }

    public static getValue(value: Languages | SMM2Languages | PossibleLanguagesAcronym | PossibleLanguagesEnglishName | PossibleLanguagesOriginalName): SMM2Languages
    public static getValue(value: string): SMM2Languages | null
    public static getValue(value: Languages | SMM2Languages | string): SMM2Languages | null
    public static getValue(value: Languages | SMM2Languages | string): SMM2Languages | null {
        return typeof value === 'string'
            ? this.values.find(smm2Language => smm2Language.englishName === value || smm2Language.originalName === value) ?? this.getValue(Languages.getValue(value) ?? '')
            : value instanceof Languages ?
                this.values.find(smm2Language => smm2Language.reference === value) ?? null
                : value;
    }

    public static get values(): readonly SMM2Languages[] {
        return this.__VALUES ?? (this.__VALUES = [
            this.ENGLISH, this.AMERICAN_ENGLISH, this.EUROPEAN_ENGLISH,
            this.FRENCH, this.CANADIAN_FRENCH, this.EUROPEAN_FRENCH,
            this.GERMAN,
            this.SPANISH, this.AMERICAN_SPANISH, this.EUROPEAN_SPANISH,
            this.ITALIAN,
            this.DUTCH,
            this.PORTUGUESE, this.AMERICAN_PORTUGUESE, this.EUROPEAN_PORTUGUESE,
            this.RUSSIAN,
            this.JAPANESE,
            this.CHINESE, this.CHINESE_TRADITIONAL, this.CHINESE_SIMPLIFIED,
            this.KOREAN,
        ]);
    }

}