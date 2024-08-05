import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile.clearCondition'
import type {ClearConditionImage}     from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

export class ClearConditionImageContainer
    implements ClearConditionImage {

    readonly #images
    #map?: ReadonlyMap<GameStyles, ClearConditionImageFile>

    public constructor(images: readonly (readonly [GameStyles, ClearConditionImageFile,])[],) {
        this.#images = images
    }

    public get images(): readonly (readonly [GameStyles, ClearConditionImageFile,])[] {
        return this.#images
    }

    public get map(): ReadonlyMap<GameStyles, ClearConditionImageFile> {
        const value = this.#map
        if (value != null)
            return value

        const map = new Map<GameStyles, ClearConditionImageFile>()
        const images = this.images
        let index = images.length
        while (--index > 0) {
            const [gameStyle, image,] = images[index]
            map.set(gameStyle, image,)
        }
        return this.#map = map
    }

    public get(gameStyle: GameStyles,): ClearConditionImageFile {
        const map = this.map
        if (map.has(gameStyle,))
            return map.get(gameStyle,)!
        throw new ReferenceError(`The game style "${gameStyle.englishName}" does not exist for the clear condition image.`,)
    }

}
