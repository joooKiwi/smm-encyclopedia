import type {GameStyles} from 'core/gameStyle/GameStyles'

export interface GameStyleProperty {

    readonly isInSuperMarioBrosStyle: boolean
    readonly isInSuperMarioBros3Style: boolean
    readonly isInSuperMarioWorldStyle: boolean
    readonly isInNewSuperMarioBrosUStyle: boolean
    readonly isInSuperMario3DWorldStyle: boolean

    /**
     * Return a {@link Map} based on the enum {@link GameStyles}
     * with every value stored inside this instance ({@link GameStyleProperty})
     * as a boolean only.
     */
    toGameStyleMap(): ReadonlyMap<GameStyles, boolean>

}
