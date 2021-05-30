import {DayNumber, MonthNumber}            from './DateInstanceCreator';
import {GenericDateInstanceCreatorBuilder} from './GenericDateInstanceCreatorBuilder';

export class DayMonthYearDateInstanceCreator
    extends GenericDateInstanceCreatorBuilder {

    //region -------------------- Attributes --------------------

    readonly #dayCallback;
    readonly #contentBetweenDayAndMonth;
    readonly #monthCallback;
    readonly #contentBetweenMonthAndYear;
    readonly #yearCallback;

    //endregion -------------------- Attributes --------------------

    public constructor(dayCallback: (day: DayNumber) => JSX.Element, contentBetweenDayAndMonth: string,
                       monthCallback: (month: MonthNumber) => JSX.Element, contentBetweenMonthAndYear: string,
                       yearCallback: (year: number) => JSX.Element,) {
        super();
        this.#dayCallback = dayCallback;
        this.#contentBetweenDayAndMonth = contentBetweenDayAndMonth;
        this.#monthCallback = monthCallback;
        this.#contentBetweenMonthAndYear = contentBetweenMonthAndYear;
        this.#yearCallback = yearCallback;
    }


    public get dayCallback() {
        return this.#dayCallback;
    }

    public get contentBetweenDayAndMonth() {
        return this.#contentBetweenDayAndMonth;
    }

    public get monthCallback() {
        return this.#monthCallback;
    }

    public get contentBetweenMonthAndYear() {
        return this.#contentBetweenMonthAndYear;
    }

    public get yearCallback() {
        return this.#yearCallback;
    }


    protected _createDate(day: DayNumber, month: MonthNumber, year: number): JSX.Element {
        return <>{this.dayCallback(day)}{this.contentBetweenDayAndMonth}{this.monthCallback(month)}{this.contentBetweenMonthAndYear}{this.yearCallback(year)}</>;
    }

}