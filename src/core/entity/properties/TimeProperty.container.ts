import type {ExtendedMap}  from '../../../util/extended/ExtendedMap';
import type {TimeProperty} from './TimeProperty';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';
import {Import}               from '../../../util/DynamicImporter';
import type {Times}           from '../../time/Times';

/**
 * @multiton
 * @provider
 * @classWithDynamicImport {@link Times}
 */
export class TimePropertyContainer
    implements TimeProperty {

    //region -------------------- Fields, constructor & methods --------------------

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, TimeProperty> = new ExtendedMapContainer();

    #map?: ReadonlyMap<Times, boolean>;
    readonly #isInDayTheme;
    readonly #isInNightTheme;

    //endregion -------------------- Fields --------------------

    private constructor([isInDayTheme, isInNightTheme,]: ArgumentsReceived,) {
        this.#isInDayTheme = isInDayTheme;
        this.#isInNightTheme = isInNightTheme;
    }

    //region -------------------- Getter methods --------------------

    public get isInDayTheme() {
        return this.#isInDayTheme;
    }

    public get isInNightTheme() {
        return this.#isInNightTheme;
    }

    //endregion -------------------- Getter methods --------------------

    public toTimeMap(): ReadonlyMap<Times, boolean> {
        return this.#map ??= new Map(Import.Times.values.map(time => [time, time.get(this),]));
    }

    //endregion -------------------- Fields, constructor & methods --------------------
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
