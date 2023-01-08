import type {EntityImageFile}                             from 'core/entity/file/EntityImageFile'
import {SimpleImageName}                                  from 'core/entity/images/editor/EditorImage.types'
import type {PossibleGameAcronym, PossibleShortImagePath} from 'core/gameStyle/GameStyles.types'

export interface EditorImageFile<PARTIAL_NAME extends string = string, PARTIAL_FALLBACK_NAME extends string = string, >
    extends EntityImageFile<ImageFilePath, PossibleEditorImageFileName<PARTIAL_NAME>, 'tiff', PossibleEditorFallbackName<PARTIAL_FALLBACK_NAME>> {
}

export type ImageFilePath = `${PossibleShortImagePath}/Editor`
/**
 * The possible basic image file name of an {@link Entities} in the editor mode
 *
 * @see PossibleGameAcronym
 * @see SimpleImageName
 */
export type PossibleEditorImageFileName<PARTIAL_NAME extends string = string, > = `${PossibleGameAcronym}_Lyt_P_${NonNullable<SimpleImageName>}${PARTIAL_NAME}`
export type PossibleEditorFallbackName<PARTIAL_FALLBACK_NAME extends string = string, > = `Editor ${PARTIAL_FALLBACK_NAME}`
