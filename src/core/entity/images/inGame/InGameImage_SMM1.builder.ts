import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'
import type {InGameSMM1ImageFile}        from 'core/entity/file/InGameSMM1ImageFile'
import type {ImageName_SMM1}             from 'core/entity/images/inGame/InGameImage_SMM1.types'
import type {InGameImage_SMM1}           from 'core/entity/images/inGame/InGameImage_SMM1'
import type {Builder}                    from 'util/builder/Builder'

import {AbstractImageBuilder}         from 'core/entity/images/AbstractImage.builder'
import {InGameSMM1ImageFileContainer} from 'core/entity/file/InGameSMM1ImageFile.container'
import {InGameImage_SMM1Container}    from 'core/entity/images/inGame/InGameImage_SMM1.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

export class InGameImage_SMM1Builder
    extends AbstractImageBuilder<ImageName_SMM1>
    implements Builder<InGameImage_SMM1> {

    //region -------------------- Fields --------------------

    static readonly #GAME_STYLE_ARRAY = GameStyles.gameStyles_smm1
    // static readonly #THEMES_ARRAY = Themes.courseThemes_smm1

    readonly #entity

    //endregion -------------------- Fields --------------------

    public constructor(entity: ClassWithEntityEnglishName, name: ImageName_SMM1,) {
        super(name)
        this.#entity = entity
    }

    //region -------------------- Getter & setter methods --------------------

    protected get _entity(): ClassWithEntityEnglishName {
        return this.#entity
    }

    //region -------------------- Game Style --------------------

    public override setAllGameStyles(): this {
        return this._setGameStyle(InGameImage_SMM1Builder.#GAME_STYLE_ARRAY)
    }

    //endregion -------------------- Game Style --------------------

    //endregion -------------------- Getter & setter methods --------------------

    //region -------------------- Build utility methods --------------------


    protected _createImageFile(gameStyle: GameStyles,): InGameSMM1ImageFile {
        return new InGameSMM1ImageFileContainer(gameStyle, this._entity, this.simpleImageName,)
    }

    protected _createImages(): ReadonlyMap<GameStyles, readonly [InGameSMM1ImageFile]> {
        return new Map(this._gameStyles.map(gameStyle => [gameStyle, [this._createImageFile(gameStyle),],]))
    }

    //endregion -------------------- Build utility methods --------------------

    public override build(): InGameImage_SMM1 {
        return new InGameImage_SMM1Container(this._createImages(),)
    }

}
