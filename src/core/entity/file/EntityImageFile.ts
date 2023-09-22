import type {EditorImageFile}         from 'core/entity/file/EntityImageFile.editor'
import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile.clearCondition'
import type {InGameImageFile}         from 'core/entity/file/EntityImageFile.inGame'
import type {UnusedSMM1ImageFile}     from 'core/entity/file/EntityImageFile.unused'

/**
 * An {@link ImageFile} made to be related to an {@link Entities}
 *
 * @see EditorImageFile
 * @see GenericEditorImageFile
 * @see PowerUpEditorImageFile
 * @see ClearConditionImageFile
 * @see InGameImageFile
 * @see InGameSMM1ImageFile
 * @see InGameSMM2ImageFile
 * @see UnusedSMM1ImageFile
 * @see UnusedSMM1RegularImageFile
 * @see UnusedSMM1BigMushroomImageFile
 */
export type EntityImageFile = | EditorImageFile | ClearConditionImageFile | InGameImageFile | UnusedSMM1ImageFile

