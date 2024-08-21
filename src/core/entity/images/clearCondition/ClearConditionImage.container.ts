import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile'
import type {ClearConditionImage}     from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

export class ClearConditionImageContainer<const out T extends ClearConditionImageFile = ClearConditionImageFile, >
    implements ClearConditionImage {

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

    public get(gameStyle: GameStyles,): T {
        const images = this.imagesWithAssociation
        const size = images.length
        let index = -1
        while (++index < size)
            if (images[index][0] === gameStyle)
                return images[index][1]
        throw new ReferenceError(`The game style "${gameStyle.englishName}" does not exist for the clear condition image.`,)
    }

}
