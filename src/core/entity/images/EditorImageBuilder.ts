import type {Builder}                                                             from '../../../util/Builder';
import type {EditorImage}                                                         from './EditorImage';
import type {ExtendedList}                                                        from '../../../util/extended/ExtendedList';
import type {PossibleAmountOfImages, SimpleImageName, VariantEditorImage_PowerUp} from './EditorImage.types';
import {ImageNumber}                                                              from './EditorImage.types';

import {EditorImageContainer}             from './EditorImageContainer';
import {EMPTY_MAP}                        from '../../../util/emptyVariables';
import {ExtendedSet}                      from '../../../util/extended/ExtendedSet';
import {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles';
import {GameStyles}                       from './GameStyles';
import {Themes as OriginalThemes}         from '../../theme/Themes';
import {Themes}                           from './Themes';
import {Times}                            from '../../time/Times';

export class EditorImageBuilder<NAME extends Exclude<SimpleImageName, null> = Exclude<SimpleImageName, null>, >
    implements Builder<EditorImage> {

    //region -------------------- Attributes --------------------

    static readonly #SIMPLE_POWER_UP_ENDING: VariantEditorImage_PowerUp = 'Uni';
    static readonly #POWER_UP_ENDING: `${VariantEditorImage_PowerUp}_00` = `${this.#SIMPLE_POWER_UP_ENDING}_00`;
    static readonly #GAME_STYLE_ARRAY = OriginalGameStyles.values;
    static readonly #EMPTY_SET: ExtendedList<never> = new ExtendedSet();

    readonly #simpleImageName;
    readonly #imageNumber;

    #type: PossibleType;
    #defaultType: PossibleDefaultType;

    #times?: ExtendedList<Times>;
    #themes?: ExtendedList<Themes>;
    #gameStyles?: ExtendedList<GameStyles>;

    readonly #selectedMap: Map<Times, Map<GameStyles, Map<Themes, boolean>>>;
    #overrideMap?: Map<Times, Map<GameStyles, Map<Themes, PossibleAmountOfImages>>>;

    //endregion -------------------- Attributes --------------------

    /**
     * <p>
     *  Create a new {@link EditorImage} with every possible images
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
     * Create a new {@link EditorImage} with only 1 image per {@link OriginalGameStyles Game style}.
     *
     * @param simpleImageName the basic name
     * @param imageNumber the image number (from 1 to 4)
     */
    public constructor(simpleImageName: NAME, imageNumber: PossibleAmountOfImages,)
    public constructor(simpleImageName: NAME, imageNumber: | PossibleAmountOfImages | null = null,) {
        this.#simpleImageName = simpleImageName;
        this.#imageNumber = imageNumber;

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

    public get simpleImageName(): NAME {
        return this.#simpleImageName!;
    }

    public get imageNumber(): | PossibleAmountOfImages | null {
        return this.#imageNumber;
    }

    //region -------------------- Selected map --------------------

    protected get _selectedMap(): Map<Times, Map<GameStyles, Map<Themes, boolean>>> {
        return this.#selectedMap;
    }

    public get selectedMap(): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, boolean>>> {
        return this.#selectedMap;
    }

    protected _add(times: readonly PossibleTime[], gameStyles: readonly PossibleGameStyle[], themes: readonly PossibleTheme[],): this {
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
        return this.__addTimes(_times).__addGameStyle(_gameStyles).__addThemes(_themes);
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

    private __addTimes(time: PossibleTime,): this
    private __addTimes(times: readonly PossibleTime[],): this
    private __addTimes(times: | PossibleTime | readonly PossibleTime[],): this {
        if (!(times instanceof Array))
            return this.__addTimes([times]);
        this.__times.add(...times);
        return this;
    }

    //endregion -------------------- Time --------------------
    //region -------------------- Game Style --------------------

    private get __gameStyles(): ExtendedList<GameStyles> {
        return this.#gameStyles ??= new ExtendedSet();
    }

    protected get _gameStyles(): ExtendedList<GameStyles> {
        return this.#gameStyles ?? EditorImageBuilder.#EMPTY_SET;
    }

    private __addGameStyle(gameStyle: PossibleGameStyle,): this
    private __addGameStyle(gameStyles: readonly PossibleGameStyle[],): this
    private __addGameStyle(gameStyles: | PossibleGameStyle | readonly PossibleGameStyle[],): this {
        if (!(gameStyles instanceof Array))
            return this.__addGameStyle([gameStyles]);
        this.__gameStyles.add(...gameStyles.map(gameStyle => GameStyles.getValue(gameStyle)));

        return this;
    }

    private __setGameStyle(gameStyle: PossibleGameStyle,): this
    private __setGameStyle(gameStyles: readonly PossibleGameStyle[],): this
    private __setGameStyle(gameStyles: readonly PossibleGameStyle[], notGameStyles: readonly PossibleGameStyle[],): this
    private __setGameStyle(gameStyles: | PossibleGameStyle | readonly PossibleGameStyle[], notGameStyles: readonly PossibleGameStyle[] = [],): this {
        if (!(gameStyles instanceof Array))
            return this.__setGameStyle([gameStyles], notGameStyles,);
        this.__gameStyles.clear();
        return this._add(Times.values, gameStyles.filter(gameStyle => !notGameStyles.includes(gameStyle)), [],);
    }


    public setGameStyle(): never
    public setGameStyle(...gameStyles: readonly OriginalGameStyles[]): this
    public setGameStyle(...gameStyles: readonly OriginalGameStyles[]): this {
        return this.__setGameStyle(gameStyles,);
    }

    public setNotGameStyle(): never
    public setNotGameStyle(...gameStyles: readonly OriginalGameStyles[]): this
    public setNotGameStyle(...gameStyles: readonly OriginalGameStyles[]): this {
        return this.__setGameStyle(EditorImageBuilder.#GAME_STYLE_ARRAY, gameStyles,);
    }


    public setAllGameStyles(): this {
        return this.__setGameStyle(EditorImageBuilder.#GAME_STYLE_ARRAY);
    }

    public setOnlySM3DW(): this {
        return this.setGameStyle(OriginalGameStyles.SUPER_MARIO_3D_WORLD,);
    }

    public setNotSM3DW(): this {
        return this.setNotGameStyle(OriginalGameStyles.SUPER_MARIO_3D_WORLD,);
    }

    //endregion -------------------- Game Style --------------------
    //region -------------------- Theme --------------------

    private get __themes(): ExtendedList<Themes> {
        return this.#themes ??= new ExtendedSet();
    }

    protected get _themes(): ExtendedList<Themes> {
        return this.#themes ?? EditorImageBuilder.#EMPTY_SET;
    }

    private __addThemes(theme: PossibleTheme,): this
    private __addThemes(themes: readonly PossibleTheme[],): this
    private __addThemes(themes: PossibleTheme | readonly PossibleTheme[],): this {
        if (!(themes instanceof Array))
            return this.__addThemes([themes]);
        this.__themes.add(...themes.map(theme => Themes.getValue(theme)));
        return this;
    }

    private __setThemes(time: PossibleTime, gameStyle: PossibleGameStyle, themes: readonly PossibleTheme[], notThemes: readonly PossibleTheme[] = [],): this {
        const _themes = themes.map(theme => Themes.getValue(theme));
        const _notThemes = notThemes.map(theme => Themes.getValue(theme));
        this.__themes.clear();
        return this._add([time], [gameStyle], _themes.filter(theme => !_notThemes.includes(theme)),);
    }


    public setTheme(gameStyle: OriginalGameStyles,): never
    public setTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this
    public setTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this {
        return this.__setThemes(Times.DAY, gameStyle, themes,);
    }

    public setNotTheme(gameStyle: OriginalGameStyles,): never
    public setNotTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this
    public setNotTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this {
        return this.__setThemes(Times.DAY, gameStyle, OriginalThemes.courseThemes, themes,);
    }


    public setNightTheme(gameStyle: OriginalGameStyles,): never
    public setNightTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this
    public setNightTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this {
        return this.__setThemes(Times.NIGHT, gameStyle, themes,);
    }

    public setNotNightTheme(gameStyle: OriginalGameStyles,): never
    public setNotNightTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this
    public setNotNightTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this {
        return this.__setThemes(Times.NIGHT, gameStyle, OriginalThemes.courseThemes, themes,);
    }

    //endregion -------------------- Theme --------------------
    //region -------------------- Override images --------------------

    private get __overrideImages(): Map<Times, Map<GameStyles, Map<Themes, PossibleAmountOfImages>>> {
        return this.#overrideMap ??= new Map();
    }

    protected get _overrideImages(): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, PossibleAmountOfImages>>> {
        return this.#overrideMap ?? EMPTY_MAP;
    }

    private __setOverrideImages(number: PossibleAmountOfImages, gameStyle: PossibleGameStyle, theme?: PossibleTheme,): this {
        if (!(gameStyle instanceof GameStyles))
            return this.__setOverrideImages(number, GameStyles.getValue(gameStyle), theme,);
        if (theme != null && !(theme instanceof Themes))
            return this.__setOverrideImages(number, gameStyle, Themes.getValue(theme),);

        const themes = theme == null ? Themes.values : [theme] as const;

        const overrideMap = this.__overrideImages;
        Times.values.forEach(time => {
            if (!overrideMap.has(time))
                overrideMap.set(time, new Map());
            const timeMap = overrideMap.get(time)!;

            if (!timeMap.has(gameStyle))
                timeMap.set(gameStyle, new Map());
            const gameStyleMap = timeMap.get(gameStyle)!;

            themes.forEach(theme => gameStyleMap.set(theme, number,));
        });
        return this;
    }


    public setNumbers(gameStyle: OriginalGameStyles, number: PossibleAmountOfImages,): this
    public setNumbers(gameStyle: OriginalGameStyles, theme: OriginalThemes, number: PossibleAmountOfImages,): this
    public setNumbers(gameStyle: OriginalGameStyles, theme_or_number: | OriginalThemes | PossibleAmountOfImages, number?: PossibleAmountOfImages,): this {
        if (typeof theme_or_number == 'number')
            return this.__setOverrideImages(theme_or_number, gameStyle,);

        if (number == null)
            throw new TypeError(`The 3rd argument in ${this.setNumbers.name} cannot be null when the 2nd argument is a ${OriginalThemes.name}!`);
        return this.__setOverrideImages(number, gameStyle, theme_or_number,);
    }

    //endregion -------------------- Override images --------------------

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Predefined utility methods --------------------

    public setAsGround(): this {
        return this
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.AIRSHIP,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.UNDERWATER, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.SNOW, OriginalThemes.AIRSHIP,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_3D_WORLD, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,);
    }

    public setAsPipe(): this {
        return this.setAmount(4)
            .setAllGameStyles()
            .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,);
    }

    public setAsSemisolidPlatform(): this {
        return this
            .setAmount(3)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW, OriginalThemes.AIRSHIP,)
            .setNumbers(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.AIRSHIP, 2,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.UNDERGROUND, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_3D_WORLD, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNumbers(OriginalGameStyles.SUPER_MARIO_3D_WORLD, 1,);
    }

    public setAsMushroomPlatform(): this {
        return this
            .setAmount(3)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERWATER, OriginalThemes.SNOW, OriginalThemes.AIRSHIP,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.UNDERWATER, OriginalThemes.SNOW, OriginalThemes.AIRSHIP,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.UNDERWATER, OriginalThemes.SNOW, OriginalThemes.AIRSHIP,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.UNDERWATER, OriginalThemes.SNOW, OriginalThemes.AIRSHIP,)
            .setNightTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.SNOW,);
    }

    public setAsBridge(): this {
        return this
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.GROUND, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.SNOW, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.SNOW,);
    }

    public setAsBrickBlock(): this {
        return this
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERGROUND, OriginalThemes.SNOW, OriginalThemes.GHOST_HOUSE, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,);
    }

    public setAsHardBlock(): this {
        return this
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.SNOW, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERGROUND, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.AIRSHIP,)
            .setTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.CASTLE,);
    }

    public setAsQuestionMarkBlock(): this {
        return this
            .setAllGameStyles()
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,);
    }

    public setAsDonutBlock(): this {
        return this
            .setAllGameStyles()
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,);
    }

    public setAsCloudBlock(): this {
        return this
            .setAllGameStyles()
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERWATER,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.UNDERWATER,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.UNDERWATER,);
    }

    public setAsRegularCheepCheep(): this {
        return this
            .setAmount(2)
            .setAllGameStyles()
            .setNumbers(OriginalGameStyles.SUPER_MARIO_WORLD, 2,)
            .setNumbers(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, 2,);
    }

    public setAsDifferentInSMBAndSMB3(): this {
        return this
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERGROUND, OriginalThemes.CASTLE,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.UNDERGROUND, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.GROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.AIRSHIP,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.GROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.AIRSHIP,);

    }

    //endregion -------------------- Predefined utility methods --------------------
    //region -------------------- Build utility methods --------------------

    protected _getImagePath(gameStyle: GameStyles, ending: string = '',) {
        return `${gameStyle.gamePath}${gameStyle.gameAcronym}_Lyt_P_${this.simpleImageName}${ending}.png`;
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
    protected _getAmountBasedOnValue(time: Times, gameStyle: GameStyles, theme: Themes, amountOfImages: PossibleAmountOfImages): readonly ImageNumber[]
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
    protected _getAmountBasedOnValue(time: | Times | null, gameStyle: GameStyles, theme: | Themes | null, amountOfImages: PossibleAmountOfImages): readonly ImageNumber[] {
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
        return [...new Array(amountOfImages)].map((_value, index,) => index as ImageNumber,);
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


    protected _createNewMap(callbackThatReturnNumbers: (time: Times, gameStyle: GameStyles, theme: Themes,) => readonly ImageNumber[]): ReadonlyMap<Times, ReadonlyMap<OriginalGameStyles, ReadonlyMap<OriginalThemes, readonly string[]>>> {
        const returnedMap = new Map<Times, Map<OriginalGameStyles, Map<OriginalThemes, readonly string[]>>>();

        console.log(`-------------------- new map on "${this.simpleImageName}" (start) --------------------`);
        this._selectedMap.forEach((timeMap, time,) => {
            const isNightTheme = time === Times.NIGHT;

            timeMap.forEach((gameStyleMap, gameStyle,) => {
                    const originalGameStyle = gameStyle.parent;

                    gameStyleMap.forEach((isSelected, theme,) => {
                        const originalTheme = theme.parent;

                        if (!isSelected)
                            return;
                        const images = callbackThatReturnNumbers(time, gameStyle, theme,).map(number => this._getImagePath(gameStyle, `${theme.getName('', isNightTheme,)}_0${number}`));
                        if (images.length === 0)
                            return;

                        if (!returnedMap.has(time))
                            returnedMap.set(time, new Map());
                        const timeMap = returnedMap.get(time)!;

                        if (!timeMap.has(originalGameStyle))
                            timeMap.set(originalGameStyle, new Map());
                        const gameStyleMap = timeMap.get(originalGameStyle)!;

                        gameStyleMap.set(originalTheme, images);
                    });
                }
            );
        });
        console.log(`-------------------- new map on "${this.simpleImageName}" (end) --------------------`);

        return returnedMap;
    }

    protected _createImages(): ReadonlyMap<Times, ReadonlyMap<OriginalGameStyles, ReadonlyMap<OriginalThemes, readonly string[]>>> {
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
        return new EditorImageContainer(
            this._createImages(),
            this._createDefaultImages(),
        );
    }

}

//region -------------------- Types --------------------

type PossibleType = | PossibleAmountOfImages | null;
type PossibleDefaultType = | 'ground' | 'power-up' | PossibleAmountOfImages | null;

type PossibleTime = Times;
type PossibleGameStyle = | GameStyles | OriginalGameStyles;
type PossibleTheme = | Themes | OriginalThemes;

//endregion -------------------- Types --------------------
