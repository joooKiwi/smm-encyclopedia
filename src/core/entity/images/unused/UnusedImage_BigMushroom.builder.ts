import type {ImageName_BigMushroom_Unused_SMM1} from './UnusedImage';
import type {UnusedImage_BigMushroom}           from './UnusedImage_BigMushroom';

import {GameStyles}                       from '../GameStyles';
import {UnusedImage_BigMushroomContainer} from './UnusedImage_BigMushroom.container';
import {UnusedImageBuilder}               from './UnusedImage.builder';

/**
 * @predefinedBuilder
 */
export class UnusedImage_BigMushroomBuilder
    extends UnusedImageBuilder<UnusedImage_BigMushroom, ImageName_BigMushroom_Unused_SMM1> {

    //region -------------------- Attributes --------------------

    #identifierMap = new Map<ImageIdentifier, PossibleImageNumber>();

    //endregion -------------------- Attributes --------------------

    public constructor(name: ImageName_BigMushroom_Unused_SMM1,) {
        super(name);
    }

    //region -------------------- Getter & setter methods --------------------

    protected get _identifierMap(): ReadonlyMap<ImageIdentifier, PossibleImageNumber> {
        return this.#identifierMap;
    }

    public setImage(identifier: ImageIdentifier, images: readonly ImageNumber[],): this
    public setImage(identifier: ImageIdentifier, amount: AmountOfImages,): this
    public setImage(identifier: ImageIdentifier,): this
    public setImage(identifier: ImageIdentifier, amount_or_images?: | AmountOfImages | readonly ImageNumber[],): this {
        if (amount_or_images == null)
            this.#identifierMap.set(identifier, null,);
        else if (typeof amount_or_images == 'number')
            this.#identifierMap.set(identifier, [...new Array(amount_or_images)].map((_, index,) => index as ImageNumber),);
        else
            this.#identifierMap.set(identifier, amount_or_images,);
        return this;
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Build utility methods --------------------

    protected _getImagePath(identifier: ImageIdentifier, images: PossibleImageNumber) {
        if (images == null)
            return [`${GameStyles.SUPER_MARIO_BROS.gameAcronym} A - ${this.simpleImageName}/${identifier}.tiff`,];
        return images.map(number => `${GameStyles.SUPER_MARIO_BROS.gameAcronym} A - ${this.simpleImageName}/${identifier}.${number}.tiff`);
    }


    //endregion -------------------- Build utility methods --------------------

    public build(): UnusedImage_BigMushroom {
        return new UnusedImage_BigMushroomContainer([...this._identifierMap.entries()].map(([identifier, images,]) => this._getImagePath(identifier, images,)));
    }

}

export type ImageIdentifier = | 'anger' | 'blink' | 'weep' | 'damage' | 'kutsu' | 'swim' | 'walk' | 'out' | 'wait' | 'fire' | 'senkan_houdai_ball';
export type ImageNumber = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type AmountOfImages = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type PossibleImageNumber = | readonly ImageNumber[] | null;