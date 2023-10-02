import type {GameProperty}                       from 'core/entity/properties/game/GameProperty'
import type {ProviderWithMultipleArgumentsAsKey} from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {GamePropertyContainer} from 'core/entity/properties/game/GameProperty.container'
import {GameStructureProvider} from 'core/game/GameStructure.provider'
import {isArrayEquals}         from 'util/utilitiesMethods'
import {AbstractProvider}      from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class GamePropertyProvider
    extends AbstractProvider<ArgumentsReceived, GameProperty>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, GameProperty> {

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
    public get smm2Only(): GameProperty<false, false, true> {
        return this.get(false, true,)
    }

    /** Get (or create) a property where is it in every {@link Games}. */
    public get all(): GameProperty<true, true, true> {
        return this.get(true, true,)
    }


    /**
     * Get (or create) a property where the {@link Games} is separated by group.
     *
     * @param isInSuperMarioMaker1And3DS is in {@link Games.SUPER_MARIO_MAKER_1 SMM1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}
     * @param isInSuperMarioMaker2 is in {@link Games.SUPER_MARIO_MAKER_2 SMM2}
     */
    public get<const SMM1 extends boolean, SMM2 extends boolean = boolean, >(isInSuperMarioMaker1And3DS: SMM1, isInSuperMarioMaker2: SMM2,): GameProperty<SMM1, SMM1, SMM2>
    /**
     * Get a property where every {@link Games} is specified individually.
     *
     * @param isInSuperMarioMaker1 is in {@link Games.SUPER_MARIO_MAKER_1 SMM1}
     * @param isInSuperMarioMakerFor3DS is in {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}
     * @param isInSuperMarioMaker2 is in {@link Games.SUPER_MARIO_MAKER_2 SMM2}
     */
    public get<const SMM1 extends boolean, const SMM3DS extends boolean = boolean, const SMM2 extends boolean = boolean, >(isInSuperMarioMaker1: SMM1, isInSuperMarioMakerFor3DS: SMM3DS, isInSuperMarioMaker2: SMM2,): GameProperty<SMM1, SMM3DS, SMM2>
    public get(isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean, isInSuperMarioMaker2?: boolean,): GameProperty {
        if (isInSuperMarioMaker2 == null)
            return this.get(isInSuperMarioMaker1, isInSuperMarioMaker1, isInSuperMarioMakerFor3DS,)

        const argumentsReceived = [isInSuperMarioMaker1, isInSuperMarioMakerFor3DS, isInSuperMarioMaker2,] as const satisfies ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new GamePropertyContainer(GameStructureProvider.get.get(isInSuperMarioMaker1, isInSuperMarioMakerFor3DS, isInSuperMarioMaker2,),),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [
    isInSuperMarioMaker1: boolean,
    isInSuperMarioMakerFor3DS: boolean,
    isInSuperMarioMaker2: boolean,
]
