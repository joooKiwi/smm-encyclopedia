import type {PossibleGamesReceived, PossibleValuesReceived, SoundEffectOnJump} from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {ProviderWithMultipleArgumentsAsKey}                               from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {SoundEffectOnJumpContainer} from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump.container'
import {isArrayEquals}              from 'util/utilitiesMethods'
import {AbstractProvider}           from 'util/provider/AbstractProvider'

/** @singleton */
export class SoundEffectOnJumpProvider
    extends AbstractProvider<ArgumentsReceived, SoundEffectOnJump>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, SoundEffectOnJump> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectOnJumpProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SoundEffectOnJump {
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
            everyContainer.set(argumentsReceived, new SoundEffectOnJumpContainer(value, game,),)
        return everyContainer.get(argumentsReferenced,)!
    }
}

type ArgumentsReceived = readonly [
    value: PossibleValuesReceived,
    game: PossibleGamesReceived,
]
