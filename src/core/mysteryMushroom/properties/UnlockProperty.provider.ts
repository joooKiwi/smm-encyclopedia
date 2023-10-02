import type {PossibleConditionToUnlockIt, UnlockProperty} from 'core/mysteryMushroom/properties/UnlockProperty'
import type {ProviderWithMultipleArgumentsAsKey}          from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {UnlockPropertyContainer} from 'core/mysteryMushroom/properties/UnlockProperty.container'
import {isArrayEquals}           from 'util/utilitiesMethods'
import {AbstractProvider}        from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class UnlockPropertyProvider
    extends AbstractProvider<ArgumentsReceived, UnlockProperty>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, UnlockProperty> {

    //region -------------------- Singleton usage --------------------

    static #instance?: UnlockPropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(conditionToUnlockIt: PossibleConditionToUnlockIt, canBeUnlockedByAnAmiibo: boolean,): UnlockProperty {
        const argumentsReceived = [conditionToUnlockIt, canBeUnlockedByAnAmiibo,] as const satisfies ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new UnlockPropertyContainer(conditionToUnlockIt, canBeUnlockedByAnAmiibo,),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [
    conditionToUnlockIt: PossibleConditionToUnlockIt,
    canBeUnlockedByAnAmiibo: boolean,
]
