import type {DayNumber}                                       from './types';
import type {EnumArray, Names, Ordinals, PossibleStringValue} from '../ProjectLanguages.types';
import type {Enumerable}                                      from '../../util/enum/Enumerable';
import type {EveryLanguages}                                  from '../EveryLanguages';
import type {PossibleNonNullableValue, PossibleValue}         from './DateDayLanguages.types';
import type {StaticReference}                                 from '../../util/enum/Enum.types';

import {Enum}             from '../../util/enum/Enum';
import {ProjectLanguages} from '../ProjectLanguages';

export abstract class DateDayLanguages
    extends ProjectLanguages {

    //region -------------------- Enum instances --------------------

    public static /*readonly*/ AMERICAN_ENGLISH;
    public static /*readonly*/ EUROPEAN_ENGLISH;
    public static /*readonly*/ CANADIAN_FRENCH;
    public static /*readonly*/ EUROPEAN_FRENCH;
    public static /*readonly*/ GERMAN;
    public static /*readonly*/ AMERICAN_SPANISH;
    public static /*readonly*/ EUROPEAN_SPANISH;
    public static /*readonly*/ ITALIAN;
    public static /*readonly*/ DUTCH;
    public static /*readonly*/ AMERICAN_PORTUGUESE;
    public static /*readonly*/ EUROPEAN_PORTUGUESE;
    public static /*readonly*/ RUSSIAN;
    public static /*readonly*/ JAPANESE;
    public static /*readonly*/ TRADITIONAL_CHINESE;
    public static /*readonly*/ SIMPLIFIED_CHINESE;
    public static /*readonly*/ KOREAN;

    static {
        this.AMERICAN_ENGLISH =    new class DateDayLanguages_AmericanEnglish extends DateDayLanguages {

        public newDayComponent(day: DayNumber,) {
            return day === 2 || day === 22
                ? <>{day}<sup>nd</sup></>
                : day === 3
                    ? <>3<sup>rd</sup></>
                    : <>{day}<sup>th</sup></>;
        }

    }   (ProjectLanguages.AMERICAN_ENGLISH,   );
        this.EUROPEAN_ENGLISH =    new class DateDayLanguages_EuropeanEnglish extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return DateDayLanguages.AMERICAN_ENGLISH.newDayComponent(day);
            }

        }   (ProjectLanguages.EUROPEAN_ENGLISH,   );
        this.CANADIAN_FRENCH =     new class DateDayLanguages_CanadianFrench extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return day === 1
                    ? <>{day}<sup>er</sup></>
                    : <>{day}</>;
            }

        }    (ProjectLanguages.CANADIAN_FRENCH,    );
        this.EUROPEAN_FRENCH =     new class DateDayLanguages_EuropeanFrench extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return DateDayLanguages.CANADIAN_FRENCH.newDayComponent(day);
            }

        }    (ProjectLanguages.EUROPEAN_FRENCH,    );
        this.GERMAN =              new class DateDayLanguages_German extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return <>{day === 1
                    ? 'der ' + day
                    : day}</>;
            }

        }            (ProjectLanguages.GERMAN,             );
        this.AMERICAN_SPANISH =    new class DateDayLanguages_AmericanSpanish extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return <>{day}</>;
            }

        }   (ProjectLanguages.AMERICAN_SPANISH,   );
        this.EUROPEAN_SPANISH =    new class DateDayLanguages_EuropeanSpanish extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return DateDayLanguages.AMERICAN_SPANISH.newDayComponent(day);
            }

        }   (ProjectLanguages.EUROPEAN_SPANISH,   );
        this.ITALIAN =             new class DateDayLanguages_Italian extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return <>{day === 1 ? 'il' : day}</>;
            }

        }           (ProjectLanguages.ITALIAN,            );
        this.DUTCH =               new class DateDayLanguages_Dutch extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return <>{day}</>;
            }

        }             (ProjectLanguages.DUTCH,              );
        this.AMERICAN_PORTUGUESE = new class DateDayLanguages_AmericanPortuguese extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return <>{day}</>;
            }

        }(ProjectLanguages.AMERICAN_PORTUGUESE,);
        this.EUROPEAN_PORTUGUESE = new class DateDayLanguages_EuropeanPortuguese extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return DateDayLanguages.AMERICAN_PORTUGUESE.newDayComponent(day);
            }

        }(ProjectLanguages.EUROPEAN_PORTUGUESE,);
        this.RUSSIAN =             new class DateDayLanguages_Russian extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return <>{day}</>;
            }

        }           (ProjectLanguages.RUSSIAN,            );
        this.JAPANESE =            new class DateDayLanguages_Japanese extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return <>{day}</>;
            }

        }          (ProjectLanguages.JAPANESE,           );
        this.TRADITIONAL_CHINESE = new class DateDayLanguages_TraditionalChinese extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return DateDayLanguages.JAPANESE.newDayComponent(day);
            }

        }(ProjectLanguages.TRADITIONAL_CHINESE,);
        this.SIMPLIFIED_CHINESE =  new class DateDayLanguages_SimplifiedChinese extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return DateDayLanguages.JAPANESE.newDayComponent(day);
            }

        } (ProjectLanguages.SIMPLIFIED_CHINESE, );
        this.KOREAN =              new class DateDayLanguages_Korean extends DateDayLanguages {

            public newDayComponent(day: DayNumber,) {
                return <>{day}</>;
            }

        }            (ProjectLanguages.KOREAN,             );
    }

    protected static readonly _DEFAULT = this.getValue(ProjectLanguages._DEFAULT);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: DateDayLanguages;

    protected static readonly _PARENT: StaticReference<ProjectLanguages> = ProjectLanguages;

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
        return this.getValue(ProjectLanguages.currentLanguage);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<DateDayLanguages> {
        return DateDayLanguages;
    }

    //region -------------------- Enum default methods --------------------

    public static get default(): DateDayLanguages {
        return this.getValue(ProjectLanguages.default)!;
    }

    //endregion -------------------- Enum default methods --------------------
    //region -------------------- Enum value methods --------------------

    protected static _getValueByEnumerable(value: Enumerable,) {
        return value instanceof ProjectLanguages
            ? this.values.find(enumerable => enumerable.reference === value) ?? null
            : null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals, >(ordinal: O,): EnumArray<DateDayLanguages>[O]
    public static getValue<O extends number, >(ordinal: O,): | NonNullable<EnumArray<DateDayLanguages>[O]> | null
    public static getValue<N extends Names, >(name: N,): typeof DateDayLanguages[N]
    public static getValue(nameOrAcronym: PossibleStringValue,): DateDayLanguages
    public static getValue(nameOrAcronym: string,): | DateDayLanguages | null
    public static getValue<I extends DateDayLanguages, >(instance: I,): I
    public static getValue(instance: ProjectLanguages,): DateDayLanguages
    public static getValue(instance: | EveryLanguages | ProjectLanguages,): | DateDayLanguages | null
    public static getValue(value: PossibleNonNullableValue,): DateDayLanguages
    public static getValue(value: PossibleValue,): | DateDayLanguages | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn<DateDayLanguages>(this, value,);
    }

    public static get values(): EnumArray<DateDayLanguages> {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}