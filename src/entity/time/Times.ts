import type {PropertyGetter} from '../PropertyGetter';
import type {TimeProperty}   from '../properties/TimeProperty';
import {SimpleEnum}          from '../../util/enum/EnumTypes';


//region -------------------- time texts --------------------

export type PossibleTimeName = | 'Day' | 'Night';

//endregion -------------------- time texts --------------------
//region -------------------- Enum types --------------------

export type TimesOrdinals = | 0 | 1;
export type TimesNames = | 'DAY' | 'NIGHT';
export type SimpleTimes<T = Times, > = SimpleEnum<TimesNames, T>;
export type TimesArray<T = Times, > = readonly [
    SimpleTimes<T>['DAY'],
    SimpleTimes<T>['NIGHT'],
];

//endregion -------------------- Enum types --------------------

/**
 * @enum
 */
export abstract class Times
    implements PropertyGetter<PossibleTimeName, TimeProperty> {

    //region -------------------- enum instances --------------------

    public static readonly DAY =   new class Times_Day extends Times {

        public get(property: TimeProperty,): boolean {
            return property.isInDayTheme;
        }

    }  ('Day',);
    public static readonly NIGHT = new class Times_Night extends Times {

        public get(property: TimeProperty,): boolean {
            return property.isInNightTheme === true;
        }

    }('Night',);

    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: TimesArray;
    static #LAST_ORDINAL: TimesOrdinals = 0;
    readonly #ordinal: TimesOrdinals;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleTimeName,) {
        this.#ordinal = Times.#LAST_ORDINAL++ as TimesOrdinals;
        this.#englishName = englishName;
    }

    //region -------------------- Methods --------------------

    public get englishName(): PossibleTimeName {
        return this.#englishName;
    }

    public abstract get(property: TimeProperty): boolean;

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public get ordinal(): TimesOrdinals {
        return this.#ordinal;
    }

    public static getValue(value: | Times | PossibleTimeName,): Times
    public static getValue(value: string,): | Times | null
    public static getValue(value: | Times | string,): | Times | null
    public static getValue(value: | Times | string,): | Times | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): readonly Times[] {
        return this.#VALUES ?? (this.#VALUES = [
            this.DAY,
            this.NIGHT,
        ]);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- enum methods --------------------

}
