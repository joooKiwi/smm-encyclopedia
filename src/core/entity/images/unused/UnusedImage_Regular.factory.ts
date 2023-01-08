import type {UnusedImage_Regular} from 'core/entity/images/unused/UnusedImage_Regular'
import type {Builder}             from 'util/builder/Builder'
import type {NullOr}              from 'util/types/nullable'

import {EmptyUnusedImage_Regular} from 'core/entity/images/unused/EmptyUnusedImage_Regular'

export class UnusedImage_RegularFactory {

    private constructor() {
        throw new TypeError('This class cannot be instantiated.')
    }

    /**
     * Create both {@link EmptyUnusedImage_Regular regular} unused images
     * based on the value received.
     *
     * @param builder the builder or null
     */
    public static create(builder: NullOr<Builder<UnusedImage_Regular>>,): UnusedImage_Regular {
        return builder == null
            ? EmptyUnusedImage_Regular.get
            : builder.build()
    }

}
