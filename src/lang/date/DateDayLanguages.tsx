import {Languages, PossibleValueToGetLanguage} from '../Languages';
import {DayNumber}                             from './DateInstanceCreator';

/**
 * @enum
 */
export abstract class DateDayLanguages {

    //region -------------------- enum instances --------------------

    public static readonly AMERICAN_ENGLISH = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return day === 2 || day === 22
                ? <>{day}<sup>nd</sup></>
                : day === 3
                    ? <>3<sup>rd</sup></>
                    : <>{day}<sup>th</sup></>;
        }

    }(Languages.AMERICAN_ENGLISH);
    public static readonly EUROPEAN_ENGLISH = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return DateDayLanguages.AMERICAN_ENGLISH.newDayComponent(day);
        }

    }(Languages.EUROPEAN_ENGLISH);
    public static readonly CANADIAN_FRENCH = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return day === 1
                ? <>{day}<sup>er</sup></>
                : <>{day}</>;
        }

    }(Languages.CANADIAN_FRENCH);
    public static readonly EUROPEAN_FRENCH = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return DateDayLanguages.CANADIAN_FRENCH.newDayComponent(day);
        }

    }(Languages.EUROPEAN_FRENCH);
    public static readonly GERMAN = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return <>{day === 1
                ? 'der ' + day
                : day}</>;
        }

    }(Languages.GERMAN);
    public static readonly AMERICAN_SPANISH = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return <>{day}</>;
        }

    }(Languages.AMERICAN_SPANISH);
    public static readonly EUROPEAN_SPANISH = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return DateDayLanguages.AMERICAN_SPANISH.newDayComponent(day);
        }

    }(Languages.EUROPEAN_SPANISH);
    public static readonly ITALIAN = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return <>{day === 1 ? 'il' : day}</>;
        }

    }(Languages.ITALIAN);
    public static readonly DUTCH = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return <>{day}</>;
        }

    }(Languages.DUTCH);
    public static readonly AMERICAN_PORTUGUESE = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return <>{day}</>;
        }

    }(Languages.AMERICAN_PORTUGUESE);
    public static readonly EUROPEAN_PORTUGUESE = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return DateDayLanguages.AMERICAN_PORTUGUESE.newDayComponent(day);
        }

    }(Languages.EUROPEAN_PORTUGUESE);
    public static readonly RUSSIAN = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return <>{day}</>;
        }

    }(Languages.RUSSIAN);
    public static readonly JAPANESE = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return <>{day}</>;
        }

    }(Languages.JAPANESE);
    public static readonly CHINESE_TRADITIONAL = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return DateDayLanguages.JAPANESE.newDayComponent(day);
        }

    }(Languages.CHINESE_TRADITIONAL);
    public static readonly CHINESE_SIMPLIFIED = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return DateDayLanguages.JAPANESE.newDayComponent(day);
        }

    }(Languages.CHINESE_SIMPLIFIED);
    public static readonly KOREAN = new class extends DateDayLanguages {

        public newDayComponent(day: DayNumber) {
            return <>{day}</>;
        }

    }(Languages.KOREAN);

    //endregion -------------------- enum instances --------------------

    static #VALUES?: DateDayLanguages[];
    //region -------------------- Attributes --------------------

    readonly #reference;

    //endregion -------------------- Attributes --------------------

    private constructor(language: Languages) {
        this.#reference = language;
    }

    //region -------------------- Methods --------------------

    public get reference() {
        return this.#reference;
    }

    public abstract newDayComponent(day: DayNumber): JSX.Element;


    public static get currentLanguage(): DateDayLanguages {
        return this.getValue(Languages.currentLanguage);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public static getValue(value: PossibleValueToGetLanguage): DateDayLanguages
    public static getValue(value: string): DateDayLanguages | null
    public static getValue(value: Languages | DateDayLanguages | string): DateDayLanguages | null
    public static getValue(value: Languages | DateDayLanguages | string): DateDayLanguages | null {
        return typeof value === 'string'
            ? this.getValue(Languages.getValue(value) ?? '')
            : value instanceof Languages ?
                this.values.find(language => language.reference === value) ?? null
                : value;
    }

    public static get values(): readonly DateDayLanguages[] {
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