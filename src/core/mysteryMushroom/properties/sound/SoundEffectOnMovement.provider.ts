import type {PossibleValuesReceived, SoundEffectOnMovement} from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'
import type {ProviderWithSingleArgumentAsKey}               from 'util/provider/ProviderWithSingleArgumentAsKey'

import {SoundEffectOnMovementContainer} from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement.container'
import {AbstractProvider}               from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class SoundEffectOnMovementProvider
    extends AbstractProvider<PossibleValuesReceived, SoundEffectOnMovement>
    implements ProviderWithSingleArgumentAsKey<PossibleValuesReceived, SoundEffectOnMovement> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectOnMovementProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(value: PossibleValuesReceived,): SoundEffectOnMovement {
        const everyContainer = this.everyContainers
        if (!everyContainer.has(value,))
            everyContainer.set(value, new SoundEffectOnMovementContainer(value,),)
        return everyContainer.get(value,)!
    }
}