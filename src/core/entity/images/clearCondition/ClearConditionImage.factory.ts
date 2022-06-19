import type {ClearConditionImage}            from './ClearConditionImage';
import type {PossibleImageReceivedOnFactory} from './ClearConditionImage.types';

import {ClearConditionImageBuilder} from './ClearConditionImage.builder';
import {EmptyClearConditionImage}   from './EmptyClearConditionImage';

export class ClearConditionImageFactory {

    private constructor() {
        throw new TypeError('This class cannot be instantiated.');
    }

    /**
     * Create the {@link ClearConditionImage image}
     * based on the value received.
     *
     * @param builder_or_image the builder, the name or null
     */
    public static create(builder_or_image: PossibleImageReceivedOnFactory,): ClearConditionImage {
        return builder_or_image == null
            ? EmptyClearConditionImage.get
            : typeof builder_or_image == 'string'
                ? new ClearConditionImageBuilder(builder_or_image).setAllGameStyles().build()
                : builder_or_image.build();
    }

}
