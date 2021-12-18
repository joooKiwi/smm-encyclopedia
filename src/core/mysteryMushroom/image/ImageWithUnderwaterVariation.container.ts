import type {ImageWithUnderwaterVariation}                                          from './Image';
import type {PossibleBasicPath, PossiblePath, PossibleUnderwaterVariationImagePath} from '../path/ClassWithPath';

import {AbstractImage} from './AbstractImage';

export class ImageWithUnderwaterVariationContainer<PATH extends PossiblePath = PossiblePath, >
    extends AbstractImage<PATH, PossibleBasicPath<PATH>, null, null, PossibleUnderwaterVariationImagePath<PATH>>
    implements ImageWithUnderwaterVariation<PATH> {

    public constructor(path: PATH, amountOfImagesOnJump?: | 1 | 3,) {
        super(`${ImageWithUnderwaterVariationContainer.BASIC_STARTING_PATH}${path}`,
            null,
            null,
            `${ImageWithUnderwaterVariationContainer.BASIC_STARTING_PATH}${path}${ImageWithUnderwaterVariationContainer.UNDERWATER_VARIATION_PATH}`,
            amountOfImagesOnJump,);
    }

    protected _createPaths() {
        return [this._basicPath, this._underwaterVariationPath,] as const;
    }

}
