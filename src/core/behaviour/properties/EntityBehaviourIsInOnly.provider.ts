import type {EntityBehaviourIsInOnly}            from 'core/behaviour/properties/EntityBehaviourIsInOnly'
import type {ProviderWithMultipleArgumentsAsKey} from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {EntityBehaviourIsInOnlyContainer} from 'core/behaviour/properties/EntityBehaviourIsInOnly.container'
import {isArrayEquals}                    from 'util/utilitiesMethods'
import {AbstractProvider}                 from 'util/provider/AbstractProvider'

/**
 * An entity behaviour "is in only" {@link Provider}.
 *
 * It can only create a selected instances based on the arguments received:
 * <ol>
 *     <li>false, false</li>
 *     <li>true, false</li>
 *     <li>false, true</li>
 * </ol>
 * The [true, true] is not possible due to no "is in only" from a specific location.
 *
 * @singleton
 */
export class EntityBehaviourIsInOnlyProvider
    extends AbstractProvider<ArgumentsReceived, EntityBehaviourIsInOnly>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, EntityBehaviourIsInOnly> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityBehaviourIsInOnlyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public none(): EntityBehaviourIsInOnly {
        return this.get(false, false,)
    }

    public get(isInOnline: boolean, isInMultiplayer: boolean,): EntityBehaviourIsInOnly {
        const argumentsReceived = [isInOnline, isInMultiplayer,] as const satisfies ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new EntityBehaviourIsInOnlyContainer(isInOnline, isInMultiplayer,),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [isInOnline: boolean, isInMultiplayer: boolean,]
