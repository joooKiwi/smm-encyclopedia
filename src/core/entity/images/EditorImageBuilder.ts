import type {Builder}                                                                  from '../../../util/Builder';
import type {EditorImage}                                                              from './EditorImage';
import type {AmountOfImages, ImageNumber, SimpleImageName, VariantEditorImage_PowerUp} from './EditorImage.types';

import {EditorImageContainer}             from './EditorImageContainer';
import {EMPTY_ARRAY}                      from '../../../util/emptyVariables';
import {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles';
import {GameStyles}                       from './GameStyles';
import {Themes as OriginalThemes}         from '../../theme/Themes';
import {Themes}                           from './Themes';
import {Times}                            from '../../time/Times';

export class EditorImageBuilder<NAME extends Exclude<SimpleImageName, null> = Exclude<SimpleImageName, null>, IMAGE_NUMBER extends | ImageNumber | null = null, >
    implements Builder<EditorImage> {

    //region -------------------- Attributes --------------------

    static readonly #EMPTY_GAME_STYLE_MAP = new Map(OriginalGameStyles.values.map(gameStyle => [gameStyle, EMPTY_ARRAY,]));
    static readonly #POWER_UP_ENDING: `${VariantEditorImage_PowerUp}_00` = 'Uni_00';

    readonly #simpleImageName;
    readonly #imageNumber: IMAGE_NUMBER;
    #amount: AmountOfImages;
    #isPowerUp: boolean;
    #hasADefaultImage: boolean;
    #nightThemes?: Map<OriginalGameStyles, readonly OriginalThemes[]>;
    #themes?: Map<OriginalGameStyles, readonly OriginalThemes[]>;
    #gameStyles?: readonly OriginalGameStyles[];

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
    public constructor(simpleImageName: NAME, imageNumber: NonNullable<IMAGE_NUMBER>,)
    public constructor(simpleImageName: | NAME | null, imageNumber: IMAGE_NUMBER = null as IMAGE_NUMBER,) {
        if (simpleImageName == null)
            throw new TypeError('The image name cannot be null');
        this.#simpleImageName = simpleImageName;
        this.#imageNumber = imageNumber;
        this.#amount = 1;
        this.#isPowerUp = false;
        this.#hasADefaultImage = true;
    }

    //region -------------------- Getter & setter methods --------------------

    public get simpleImageName(): NAME {
        return this.#simpleImageName!;
    }

    public get imageNumber(): IMAGE_NUMBER {
        return this.#imageNumber;
    }


    //region -------------------- Amount --------------------

    protected get _amount(): AmountOfImages {
        return this.#amount;
    }

    /**
     * Set the amount of images at the ending of the image name.
     *
     * @param amount the total amount (excluding the game styles) of possible images
     */
    public setAmount(amount: AmountOfImages,): this {
        this.#amount = amount;
        return this;
    }

    //endregion -------------------- Amount --------------------
    //region -------------------- Has a default image --------------------

    protected get _hasADefaultImage(): boolean {
        return this.#hasADefaultImage;
    }

    public hasDefaultImage(value: boolean,): this {
        this.#hasADefaultImage = value;
        return this;
    }

    //endregion -------------------- Has a default image --------------------
    //region -------------------- Theme (Day / Night) --------------------

    private get __themes(): Map<OriginalGameStyles, readonly OriginalThemes[]> {
        return this.#themes ??= new Map();
    }

    protected get _themes(): ReadonlyMap<OriginalGameStyles, readonly OriginalThemes[]> {
        return this.__themes;
    }

    private __setThemes(gameStyle: OriginalGameStyles, themes: readonly OriginalThemes[], notThemes: readonly OriginalThemes[] = [],): this {
        this.__themes.set(gameStyle, themes.filter(theme => !notThemes.includes(theme)),);
        return this;
    }


    private get __nightThemes(): Map<OriginalGameStyles, readonly OriginalThemes[]> {
        return this.#nightThemes ??= new Map();
    }

    protected get _nightThemes(): ReadonlyMap<OriginalGameStyles, readonly OriginalThemes[]> {
        return this.__nightThemes;
    }

    private __setNightThemes(gameStyle: OriginalGameStyles, themes: readonly OriginalThemes[], notThemes: readonly OriginalThemes[] = [],): this {
        this.__nightThemes.set(gameStyle, themes.filter(theme => !notThemes.includes(theme)),);
        return this;
    }

    //endregion -------------------- Theme (Day / Night) --------------------
    //region -------------------- Game Style --------------------

    protected get _gameStyles(): readonly OriginalGameStyles[] {
        if (this.#gameStyles == null) {
            const gameStylesFromThemes = [...new Set([...this._themes.keys(), ...this._nightThemes.keys(),])];

            this.#gameStyles = gameStylesFromThemes.length === 0 ? GameStyles.values : gameStylesFromThemes;
        }
        return this.#gameStyles;
    }

    private set __gameStyles(value: readonly OriginalGameStyles[],) {
        this.#gameStyles = value;
    }

    private __setGameStyles(gameStyles: readonly OriginalGameStyles[], notGameStyles: readonly OriginalGameStyles[] = [],): this {
        this.__gameStyles = gameStyles.filter(gameStyle => !notGameStyles.includes(gameStyle));
        return this;
    }

    //endregion -------------------- Game Style --------------------

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Utility methods --------------------

    public setAsPowerUp(): this {
        this.#isPowerUp = true;
        return this;
    }

    //region -------------------- Theme --------------------

    public setTheme(gameStyle: OriginalGameStyles,): never
    public setTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this
    public setTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this {
        return this.__setThemes(gameStyle, themes,);
    }

    public setNotTheme(gameStyle: OriginalGameStyles,): never
    public setNotTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this
    public setNotTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this {
        return this.__setThemes(gameStyle, OriginalThemes.courseThemes, themes,);
    }

    public setNightTheme(gameStyle: OriginalGameStyles,): never
    public setNightTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this
    public setNightTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this {
        return this.__setNightThemes(gameStyle, themes,);
    }

    public setNotNightTheme(gameStyle: OriginalGameStyles,): never
    public setNotNightTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this
    public setNotNightTheme(gameStyle: OriginalGameStyles, ...themes: readonly OriginalThemes[]): this {
        return this.__setNightThemes(gameStyle, OriginalThemes.courseThemes, themes,);
    }

    //endregion -------------------- Theme --------------------
    //region -------------------- Game style --------------------

    public setGameStyle(): never
    public setGameStyle(...gameStyles: readonly OriginalGameStyles[]): this
    public setGameStyle(...gameStyles: readonly OriginalGameStyles[]): this {
        return this.__setGameStyles(gameStyles,);
    }

    public setNotGameStyle(): never
    public setNotGameStyle(...gameStyles: readonly OriginalGameStyles[]): this
    public setNotGameStyle(...gameStyles: readonly OriginalGameStyles[]): this {
        return this.__setGameStyles(OriginalGameStyles.values, gameStyles,);
    }

    //endregion -------------------- Game style --------------------

    //endregion -------------------- Utility methods --------------------
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
            .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,);
    }

    public setAsSemisolidPlatform(): this {
        return this
            .setAmount(3)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW, OriginalThemes.AIRSHIP/*2*/,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.UNDERGROUND, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,)
            .setNightTheme(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_3D_WORLD, OriginalThemes.UNDERGROUND, OriginalThemes.UNDERWATER, OriginalThemes.DESERT, OriginalThemes.SNOW, OriginalThemes.SKY, OriginalThemes.FOREST, OriginalThemes.GHOST_HOUSE, OriginalThemes.AIRSHIP, OriginalThemes.CASTLE,);
        //TODO add setImage(theme, imageNumber,)
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
        //TODO add setNotTheme
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
        //TODO add setNotTheme
    }

    public setAsQuestionMarkBlock(): this {
        return this
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,);
    }

    public setAsDonutBlock(): this {
        return this
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,);
    }

    public setAsCloudBlock(): this {
        return this
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.UNDERWATER,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.UNDERWATER,)
            .setNightTheme(OriginalGameStyles.SUPER_MARIO_BROS_3, OriginalThemes.SNOW,)
            .setTheme(OriginalGameStyles.SUPER_MARIO_WORLD, OriginalThemes.UNDERWATER,);
    }

    public setOnlySM3DW(): this {
        return this.setGameStyle(OriginalGameStyles.SUPER_MARIO_3D_WORLD,);
    }

    public setNotSM3DW(): this {
        return this.setNotGameStyle(OriginalGameStyles.SUPER_MARIO_3D_WORLD,);
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

    protected _getImagePath<ENDING extends string, >(gameStyle: GameStyles, ending: ENDING,) {
        return `${gameStyle.gamePath}${gameStyle.gameAcronym}_Lyt_P_${this.simpleImageName}${ending}.png` as const;
    }

    protected _getDefaultImagePaths(): ReadonlyMap<OriginalGameStyles, readonly string[]> {
        if (!this.#hasADefaultImage)
            return EditorImageBuilder.#EMPTY_GAME_STYLE_MAP;

        const gameStyles = this._gameStyles.map(gameStyle => GameStyles.getValue(gameStyle));
        if (this.#isPowerUp)
            return new Map(gameStyles.map(gameStyle => [gameStyle.parent, [this._getImagePath(gameStyle, '_00',), this._getImagePath(gameStyle, EditorImageBuilder.#POWER_UP_ENDING),],] as const));

        const imageNumber = this.imageNumber;
        if (imageNumber != null)
            return new Map(gameStyles.map(gameStyle => [
                gameStyle.parent,
                [this._getImagePath(gameStyle, `_0${imageNumber! - 1}`),],
            ]));

        const templateArrayBasedOnAmount = [...new Array(this._amount),];
        return new Map(gameStyles.map(gameStyle => [
            gameStyle.parent,
            templateArrayBasedOnAmount.map((_value, index,) => this._getImagePath(gameStyle, `_0${index}`)),
        ]));
    }

    protected _getImagePathOn(gameStyle: GameStyles, themes: readonly Themes[], isNightTheme: boolean,): readonly [OriginalThemes, readonly string[]][]
    protected _getImagePathOn(gameStyle: GameStyles, themes: readonly Themes[], isNightTheme: boolean,): readonly [OriginalThemes, readonly string[]][] {
        if (this.#isPowerUp)
            return EMPTY_ARRAY;

        const imageNumber = this.imageNumber;

        if (imageNumber != null)
            return themes.map(theme => [
                theme.parent,
                [this._getImagePath(gameStyle, `${theme.getName('', isNightTheme,)}_0${imageNumber! - 1}`,),],
            ]);

        const templateArrayBasedOnAmount = [...new Array(this._amount),];
        return themes.map(theme => [
            theme.parent,
            templateArrayBasedOnAmount.map((_value, index,) => {
                return this._getImagePath(gameStyle, `${theme.getName('', isNightTheme,)}_0${index}`,);
            }),
        ]);

    }

    //endregion -------------------- Build utility methods --------------------

    public build(): EditorImage {
        const map = new Map<Times, Map<OriginalGameStyles, Map<OriginalThemes, readonly string[]>>>();
        const themes = [...this._themes].map(([gameStyle, themes,]) => [GameStyles.getValue(gameStyle), themes.map(theme => Themes.getValue(theme)),] as const);
        const nightThemes = [...this._nightThemes].map(([gameStyle, themes,]) => [GameStyles.getValue(gameStyle), themes.map(theme => Themes.getValue(theme)),] as const);

        map.set(Times.DAY, new Map(themes.map(([gameStyle, themes,]) => [gameStyle.parent, new Map(this._getImagePathOn(gameStyle, themes, false,)),] as const)));
        map.set(Times.NIGHT, new Map(nightThemes.map(([gameStyle, themes,]) => [gameStyle.parent, new Map(this._getImagePathOn(gameStyle, themes, true,)),] as const)));
        return new EditorImageContainer(map, this._getDefaultImagePaths(),);
    }

}
