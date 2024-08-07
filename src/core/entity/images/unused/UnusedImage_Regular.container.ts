import type {UnusedImageFile}     from 'core/entity/file/EntityImageFile'
import type {UnusedImage_Regular} from 'core/entity/images/unused/UnusedImage_Regular'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

export class UnusedImage_RegularContainer<const out T extends UnusedImageFile, >
    implements UnusedImage_Regular {

    readonly #images
    #all?: ReadonlyMap<GameStyles, readonly (readonly [T,])[]>

    public constructor(images: readonly (readonly [GameStyles, T,])[]) {
        this.#images = images
    }

    public get images(): readonly (readonly [GameStyles, T,])[] {
        return this.#images
    }

    public get all(): ReadonlyMap<GameStyles, readonly (readonly [T,])[]> {
        const value = this.#all
        if (value != null)
            return value

        const map = new Map<GameStyles, (readonly [T,])[]>()
        const images = this.images
        let index = images.length
        while (--index >= 0) {
            const gameStyleAndImage = images[index]
            const gameStyle = gameStyleAndImage[0]
            if (map.has(gameStyle,))
                map.get(gameStyle,)!.push([gameStyleAndImage[1],],)
            else
                map.set(gameStyle, [[gameStyleAndImage[1],],],)
        }

        return this.#all = map
    }

}
