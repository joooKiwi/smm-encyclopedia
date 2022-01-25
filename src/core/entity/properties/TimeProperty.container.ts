import type {EnumArray}    from '../../time/Times.types';
import type {ExtendedMap}  from '../../../util/extended/ExtendedMap';
import type {TimeProperty} from './TimeProperty';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';
import type {Times}           from '../../time/Times';

/**
 * @multiton
 * @provider
 * @classWithDynamicImport
 */
export class TimePropertyContainer
    implements TimeProperty {

    //region -------------------- Attributes --------------------

    static #values?: EnumArray;
    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, TimePropertyContainer> = new ExtendedMapContainer();

    #map?: ReadonlyMap<Times, boolean>;
    readonly #isInDayTheme;
    readonly #isInNightTheme;

    //endregion -------------------- Attributes --------------------

    private constructor([isInDayTheme, isInNightTheme,]: ArgumentsReceived,) {
        this.#isInDayTheme = isInDayTheme;
        this.#isInNightTheme = isInNightTheme;
    }

    //region -------------------- Getter methods --------------------

    private static get __values(): EnumArray {
        return this.#values ??= require('../../time/Times').Times.values;
    }


    public get isInDayTheme() {
        return this.#isInDayTheme;
    }

    public get isInNightTheme() {
        return this.#isInNightTheme;
    }

    //endregion -------------------- Getter methods --------------------

    public toTimeMap(): ReadonlyMap<Times, boolean> {
        return this.#map ??= new Map(TimePropertyContainer.__values.map(time => [time, time.get(this),]));
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
