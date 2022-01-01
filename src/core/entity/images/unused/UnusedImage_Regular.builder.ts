import type {ImageName_Unused_SMM1}                            from './UnusedImage';
import type {PossibleUnusedImage_Regular, UnusedImage_Regular} from './UnusedImage_Regular';

import {GameStyles}                   from '../GameStyles';
import {UnusedImage_RegularContainer} from './UnusedImage_Regular.container';
import {UnusedImageBuilder}           from './UnusedImage.builder';

export class UnusedImage_RegularBuilder
    extends UnusedImageBuilder<PossibleUnusedImage_Regular, ImageName_Unused_SMM1> {

    public constructor(name: ImageName_Unused_SMM1,) {
        super(name,);
    }

    protected _getImagePath(identifier: ImageIdentifier, number: ImageNumber,): readonly [string,] {
        return [`${GameStyles.SUPER_MARIO_BROS.gamePath_inGameSmm1}Unused/Enemy - ${this.simpleImageName}/${identifier}.${number}.png`,];
    }


    public build(): UnusedImage_Regular {
        return new UnusedImage_RegularContainer(
            this._getImagePath('out', 4,),
            this._getImagePath('wait', 1,),
        );
    }

}

export type ImageIdentifier = | 'out' | 'wait';
export type ImageNumber = | 1 | 4;
