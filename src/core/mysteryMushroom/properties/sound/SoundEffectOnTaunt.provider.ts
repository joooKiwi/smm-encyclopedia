import type {PossibleGamesReceived, PossibleValuesReceived, SoundEffectOnTaunt} from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt'
import type {ProviderWithMultipleArgumentsAsKey}                                from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {SoundEffectOnTauntContainer} from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt.container'
import {isArrayEquals}               from 'util/utilitiesMethods'
import {AbstractProvider}            from 'util/provider/AbstractProvider'

export class SoundEffectOnTauntProvider
    extends AbstractProvider<ArgumentsReceived, SoundEffectOnTaunt>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, SoundEffectOnTaunt> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectOnTauntProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SoundEffectOnTaunt {
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
            everyContainer.set(argumentsReceived, new SoundEffectOnTauntContainer(value, game,),)
        return everyContainer.get(argumentsReferenced,)!
    }
}

type ArgumentsReceived = readonly [
    value: PossibleValuesReceived,
    game: PossibleGamesReceived,
]
