import {EMPTY_ARRAY}                       from '../../../util/emptyVariables';
import {ImageWithTimesThemesAndGameStyles} from './ImageWithTimesThemesAndGameStyles';
import {GameStyles}                        from '../../gameStyle/GameStyles';
import {Themes}                            from '../../theme/Themes';
import {Times}                             from '../../time/Times';

export abstract class AbstractImageWithTimesThemesAndGameStyles
    implements ImageWithTimesThemesAndGameStyles {

    //region -------------------- Fields --------------------

    readonly #map;
    readonly #defaultImages;

    #everyGameStyles?: readonly GameStyles[];
    #everyThemes?: readonly Themes[];
    #everyTimes?: readonly Times[];

    //endregion -------------------- Fields --------------------

    protected constructor(map: ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>>, defaultImages: ReadonlyMap<GameStyles, readonly string[]>,) {
        this.#map = map;
        this.#defaultImages = defaultImages;
    }

    //region -------------------- Getter methods --------------------

    protected get _map(): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>> {
        return this.#map;
    }

    protected get _defaultImages(): ReadonlyMap<GameStyles, readonly string[]> {
        return this.#defaultImages;
    }


    /**
     * Get every possible {@link GameStyles game style} in the instance.
     */
    protected abstract get _createEveryGameStyles(): readonly GameStyles[];

    protected get _everyGameStyles(): readonly GameStyles[] {
        return this.#everyGameStyles ??= this._createEveryGameStyles;
    }

    /**
     * Get every possible {@link Themes theme} in the instance.
     */
    protected abstract get _createEveryThemes(): readonly Themes[]

    protected get _everyThemes(): readonly Themes[] {
        return this.#everyThemes ??= this._createEveryThemes;
    }

    /**
     * Get every possible {@link Times time} in the instance.
     */
    protected abstract get _createEveryTimes(): readonly Times[]

    protected get _everyTimes(): readonly Times[] {
        return this.#everyTimes ??= this._createEveryTimes;
    }

    //endregion -------------------- Getter methods --------------------

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
                return this._getByGameStyle(expectEmpty, gameStyle_or_theme_or_time,);
            if (theme_or_time instanceof Themes) {
                if (time instanceof Times)
                    return this._getByGameStyle(expectEmpty, gameStyle_or_theme_or_time, theme_or_time, time,);
                return this._getByGameStyle(expectEmpty, gameStyle_or_theme_or_time, theme_or_time,);
            }
            if (theme_or_time instanceof Times)
                return this._getByGameStyle(expectEmpty, gameStyle_or_theme_or_time, null, theme_or_time,);
            if (time == null)
                return this._getByGameStyle(expectEmpty, gameStyle_or_theme_or_time,);
            return this._getByGameStyle(expectEmpty, gameStyle_or_theme_or_time, null, time,);
        }
        if (gameStyle_or_theme_or_time instanceof Themes) {
            if (theme_or_time == null)
                return this._getByTheme(expectEmpty, gameStyle_or_theme_or_time,);
            if (theme_or_time instanceof Times)
                return this._getByTheme(expectEmpty, gameStyle_or_theme_or_time, theme_or_time,);
            return this._getByTheme(expectEmpty, gameStyle_or_theme_or_time,);
        }
        return this._getByTime(expectEmpty, gameStyle_or_theme_or_time);
    }


    protected _getSpecificImage(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[] {
        const imagesFromMap = this._map.get(time)?.get(gameStyle)?.get(theme);

        if (theme === Themes.GROUND && time === Times.DAY)
            return imagesFromMap ?? this._defaultImages.get(gameStyle)! ?? EMPTY_ARRAY;
        return expectEmpty
            ? imagesFromMap ?? EMPTY_ARRAY
            : imagesFromMap ?? this._defaultImages.get(gameStyle) ?? EMPTY_ARRAY;
    }

    protected _getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]
    protected _getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]
    protected _getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles, theme: null, time: Times,): readonly string[]
    protected _getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[]
    protected _getByGameStyle(expectEmpty: boolean, gameStyle: GameStyles, theme?: | Themes | null, time?: Times,): readonly string[] {
        if (theme == null)
            return this._everyThemes.map(theme => this._getByGameStyle(expectEmpty, gameStyle, theme,)).flat();
        if (time == null)
            return this._everyTimes.map(time => this._getByGameStyle(expectEmpty, gameStyle, theme, time,)).flat();

        return this._getSpecificImage(expectEmpty, gameStyle, theme, time,);
    }

    protected _getByTheme(expectEmpty: boolean, theme: Themes,): readonly string[]
    protected _getByTheme(expectEmpty: boolean, theme: Themes, time: Times,): readonly string[]
    protected _getByTheme(expectEmpty: boolean, theme: Themes, time?: Times,): readonly string[] {
        if (time == null)
            return this._everyTimes.map(time => this._getByTheme(expectEmpty, theme, time,)).flat();
        return this._everyGameStyles.map(gameStyle => this._getByGameStyle(expectEmpty, gameStyle, theme, time,)).flat();
    }

    protected _getByTime(expectEmpty: boolean, time: Times,): readonly string[]
    protected _getByTime(expectEmpty: boolean, time: Times,): readonly string[] {
        return this._everyThemes.map(theme => this._getByTheme(expectEmpty, theme, time,)).flat();
    }

}