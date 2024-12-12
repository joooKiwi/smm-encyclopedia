import type {CollectionHolder} from '@joookiwi/collection'

import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile'
import type {ClearConditionImage}     from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

export class ClearConditionImageContainer<const T extends ClearConditionImageFile = ClearConditionImageFile, >
    implements ClearConditionImage {

    #images?: CollectionHolder<T>
    readonly #imagesWithAssociation

    public constructor(images: CollectionHolder<readonly [GameStyles, T,]>,) {
        this.#imagesWithAssociation = images
    }

    public get images(): CollectionHolder<T> {
        return this.#images ??= this.imagesWithAssociation.map(it => it[1],)
    }

    public get imagesWithAssociation(): CollectionHolder<readonly [GameStyles, T,]> {
        return this.#imagesWithAssociation
    }

    public get(gameStyle: GameStyles,): T {
        const value = this.imagesWithAssociation.findFirstOrNull(it => it[0] === gameStyle,)
        if (value == null)
            throw new ReferenceError(`The game style "${gameStyle.englishName}" does not exist for the clear condition image.`,)
        return value[1]
    }

}
