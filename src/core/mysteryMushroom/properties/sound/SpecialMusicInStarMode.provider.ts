import type {PossibleGamesReceived, PossibleValuesReceived, SpecialMusicInStarMode} from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'
import type {ProviderWithMultipleArgumentsAsKey}                                    from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {SpecialMusicInStarModeContainer} from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode.container'
import {isArrayEquals}                   from 'util/utilitiesMethods'
import {AbstractProvider}                from 'util/provider/AbstractProvider'

/** @singleton */
export class SpecialMusicInStarModeProvider
    extends AbstractProvider<ArgumentsReceived, SpecialMusicInStarMode>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, SpecialMusicInStarMode> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SpecialMusicInStarModeProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(value: PossibleValuesReceived, game: PossibleGamesReceived,): SpecialMusicInStarMode {
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
            everyContainer.set(argumentsReceived, new SpecialMusicInStarModeContainer(value, game,),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [
    value: PossibleValuesReceived,
    game: PossibleGamesReceived,
]
