import type {BasicImage}                      from './Image';
import type {PossibleBasicPath, PossiblePath} from '../path/ClassWithPath';

import {AbstractImage} from './AbstractImage';

export class BasicImageContainer<PATH extends PossiblePath = PossiblePath, >
    extends AbstractImage<PATH, PossibleBasicPath<PATH>, null, null, null>
    implements BasicImage<PATH> {

    public constructor(basicPath: PATH, amountOfImagesOnJump?: | 1 | 3,) {
        super(`${BasicImageContainer.BASIC_STARTING_PATH}${basicPath}`,
            null,
            null,
            null,
            amountOfImagesOnJump,);
    }

    protected _createPaths() {
        return [this._basicPath] as const;
    }

}
