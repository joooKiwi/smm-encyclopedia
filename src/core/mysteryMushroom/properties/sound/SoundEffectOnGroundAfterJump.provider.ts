import type {PossibleGamesReceived, PossibleValuesReceived, SoundEffectOnGroundAfterJump} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump'
import type {ProviderWithMultipleArgumentsAsKey}                                          from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {SoundEffectOnGroundAfterJumpContainer} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump.container'
import {isArrayEquals}                         from 'util/utilitiesMethods'
import {AbstractProvider}                      from 'util/provider/AbstractProvider'

/** @singleton */
export class SoundEffectOnGroundAfterJumpProvider
    extends AbstractProvider<ArgumentsReceived, SoundEffectOnGroundAfterJump>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, SoundEffectOnGroundAfterJump> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectOnGroundAfterJumpProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SoundEffectOnGroundAfterJump {
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
            everyContainer.set(argumentsReceived, new SoundEffectOnGroundAfterJumpContainer(value, game,),)
        return everyContainer.get(argumentsReferenced,)!
    }
}

type ArgumentsReceived = readonly [
    value: PossibleValuesReceived,
    game: PossibleGamesReceived,
]
