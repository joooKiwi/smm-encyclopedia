import type {EditorImageFile}                                     from 'core/entity/file/EditorImageFile'
import type {ImageNumber, PossibleAmountOfImages}                 from 'core/entity/images/editor/EditorImage.types'
import type {PossibleAcronym}                                     from 'core/gameStyle/GameStyles.types'
import type {DayOrNightGameName, PossibleEnglishName_CourseTheme} from 'core/theme/Themes.types'
import type {PossibleEnglishName}                                 from 'core/time/Times.types'

export interface GenericEditorImageFile
    extends EditorImageFile<PossibleGenericEditorPartialFileName, PossibleGenericEditorPartialFallbackName> {
}

export type PossibleGenericEditorPartialFileName = `_${| '' | `${DayOrNightGameName}_`}0${ImageNumber}`
export type PossibleGenericEditorPartialFallbackName = `${PossibleAcronym}${| '' | ` ${PossibleEnglishName_CourseTheme}`} ${PossibleEnglishName} #${PossibleAmountOfImages}`
