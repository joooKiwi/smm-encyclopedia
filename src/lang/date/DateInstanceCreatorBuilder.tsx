import {DateInstanceCreator, DayNumber, MonthNumber} from "./DateInstanceCreator";
import {DayMonthYearDateInstanceCreator} from "./DayMonthYearDateInstanceCreator";
import {YearMonthDayDateInstanceCreator} from "./YearMonthDayDateInstanceCreator";
import {MonthDayYearDateInstanceCreator} from "./MonthDayYearDateInstanceCreator";

export type PossibleDateInstanceCreatorType = 'day,month,year' | 'month,day,year' | 'year,month,day';
export type PossibleDayCallbackType = 'number' | 'firstAfterHover' | 'firstBefore' | 'firstReplace' | 'beforeText' | 'afterText' | 'custom';
export type PossibleMonthCallbackType = 'number' | 'array' | 'afterText' | 'custom';
export type PossibleYearCallbackType = 'number' | 'afterText' | 'custom';

export class DateInstanceCreatorBuilder {

    // static readonly DEFAULT_DAY_CALLBACK_TYPE: PossibleDayCallbackType = 'number';
    // static readonly DEFAULT_MONTH_CALLBACK_TYPE: PossibleMonthCallbackType = 'number';
    // static readonly DEFAULT_YEAR_CALLBACK_TYPE: PossibleYearCallbackType = 'number';

    readonly #order: PossibleDateInstanceCreatorType;
    readonly #firstText: string;
    readonly #secondText: string;

    #dayCallbackType: PossibleDayCallbackType;
    #monthCallbackType: PossibleMonthCallbackType;
    #yearCallbackType: PossibleYearCallbackType;

    #dayCallback!: (day: DayNumber) => JSX.Element;
    #monthCallback!: (month: MonthNumber) => JSX.Element;
    #yearCallback!: (year: number) => JSX.Element;

    public constructor(order: 'day,month,year', textBetweenDayAndMonth: string, textBetweenMonthAndYear: string)
    public constructor(order: 'month,day,year', textBetweenMonthAndDay: string, textBetweenDayAndYear: string)
    public constructor(order: 'year,month,day', textBetweenYearAndMonth: string, textBetweenMonthAndDay: string)
    public constructor(order: PossibleDateInstanceCreatorType, firstText: string, secondText: string) {
        this.#order = order;
        this.#firstText = firstText;
        this.#secondText = secondText;
        this.#dayCallbackType = 'number';
        this.#monthCallbackType = 'number';
        this.#yearCallbackType = 'number';
        this.setDays('number').setMonths('number').setYears('number');
    }

    protected get dayCallback() {
        return this.#dayCallback;
    }

    protected get monthCallback() {
        return this.#monthCallback;
    }

    protected get yearCallback() {
        return this.#yearCallback;
    }

    public setDays(type: 'number'): this
    public setDays(type: 'firstAfterHover', afterText: string): this
    public setDays(type: 'firstBefore', afterText: string): this
    public setDays(type: 'firstReplace', replacedText: string): this
    public setDays(type: 'beforeText', beforeText: string): this
    public setDays(type: 'afterText', afterText: string): this
    public setDays(type: 'custom', callback: (day: DayNumber) => JSX.Element): this
    public setDays(type: PossibleDayCallbackType, textOrCallback?: string | ((day: DayNumber) => JSX.Element)): this {
        switch (type) {
            case "number":
                this.#dayCallback = day => <>{day}</>;
                break;
            case "firstAfterHover":
                if (typeof textOrCallback !== 'string')
                    throw new EvalError('The after text type is not of type "string"');
                this.#dayCallback = day => day === 1
                    ? <>{day}<sup>{textOrCallback}</sup></>
                    : <>{day}</>;
                break;
            case "firstBefore":
                if (typeof textOrCallback !== 'string')
                    throw new EvalError('The before text type is not of type "string"');
                this.#dayCallback = day => day === 1
                    ? <>{textOrCallback}{day}</>
                    : <>{day}</>;
                break;
            case "firstReplace":
                if (typeof textOrCallback !== 'string')
                    throw new EvalError('The replace text type is not of type "string"');
                this.#dayCallback = day => day === 1
                    ? <>{textOrCallback}</>
                    : <>{day}</>;
                break;
            case "beforeText":
                if (typeof textOrCallback !== 'string')
                    throw new EvalError('The before text type is not of type "string"');
                this.#dayCallback = day => <>{textOrCallback}{day}</>;
                break;
            case "afterText":
                if (typeof textOrCallback !== 'string')
                    throw new EvalError('The after text type is not of type "string"');
                this.#dayCallback = day => <>{day}{textOrCallback}</>;
                break;
            case "custom":
                if (typeof textOrCallback !== 'function')
                    throw new EvalError('The callback type is not of type "function"');
                this.#dayCallback = textOrCallback;
                break;
        }
        this.#dayCallbackType = type;
        return this;
    }

    public setMonths(type: 'number'): this
    public setMonths(type: 'array', months: [string, string, string, string, string, string, string, string, string, string, string, string,]): this
    public setMonths(type: 'afterText', afterText: string): this
    public setMonths(type: 'custom', callback: (month: MonthNumber) => JSX.Element): this
    public setMonths(type: PossibleMonthCallbackType, monthsOrTextOrCallback?: [string, string, string, string, string, string, string, string, string, string, string, string,] | string | ((month: MonthNumber) => JSX.Element)): this {
        switch (type) {
            case "number":
                this.#monthCallback = month => <>{month}</>;
                break;
            case "array":
                if (!(monthsOrTextOrCallback instanceof Array))
                    throw new EvalError('The months type is not of type "array"');
                this.#monthCallback = month => <>{monthsOrTextOrCallback[month - 1]}</>;
                break;
            case "afterText":
                if (typeof monthsOrTextOrCallback !== 'string')
                    throw new EvalError('The after text type is not of type "string"');
                this.#monthCallback = month => <>{month}{monthsOrTextOrCallback}</>;
                break;
            case "custom":
                if (typeof monthsOrTextOrCallback !== 'function')
                    throw new EvalError('The callback type is not of type "function"');
                this.#monthCallback = monthsOrTextOrCallback;
                break;
        }
        this.#monthCallbackType = type;
        return this;

    }

    public setYears(type: 'number'): this
    public setYears(type: 'afterText', afterText: string): this
    public setYears(type: 'custom', callback: (year: number) => JSX.Element): this
    public setYears(type: PossibleYearCallbackType, textOrCallback?: string | ((year: number) => JSX.Element)): this {
        switch (type) {
            case "number":
                this.#yearCallback = year => <>{year}</>;
                break;
            case "afterText":
                if (typeof textOrCallback !== 'string')
                    throw new EvalError('The after text type is not of type "string"');
                this.#yearCallback = year => <>{year}{textOrCallback}</>;
                break;
            case "custom":
                if (typeof textOrCallback !== 'function')
                    throw new EvalError('The callback type is not of type "function"');
                this.#yearCallback = textOrCallback;
                break;
        }
        this.#monthCallbackType = type;
        return this;

    }

    public build(): DateInstanceCreator {
        switch (this.#order) {
            case 'day,month,year':
                return new DayMonthYearDateInstanceCreator(this.dayCallback, this.#firstText, this.monthCallback, this.#secondText, this.yearCallback,);
            case 'month,day,year':
                return new MonthDayYearDateInstanceCreator(this.monthCallback, this.#firstText, this.dayCallback, this.#secondText, this.yearCallback,);
            case 'year,month,day':
                return new YearMonthDayDateInstanceCreator(this.yearCallback, this.#firstText, this.monthCallback, this.#secondText, this.dayCallback,);
        }
    }


}