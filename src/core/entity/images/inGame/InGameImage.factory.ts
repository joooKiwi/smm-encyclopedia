import type {InGameImage} from 'core/entity/images/inGame/InGameImage'
import type {Builder}     from 'util/builder/Builder'
import type {NullOr}      from 'util/types/nullable'

import {EmptyInGameImage} from 'core/entity/images/inGame/EmptyInGameImage'

export class InGameImageFactory {

    public static EMPTY_IN_GAME_IMAGE = EmptyInGameImage.get

    private constructor() {
        throw new TypeError('This class cannot be instantiated.')
    }

    /**
     * Create the {@link InGameImage image}
     * based on the value received.
     *
     * @param builderOrImage the image, builder or null
     */
    public static create(builderOrImage: NullOr<| InGameImage | Builder<InGameImage>>,): InGameImage {
        return builderOrImage == null
            ? this.EMPTY_IN_GAME_IMAGE
            : 'build' in builderOrImage
                ? builderOrImage.build()
                : builderOrImage
    }

}
