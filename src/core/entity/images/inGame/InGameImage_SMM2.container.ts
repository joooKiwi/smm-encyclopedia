import type {InGameSMM2ImageFile} from 'core/entity/file/EntityImageFile.inGame'
import type {InGameImage_SMM2}    from 'core/entity/images/inGame/InGameImage_SMM2'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

import {EMPTY_ARRAY} from 'util/emptyVariables'

export class InGameImage_SMM2Container
    implements InGameImage_SMM2 {

    readonly #images

    public constructor(images: ReadonlyMap<GameStyles, readonly InGameSMM2ImageFile[]>,) {
        this.#images = images
    }

    public get images(): ReadonlyMap<GameStyles, readonly InGameSMM2ImageFile[]> {
        return this.#images
    }

    public get(gameStyle: GameStyles,): readonly InGameSMM2ImageFile[] {
        return this.images.get(gameStyle,) ?? EMPTY_ARRAY
    }
}
