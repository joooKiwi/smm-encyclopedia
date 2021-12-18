import type {ImageWithLeftVariation}                                          from './Image';
import type {PossibleBasicPath, PossibleLeftVariationImagePath, PossiblePath} from '../path/ClassWithPath';

import {AbstractImage} from './AbstractImage';

export class ImageWithLeftVariationContainer<PATH extends PossiblePath = PossiblePath, >
    extends AbstractImage<PATH, PossibleBasicPath<PATH>, null, PossibleLeftVariationImagePath<PATH>, null>
    implements ImageWithLeftVariation<PATH> {

    public constructor(path: PATH, amountOfImagesOnJump?: | 1 | 3,) {
        super(`${ImageWithLeftVariationContainer.BASIC_STARTING_PATH}${path}`,
            null,
            `${ImageWithLeftVariationContainer.BASIC_STARTING_PATH}${path}${ImageWithLeftVariationContainer.LEFT_VARIATION_PATH}`,
            null,
            amountOfImagesOnJump,);
    }

    protected _createPaths() {
        return [this._basicPath, this._leftVariationPath,] as const;
    }

}
