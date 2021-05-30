import {GameStyles} from '../gameStyle/GameStyles';

export interface IsInGameStyleProperty {

    isInSuperMarioBrosStyle: boolean
    isInSuperMarioBros3Style: boolean
    isInSuperMarioWorldStyle: boolean
    isInNewSuperMarioBrosUStyle: boolean
    isInSuperMario3DWorldStyle: null | boolean

    /**
     * Return a {@link Map} based on the enum {@link GameStyles}
     * with every values stored inside this instance ({@link IsInGameStyleProperty})
     * as a boolean only.
     */
    toGameStyleMap(): Map<GameStyles, boolean>

}
