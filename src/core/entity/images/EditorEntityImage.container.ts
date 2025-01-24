import type {CollectionHolder} from '@joookiwi/collection'
import type {Nullable}         from '@joookiwi/type'

import type {EditorImageFile}   from 'core/entity/file/EntityImageFile'
import type {EditorEntityImage} from 'core/entity/images/EditorEntityImage'
import type {EditorImage}       from 'core/entity/images/editor/EditorImage'
import type {GameStyles}        from 'core/gameStyle/GameStyles'
import type {Themes}            from 'core/theme/Themes'
import type {Times}             from 'core/time/Times'

import {AbstractEntityImage} from 'core/entity/images/AbstractEntityImage'

export class EditorEntityImageContainer<const T extends EditorImageFile, >
    extends AbstractEntityImage<T>
    implements EditorEntityImage<T> {

    readonly #reference

    public constructor(reference: EditorImage<T>,) {
        super()
        this.#reference = reference
    }

    public get images(): CollectionHolder<T> { return this.#reference.images }

    public get imagesWithAssociation(): CollectionHolder<readonly [Times, GameStyles, Themes, T,]> { return this.#reference.imagesWithAssociation }

    public override _get(gameStyle?: Nullable<GameStyles>,): CollectionHolder<T> {
        return this.#reference.getFromGameStyle(gameStyle,)
    }

}
