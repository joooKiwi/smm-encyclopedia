import type {EditorImage}                    from './EditorImage'
import type {PossibleImageReceivedOnFactory} from './EditorImage.types'

import {EditorImageBuilder} from './EditorImage.builder'
import {EmptyEditorImage}   from './EmptyEditorImage'

export class EditorImageFactory {

    public static readonly EMPTY_EDITOR_IMAGE = EmptyEditorImage.get

    private constructor() {
        throw new TypeError('This class cannot be instantiated.')
    }

    /**
     * Create the {@link EditorImage image}
     * based on the value received.
     *
     * @param builder_or_image the builder, the name or null
     */
    public static create(builder_or_image: PossibleImageReceivedOnFactory,): EditorImage {
        return builder_or_image == null
            ? this.EMPTY_EDITOR_IMAGE
            : typeof builder_or_image == 'string'
                ? new EditorImageBuilder(builder_or_image).setAllGameStyles().build()
                : builder_or_image.build()
    }

}