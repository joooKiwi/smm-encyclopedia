import type {Array}                from '@joookiwi/type'
import {filterByArray, mapByArray} from '@joookiwi/collection'

import type {InGameImageFile}     from 'core/entity/file/EntityImageFile'
import type {InGameImage_Regular} from 'core/entity/images/inGame/InGameImage_Regular'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

export class InGameImage_RegularContainer<const T extends InGameImageFile, >
    implements InGameImage_Regular<T> {

    #images?: Array<T>
    readonly #imagesWithAssociation

    public constructor(images: Array<readonly [GameStyles, T,]>,) {
        this.#imagesWithAssociation = images
    }

    public get images(): Array<T> {
        return this.#images ??= mapByArray(this.imagesWithAssociation, it => it[1],).toArray()
    }

    public get imagesWithAssociation(): Array<readonly [GameStyles, T,]> {
        return this.#imagesWithAssociation
    }

    public get(gameStyle: GameStyles,): Array<T> {
        return filterByArray(this.imagesWithAssociation, it => it[0] === gameStyle,).map(it => it[1],).toArray()
    }

}
