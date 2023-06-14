import type {InGameSMM1ImageFile} from 'core/entity/file/InGameSMM1ImageFile'
import type {InGameImage_SMM1}    from 'core/entity/images/inGame/InGameImage_SMM1'

import {AbstractImageWithTimesThemesAndGameStyles} from 'core/entity/images/AbstractImageWithTimesThemesAndGameStyles'
import {GameStyles}                                from 'core/gameStyle/GameStyles'
import {Themes}                                    from 'core/theme/Themes'
import {Times}                                     from 'core/time/Times'
import {EMPTY_MAP}                                 from 'util/emptyVariables'
import {assert}                                    from 'util/utilitiesMethods'

export class InGameImage_SMM1Container
    extends AbstractImageWithTimesThemesAndGameStyles<InGameSMM1ImageFile>
    implements InGameImage_SMM1 {

    public constructor(images: ReadonlyMap<GameStyles, readonly InGameSMM1ImageFile[]>,) {
        super(new Map([[Times.DAY, EMPTY_MAP,]]), images,)
    }

    //region -------------------- Getter methods --------------------

    protected override get _createEveryGameStyles(): readonly GameStyles[] {
        return GameStyles.gameStyles_smm1
    }

    protected override get _createEveryThemes(): readonly Themes[] {
        return Themes.courseThemes_smm1
    }

    protected override get _createEveryTimes(): readonly Times[] {
        return [Times.DAY,]
    }

    //endregion -------------------- Getter methods --------------------

    public override get(expectEmpty: boolean, gameStyle: GameStyles,): readonly InGameSMM1ImageFile[]
    public override get(expectEmpty: boolean, gameStyle: GameStyles,): readonly InGameSMM1ImageFile[]
    public override get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly InGameSMM1ImageFile[]
    public override get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly InGameSMM1ImageFile[]
    public override get(expectEmpty: boolean, theme: Themes,): readonly InGameSMM1ImageFile[]
    public override get(expectEmpty: boolean, theme: Themes,): readonly InGameSMM1ImageFile[]
    public override get(expectEmpty: boolean,): readonly InGameSMM1ImageFile[]
    public override get(expectEmpty: boolean, gameStyle_or_theme?: | GameStyles | Themes, theme?: | Themes,): readonly InGameSMM1ImageFile[] {
        if (gameStyle_or_theme == null)
            return super.get(expectEmpty, Times.DAY,)
        if (theme == null) {
            if (gameStyle_or_theme instanceof GameStyles)
                return super.get(expectEmpty, gameStyle_or_theme,)
            return super.get(expectEmpty, gameStyle_or_theme,)
        }

        assert(gameStyle_or_theme instanceof GameStyles, `The second argument received is required to be a GameStyle when the second argument is received.`)
        return super.get(expectEmpty, gameStyle_or_theme, theme,)
    }

}
