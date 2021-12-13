import type {EditorImage} from './EditorImage';

import {GameStyles} from '../../gameStyle/GameStyles';
import {Themes}     from '../../theme/Themes';
import {Times}      from '../../time/Times';

export class EditorImageContainer
    implements EditorImage {

    //region -------------------- Attributes --------------------

    readonly #defaultImages;
    readonly #map;

    //endregion -------------------- Attributes --------------------

    public constructor(map: ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>>, defaultImages: ReadonlyMap<GameStyles, readonly string[]>,) {
        this.#map = map;
        this.#defaultImages = defaultImages;
    }


    public get(gameStyle: GameStyles,): readonly string[]
    public get(gameStyle: GameStyles, time: Times,): readonly string[]
    public get(gameStyle: GameStyles, theme: Themes,): readonly string[]
    public get(gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[]
    public get(theme: Themes,): readonly string[]
    public get(theme: Themes, time: Times,): readonly string[]
    public get(time: Times,): readonly string[]
    public get(gameStyle_or_theme_or_time: | GameStyles | Themes | Times, theme_or_time?: | Themes | Times, time?: Times,): readonly string[] {
        if (gameStyle_or_theme_or_time instanceof GameStyles) {
            if (theme_or_time == null)
                return this.__getByGameStyle(gameStyle_or_theme_or_time,);
            if (theme_or_time instanceof Themes)
                return this.__getByGameStyle(gameStyle_or_theme_or_time, theme_or_time,);
            if (theme_or_time instanceof Times)
                return this.__getByGameStyle(gameStyle_or_theme_or_time, null, theme_or_time,);
            if (time == null)
                return this.__getByGameStyle(gameStyle_or_theme_or_time,);
            return this.__getByGameStyle(gameStyle_or_theme_or_time, null, time,);
        }
        if (gameStyle_or_theme_or_time instanceof Themes) {
            if (theme_or_time == null)
                return this.__getByTheme(gameStyle_or_theme_or_time,);
            if (theme_or_time instanceof Times)
                return this.__getByTheme(gameStyle_or_theme_or_time, theme_or_time,);
            return this.__getByTheme(gameStyle_or_theme_or_time,);
        }
        return this.__getByTime(gameStyle_or_theme_or_time);
    }


    private __getByGameStyle(gameStyle: GameStyles,): readonly string[]
    private __getByGameStyle(gameStyle: GameStyles, theme: Themes,): readonly string[]
    private __getByGameStyle(gameStyle: GameStyles, theme: null, time: Times,): readonly string[]
    private __getByGameStyle(gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[]
    private __getByGameStyle(gameStyle: GameStyles, theme?: | Themes | null, time?: Times,): readonly string[] {
        if (theme == null)
            return Themes.values.map(theme => this.__getByGameStyle(gameStyle, theme,)).flat();
        if (time == null)
            return Times.values.map(time => this.__getByGameStyle(gameStyle, theme, time,)).flat();
        return this.#map.get(time)?.get(gameStyle)?.get(theme) ?? this.#defaultImages.get(gameStyle)!;
    }

    private __getByTheme(theme: Themes,): readonly string[]
    private __getByTheme(theme: Themes, time: Times,): readonly string[]
    private __getByTheme(theme: Themes, time?: Times,): readonly string[] {
        if (time == null)
            return Times.values.map(time => this.__getByTheme(theme, time,)).flat();
        return GameStyles.values.map(gameStyle => this.__getByGameStyle(gameStyle, theme, time,)).flat();
    }

    private __getByTime(time: Times,): readonly string[]
    private __getByTime(time: Times,): readonly string[] {
        return Themes.values.map(theme => this.__getByTheme(theme, time,)).flat();
    }

}
