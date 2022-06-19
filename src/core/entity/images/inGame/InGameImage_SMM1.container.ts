import {AbstractImageWithTimesThemesAndGameStyles} from '../AbstractImageWithTimesThemesAndGameStyles';
import {assert}                                    from '../../../../util/utilitiesMethods';
import {Themes}                                    from '../../../theme/Themes';
import {Times}                                     from '../../../time/Times';
import {GameStyles}                                from '../../../gameStyle/GameStyles';

export class InGameImage_SMM1Container
    extends AbstractImageWithTimesThemesAndGameStyles {

    public constructor(map: ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>, defaultImages: ReadonlyMap<GameStyles, readonly string[]>,) {
        super(new Map([[Times.DAY, map,]]), defaultImages,);
    }

    //region -------------------- Getter methods --------------------

    protected override get _createEveryGameStyles(): readonly GameStyles[] {
        return GameStyles.gameStyles_smm1;
    }

    protected override get _createEveryThemes(): readonly Themes[] {
        return Themes.courseThemes_smm1;
    }

    protected override get _createEveryTimes(): readonly Times[] {
        return [Times.DAY,];
    }

    //endregion -------------------- Getter methods --------------------

    public override get(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]
    public override get(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]
    public override get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]
    public override get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]
    public override get(expectEmpty: boolean, theme: Themes,): readonly string[]
    public override get(expectEmpty: boolean, theme: Themes,): readonly string[]
    public override get(expectEmpty: boolean,): readonly string[]
    public override get(expectEmpty: boolean, gameStyle_or_theme?: | GameStyles | Themes, theme?: | Themes,): readonly string[] {
        if (gameStyle_or_theme == null)
            return super.get(expectEmpty, Times.DAY,);
        if (theme == null) {
            if (gameStyle_or_theme instanceof GameStyles)
                return super.get(expectEmpty, gameStyle_or_theme,);
            return super.get(expectEmpty, gameStyle_or_theme,);
        }

        assert(gameStyle_or_theme instanceof GameStyles, `The second argument received is required to be a GameStyle when the second argument is received.`);
        return super.get(expectEmpty, gameStyle_or_theme, theme,);
    }

}
