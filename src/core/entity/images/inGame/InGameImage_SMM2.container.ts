import type {InGameSMM2ImageFile} from 'core/entity/file/InGameSMM2ImageFile'
import type {InGameImage_SMM2}    from 'core/entity/images/inGame/InGameImage_SMM2'

import {AbstractImageWithTimesThemesAndGameStyles} from 'core/entity/images/AbstractImageWithTimesThemesAndGameStyles'
import {GameStyles}                                from 'core/gameStyle/GameStyles'
import {Themes}                                    from 'core/theme/Themes'
import {Times}                                     from 'core/time/Times'
import {EMPTY_MAP}                                 from 'util/emptyVariables'

export class InGameImage_SMM2Container
    extends AbstractImageWithTimesThemesAndGameStyles<InGameSMM2ImageFile>
    implements InGameImage_SMM2 {

    public constructor(images: ReadonlyMap<GameStyles, readonly InGameSMM2ImageFile[]>,) {
        super(EMPTY_MAP, images,)
    }

    //region -------------------- Getter methods --------------------

    protected override get _createEveryGameStyles() {
        return GameStyles.values.toArray()
    }

    protected override get _createEveryThemes() {
        return Themes.courseThemes
    }

    protected override get _createEveryTimes() {
        return [Times.DAY,]
    }

    //endregion -------------------- Getter methods --------------------

}
