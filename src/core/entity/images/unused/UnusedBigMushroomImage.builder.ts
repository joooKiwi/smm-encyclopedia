import type {Builder}                                                                                                                              from '../../../../util/Builder';
import type {ImageName_BigMushroom_Unused_SMM1}                                                                                                    from './UnusedImage';
import type {PossibleUnusedBigMushroomImage, UnusedBigMushroomImage_ClownCar, UnusedBigMushroomImage_Goomba, UnusedBigMushroomInGameImage_Stretch} from './UnusedBigMushroomImage';

import {GameStyles}                      from '../GameStyles';
import {UnusedBigMushroomImageContainer} from './UnusedBigMushroomImage.container';

/**
 * @predefinedBuilder
 */
export class UnusedBigMushroomImageBuilder
    implements Builder<PossibleUnusedBigMushroomImage> {

    //region -------------------- Attributes --------------------

    readonly #simpleImageName: ImageName_BigMushroom_Unused_SMM1;
    readonly #hasPathInSameAsEnemy;

    //endregion -------------------- Attributes --------------------

    public constructor(name: ImageName_BigMushroom_Unused_SMM1,) {
        this.#simpleImageName = name;
        this.#hasPathInSameAsEnemy = this.simpleImageName !== 'Kuribo';
    }

    //region -------------------- Getter & setter methods --------------------

    public get simpleImageName(): ImageName_BigMushroom_Unused_SMM1 {
        return this.#simpleImageName;
    }

    protected get _pathInEnemy() {
        return this.#hasPathInSameAsEnemy ? '' : 'Unused/';
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Build utility methods --------------------

    protected _getImagePath(identifier: ImageIdentifier, ...numbers: [ImageNumber,]): readonly [string,]
    protected _getImagePath(identifier: ImageIdentifier, ...numbers: [ImageNumber, ImageNumber,]): readonly [string, string,]
    protected _getImagePath(identifier: ImageIdentifier, ...numbers: [ImageNumber, ImageNumber, ImageNumber, ImageNumber,]): readonly [string, string, string, string,]
    protected _getImagePath(identifier: ImageIdentifier, ...numbers: ImageNumber[]) {
        return numbers.map(number => `${GameStyles.SUPER_MARIO_BROS.gamePath_inGameSmm1}Big Mushroom/Enemy - ${this.simpleImageName}/${this._pathInEnemy}${identifier}.${number}.png`) as unknown as readonly [string,] | readonly [string, string,] | readonly [string, string, string, string,] | readonly [string, string, string,];
    }


    //endregion -------------------- Build utility methods --------------------

    public build(): PossibleUnusedBigMushroomImage {
        switch (this.simpleImageName) {
            case 'KoopaClown':
                return new UnusedBigMushroomImageContainer(
                    this._getImagePath('wait', 4, 5, 6, 7,), this._getImagePath('anger', 4, 5, 6, 7,), this._getImagePath('blink', 4, 5, 6, 7,), this._getImagePath('weep', 4, 5, 6, 7,),
                    null, null, null, null,
                    null, null, null, null,
                ) as UnusedBigMushroomImage_ClownCar;
            case 'Kuribo':
                return new UnusedBigMushroomImageContainer(
                    null, null, null, null,
                    this._getImagePath('damage', 0,), this._getImagePath('swim', 0, 1,), this._getImagePath('walk', 0, 1,), this._getImagePath('kutsu', 0,),
                    null, null, null, null,
                ) as UnusedBigMushroomImage_Goomba;
            case 'Necchi':
                return new UnusedBigMushroomImageContainer(
                    null, null, null, null,
                    null, null, null, null,
                    this._getImagePath('wait', 0,), this._getImagePath('wait', 1,), this._getImagePath('wait', 2,), this._getImagePath('out', 4,),
                ) as UnusedBigMushroomInGameImage_Stretch;
        }
    }

}

export type ImageIdentifier = | 'anger' | 'blink' | 'weep' | 'damage' | 'kutsu' | 'swim' | 'walk' | 'out' | 'wait';
export type ImageNumber = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
