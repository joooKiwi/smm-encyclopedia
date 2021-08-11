import i18n from 'i18next';

import type {ClassWithEveryLanguages}    from './ClassWithEveryLanguages';
import type {ClassWithLanguages}         from './ClassWithLanguages';
import type {AmericanOrEuropeanOriginal} from './name/containers/AmericanAndEuropeanLanguage';
import type {CanadianOrEuropeanOriginal} from './name/containers/CanadianAndEuropeanLanguage';
import type {ChineseOriginal}            from './name/containers/ChineseLanguage';
import type {LanguageEnumerable}         from './LanguageEnumerable';
import type {SimpleEnum}                 from '../util/enum/EnumTypes';

import {Enum} from '../util/enum/Enum';

//region -------------------- Every language text --------------------

//region -------------------- Acronyms --------------------

type BasicAcronym = | 'en' | 'fr' | 'es' | 'pt' | 'zh';
export type PossibleProjectLanguagesAcronym =
    | 'en_AM' | 'en_EU'
    | 'fr_CA' | 'fr_EU'
    | 'de'
    | 'es_AM' | 'es_EU'
    | 'it' | 'nl'
    | 'pt_AM' | 'pt_EU'
    | 'ru' | 'ja'
    | 'zh_T' | 'zh_S'
    | 'ko';
export type PossibleEveryLanguagesAcronym = | BasicAcronym | PossibleProjectLanguagesAcronym;

export type PossibleProjectLanguagesInternationalAcronym =
    | 'en-US' | 'en-EU'
    | 'fr-CA' | 'fr-EU'
    | 'de'
    | 'es-US' | 'es-EU'
    | 'it' | 'nl'
    | 'pt-US' | 'pt-EU'
    | 'ru' | 'ja'
    | 'zh'
    | 'ko';
export type PossibleEveryLanguagesInternationalAcronym = | BasicAcronym | PossibleProjectLanguagesInternationalAcronym;

//endregion -------------------- Acronyms --------------------
//region -------------------- Names --------------------

type BasicEnglishName = | 'English' | 'French' | 'Spanish' | 'Portuguese' | 'Chinese';
export type PossibleProjectLanguagesEnglishName =
    | `English (${'America' | 'Europe'})`
    | `French (${'Canada' | 'Europe'})`
    | 'German'
    | `Spanish (${'America' | 'Europe'})`
    | 'Dutch' | 'Italian'
    | `Portuguese (${'America' | 'Europe'})`
    | 'Russian' | 'Japanese'
    | `${'Traditional' | 'Simplified'} chinese`
    | 'Korean';
export type PossibleEveryLanguagesEnglishName = | BasicEnglishName | PossibleProjectLanguagesEnglishName;

type BasicOriginalName = | 'English' | 'Français' | 'Español' | 'Português' | '中国人';
export type PossibleProjectLanguagesOriginalName =
    | `English (${'America' | 'Europe'})`
    | `Français (${'Canada' | 'Europe'})`
    | 'Deutsche'
    | `Español (${'America' | 'Europa'})`
    | `Português (${'América' | 'Europa'})`//Canadá
    | 'Nederlands' | 'Italiano'
    | 'русский' | '日本語'
    | '简体中文' | '繁體中文'
    | '한국어';
export type PossibleEveryLanguagesOriginalName = | BasicOriginalName | PossibleProjectLanguagesOriginalName;

//endregion -------------------- Names --------------------

export type PossibleNonNullableValue = | EveryLanguages
    | EveryLanguagesOrdinals
    | PossibleEveryLanguagesAcronym
    | PossibleEveryLanguagesEnglishName | PossibleEveryLanguagesOriginalName;

//endregion -------------------- Every language text --------------------
//region -------------------- Enum types --------------------

export type EveryLanguagesOrdinals = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export type ProjectLanguagesNames = | `${| 'AMERICAN' | 'EUROPEAN'}_${| 'ENGLISH' | 'SPANISH' | 'PORTUGUESE'}`
    | `${| 'CANADIAN' | 'EUROPEAN'}_FRENCH`
    | 'GERMAN' | 'ITALIAN' | 'DUTCH' | 'RUSSIAN' | 'JAPANESE' | 'KOREAN'
    | `CHINESE_${| 'TRADITIONAL' | 'SIMPLIFIED'}`;
export type EveryLanguagesNames = | ProjectLanguagesNames | Uppercase<BasicEnglishName>;

export type SimpleProjectLanguages<T = EveryLanguages, > = SimpleEnum<ProjectLanguagesNames, T>;
export type ProjectLanguagesArray<T = EveryLanguages, > = readonly [
    SimpleProjectLanguages<T>['AMERICAN_ENGLISH'], SimpleProjectLanguages<T>['EUROPEAN_ENGLISH'],
    SimpleProjectLanguages<T>['CANADIAN_FRENCH'], SimpleProjectLanguages<T>['EUROPEAN_FRENCH'],
    SimpleProjectLanguages<T>['GERMAN'],
    SimpleProjectLanguages<T>['AMERICAN_SPANISH'], SimpleProjectLanguages<T>['EUROPEAN_SPANISH'],
    SimpleProjectLanguages<T>['ITALIAN'],
    SimpleProjectLanguages<T>['DUTCH'],
    SimpleProjectLanguages<T>['AMERICAN_PORTUGUESE'], SimpleProjectLanguages<T>['EUROPEAN_PORTUGUESE'],
    SimpleProjectLanguages<T>['RUSSIAN'],
    SimpleProjectLanguages<T>['JAPANESE'],
    SimpleProjectLanguages<T>['CHINESE_TRADITIONAL'], SimpleProjectLanguages<T>['CHINESE_SIMPLIFIED'],
    SimpleProjectLanguages<T>['KOREAN'],
];

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

export abstract class EveryLanguages
    extends Enum<EveryLanguagesOrdinals, EveryLanguagesNames>
    implements LanguageEnumerable {

    //region -------------------- Enum instances --------------------

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

    }           ('en',    'en',    'English',              'English',                                       );
    public static readonly AMERICAN_ENGLISH =    new class EveryLanguages_AmericanEnglish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.americanEnglish;
        }

    }   ('en_AM', 'en-US', 'English (America)',    'English (America)',   EveryLanguages.ENGLISH,   );
    public static readonly EUROPEAN_ENGLISH =    new class EveryLanguages_EuropeanEnglish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.europeanEnglish;
        }

    }   ('en_EU', 'en-EU', 'English (Europe)',     'English (Europe)',    EveryLanguages.ENGLISH,   );
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

    }            ('fr',    'fr',    'French',               'Français',                                      );
    public static readonly CANADIAN_FRENCH =     new class EveryLanguages_CanadianFrench extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.canadianFrench;
        }

    }    ('fr_CA', 'fr-CA', 'French (Canada)',      'Français (Canada)',   EveryLanguages.FRENCH,    );
    public static readonly EUROPEAN_FRENCH =     new class EveryLanguages_EuropeanFrench extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.europeanFrench;
        }

    }    ('fr_EU', 'fr-EU', 'French (Europe)',      'Français (Europe)',   EveryLanguages.FRENCH,    );
    public static readonly GERMAN =              new class EveryLanguages_German extends EveryLanguages {

        public get(classWithLanguages: ClassWithLanguages,): string {
            return classWithLanguages.german;
        }

    }            ('de',    'de',    'German',               'Deutsche',                                      );
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

    }           ('es',    'es',    'Spanish',              'Español',                                       );
    public static readonly AMERICAN_SPANISH =    new class EveryLanguages_AmericanSpanish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.americanSpanish;
        }

    }   ('es_AM', 'es-US', 'Spanish (America)',    'Español (America)',   EveryLanguages.SPANISH,   );
    public static readonly EUROPEAN_SPANISH =    new class EveryLanguages_EuropeanSpanish extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.europeanSpanish;
        }

    }   ('es_EU', 'es-EU', 'Spanish (Europe)',     'Español (Europa)',    EveryLanguages.SPANISH,   );
    public static readonly ITALIAN =             new class EveryLanguages_Italian extends EveryLanguages {

        public get(classWithLanguages: ClassWithLanguages,): string {
            return classWithLanguages.italian;
        }

    }           ('it',    'it',    'Italian',              'Italiano',                                      );
    public static readonly DUTCH =               new class EveryLanguages_Dutch extends EveryLanguages {

        public get(classWithLanguages: ClassWithLanguages,): string {
            return classWithLanguages.dutch;
        }

    }             ('nl',    'nl',    'Dutch',                'Nederlands',                                    );
    public static readonly PORTUGUESE =          new class EveryLanguages_Portuguese extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage || EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.portuguese;
        }

    }        ('pt',    'pt',    'Portuguese',           'Português',                                     );
    public static readonly AMERICAN_PORTUGUESE = new class EveryLanguages_AmericanPortuguese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.americanPortuguese;
        }

    }('pt_AM', 'pt-US', 'Portuguese (America)', 'Português (América)', EveryLanguages.PORTUGUESE,);
    public static readonly EUROPEAN_PORTUGUESE = new class EveryLanguages_EuropeanPortuguese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.europeanPortuguese;
        }

    }('pt_EU', 'pt-EU', 'Portuguese (Europe)',  'Português (Europa)',  EveryLanguages.PORTUGUESE,);
    public static readonly RUSSIAN =             new class EveryLanguages_Russian extends EveryLanguages {

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.russian;
        }

    }           ('ru',    'ru',    'Russian',              'русский',                                       );
    public static readonly JAPANESE =            new class EveryLanguages_Japanese extends EveryLanguages {

        public get(classWithLanguages: ClassWithLanguages,): string {
            return classWithLanguages.japanese;
        }

    }          ('ja',    'ja',    'Japanese',             '日本語',                                         );
    public static readonly CHINESE =             new class EveryLanguages_Chinese extends EveryLanguages {

        public get isCurrentLanguage(): boolean {
            return EveryLanguages.SIMPLIFIED_CHINESE.isCurrentLanguage || EveryLanguages.TRADITIONAL_CHINESE.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.chinese;
        }

    }           ('zh',    'zh',    'Chinese',              '中国人',                                         );
    public static readonly SIMPLIFIED_CHINESE =  new class EveryLanguages_SimplifiedChinese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.TRADITIONAL_CHINESE.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.simplifiedChinese;
        }

    } ('zh_T',  'zh',    'Traditional chinese',  '简体中文',              EveryLanguages.CHINESE,  );
    public static readonly TRADITIONAL_CHINESE = new class EveryLanguages_TraditionalChinese extends EveryLanguages {

        public get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.SIMPLIFIED_CHINESE.isCurrentLanguage;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages,) {
            return classWithEveryLanguages.traditionalChinese;
        }

    }('zh_S',  'zh',    'Simplified chinese',   '繁體中文',              EveryLanguages.CHINESE,  );
    public static readonly KOREAN =              new class EveryLanguages_Korean extends EveryLanguages {

        public get(classWithLanguages: ClassWithLanguages,): string {
            return classWithLanguages.korean;
        }

    }            ('ko',    'ko',    'Korean',               '한국어',                                         );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: EveryLanguagesArray;
    static #DEFAULT?: EveryLanguages;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #CURRENT_LANGUAGE: EveryLanguages;

    readonly #projectAcronym: PossibleEveryLanguagesAcronym;
    readonly #internationalAcronym: PossibleEveryLanguagesInternationalAcronym;
    readonly #englishName: PossibleEveryLanguagesEnglishName;
    readonly #originalName: PossibleEveryLanguagesOriginalName;
    readonly #parent: | EveryLanguages | null;

    //endregion -------------------- Attributes --------------------

    private constructor(projectAcronym: BasicAcronym, internationalAcronym: BasicAcronym, englishName: BasicEnglishName, originalName: BasicOriginalName,)
    private constructor(projectAcronym: PossibleProjectLanguagesAcronym, internationalAcronym: PossibleProjectLanguagesInternationalAcronym, englishName: PossibleProjectLanguagesEnglishName, originalName: PossibleProjectLanguagesOriginalName,)
    private constructor(projectAcronym: PossibleProjectLanguagesAcronym, internationalAcronym: PossibleProjectLanguagesInternationalAcronym, englishName: PossibleProjectLanguagesEnglishName, originalName: PossibleProjectLanguagesOriginalName, parent: EveryLanguages,)
    private constructor(projectAcronym: PossibleEveryLanguagesAcronym, internationalAcronym: PossibleEveryLanguagesInternationalAcronym, englishName: PossibleEveryLanguagesEnglishName, originalName: PossibleEveryLanguagesOriginalName, parent: | EveryLanguages | null = null,) {
        super(EveryLanguages);
        this.#projectAcronym = projectAcronym;
        this.#internationalAcronym = internationalAcronym;
        this.#englishName = englishName;
        this.#originalName = originalName;
        this.#parent = parent;
    }

    //region -------------------- Getter methods --------------------

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

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(classWithLanguages: ClassWithLanguages,): string;

    public original(classWithEveryLanguages: ClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal {
        return this.parent?.original(classWithEveryLanguages) ?? this.get(classWithEveryLanguages);
    }


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
        if (selectedLanguage !== null)
            i18n.changeLanguage((this.#CURRENT_LANGUAGE = selectedLanguage.__setLanguageToHTML()).projectAcronym);
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
        if(selectedValue != null)
            this.#DEFAULT = selectedValue;
        return this;
    }


    public static getValue(value: | null | undefined,): null
    public static getValue<O extends EveryLanguagesOrdinals, >(ordinal: O,): EveryLanguagesArray[O]
    public static getValue<O extends number, >(ordinal: O,): | NonNullable<EveryLanguagesArray[O]> | null
    public static getValue<I extends EveryLanguages, >(value: I,): I
    public static getValue(value: PossibleNonNullableValue,): EveryLanguages
    public static getValue(nameOrAcronym: string,): | EveryLanguages | null
    public static getValue(value: | null | undefined | EveryLanguages | string | number,): | EveryLanguages | null
    public static getValue(value: | null | undefined | EveryLanguages | string | number,): | EveryLanguages | null {
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
        ];
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

EveryLanguages.default ??= 'en_AM';
EveryLanguages.currentLanguage ??= 'en_AM';