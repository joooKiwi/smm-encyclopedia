import type {ClassWithEntityEnglishName}                                                              from 'core/ClassWithEnglishName'
import type {EditorImageFile, ImageFilePath, PossibleEditorFallbackName, PossibleEditorImageFileName} from 'core/entity/file/EditorImageFile'
import type {SimpleImageName}                                                                         from 'core/entity/images/editor/EditorImage.types'
import type {GameStyles}                                                                              from 'core/gameStyle/GameStyles'

import {AbstractEntityImageFile} from 'core/entity/file/AbstractEntityImageFile'

export abstract class AbstractEditorImageFile<PARTIAL_NAME extends string, PARTIAL_FALLBACK_NAME extends string, >
    extends AbstractEntityImageFile<ImageFilePath, PossibleEditorImageFileName<PARTIAL_NAME>, 'tiff', PossibleEditorFallbackName<PARTIAL_FALLBACK_NAME>>
    implements EditorImageFile {

    protected constructor(gameStyle: GameStyles, entity: ClassWithEntityEnglishName, name: NonNullable<SimpleImageName>, partialName: PARTIAL_NAME, partialFallbackName: PARTIAL_FALLBACK_NAME,) {
        super(entity, `${gameStyle.shortImagePath}/Editor`, `${gameStyle.gameAcronym}_Lyt_P_${name}${partialName}`, 'tiff', `Editor ${partialFallbackName}`,)
    }

}
