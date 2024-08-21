import type {EntityImage}     from 'core/entity/images/EntityImage'
import type {EditorImageFile} from 'core/entity/file/EntityImageFile'
import type {Times}           from 'core/time/Times'
import type {GameStyles}      from 'core/gameStyle/GameStyles'
import type {Themes}          from 'core/theme/Themes'

export interface EditorEntityImage<out T extends EditorImageFile = EditorImageFile, >
    extends EntityImage<T> {

    readonly imagesWithAssociation: readonly (readonly [Times, GameStyles, Themes, T,])[]

}
