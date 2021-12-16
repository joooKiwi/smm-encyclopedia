import {EditorImage} from './EditorImage';
import {GameStyles}  from '../../../gameStyle/GameStyles';
import {Themes}      from '../../../theme/Themes';
import {Times}       from '../../../time/Times';

export class EditorImageContainer
    implements EditorImage {

    //region -------------------- Attributes --------------------

    static readonly #EMPTY_ARRAY = [];

    readonly #defaultImages;
    readonly #map;

    //endregion -------------------- Attributes --------------------

    public constructor(map: ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>>, defaultImages: ReadonlyMap<GameStyles, readonly string[]>,) {
        this.#map = map;
        this.#defaultImages = defaultImages;
    }


    public get(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]
    public get(expectEmpty: boolean, gameStyle: GameStyles, time: Times,): readonly string[]
    public get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]
    public get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[]
    public get(expectEmpty: boolean, theme: Themes,): readonly string[]
    public get(expectEmpty: boolean, theme: Themes, time: Times,): readonly string[]
    public get(expectEmpty: boolean, time: Times,): readonly string[]
    public get(expectEmpty: boolean, gameStyle_or_theme_or_time: | GameStyles | Themes | Times, theme_or_time?: | Themes | Times, time?: Times,): readonly string[] {
        if (gameStyle_or_theme_or_time instanceof GameStyles) {
            if (theme_or_time == null)
                return this.__getByGameStyle(expectEmpty, gameStyle_or_theme_or_time,);
            if (theme_or_time instanceof Themes) {
                if (time instanceof Times)
                    return this.__getByGameStyle(expectEmpty, gameStyle_or_theme_or_time, theme_or_time, time,);
                return this.__getByGameStyle(expectEmpty, gameStyle_or_theme_or_time, theme_or_time,);
            }
            if (theme_or_time instanceof Times)
                return this.__getByGameStyle(expectEmpty, gameStyle_or_theme_or_time, null, theme_or_time,);
            if (time == null)
                return this.__getByGameStyle(expectEmpty, gameStyle_or_theme_or_time,);
            return this.__getByGameStyle(expectEmpty, gameStyle_or_theme_or_time, null, time,);
        }
        if (gameStyle_or_theme_or_time instanceof Themes) {
            if (theme_or_time == null)
                return this.__getByTheme(expectEmpty, gameStyle_or_theme_or_time,);
            if (theme_or_time instanceof Times)
                return this.__getByTheme(expectEmpty, gameStyle_or_theme_or_time, theme_or_time,);
            return this.__getByTheme(expectEmpty, gameStyle_or_theme_or_time,);
        }
        return this.__getByTime(expectEmpty, gameStyle_or_theme_or_time);
    }


    private __getSpecificImage(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[] {
        const imagesFromMap = this.#map.get(time)?.get(gameStyle)?.get(theme);

        if (theme === Themes.GROUND && time === Times.DAY)
            return imagesFromMap ?? this.#defaultImages.get(gameStyle)! ?? EditorImageContainer.#EMPTY_ARRAY;
        return expectEmpty
            ? imagesFromMap ?? EditorImageContainer.#EMPTY_ARRAY
            : imagesFromMap ?? this.#defaultImages.get(gameStyle) ?? EditorImageContainer.#EMPTY_ARRAY;
    }

    private __getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]
    private __getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]
    private __getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles, theme: null, time: Times,): readonly string[]
    private __getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[]
    private __getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles, theme?: | Themes | null, time?: Times,): readonly string[] {
        if (theme == null)
            return Themes.courseThemes.map(theme => this.__getByGameStyle(expectEmpty, gameStyle, theme,)).flat();
        if (time == null)
            return Times.values.map(time => this.__getByGameStyle(expectEmpty, gameStyle, theme, time,)).flat();

        return this.__getSpecificImage(expectEmpty, gameStyle, theme, time,);
    }

    private __getByTheme(expectEmpty: boolean, theme: Themes,): readonly string[]
    private __getByTheme(expectEmpty: boolean, theme: Themes, time: Times,): readonly string[]
    private __getByTheme(expectEmpty: boolean, theme: Themes, time?: Times,): readonly string[] {
        if (time == null)
            return Times.values.map(time => this.__getByTheme(expectEmpty, theme, time,)).flat();
        return GameStyles.values.map(gameStyle => this.__getByGameStyle(expectEmpty, gameStyle, theme, time,)).flat();
    }

    private __getByTime(expectEmpty: boolean, time: Times,): readonly string[]
    private __getByTime(expectEmpty: boolean, time: Times,): readonly string[] {
        return Themes.courseThemes.map(theme => this.__getByTheme(expectEmpty, theme, time,)).flat();
    }

}
