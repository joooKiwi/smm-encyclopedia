import type {GameProperty}       from './GameProperty'
import type {ProviderWithoutKey} from '../../../../util/provider/ProviderWithoutKey'

import {AbstractProvider}      from '../../../../util/provider/AbstractProvider'
import {GamePropertyContainer} from './GameProperty.container'
import {GameStructureProvider} from '../../../game/GameStructure.provider'

/**
 * @singleton
 */
export class GamePropertyProvider
    extends AbstractProvider<ArgumentsReceived, GameProperty>
    implements ProviderWithoutKey<GameProperty, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GamePropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    /** Get (or create) a property where it is in only {@link Games.SUPER_MARIO_MAKER_2}. */
    public get smm2Only() {
        return this.get(false, true,)
    }

    /** Get (or create) a property where is it in every {@link Games}. */
    public get all() {
        return this.get(true, true,)
    }


    /**
     * Get (or create) a property where the {@link Games} is separated by group.
     *
     * @param isInSuperMarioMaker1And3DS is in {@link Games.SUPER_MARIO_MAKER_1 SMM1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}
     * @param isInSuperMarioMaker2 is in {@link Games.SUPER_MARIO_MAKER_2 SMM2}
     */
    public get<SMM1 extends boolean = boolean, SMM2 extends boolean = boolean, >(isInSuperMarioMaker1And3DS: SMM1, isInSuperMarioMaker2: SMM2,): GameProperty<SMM1, SMM1, SMM2>
    /**
     * Get a property where every {@link Games} is specified individually.
     *
     * @param isInSuperMarioMaker1 is in {@link Games.SUPER_MARIO_MAKER_1 SMM1}
     * @param isInSuperMarioMakerFor3DS is in {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}
     * @param isInSuperMarioMaker2 is in {@link Games.SUPER_MARIO_MAKER_2 SMM2}
     */
    public get<SMM1 extends boolean = boolean, SMM3DS extends boolean = boolean, SMM2 extends boolean = boolean, >(isInSuperMarioMaker1: SMM1, isInSuperMarioMakerFor3DS: SMM3DS, isInSuperMarioMaker2: SMM2,): GameProperty<SMM1, SMM3DS, SMM2>
    public get(...argumentsReceived: | ArgumentsReceived | ArgumentsReceived_Simplified): GameProperty {
        if (argumentsReceived.length === 2)
            return this.get(argumentsReceived[0], argumentsReceived[0], argumentsReceived[1],)

        return this.everyContainers.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new GamePropertyContainer(GameStructureProvider.get.get(...argumentsReceived),),))
            .get(argumentsReceived)
    }

}

type ArgumentsReceived = readonly [isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean, isInSuperMarioMaker2: boolean,]
type ArgumentsReceived_Simplified = readonly [isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,]
