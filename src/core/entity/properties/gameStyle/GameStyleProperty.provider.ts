import type {GameStyleProperty}  from './GameStyleProperty';
import type {ProviderWithoutKey} from '../../../../util/provider/ProviderWithoutKey';

import {AbstractProvider}           from '../../../../util/provider/AbstractProvider';
import {GameStylePropertyContainer} from './GameStyleProperty.container';

/**
 * @singleton
 */
export class GameStylePropertyProvider
    extends AbstractProvider<ArgumentsReceived, GameStyleProperty>
    implements ProviderWithoutKey<GameStyleProperty, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameStylePropertyProvider;

    private constructor() {
        super();
    }

    public static get get() {
        return this.#instance ??= new this();
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
    public get<SMB extends boolean = boolean, SMB3 extends boolean = boolean, SMW extends boolean = boolean, NSMBU extends boolean = boolean, SM3DW extends | boolean | null = | boolean | null, >(isInSuperMarioBrosStyle: SMB, isInSuperMarioBros3Style: SMB3, isInSuperMarioWorldStyle: SMW, isInNewSuperMarioBrosUStyle: NSMBU, isInSuperMario3DWorldStyle: SM3DW,): GameStyleProperty<SMB, SMB3, SMW, NSMBU, SM3DW>
    public get(...argumentsReceived: ArgumentsReceived): GameStyleProperty {
        return this.everyContainers.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new GameStylePropertyContainer(...argumentsReceived,),))
            .get(argumentsReceived);
    }

}

type ArgumentsReceived = readonly [
    isInSuperMarioBrosStyle: boolean,
    isInSuperMarioBros3Style: boolean,
    isInSuperMarioWorldStyle: boolean,
    isInNewSuperMarioBrosUStyle: boolean,
    isInSuperMario3DWorldStyle: | boolean | null,
];
