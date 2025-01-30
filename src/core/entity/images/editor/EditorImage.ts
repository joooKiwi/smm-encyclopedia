import type {Nullable}         from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {EditorImageFile} from 'core/entity/file/EntityImageFile'
import type {GameStyles}      from 'core/gameStyle/GameStyles'
import type {Themes}          from 'core/theme/Themes'
import type {Times}           from 'core/time/Times'

export interface EditorImage<out T extends EditorImageFile = EditorImageFile, > {

    /** All the images with no association */
    readonly images: CollectionHolder<T>
    /** All the images with their association {@link Times}, {@link GameStyles} and {@link Times} */
    readonly imagesWithAssociation: CollectionHolder<readonly [Times, GameStyles, Themes, T,]>

    /** Get the images from a possible {@link GameStyles}, {@link Themes} and {@link Times} */
    get(gameStyle?: Nullable<GameStyles>, theme?: Nullable<Themes>, time?: Nullable<Times>,): CollectionHolder<T>

    /** Get the images from a possible {@link Themes} */
    getFromTheme(theme: Nullable<Themes>,): CollectionHolder<T>

    /** Get the images from a possible {@link GameStyles} */
    getFromGameStyle(gameStyle: Nullable<GameStyles>,): CollectionHolder<T>

    /** Get the images from a possible {@link Times} */
    getFromTime(time: Nullable<Times>,): CollectionHolder<T>


    /** An alias method to {@link get}({@link SMB}) */
    getSmb(): CollectionHolder<T>

    /** An alias method to {@link get}({@link SMB3}) */
    getSmb3(): CollectionHolder<T>

    /** An alias method to {@link get}({@link SMW}) */
    getSmw(): CollectionHolder<T>

    /** An alias method to {@link get}({@link NSMBU}) */
    getNsmbu(): CollectionHolder<T>

    /** An alias method to {@link get}({@link SM3DW}) */
    getSm3dw(): CollectionHolder<T>

}
