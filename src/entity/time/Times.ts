import {PropertyGetter}   from '../PropertyGetter';
import {IsInTimeProperty} from '../properties/IsInTimeProperty';

export type PossibleTimeName = 'Day' | 'Night';

/**
 * @enum
 */
export abstract class Times
    implements PropertyGetter<PossibleTimeName, IsInTimeProperty> {
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

    private static __VALUES: readonly Times[];

    readonly #englishName;

    private constructor(englishName: PossibleTimeName) {
        this.#englishName = englishName;
    }

    public get englishName(): PossibleTimeName {
        return this.#englishName;
    }

    public abstract get(property: IsInTimeProperty): boolean;


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

}