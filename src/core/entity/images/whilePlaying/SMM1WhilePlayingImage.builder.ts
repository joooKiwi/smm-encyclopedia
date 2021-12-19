import type {Builder}        from '../../../../util/Builder';
import type {ImageName_SMM1} from './WhilePlayingImage.types';
import type {Themes}         from '../../../theme/Themes';

import {EMPTY_MAP}                        from '../../../../util/emptyVariables';
import {GameStyles}                       from '../GameStyles';
import {GameStyles as OriginalGameStyles} from '../../../gameStyle/GameStyles';
import {SMM1WhilePlayingImageContainer}   from './SMM1WhilePlayingImage.container';
import {WhilePlayingImage}                from './WhilePlayingImage';

export class SMM1WhilePlayingImageBuilder
    implements Builder<WhilePlayingImage> {

    //region -------------------- Attributes --------------------

    readonly #name;

    //endregion -------------------- Attributes --------------------

    public constructor(name: ImageName_SMM1,) {
        this.#name = name;
    }

    //region -------------------- Getter methods --------------------


    protected get _name(): ImageName_SMM1 {
        return this.#name;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Build utility methods --------------------

    protected _getImagePath() {
        return `${GameStyles.gamePath_smm1PowerUp}Item - ${this._name}/wait.0.png`;
    }


    protected _createDefaultImages(): ReadonlyMap<OriginalGameStyles, readonly [string]> {
        return new Map([[OriginalGameStyles.SUPER_MARIO_BROS, [this._getImagePath(),],]]);
    }

    protected _createNewMap(): ReadonlyMap<OriginalGameStyles, ReadonlyMap<Themes, readonly [string]>> {
        return EMPTY_MAP;
    }

    //endregion -------------------- Build utility methods --------------------

    public build(): WhilePlayingImage {
        return new SMM1WhilePlayingImageContainer(this._createNewMap(), this._createDefaultImages(),);
    }

}
