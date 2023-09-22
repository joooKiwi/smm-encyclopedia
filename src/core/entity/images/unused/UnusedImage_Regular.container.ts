import type {UnusedSMM1RegularImageFile} from 'core/entity/file/EntityImageFile.unused'
import type {UnusedImage_Regular}        from 'core/entity/images/unused/UnusedImage_Regular'
import type {GameStyles}                 from 'core/gameStyle/GameStyles'

export class UnusedImage_RegularContainer
    implements UnusedImage_Regular {

    readonly #all

    constructor(images: ReadonlyMap<GameStyles, readonly (readonly UnusedSMM1RegularImageFile[])[]>,) {
        this.#all = images
    }

    public get all(): ReadonlyMap<GameStyles, readonly (readonly UnusedSMM1RegularImageFile[])[]> {
        return this.#all
    }

}
