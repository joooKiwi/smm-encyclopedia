import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'
import type {SimpleImageName}            from 'core/entity/images/editor/EditorImage.types'

import {GenericEditorImageBuilder} from 'core/entity/images/editor/GenericEditorImage.builder'
import {EMPTY_MAP}                 from 'util/emptyVariables'

/**
 * A {@link EditorImage} that is only a sub-image from another reference.
 *
 * It only implies images that are implied by the game,
 * but with a name that is another one.
 */
export class GenericSubEditorImageBuilder<NAME extends NonNullable<SimpleImageName> = NonNullable<SimpleImageName>, >
    extends GenericEditorImageBuilder<NAME> {

    public constructor(entity: ClassWithEntityEnglishName, simpleImageName: NAME,) {
        super(entity, simpleImageName,)
    }

    protected override _createDefaultImages() {
        return EMPTY_MAP
    }

}
