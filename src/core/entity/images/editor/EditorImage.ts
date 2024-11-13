import type {Array, Nullable}  from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {EditorImageFile} from 'core/entity/file/EntityImageFile'
import type {GameStyles}      from 'core/gameStyle/GameStyles'
import type {Themes}          from 'core/theme/Themes'
import type {Times}           from 'core/time/Times'

export interface EditorImage<out T extends EditorImageFile = EditorImageFile, > {

    /** Get all the images with no association */
    readonly images: Array<T>
    /** Get all the images with their association {@link Times}, {@link GameStyles} and {@link Times} */
    readonly imagesWithAssociation: Array<readonly [Times, GameStyles, Themes, T,]>

    /** Get the images from a possible {@link GameStyles}, {@link Themes} and {@link Times} */
    get(gameStyle?: Nullable<GameStyles>, theme?: Nullable<Themes>, time?: Nullable<Times>,): CollectionHolder<T>

    /** Get the images from a possible {@link Themes} */
    getFromTheme(theme: Nullable<Themes>,): CollectionHolder<T>

    /** Get the images from a possible {@link GameStyles} */
    getFromGameStyle(gameStyle: Nullable<GameStyles>,): CollectionHolder<T>

    /** Get the images from a possible {@link Times} */
    getFromTime(time: Nullable<Times>,): CollectionHolder<T>

}
