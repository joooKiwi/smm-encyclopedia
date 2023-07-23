import type {ClassWithEnglishName}                                                                                   from 'core/ClassWithEnglishName'
import type {PossibleEnglishName}                                                                                    from 'core/entity/Entities.types'
import type {GenericEditorImageFile, PossibleGenericEditorPartialFallbackName, PossibleGenericEditorPartialFileName} from 'core/entity/file/GenericEditorImageFile'
import type {ImageNumber, PossibleAmountOfImages, SimpleImageName}                                                   from 'core/entity/images/editor/EditorImage.types'
import type {GameStyles}                                                                                             from 'core/gameStyle/GameStyles'
import type {Themes}                                                                                                 from 'core/theme/Themes'
import type {PossibleEnglishName_CourseTheme}                                                                        from 'core/theme/Themes.types'
import type {Times}                                                                                                  from 'core/time/Times'

import {AbstractEditorImageFile} from 'core/entity/file/AbstractEditorImageFile'

/** A generic "Editor" image for the {@link Entities} */
// @ts-ignore
export class GenericEditorImageFileContainer
    extends AbstractEditorImageFile<PossibleGenericEditorPartialFileName, PossibleGenericEditorPartialFallbackName>
    implements GenericEditorImageFile {

    public constructor(gameStyle: GameStyles, theme: Nullable<Themes>, time: Times, entity: ClassWithEnglishName<PossibleEnglishName>, name: NonNullable<SimpleImageName>, imageNumber: PossibleAmountOfImages,) {
        super(gameStyle, entity, name,
            `_${theme == null ? '' : `${theme.getGameName(time,)}_` as const}0${imageNumber - 1 as ImageNumber}`,
            `${gameStyle.acronym}${theme == null ? '' : ` ${theme.englishName as PossibleEnglishName_CourseTheme}` as const} ${time.englishName} #${imageNumber}`,
        )
    }

}
