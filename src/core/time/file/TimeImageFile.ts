import type {PossibleSimpleImagePath} from 'core/time/Times.types'
import type {ImageFile}               from 'util/file/image/ImageFile'

/** An {@link ImageFile} made to be related to a {@link Times} */
export type TimeImageFile = ImageFile<'time', PossibleSimpleImagePath, 'png'>
