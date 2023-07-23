import type {TimeProperty}       from 'core/entity/properties/time/TimeProperty'
import type {ProviderWithoutKey} from 'util/provider/ProviderWithoutKey'

import {TimePropertyContainer} from 'core/entity/properties/time/TimeProperty.container'
import {AbstractProvider}      from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class TimePropertyProvider
    extends AbstractProvider<ArgumentsReceived, TimeProperty>
    implements ProviderWithoutKey<TimeProperty, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: TimePropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    /**
     * Get (or create) a property instance based on the {@link Times} properties.
     *
     * @param isInDayTime Is in the {@link Times.DAY day time}
     * @param isInNightTime Is in the {@link Times.NIGHT night time}
     */
    public get<DAY extends boolean = boolean, NIGHT extends NullOrBoolean = NullOrBoolean, >(isInDayTime: DAY, isInNightTime: NIGHT,): TimeProperty<DAY, NIGHT>
    public get(...argumentsReceived: ArgumentsReceived): TimeProperty {
        return this.everyContainers.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new TimePropertyContainer(...argumentsReceived,),))
            .get(argumentsReceived)
    }

}

type ArgumentsReceived = readonly [
    isInDayTheme: boolean,
    isInNightTheme: NullOrBoolean,
]
