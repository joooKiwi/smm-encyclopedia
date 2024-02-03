import type {GameStyles} from 'core/gameStyle/GameStyles'

export interface GameStyleProperty<out SMB extends boolean = boolean,
    out SMB3 extends boolean = boolean,
    out SMW extends boolean = boolean,
    out NSMBU extends boolean = boolean,
    out SM3DW extends NullOrBooleanOrNotApplicable = NullOrBooleanOrNotApplicable, > {

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
