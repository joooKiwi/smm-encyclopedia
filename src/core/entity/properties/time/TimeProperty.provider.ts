import type {TimeProperty}                       from 'core/entity/properties/time/TimeProperty'
import type {ProviderWithMultipleArgumentsAsKey} from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {TimePropertyContainer} from 'core/entity/properties/time/TimeProperty.container'
import {isArrayEquals}         from 'util/utilitiesMethods'
import {AbstractProvider}      from 'util/provider/AbstractProvider'

/** @singleton */
export class TimePropertyProvider
    extends AbstractProvider<ArgumentsReceived, TimeProperty>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, TimeProperty> {

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
    public get<const DAY extends boolean = boolean, const NIGHT extends NullOrBoolean = NullOrBoolean, >(isInDayTime: DAY, isInNightTime: NIGHT,): TimeProperty<DAY, NIGHT>
    public get(isInDayTime: boolean, isInNightTime: NullOrBoolean,): TimeProperty {
        const argumentsReceived = [isInDayTime, isInNightTime,] as const satisfies ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new TimePropertyContainer(isInDayTime, isInNightTime,),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [
    isInDayTheme: boolean,
    isInNightTheme: NullOrBoolean,
]
