import type {InGameImage}                    from './InGameImage';
import type {PossibleImageReceivedOnFactory} from './InGameImage.types';

import {EmptyInGameImage} from './EmptyInGameImage';

export class InGameImageFactory {

    private constructor() {
        throw new TypeError('This class cannot be instantiated.');
    }

    /**
     * Create the {@link InGameImage image}
     * based on the value received.
     *
     * @param builder_or_image the builder or null
     */
    public static create(builder_or_image: PossibleImageReceivedOnFactory,): InGameImage {
        return builder_or_image == null
            ? EmptyInGameImage.get
            : builder_or_image.build();
    }

}
