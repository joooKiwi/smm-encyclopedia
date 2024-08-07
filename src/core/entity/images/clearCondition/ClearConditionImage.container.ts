import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile'
import type {ClearConditionImage}     from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

export class ClearConditionImageContainer<const out T extends ClearConditionImageFile = ClearConditionImageFile, >
    implements ClearConditionImage {

    readonly #images
    #map?: ReadonlyMap<GameStyles, T>

    public constructor(images: readonly (readonly [GameStyles, T,])[],) {
        this.#images = images
    }

    public get images(): readonly (readonly [GameStyles, T,])[] {
        return this.#images
    }

    public get map(): ReadonlyMap<GameStyles, T> {
        const value = this.#map
        if (value != null)
            return value

        const map = new Map<GameStyles, T>()
        const images = this.images
        let index = images.length
        while (--index >= 0) {
            const gameStyleAndImage = images[index]
            map.set(gameStyleAndImage[0], gameStyleAndImage[1],)
        }
        return this.#map = map
    }

    public get(gameStyle: GameStyles,): T {
        const map = this.map
        if (map.has(gameStyle,))
            return map.get(gameStyle,)!
        throw new ReferenceError(`The game style "${gameStyle.englishName}" does not exist for the clear condition image.`,)
    }

}
