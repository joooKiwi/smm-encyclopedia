import type {ImageNumber, PossibleAmountOfImages, SimpleImageName} from './ClearConditionImage.types';
import type {GameStyles as OriginalGameStyles}                     from '../../../gameStyle/GameStyles';

import {AbstractImageBuilder}         from '../AbstractImage.builder';
import {ClearConditionImageContainer} from './ClearConditionImage.container';
import {GameStyles}                   from '../GameStyles';

export class ClearConditionImageBuilder<NAME extends Exclude<SimpleImageName, null> = Exclude<SimpleImageName, null>, >
    extends AbstractImageBuilder<NAME, PossibleAmountOfImages> {

    public constructor(simpleImageName: NAME,)
    public constructor(simpleImageName: NAME, imageNumber: PossibleAmountOfImages,)
    public constructor(simpleImageName: NAME, imageNumber?: PossibleAmountOfImages,) {
        super(simpleImageName, imageNumber,);
    }

    //region -------------------- Build utility methods --------------------

    protected _getImagePath(gameStyle: GameStyles, ending: string = '',) {
        return `${gameStyle.gamePath_clearCondition}${gameStyle.gameAcronym}_Lyt_M_${this.simpleImageName}${ending}.tiff`;
    }

    protected _getAmountBasedOnValue(amountOfImages: PossibleAmountOfImages,): readonly ImageNumber[] {
        return [...new Array(amountOfImages)].map((_value, index,) => index as ImageNumber,);
    }

    protected _createNewMap(callbackThatReturnNumbers: () => readonly ImageNumber[],): ReadonlyMap<OriginalGameStyles, readonly string[]> {
        return new Map(this._gameStyles.map(gameStyle => [
            gameStyle.parent,
            callbackThatReturnNumbers().map(number => this._getImagePath(gameStyle, `_0${number}`,)),
        ]));
    }

    protected _createImages(): ReadonlyMap<OriginalGameStyles, readonly string[]> {
        const imageNumber = this.imageNumber;

        if (imageNumber != null)
            return this._createNewMap(() => [imageNumber - 1 as ImageNumber]);

        return this._createNewMap(() => this._getAmountBasedOnValue(1));
    }

    //endregion -------------------- Build utility methods --------------------

    public override build(): ClearConditionImageContainer {
        return new ClearConditionImageContainer(this._createImages(),);
    }

}
