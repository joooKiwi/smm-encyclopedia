import type {DayNumber}                                       from './types'
import type {EnumArray, Names, Ordinals, PossibleStringValue} from '../ProjectLanguages.types'
import type {Enumerable}                                      from '../../util/enum/Enumerable'
import type {EveryLanguages}                                  from '../EveryLanguages'
import type {PossibleNonNullableValue, PossibleValue}         from './DateDayLanguages.types'
import type {StaticReference}                                 from '../../util/enum/Enum.types'

import {Enum}             from '../../util/enum/Enum'
import {ProjectLanguages} from '../ProjectLanguages'

export abstract class DateDayLanguages
    extends ProjectLanguages {

    //region -------------------- Enum instances --------------------

    public static override readonly AMERICAN_ENGLISH =    new class DateDayLanguages_AmericanEnglish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return day === 1 || day === 21 || day === 31
                ? <>{day}<sup>st</sup></>
                : day === 2 || day === 22
                    ? <>{day}<sup>nd</sup></>
                    : day === 3
                        ? <>3<sup>rd</sup></>
                        : <>{day}<sup>th</sup></>
        }

    }   (ProjectLanguages.AMERICAN_ENGLISH,   )
    public static override readonly EUROPEAN_ENGLISH =    new class DateDayLanguages_EuropeanEnglish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_ENGLISH.newDayComponent(day)
        }

    }   (ProjectLanguages.EUROPEAN_ENGLISH,   )
    public static override readonly CANADIAN_FRENCH =     new class DateDayLanguages_CanadianFrench extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return day === 1
                ? <>{day}<sup>er</sup></>
                : <>{day}</>
        }

    }    (ProjectLanguages.CANADIAN_FRENCH,    )
    public static override readonly EUROPEAN_FRENCH =     new class DateDayLanguages_EuropeanFrench extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.CANADIAN_FRENCH.newDayComponent(day)
        }

    }    (ProjectLanguages.EUROPEAN_FRENCH,    )
    public static override readonly GERMAN =              new class DateDayLanguages_German extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day === 1
                ? 'der ' + day
                : day}</>
        }

    }            (ProjectLanguages.GERMAN,             )
    public static override readonly AMERICAN_SPANISH =    new class DateDayLanguages_AmericanSpanish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }   (ProjectLanguages.AMERICAN_SPANISH,   )
    public static override readonly EUROPEAN_SPANISH =    new class DateDayLanguages_EuropeanSpanish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_SPANISH.newDayComponent(day)
        }

    }   (ProjectLanguages.EUROPEAN_SPANISH,   )
    public static override readonly ITALIAN =             new class DateDayLanguages_Italian extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day === 1 ? 'il' : day}</>
        }

    }           (ProjectLanguages.ITALIAN,            )
    public static override readonly DUTCH =               new class DateDayLanguages_Dutch extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }             (ProjectLanguages.DUTCH,              )
    public static override readonly AMERICAN_PORTUGUESE = new class DateDayLanguages_AmericanPortuguese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }(ProjectLanguages.AMERICAN_PORTUGUESE,)
    public static override readonly EUROPEAN_PORTUGUESE = new class DateDayLanguages_EuropeanPortuguese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_PORTUGUESE.newDayComponent(day)
        }

    }(ProjectLanguages.EUROPEAN_PORTUGUESE,)
    public static override readonly RUSSIAN =             new class DateDayLanguages_Russian extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }           (ProjectLanguages.RUSSIAN,            )
    public static override readonly JAPANESE =            new class DateDayLanguages_Japanese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }          (ProjectLanguages.JAPANESE,           )
    public static override readonly TRADITIONAL_CHINESE = new class DateDayLanguages_TraditionalChinese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day)
        }

    }(ProjectLanguages.TRADITIONAL_CHINESE,)
    public static override readonly SIMPLIFIED_CHINESE =  new class DateDayLanguages_SimplifiedChinese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day)
        }

    } (ProjectLanguages.SIMPLIFIED_CHINESE, )
    public static override readonly KOREAN =              new class DateDayLanguages_Korean extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }            (ProjectLanguages.KOREAN,             )

    protected static override readonly _DEFAULT = this.getValue(ProjectLanguages._DEFAULT)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: DateDayLanguages

    protected static override readonly _PARENT: StaticReference<ProjectLanguages> = ProjectLanguages

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #reference

    //endregion -------------------- Fields --------------------

    private constructor(language: ProjectLanguages,) {
        super(language)
        this.#reference = language
    }

    //region -------------------- Getter methods --------------------

    public get reference() {
        return this.#reference
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract newDayComponent(day: DayNumber,): JSX.Element


    public static override get currentLanguage(): DateDayLanguages {
        return this.getValue(ProjectLanguages.currentLanguage)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<DateDayLanguages> {
        return DateDayLanguages
    }

    //region -------------------- Enum default methods --------------------

    public static override get default(): DateDayLanguages {
        return this.getValue(ProjectLanguages.default)!
    }

    //endregion -------------------- Enum default methods --------------------
    //region -------------------- Enum value methods --------------------

    protected static override _getValueByEnumerable(value: Enumerable,) {
        return value instanceof ProjectLanguages
            ? this.values.find(enumerable => enumerable.reference === value) ?? null
            : null
    }

    public static override getValue(nullValue: | null | undefined,): null
    public static override getValue<O extends Ordinals, >(ordinal: O,): EnumArray<DateDayLanguages>[O]
    public static override getValue<O extends number, >(ordinal: O,): | NonNullable<EnumArray<DateDayLanguages>[O]> | null
    public static override getValue<N extends Names, >(name: N,): typeof DateDayLanguages[N]
    public static override getValue(nameOrAcronym: PossibleStringValue,): DateDayLanguages
    public static override getValue(nameOrAcronym: string,): | DateDayLanguages | null
    public static override getValue<I extends DateDayLanguages, >(instance: I,): I
    public static override getValue(instance: ProjectLanguages,): DateDayLanguages
    public static override getValue(instance: | EveryLanguages | ProjectLanguages,): | DateDayLanguages | null
    public static override getValue(value: PossibleNonNullableValue,): DateDayLanguages
    public static override getValue(value: PossibleValue,): | DateDayLanguages | null
    public static override getValue(value: PossibleValue,) {
        return Enum.getValueOn<DateDayLanguages>(this, value,)
    }

    public static override get values(): EnumArray<DateDayLanguages> {
        return Enum.getValuesOn(this)
    }

    //endregion -------------------- Enum value methods --------------------

    public static override [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}