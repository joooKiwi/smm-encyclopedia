import type {UnusedImage_BigMushroom} from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {Builder}                 from 'util/builder/Builder'
import type {NullOr}                  from 'util/types/nullable'

import {EmptyUnusedImage_BigMushroom} from 'core/entity/images/unused/EmptyUnusedImage_BigMushroom'

export class UnusedImage_BigMushroomFactory {

    private constructor() {
        throw new TypeError('This class cannot be instantiated.')
    }

    /**
     * Create unused images for the {@link EmptyUnusedImage_BigMushroom Big Mushroom}
     * based on the value received.
     *
     * @param builder the builder or null
     */
    public static create(builder: NullOr<Builder<UnusedImage_BigMushroom>>,): UnusedImage_BigMushroom {
        return builder == null
            ? EmptyUnusedImage_BigMushroom.get
            : builder.build()
    }

}
