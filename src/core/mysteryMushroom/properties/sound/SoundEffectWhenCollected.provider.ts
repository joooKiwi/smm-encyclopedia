import type {PossibleGamesReceived, PossibleValuesReceived, SoundEffectWhenCollected} from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected'
import type {ProviderWithMultipleArgumentsAsKey}                                      from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {SoundEffectWhenCollectedContainer} from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected.container'
import {isArrayEquals}                     from 'util/utilitiesMethods'
import {AbstractProvider}                  from 'util/provider/AbstractProvider'

export class SoundEffectWhenCollectedProvider
    extends AbstractProvider<ArgumentsReceived, SoundEffectWhenCollected>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, SoundEffectWhenCollected> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectWhenCollectedProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SoundEffectWhenCollected {
        const argumentsReceived = [value, game,] as const satisfies ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new SoundEffectWhenCollectedContainer(value, game,),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [
    value: PossibleValuesReceived,
    game: PossibleGamesReceived,
]
