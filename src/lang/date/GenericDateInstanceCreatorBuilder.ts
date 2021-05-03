import {DateInstanceCreator, DayNumber, MonthNumber} from "./DateInstanceCreator";

export abstract class GenericDateInstanceCreatorBuilder
    implements DateInstanceCreator {

    public createDate(date: Date): JSX.Element
    public createDate(day: DayNumber, month: MonthNumber, year: number): JSX.Element
    public createDate(dayOrDate: Date | DayNumber, month?: MonthNumber, year?: number): JSX.Element {
        const [finalDay, finalMonth, finalYear] = dayOrDate instanceof Date
            ? [dayOrDate.getUTCDate() as DayNumber, dayOrDate.getUTCMonth() + 1 as MonthNumber, dayOrDate.getUTCFullYear()]
            : [dayOrDate, month as MonthNumber, year as number];
        return this._createDate(finalDay, finalMonth, finalYear);
    }

    protected abstract _createDate(day: DayNumber, month?: MonthNumber, year?: number): JSX.Element;

}