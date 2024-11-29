import type {Array}    from '@joookiwi/type'
import {filterByArray} from '@joookiwi/collection'

import type {InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {InGameImage}     from 'core/entity/images/inGame/InGameImage'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export class InGameImageContainer<const T extends InGameImageFile, >
    implements InGameImage<T> {

    #images?: Array<T>
    readonly #imagesWithAssociation

    public constructor(images: Array<readonly [GameStyles, T,]>,) {
        this.#imagesWithAssociation = images
    }

    public get images(): Array<T> {
        return this.#images ??= this.imagesWithAssociation.map(it => it[1],)
    }

    public get imagesWithAssociation(): Array<readonly [GameStyles, T,]> {
        return this.#imagesWithAssociation
    }

    public get(gameStyle: GameStyles,): Array<T> {
        return filterByArray(this.imagesWithAssociation, it => it[0] === gameStyle,).map(it => it[1],).toArray()
    }

}
