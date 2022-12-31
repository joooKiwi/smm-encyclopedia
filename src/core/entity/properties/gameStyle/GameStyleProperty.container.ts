import type {GameStyleProperty} from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {NullOrBoolean}     from 'util/types/nullable'

import type {GameStyles} from 'core/gameStyle/GameStyles'
import {Import}          from 'util/DynamicImporter'

/**
 * @classWithDynamicImport {@link GameStyles}
 */
export class GameStylePropertyContainer<SMB extends boolean = boolean, SMB3 extends boolean = boolean, SMW extends boolean = boolean, NSMBU extends boolean = boolean, SM3DW extends NullOrBoolean = NullOrBoolean, >
    implements GameStyleProperty<SMB, SMB3, SMW, NSMBU, SM3DW> {

    //region -------------------- Fields --------------------

    #map?: ReadonlyMap<GameStyles, boolean>
    readonly #isInSuperMarioBrosStyle
    readonly #isInSuperMarioBros3Style
    readonly #isInSuperMarioWorldStyle
    readonly #isInNewSuperMarioBrosUStyle
    readonly #isInSuperMario3DWorldStyle: SM3DW//FIXME this type is only there to help typescript (it's not the standard)

    //endregion -------------------- Fields --------------------

    constructor(isInSuperMarioBrosStyle: SMB, isInSuperMarioBros3Style: SMB3, isInSuperMarioWorldStyle: SMW, isInNewSuperMarioBrosUStyle: NSMBU, isInSuperMario3DWorldStyle: SM3DW,) {
        this.#isInSuperMarioBrosStyle = isInSuperMarioBrosStyle
        this.#isInSuperMarioBros3Style = isInSuperMarioBros3Style
        this.#isInSuperMarioWorldStyle = isInSuperMarioWorldStyle
        this.#isInNewSuperMarioBrosUStyle = isInNewSuperMarioBrosUStyle
        this.#isInSuperMario3DWorldStyle = isInSuperMario3DWorldStyle
    }

    //region -------------------- Getter methods --------------------

    public get isInSuperMarioBrosStyle(): SMB {
        return this.#isInSuperMarioBrosStyle
    }

    public get isInSuperMarioBros3Style(): SMB3 {
        return this.#isInSuperMarioBros3Style
    }

    public get isInSuperMarioWorldStyle(): SMW {
        return this.#isInSuperMarioWorldStyle
    }

    public get isInNewSuperMarioBrosUStyle(): NSMBU {
        return this.#isInNewSuperMarioBrosUStyle
    }

    public get isInSuperMario3DWorldStyle(): SM3DW {
        return this.#isInSuperMario3DWorldStyle
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameStyleMap(): ReadonlyMap<GameStyles, boolean> {
        return this.#map ??= new Map(Import.GameStyles.values.map(gameStyle => [gameStyle, gameStyle.get(this),]))
    }

    //endregion -------------------- Convertor methods --------------------

}
