import type {DayNumber}                                                                               from './types';
import type {LanguagesArray, LanguagesOrdinals, PossibleLanguagesAcronym, PossibleValueToGetLanguage} from '../Languages';
import type {ClassWithLanguages}                                                                      from '../ClassWithLanguages';

import {Languages} from '../Languages';

/**
 * @enum
 */
export abstract class DateDayLanguages
    extends Languages {

    //region -------------------- enum instances --------------------

    public static readonly AMERICAN_ENGLISH =    new class DateDayLanguages_AmericanEnglish extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return day === 2 || day === 22
                ? <>{day}<sup>nd</sup></>
                : day === 3
                    ? <>3<sup>rd</sup></>
                    : <>{day}<sup>th</sup></>;
        }

    }   (Languages.AMERICAN_ENGLISH);
    public static readonly EUROPEAN_ENGLISH =    new class DateDayLanguages_EuropeanEnglish extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_ENGLISH.newDayComponent(day);
        }

    }   (Languages.EUROPEAN_ENGLISH);
    public static readonly CANADIAN_FRENCH =     new class DateDayLanguages_CanadianFrench extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return day === 1
                ? <>{day}<sup>er</sup></>
                : <>{day}</>;
        }

    }    (Languages.CANADIAN_FRENCH);
    public static readonly EUROPEAN_FRENCH =     new class DateDayLanguages_EuropeanFrench extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.CANADIAN_FRENCH.newDayComponent(day);
        }

    }    (Languages.EUROPEAN_FRENCH);
    public static readonly GERMAN =              new class DateDayLanguages_German extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day === 1
                ? 'der ' + day
                : day}</>;
        }

    }            (Languages.GERMAN);
    public static readonly AMERICAN_SPANISH =    new class DateDayLanguages_AmericanSpanish extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }   (Languages.AMERICAN_SPANISH);
    public static readonly EUROPEAN_SPANISH =    new class DateDayLanguages_EuropeanSpanish extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_SPANISH.newDayComponent(day);
        }

    }   (Languages.EUROPEAN_SPANISH);
    public static readonly ITALIAN =             new class DateDayLanguages_Italian extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day === 1 ? 'il' : day}</>;
        }

    }           (Languages.ITALIAN);
    public static readonly DUTCH =               new class DateDayLanguages_Dutch extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }             (Languages.DUTCH);
    public static readonly AMERICAN_PORTUGUESE = new class DateDayLanguages_AmericanPortuguese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }(Languages.AMERICAN_PORTUGUESE);
    public static readonly EUROPEAN_PORTUGUESE = new class DateDayLanguages_EuropeanPortuguese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_PORTUGUESE.newDayComponent(day);
        }

    }(Languages.EUROPEAN_PORTUGUESE);
    public static readonly RUSSIAN =             new class DateDayLanguages_Russian extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }           (Languages.RUSSIAN);
    public static readonly JAPANESE =            new class DateDayLanguages_Japanese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }          (Languages.JAPANESE);
    public static readonly CHINESE_TRADITIONAL = new class DateDayLanguages_TraditionalChinese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day);
        }

    }(Languages.CHINESE_TRADITIONAL);
    public static readonly CHINESE_SIMPLIFIED =  new class DateDayLanguages_SimplifiedChinese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day);
        }

    } (Languages.CHINESE_SIMPLIFIED);
    public static readonly KOREAN =              new class DateDayLanguages_Korean extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }            (Languages.KOREAN);

    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: LanguagesArray<DateDayLanguages>;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #reference;

    //endregion -------------------- Attributes --------------------

    private constructor(language: Languages,) {
        super(language);
        this.#reference = language;
    }

    //region -------------------- Override methods --------------------

    public get(classWithLanguages: ClassWithLanguages,): string {
        return this.reference.get(classWithLanguages);
    }

    //endregion -------------------- Override methods --------------------
    //region -------------------- Methods --------------------

    public get reference() {
        return this.#reference;
    }

    public abstract newDayComponent(day: DayNumber,): JSX.Element;


    public static get currentLanguage(): DateDayLanguages {
        return this.getValue(Languages.currentLanguage);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public get ordinal(): LanguagesOrdinals {
        return this.reference.ordinal;
    }

    public static get default(): DateDayLanguages {
        return this.getValue(Languages.default);
    }

    public static set default(value: | Languages | DateDayLanguages | PossibleLanguagesAcronym,) {
        Languages.default = value instanceof DateDayLanguages ? value.reference : value;
    }

    public static getValue(value: PossibleValueToGetLanguage,): DateDayLanguages
    public static getValue(value: string,): | DateDayLanguages | null
    public static getValue(value: | Languages | DateDayLanguages | string,): | DateDayLanguages | null
    public static getValue(value: | Languages | DateDayLanguages | string,): | DateDayLanguages | null {
        return typeof value === 'string'
            ? this.getValue(Languages.getValue(value) ?? '')
            : value instanceof DateDayLanguages
                ? value
                : this.values.find(language => language.reference === value) ?? null;
    }

    public static get values(): LanguagesArray<DateDayLanguages> {
        return this.#VALUES ??= [
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
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- enum methods --------------------

}