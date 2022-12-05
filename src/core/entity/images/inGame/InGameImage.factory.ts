import type {InGameImage}                    from 'core/entity/images/inGame/InGameImage'
import type {PossibleImageReceivedOnFactory} from 'core/entity/images/inGame/InGameImage.types'

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
     * @param builder the builder or null
     */
    public static create(builder: PossibleImageReceivedOnFactory,): InGameImage {
        return builder == null
            ? this.EMPTY_IN_GAME_IMAGE
            : builder.build()
    }

}
