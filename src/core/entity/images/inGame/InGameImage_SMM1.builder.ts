import type {ImageName_SMM1}                   from 'core/entity/images/inGame/InGameImage.types'
import type {InGameImage}                      from 'core/entity/images/inGame/InGameImage'
import type {GameStyles as OriginalGameStyles} from 'core/gameStyle/GameStyles'
import type {Themes}                           from 'core/theme/Themes'
import type {Builder}                          from 'util/builder/Builder'

import {AbstractImageBuilder}      from 'core/entity/images/AbstractImage.builder'
import {GameStyles}                from 'core/entity/images/GameStyles'
import {InGameImage_SMM1Container} from 'core/entity/images/inGame/InGameImage_SMM1.container'
import {EMPTY_MAP}                 from 'util/emptyVariables'

export class InGameImage_SMM1Builder
    extends AbstractImageBuilder<ImageName_SMM1>
    implements Builder<InGameImage> {

    //region -------------------- Fields --------------------

    static readonly #GAME_STYLE_ARRAY = GameStyles.gameStyles_smm1
    // static readonly #THEMES_ARRAY = Themes.courseThemes_smm1

    //endregion -------------------- Fields --------------------

    public constructor(name: ImageName_SMM1,) {
        super(name)
    }

    //region -------------------- Getter & setter methods --------------------

    //region -------------------- Game Style --------------------

    public override setAllGameStyles(): this {
        return this._setGameStyle(InGameImage_SMM1Builder.#GAME_STYLE_ARRAY)
    }

    //endregion -------------------- Game Style --------------------

    //endregion -------------------- Getter & setter methods --------------------

    //region -------------------- Build utility methods --------------------

    protected _getImagePath(gameStyle: GameStyles,) {
        return `${gameStyle.gamePath_inGameSmm1}Item - ${this.simpleImageName}/wait.0.png`
    }

    protected _createDefaultImages(): ReadonlyMap<OriginalGameStyles, readonly [string]> {
        return new Map(this._gameStyles.map(gameStyle => [gameStyle.parent, [this._getImagePath(gameStyle),],]))
    }

    protected _createNewMap(): ReadonlyMap<OriginalGameStyles, ReadonlyMap<Themes, readonly [string]>> {
        return EMPTY_MAP
    }

    //endregion -------------------- Build utility methods --------------------

    public override build(): InGameImage {
        return new InGameImage_SMM1Container(this._createNewMap(), this._createDefaultImages(),)
    }

}
