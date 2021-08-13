import type {DayNumber}                                                                                                                                                from './types';
import type {ProjectLanguagesOrdinals}                                                                                                                                 from '../ProjectLanguages.types';
import type {EveryLanguages}                                                                                                                                           from '../EveryLanguages';
import type {PossibleProjectLanguagesAcronym, PossibleProjectLanguagesEnglishName, PossibleProjectLanguagesOriginalName, ProjectLanguagesArray, ProjectLanguagesNames} from '../EveryLanguages.types';
import type {PossibleNonNullableValue}                                                                                                                                 from './DateDayLanguages.types';

import {ProjectLanguages} from '../ProjectLanguages';

export abstract class DateDayLanguages
    extends ProjectLanguages {

    //region -------------------- Enum instances --------------------

    public static readonly AMERICAN_ENGLISH =    new class DateDayLanguages_AmericanEnglish extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return day === 2 || day === 22
                ? <>{day}<sup>nd</sup></>
                : day === 3
                    ? <>3<sup>rd</sup></>
                    : <>{day}<sup>th</sup></>;
        }

    }   (ProjectLanguages.AMERICAN_ENGLISH,   );
    public static readonly EUROPEAN_ENGLISH =    new class DateDayLanguages_EuropeanEnglish extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_ENGLISH.newDayComponent(day);
        }

    }   (ProjectLanguages.EUROPEAN_ENGLISH,   );
    public static readonly CANADIAN_FRENCH =     new class DateDayLanguages_CanadianFrench extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return day === 1
                ? <>{day}<sup>er</sup></>
                : <>{day}</>;
        }

    }    (ProjectLanguages.CANADIAN_FRENCH,    );
    public static readonly EUROPEAN_FRENCH =     new class DateDayLanguages_EuropeanFrench extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.CANADIAN_FRENCH.newDayComponent(day);
        }

    }    (ProjectLanguages.EUROPEAN_FRENCH,    );
    public static readonly GERMAN =              new class DateDayLanguages_German extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day === 1
                ? 'der ' + day
                : day}</>;
        }

    }            (ProjectLanguages.GERMAN,             );
    public static readonly AMERICAN_SPANISH =    new class DateDayLanguages_AmericanSpanish extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }   (ProjectLanguages.AMERICAN_SPANISH,   );
    public static readonly EUROPEAN_SPANISH =    new class DateDayLanguages_EuropeanSpanish extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_SPANISH.newDayComponent(day);
        }

    }   (ProjectLanguages.EUROPEAN_SPANISH,   );
    public static readonly ITALIAN =             new class DateDayLanguages_Italian extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day === 1 ? 'il' : day}</>;
        }

    }           (ProjectLanguages.ITALIAN,            );
    public static readonly DUTCH =               new class DateDayLanguages_Dutch extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }             (ProjectLanguages.DUTCH,              );
    public static readonly AMERICAN_PORTUGUESE = new class DateDayLanguages_AmericanPortuguese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }(ProjectLanguages.AMERICAN_PORTUGUESE,);
    public static readonly EUROPEAN_PORTUGUESE = new class DateDayLanguages_EuropeanPortuguese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_PORTUGUESE.newDayComponent(day);
        }

    }(ProjectLanguages.EUROPEAN_PORTUGUESE,);
    public static readonly RUSSIAN =             new class DateDayLanguages_Russian extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }           (ProjectLanguages.RUSSIAN,            );
    public static readonly JAPANESE =            new class DateDayLanguages_Japanese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }          (ProjectLanguages.JAPANESE,           );
    public static readonly TRADITIONAL_CHINESE = new class DateDayLanguages_TraditionalChinese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day);
        }

    }(ProjectLanguages.TRADITIONAL_CHINESE,);
    public static readonly SIMPLIFIED_CHINESE =  new class DateDayLanguages_SimplifiedChinese extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day);
        }

    } (ProjectLanguages.SIMPLIFIED_CHINESE, );
    public static readonly KOREAN =              new class DateDayLanguages_Korean extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return <>{day}</>;
        }

    }            (ProjectLanguages.KOREAN,             );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: ProjectLanguagesArray<DateDayLanguages>;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #reference;

    //endregion -------------------- Attributes --------------------

    private constructor(language: ProjectLanguages,) {
        super(language);
        this.#reference = language;
    }

    //region -------------------- Getter methods --------------------

    public get reference() {
        return this.#reference;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract newDayComponent(day: DayNumber,): JSX.Element;


    public static get currentLanguage(): DateDayLanguages {
        return this.getValue(ProjectLanguages.currentLanguage)!;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static get default(): DateDayLanguages {
        return this.getValue(ProjectLanguages.default)!;
    }


    public static getValue(nullValue: | null | undefined,): null
    public static getValue(value: PossibleNonNullableValue,): DateDayLanguages
    public static getValue<O extends ProjectLanguagesOrdinals, >(ordinal: O,): ProjectLanguagesArray<DateDayLanguages>[O]
    public static getValue<O extends number, >(ordinal: O,): | NonNullable<ProjectLanguagesArray<DateDayLanguages>[O]> | null
    public static getValue(nameOrAcronym: | PossibleProjectLanguagesAcronym | PossibleProjectLanguagesEnglishName | PossibleProjectLanguagesOriginalName | ProjectLanguagesNames,): DateDayLanguages
    public static getValue(nameOrAcronym: string,): | DateDayLanguages | null
    public static getValue<I extends DateDayLanguages, >(instance: I,): I
    public static getValue(instance: | EveryLanguages | ProjectLanguages,): | DateDayLanguages | null
    public static getValue(value: | null | undefined | ProjectLanguages | EveryLanguages | DateDayLanguages | string | number,): | DateDayLanguages | null
    public static getValue(value: | null | undefined | ProjectLanguages | EveryLanguages | DateDayLanguages | string | number,): | DateDayLanguages | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.getValue(ProjectLanguages.getValue(value))
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value instanceof DateDayLanguages
                        ? value
                        : this.values.find(language => language.reference === value) ?? null;
    }

    public static get values(): ProjectLanguagesArray<DateDayLanguages> {
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
            this.TRADITIONAL_CHINESE, this.SIMPLIFIED_CHINESE,
            this.KOREAN,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}