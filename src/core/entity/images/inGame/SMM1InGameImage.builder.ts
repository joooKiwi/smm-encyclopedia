import type {Builder}        from '../../../../util/Builder';
import type {ImageName_SMM1} from './InGameImage.types';
import type {Themes}         from '../../../theme/Themes';
import type {InGameImage}    from './InGameImage';

import {AbstractImageBuilder}             from '../AbstractImage.builder';
import {EMPTY_MAP}                        from '../../../../util/emptyVariables';
import {GameStyles}                       from '../GameStyles';
import {GameStyles as OriginalGameStyles} from '../../../gameStyle/GameStyles';
import {SMM1InGameImageContainer}         from './SMM1InGameImage.container';

export class SMM1InGameImageBuilder
    extends AbstractImageBuilder<ImageName_SMM1>
    implements Builder<InGameImage> {

    //region -------------------- Attributes --------------------

    static readonly #GAME_STYLE_ARRAY = GameStyles.gameStyles_smm1;
    // static readonly #THEMES_ARRAY = Themes.courseThemes_smm1;

    //endregion -------------------- Attributes --------------------

    public constructor(name: ImageName_SMM1,) {
        super(name);
    }

    //region -------------------- Getter & setter methods --------------------

    //region -------------------- Game Style --------------------

    public setAllGameStyles(): this {
        return this._setGameStyle(SMM1InGameImageBuilder.#GAME_STYLE_ARRAY);
    }

    //endregion -------------------- Game Style --------------------

    //endregion -------------------- Getter & setter methods --------------------

    //region -------------------- Build utility methods --------------------

    protected _getImagePath(gameStyle: GameStyles,) {
        return `${gameStyle.gamePath_inGameSmm1}Item - ${this.simpleImageName}/wait.0.png`;
    }

    protected _createDefaultImages(): ReadonlyMap<OriginalGameStyles, readonly [string]> {
        return new Map(this._gameStyles.map(gameStyle => [gameStyle.parent, [this._getImagePath(gameStyle),],]));
    }

    protected _createNewMap(): ReadonlyMap<OriginalGameStyles, ReadonlyMap<Themes, readonly [string]>> {
        return EMPTY_MAP;
    }

    //endregion -------------------- Build utility methods --------------------

    public build(): InGameImage {
        return new SMM1InGameImageContainer(this._createNewMap(), this._createDefaultImages(),);
    }

}
