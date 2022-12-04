import type {UnusedImages}                   from 'core/entity/images/unused/UnusedImage'
import type {PossibleImageReceivedOnFactory} from 'core/entity/images/unused/UnusedImage.types'

import {EmptyUnusedImage_BigMushroom} from 'core/entity/images/unused/EmptyUnusedImage_BigMushroom'
import {EmptyUnusedImage_Regular}     from 'core/entity/images/unused/EmptyUnusedImage_Regular'

export class UnusedImageFactory {

    public static readonly EMPTY_UNUSED_IMAGES = [EmptyUnusedImage_Regular.get, EmptyUnusedImage_BigMushroom.get,] as const

    private constructor() {
        throw new TypeError('This class cannot be instantiated.')
    }

    /**
     * Create both unused images ({@link EmptyUnusedImage_BigMushroom Big Mushroom} & {@link EmptyUnusedImage_Regular Regular})
     * based on the value received.
     *
     * @param builder_or_image the builder, both builder or null
     */
    public static create(builder_or_image: PossibleImageReceivedOnFactory,): UnusedImages {
        return builder_or_image == null
            ? this.EMPTY_UNUSED_IMAGES
            : 'build' in builder_or_image
                ? [builder_or_image.build(), EmptyUnusedImage_BigMushroom.get,]
                : [
                    builder_or_image[0]?.build() ?? EmptyUnusedImage_Regular.get,
                    builder_or_image[1].build() ?? EmptyUnusedImage_BigMushroom.get,
                ]

    }

}
