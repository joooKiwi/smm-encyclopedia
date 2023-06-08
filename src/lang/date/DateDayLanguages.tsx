import type {CollectionHolder, CompanionEnumWithParentDeclaration, EnumerableWithParent, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable/dist/types'
import {CompanionEnumWithParent, Enum}                                                                                         from '@joookiwi/enumerable'

import type {DayNumber}        from 'lang/date/types'
import type {Names, Ordinals}  from 'lang/ProjectLanguages.types'
import type {ClassWithCurrent} from 'util/enumerable/ClassWithCurrent'
import type {Nullable, NullOr} from 'util/types/nullable'

import {EveryLanguages}   from 'lang/EveryLanguages'
import {ProjectLanguages} from 'lang/ProjectLanguages'

export abstract class DateDayLanguages
    extends Enum<Ordinals, Names>
    implements EnumerableWithParent<Ordinals, Names, ProjectLanguages> {

    //region -------------------- Enum instances --------------------

    public static readonly AMERICAN_ENGLISH =    new class DateDayLanguages_AmericanEnglish extends DateDayLanguages {

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
    public static readonly EUROPEAN_ENGLISH =    new class DateDayLanguages_EuropeanEnglish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_ENGLISH.newDayComponent(day)
        }

    }   (ProjectLanguages.EUROPEAN_ENGLISH,   )
    public static readonly CANADIAN_FRENCH =     new class DateDayLanguages_CanadianFrench extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return day === 1
                ? <>{day}<sup>er</sup></>
                : <>{day}</>
        }

    }    (ProjectLanguages.CANADIAN_FRENCH,    )
    public static readonly EUROPEAN_FRENCH =     new class DateDayLanguages_EuropeanFrench extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.CANADIAN_FRENCH.newDayComponent(day)
        }

    }    (ProjectLanguages.EUROPEAN_FRENCH,    )
    public static readonly GERMAN =              new class DateDayLanguages_German extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day === 1
                ? 'der ' + day
                : day}</>
        }

    }            (ProjectLanguages.GERMAN,             )
    public static readonly AMERICAN_SPANISH =    new class DateDayLanguages_AmericanSpanish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }   (ProjectLanguages.AMERICAN_SPANISH,   )
    public static readonly EUROPEAN_SPANISH =    new class DateDayLanguages_EuropeanSpanish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_SPANISH.newDayComponent(day)
        }

    }   (ProjectLanguages.EUROPEAN_SPANISH,   )
    public static readonly ITALIAN =             new class DateDayLanguages_Italian extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day === 1 ? 'il' : day}</>
        }

    }           (ProjectLanguages.ITALIAN,            )
    public static readonly DUTCH =               new class DateDayLanguages_Dutch extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }             (ProjectLanguages.DUTCH,              )
    public static readonly AMERICAN_PORTUGUESE = new class DateDayLanguages_AmericanPortuguese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }(ProjectLanguages.AMERICAN_PORTUGUESE,)
    public static readonly EUROPEAN_PORTUGUESE = new class DateDayLanguages_EuropeanPortuguese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_PORTUGUESE.newDayComponent(day)
        }

    }(ProjectLanguages.EUROPEAN_PORTUGUESE,)
    public static readonly RUSSIAN =             new class DateDayLanguages_Russian extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }           (ProjectLanguages.RUSSIAN,            )
    public static readonly JAPANESE =            new class DateDayLanguages_Japanese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }          (ProjectLanguages.JAPANESE,           )
    public static readonly TRADITIONAL_CHINESE = new class DateDayLanguages_TraditionalChinese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day)
        }

    }(ProjectLanguages.TRADITIONAL_CHINESE,)
    public static readonly SIMPLIFIED_CHINESE =  new class DateDayLanguages_SimplifiedChinese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day)
        }

    } (ProjectLanguages.SIMPLIFIED_CHINESE, )
    public static readonly KOREAN =              new class DateDayLanguages_Korean extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }            (ProjectLanguages.KOREAN,             )

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumWithParentDeclaration<DateDayLanguages, typeof DateDayLanguages, ProjectLanguages, typeof ProjectLanguages>> = class CompanionEnum_DateDayLanguages
        extends CompanionEnumWithParent<DateDayLanguages, typeof DateDayLanguages, ProjectLanguages, typeof ProjectLanguages> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_DateDayLanguages

        private constructor() {
            super(DateDayLanguages, ProjectLanguages,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_DateDayLanguages()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Companion --------------------

    /**
     * The reference of the static methods applicable to the class {@link DateDayLanguages}
     *
     * @see https://kotlinlang.org/docs/object-declarations.html#companion-objects
     * @singleton
     */
    public static readonly Companion2 = class Companion_DateDayLanguages
        implements ClassWithCurrent<DateDayLanguages> {

        //region -------------------- Singleton usage --------------------

        static #instance?: Companion_DateDayLanguages

        private constructor() {
        }

        public static get get() {
            return this.#instance ??= new this()
        }

        //endregion -------------------- Singleton usage --------------------

        public get currentOrNull(): NullOr<DateDayLanguages> {
            const value = ProjectLanguages.currentOrNull
            return value == null ? null : DateDayLanguages.getValueByLanguage(value)
        }

        public get current(): DateDayLanguages {
            return DateDayLanguages.getValueByLanguage(ProjectLanguages.current)
        }

        public set current(value: PossibleEnumerableValueBy<| DateDayLanguages | ProjectLanguages | EveryLanguages>,) {
            ProjectLanguages.current = DateDayLanguages.getValue(value).parent
        }

    }

    //endregion -------------------- Companion --------------------
    //region -------------------- Fields --------------------

    readonly #parent

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(parent: ProjectLanguages,) {
        super()
        this.#parent = parent
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public get parent() {
        return this.#parent
    }

    //region -------------------- Getter & setter methods (current) --------------------

    public get isCurrent(): boolean {
        return this === DateDayLanguages.currentOrNull
    }


    /**
     * Get the current {@link ProjectLanguages language} that may be initialized
     *
     * @see EveryLanguages.currentOrNull
     */
    public static get currentOrNull(): NullOr<DateDayLanguages> {
        return DateDayLanguages.Companion2.get.currentOrNull
    }

    /**
     * Get the non-nullable current {@link DateDayLanguages language}
     *
     * @throws ReferenceError The current {@link DateDayLanguages language} has not been initialized yet
     * @see ProjectLanguages.current
     */
    public static get current(): DateDayLanguages {
        return this.Companion2.get.current
    }

    /**
     * Set the current {@link DateDayLanguages language} held in the {@link DateDayLanguages.Companion2}
     *
     * @param value The {@link DateDayLanguages language} to set as the current one
     * @see ProjectLanguages.current
     */
    public static set current(value: PossibleEnumerableValueBy<| EveryLanguages | ProjectLanguages | DateDayLanguages>,) {
        this.Companion2.get.current = value
    }

    //endregion -------------------- Getter & setter methods (current) --------------------

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    public abstract newDayComponent(day: DayNumber,): JSX.Element


    // public static override getValueByLanguage<T,>(value: T,): DateDayLanguagesByLanguage<T>
    public static getValueByLanguage(value: Nullable<| DateDayLanguages | ProjectLanguages | EveryLanguages | string>,): DateDayLanguages {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof DateDayLanguages)
            return value
        const languageFound = ProjectLanguages.getValueByLanguage(value),
            valueFound = this.values.find(it => it.parent === languageFound)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static get default(): DateDayLanguages {
        return DateDayLanguages.getValue(ProjectLanguages.default)
    }

    public static getValue(value: PossibleEnumerableValueBy<| ProjectLanguages | DateDayLanguages | EveryLanguages>,): DateDayLanguages {
        return value instanceof EveryLanguages
            ? DateDayLanguages.CompanionEnum.get.getValue(DateDayLanguages.getValueByLanguage(value,),)
            : DateDayLanguages.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<DateDayLanguages> {
        return DateDayLanguages.CompanionEnum.get.values
    }

    public static override* [Symbol.iterator](): IterableIterator<DateDayLanguages> {
        yield* DateDayLanguages.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
