import type {GameStyles} from '../gameStyle/GameStyles';

export interface GameStyleProperty {

    get isInSuperMarioBrosStyle(): boolean

    get isInSuperMarioBros3Style(): boolean

    get isInSuperMarioWorldStyle(): boolean

    get isInNewSuperMarioBrosUStyle(): boolean

    get isInSuperMario3DWorldStyle(): | boolean | null

    /**
     * Return a {@link Map} based on the enum {@link GameStyles}
     * with every values stored inside this instance ({@link GameStyleProperty})
     * as a boolean only.
     */
    toGameStyleMap(): ReadonlyMap<GameStyles, boolean>

}
