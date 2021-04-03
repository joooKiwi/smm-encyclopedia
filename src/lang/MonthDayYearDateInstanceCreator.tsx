import {DateInstanceCreator, DayNumber, MonthNumber} from "./DateInstanceCreator";

export class MonthDayYearDateInstanceCreator
    implements DateInstanceCreator {

    readonly #monthCallback;
    readonly #contentBetweenMonthAndDay;
    readonly #dayCallback;
    readonly #contentBetweenDayAndYear;
    readonly #yearCallback;

    public constructor(monthCallback: (month: MonthNumber) => JSX.Element, contentBetweenMonthAndDay: string,
                       dayCallback: (day: DayNumber) => JSX.Element, contentBetweenDayAndYear: string,
                       yearCallback: (year: number) => JSX.Element,) {
        this.#monthCallback = monthCallback;
        this.#contentBetweenMonthAndDay = contentBetweenMonthAndDay;
        this.#dayCallback = dayCallback;
        this.#contentBetweenDayAndYear = contentBetweenDayAndYear;
        this.#yearCallback = yearCallback;
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

    public get contentBetweenDayAndYear() {
        return this.#contentBetweenDayAndYear;
    }

    public get yearCallback() {
        return this.#yearCallback;
    }


    public createDate(day: DayNumber, month: MonthNumber, year: number) {
        return <>{this.monthCallback(month)}{this.contentBetweenMonthAndDay}{this.dayCallback(day)}{this.contentBetweenDayAndYear}{this.yearCallback(year)}</>
    }

}