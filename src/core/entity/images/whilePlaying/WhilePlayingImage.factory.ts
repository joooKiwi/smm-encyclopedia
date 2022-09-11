import type {WhilePlayingImage}              from './WhilePlayingImage';
import type {PossibleImageReceivedOnFactory} from './WhilePlayingImage.types';

import {EmptyWhilePlayingImage} from './EmptyWhilePlayingImage';

export class WhilePlayingImageFactory {

    public static EMPTY_WHILE_PLAYING_IMAGE = EmptyWhilePlayingImage.get;

    private constructor() {
        throw new TypeError('This class cannot be instantiated.');
    }

    /**
     * Create the {@link WhilePlayingImage image}
     * based on the value received.
     *
     * @param builder_or_image the builder or null
     */
    public static create(builder_or_image: PossibleImageReceivedOnFactory,): WhilePlayingImage {
        return builder_or_image == null
            ? this.EMPTY_WHILE_PLAYING_IMAGE
            : builder_or_image.build();
    }

}
