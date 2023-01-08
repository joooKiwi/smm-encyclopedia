import type {EditorImageFile}                   from 'core/entity/file/EditorImageFile'
import type {ImageWithTimesThemesAndGameStyles} from 'core/entity/images/ImageWithTimesThemesAndGameStyles'

/** The base of the editor image used for a {@link Entities} */
export interface EditorImage
    extends ImageWithTimesThemesAndGameStyles<EditorImageFile> {
}
