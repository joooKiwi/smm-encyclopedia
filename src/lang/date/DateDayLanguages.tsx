import type {CollectionHolder, EnumerableConstructorWithDefault, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                               from '@joookiwi/enumerable'

import type {DayNumber}       from 'lang/date/types'
import type {EveryLanguages}  from 'lang/EveryLanguages'
import type {Names, Ordinals} from 'lang/ProjectLanguages.types'
import type {Nullable}        from 'util/types/nullable'

import {ProjectLanguages} from 'lang/ProjectLanguages'

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

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: DateDayLanguages
    protected static override readonly _DEFAULT = this.getValueByLanguage(ProjectLanguages._DEFAULT)

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

    // public static override getValueByLanguage<T,>(value: T,): DateDayLanguagesByLanguage<T>
    public static override getValueByLanguage(value: Nullable<| DateDayLanguages | ProjectLanguages | EveryLanguages | string>,): DateDayLanguages {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof DateDayLanguages)
            return value
        const languageFound = super.getValueByLanguage(value),
            valueFound = this.values.find(it => it.reference === languageFound)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructorWithDefault<Ordinals, Names> {
        return DateDayLanguages
    }

    public static override get default(): DateDayLanguages {
        return this.getValueByLanguage(ProjectLanguages.default)
    }

    public static override getValue(value: PossibleValueByEnumerable<| ProjectLanguages | DateDayLanguages>,) {
        return Enum.getValueOn<DateDayLanguages>(this, value,)
    }

    public static override get values(): CollectionHolder<DateDayLanguages> {
        return Enum.getValuesOn(this,)
    }

    public static override* [Symbol.iterator](): IterableIterator<DateDayLanguages> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}