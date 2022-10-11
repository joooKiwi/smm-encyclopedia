import type {PossibleConditionToUnlockIt, UnlockProperty} from './UnlockProperty'
import type {ProviderWithoutKey}                          from '../../../util/provider/ProviderWithoutKey'

import {AbstractProvider}        from '../../../util/provider/AbstractProvider'
import {UnlockPropertyContainer} from './UnlockProperty.container'

/**
 * @singleton
 */
export class UnlockPropertyProvider
    extends AbstractProvider<ArgumentsReceived, UnlockProperty>
    implements ProviderWithoutKey<UnlockProperty, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: UnlockPropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(...argumentsReceived: ArgumentsReceived): UnlockProperty {
        return this.everyContainers.if(map => map.has(argumentsReceived))
            .isNotMet(reference => reference.set(argumentsReceived, new UnlockPropertyContainer(...argumentsReceived,),))
            .get(argumentsReceived)
    }

}

type ArgumentsReceived = readonly [
    conditionToUnlockIt: PossibleConditionToUnlockIt,
    canBeUnlockedByAnAmiibo: boolean,
]
