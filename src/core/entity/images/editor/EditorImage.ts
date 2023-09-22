import type {EditorImageFile} from 'core/entity/file/EntityImageFile.editor'
import type {Image}           from 'core/entity/images/Image'
import type {GameStyles}      from 'core/gameStyle/GameStyles'
import type {Themes}          from 'core/theme/Themes'
import type {Times}           from 'core/time/Times'

/** The base of the editor image used for a {@link Entities} */
export interface EditorImage<out T extends EditorImageFile = EditorImageFile, >
    extends Image {

    get all(): readonly T[]

    get map(): EditorMap<T>

    get(gameStyle?: Nullable<GameStyles>, theme?: Nullable<Themes>, time?: Nullable<Times>,): readonly T[]

}

/** A simple type-alias of a {@link Map} of {@link Times} of {@link GameStyles} of {@link Themes} of {@link EditorImageFile} */
export type EditorMap<T extends EditorImageFile,> = ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly T[]>>>
