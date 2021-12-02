import type {GameStyles} from '../../gameStyle/GameStyles';

export interface GameStyleProperty<SMB extends boolean = boolean, SMB3 extends boolean = boolean, SMW extends boolean = boolean, NSMBU extends boolean = boolean, SM3DW extends | boolean | null = | boolean | null, > {

    get isInSuperMarioBrosStyle(): SMB

    get isInSuperMarioBros3Style(): SMB3

    get isInSuperMarioWorldStyle(): SMW

    get isInNewSuperMarioBrosUStyle(): NSMBU

    get isInSuperMario3DWorldStyle(): SM3DW

    /**
     * Return a {@link Map} based on the enum {@link GameStyles}
     * with every values stored inside this instance ({@link GameStyleProperty})
     * as a boolean only.
     */
    toGameStyleMap(): ReadonlyMap<GameStyles, boolean>

}

export type ExclusiveSMM1GameStyleProperty = GameStyleProperty<true, false, false, false, null>;
export type AbstractExclusiveSMM2GameStyleProperty<SMB extends boolean = boolean, SMB3 extends boolean = boolean, SMW extends boolean = boolean, NSMBU extends boolean = boolean, SM3DW extends boolean = boolean, >
    = GameStyleProperty<SMB, SMB3, SMW, NSMBU, SM3DW>;
export type ExclusiveSMM2GameStylePropertyInSM3DW = AbstractExclusiveSMM2GameStyleProperty<false, false, false, false, true>;
export type ExclusiveSMM2GameStyleProperty = AbstractExclusiveSMM2GameStyleProperty;
