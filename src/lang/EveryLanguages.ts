import type {ClassWithEveryLanguages}                                                                                                                                                    from './ClassWithEveryLanguages';
import type {AmericanOrEuropeanOriginal}                                                                                                                                                 from './name/containers/AmericanAndEuropeanLanguage';
import type {CanadianOrEuropeanOriginal}                                                                                                                                                 from './name/containers/CanadianAndEuropeanLanguage';
import type {ChineseOriginal}                                                                                                                                                            from './name/containers/ChineseLanguage';
import type {PossibleLanguagesEnglishName as PossibleLanguagesEnglishNameLanguages, PossibleLanguagesOriginalName as PossibleLanguagesOriginalNameLanguages, PossibleValueToGetLanguage} from './Languages';

import {Languages} from './Languages';

//region -------------------- Language text --------------------

type BasicOriginalName = | 'English' | 'Français' | 'Español' | 'Português' | '中国人';
type BasicEnglishName = | 'English' | 'French' | 'Spanish' | 'Portuguese' | 'Chinese';
export type PossibleLanguagesEnglishName = | BasicEnglishName | PossibleLanguagesEnglishNameLanguages;
export type PossibleLanguagesOriginalName = | BasicOriginalName | PossibleLanguagesOriginalNameLanguages;

//endregion -------------------- Language text --------------------

/**
 * @enum
 */
export class EveryLanguages {

    //region -------------------- enum instances --------------------

    public static readonly ENGLISH =             new class extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage || EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages) {
            return classWithEveryLanguages.english;
        }

        public original(classWithEveryLanguages: ClassWithEveryLanguages): AmericanOrEuropeanOriginal {
            return classWithEveryLanguages.originalEnglish;
        }

    }('English', 'English',);
    public static readonly AMERICAN_ENGLISH =    new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }
    }(Languages.AMERICAN_ENGLISH, EveryLanguages.ENGLISH,);
    public static readonly EUROPEAN_ENGLISH =    new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage;
        }
    }(Languages.EUROPEAN_ENGLISH, EveryLanguages.ENGLISH,);
    public static readonly FRENCH =              new class extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage || EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages) {
            return classWithEveryLanguages.french;
        }

        public original(classWithEveryLanguages: ClassWithEveryLanguages): AmericanOrEuropeanOriginal {
            return classWithEveryLanguages.originalFrench;
        }

    }('French', 'Français',);
    public static readonly CANADIAN_FRENCH =     new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage;
        }
    }(Languages.CANADIAN_FRENCH, EveryLanguages.FRENCH,);
    public static readonly EUROPEAN_FRENCH =     new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage;
        }
    }(Languages.EUROPEAN_FRENCH, EveryLanguages.FRENCH,);
    public static readonly GERMAN =              new EveryLanguages(Languages.GERMAN,);
    public static readonly SPANISH =             new class extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage || EveryLanguages.EUROPEAN_SPANISH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages) {
            return classWithEveryLanguages.spanish;
        }

        public original(classWithEveryLanguages: ClassWithEveryLanguages): ChineseOriginal {
            return classWithEveryLanguages.originalSpanish;
        }

    }('Spanish', 'Español',);
    public static readonly AMERICAN_SPANISH =    new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }
    }(Languages.AMERICAN_SPANISH, EveryLanguages.SPANISH,);
    public static readonly EUROPEAN_SPANISH =    new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }
    }(Languages.EUROPEAN_SPANISH, EveryLanguages.SPANISH,);
    public static readonly ITALIAN =             new EveryLanguages(Languages.ITALIAN,);
    public static readonly DUTCH =               new EveryLanguages(Languages.DUTCH,);
    public static readonly PORTUGUESE =          new class extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage || EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages) {
            return classWithEveryLanguages.portuguese;
        }

    }('Portuguese', 'Português',);
    public static readonly AMERICAN_PORTUGUESE = new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }
    }(Languages.AMERICAN_PORTUGUESE, EveryLanguages.PORTUGUESE,);
    public static readonly EUROPEAN_PORTUGUESE = new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage;
        }
    }(Languages.EUROPEAN_PORTUGUESE, EveryLanguages.PORTUGUESE,);
    public static readonly RUSSIAN =             new EveryLanguages(Languages.RUSSIAN,);
    public static readonly JAPANESE =            new EveryLanguages(Languages.JAPANESE,);
    public static readonly CHINESE =             new class extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.CHINESE_SIMPLIFIED.isCurrentLanguage || EveryLanguages.CHINESE_TRADITIONAL.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages) {
            return classWithEveryLanguages.chinese;
        }

    }('Chinese', '中国人');
    public static readonly CHINESE_SIMPLIFIED =  new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CHINESE_TRADITIONAL.isCurrentLanguage;
        }
    }(Languages.CHINESE_SIMPLIFIED, EveryLanguages.CHINESE,);
    public static readonly CHINESE_TRADITIONAL = new class extends EveryLanguages {
        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CHINESE_SIMPLIFIED.isCurrentLanguage;
        }
    }(Languages.CHINESE_TRADITIONAL, EveryLanguages.CHINESE,);
    public static readonly KOREAN =              new EveryLanguages(Languages.KOREAN,);

    //endregion -------------------- enum instances --------------------

    static #VALUES: readonly EveryLanguages[];
    //region -------------------- Attributes --------------------
    readonly #englishName: PossibleLanguagesEnglishName;
    readonly #originalName: PossibleLanguagesOriginalName;
    readonly #parent: null | EveryLanguages;
    readonly #reference: null | Languages;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: BasicEnglishName, originalName: BasicOriginalName,)
    private constructor(reference: Languages,)
    private constructor(reference: Languages, parent: EveryLanguages,)
    private constructor(referenceOrEnglishName: Languages | BasicEnglishName, parentOrOriginalName?: EveryLanguages | BasicOriginalName,) {

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


    //region -------------------- Methods --------------------

    //region -------------------- Getter --------------------

    public get englishName(): PossibleLanguagesEnglishName {
        return this.#englishName;
    }

    public get originalName(): PossibleLanguagesOriginalName {
        return this.#originalName;
    }

    public get parent(): null | EveryLanguages {
        return this.#parent;
    }

    public get reference(): null | Languages {
        return this.#reference;
    }

    public get isCurrentLanguage(): boolean {
        return this.reference !== null && this === EveryLanguages.getValue(EveryLanguages.currentLanguage);
    }

    public get isCurrentLanguageOrAssociatedWithIt(): boolean {
        return this.isCurrentLanguage;
    }

    //endregion -------------------- Getter --------------------

    public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
        return this.reference!.get(classWithEveryLanguages);
    }

    public original(classWithEveryLanguages: ClassWithEveryLanguages): string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal {
        return this.parent?.original(classWithEveryLanguages) ?? this.get(classWithEveryLanguages);
    }


    public static get currentLanguage(): EveryLanguages {
        return EveryLanguages.getValue(Languages.currentLanguage);
    }

    public static set currentLanguage(value: EveryLanguages) {
        this.setCurrentLanguage(value);
    }

    public static setCurrentLanguage(value: EveryLanguages | Languages | string): void {
        const selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null && selectedLanguage.reference !== null)
            Languages.currentLanguage = selectedLanguage.reference;
    }

    public static get defaultLanguage(): EveryLanguages {
        return EveryLanguages.getValue(Languages.defaultLanguage);
    }

    public static set defaultLanguage(value: EveryLanguages) {
        this.setDefaultLanguage(value);
    }

    public static setDefaultLanguage(value: EveryLanguages | Languages | string): void {
        const selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null && selectedLanguage.reference !== null)
            Languages.defaultLanguage = selectedLanguage.reference;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public static getValue(value: EveryLanguages | PossibleValueToGetLanguage): EveryLanguages
    public static getValue(value: string): EveryLanguages | null
    public static getValue(value: Languages | EveryLanguages | string): EveryLanguages | null
    public static getValue(value: Languages | EveryLanguages | string): EveryLanguages | null {
        return typeof value === 'string'
            ? this.values.find(language => language.englishName === value || language.originalName === value) ?? this.getValue(Languages.getValue(value) ?? '')
            : value instanceof Languages ?
                this.values.find(language => language.reference === value) ?? null
                : value;
    }

    public static get values(): readonly EveryLanguages[] {
        return this.#VALUES ?? (this.#VALUES = [
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

    public static* [Symbol.iterator]() {
        for (const value of this.values)
            yield value;
    }

    //endregion -------------------- enum methods --------------------

}
