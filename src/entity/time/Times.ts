import {PropertyGetter}   from '../PropertyGetter';
import {IsInTimeProperty} from '../properties/IsInTimeProperty';

//region -------------------- time texts --------------------

export type PossibleTimeName = 'Day' | 'Night';

//endregion -------------------- time texts --------------------

/**
 * @enum
 */
export abstract class Times
    implements PropertyGetter<PossibleTimeName, IsInTimeProperty> {

    //region -------------------- enum instances --------------------

    public static readonly DAY = new class extends Times {
        public get(property: IsInTimeProperty): boolean {
            return property.isInDayTheme;
        }
    }('Day');
    public static readonly NIGHT = new class extends Times {
        public get(property: IsInTimeProperty): boolean {
            return property.isInNightTheme === true;
        }
    }('Night');

    //endregion -------------------- enum instances --------------------

    private static __VALUES: readonly Times[];
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleTimeName) {
        this.#englishName = englishName;
    }

    //region -------------------- Methods --------------------

    public get englishName(): PossibleTimeName {
        return this.#englishName;
    }

    public abstract get(property: IsInTimeProperty): boolean;

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public static getValue(value: Times | PossibleTimeName): Times
    public static getValue(value: string): Times | null
    public static getValue(value: Times | string): Times | null
    public static getValue(value: Times | string): Times | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): readonly Times[] {
        return this.__VALUES ?? (this.__VALUES = [
            this.DAY,
            this.NIGHT,
        ]);
    }

    public static* [Symbol.iterator]() {
        for (const value of this.values)
            yield value;
    }

    //endregion -------------------- enum methods --------------------

}
