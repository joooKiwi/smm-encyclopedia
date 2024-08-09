import type {InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {InGameImage}     from 'core/entity/images/inGame/InGameImage'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

import {EMPTY_ARRAY} from 'util/emptyVariables'

export class InGameImageContainer<const out T extends InGameImageFile, >
    implements InGameImage<T> {

    #images?: readonly T[]
    readonly #imagesWithAssociation

    public constructor(images: readonly (readonly [GameStyles, T,])[],) {
        this.#imagesWithAssociation = images
    }

    public get images(): readonly T[] {
        return this.#images ??= this.imagesWithAssociation.map(it => it[1],)
    }

    public get imagesWithAssociation(): readonly (readonly [GameStyles, T,])[] {
        return this.#imagesWithAssociation
    }

    public get(gameStyle: GameStyles,): readonly T[] {
        const images = this.imagesWithAssociation
        const size = images.length
        const imagesFound: T[] = []
        let index = -1
        while (++index < size)
            if (images[index][0] === gameStyle)
                imagesFound.push(images[index][1],)

        if (imagesFound.length === 0)
            return EMPTY_ARRAY
        return imagesFound
    }

}
