import type {CollectionHolder} from '@joookiwi/collection'

import type {EditorImageFile}   from 'core/entity/file/EntityImageFile'
import type {EditorEntityImage} from 'core/entity/images/EditorEntityImage'
import type {EditorImage}       from 'core/entity/images/editor/EditorImage'
import type {GameStyles}        from 'core/gameStyle/GameStyles'
import type {Themes}            from 'core/theme/Themes'
import type {Times}             from 'core/time/Times'

export class EditorEntityImageContainer<const T extends EditorImageFile, >
    implements EditorEntityImage<T> {

    readonly #reference

    public constructor(reference: EditorImage<T>,) { this.#reference = reference }

    public get images(): CollectionHolder<T> { return this.#reference.images }

    public get imagesWithAssociation(): CollectionHolder<readonly [Times, GameStyles, Themes, T,]> { return this.#reference.imagesWithAssociation }

    public get(gameStyle: GameStyles,): CollectionHolder<T> { return this.#reference.getFromGameStyle(gameStyle,) }
    public getSmb(): CollectionHolder<T> { return this.#reference.getSmb() }
    public getSmb3(): CollectionHolder<T> { return this.#reference.getSmb3() }
    public getSmw(): CollectionHolder<T> { return this.#reference.getSmw() }
    public getNsmbu(): CollectionHolder<T> { return this.#reference.getNsmbu() }
    public getSm3dw(): CollectionHolder<T> { return this.#reference.getSm3dw() }

}
