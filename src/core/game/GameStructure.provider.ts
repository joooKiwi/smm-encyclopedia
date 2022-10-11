import type {GameStructure}      from './GameStructure'
import type {ProviderWithoutKey} from '../../util/provider/ProviderWithoutKey'

import {AbstractProvider}       from '../../util/provider/AbstractProvider'
import {GameStructureContainer} from './GameStructure.container'

/**
 * @singleton
 */
export class GameStructureProvider
    extends AbstractProvider<ArgumentsReceived, GameStructure>
    implements ProviderWithoutKey<GameStructure, ArgumentsReceived> {

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
    public get<SMM1AND3DS, SMM2, >(superMarioMaker1And3DS: SMM1AND3DS, superMarioMaker2: SMM2,): GameStructure<SMM1AND3DS, SMM1AND3DS, SMM2>
    /**
     * Get (or create) a game structure based on each {@link Games}.
     *
     * @param superMarioMaker1 The {@link Games.SUPER_MARIO_MAKER_1 SMM1} game
     * @param superMarioMakerFor3DS The {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} game
     * @param superMarioMaker2 The {@link Games.SUPER_MARIO_MAKER_2 SMM2} game
     */
    public get<SMM1, SMM3DS, SMM2, >(superMarioMaker1: SMM1, superMarioMakerFor3DS: SMM3DS, superMarioMaker2: SMM2,): GameStructure<SMM1, SMM3DS, SMM2>
    public get(...argumentsReceived: | ArgumentsReceived | ArgumentsReceived_Simplified) {
        if (argumentsReceived.length === 2)
            return this.get(argumentsReceived[0], argumentsReceived[0], argumentsReceived[1],)

        return this.everyContainers.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new GameStructureContainer(...argumentsReceived,)))
            .get(argumentsReceived)
    }

}

type ArgumentsReceived<SMM1 = any, SMM3DS = any, SMM2 = any, > = readonly [
    smm1: SMM1,
    smm3ds: SMM3DS,
    smm2: SMM2,
]
type ArgumentsReceived_Simplified<SMM1AND3DS = any, SMM2 = any, > = readonly [
    smm1And3DS: SMM1AND3DS,
    smm2: SMM2,
]
