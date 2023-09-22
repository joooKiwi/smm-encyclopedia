import type {InGameSMM1ImageFile} from 'core/entity/file/EntityImageFile.inGame'
import type {InGameImage_SMM1}    from 'core/entity/images/inGame/InGameImage_SMM1'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

import {EMPTY_ARRAY} from 'util/emptyVariables'

export class InGameImage_SMM1Container
    implements InGameImage_SMM1 {

    readonly #images

    public constructor(images: ReadonlyMap<GameStyles, readonly InGameSMM1ImageFile[]>,) {
        this.#images = images
    }

    public get images(): ReadonlyMap<GameStyles, readonly InGameSMM1ImageFile[]> {
        return this.#images
    }

    public get(gameStyle: GameStyles,): readonly InGameSMM1ImageFile[] {
        return this.images.get(gameStyle,) ?? EMPTY_ARRAY
    }

}
