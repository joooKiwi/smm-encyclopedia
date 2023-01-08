import type {ClassWithEnglishName}                                                                                   from 'core/ClassWithEnglishName'
import type {PossibleEnglishName}                                                                                    from 'core/entity/Entities.types'
import type {PossiblePowerUpEditorPartialFallbackName, PossiblePowerUpEditorPartialFileName, PowerUpEditorImageFile} from 'core/entity/file/PowerUpEditorImageFile'
import type {PowerUpImageNumber, SimpleImageName}                                                                    from 'core/entity/images/editor/EditorImage.types'
import type {GameStyles}                                                                                             from 'core/gameStyle/GameStyles'

import {AbstractEditorImageFile} from 'core/entity/file/AbstractEditorImageFile'

export class PowerUpEditorImageFileContainer
    extends AbstractEditorImageFile<PossiblePowerUpEditorPartialFileName, PossiblePowerUpEditorPartialFallbackName>
    implements PowerUpEditorImageFile {

    public constructor(gameStyle: GameStyles, entity: ClassWithEnglishName<PossibleEnglishName>, name: NonNullable<SimpleImageName>, imageNumber: PowerUpImageNumber, isStandalone: boolean,) {
        super(gameStyle, entity, name, `${isStandalone ? '_' : 'Uni_'}0${imageNumber}`, `${gameStyle.acronym} ${isStandalone ? 'standalone' : 'with mushroom'}`,)
    }

}
