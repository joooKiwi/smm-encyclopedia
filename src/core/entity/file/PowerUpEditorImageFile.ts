import type {EditorImageFile}                                from 'core/entity/file/EditorImageFile'
import type {PowerUpImageNumber, VariantEditorImage_PowerUp} from 'core/entity/images/editor/EditorImage.types'
import {PossibleAcronym}                                     from 'core/gameStyle/GameStyles.types'

export interface PowerUpEditorImageFile
    extends EditorImageFile<PossiblePowerUpEditorPartialFileName, PossiblePowerUpEditorPartialFallbackName> {
}

export type PossiblePowerUpEditorPartialFileName = `${| '_' | `${VariantEditorImage_PowerUp}_`}0${PowerUpImageNumber}`
export type PossiblePowerUpEditorPartialFallbackName = `${PossibleAcronym} ${'standalone' | 'with mushroom'}`
