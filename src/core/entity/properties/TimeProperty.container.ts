import type {ExtendedMap}  from '../../../util/extended/ExtendedMap';
import type {TimeProperty} from './TimeProperty';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';
import {Times}                from '../../time/Times';

/**
 * @multiton
 * @provider
 * @todo change Times to a dynamic import
 */
export class TimePropertyContainer
    implements TimeProperty {

    //region -------------------- Predefined containers --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, TimePropertyContainer> = new ExtendedMapContainer();

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #isInDayTheme;
    readonly #isInNightTheme;

    private constructor([isInDayTheme, isInNightTheme,]: ArgumentsReceived,) {
        this.#isInDayTheme = isInDayTheme;
        this.#isInNightTheme = isInNightTheme;
    }


    public get isInDayTheme() {
        return this.#isInDayTheme;
    }

    public get isInNightTheme() {
        return this.#isInNightTheme;
    }

    public toTimeMap(): Map<Times, boolean> {
        return new Map(Times.values.map(time => [time, time.get(this),]));
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get<DAY extends boolean = boolean, NIGHT extends | boolean | null = | boolean | null, >(isInDayTheme: DAY, isInNightTheme: NIGHT,): TimeProperty<DAY, NIGHT>
    /**
     * Get a property instance based on the {@link Times} properties.
     *
     * @param argumentsReceived
     * @noDuplicateInstanceCreation
     */
    public static get(...argumentsReceived: ArgumentsReceived) {
        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new this(argumentsReceived,)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [isInDayTheme: boolean, isInNightTheme: | boolean | null,];
