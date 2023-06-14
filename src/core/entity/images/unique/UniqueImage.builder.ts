import type {ClearConditionImageFile} from 'core/entity/file/ClearConditionImageFile'
import type {EditorImageFile}         from 'core/entity/file/EditorImageFile'
import type {EntityImageFile}         from 'core/entity/file/EntityImageFile'
import type {InGameImageFile}         from 'core/entity/file/InGameImageFile'
import type {ClearConditionImage}     from 'core/entity/images/clearCondition/ClearConditionImage'
import type {EditorImage}             from 'core/entity/images/editor/EditorImage'
import type {InGameImage}             from 'core/entity/images/inGame/InGameImage'
import type {UniqueImage}             from 'core/entity/images/unique/UniqueImage'
import type {Builder}                 from 'util/builder/Builder'
import type {Nullable, NullOr}        from 'util/types/nullable'

import {ClearConditionImageFactory} from 'core/entity/images/clearCondition/ClearConditionImage.factory'
import {EditorImageFactory}         from 'core/entity/images/editor/EditorImage.factory'
import {InGameImageFactory}         from 'core/entity/images/inGame/InGameImage.factory'
import {UniqueImageContainer}       from 'core/entity/images/unique/UniqueImage.container'
import {GameStyles}                 from 'core/gameStyle/GameStyles'
import {Themes}                     from 'core/theme/Themes'
import {Times}                      from 'core/time/Times'
import {EMPTY_ARRAY, EMPTY_MAP}     from 'util/emptyVariables'
import {assert}                     from 'util/utilitiesMethods'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD,} = GameStyles
const {GROUND,} = Themes

//endregion -------------------- Import from deconstruction --------------------

export class UniqueImageBuilder
    implements Builder<UniqueImage> {

    //region -------------------- Fields --------------------

    #editorImage?: EditorImage
    #clearConditionImage?: ClearConditionImage
    #inGameImage?: InGameImage

    #referenceType?: NullOr<ReferenceType>

    #gameStyles?: GameStyles[]
    #themes?: Map<GameStyles, readonly Themes[]>

    //endregion -------------------- Fields --------------------

    //region -------------------- Getter methods --------------------

    private get __editorImage(): NullOr<EditorImage> {
        return this.#editorImage ?? null
    }

    private get __clearConditionImage(): NullOr<ClearConditionImage> {
        return this.#clearConditionImage ?? null
    }

    private get __inGameImage(): NullOr<InGameImage> {
        return this.#inGameImage ?? null
    }


    public get referenceType(): NullOr<ReferenceType> {
        return this.__referenceType
    }

    private get __referenceType(): NullOr<ReferenceType> {
        return this.#referenceType ?? null
    }

    private set __referenceType(value: Nullable<ReferenceType>,) {
        this.#referenceType = value ?? null
    }


    private get __gameStyles(): GameStyles[] {
        return this.#gameStyles ??= []
    }

    private set __gameStyles(value: readonly GameStyles[]) {
        this.#gameStyles = [...value,]
    }

    protected get _gameStyles(): readonly GameStyles[] {
        return this.#gameStyles ?? GameStyles.values.toArray()
    }


    private get __themes(): ReadonlyMap<GameStyles, readonly Themes[]> {
        return this.#themes ?? new Map(this._gameStyles.map(gameStyle => [gameStyle, Themes.courseThemes,]))
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public setEditor(image: EditorImage,): this {
        this.#editorImage = image
        return this
    }

    public setClearCondition(image: ClearConditionImage,): this {
        this.#clearConditionImage = image
        return this
    }

    public setWhilePlaying(image: InGameImage,): this {
        this.#inGameImage = image
        return this
    }


    private __forceType(type: ReferenceType,) {
        this.__referenceType = type
        return this
    }

    public forceEditor(): this {
        return this.__forceType('editor')
    }

    public forceClearCondition(): this {
        return this.__forceType('clear condition')
    }

    public forcePlay(): this {
        return this.__forceType('play')
    }


    public __addGameStyle(gameStyle: readonly GameStyles[]): this {
        const array = this.__gameStyles
        gameStyle.filter(gameStyle => !array.includes(gameStyle)).forEach(gameStyle => array.push(gameStyle))
        return this
    }

    public addGameStyle(...gameStyle: readonly GameStyles[]): this {
        return this.__addGameStyle(gameStyle)
    }

    public setGameStyle(...gameStyle: readonly GameStyles[]): this {
        this.__gameStyles = gameStyle
        return this
    }

    public setTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        (this.#themes ??= new Map()).set(gameStyle, themes,)
        return this
    }


    public __setOnGameStyleAnd(gameStyle: GameStyles, themes: readonly Themes[]): this {
        return this.setTheme(gameStyle, ...themes,)
    }

    public setOnGameStyleAnd(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        return this.addGameStyle(gameStyle).__setOnGameStyleAnd(gameStyle, themes,)
    }

    public setOnSMBAnd(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(SUPER_MARIO_BROS, themes,)
    }

    public setOnSMB3And(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(SUPER_MARIO_BROS_3, themes,)
    }

    public setOnSMWAnd(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(SUPER_MARIO_WORLD, themes,)
    }

    public setOnNSMBUAnd(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(NEW_SUPER_MARIO_BROS_U, themes,)
    }

    public setOnSM3DWAnd(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(SUPER_MARIO_3D_WORLD, themes,)
    }


    private __setToOnlyGameStyleAnd(gameStyle: GameStyles, themes: readonly Themes[]): this {
        return this.setGameStyle(gameStyle,)
            .setTheme(gameStyle, ...themes,)
    }

    public setToOnlyGameStyleAnd(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(gameStyle, themes,)
    }

    public setToOnlySMBAnd(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(SUPER_MARIO_BROS, themes,)
    }

    public setToOnlySMB3And(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(SUPER_MARIO_BROS_3, themes,)
    }

    public setToOnlySMWAnd(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(SUPER_MARIO_WORLD, themes,)
    }

    public setToOnlyNSMBUAnd(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(NEW_SUPER_MARIO_BROS_U, themes,)
    }

    public setToOnlySM3DWAnd(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(SUPER_MARIO_3D_WORLD, themes,)
    }


    public setOnGameStyleAndAllThemes(gameStyle: GameStyles,): this {
        return this.__setOnGameStyleAnd(gameStyle, Themes.courseThemes,)
    }

    public setOnSMBAndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(SUPER_MARIO_BROS,)
    }

    public setOnSMB3AndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(SUPER_MARIO_BROS_3,)
    }

    public setOnSMWAndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(SUPER_MARIO_WORLD,)
    }

    public setOnNSMBUAndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(NEW_SUPER_MARIO_BROS_U,)
    }

    public setOnSM3DWAndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(SUPER_MARIO_3D_WORLD,)
    }


    public setToOnlyGameStyleAndAllThemes(gameStyle: GameStyles,): this {
        return this.__setToOnlyGameStyleAnd(gameStyle, Themes.courseThemes,)
    }

    public setToOnlySMBAndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(SUPER_MARIO_BROS,)
    }

    public setToOnlySMB3AndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(SUPER_MARIO_BROS_3,)
    }

    public setToOnlySMWAndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(SUPER_MARIO_WORLD,)
    }

    public setToOnlyNSMBUAndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(NEW_SUPER_MARIO_BROS_U,)
    }

    public setToOnlySM3DWAndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(SUPER_MARIO_3D_WORLD,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Builder helper methods --------------------

    #createEditorImageMap(image: EditorImage,): ReadonlyMap<GameStyles, readonly EditorImageFile[]> {
        const themes = this.__themes,
            times = Times.values.toArray()

        return new Map(this._gameStyles.map(gameStyle => [gameStyle,
            (themes.get(gameStyle) ?? EMPTY_ARRAY).map(theme =>
                times.map(time =>
                    image.get(true, gameStyle, theme, time,))).flat(2),
        ]))
    }

    #createClearConditionImageMap(image: ClearConditionImage,): ReadonlyMap<GameStyles, readonly ClearConditionImageFile[]> {
        return new Map(
            this._gameStyles.map(gameStyle => [gameStyle, image.get(gameStyle),] as const)
                .filter(([, images,]) => images.length !== 0)
        )
    }

    #createInGameImageMap(image: InGameImage,): ReadonlyMap<GameStyles, readonly InGameImageFile[]> {
        return new Map(
            this._gameStyles.map(gameStyle => [gameStyle, image.get(false, gameStyle, GROUND,),] as const)
                .filter(([, images,]) => images.length !== 0)
        )
    }

    #createMap(editorImage: Nullable<EditorImage>, clearConditionImage: Nullable<ClearConditionImage>, inGameImage: Nullable<InGameImage>,): ReadonlyMap<GameStyles, readonly EntityImageFile[]> {
        const type = this.__referenceType

        if (type === 'editor' || (editorImage != null && clearConditionImage == null && inGameImage == null)) {
            assert(editorImage != null, 'The editor image cannot be null when being forced.',)
            return this.#createEditorImageMap(editorImage)
        } else if (type === 'clear condition' || (editorImage == null && clearConditionImage != null && inGameImage == null)) {
            assert(clearConditionImage != null, 'The "clear condition" image cannot be null when being forced.',)
            return this.#createClearConditionImageMap(clearConditionImage)
        } else if (type === 'play' || (editorImage == null && clearConditionImage == null && inGameImage != null)) {
            assert(inGameImage != null, 'The "in game" image cannot be null when being forced.',)
            return this.#createInGameImageMap(inGameImage)
        }

        assert(true, `More than one image is being set, the builder cannot determine between (${editorImage == null ? '' : 'editor,'}${clearConditionImage == null ? '' : 'clear condition,'}${inGameImage == null ? '' : 'in game,'})`,)
        return EMPTY_MAP
    }

    //endregion -------------------- Builder helper methods --------------------

    public build(): UniqueImage {
        const editorImage = this.__editorImage
        const clearConditionImage = this.__clearConditionImage
        const inGameImage = this.__inGameImage
        const map = this.#createMap(editorImage, clearConditionImage, inGameImage,)

        return new UniqueImageContainer(
            editorImage ?? EditorImageFactory.EMPTY_EDITOR_IMAGE,
            clearConditionImage ?? ClearConditionImageFactory.EMPTY_CLEAR_CONDITION_IMAGE,
            inGameImage ?? InGameImageFactory.EMPTY_IN_GAME_IMAGE,
            map.size === 0 ? EMPTY_MAP : map,
        )
    }

}

type ReferenceType = | 'editor' | 'clear condition' | 'play'
