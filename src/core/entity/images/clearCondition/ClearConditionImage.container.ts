import type {Array}             from '@joookiwi/type'

import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile'
import type {ClearConditionImage}     from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

export class ClearConditionImageContainer<const T extends ClearConditionImageFile = ClearConditionImageFile, >
    implements ClearConditionImage {

    #images?: Array<T>
    readonly #imagesWithAssociation

    public constructor(images: Array<readonly [GameStyles, T,]>,) {
        this.#imagesWithAssociation = images
    }

    public get images(): Array<T> {
        return this.#images ??= new ArrayAsCollection(this.imagesWithAssociation,).map(it => it[1],).toArray()
    }

    public get imagesWithAssociation(): Array<readonly [GameStyles, T,]> {
        return this.#imagesWithAssociation
    }

    public get(gameStyle: GameStyles,): T {
        const value = new ArrayAsCollection(this.imagesWithAssociation,).findFirstOrNull(it => it[0] === gameStyle,)
        if (value == null)
            throw new ReferenceError(`The game style "${gameStyle.englishName}" does not exist for the clear condition image.`,)
        return value[1]
    }

}
