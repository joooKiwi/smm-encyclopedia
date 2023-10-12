import type {PossibleEnumerableValueBy, Singleton}                                                 from '@joookiwi/enumerable'
import {CompanionEnumWithParent, EnumWithParent, NullEnumerableException, UnhandledValueException} from '@joookiwi/enumerable'

import type {Names, Ordinals}                           from 'lang/ProjectLanguages.types'
import type {CompanionEnumDeclaration_DateDayLanguages} from 'lang/date/DateDayLanguages.companionEnumDeclaration'
import type {ClassWithIsCurrent}                        from 'util/enumerable/ClassWithIsCurrent'

import {EveryLanguages}   from 'lang/EveryLanguages'
import {ProjectLanguages} from 'lang/ProjectLanguages'

export abstract class DateDayLanguages
    extends EnumWithParent<ProjectLanguages, Ordinals, Names>
    implements ClassWithIsCurrent {

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

    }   ()
    public static readonly EUROPEAN_ENGLISH =    new class DateDayLanguages_EuropeanEnglish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_ENGLISH.newDayComponent(day)
        }

    }   ()
    public static readonly CANADIAN_FRENCH =     new class DateDayLanguages_CanadianFrench extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return day === 1
                ? <>{day}<sup>er</sup></>
                : <>{day}</>
        }

    }    ()
    public static readonly EUROPEAN_FRENCH =     new class DateDayLanguages_EuropeanFrench extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.CANADIAN_FRENCH.newDayComponent(day)
        }

    }    ()
    public static readonly GERMAN =              new class DateDayLanguages_German extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day === 1
                ? 'der ' + day
                : day}</>
        }

    }            ()
    public static readonly AMERICAN_SPANISH =    new class DateDayLanguages_AmericanSpanish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }   ()
    public static readonly EUROPEAN_SPANISH =    new class DateDayLanguages_EuropeanSpanish extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_SPANISH.newDayComponent(day)
        }

    }   ()
    public static readonly ITALIAN =             new class DateDayLanguages_Italian extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day === 1 ? 'il' : day}</>
        }

    }           ()
    public static readonly DUTCH =               new class DateDayLanguages_Dutch extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }             ()
    public static readonly AMERICAN_PORTUGUESE = new class DateDayLanguages_AmericanPortuguese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }()
    public static readonly EUROPEAN_PORTUGUESE = new class DateDayLanguages_EuropeanPortuguese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.AMERICAN_PORTUGUESE.newDayComponent(day)
        }

    }()
    public static readonly RUSSIAN =             new class DateDayLanguages_Russian extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }           ()
    public static readonly JAPANESE =            new class DateDayLanguages_Japanese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }          ()
    public static readonly TRADITIONAL_CHINESE = new class DateDayLanguages_TraditionalChinese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day)
        }

    }()
    public static readonly SIMPLIFIED_CHINESE =  new class DateDayLanguages_SimplifiedChinese extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return DateDayLanguages.JAPANESE.newDayComponent(day)
        }

    } ()
    public static readonly KOREAN =              new class DateDayLanguages_Korean extends DateDayLanguages {

        public override newDayComponent(day: DayNumber,) {
            return <>{day}</>
        }

    }            ()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_DateDayLanguages> = class CompanionEnum_DateDayLanguages
        extends CompanionEnumWithParent<DateDayLanguages, typeof DateDayLanguages, ProjectLanguages, typeof ProjectLanguages>
        implements CompanionEnumDeclaration_DateDayLanguages {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_DateDayLanguages

        private constructor() {
            super(DateDayLanguages, ProjectLanguages,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_DateDayLanguages()
        }

        //endregion -------------------- Singleton usage --------------------

        public override get defaultValue(): DateDayLanguages {
            return DateDayLanguages.CompanionEnum.get.getValue(ProjectLanguages.CompanionEnum.get.defaultValue,)
        }

        public override set defaultValue(value: unknown,) {
            if (value == null)
                throw new NullEnumerableException('No null value was expected to be set on the DateDayLanguages.defaultValue setter method',)
            throw new UnhandledValueException('No value was expected to be set on the DateDayLanguages.defaultValue setter method', value,)
        }

        public override setDefaultValue(value: unknown,): never {
            if (value == null)
                throw new NullEnumerableException('No null value was expected to be set on the DateDayLanguages.defaultValue setter method',)
            throw new UnhandledValueException('No value was expected to be set on the DateDayLanguages.defaultValue setter method', value,)
        }


        public get currentOrNull(): NullOr<DateDayLanguages> {
            const value = ProjectLanguages.CompanionEnum.get.currentOrNull
            if (value == null)
                return null
            return this.getValueByLanguage(value,)
        }

        public get current(): DateDayLanguages {
            return this.getValueByLanguage(ProjectLanguages.CompanionEnum.get.current,)
        }

        public set current(value: PossibleEnumerableValueBy<| DateDayLanguages | ProjectLanguages | EveryLanguages>,) {
            ProjectLanguages.CompanionEnum.get.current = this.getValueByLanguage(value,).parent
        }



        public getValueByLanguage(value: Nullable<PossibleEnumerableValueBy<| ProjectLanguages | DateDayLanguages | EveryLanguages>>,): DateDayLanguages {
            if (value instanceof EveryLanguages)
                return this._getValueFromValuesByParent(ProjectLanguages.CompanionEnum.get.getValueByLanguage(value,),)
            return this._getValue(value,)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Constructor --------------------

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get isCurrent(): boolean {
        return this === DateDayLanguages.CompanionEnum.get.currentOrNull
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract newDayComponent(day: DayNumber,): ReactJSXElement

    //endregion -------------------- Methods --------------------

}
