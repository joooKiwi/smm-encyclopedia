import type {InGameImage_SMM1} from 'core/entity/images/inGame/InGameImage_SMM1'
import type {Builder}          from 'util/builder/Builder'
import type {NullOr}           from 'util/types/nullable'

import {EmptyInGameImage} from 'core/entity/images/inGame/EmptyInGameImage'

export class InGameImage_SMM1Factory {

    public static EMPTY_IN_GAME_IMAGE = EmptyInGameImage.get

    private constructor() {
        throw new TypeError('This class cannot be instantiated.')
    }

    /**
     * Create the {@link InGameImage_SMM1 image}
     * based on the value received.
     *
     * @param builder the builder or null
     */
    public static create(builder: NullOr<Builder<InGameImage_SMM1>>,): InGameImage_SMM1 {
        return builder == null
            ? this.EMPTY_IN_GAME_IMAGE
            : builder.build()
    }

}
