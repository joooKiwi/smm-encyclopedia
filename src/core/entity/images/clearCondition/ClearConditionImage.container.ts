import type {Array}             from '@joookiwi/type'
import {findFirstOrNullByArray} from '@joookiwi/collection'

import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile'
import type {ClearConditionImage}     from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

export class ClearConditionImageContainer<const out T extends ClearConditionImageFile = ClearConditionImageFile, >
    implements ClearConditionImage {

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

    public get(gameStyle: GameStyles,): T {
        const value = findFirstOrNullByArray(this.imagesWithAssociation, it => it[0] === gameStyle,)
        if (value == null)
            throw new ReferenceError(`The game style "${gameStyle.englishName}" does not exist for the clear condition image.`,)
        return value[1]
    }

}
