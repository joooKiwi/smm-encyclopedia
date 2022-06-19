import type {ImageWithJapanese}                                          from './Image';
import type {PossibleBasicPath, PossibleJapaneseImagePath, PossiblePath} from '../path/ClassWithPath';

import {AbstractImage} from './AbstractImage';

export class ImageWithJapaneseContainer<PATH extends PossiblePath = PossiblePath, >
    extends AbstractImage<PATH, PossibleBasicPath<PATH>, PossibleJapaneseImagePath<PATH>, null, null>
    implements ImageWithJapanese<PATH> {

    public constructor(basic: PATH, amountOfImagesOnJump?: | 1 | 3,) {
        super(`${ImageWithJapaneseContainer.BASIC_STARTING_PATH}${basic}`,
            `${ImageWithJapaneseContainer.BASIC_STARTING_PATH}${basic}${ImageWithJapaneseContainer.JAPANESE_PATH}`,
            null,
            null,
            amountOfImagesOnJump,);
    }

    protected override _createPaths() {
        return [this._basicPath, this._japanesePath,] as const;
    }

}
