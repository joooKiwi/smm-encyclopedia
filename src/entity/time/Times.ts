import type {PossibleTimeName, TimesArray, TimesNames, TimesOrdinals} from './Times.types';
import type {PropertyGetter}                                          from '../PropertyGetter';
import type {TimeProperty}                                from '../properties/TimeProperty';

import {Enum} from '../../util/enum/Enum';

export abstract class Times
    extends Enum<TimesOrdinals, TimesNames>
    implements PropertyGetter<PossibleTimeName, TimeProperty> {

    //region -------------------- Enum instances --------------------

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

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: TimesArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleTimeName,) {
        super(Times);
        this.#englishName = englishName;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleTimeName {
        return this.#englishName;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: TimeProperty): boolean;

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: null | undefined,): null
    public static getValue<O extends TimesOrdinals = TimesOrdinals, >(ordinal: O,): TimesArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<TimesArray[O]> | null
    public static getValue(name: | PossibleTimeName | TimesNames,): Times
    public static getValue(name: string,): | Times | null
    public static getValue<I extends Times = Times, >(instance: I,): I
    public static getValue(value: | Times | string | number | null | undefined,): | Times | null
    public static getValue(value: | Times | string | number | null | undefined,): | Times | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(theme => theme.englishName === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): TimesArray {
        return this.#VALUES ??= [
            this.DAY,
            this.NIGHT,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
