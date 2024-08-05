import type {UnusedSMM1RegularImageFile} from 'core/entity/file/EntityImageFile.unused'
import type {UnusedImage_Regular}        from 'core/entity/images/unused/UnusedImage_Regular'
import type {GameStyles}                 from 'core/gameStyle/GameStyles'

export class UnusedImage_RegularContainer
    implements UnusedImage_Regular {

    readonly #images
    #all?: ReadonlyMap<GameStyles, readonly (readonly [UnusedSMM1RegularImageFile,])[]>

    public constructor(images: readonly (readonly [GameStyles, UnusedSMM1RegularImageFile,])[]) {
        this.#images = images
    }

    public get images(): readonly (readonly [GameStyles, UnusedSMM1RegularImageFile,])[] {
        return this.#images
    }

    public get all(): ReadonlyMap<GameStyles, readonly (readonly [UnusedSMM1RegularImageFile,])[]> {
        const value = this.#all
        if (value != null)
            return value

        const map = new Map<GameStyles, (readonly [UnusedSMM1RegularImageFile,])[]>()
        const images = this.images
        let index = images.length
        while (--index > 0) {
            const [gameStyle, image,] = images[index]
            if (map.has(gameStyle,))
                map.get(gameStyle,)!.push([image,],)
            else
                map.set(gameStyle, [[image,],],)
        }

        return this.#all = map
    }

}
