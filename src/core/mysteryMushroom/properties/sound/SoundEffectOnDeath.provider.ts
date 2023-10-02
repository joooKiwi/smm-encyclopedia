import type {PossibleGamesReceived, PossibleTranslationKeys, PossibleTypesReceived, PossibleValuesReceived, SoundEffectOnDeath} from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import {AbstractProvider}                   from 'util/provider/AbstractProvider'
import {ProviderWithMultipleArgumentsAsKey} from 'util/provider/ProviderWithMultipleArgumentsAsKey'
import {isArrayEquals}                      from 'util/utilitiesMethods'
import {SoundEffectOnDeathContainer}                                                                                            from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath.container'

export class SoundEffectOnDeathProvider
    extends AbstractProvider<ArgumentsReceived, SoundEffectOnDeath>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, SoundEffectOnDeath> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectOnDeathProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(value: PossibleValuesReceived, type: PossibleTypesReceived, game: PossibleGamesReceived, smallDefinition: PossibleTranslationKeys,): SoundEffectOnDeath {
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
            everyContainer.set(argumentsReceived, new SoundEffectOnDeathContainer(value, type, game, smallDefinition,),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [
    value: PossibleValuesReceived,
    type: PossibleTypesReceived,
    game: PossibleGamesReceived,
    smallDefinition: PossibleTranslationKeys,
]
