import type {ClassWithEveryLanguages}                                                                                                                                                                                       from './ClassWithEveryLanguages';
import type {AmericanOrEuropeanOriginal}                                                                                                                                                                                    from './name/containers/AmericanAndEuropeanLanguage';
import type {CanadianOrEuropeanOriginal}                                                                                                                                                                                    from './name/containers/CanadianAndEuropeanLanguage';
import type {ChineseOriginal}                                                                                                                                                                                               from './name/containers/ChineseLanguage';
import type {LanguagesNames, LanguagesOrdinals, PossibleLanguagesEnglishName as PossibleLanguagesEnglishNameLanguages, PossibleLanguagesOriginalName as PossibleLanguagesOriginalNameLanguages, PossibleValueToGetLanguage} from './Languages';
import type {SimpleEnum}                                                                                                                                                                                                    from '../util/enum/EnumTypes';

import {Languages} from './Languages';

//region -------------------- Language text --------------------

type BasicOriginalName = | 'English' | 'Français' | 'Español' | 'Português' | '中国人';
type BasicEnglishName = | 'English' | 'French' | 'Spanish' | 'Portuguese' | 'Chinese';
export type PossibleLanguagesEnglishName = | BasicEnglishName | PossibleLanguagesEnglishNameLanguages;
export type PossibleLanguagesOriginalName = | BasicOriginalName | PossibleLanguagesOriginalNameLanguages;

//endregion -------------------- Language text --------------------
//region -------------------- Enum types --------------------

export type EveryLanguagesOrdinals = | LanguagesOrdinals | 16 | 17 | 18 | 19 | 20;
export type EveryLanguagesNames = | LanguagesNames | Uppercase<BasicEnglishName>;
export type SimpleEveryLanguages<T = EveryLanguages, > = SimpleEnum<EveryLanguagesNames, T>;
export type EveryLanguagesArray<T = EveryLanguages, > = readonly [
    SimpleEveryLanguages<T>['ENGLISH'], SimpleEveryLanguages<T>['AMERICAN_ENGLISH'], SimpleEveryLanguages<T>['EUROPEAN_ENGLISH'],
    SimpleEveryLanguages<T>['FRENCH'], SimpleEveryLanguages<T>['CANADIAN_FRENCH'], SimpleEveryLanguages<T>['EUROPEAN_FRENCH'],
    SimpleEveryLanguages<T>['GERMAN'],
    SimpleEveryLanguages<T>['SPANISH'], SimpleEveryLanguages<T>['AMERICAN_SPANISH'], SimpleEveryLanguages<T>['EUROPEAN_SPANISH'],
    SimpleEveryLanguages<T>['ITALIAN'],
    SimpleEveryLanguages<T>['DUTCH'],
    SimpleEveryLanguages<T>['PORTUGUESE'], SimpleEveryLanguages<T>['AMERICAN_PORTUGUESE'], SimpleEveryLanguages<T>['EUROPEAN_PORTUGUESE'],
    SimpleEveryLanguages<T>['RUSSIAN'],
    SimpleEveryLanguages<T>['JAPANESE'],
    SimpleEveryLanguages<T>['CHINESE'], SimpleEveryLanguages<T>['CHINESE_TRADITIONAL'], SimpleEveryLanguages<T>['CHINESE_SIMPLIFIED'],
    SimpleEveryLanguages<T>['KOREAN'],
];

//endregion -------------------- Enum types --------------------

/**
 * @enum
 * @indirectlyInherit<Languages>
 */
export class EveryLanguages {

    //region -------------------- enum instances --------------------

    public static readonly ENGLISH =             new class EveryLanguages_English extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage || EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.english;
        }

        public original(classWithEveryLanguages: ClassWithEveryLanguages,): AmericanOrEuropeanOriginal {
            return classWithEveryLanguages.originalEnglish;
        }

    }           ('English', 'English',);
    public static readonly AMERICAN_ENGLISH =    new class EveryLanguages_AmericanEnglish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }

    }   (Languages.AMERICAN_ENGLISH, EveryLanguages.ENGLISH,);
    public static readonly EUROPEAN_ENGLISH =    new class EveryLanguages_EuropeanEnglish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage;
        }

    }   (Languages.EUROPEAN_ENGLISH, EveryLanguages.ENGLISH,);
    public static readonly FRENCH =              new class EveryLanguages_French extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage || EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.french;
        }

        public original(classWithEveryLanguages: ClassWithEveryLanguages,): AmericanOrEuropeanOriginal {
            return classWithEveryLanguages.originalFrench;
        }

    }            ('French', 'Français',);
    public static readonly CANADIAN_FRENCH =     new class EveryLanguages_CanadianFrench extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage;
        }

    }    (Languages.CANADIAN_FRENCH, EveryLanguages.FRENCH,);
    public static readonly EUROPEAN_FRENCH =     new class EveryLanguages_EuropeanFrench extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage;
        }

    }    (Languages.EUROPEAN_FRENCH, EveryLanguages.FRENCH,);
    public static readonly GERMAN =              new EveryLanguages                                                      (Languages.GERMAN,);
    public static readonly SPANISH =             new class EveryLanguages_Spanish extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage || EveryLanguages.EUROPEAN_SPANISH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.spanish;
        }

        public original(classWithEveryLanguages: ClassWithEveryLanguages,): ChineseOriginal {
            return classWithEveryLanguages.originalSpanish;
        }

    }           ('Spanish', 'Español',);
    public static readonly AMERICAN_SPANISH =    new class EveryLanguages_AmericanSpanish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }

    }   (Languages.AMERICAN_SPANISH, EveryLanguages.SPANISH,);
    public static readonly EUROPEAN_SPANISH =    new class EveryLanguages_EuropeanSpanish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }

    }   (Languages.EUROPEAN_SPANISH, EveryLanguages.SPANISH,);
    public static readonly ITALIAN =             new EveryLanguages                                                      (Languages.ITALIAN,);
    public static readonly DUTCH =               new EveryLanguages                                                      (Languages.DUTCH,);
    public static readonly PORTUGUESE =          new class EveryLanguages_Portuguese extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage || EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.portuguese;
        }

    }        ('Portuguese', 'Português',);
    public static readonly AMERICAN_PORTUGUESE = new class EveryLanguages_AmericanPortuguese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

    }(Languages.AMERICAN_PORTUGUESE, EveryLanguages.PORTUGUESE,);
    public static readonly EUROPEAN_PORTUGUESE = new class EveryLanguages_EuropeanPortuguese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage;
        }

    }(Languages.EUROPEAN_PORTUGUESE, EveryLanguages.PORTUGUESE,);
    public static readonly RUSSIAN =             new EveryLanguages                                                      (Languages.RUSSIAN,);
    public static readonly JAPANESE =            new EveryLanguages                                                      (Languages.JAPANESE,);
    public static readonly CHINESE =             new class EveryLanguages_Chinese extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.CHINESE_SIMPLIFIED.isCurrentLanguage || EveryLanguages.CHINESE_TRADITIONAL.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.chinese;
        }

    }           ('Chinese', '中国人',);
    public static readonly CHINESE_SIMPLIFIED =  new class EveryLanguages_SimplifiedChinese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CHINESE_TRADITIONAL.isCurrentLanguage;
        }

    } (Languages.CHINESE_SIMPLIFIED, EveryLanguages.CHINESE,);
    public static readonly CHINESE_TRADITIONAL = new class EveryLanguages_TraditionalChinese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CHINESE_SIMPLIFIED.isCurrentLanguage;
        }

    }(Languages.CHINESE_TRADITIONAL, EveryLanguages.CHINESE,);
    public static readonly KOREAN =              new EveryLanguages(Languages.KOREAN,);

    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EveryLanguagesArray;
    static #LAST_ORDINAL: EveryLanguagesOrdinals = 0;
    readonly #ordinal: EveryLanguagesOrdinals;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName: PossibleLanguagesEnglishName;
    readonly #originalName: PossibleLanguagesOriginalName;
    readonly #parent: | EveryLanguages | null;
    readonly #reference: | Languages | null;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: BasicEnglishName, originalName: BasicOriginalName,)
    private constructor(reference: Languages,)
    private constructor(reference: Languages, parent: EveryLanguages,)
    private constructor(referenceOrEnglishName: Languages | BasicEnglishName, parentOrOriginalName?: EveryLanguages | BasicOriginalName,) {
        this.#ordinal = EveryLanguages.#LAST_ORDINAL++ as EveryLanguagesOrdinals;
        if (typeof referenceOrEnglishName === 'string') {
            this.#englishName = referenceOrEnglishName;
            this.#originalName = parentOrOriginalName as BasicOriginalName;
            this.#reference = null;
            this.#parent = null;
        } else {
            this.#englishName = referenceOrEnglishName.englishName;
            this.#originalName = this.reference!.originalName;
            this.#reference = referenceOrEnglishName;
            this.#parent = parentOrOriginalName as EveryLanguages | undefined ?? null;
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

    public get parent(): | EveryLanguages | null {
        return this.#parent;
    }

    public get reference(): | Languages | null {
        return this.#reference;
    }

    public get isCurrentLanguage(): boolean {
        return this.reference !== null && this === EveryLanguages.getValue(EveryLanguages.currentLanguage);
    }

    public get isCurrentLanguageOrAssociatedWithIt(): boolean {
        return this.isCurrentLanguage;
    }

    //endregion -------------------- Getter --------------------

    public get(classWithEveryLanguages: ClassWithEveryLanguages,): string {
        return this.reference!.get(classWithEveryLanguages);
    }

    public original(classWithEveryLanguages: ClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal {
        return this.parent?.original(classWithEveryLanguages) ?? this.get(classWithEveryLanguages);
    }


    public static get currentLanguage(): EveryLanguages {
        return EveryLanguages.getValue(Languages.currentLanguage);
    }

    public static set currentLanguage(value: EveryLanguages,) {
        this.setCurrentLanguage(value);
    }

    public static setCurrentLanguage(value: | EveryLanguages | Languages | string,): typeof EveryLanguages {
        const selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null && selectedLanguage.reference !== null)
            Languages.currentLanguage = selectedLanguage.reference;
        return this;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public get ordinal(): EveryLanguagesOrdinals {
        return this.#ordinal;
    }


    public static get default(): EveryLanguages {
        return EveryLanguages.getValue(Languages.default);
    }

    public static set default(value: Languages | EveryLanguages | string,) {
        this.setDefault(value);
    }

    public static setDefault(value: | Languages | EveryLanguages | string): typeof EveryLanguages {
        const selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null && selectedLanguage.reference !== null)
            Languages.default = selectedLanguage.reference;
        return this;
    }


    public static getValue(value: | EveryLanguages | PossibleValueToGetLanguage,): EveryLanguages
    public static getValue(value: string,): | EveryLanguages | null
    public static getValue(value: | Languages | EveryLanguages | string,): | EveryLanguages | null
    public static getValue(value: | Languages | EveryLanguages | string,): | EveryLanguages | null {
        return typeof value === 'string'
            ? this.values.find(language => language.englishName === value || language.originalName === value) ?? this.getValue(Languages.getValue(value) ?? '')
            : value instanceof Languages
                ? this.values.find(language => language.reference === value) ?? null
                : value;
    }

    public static get values(): EveryLanguagesArray {
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

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- enum methods --------------------

}
