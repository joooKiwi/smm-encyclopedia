import type {ClassWithEntityEnglishName}              from 'core/ClassWithEnglishName'
import type {EditorImageFile}                         from 'core/entity/file/EditorImageFile'
import type {GenericEditorImageFile}                  from 'core/entity/file/GenericEditorImageFile'
import type {EditorImage}                             from 'core/entity/images/editor/EditorImage'
import type {PossibleAmountOfImages, SimpleImageName} from 'core/entity/images/editor/EditorImage.types'
import type {Builder}                                 from 'util/builder/Builder'
import type {ExtendedList}                            from 'util/extended/ExtendedList'

import {GenericEditorImageFileContainer} from 'core/entity/file/GenericEditorImageFile.container'
import {AbstractImageBuilder}            from 'core/entity/images/AbstractImage.builder'
import {EditorImageContainer}            from 'core/entity/images/editor/EditorImage.container'
import {GameStyles}                      from 'core/gameStyle/GameStyles'
import {Themes}                          from 'core/theme/Themes'
import {Times}                           from 'core/time/Times'
import {ExtendedSetContainer}            from 'util/extended/ExtendedSet.container'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3,} = GameStyles
const {GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,} = Themes
const {DAY, NIGHT,} = Times

//endregion -------------------- Import from deconstruction --------------------

export abstract class AbstractEditorImageBuilder<NAME extends NonNullable<SimpleImageName> = NonNullable<SimpleImageName>, >
    extends AbstractImageBuilder<NAME, PossibleAmountOfImages>
    implements Builder<EditorImage> {

    //region -------------------- Fields --------------------

    readonly #entity

    #times?: ExtendedList<Times>
    #themes?: ExtendedList<Themes>

    readonly #selectedMap: Map<Times, Map<GameStyles, Map<Themes, boolean>>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    /**
     * <p>
     *  Create a new {@link Image} with every possible images
     *  associated to every {@link GameStyles Game style}.
     * </p>
     * <p>
     *  If the method {@link setAsSnow} is called,
     *  then only 1 image will be created for each {@link GameStyles Game style} used.
     *  One with `${NAME}_snow_00.png`.
     * </p>
     * <p>
     *  Otherwise, it will depend on the amount of images (by default 1),
     *  the themes associated to any {@link GameStyles Game style} used.
     *  And the {@link GameStyles Game style} themselves (all by default).
     * </p>
     *
     * @param entity the class with the {@link PossibleEnglishName entity name}
     * @param simpleImageName the basic name
     */

    // protected constructor(simpleImageName: NAME,)
    /**
     * Create a new {@link Image} with only 1 image per {@link GameStyles Game style}.
     *
     * The method {@link setAsSnow} can be called to create an image from a specific image number.
     *
     * @param entity the class with the {@link PossibleEnglishName entity name}
     * @param simpleImageName the basic name
     * @param imageNumber the image number (from 1 to 4)
     */
    // protected constructor(simpleImageName: NAME, imageNumber: PossibleAmountOfImages,)
    protected constructor(entity: ClassWithEntityEnglishName, simpleImageName: NAME, imageNumber?: PossibleAmountOfImages,) {
        super(simpleImageName, imageNumber,)

        this.#entity = entity
        this.#selectedMap = new Map(Times.values.map(time => [time,
            new Map(GameStyles.values.map(gameStyle => [gameStyle,
                new Map(Themes.courseThemes.map(theme => [theme, false,
                ])),
            ])),
        ]))
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    protected get _entity(): ClassWithEntityEnglishName {
        return this.#entity
    }

    //region -------------------- Selected map --------------------

    protected get _selectedMap(): Map<Times, Map<GameStyles, Map<Themes, boolean>>> {
        return this.#selectedMap
    }

    public get selectedMap(): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, boolean>>> {
        return this.#selectedMap
    }

    protected _add(times: readonly Times[], gameStyles: readonly GameStyles[], themes: readonly Themes[],): this {
        const map = this._selectedMap

        times.forEach(time =>
            gameStyles.forEach(gameStyle =>
                themes.forEach(theme =>
                    map.get(time)!.get(gameStyle)!.set(theme, true,))
            )
        )
        return this.#addTimes(times)._addGameStyle(gameStyles).#addThemes(themes)
    }

    //endregion -------------------- Selected map --------------------
    //region -------------------- Time --------------------

    private get __times(): ExtendedList<Times> {
        return this.#times ??= new ExtendedSetContainer()
    }

    protected get _times(): ExtendedList<Times> {
        return this.#times ?? ExtendedSetContainer.EMPTY
    }

    #addTimes(time: Times,): this
    #addTimes(times: readonly Times[],): this
    #addTimes(times: | Times | readonly Times[],): this {
        if (!(times instanceof Array))
            return this.#addTimes([times,],)
        this.__times.add(...times,)
        return this
    }

    //endregion -------------------- Time --------------------
    //region -------------------- Game Style --------------------

    protected override _setGameStyle(gameStyle: GameStyles,): this
    protected override _setGameStyle(gameStyles: readonly GameStyles[],): this
    protected override _setGameStyle(gameStyles: readonly GameStyles[], notGameStyles: readonly GameStyles[],): this
    protected override _setGameStyle(gameStyles: | GameStyles | readonly GameStyles[], notGameStyles?: readonly GameStyles[],): this
    protected override _setGameStyle(gameStyles: | GameStyles | readonly GameStyles[], notGameStyles: readonly GameStyles[] = [],): this {
        if (!(gameStyles instanceof Array))
            return this._setGameStyle([gameStyles], notGameStyles,)

        return this._clearGameStyle()
            ._add(Times.values.toArray(), gameStyles.filter(gameStyle => !notGameStyles.includes(gameStyle)), [],)
    }

    //endregion -------------------- Game Style --------------------
    //region -------------------- Theme --------------------

    private get __themes(): ExtendedList<Themes> {
        return this.#themes ??= new ExtendedSetContainer()
    }

    protected get _themes(): ExtendedList<Themes> {
        return this.#themes ?? ExtendedSetContainer.EMPTY
    }

    #addThemes(theme: Themes,): this
    #addThemes(themes: readonly Themes[],): this
    #addThemes(themes: Themes | readonly Themes[],): this {
        if (!(themes instanceof Array))
            return this.#addThemes([themes])
        this.__themes.add(...themes.map(theme => Themes.getValue(theme)))
        return this
    }

    #setThemes(time: Times, gameStyle: GameStyles, themes: readonly Themes[], notThemes: readonly Themes[] = [],): this {
        this.__themes.clear()
        return this._add([time], [gameStyle], themes.filter(theme => !notThemes.includes(theme)),)
    }


    public setTheme(gameStyle: GameStyles,): never
    public setTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this
    public setTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        return this.#setThemes(DAY, gameStyle, themes,)
    }

    public setNotTheme(gameStyle: GameStyles,): never
    public setNotTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this
    public setNotTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        return this.#setThemes(DAY, gameStyle, Themes.courseThemes, themes,)
    }


    public setNightTheme(gameStyle: GameStyles,): never
    public setNightTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this
    public setNightTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        return this.#setThemes(NIGHT, gameStyle, themes,)
    }

    public setNotNightTheme(gameStyle: GameStyles,): never
    public setNotNightTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this
    public setNotNightTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        return this.#setThemes(NIGHT, gameStyle, Themes.courseThemes, themes,)
    }

    //endregion -------------------- Theme --------------------

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Predefined utility methods --------------------

    public setAsDifferentInSMBAndSMB3(): this {
        return this
            .setTheme(SUPER_MARIO_BROS, UNDERGROUND, GHOST_HOUSE, CASTLE,)
            .setTheme(SUPER_MARIO_BROS_3, UNDERGROUND, GHOST_HOUSE, CASTLE,)
            .setNightTheme(SUPER_MARIO_BROS, GROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, AIRSHIP,)
            .setNightTheme(SUPER_MARIO_BROS_3, GROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, AIRSHIP,)
    }

    //endregion -------------------- Predefined utility methods --------------------
    //region -------------------- Build utility methods --------------------

    #getTime(value: | Times | boolean,): Times {
        return value instanceof Times
            ? value
            : value ? DAY : NIGHT
    }

    protected _createImageFile(gameStyle: GameStyles, theme: Nullable<Themes>, time: | Times | boolean, imageNumber: PossibleAmountOfImages,): GenericEditorImageFile {
        // @ts-ignore
        return new GenericEditorImageFileContainer(
            gameStyle,
            theme,
            this.#getTime(time),
            this._entity,
            this.simpleImageName,
            imageNumber,
        )
    }

    protected abstract _createDefaultImages(): ReadonlyMap<GameStyles, readonly EditorImageFile[]>

    protected _createNewMap(callbackThatReturnNumbers: (time: Times, gameStyle: GameStyles, theme: Themes,) => readonly PossibleAmountOfImages[],): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly EditorImageFile[]>>> {
        const returnedMap = new Map<Times, Map<GameStyles, Map<Themes, readonly EditorImageFile[]>>>()

        this._selectedMap.forEach((timeMap, time,) => timeMap.forEach((gameStyleMap, gameStyle,) => gameStyleMap.forEach((isSelected, theme,) => {
            if (!isSelected)
                return
            const images = callbackThatReturnNumbers(time, gameStyle, theme,).map(number => this._createImageFile(gameStyle, theme, time, number,))
            if (images.length === 0)
                return

            if (!returnedMap.has(time))
                returnedMap.set(time, new Map())
            const timeMap = returnedMap.get(time)!

            if (!timeMap.has(gameStyle))
                timeMap.set(gameStyle, new Map())
            const gameStyleMap = timeMap.get(gameStyle)!

            gameStyleMap.set(theme, images)
        })))

        return returnedMap
    }

    protected abstract _createImages(): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly EditorImageFile[]>>>

    //endregion -------------------- Build utility methods --------------------

    public build(): EditorImage {
        return new EditorImageContainer(this._createImages(), this._createDefaultImages(),)
    }

}
