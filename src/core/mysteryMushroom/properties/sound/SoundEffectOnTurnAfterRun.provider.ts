import type {PossibleValuesReceived, SoundEffectOnTurnAfterRun} from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun'
import type {ProviderWithSingleArgumentAsKey}                   from 'util/provider/ProviderWithSingleArgumentAsKey'

import {SoundEffectOnTurnAfterRunContainer} from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun.container'
import {AbstractProvider}                   from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class SoundEffectOnTurnAfterRunProvider
    extends AbstractProvider<PossibleValuesReceived, SoundEffectOnTurnAfterRun>
    implements ProviderWithSingleArgumentAsKey<PossibleValuesReceived, SoundEffectOnTurnAfterRun> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectOnTurnAfterRunProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(value: PossibleValuesReceived,): SoundEffectOnTurnAfterRun {
        const everyContainer = this.everyContainers
        if (!everyContainer.has(value,))
            everyContainer.set(value, new SoundEffectOnTurnAfterRunContainer(value,),)
        return everyContainer.get(value,)!
    }
}
