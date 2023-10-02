import type {GameStructure, GameStructureFrom2Games} from 'core/game/GameStructure'
import type {ProviderWithMultipleArgumentsAsKey}     from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {GameStructureContainer} from 'core/game/GameStructure.container'
import {isArrayEquals}          from 'util/utilitiesMethods'
import {AbstractProvider}       from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class GameStructureProvider
    extends AbstractProvider<ArgumentsReceived, GameStructure>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, GameStructure> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameStructureProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    /**
     * Get (or create) a game structure based on the {@link Games} separated.
     *
     * @param superMarioMaker1And3DS The {@link Games.SUPER_MARIO_MAKER_1 SMM1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} games
     * @param superMarioMaker2 The {@link Games.SUPER_MARIO_MAKER_2 SMM2} game
     */
    public get<SMM1AND3DS, SMM2, >(superMarioMaker1And3DS: SMM1AND3DS, superMarioMaker2: SMM2,): GameStructureFrom2Games<SMM1AND3DS, SMM2>
    /**
     * Get (or create) a game structure based on each {@link Games}.
     *
     * @param superMarioMaker1 The {@link Games.SUPER_MARIO_MAKER_1 SMM1} game
     * @param superMarioMakerFor3DS The {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} game
     * @param superMarioMaker2 The {@link Games.SUPER_MARIO_MAKER_2 SMM2} game
     */
    public get<SMM1, SMM3DS, SMM2, >(superMarioMaker1: SMM1, superMarioMakerFor3DS: SMM3DS, superMarioMaker2: SMM2,): GameStructure<SMM1, SMM3DS, SMM2>
    public get(superMarioMaker1: unknown, superMarioMakerFor3DS: unknown, superMarioMaker2?: unknown,) {
        if (arguments.length === 2)
            return this.get(superMarioMaker1, superMarioMaker1, superMarioMakerFor3DS,)

        const argumentsReceived = [superMarioMaker1, superMarioMakerFor3DS, superMarioMaker2,] as const satisfies ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced: ArgumentsReceived = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new GameStructureContainer(superMarioMaker1, superMarioMakerFor3DS, superMarioMaker2,),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [
    smm1: unknown,
    smm3ds: unknown,
    smm2: unknown,
]
