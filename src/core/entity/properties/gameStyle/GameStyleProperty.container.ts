import type {GameStyleProperty} from './GameStyleProperty'

import type {GameStyles} from '../../../gameStyle/GameStyles'
import {Import}          from '../../../../util/DynamicImporter'

/**
 * @classWithDynamicImport {@link GameStyles}
 */
export class GameStylePropertyContainer<SMB extends boolean = boolean, SMB3 extends boolean = boolean, SMW extends boolean = boolean, NSMBU extends boolean = boolean, SM3DW extends | boolean | null = | boolean | null, >
    implements GameStyleProperty<SMB, SMB3, SMW, NSMBU, SM3DW> {

    //region -------------------- Fields --------------------

    #map?: ReadonlyMap<GameStyles, boolean>
    readonly #isInSuperMarioBrosStyle
    readonly #isInSuperMarioBros3Style
    readonly #isInSuperMarioWorldStyle
    readonly #isInNewSuperMarioBrosUStyle
    readonly #isInSuperMario3DWorldStyle

    //endregion -------------------- Fields --------------------

    constructor(isInSuperMarioBrosStyle: SMB, isInSuperMarioBros3Style: SMB3, isInSuperMarioWorldStyle: SMW, isInNewSuperMarioBrosUStyle: NSMBU, isInSuperMario3DWorldStyle: SM3DW,) {
        this.#isInSuperMarioBrosStyle = isInSuperMarioBrosStyle
        this.#isInSuperMarioBros3Style = isInSuperMarioBros3Style
        this.#isInSuperMarioWorldStyle = isInSuperMarioWorldStyle
        this.#isInNewSuperMarioBrosUStyle = isInNewSuperMarioBrosUStyle
        this.#isInSuperMario3DWorldStyle = isInSuperMario3DWorldStyle
    }

    //region -------------------- Getter methods --------------------

    public get isInSuperMarioBrosStyle() {
        return this.#isInSuperMarioBrosStyle
    }

    public get isInSuperMarioBros3Style() {
        return this.#isInSuperMarioBros3Style
    }

    public get isInSuperMarioWorldStyle() {
        return this.#isInSuperMarioWorldStyle
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.#isInNewSuperMarioBrosUStyle
    }

    public get isInSuperMario3DWorldStyle() {
        return this.#isInSuperMario3DWorldStyle
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameStyleMap(): ReadonlyMap<GameStyles, boolean> {
        return this.#map ??= new Map(Import.GameStyles.values.map(gameStyle => [gameStyle, gameStyle.get(this),]))
    }

    //endregion -------------------- Convertor methods --------------------

}
