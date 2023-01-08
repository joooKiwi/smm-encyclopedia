import type {ClassWithEntityEnglishName}     from 'core/ClassWithEnglishName'
import type {EditorImage}                    from 'core/entity/images/editor/EditorImage'
import type {PossibleImageReceivedOnFactory} from 'core/entity/images/editor/EditorImage.types'

import {EmptyEditorImage}          from 'core/entity/images/editor/EmptyEditorImage'
import {GenericEditorImageBuilder} from 'core/entity/images/editor/GenericEditorImage.builder'

export class EditorImageFactory {

    public static readonly EMPTY_EDITOR_IMAGE = EmptyEditorImage.get

    private constructor() {
        throw new TypeError('This class cannot be instantiated.')
    }

    /**
     * Create the {@link EditorImage image}
     * based on the value received.
     *
     * @param entity The entity to retrieve its english name
     * @param builderOrName the builder, the name or null
     */
    public static create(entity: ClassWithEntityEnglishName, builderOrName: PossibleImageReceivedOnFactory,): EditorImage {
        return builderOrName == null
            ? this.EMPTY_EDITOR_IMAGE
            : typeof builderOrName == 'string'
                ? new GenericEditorImageBuilder(entity, builderOrName,).setAllGameStyles().build()
                : builderOrName.build()
    }

}
