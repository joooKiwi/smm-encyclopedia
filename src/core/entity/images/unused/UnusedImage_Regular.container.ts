import type {CollectionHolder}    from '@joookiwi/collection'
import type {Array, MutableArray} from '@joookiwi/type'

import type {UnusedImageFile}     from 'core/entity/file/EntityImageFile'
import type {UnusedImage_Regular} from 'core/entity/images/unused/UnusedImage_Regular'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

export class UnusedImage_RegularContainer<const T extends UnusedImageFile, >
    implements UnusedImage_Regular {

    readonly #images
    #all?: ReadonlyMap<GameStyles, Array<readonly [T,]>>

    public constructor(images: CollectionHolder<readonly [GameStyles, T,]>,) {
        this.#images = images
    }

    public get images(): CollectionHolder<readonly [GameStyles, T,]> {
        return this.#images
    }

    public get all(): ReadonlyMap<GameStyles, Array<readonly [T,]>> {
        const value = this.#all
        if (value != null)
            return value

        const map = new Map<GameStyles, MutableArray<readonly [T,]>>()
        this.images.forEach(it => {
            const gameStyle = it[0]
            if (map.has(gameStyle,))
                map.get(gameStyle,)!.push([it[1],],)
            else
                map.set(gameStyle, [[it[1],],],)
        },)

        return this.#all = map
    }

}
