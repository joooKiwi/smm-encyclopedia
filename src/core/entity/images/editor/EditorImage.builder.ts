import type {Builder}                                                                          from '../../../../util/Builder';
import type {EditorImage}                                                                      from './EditorImage';
import type {ExtendedList}                                                                     from '../../../../util/extended/ExtendedList';
import type {GameStyles as OriginalGameStyles}                                                 from '../../../gameStyle/GameStyles';
import type {ImageNumber, PossibleAmountOfImages, SimpleImageName, VariantEditorImage_PowerUp} from './EditorImage.types';
import type {PossibleGameStyle}                                                                from '../GameStyles.types';

import {AbstractImageBuilder} from '../AbstractImage.builder';
import {EditorImageContainer} from './EditorImage.container';
import {EMPTY_MAP}            from '../../../../util/emptyVariables';
import {ExtendedSet}          from '../../../../util/extended/ExtendedSet';
import {GameStyles}           from '../GameStyles';
import {Themes}               from '../../../theme/Themes';
import {Times}                from '../../../time/Times';

export class EditorImageBuilder<NAME extends Exclude<SimpleImageName, null> = Exclude<SimpleImageName, null>, >
    extends AbstractImageBuilder<NAME, PossibleAmountOfImages>
    implements Builder<EditorImage> {

    //region -------------------- Attributes --------------------

    static readonly #SIMPLE_POWER_UP_ENDING: VariantEditorImage_PowerUp = 'Uni';
    static readonly #POWER_UP_ENDING: `${VariantEditorImage_PowerUp}_00` = `${this.#SIMPLE_POWER_UP_ENDING}_00`;
    static readonly #EMPTY_SET: ExtendedList<never> = new ExtendedSet();

    #type: PossibleType;
    #defaultType: PossibleDefaultType;

    #times?: ExtendedList<Times>;
    #themes?: ExtendedList<Themes>;

    readonly #selectedMap: Map<Times, Map<GameStyles, Map<Themes, boolean>>>;
    #overrideDefaultAmount?: Map<GameStyles, PossibleAmountOfImages>;
    #overrideMap?: Map<Times, Map<GameStyles, Map<Themes, PossibleAmountOfImages>>>;

    //endregion -------------------- Attributes --------------------

    /**
     * <p>
     *  Create a new {@link Image} with every possible images
     *  associated to every {@link OriginalGameStyles Game style}.
     * </p>
     * <p>
     *  If the method {@link setAsPowerUp} is called,
     *  then only 2 images will be created.
     *  One with `${NAME}_00.png` and another with `${NAME}Uni_00.png`.
     * </p>
     * <p>
     *  Otherwise, it will depend on the amount of images (by default 1),
     *  the themes associated to any {@link OriginalGameStyles Game style} used.
     *  And the {@link OriginalGameStyles Game style} themselves (all by default).
     * </p>
     *
     * @param simpleImageName the basic name
     */
    public constructor(simpleImageName: NAME,)
    /**
     * Create a new {@link Image} with only 1 image per {@link OriginalGameStyles Game style}.
     *
     * @param simpleImageName the basic name
     * @param imageNumber the image number (from 1 to 4)
     */
    public constructor(simpleImageName: NAME, imageNumber: PossibleAmountOfImages,)
    public constructor(simpleImageName: NAME, imageNumber?: PossibleAmountOfImages,) {
        super(simpleImageName, imageNumber,);

        if (imageNumber == null) {
            this.#type = 1;
            this.#defaultType = 'ground';
        } else {
            this.#type = null;
            this.#defaultType = imageNumber;
        }

        this.#selectedMap = new Map(Times.values.map(time => [time,
            new Map(GameStyles.values.map(gameStyle => [gameStyle,
                new Map(Themes.courseThemes.map(theme => [theme, false,
                ])),
            ])),
        ]));
    }

    //region -------------------- Getter & setter methods --------------------

    //region -------------------- Selected map --------------------

    protected get _selectedMap(): Map<Times, Map<GameStyles, Map<Themes, boolean>>> {
        return this.#selectedMap;
    }

    public get selectedMap(): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, boolean>>> {
        return this.#selectedMap;
    }

    protected _add(times: readonly Times[], gameStyles: readonly PossibleGameStyle[], themes: readonly Themes[],): this {
        const map = this._selectedMap;
        const _times = times;
        const _gameStyles = gameStyles.map(gameStyle => GameStyles.getValue(gameStyle));
        const _themes = themes.map(theme => Themes.getValue(theme));

        _times.forEach(time =>
            _gameStyles.forEach(gameStyle =>
                _themes.forEach(theme =>
                    map.get(time)!.get(gameStyle)!.set(theme, true,))
            )
        );
        return this.__addTimes(_times)._addGameStyle(_gameStyles).__addThemes(_themes);
    }

    //endregion -------------------- Selected map --------------------
    //region -------------------- Type / default type --------------------

    protected get _type(): PossibleType {
        return this.#type;
    }

    protected get _defaultType(): PossibleDefaultType {
        return this.#defaultType;
    }

    protected _setType(value: PossibleType,): this {
        this.#type = value;
        return this;
    }

    protected _setDefaultType(value: PossibleDefaultType,): this {
        this.#defaultType = value;
        return this;
    }


    public setAsPowerUp(): this {
        return this._setType(null)._setDefaultType('power-up');
    }

    /**
     * Set the amount of images at the ending of the image name.
     *
     * @param value the total amount (excluding the game styles) of possible images
     */
    public setAmount(value: PossibleAmountOfImages,): this {
        return this._setType(value);
    }

    public hasNoDefaultImage(): this {
        return this._setDefaultType(null);
    }

    //endregion -------------------- Type / default type --------------------
    //region -------------------- Time --------------------

    private get __times(): ExtendedList<Times> {
        return this.#times ??= new ExtendedSet();
    }

    protected get _times(): ExtendedList<Times> {
        return this.#times ?? EditorImageBuilder.#EMPTY_SET;
    }

    private __addTimes(time: Times,): this
    private __addTimes(times: readonly Times[],): this
    private __addTimes(times: | Times | readonly Times[],): this {
        if (!(times instanceof Array))
            return this.__addTimes([times]);
        this.__times.add(...times);
        return this;
    }

    //endregion -------------------- Time --------------------
    //region -------------------- Game Style --------------------

    protected _setGameStyle(gameStyle: PossibleGameStyle,): this
    protected _setGameStyle(gameStyles: readonly PossibleGameStyle[],): this
    protected _setGameStyle(gameStyles: readonly PossibleGameStyle[], notGameStyles: readonly PossibleGameStyle[],): this
    protected _setGameStyle(gameStyles: | PossibleGameStyle | readonly PossibleGameStyle[], notGameStyles?: readonly PossibleGameStyle[],): this
    protected _setGameStyle(gameStyles: | PossibleGameStyle | readonly PossibleGameStyle[], notGameStyles: readonly PossibleGameStyle[] = [],): this {
        if (!(gameStyles instanceof Array))
            return this._setGameStyle([gameStyles], notGameStyles,);

        const _gameStyles = gameStyles.map(gameStyle => GameStyles.getValue(gameStyle));
        const _notGameStyles = notGameStyles.map(gameStyle => GameStyles.getValue(gameStyle));

        return this._clearGameStyle()
            ._add(Times.values, _gameStyles.filter(gameStyle => !_notGameStyles.includes(gameStyle)), [],);
    }

    //endregion -------------------- Game Style --------------------
    //region -------------------- Theme --------------------

    private get __themes(): ExtendedList<Themes> {
        return this.#themes ??= new ExtendedSet();
    }

    protected get _themes(): ExtendedList<Themes> {
        return this.#themes ?? EditorImageBuilder.#EMPTY_SET;
    }

    private __addThemes(theme: Themes,): this
    private __addThemes(themes: readonly Themes[],): this
    private __addThemes(themes: Themes | readonly Themes[],): this {
        if (!(themes instanceof Array))
            return this.__addThemes([themes]);
        this.__themes.add(...themes.map(theme => Themes.getValue(theme)));
        return this;
    }

    private __setThemes(time: Times, gameStyle: PossibleGameStyle, themes: readonly Themes[], notThemes: readonly Themes[] = [],): this {
        this.__themes.clear();
        return this._add([time], [gameStyle], themes.filter(theme => !notThemes.includes(theme)),);
    }


    public setTheme(gameStyle: PossibleGameStyle,): never
    public setTheme(gameStyle: PossibleGameStyle, ...themes: readonly Themes[]): this
    public setTheme(gameStyle: PossibleGameStyle, ...themes: readonly Themes[]): this {
        return this.__setThemes(Times.DAY, gameStyle, themes,);
    }

    public setNotTheme(gameStyle: PossibleGameStyle,): never
    public setNotTheme(gameStyle: PossibleGameStyle, ...themes: readonly Themes[]): this
    public setNotTheme(gameStyle: PossibleGameStyle, ...themes: readonly Themes[]): this {
        return this.__setThemes(Times.DAY, gameStyle, Themes.courseThemes, themes,);
    }


    public setNightTheme(gameStyle: PossibleGameStyle,): never
    public setNightTheme(gameStyle: PossibleGameStyle, ...themes: readonly Themes[]): this
    public setNightTheme(gameStyle: PossibleGameStyle, ...themes: readonly Themes[]): this {
        return this.__setThemes(Times.NIGHT, gameStyle, themes,);
    }

    public setNotNightTheme(gameStyle: PossibleGameStyle,): never
    public setNotNightTheme(gameStyle: PossibleGameStyle, ...themes: readonly Themes[]): this
    public setNotNightTheme(gameStyle: PossibleGameStyle, ...themes: readonly Themes[]): this {
        return this.__setThemes(Times.NIGHT, gameStyle, Themes.courseThemes, themes,);
    }

    //endregion -------------------- Theme --------------------
    //region -------------------- Override images --------------------

    private get __overrideImages(): Map<Times, Map<GameStyles, Map<Themes, PossibleAmountOfImages>>> {
        return this.#overrideMap ??= new Map();
    }

    protected get _overrideImages(): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, PossibleAmountOfImages>>> {
        return this.#overrideMap ?? EMPTY_MAP;
    }

    private __setOverrideImages(imageNumber: PossibleAmountOfImages, time: | Times | null, gameStyle: PossibleGameStyle, theme: | Themes | null,): this {
        if (!(gameStyle instanceof GameStyles))
            return this.__setOverrideImages(imageNumber, time, GameStyles.getValue(gameStyle), theme,);

        const times = time == null ? Times.values : [time] as const;
        const themes = theme == null ? Themes.courseThemes : [theme] as const;

        const overrideMap = this.__overrideImages;

        times.forEach(time => {
            if (!overrideMap.has(time))
                overrideMap.set(time, new Map());
            const timeMap = overrideMap.get(time)!;

            if (!timeMap.has(gameStyle))
                timeMap.set(gameStyle, new Map());
            const gameStyleMap = timeMap.get(gameStyle)!;

            themes.forEach(theme => gameStyleMap.set(theme, imageNumber,));
        });

        return this;
    }


    private get __overrideDefaultAmounts(): Map<GameStyles, PossibleAmountOfImages> {
        return this.#overrideDefaultAmount ??= new Map();
    }

    protected get _overrideDefaultAmounts(): ReadonlyMap<GameStyles, PossibleAmountOfImages> {
        return this.#overrideDefaultAmount ?? EMPTY_MAP;
    }

    protected __setOverrideDefaultAmounts(number: PossibleAmountOfImages, gameStyle: PossibleGameStyle,): this {
        if (!(gameStyle instanceof GameStyles))
            return this.__setOverrideDefaultAmounts(number, GameStyles.getValue(gameStyle),);

        this.__overrideDefaultAmounts.set(gameStyle, number,);
        return this;
    }


    /**
     * Set the image number for the specific {@link OriginalGameStyles game style}, {@link Themes theme} & {@link Times time}.
     *
     * @param gameStyle the game style
     * @param theme the theme or every theme if <b>null</b> is received
     * @param time the time or every time if <b>null</b> is received
     * @param imageNumber the image number
     */
    public setImage(gameStyle: PossibleGameStyle, theme: | Themes | null, time: | Times | null, imageNumber: PossibleAmountOfImages,): this {
        return this.__setOverrideImages(imageNumber, time, gameStyle, theme,);
    }

    /**
     * Set the default amount for the selected {@link OriginalGameStyles game style}.
     *
     * @note This will do nothing if there is only 1 image.
     *
     * @param gameStyle the game style
     * @param number the default amount
     */
    public setDefaultAmount(gameStyle: PossibleGameStyle, number: PossibleAmountOfImages,): this {
        return this.__setOverrideDefaultAmounts(number, gameStyle,);
    }

    //endregion -------------------- Override images --------------------

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Predefined utility methods --------------------

    public setAsGround(): this {
        return this
            .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
            .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.AIRSHIP,)
            .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
            .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW, Themes.AIRSHIP, Themes.CASTLE,)
            .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
            .setNightTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER, Themes.SNOW,)
            .setTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
            .setNightTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SNOW, Themes.AIRSHIP,)
            .setTheme(GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,);
    }

    public setAsDifferentInSMBAndSMB3(): this {
        return this
            .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.CASTLE,)
            .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND, Themes.CASTLE,)
            .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.GROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.AIRSHIP,)
            .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.GROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.AIRSHIP,);

    }

    //endregion -------------------- Predefined utility methods --------------------
    //region -------------------- Build utility methods --------------------

    protected _getImagePath(gameStyle: GameStyles, ending: string = '',) {
        return `${gameStyle.gamePath_editor}${gameStyle.gameAcronym}_Lyt_P_${this.simpleImageName}${ending}.png`;
    }

    /**
     * Return an array based on the amount of images received.
     * They need to be in the specific override of {@link _overrideImages}.
     *
     * @param time the time
     * @param gameStyle the game style
     * @param theme the theme
     * @param amountOfImages the amount of images
     * @protected
     */
    protected _getAmountBasedOnValue(time: Times, gameStyle: GameStyles, theme: Themes, amountOfImages: PossibleAmountOfImages,): readonly ImageNumber[]
    /**
     * Return an array based on the amount of images received.
     * But it can be overridden by {@link _overrideImages} if there is one.
     *
     * @param time the game style in every possible time (there can only be one)
     * @param gameStyle the game style
     * @param theme The game style in every possible theme (there can only be one)
     * @param amountOfImages the amount of images
     * @protected
     */
    protected _getAmountBasedOnValue(time: null, gameStyle: GameStyles, theme: null, amountOfImages: PossibleAmountOfImages,): readonly ImageNumber[]
    protected _getAmountBasedOnValue(time: | Times | null, gameStyle: GameStyles, theme: | Themes | null, amountOfImages: PossibleAmountOfImages,): readonly ImageNumber[] {
        if (time == null || theme == null) {
            const timeIterator = Times.values.values();
            let nextTime = timeIterator.next();
            while (!nextTime.done) {
                const amount = this._overrideImages.get(nextTime.value)?.get(gameStyle)?.get(Themes.GROUND);
                if (amount != null)
                    return [amount - 1 as ImageNumber];
                nextTime = timeIterator.next();
            }
        } else {
            const amount = this._overrideImages.get(time)?.get(gameStyle)?.get(theme);
            if (amount != null)
                return [amount - 1 as ImageNumber];
        }
        return [...new Array(this._overrideDefaultAmounts.get(gameStyle) ?? amountOfImages)].map((_value, index,) => index as ImageNumber,);
    }


    protected _createDefaultImages(): ReadonlyMap<OriginalGameStyles, readonly string[]> {
        const type = this._defaultType;

        switch (typeof type) {
            case 'string'://ground / power-up
                switch (type) {
                    case 'ground':
                        const type = this._type;
                        if (type == null)
                            throw new TypeError(`The type cannot be null when the default type is set to the ground images.`);
                        return new Map(this._gameStyles.map(gameStyle => [gameStyle.parent, this._getAmountBasedOnValue(null, gameStyle, null, type,).map(index => this._getImagePath(gameStyle, `_0${index}`,)),]));
                    case 'power-up':
                        const imageNumber = this.imageNumber;

                        if (imageNumber != null)
                            return new Map(this._gameStyles.map(gameStyle => [
                                gameStyle.parent,
                                [this._getImagePath(gameStyle, `_0${imageNumber - 1}`,), this._getImagePath(gameStyle, `${EditorImageBuilder.#SIMPLE_POWER_UP_ENDING}_0${imageNumber - 1}`),],
                            ]));
                        return new Map(this._gameStyles.map(gameStyle => [
                            gameStyle.parent,
                            [this._getImagePath(gameStyle, '_00',), this._getImagePath(gameStyle, EditorImageBuilder.#POWER_UP_ENDING),],
                        ]));
                }
                break;
            case'number'://1-4
                return new Map(this._gameStyles.map(gameStyle => [
                    gameStyle.parent,
                    [this._getImagePath(gameStyle, `_0${type - 1}`,),],
                ]));
            default://null
                return EMPTY_MAP;
        }
    }


    protected _createNewMap(callbackThatReturnNumbers: (time: Times, gameStyle: GameStyles, theme: Themes,) => readonly ImageNumber[],): ReadonlyMap<Times, ReadonlyMap<OriginalGameStyles, ReadonlyMap<Themes, readonly string[]>>> {
        const returnedMap = new Map<Times, Map<OriginalGameStyles, Map<Themes, readonly string[]>>>();

        this._selectedMap.forEach((timeMap, time,) => {
            const isNightTheme = time === Times.NIGHT;

            timeMap.forEach((gameStyleMap, gameStyle,) => {
                    const originalGameStyle = gameStyle.parent;

                    gameStyleMap.forEach((isSelected, theme,) => {
                        if (!isSelected)
                            return;
                        const images = callbackThatReturnNumbers(time, gameStyle, theme,).map(number => this._getImagePath(gameStyle, `${theme.getGameName('', isNightTheme,)}_0${number}`));
                        if (images.length === 0)
                            return;

                        if (!returnedMap.has(time))
                            returnedMap.set(time, new Map());
                        const timeMap = returnedMap.get(time)!;

                        if (!timeMap.has(originalGameStyle))
                            timeMap.set(originalGameStyle, new Map());
                        const gameStyleMap = timeMap.get(originalGameStyle)!;

                        gameStyleMap.set(theme, images);
                    });
                }
            );
        });

        return returnedMap;
    }

    protected _createImages(): ReadonlyMap<Times, ReadonlyMap<OriginalGameStyles, ReadonlyMap<Themes, readonly string[]>>> {
        const imageNumber = this.imageNumber;

        if (imageNumber != null)
            return this._createNewMap(() => [imageNumber - 1 as ImageNumber]);

        const type = this._type;
        switch (typeof type) {
            case 'number'://1-4
                return this._createNewMap((time, gameStyle, theme,) => this._getAmountBasedOnValue(time, gameStyle, theme, type,),);
            default://null
                return EMPTY_MAP;
        }
    }

    //endregion -------------------- Build utility methods --------------------

    public build(): EditorImage {
        return new EditorImageContainer(this._createImages(), this._createDefaultImages(),);
    }

}

//region -------------------- Types --------------------

type PossibleType = | PossibleAmountOfImages | null;
type PossibleDefaultType = | 'ground' | 'power-up' | PossibleAmountOfImages | null;

//endregion -------------------- Types --------------------
