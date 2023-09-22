import type {GameStyles} from 'core/gameStyle/GameStyles'

export interface GameStyleProperty<SMB extends boolean = boolean, SMB3 extends boolean = boolean, SMW extends boolean = boolean, NSMBU extends boolean = boolean, SM3DW extends NullOrBoolean = NullOrBoolean, > {

    get isInSuperMarioBrosStyle(): SMB

    get isInSuperMarioBros3Style(): SMB3

    get isInSuperMarioWorldStyle(): SMW

    get isInNewSuperMarioBrosUStyle(): NSMBU

    get isInSuperMario3DWorldStyle(): SM3DW

    /**
     * Return a {@link Map} based on the enum {@link GameStyles}
     * with every value stored inside this instance ({@link GameStyleProperty})
     * as a boolean only.
     */
    toGameStyleMap(): ReadonlyMap<GameStyles, boolean>

}
