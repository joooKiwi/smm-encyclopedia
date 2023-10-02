import type {GameStyleProperty}                  from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {ProviderWithMultipleArgumentsAsKey} from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {GameStylePropertyContainer} from 'core/entity/properties/gameStyle/GameStyleProperty.container'
import {isArrayEquals}              from 'util/utilitiesMethods'
import {AbstractProvider}           from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class GameStylePropertyProvider
    extends AbstractProvider<ArgumentsReceived, GameStyleProperty>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, GameStyleProperty> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameStylePropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    /**
     * Get (or create) a property instance based on the {@link GameStyles} properties.
     *
     * @param isInSuperMarioBrosStyle Is in the {@link GameStyles.SUPER_MARIO_BROS SMB style}
     * @param isInSuperMarioBros3Style Is in the {@link GameStyles.SUPER_MARIO_BROS_3 SMB3 style}
     * @param isInSuperMarioWorldStyle Is in the {@link GameStyles.SUPER_MARIO_WORLD SMW style}
     * @param isInNewSuperMarioBrosUStyle Is in the {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU style}
     * @param isInSuperMario3DWorldStyle Is in the {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW style}
     */
    public get<const SMB extends boolean = boolean,
        const SMB3 extends boolean = boolean,
        const SMW extends boolean = boolean,
        const NSMBU extends boolean = boolean,
        const SM3DW extends NullOrBoolean = NullOrBoolean, >(isInSuperMarioBrosStyle: SMB, isInSuperMarioBros3Style: SMB3, isInSuperMarioWorldStyle: SMW, isInNewSuperMarioBrosUStyle: NSMBU, isInSuperMario3DWorldStyle: SM3DW,): GameStyleProperty<SMB, SMB3, SMW, NSMBU, SM3DW>
    public get(isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: NullOrBoolean,): GameStyleProperty {
        const argumentsReceived = [isInSuperMarioBrosStyle, isInSuperMarioBros3Style, isInSuperMarioWorldStyle, isInNewSuperMarioBrosUStyle, isInSuperMario3DWorldStyle,] as const satisfies ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new GameStylePropertyContainer(isInSuperMarioBrosStyle, isInSuperMarioBros3Style, isInSuperMarioWorldStyle, isInNewSuperMarioBrosUStyle, isInSuperMario3DWorldStyle,),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [
    isInSuperMarioBrosStyle: boolean,
    isInSuperMarioBros3Style: boolean,
    isInSuperMarioWorldStyle: boolean,
    isInNewSuperMarioBrosUStyle: boolean,
    isInSuperMario3DWorldStyle: NullOrBoolean,
]
