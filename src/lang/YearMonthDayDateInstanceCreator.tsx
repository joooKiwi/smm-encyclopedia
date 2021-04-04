import {DateInstanceCreator, DayNumber, MonthNumber} from "./DateInstanceCreator";

export class YearMonthDayDateInstanceCreator
    implements DateInstanceCreator {

    readonly #yearCallback;
    readonly #contentBetweenYearAndMonth;
    readonly #dayCallback;
    readonly #contentBetweenMonthAndDay;
    readonly #monthCallback;

    public constructor(yearCallback: (year: number) => JSX.Element, contentBetweenYearAndMonth: string,
                       monthCallback: (month: MonthNumber) => JSX.Element, contentBetweenMonthAndDay: string,
                       dayCallback: (day: DayNumber) => JSX.Element,) {
        this.#yearCallback = yearCallback;
        this.#contentBetweenYearAndMonth = contentBetweenYearAndMonth;
        this.#monthCallback = monthCallback;
        this.#contentBetweenMonthAndDay = contentBetweenMonthAndDay;
        this.#dayCallback = dayCallback;
    }

    public get yearCallback() {
        return this.#yearCallback;
    }

    public get contentBetweenYearAndMonth() {
        return this.#contentBetweenYearAndMonth;
    }

    public get monthCallback() {
        return this.#monthCallback;
    }

    public get contentBetweenMonthAndDay() {
        return this.#contentBetweenMonthAndDay;
    }

    public get dayCallback() {
        return this.#dayCallback;
    }


    public createDate(day: DayNumber, month: MonthNumber, year: number) {
        return <>{this.yearCallback(year)}{this.contentBetweenYearAndMonth}{this.monthCallback(month)}{this.contentBetweenMonthAndDay}{this.dayCallback(day)}</>
    }

}