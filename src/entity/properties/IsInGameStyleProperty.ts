import {GameStyles} from '../gameStyle/GameStyles';

export interface IsInGameStyleProperty {

    isInSuperMarioBrosStyle: boolean
    isInSuperMarioBros3Style: boolean
    isInSuperMarioWorldStyle: boolean
    isInNewSuperMarioBrosUStyle: boolean
    isInSuperMario3DWorldStyle: null | boolean


    toGameStyleMap(): Map<GameStyles, boolean>

}
