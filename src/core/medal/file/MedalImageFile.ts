import type {ImageFile}         from 'util/file/image/ImageFile'
import type {PossibleImageName} from 'core/medal/Medals.types'

/** An {@link ImageFile} made to be related to a {@link Medals} */
export type MedalImageFile = ImageFile<'medal', PossibleImageName, 'tiff'>
