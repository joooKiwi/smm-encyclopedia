import type {PossibleGamesReceived, PossibleTranslationKeys, PossibleTypesReceived, PossibleValuesReceived, SoundEffectOnGoalPole} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {ProviderWithMultipleArgumentsAsKey}                                                                                   from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {SoundEffectOnGoalPoleContainer} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole.container'
import {isArrayEquals}                  from 'util/utilitiesMethods'
import {AbstractProvider}               from 'util/provider/AbstractProvider'

/** @singleton */
export class SoundEffectOnGoalPoleProvider
    extends AbstractProvider<ArgumentsReceived, SoundEffectOnGoalPole>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, SoundEffectOnGoalPole> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectOnGoalPoleProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------


    public get(value: PossibleValuesReceived, type: PossibleTypesReceived, game: PossibleGamesReceived, smallDefinition: PossibleTranslationKeys,): SoundEffectOnGoalPole {
        const argumentsReceived = [value, type, game, smallDefinition,] as const satisfies ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new SoundEffectOnGoalPoleContainer(value, type, game, smallDefinition,),)
        return everyContainer.get(argumentsReferenced,)!
    }
}

type ArgumentsReceived = readonly [
    value: PossibleValuesReceived,
    type: PossibleTypesReceived,
    game: PossibleGamesReceived,
    smallDefinition: PossibleTranslationKeys,
]
