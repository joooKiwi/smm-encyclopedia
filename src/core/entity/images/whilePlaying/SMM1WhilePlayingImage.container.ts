import {AbstractImageWithTimesThemesAndGameStyles} from '../AbstractImageWithTimesThemesAndGameStyles';
import {assert}                                    from '../../../../util/utilitiesMethods';
import {Themes}                                    from '../../../theme/Themes';
import {Times}                                     from '../../../time/Times';
import {GameStyles}                                from '../../../gameStyle/GameStyles';

export class SMM1WhilePlayingImageContainer
    extends AbstractImageWithTimesThemesAndGameStyles {

    public constructor(map: ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>, defaultImages: ReadonlyMap<GameStyles, readonly string[]>,) {
        super(new Map([[Times.DAY, map,]]), defaultImages,);
    }

    //region -------------------- Getter methods --------------------

    protected get _createEveryGameStyles(): readonly GameStyles[] {
        return GameStyles.gameStyles_smm1;
    }

    protected get _createEveryThemes(): readonly Themes[] {
        return Themes.courseThemes_smm1;
    }

    protected get _createEveryTimes(): readonly Times[] {
        return [Times.DAY,];
    }

    //endregion -------------------- Getter methods --------------------

    public get(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]
    public get(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]
    public get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]
    public get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]
    public get(expectEmpty: boolean, theme: Themes,): readonly string[]
    public get(expectEmpty: boolean, theme: Themes,): readonly string[]
    public get(expectEmpty: boolean,): readonly string[]
    public get(expectEmpty: boolean, gameStyle_or_theme?: | GameStyles | Themes, theme?: | Themes,): readonly string[] {
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
